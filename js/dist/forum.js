module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=47)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,n){"use strict";function s(t){return t.slice(0).sort(function(t,e){var n=t.position(),s=e.position();if(null===n&&null===s)return e.discussionCount()-t.discussionCount();if(null===s)return-1;if(null===n)return 1;var a=t.parent(),o=e.parent();return a===o?n-s:a&&o?a.position()-o.position():a?a===e?1:a.position()-s:o?o===t?-1:n-o.position():0})}n.d(e,"a",function(){return s})},function(t,e,n){"use strict";function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",function(){return s})},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var s=n(10),a=n.n(s);function o(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var n=a()(e,"link");if(t){var s=t.color();s&&(e.style.backgroundColor=e.style.color=s,e.className+=" colored"),n&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()}),e.config=m.route)}else e.className+=" untagged";return m(n?"a":"span",e,m("span",{className:"TagLabel-text"},t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text")))}},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e,n){"use strict";function s(t,e){return void 0===e&&(e={}),e.className="icon TagIcon "+(e.className||""),t?(e.style=e.style||{},e.style.backgroundColor=t.color()):e.className+=" untagged",m("span",e)}n.d(e,"a",function(){return s})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n(10),a=n.n(s),o=n(4),r=n(2);function i(t,e){void 0===e&&(e={});var n=[],s=a()(e,"link");return e.className="TagsLabel "+(e.className||""),t?Object(r.a)(t).forEach(function(e){(e||1===t.length)&&n.push(Object(o.a)(e,{link:s}))}):n.push(Object(o.a)()),m("span",e,n)}},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,n){"use strict";n.d(e,"a",function(){return l});var s=n(3),a=n(0),o=n.n(a),r=n(14),i=n.n(r),c=n(15),u=n.n(c),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(s.a)(e,t),e}(i()(o.a,{name:o.a.attribute("name"),slug:o.a.attribute("slug"),description:o.a.attribute("description"),color:o.a.attribute("color"),backgroundUrl:o.a.attribute("backgroundUrl"),backgroundMode:o.a.attribute("backgroundMode"),position:o.a.attribute("position"),parent:o.a.hasOne("parent"),defaultSort:o.a.attribute("defaultSort"),isChild:o.a.attribute("isChild"),isHidden:o.a.attribute("isHidden"),discussionCount:o.a.attribute("discussionCount"),lastPostedAt:o.a.attribute("lastPostedAt",o.a.transformDate),lastPostedDiscussion:o.a.hasOne("lastPostedDiscussion"),isRestricted:o.a.attribute("isRestricted"),canStartDiscussion:o.a.attribute("canStartDiscussion"),canAddToDiscussion:o.a.attribute("canAddToDiscussion"),isPrimary:u()("position","parent",function(t,e){return null!==t&&!1===e})}))},function(t,e){t.exports=flarum.core.compat["utils/extract"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,n){"use strict";var s=n(2),a=n(9),o=n(7),r=n(6),i=n(4);e.a={"tags/utils/sortTags":s.a,"tags/models/Tag":a.a,"tags/helpers/tagsLabel":o.a,"tags/helpers/tagIcon":r.a,"tags/helpers/tagLabel":i.a}},function(t,e){t.exports=flarum.core},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e,n){"use strict";var s=n(0),a=n.n(s),o=n(22),r=n.n(o),i=n(5),c=n.n(i),u=n(9),l=n(3),p=n(16),d=n.n(p),f=n(26),g=n.n(f),h=n(27),b=n.n(h),v=n(4),y=n(2),x=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.tags=Object(y.a)(app.store.all("tags").filter(function(t){return!t.parent()})),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip"))},n.view=function(){var t=this.tags.filter(function(t){return null!==t.position()}),e=this.tags.filter(function(t){return null===t.position()});return m("div",{className:"TagsPage"},c.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav",config:c.a.prototype.affixSidebar},m("ul",null,g()(c.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map(function(t){var e=t.lastPostedDiscussion(),n=Object(y.a)(app.store.all("tags").filter(function(e){return e.parent()===t}));return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{backgroundColor:t.color()}},m("a",{className:"TagTile-info",href:app.route.tag(t),config:m.route},m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),n?m("div",{className:"TagTile-children"},n.map(function(t){return[m("a",{href:app.route.tag(t),config:function(t,e){e||($(t).on("click",function(t){return t.stopPropagation()}),m.route.apply(this,arguments))}},t.name())," "]})):""),e?m("a",{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber()),config:m.route},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),b()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))})),e.length?m("div",{className:"TagCloud"},e.map(function(t){return[Object(v.a)(t,{link:!0})," "]})):"")))},e}(d.a),T=n(28),O=n.n(T),N=n(7),_=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t),e.initProps=function(e){t.initProps.call(this,e);var n=e.post.content()[0],s=e.post.content()[1];function a(t,e){return t.filter(function(t){return-1===e.indexOf(t)}).map(function(t){return app.store.getById("tags",t)})}e.tagsAdded=a(s,n),e.tagsRemoved=a(n,s)};var n=e.prototype;return n.icon=function(){return"fas fa-tag"},n.descriptionKey=function(){return this.props.tagsAdded.length?this.props.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},n.descriptionData=function(){var t={};return this.props.tagsAdded.length&&(t.tagsAdded=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.props.tagsAdded.length,{tags:Object(N.a)(this.props.tagsAdded,{link:!0}),count:this.props.tagsAdded.length})),this.props.tagsRemoved.length&&(t.tagsRemoved=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.props.tagsRemoved.length,{tags:Object(N.a)(this.props.tagsRemoved,{link:!0}),count:this.props.tagsRemoved.length})),t},e}(O.a),j=n(1),P=n(29),C=n.n(P),I=n(20),D=n.n(I),k=n(6),S=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.prototype.view=function(){var t=this.props.tag,e=this.constructor.isActive(this.props),n=t&&t.description();return m("a",{className:"TagLinkButton hasIcon "+(t.isChild()?"child":""),href:this.props.href,config:m.route,style:e&&t?{color:t.color()}:"",title:n||""},Object(k.a)(t,{className:"Button-icon"}),this.props.children)},e.initProps=function(t){var e=t.tag;t.params.tags=e?e.slug():"untagged",t.href=app.route("tag",t.params),t.children=e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link")},e}(D.a),w=function(){Object(j.extend)(c.a.prototype,"navItems",function(t){if(t.add("tags",D.a.component({icon:"fas fa-th-large",children:app.translator.trans("flarum-tags.forum.index.tags_link"),href:app.route("tags")}),-10),!(app.current instanceof x)){t.add("separator",C.a.component(),-10);var e=this.stickyParams(),n=app.store.all("tags"),s=this.currentTag(),a=function(n){var a=s===n;!a&&s&&(a=s.parent()===n),t.add("tag"+n.id(),S.component({tag:n,params:e,active:a}),-10)};Object(y.a)(n).filter(function(t){return null!==t.position()&&(!t.isChild()||s&&(t.parent()===s||t.parent()===s.parent()))}).forEach(a);var o=n.filter(function(t){return null===t.position()}).sort(function(t,e){return e.discussionCount()-t.discussionCount()});o.splice(0,3).forEach(a),o.length&&t.add("moreTags",D.a.component({children:app.translator.trans("flarum-tags.forum.index.more_link"),href:app.route("tags")}),-10)}})},L=n(30),A=n.n(L),M=n(31),H=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e.prototype.view=function(){var t=this.props.tag,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{color:"#fff",backgroundColor:e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(n.n(M).a),B=function(){c.a.prototype.currentTag=function(){var t=this.params().tags;if(t)return app.store.getBy("tags","slug",t)},Object(j.override)(c.a.prototype,"hero",function(t){var e=this.currentTag();return e?H.component({tag:e}):t()}),Object(j.extend)(c.a.prototype,"view",function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())}),Object(j.extend)(c.a.prototype,"sidebarItems",function(t){var e=this.currentTag();if(e){var n=e.color();n&&(t.get("newDiscussion").props.style={backgroundColor:n})}}),Object(j.extend)(c.a.prototype,"params",function(t){t.tags=m.route.param("tags")}),Object(j.extend)(A.a.prototype,"requestParams",function(t){t.include.push("tags"),this.props.params.tags&&(t.filter.q=(t.filter.q||"")+" tag:"+this.props.params.tags)})},R=n(32),E=n.n(R),q=n(21),K=n.n(q),F=n(23),U=n.n(F),z=function(){Object(j.extend)(E.a.prototype,"infoItems",function(t){var e=this.props.discussion.tags();e&&e.length&&t.add("tags",Object(N.a)(e),10)}),Object(j.extend)(K.a.prototype,"params",function(t){t.include.push("tags")}),Object(j.extend)(U.a.prototype,"view",function(t){var e=Object(y.a)(this.props.discussion.tags());if(e&&e.length){var n=e[0].color();n&&(t.attrs.style={backgroundColor:n},t.attrs.className+=" DiscussionHero--colored")}}),Object(j.extend)(U.a.prototype,"items",function(t){var e=this.props.discussion.tags();e&&e.length&&t.add("tags",Object(N.a)(e,{link:!0}),5)})},G=n(33),J=n.n(G),Q=n(8),V=n.n(Q),W=n(17),X=n.n(W),Y=n(34),Z=n.n(Y),tt=n(35),et=n.n(tt),nt=n(36),st=n.n(nt),at=n(37),ot=n.n(at),rt=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var n=e.prototype;return n.init=function(){var e=this;t.prototype.init.call(this),this.tags=app.store.all("tags"),this.props.discussion?this.tags=this.tags.filter(function(t){return t.canAddToDiscussion()||-1!==e.props.discussion.tags().indexOf(t)}):this.tags=this.tags.filter(function(t){return t.canStartDiscussion()}),this.tags=Object(y.a)(this.tags),this.selected=[],this.filter=m.prop(""),this.index=this.tags[0].id(),this.focused=!1,this.props.selectedTags?this.props.selectedTags.map(this.addTag.bind(this)):this.props.discussion&&this.props.discussion.tags().map(this.addTag.bind(this)),this.minPrimary=app.forum.attribute("minPrimaryTags"),this.maxPrimary=app.forum.attribute("maxPrimaryTags"),this.minSecondary=app.forum.attribute("minSecondaryTags"),this.maxSecondary=app.forum.attribute("maxSecondaryTags"),this.navigator=new ot.a,this.navigator.onUp(function(){return e.setIndex(e.getCurrentNumericIndex()-1,!0)}).onDown(function(){return e.setIndex(e.getCurrentNumericIndex()+1,!0)}).onSelect(this.select.bind(this)).onRemove(function(){return e.selected.splice(e.selected.length-1,1)})},n.primaryCount=function(){return this.selected.filter(function(t){return t.isPrimary()}).length},n.secondaryCount=function(){return this.selected.filter(function(t){return!t.isPrimary()}).length},n.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();if(e)-1===this.selected.indexOf(e)&&this.selected.push(e);this.selected.push(t)}},n.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter(function(e){return e.parent()===t}).forEach(this.removeTag.bind(this)))},n.className=function(){return"TagDiscussionModal"},n.title=function(){return this.props.discussion?app.translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.props.discussion.title())}):app.translator.trans("flarum-tags.forum.choose_tags.title")},n.getInstruction=function(t,e){if(t<this.minPrimary){var n=this.minPrimary-t;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_primary_placeholder",n,{count:n})}if(e<this.minSecondary){var s=this.minSecondary-e;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_secondary_placeholder",s,{count:s})}return""},n.content=function(){var t=this,e=this.tags,n=this.filter().toLowerCase(),s=this.primaryCount(),a=this.secondaryCount();return e=e.filter(function(e){var n=e.parent();return!1===n||-1!==t.selected.indexOf(n)}),s>=this.maxPrimary&&(e=e.filter(function(e){return!e.isPrimary()||-1!==t.selected.indexOf(e)})),a>=this.maxSecondary&&(e=e.filter(function(e){return e.isPrimary()||-1!==t.selected.indexOf(e)})),n&&(e=e.filter(function(t){return t.name().substr(0,n.length).toLowerCase()===n})),-1===e.indexOf(this.index)&&(this.index=e[0]),[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":"")},m("span",{className:"TagsInput-selected"},this.selected.map(function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},Object(v.a)(e))})),m("input",{className:"FormControl",placeholder:st()(this.getInstruction(s,a)),value:this.filter(),oninput:m.withAttr("value",this.filter),onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},V.a.component({type:"submit",className:"Button Button--primary",disabled:s<this.minPrimary||a<this.minSecondary,icon:"fas fa-check",children:app.translator.trans("flarum-tags.forum.choose_tags.submit_button")})))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter(function(e){return n||!e.parent()||-1!==t.selected.indexOf(e.parent())}).map(function(e){return m("li",{"data-index":e.id(),className:et()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:-1!==t.selected.indexOf(e),active:t.index===e}),style:{color:e.color()},onmouseover:function(){return t.index=e},onclick:t.toggleTag.bind(t,e)},Object(k.a)(e),m("span",{className:"SelectTagListItem-name"},Z()(e.name(),n)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")})))]},n.toggleTag=function(t){-1!==this.selected.indexOf(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.index=this.tags[0]),this.onready()},n.select=function(t){t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index)?this.selected.length&&this.$("form").submit():this.getItem(this.index)[0].dispatchEvent(new Event("click"))},n.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},n.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},n.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},n.setIndex=function(t,e){var n=this.selectableItems(),s=n.parent();t<0?t=n.length-1:t>=n.length&&(t=0);var a=n.eq(t);if(this.index=app.store.getById("tags",a.attr("data-index")),m.redraw(),e){var o,r=s.scrollTop(),i=s.offset().top,c=i+s.outerHeight(),u=a.offset().top,l=u+a.outerHeight();u<i?o=r-i+u-parseInt(s.css("padding-top"),10):l>c&&(o=r-c+l+parseInt(s.css("padding-bottom"),10)),void 0!==o&&s.stop(!0).animate({scrollTop:o},100)}},n.onsubmit=function(t){t.preventDefault();var e=this.props.discussion,n=this.selected;e&&e.save({relationships:{tags:n}}).then(function(){app.current instanceof K.a&&app.current.stream.update(),m.redraw()}),this.props.onsubmit&&this.props.onsubmit(n),app.modal.close(),m.redraw.strategy("none")},e}(X.a),it=function(){Object(j.extend)(J.a,"moderationControls",function(t,e){e.canTag()&&t.add("tags",V.a.component({children:app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button"),icon:"fas fa-tag",onclick:function(){return app.modal.show(new rt({discussion:e}))}}))})},ct=n(12),ut=n.n(ct),lt=function(){Object(j.extend)(c.a.prototype,"newDiscussionAction",function(t){var e=app.store.getBy("tags","slug",this.params().tags);if(e){var n=e.parent(),s=n?[n,e]:[e];t.then(function(t){return t.tags=s})}}),ut.a.prototype.tags=[],ut.a.prototype.chooseTags=function(){var t=this;app.modal.show(new rt({selectedTags:this.tags.slice(0),onsubmit:function(e){t.tags=e,t.$("textarea").focus()}}))},Object(j.extend)(ut.a.prototype,"headerItems",function(t){t.add("tags",m("a",{className:"DiscussionComposer-changeTags",onclick:this.chooseTags.bind(this)},this.tags.length?Object(N.a)(this.tags):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)}),Object(j.override)(ut.a.prototype,"onsubmit",function(t){var e=this,n=this.tags,s=n.filter(function(t){return null!==t.position()&&!t.isChild()}),a=n.filter(function(t){return null===t.position()});!n.length||s.length<app.forum.attribute("minPrimaryTags")||a.length<app.forum.attribute("minSecondaryTags")?app.modal.show(new rt({selectedTags:n,onsubmit:function(n){e.tags=n,t()}})):t()}),Object(j.extend)(ut.a.prototype,"data",function(t){t.relationships=t.relationships||{},t.relationships.tags=this.tags})},pt=n(18),mt=Object.assign(pt.a,{addTagFilter:B,addTagControl:it,"components/TagHero":H,"components/TagDiscussionModal":rt,"components/TagsPage":x,"components/DiscussionTaggedPost":_,"components/TagLinkButton":S,addTagList:w,addTagLabels:z,addTagComposer:lt}),dt=n(19);app.initializers.add("flarum-tags",function(t){t.routes.tags={path:"/tags",component:x.component()},t.routes.tag={path:"/t/:tags",component:c.a.component()},t.route.tag=function(e){return t.route("tag",{tags:e.slug()})},t.postComponents.discussionTagged=_,t.store.models.tags=u.a,r.a.prototype.tags=a.a.hasMany("tags"),r.a.prototype.canTag=a.a.attribute("canTag"),w(),B(),z(),it(),lt()}),Object.assign(dt.compat,mt)},,function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["components/Separator"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var s=n(13);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n(24)}]);
//# sourceMappingURL=forum.js.map