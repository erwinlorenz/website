(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(t,e,n){"use strict";(function(t){e.a={props:{preload:{type:String,default:"metadata"},playsinline:{type:Boolean,default:!1},loop:{type:Boolean,default:!0},autoplay:{type:Boolean,default:!0},muted:{type:Boolean,default:!0},mutedSources:{type:Array,default:()=>[]},sources:{type:Array,default:()=>[]},poster:{type:String,default:null}},data:()=>({ready:!1,currentSourceMuted:null,currentSource:null,played:!1}),computed:{currentVideo(){return this.muted?this.$refs.videoMuted:this.$refs.video}},watch:{muted(t){var e;t?(this.$refs.video.pause(),e=this.$refs.video.currentTime,this.$refs.videoMuted.currentTime=e,this.$refs.videoMuted.play()):(this.$refs.videoMuted.pause(),e=this.$refs.videoMuted.currentTime,this.$refs.video.currentTime=e,this.$refs.video.play())}},created(){this.currentSource=this.sources[0].src},mounted(){t.addEventListener("resize",this.onResize),this.changeSource()},destroyed(){t.removeEventListener("resize",this.onResize)},methods:{onLoadPoster(){},onCanplay(){this.ready=!0},changeSource(){this.currentSource=this.sources.find(source=>t.matchMedia(source.media||"all").matches).src,this.currentSourceMuted=this.mutedSources.find(source=>t.matchMedia(source.media||"all").matches).src},onPlay(){this.played=!0},onResize(){t.clearTimeout(this.timeout),this.timeout=t.setTimeout(()=>{},400)}}}}).call(this,n(15))},184:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("fa2b4738",content,!0,{sourceMap:!1})},185:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("54794b5c",content,!0,{sourceMap:!1})},186:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("7aa5b36b",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("fe204e30",content,!0,{sourceMap:!1})},188:function(t,e,n){t.exports=n.p+"videos/210116_Showreel_webseite_EL.a61f239.mp4"},189:function(t,e,n){t.exports=n.p+"videos/210116_Showreel_webseite_EL_ohneSound.de11eb6.mp4"},190:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("22796016",content,!0,{sourceMap:!1})},191:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,h=data.attrs,y=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,m],attrs:Object.assign({version:"1.1",id:"Mail_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},y)},O),d.concat([c("path",{attrs:{id:"Mail",d:"M74.65 35.36c0-.08.05-.16.05-.24L53.47 55.58l21.2 19.8c.01-.14-.03-.28-.03-.43l.01-39.59zM50.23 58.73l-8.67 8.34a2.27 2.27 0 01-3.12.02l-8.64-8.05L8.46 79.61c.52.19 1.08.33 1.66.33h59.74c.87 0 1.68-.26 2.39-.66L50.23 58.73zm-10.27 3.58l32.4-31.21c-.73-.44-1.59-.73-2.5-.73H10.12c-1.19 0-2.28.46-3.13 1.17l32.97 30.77zM5.13 36.12v38.83c0 .45.1.88.21 1.29l21.08-20.3L5.13 36.12z",fill:"none"}})]))}}},192:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,h=data.attrs,y=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,m],attrs:Object.assign({version:"1.1",id:"Linkedin_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},y)},O),d.concat([c("path",{attrs:{id:"Linkedin",d:"M73.82 66.67h.02V43.72c0-11.23-2.42-19.87-15.54-19.87-6.31 0-10.54 3.46-12.27 6.74h-.18v-5.7H33.4v41.77h12.96V45.99c0-5.45 1.03-10.71 7.78-10.71 6.64 0 6.74 6.21 6.74 11.06v20.34l12.94-.01zM12.31 24.9h12.97v41.77H12.31V24.9zm6.48-20.79c-4.15 0-7.51 3.37-7.51 7.51s3.37 7.58 7.51 7.58 7.51-3.44 7.51-7.58c0-4.15-3.37-7.51-7.51-7.51z",fill:"#fff"}})]))}}},193:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,h=data.attrs,y=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,m],attrs:Object.assign({version:"1.1",id:"Xing_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},y)},O),d.concat([c("path",{attrs:{id:"Xing",d:"M27.43 17.61c-.57-1.01-1.42-2.14-3.17-2.14h-11.4c-.69 0-1.26.24-1.55.71-.3.49-.25 1.11.07 1.75l7.7 13.34c.01.03.01.04 0 .07L6.97 52.7c-.32.63-.3 1.26 0 1.75.29.47.8.78 1.49.78h11.4c1.7 0 2.52-1.15 3.11-2.2 0 0 11.84-20.94 12.3-21.75-.05-.09-7.84-13.67-7.84-13.67zm46.3-15.26c.32-.63.32-1.27.02-1.76-.29-.47-.83-.73-1.51-.73H60.73c-1.7 0-2.44 1.07-3.05 2.17 0 0-24.55 43.53-25.36 44.96.04.08 16.19 29.7 16.19 29.7.57 1.01 1.44 2.17 3.18 2.17h11.38c.69 0 1.22-.26 1.51-.73.3-.49.29-1.13-.02-1.76L48.51 47.04c-.02-.02-.02-.05 0-.08L73.73 2.35z",fill:"none"}})]))}}},194:function(t,e,n){"use strict";n(184)},195:function(t,e,n){(e=n(26)(!1)).push([t.i,"ul[data-v-b74919c6]{padding:0;margin:0;list-style:none}ul li[data-v-b74919c6]{margin-top:4.83092vw}@media (min-width:568px){ul li[data-v-b74919c6]{margin-top:20px}}ul a[data-v-b74919c6]{color:currentColor}ul svg[data-v-b74919c6]{display:block;width:9.66184vw}@media (min-width:568px){ul svg[data-v-b74919c6]{width:40px}}@media (min-width:768px){ul svg[data-v-b74919c6]{width:40px}}@media (min-width:1680px){ul svg[data-v-b74919c6]{width:60px}}ul svg path[data-v-b74919c6]{fill:currentColor}",""]),t.exports=e},196:function(t,e){function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(source,t){if(null==source)return{};var e,i,n=function(source,t){if(null==source)return{};var e,i,n={},r=Object.keys(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(n[e]=source[e]);return n}(source,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(source);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(source,e)&&(n[e]=source[e])}return n}t.exports={functional:!0,render:function(t,e){var c=e._c,data=(e._v,e.data),l=e.children,d=void 0===l?[]:l,f=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,h=data.attrs,y=void 0===h?{}:h,O=o(data,["class","staticClass","style","staticStyle","attrs"]);return c("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[f,v],style:[style,m],attrs:Object.assign({version:"1.1",id:"Sound_x5F_Off_1_",x:"0",y:"0",viewBox:"0 0 80 80","xml:space":"preserve"},y)},O),d.concat([c("path",{attrs:{d:"M40.8 33.8v38.6c-.7 9.2-15.8-5.8-18.5-5.8h-10c-1.3 0-1.8-.6-1.8-1.9V41.5c0-.5.3-2 2-2h9.8c2.8 0 17.8-15 18.5-5.7z"}}),c("path",{attrs:{id:"off",d:"M74.7 60.4l-8.2-8.2 8.2-8.2-4-4-8.2 8.2-8.2-8.2-3.9 4 8.2 8.2-8.2 8.2 3.9 4 8.2-8.2 8.2 8.2z"}}),c("g",{attrs:{id:"on"}},[c("path",{attrs:{d:"M62.9 28.5L59 32.4c11.5 11.4 11.5 30 0 41.4l3.9 3.9c13.5-13.6 13.5-35.6 0-49.2z"}}),c("path",{attrs:{d:"M53.3 34.7l-3.9 3.9c7.7 7.7 7.7 20.3 0 28l3.9 3.9c9.9-10 9.9-26 0-35.8z"}})])]))}}},197:function(t,e,n){"use strict";n(185)},198:function(t,e,n){(e=n(26)(!1)).push([t.i,"button[data-v-421cf918]{padding:0;cursor:pointer;background:none;border:none;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}button svg[data-v-421cf918]{display:block;width:9.66184vw}@media (min-width:568px){button svg[data-v-421cf918]{width:40px}}@media (min-width:1680px){button svg[data-v-421cf918]{width:60px}}button svg path[data-v-421cf918]{fill:#fff}button svg #off[data-v-421cf918],button svg #on[data-v-421cf918]{opacity:0}button svg #on[data-v-421cf918]{opacity:1}button.js--muted svg #on[data-v-421cf918]{opacity:0}button.js--muted svg #off[data-v-421cf918]{opacity:1}",""]),t.exports=e},199:function(t,e,n){"use strict";n(186)},200:function(t,e,n){(e=n(26)(!1)).push([t.i,"*[data-v-c7525b0c]{margin:0;color:currentColor}h1[data-v-c7525b0c]{font-size:7.24638vw;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media (min-width:568px){h1[data-v-c7525b0c]{font-size:30px}}@media (min-width:768px){h1[data-v-c7525b0c]{font-size:40px}}",""]),t.exports=e},201:function(t,e,n){"use strict";n(187)},202:function(t,e,n){(e=n(26)(!1)).push([t.i,'.video[data-v-4949dfea]{position:relative}.video[data-v-4949dfea]:after{pointer-events:none;content:"";background:#000;opacity:.2}.video[data-v-4949dfea]:after,span[data-v-4949dfea]{position:absolute;top:0;left:0;display:block;width:100%;height:100%}span[data-v-4949dfea]{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:-webkit-backdrop-filter .35s ease-in;transition:backdrop-filter .35s ease-in;transition:backdrop-filter .35s ease-in,-webkit-backdrop-filter .35s ease-in}.video__poster[data-v-4949dfea]{position:absolute;top:0;left:0;display:block;width:100%;height:100%}.js--ready span[data-v-4949dfea]{-webkit-backdrop-filter:none;backdrop-filter:none}video[data-v-4949dfea]{position:absolute;top:0;left:0;-o-object-fit:cover;object-fit:cover;width:100%;height:100%}.js--muted video+video[data-v-4949dfea]{opacity:0}',""]),t.exports=e},203:function(t,e,n){t.exports=n.p+"videos/210116_Showreel_webseite_EL_mobile.a471bfc.mp4"},204:function(t,e,n){t.exports=n.p+"videos/210116_Showreel_webseite_EL_mobile_ohneSound.616a379.mp4"},205:function(t,e,n){"use strict";n(190)},206:function(t,e,n){(e=n(26)(!1)).push([t.i,".page[data-v-dd71049c]{position:relative;box-sizing:border-box;display:flex;padding:7.24638vw;color:#fff;background:#000}@media (min-width:568px){.page[data-v-dd71049c]{padding:30px}}@media (min-width:768px){.page[data-v-dd71049c]{padding:30px}}@media (min-width:1200px){.page[data-v-dd71049c]{padding:50px}}@media (min-width:1680px){.page[data-v-dd71049c]{padding:60px}}.content[data-v-dd71049c]{position:relative;flex:1}.mobile[data-v-dd71049c],.video[data-v-dd71049c]{position:absolute;top:0;left:0;width:100%;height:100%}.mobile[data-v-dd71049c]{display:none}.sound-button[data-v-dd71049c]{position:absolute;bottom:0;left:0}.play-button[data-v-dd71049c]{position:absolute;top:50%;left:50%;width:55.55556vw;pointer-events:auto;background:transparent;border:none;border-radius:0;outline:none;transform:translate(-50%,-50%);-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (min-width:568px){.play-button[data-v-dd71049c]{width:230px}}@media (min-width:768px){.play-button[data-v-dd71049c]{width:290px}}@media (min-width:1280px){.play-button[data-v-dd71049c]{display:none}}.contacts[data-v-dd71049c]{position:absolute;right:0;bottom:0}.headline[data-v-dd71049c]{position:relative}",""]),t.exports=e},208:function(t,e,n){"use strict";n.r(e);n(9);var r=n(2),o=n(191),c=n.n(o),l=n(192),d=n.n(l),f=n(193),v=n.n(f),m={props:{items:{type:Array,default:()=>[{icon:"mail",url:"mailto: "},{icon:"linkedIn",url:"#"},{icon:"xing",url:"#"}]}},methods:{getIcon:t=>({mail:c.a,linkedIn:d.a,xing:v.a}[String(t)])}},h=(n(194),n(22)),y=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.items,(function(e,r){return n("li",{key:r},[n("a",{attrs:{rel:e.rel,title:e.title,target:e.target,href:e.url}},[n(t.getIcon(e.icon),{tag:"component"})],1)])})),0)}),[],!1,null,"b74919c6",null).exports,O=n(196),w={components:{SvgSound:n.n(O).a},props:{muted:{type:Boolean,default:!1}},data(){return{value:this.muted}},watch:{value(){this.$emit("muted",this.value)}},methods:{onClick(){this.value=!this.value}}},x=(n(197),Object(h.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:{"js--muted":this.value},attrs:{"aria-label":"Mute Button"},on:{click:this.onClick}},[e("svg-sound")],1)}),[],!1,null,"421cf918",null).exports),j={props:{tag:{type:String,default:"h1"},content:{type:String,default:"Headline <br><span>Headline</span>"}}},_=(n(199),Object(h.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{directives:[{name:"font",rawName:"v-font",value:[this.$getFont("Montserrat",900),this.$getFont("Montserrat",300,"normal",{selector:"span"})],expression:"[\n    $getFont('Montserrat', 900),\n    $getFont('Montserrat', 300, 'normal', {selector:'span'})]"}],tag:"component",domProps:{innerHTML:this._s(this.content)}})}),[],!1,null,"c7525b0c",null).exports),S=n(183).a,P=(n(201),{components:{MoleculeContacts:y,AtomSoundButton:x,AtomHeadline:_,AtomVideo:Object(h.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video",class:{"js--ready":t.ready,"js--muted":t.muted}},[n("video",{ref:"videoMuted",attrs:{autoplay:t.autoplay,playsinline:t.playsinline,preload:t.preload,loop:t.loop,poster:t.played?null:t.poster,src:t.currentSourceMuted,muted:"true"},domProps:{muted:!0},on:{canplay:t.onCanplay,play:t.onPlay}}),t._v(" "),n("video",{ref:"video",attrs:{preload:"metadata",loop:t.loop,src:t.currentSource}}),t._v(" "),n("span")])}),[],!1,null,"4949dfea",null).exports},asyncData:()=>Object(r.a)((function*(){var{default:t}=yield n.e(5).then(n.bind(null,207));return{headline:{content:"Erwin Lorenz<br><span>Art Director</span>"},contacts:{items:[{icon:"mail",url:"mailto: erwin.lorenz@gmail.com",title:"Mail"},{icon:"linkedIn",url:"https://www.linkedin.com/in/erwin-lorenz-3a2323a2/",target:"_blank",title:"LinkedIn",rel:"noreferrer"},{icon:"xing",url:"https://www.xing.com/profile/Erwin_Lorenz/",target:"_blank",title:"Xing",rel:"noreferrer"}]},videoUrl:"https://youtu.be/vHT-ZXZvbVM",video:{id:"R6Emy08zWTU",autoplay:!0},videoNative:{playsinline:!0,autoplay:!0,poster:t,sources:[{src:n(188),media:"(min-width: 768px)"},{src:n(188),media:"(orientation: landscape)"},{src:n(203)}],mutedSources:[{src:n(189),media:"(min-width: 768px)"},{src:n(189),media:"(orientation: landscape)"},{src:n(204)}]}}}))(),data:()=>({videoMuted:!0})}),k=(n(205),Object(h.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"video"},[n("atom-video",t._b({attrs:{muted:t.videoMuted}},"atom-video",t.videoNative,!1))],1),t._v(" "),n("div",{staticClass:"content"},[n("molecule-contacts",t._b({staticClass:"contacts"},"molecule-contacts",t.contacts,!1)),t._v(" "),n("atom-sound-button",{staticClass:"sound-button",attrs:{muted:t.videoMuted},on:{muted:function(e){t.videoMuted=e}}}),t._v(" "),n("atom-headline",t._b({staticClass:"headline",attrs:{critical:""}},"atom-headline",t.headline,!1))],1)])}),[],!1,null,"dd71049c",null));e.default=k.exports}}]);