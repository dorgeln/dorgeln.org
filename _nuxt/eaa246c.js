(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{308:function(t,e,o){var content=o(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("0c0de98c",content,!0,{sourceMap:!1})},309:function(t,e,o){"use strict";o(308)},310:function(t,e,o){var r=o(74)(!1);r.push([t.i,".lazy-loaded[data-v-183da985]{opacity:1}",""]),t.exports=r},311:function(t,e,o){"use strict";o.r(e);o(26),o(62);var r={props:{src:{type:String,default:null},alt:{type:String,default:null},ratio:{type:String,default:null}},data:function(){return{show:!1,loaded:!1}},computed:{intristicRatio:function(){if(this.ratio){var t=this.ratio.split(":");return t[1]/t[0]}return 0},intristicRatioStyle:function(){return{"padding-bottom":"".concat(100*this.intristicRatio,"%")}}},methods:{lazyLoadImage:function(t,e){var o=this;t&&(this.show=!0,this.$nextTick((function(){var t=o.$refs.img;t.addEventListener("load",(function(){t.classList.add("lazy-loaded"),o.loaded=!0})),t.addEventListener("error",(function(){t.classList.add("lazy-load-error")}))})))}}},l=(o(309),o(12)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.lazyLoadImage,throttle:250,once:!0},expression:"{\n    callback: lazyLoadImage,\n    throttle: 250,\n    once: true,\n  }"}],staticClass:"overflow-hidden relative",class:{"light:bg-light-surface dark:bg-dark-surface":!t.loaded},style:[t.intristicRatioStyle]},[o("div",{class:[t.ratio&&"absolute top-0 right-0 bottom-0 left-0"]},[t.show?o("img",{ref:"img",staticClass:"max-h-full opacity-0 transition-opacity duration-500 m-auto",attrs:{src:t.src,alt:t.alt}}):t._e()])])}),[],!1,null,"183da985",null);e.default=component.exports}}]);