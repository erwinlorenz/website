(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{222:function(t,e,n){"use strict";(function(t){n(69),n(53);e.a={props:{preload:{type:String,default:"metadata"},loop:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},muted:{type:Boolean,default:!1},sources:{type:Array,default:function(){return[{src:n(224)}]}},poster:{type:String,default:n(234)}},data:function(){return{ready:!1,currentSource:null}},created:function(){this.currentSource=this.sources[0].src},methods:{onCanplay:function(){var e=this;this.autoplay?t.setTimeout((function(){e.$refs.video.play(),t.requestAnimationFrame((function(){e.ready=!0}))}),300):this.ready=!0},changeSource:function(){this.currentSource=this.sources.find((function(source){return t.matchMedia(source.media||"all").matches})).src},onResize:function(){var e=this;t.clearTimeout(this.timeout),this.timeout=t.setTimeout((function(){var t=e.$refs.video.currentTime;e.$refs.video.onplay=function(){e.$refs.video.currentTime=t},e.changeSource()}),400)}}}}).call(this,n(15))},223:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("fa2b4738",content,!0,{sourceMap:!1})},224:function(t,e,n){t.exports=n.p+"videos/210116_Showreel_webseite_EL.a61f239.mp4"},225:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("34e85222",content,!0,{sourceMap:!1})},226:function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("0045e1b4",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(241);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("7aa5b36b",content,!0,{sourceMap:!1})},228:function(t,e,n){var content=n(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("930a0834",content,!0,{sourceMap:!1})},229:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,h=data.attrs,m=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,y],attrs:Object.assign({version:"1.1",id:"Mail_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},m)},O),d.concat([c("path",{attrs:{id:"Mail",d:"M74.65 35.36c0-.08.05-.16.05-.24L53.47 55.58l21.2 19.8c.01-.14-.03-.28-.03-.43l.01-39.59zM50.23 58.73l-8.67 8.34a2.27 2.27 0 01-3.12.02l-8.64-8.05L8.46 79.61c.52.19 1.08.33 1.66.33h59.74c.87 0 1.68-.26 2.39-.66L50.23 58.73zm-10.27 3.58l32.4-31.21c-.73-.44-1.59-.73-2.5-.73H10.12c-1.19 0-2.28.46-3.13 1.17l32.97 30.77zM5.13 36.12v38.83c0 .45.1.88.21 1.29l21.08-20.3L5.13 36.12z",fill:"none"}})]))}}},230:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,h=data.attrs,m=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,y],attrs:Object.assign({version:"1.1",id:"Linkedin_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},m)},O),d.concat([c("path",{attrs:{id:"Linkedin",d:"M73.82 66.67h.02V43.72c0-11.23-2.42-19.87-15.54-19.87-6.31 0-10.54 3.46-12.27 6.74h-.18v-5.7H33.4v41.77h12.96V45.99c0-5.45 1.03-10.71 7.78-10.71 6.64 0 6.74 6.21 6.74 11.06v20.34l12.94-.01zM12.31 24.9h12.97v41.77H12.31V24.9zm6.48-20.79c-4.15 0-7.51 3.37-7.51 7.51s3.37 7.58 7.51 7.58 7.51-3.44 7.51-7.58c0-4.15-3.37-7.51-7.51-7.51z",fill:"#fff"}})]))}}},231:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,h=data.attrs,m=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,y],attrs:Object.assign({version:"1.1",id:"Xing_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},m)},O),d.concat([c("path",{attrs:{id:"Xing",d:"M27.43 17.61c-.57-1.01-1.42-2.14-3.17-2.14h-11.4c-.69 0-1.26.24-1.55.71-.3.49-.25 1.11.07 1.75l7.7 13.34c.01.03.01.04 0 .07L6.97 52.7c-.32.63-.3 1.26 0 1.75.29.47.8.78 1.49.78h11.4c1.7 0 2.52-1.15 3.11-2.2 0 0 11.84-20.94 12.3-21.75-.05-.09-7.84-13.67-7.84-13.67zm46.3-15.26c.32-.63.32-1.27.02-1.76-.29-.47-.83-.73-1.51-.73H60.73c-1.7 0-2.44 1.07-3.05 2.17 0 0-24.55 43.53-25.36 44.96.04.08 16.19 29.7 16.19 29.7.57 1.01 1.44 2.17 3.18 2.17h11.38c.69 0 1.22-.26 1.51-.73.3-.49.29-1.13-.02-1.76L48.51 47.04c-.02-.02-.02-.05 0-.08L73.73 2.35z",fill:"none"}})]))}}},232:function(t,e,n){"use strict";n(223)},233:function(t,e,n){(e=n(51)(!1)).push([t.i,"ul[data-v-b74919c6]{padding:0;margin:0;list-style:none}ul li[data-v-b74919c6]{margin-top:4.83092vw}@media (min-width:568px){ul li[data-v-b74919c6]{margin-top:20px}}ul a[data-v-b74919c6]{color:currentColor}ul svg[data-v-b74919c6]{display:block;width:9.66184vw}@media (min-width:568px){ul svg[data-v-b74919c6]{width:40px}}@media (min-width:768px){ul svg[data-v-b74919c6]{width:40px}}@media (min-width:1680px){ul svg[data-v-b74919c6]{width:60px}}ul svg path[data-v-b74919c6]{fill:currentColor}",""]),t.exports=e},234:function(t,e,n){t.exports=n.p+"img/210116_Showreel_webseite_EL_Standbild.a7f7e2b.jpg"},235:function(t,e,n){"use strict";n(225)},236:function(t,e,n){(e=n(51)(!1)).push([t.i,"video[data-v-003c1fea]{-o-object-fit:cover;object-fit:cover;width:100%;height:100%;opacity:0;transition:opacity .4s ease-in}video.js--ready[data-v-003c1fea]{opacity:1}",""]),t.exports=e},237:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,h=data.attrs,m=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,y],attrs:Object.assign({version:"1.1",id:"Sound_x5F_Off_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},m)},O),d.concat([c("path",{attrs:{d:"M40.8 33.8v38.6c-.7 9.2-15.8-5.8-18.5-5.8h-10c-1.3 0-1.8-.6-1.8-1.9V41.5c0-.5.3-2 2-2h9.8c2.8 0 17.8-15 18.5-5.7z"}}),c("path",{attrs:{id:"off",d:"M74.7 60.4l-8.2-8.2 8.2-8.2-4-4-8.2 8.2-8.2-8.2-3.9 4 8.2 8.2-8.2 8.2 3.9 4 8.2-8.2 8.2 8.2z"}}),c("g",{attrs:{id:"on"}},[c("path",{attrs:{d:"M62.9 28.5L59 32.4c11.5 11.4 11.5 30 0 41.4l3.9 3.9c13.5-13.6 13.5-35.6 0-49.2z"}}),c("path",{attrs:{d:"M53.3 34.7l-3.9 3.9c7.7 7.7 7.7 20.3 0 28l3.9 3.9c9.9-10 9.9-26 0-35.8z"}})])]))}}},238:function(t,e,n){"use strict";n(226)},239:function(t,e,n){(e=n(51)(!1)).push([t.i,"button[data-v-bf354842]{position:absolute;bottom:0;left:0;padding:0;cursor:pointer;background:none;border:none;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}button svg[data-v-bf354842]{display:block;width:9.66184vw}@media (min-width:568px){button svg[data-v-bf354842]{width:40px}}@media (min-width:1680px){button svg[data-v-bf354842]{width:60px}}button svg path[data-v-bf354842]{fill:#fff}button svg #off[data-v-bf354842],button svg #on[data-v-bf354842]{opacity:0}button svg #on[data-v-bf354842]{opacity:1}button.js--muted svg #on[data-v-bf354842]{opacity:0}button.js--muted svg #off[data-v-bf354842]{opacity:1}",""]),t.exports=e},240:function(t,e,n){"use strict";n(227)},241:function(t,e,n){(e=n(51)(!1)).push([t.i,"*[data-v-c7525b0c]{margin:0;color:currentColor}h1[data-v-c7525b0c]{font-size:7.24638vw;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (min-width:568px){h1[data-v-c7525b0c]{font-size:30px}}@media (min-width:768px){h1[data-v-c7525b0c]{font-size:40px}}",""]),t.exports=e},242:function(t,e,n){"use strict";n(228)},243:function(t,e,n){(e=n(51)(!1)).push([t.i,'.page[data-v-170550b5]{position:relative;box-sizing:border-box;display:flex;padding:7.24638vw;color:#fff;background:#000}@media (min-width:568px){.page[data-v-170550b5]{padding:30px}}@media (min-width:768px){.page[data-v-170550b5]{padding:30px}}@media (min-width:1200px){.page[data-v-170550b5]{padding:50px}}@media (min-width:1680px){.page[data-v-170550b5]{padding:60px}}.content[data-v-170550b5]{position:relative;flex:1}.video[data-v-170550b5],.video[data-v-170550b5]:after{position:absolute;top:0;left:0;width:100%;height:100%}.video[data-v-170550b5]:after{display:block;content:"";background:#000;opacity:.2}.contacts[data-v-170550b5]{position:absolute;right:0;bottom:0}.headline[data-v-170550b5]{position:relative}',""]),t.exports=e},244:function(t,e,n){"use strict";n.r(e);var r=n(229),o=n.n(r),c=n(230),l=n.n(c),d=n(231),f=n.n(d),v={props:{items:{type:Array,default:function(){return[{icon:"mail",url:"mailto: "},{icon:"linkedIn",url:"#"},{icon:"xing",url:"#"}]}}},methods:{getIcon:function(t){return{mail:o.a,linkedIn:l.a,xing:f.a}[String(t)]}}},y=(n(232),n(32)),h=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.items,(function(e,r){return n("li",{key:r},[n("a",{attrs:{rel:e.rel,title:e.title,target:e.target,href:e.url}},[n(t.getIcon(e.icon),{tag:"component"})],1)])})),0)}),[],!1,null,"b74919c6",null).exports,m=n(222).a,O=(n(235),Object(y.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("video",{ref:"video",class:{"js--ready":this.ready},attrs:{preload:this.preload,loop:this.loop,poster:this.poster,src:this.currentSource},domProps:{muted:this.muted},on:{canplay:this.onCanplay}})}),[],!1,null,"003c1fea",null).exports),w=n(237),j={components:{SvgSound:n.n(w).a},props:{muted:{type:Boolean,default:!1}},data:function(){return{value:this.muted}},watch:{value:function(){this.$emit("muted",this.value)}},methods:{onClick:function(){this.value=!this.value}}},x=(n(238),Object(y.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:{"js--muted":this.value},attrs:{"aria-label":"Mute Button"},on:{click:this.onClick}},[e("svg-sound")],1)}),[],!1,null,"bf354842",null).exports),P={props:{tag:{type:String,default:"h1"},content:{type:String,default:"Headline <br><span>Headline</span>"}}},_=(n(240),{components:{MoleculeContacts:h,AtomVideo:O,AtomSoundButton:x,AtomHeadline:Object(y.a)(P,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{directives:[{name:"font",rawName:"v-font",value:[this.$getFont("Montserrat",900),this.$getFont("Montserrat",300,"normal",{selector:"span"})],expression:"[\n    $getFont('Montserrat', 900),\n    $getFont('Montserrat', 300, 'normal', {selector:'span'})]"}],tag:"component",domProps:{innerHTML:this._s(this.content)}})}),[],!1,null,"c7525b0c",null).exports},asyncData:function(){return{headline:{content:"Erwin Lorenz<br><span>Art Director</span>"},contacts:{items:[{icon:"mail",url:"mailto: erwin.lorenz@gmail.com",title:"Mail"},{icon:"linkedIn",url:"https://www.linkedin.com/in/erwin-lorenz-3a2323a2/",target:"_blank",title:"LinkedIn",rel:"noreferrer"},{icon:"xing",url:"https://www.xing.com/profile/Erwin_Lorenz/",target:"_blank",title:"Xing",rel:"noreferrer"}]},video:{loop:!0,autoplay:!0,sources:[{src:n(224)}],poster:null}}},data:function(){return{videoMuted:!0}},head:function(){return{link:[]}}}),S=(n(242),Object(y.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"video"},[n("atom-video",t._b({attrs:{muted:t.videoMuted}},"atom-video",t.video,!1))],1),t._v(" "),n("div",{staticClass:"content"},[n("molecule-contacts",t._b({staticClass:"contacts"},"molecule-contacts",t.contacts,!1)),t._v(" "),n("atom-sound-button",{attrs:{muted:t.videoMuted},on:{muted:function(e){t.videoMuted=e}}}),t._v(" "),n("atom-headline",t._b({staticClass:"headline",attrs:{critical:""}},"atom-headline",t.headline,!1))],1)])}),[],!1,null,"170550b5",null));e.default=S.exports}}]);