(window.webpackJsonp=window.webpackJsonp||[]).push([[26,4,5,7,8,9,10,11],{308:function(t,e,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("0c0de98c",content,!0,{sourceMap:!1})},309:function(t,e,r){"use strict";r(308)},310:function(t,e,r){var n=r(74)(!1);n.push([t.i,".lazy-loaded[data-v-183da985]{opacity:1}",""]),t.exports=n},311:function(t,e,r){"use strict";r.r(e);r(26),r(62);var n={props:{src:{type:String,default:null},alt:{type:String,default:null},ratio:{type:String,default:null}},data:function(){return{show:!1,loaded:!1}},computed:{intristicRatio:function(){if(this.ratio){var t=this.ratio.split(":");return t[1]/t[0]}return 0},intristicRatioStyle:function(){return{"padding-bottom":"".concat(100*this.intristicRatio,"%")}}},methods:{lazyLoadImage:function(t,e){var r=this;t&&(this.show=!0,this.$nextTick((function(){var t=r.$refs.img;t.addEventListener("load",(function(){t.classList.add("lazy-loaded"),r.loaded=!0})),t.addEventListener("error",(function(){t.classList.add("lazy-load-error")}))})))}}},o=(r(309),r(12)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.lazyLoadImage,throttle:250,once:!0},expression:"{\n    callback: lazyLoadImage,\n    throttle: 250,\n    once: true,\n  }"}],staticClass:"overflow-hidden relative",class:{"light:bg-light-surface dark:bg-dark-surface":!t.loaded},style:[t.intristicRatioStyle]},[r("div",{class:[t.ratio&&"absolute top-0 right-0 bottom-0 left-0"]},[t.show?r("img",{ref:"img",staticClass:"max-h-full opacity-0 transition-opacity duration-500 m-auto",attrs:{src:t.src,alt:t.alt}}):t._e()])])}),[],!1,null,"183da985",null);e.default=component.exports},312:function(t,e,r){r(20),r(16),r(23),r(8),r(29),r(19),r(30);var n=r(91),o=r(92),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(38),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["svg-inline--fa fa-long-arrow-left fa-w-14",h,m],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"long-arrow-left","data-prefix":"fad",focusable:"false",role:"img",viewBox:"0 0 448 512"},x)},w),f.concat([r("g",{staticClass:"fa-group"},[r("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M128.09 220H424a24 24 0 0 1 24 24v24a24 24 0 0 1-24 24H128.09l-35.66-36z",opacity:".4"}}),r("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M142.56 409L7 273.5v-.06a25.23 25.23 0 0 1 0-34.84l.06-.06 135.5-135.49a24 24 0 0 1 33.94 0l17 17a24 24 0 0 1 0 33.94L92.43 256 193.5 358a24 24 0 0 1 0 33.94l-17 17a24 24 0 0 1-33.94.06z"}})])]))}}},313:function(t,e,r){"use strict";r.r(e);var n={name:"BlogpostAuthor",props:{author:{type:Object,required:!0}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.author.link?r("a",{staticClass:"inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150",attrs:{href:t.author.link,target:"_blank",rel:"noopener"}},[r("img",{staticClass:"inline-block h-6 w-6 rounded-full",attrs:{src:t.author.avatarUrl,alt:t.author.name}}),t._v(" "),r("span",{staticClass:"mx-2 last:mr-0"},[t._v(t._s(t.author.name))])]):r("span",{staticClass:"inline-flex items-center hover:text-nuxt-lightgreen transition ease-linear duration-150"},[r("img",{staticClass:"inline-block h-6 w-6 rounded-full",attrs:{src:t.author.avatarUrl,alt:t.author.name}}),t._v(" "),r("span",{staticClass:"mx-2 last:mr-0"},[t._v(t._s(t.author.name))])])}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,r){"use strict";r.r(e);r(93),r(38);var n={props:{title:{type:String,required:!0},description:{type:String,required:!0},hashtags:{type:Array,default:function(){return[]}}},data:function(){return{networks:[{id:"facebook",icon:"IconFacebook"},{id:"twitter",icon:"IconTwitter"},{id:"linkedin",icon:"IconLinkedin"}],currentUrl:this.$config.baseUrl+this.$route.fullPath}},computed:{shareHashtags:function(){return this.$config.sharingDefaultHashtags?this.$config.sharingDefaultHashtags.concat(this.hashtags).join(","):this.hashtags.join(",")}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"},[r("div",[t._v("Share on")]),t._v(" "),t._l(t.networks,(function(e){return r("ShareNetwork",{key:e.id,staticClass:"cursor-pointer inline-block p-3",attrs:{network:e.id,url:t.currentUrl,title:t.title,description:t.description,hashtags:t.shareHashtags,"twitter-user":t.$config.twitterUsername,"aria-label":e.id}},[r(e.icon,{tag:"component",attrs:{width:"24",height:"24"}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,r){"use strict";function n(title,t,e){return[{hid:"description",name:"description",content:t},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:e}]}function o(t,e,r){return[{hid:"og:type",property:"og:type",content:"article"},{hid:"article:author",name:"article:author",content:t},{hid:"article:published_time",name:"article:published_time",content:e},{hid:"article:modified_time",name:"article:modified_time",content:r}]}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}))},316:function(t,e,r){r(20),r(16),r(23),r(8),r(29),r(19),r(30);var n=r(91),o=r(92),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(38),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,m=data.staticClass,style=data.style,v=data.staticStyle,y=data.attrs,x=void 0===y?{}:y,w=o(data,l);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["svg-inline--fa fa-long-arrow-right fa-w-14",h,m],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true","data-icon":"long-arrow-right","data-prefix":"fad",focusable:"false",role:"img",viewBox:"0 0 448 512"},x)},w),f.concat([r("g",{staticClass:"fa-group"},[r("path",{staticClass:"fa-secondary",attrs:{fill:"currentColor",d:"M319.91 292H24a24 24 0 0 1-24-24v-24a24 24 0 0 1 24-24h295.91l35.66 36z",opacity:".4"}}),r("path",{staticClass:"fa-primary",attrs:{fill:"currentColor",d:"M305.44 103.05L441 238.54l.06.06a25.23 25.23 0 0 1 0 34.84l-.06.06L305.44 409a24 24 0 0 1-33.94 0l-17-17a24 24 0 0 1 0-33.94L355.57 256 254.5 154a24 24 0 0 1 0-33.94l17-17a24 24 0 0 1 33.94-.01z"}})])]))}}},322:function(t,e,r){"use strict";r.r(e);var n=r(312),o={components:{ArrowLeftIcon:r.n(n).a}},l=r(12),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary",attrs:{to:t.localePath({name:"index"})}},[r("ArrowLeftIcon",{staticClass:"h-5 mr-2"}),t._v("back to blog list\n")],1)}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);var n={name:"BlogpostItem",props:{post:{type:Object,required:!0}},computed:{hasTags:function(){return this.post.tags}},methods:{formatDateByLocale:function(t){var e=this.$i18n.locale||"en";return new Date(t).toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("header",{staticClass:"flex items-left justify-between flex-col mt-12"},[r("div",{staticClass:"flex flex-1 flex-col mb-8"},[r("h1",{staticClass:"text-4xl font-semibold mb-4 leading-tight"},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"text-sm flex justify-between flex-col sm:flex-row"},[r("div",t._l(t.post.authors,(function(t,e){return r("BlogpostAuthor",{key:e,attrs:{author:t}})})),1),t._v(" "),r("div",{staticClass:"mt-1 dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary"},[t._v("\n          "+t._s(t.formatDateByLocale(t.post.publishedAt))+"\n          "),r("span",{staticClass:"text-xs mx-1"},[t._v("•")]),t._v("\n          "+t._s(t.post.readingTime.text)+"\n        ")])])]),t._v(" "),t.post.image?r("AppImage",{staticClass:"rounded",attrs:{src:t.post.image,ratio:"16:9",sizes:"80vh"}}):t._e()],1),t._v(" "),r("div",{staticClass:"mt-12"},[r("NuxtContent",{attrs:{document:t.post}})],1),t._v(" "),t.hasTags?r("div",{staticClass:"border-t border-light-border dark:border-dark-border my-10"},[t.$config.sharingBlogPostEnabled?r("BlogPostShare",{staticClass:"mt-10 mb-5",attrs:{title:t.post.title,description:t.post.description,hashtags:t.post.tags}}):t._e(),t._v(" "),r("div",{staticClass:"flex flex-row flex-wrap justify-start my-10 light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"},t._l(t.post.tags,(function(e,n){return r("span",{key:n,staticClass:"truncate uppercase tracking-wider font-medium text-ss px-2 py-1 rounded-full mr-2 mb-2 border border-light-border dark:border-dark-border transition-colors duration-300 ease-linear"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogpostAuthor:r(313).default,AppImage:r(311).default,BlogPostShare:r(314).default})},324:function(t,e,r){"use strict";r.r(e);var n=r(312),o=r.n(n),l=r(316),c=r.n(l),d={name:"BlogpostNavigationLinks",components:{ArrowLeftIcon:o.a,ArrowRightIcon:c.a},props:{prev:{type:Object,default:null},next:{type:Object,default:null}},methods:{toLink:function(t){return this.localePath({name:"slug",params:{slug:t}})}}},f=r(12),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between items-center"},[t.prev?r("NuxtLink",{staticClass:"inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear",attrs:{to:t.toLink(t.prev.slug)}},[r("ArrowLeftIcon",{staticClass:"h-5 mr-2"}),t._v("\n    "+t._s(t.prev.title||"back to blog list")+"\n  ")],1):t._e(),t._v(" "),t.next?r("NuxtLink",{staticClass:"inline-flex items-center text-right dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary transition-colors duration-300 ease-linear",attrs:{to:t.toLink(t.next.slug)}},[t._v("\n    "+t._s(t.next.title)+"\n    "),r("ArrowRightIcon",{staticClass:"h-5 ml-2"})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);var n={props:{docLink:{type:String,required:!1,default:""}}},o=r(12),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pt-4"},[r("div",{staticClass:"pt-3 mt-6 border-t border-light-border dark:border-dark-border"},[r("p",{staticClass:"text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pt-1 mb-8 transition-colors duration-300 ease-linear"},[t._v("\n      "+t._s(t.$t("contribute.blog"))+"\n      "),r("a",{staticClass:"text-primary-base hover:underline",attrs:{href:t.docLink,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("contribute.edit_on_github"))+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);var n=r(71),o=r(11),l=r(5),c=(r(38),r(16),r(47),r(42),r(8),r(27),r(45),r(31),r(26),r(48),r(32),r(41),r(0)),d=r(315),f=r(346);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v={name:"PageSlug",scrollToTop:!0,asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,d,f,h,m,v,y,x,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.app,l=t.params,c=t.error,d=l.slug,m=d,n.i18n.locale!==n.i18n.defaultLocale&&(m+=".".concat(n.i18n.locale)),e.next=6,r({deep:!0}).where({locale:{$eq:n.i18n.locale},slugWithoutLocale:{$eq:d}}).fetch();case 6:if(0!==(h=e.sent).length){e.next=11;break}return e.next=10,r({deep:!0}).where({locale:{$eq:n.i18n.defaultLocale},slugWithoutLocale:{$eq:d}}).fetch();case 10:h=e.sent;case 11:if(0!==h.length){e.next=13;break}return e.abrupt("return",c({statusCode:404}));case 13:return f=Array.isArray(h)?h[0]:h,e.next=16,r({deep:!0}).where({locale:{$eq:n.i18n.defaultLocale}}).only(["title","slug"]).sortBy("publishedAt","desc").surround(m,{before:1,after:1}).fetch();case 16:return v=e.sent,y=Object(o.a)(v,2),x=y[0],w=y[1],e.abrupt("return",{post:f,slug:d,prev:x,next:w});case 21:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post.title,meta:[].concat(Object(n.a)(Object(d.b)(this.post.title,this.post.description,this.$config.baseUrl+this.$route.fullPath)),Object(n.a)(Object(d.a)(this.post.author,this.post.publishedAt,this.post.modifiedTime)))}},computed:{docLink:function(){return"https://github.com/".concat(this.$config.githubOwner,"/").concat(this.$config.githubRepository,"/blob/").concat(this.$config.githubMainBranch,"/content").concat(this.post.path).concat(this.post.extension)}},mounted:function(){var t,e=h(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var r=t.value,component=(new(c.a.extend(f.default))).$mount();r.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}},y=r(12),x=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"container lg:max-w-4xl mx-auto p-4 pb-8"},[r("BackToList"),t._v(" "),r("BlogpostItem",{attrs:{post:t.post}}),t._v(" "),r("BlogpostNavigationLinks",{attrs:{prev:t.prev,next:t.next}}),t._v(" "),r("AppContribute",{attrs:{"doc-link":t.docLink}})],1)])}),[],!1,null,null,null);e.default=x.exports;installComponents(x,{BackToList:r(322).default,BlogpostItem:r(323).default,BlogpostNavigationLinks:r(324).default,AppContribute:r(325).default})}}]);