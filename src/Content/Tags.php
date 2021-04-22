<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tags\Content;

use Flarum\Api\Client;
use Flarum\Frontend\Document;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Tags\Api\Controller\ListTagsController;
use Flarum\Tags\TagRepository;
use Flarum\User\User;
use Symfony\Contracts\Translation\TranslatorInterface;
use Illuminate\Contracts\View\Factory;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;

class Tags
{
    /**
     * @var Client
     */
    protected $api;

    /**
     * @var Factory
     */
    protected $view;

    /**
     * @var TagRepository
     */
    protected $tags;

    /**
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @param Client $api
     * @param Factory $view
     * @param TagRepository $tags
     * @param TranslatorInterface $translator
     * @param SettingsRepositoryInterface $settings
     * @param UrlGenerator $url
     */
    public function __construct(
        Client $api,
        Factory $view,
        TagRepository $tags,
        TranslatorInterface $translator,
        SettingsRepositoryInterface $settings,
        UrlGenerator $url
    ) {
        $this->api = $api;
        $this->view = $view;
        $this->tags = $tags;
        $this->settings = $settings;
        $this->translator = $translator;
        $this->url = $url;
    }

    public function __invoke(Document $document, Request $request)
    {
        $apiDocument = $this->getTagsDocument($request->getAttribute('actor'));
        $tags = collect(Arr::get($apiDocument, 'data', []));

        $childTags = $tags->where('attributes.isChild', true);
        $primaryTags = $tags->where('attributes.isChild', false)->where('attributes.position', '!==', null)->sortBy('attributes.position');
        $secondaryTags = $tags->where('attributes.isChild', false)->where('attributes.position', '===', null)->sortBy('attributes.name');
        $defaultRoute = $this->settings->get('default_route');

        $children = $primaryTags->mapWithKeys(function ($tag) use ($childTags) {
            $id = Arr::get($tag, 'id');

            return [
                $id => $childTags->where('relationships.parent.data.id', $id)->pluck('attributes')->sortBy('position')
            ];
        });

        $document->title = $this->translator->trans('flarum-tags.forum.all_tags.meta_title_text');
        $document->meta['description'] = $this->translator->trans('flarum-tags.forum.all_tags.meta_description_text');
        $document->content = $this->view->make('tags::frontend.content.tags', compact('primaryTags', 'secondaryTags', 'children'));
        $document->canonicalUrl = $this->url->to('forum')->base().($defaultRoute === '/tags' ? '' : $request->getUri()->getPath());
        $document->payload['apiDocument'] = $apiDocument;

        return $document;
    }

    private function getTagsDocument(User $actor)
    {
        return json_decode($this->api->send(ListTagsController::class, $actor, [
            'include' => 'parent,children,lastPostedDiscussion'
        ])->getBody(), true);
    }
}
