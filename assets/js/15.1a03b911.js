(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{541:function(e,t,r){},575:function(e,t,r){"use strict";r(541)},596:function(e,t,r){"use strict";r.r(t);var n=r(33),a=r(13),s=(r(35),r(17),r(144),r(42),r(28),r(43),r(51),{props:["selected","asideBanners","asideBannersUrl","prereq"],data:function(){return{headerCurrent:null}},mounted:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.addEventListener("scroll",e.headerActive),window.addEventListener("hashchange",e.headerActive);case 2:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){window.removeEventListener("scroll",this.headerActive),window.removeEventListener("hashchange",this.headerActive)},computed:{headersFiltered:function(){return this.$page.headers.filter((function(e){var t=!e.title.match(/{hide}/),r=!e.title.match(/pre-requisite/i);return t&&r}))}},methods:{headerActive:function(e){var t=this,r=window.scrollY+50;if(this.$page.headers){var a=this.$page.headers.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{y:document.getElementById(e.slug).getBoundingClientRect().top})})).filter((function(e){return!e.title.match(/\{hide\}/)})).map((function(e){return Object(n.a)(Object(n.a)({},e),{},{y:e.y+window.scrollY})}));a.forEach((function(e,s){var i=a[s],c=a[s+1];if(i&&c){if(r>=i.y&&r<c.y)return t.headerCurrent=Object(n.a)({},i)}else if(r>=i.y)return t.headerCurrent=Object(n.a)({},i)}))}}}}),i=(r(575),r(1)),c=Object(i.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"search__container"},[e.$themeConfig.versions?r("tm-select-version"):e._e(),e.$themeConfig.algolia?r("div",{staticClass:"search",on:{click:function(t){return e.$emit("search",!0)}}},[r("div",{staticClass:"search__icon"},[r("icon-search")],1),r("div",{staticClass:"search__text"},[e._v("Search")])]):e._e()],1),e.asideBanners&&!e.$themeConfig.custom?r("div",{staticClass:"banners"},e._l(e.asideBanners,(function(t){return r("div",{staticClass:"banners__item"},[r("a",{attrs:{href:t.href,target:"_blank",rel:"noreferrer noopener"}},[r("img",{staticClass:"aside__image",attrs:{src:e.asideBannersUrl+"/"+t.src,alt:t.alt},on:{error:function(t){return e.$emit("bannerError",!0)}}})])])})),0):e._e(),e.prereq&&e.prereq.length>0?r("div",[r("div",{staticClass:"aside__title"},[e._v("Pre-requisite reading")]),e._l(e.prereq,(function(t){return r("a",{staticClass:"prereq__item",attrs:{href:t.href}},[e._v(e._s(t.text))])}))],2):e._e(),e.$page.headers&&e.$page.headers.length>0?r("div",[r("div",{staticClass:"aside__title"},[e._v("On this page")]),e._l(e.headersFiltered,(function(t){return r("div",{ref:t.slug,refInFor:!0,staticClass:"aside__link",class:["aside__link__active__"+(e.headerCurrent&&e.headerCurrent.slug===t.slug)]},[r("a",{staticClass:"aside__link__href header-anchor",class:{selected:t.slug==e.selected},attrs:{href:"#"+t.slug}},[e._v(e._s(t.title))])])}))],2):e._e()])])}),[],!1,null,"4ac7d60e",null);t.default=c.exports}}]);