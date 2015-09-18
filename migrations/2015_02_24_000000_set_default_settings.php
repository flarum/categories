<?php
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Migrations\Tags;

use Flarum\Migrations\Migration;

class SetDefaultSettings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $this->settings->set('tags.max_primary_tags', '1');
        $this->settings->set('tags.min_primary_tags', '1');
        $this->settings->set('tags.max_secondary_tags', '3');
        $this->settings->set('tags.min_secondary_tags', '0');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $this->settings->delete('tags.max_primary_tags');
        $this->settings->delete('tags.max_secondary_tags');
        $this->settings->delete('tags.min_primary_tags');
        $this->settings->delete('tags.min_secondary_tags');
    }
}
