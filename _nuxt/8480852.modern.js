!function(t){function e(data){for(var e,n,l=data[0],h=data[1],f=data[2],i=0,m=[];i<l.length;i++)n=l[i],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(e in h)Object.prototype.hasOwnProperty.call(h,e)&&(t[e]=h[e]);for(d&&d(data);m.length;)m.shift()();return c.push.apply(c,f||[]),r()}function r(){for(var t,i=0;i<c.length;i++){for(var e=c[i],r=!0,n=1;n<e.length;n++){var h=e[n];0!==o[h]&&(r=!1)}r&&(c.splice(i--,1),t=l(l.s=e[0]))}return t}var n={},o={0:0},c=[];function l(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(t){var e=[],r=o[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=n);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(t){return l.p+""+{2:"dcb3a27"}[t]+".modern.js"}(t);var h=new Error;c=function(e){script.onerror=script.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",h.name="ChunkLoadError",h.type=n,h.request=c,r[1](h)}o[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},l.p="/website/_nuxt/",l.oe=function(t){throw console.error(t),t};var h=window.webpackJsonp=window.webpackJsonp||[],f=h.push.bind(h);h.push=e,h=h.slice();for(var i=0;i<h.length;i++)e(h[i]);var d=f;c.push([114,1,3]),r()}({0:function(t,e,r){"use strict";r.d(e,"j",(function(){return f})),r.d(e,"l",(function(){return d})),r.d(e,"k",(function(){return m})),r.d(e,"e",(function(){return v})),r.d(e,"b",(function(){return y})),r.d(e,"r",(function(){return _})),r.d(e,"g",(function(){return x})),r.d(e,"h",(function(){return w})),r.d(e,"d",(function(){return $})),r.d(e,"q",(function(){return O})),r.d(e,"s",(function(){return E})),r.d(e,"n",(function(){return P})),r.d(e,"p",(function(){return k})),r.d(e,"f",(function(){return S})),r.d(e,"c",(function(){return N})),r.d(e,"i",(function(){return D})),r.d(e,"o",(function(){return R})),r.d(e,"a",(function(){return K})),r.d(e,"m",(function(){return X}));r(147),r(12),r(39),r(148),r(151),r(10),r(152),r(43),r(154),r(60),r(96),r(155),r(97),r(157),r(14);var n=r(2),o=r(28),c=r(1);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function f(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function d(t){return t.then(t=>t.default||t)}function m(t){return t.$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.$children||[];for(var n of r)n.$fetch?e.push(n):n.$children&&v(n,e);return e}function y(t,e){if(e||!t.options.__hasNuxtData){var r=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=r,t.options.data=function(){var data=r.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),h(h({},data),e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function _(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t[r]).map(o=>(e&&e.push(n),t[r][o]))))}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return x(t,e,"instances")}function $(t,e){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t.components).reduce((n,o)=>(t.components[o]?n.push(e(t.components[o],t.instances[o],t,o,r)):delete t.components[o],n),[])))}function O(t,e){return Promise.all($(t,function(){var t=Object(n.a)((function*(t,r,n,o){return"function"!=typeof t||t.options||(t=yield t()),n.components[o]=t=_(t),"function"==typeof e?e(t,r,n,o):t}));return function(e,r,n,o){return t.apply(this,arguments)}}()))}function C(t){return j.apply(this,arguments)}function j(){return(j=Object(n.a)((function*(t){if(t)return yield O(t),h(h({},t),{},{meta:x(t).map((e,r)=>h(h({},e.options.meta),(t.matched[r]||{}).meta))})}))).apply(this,arguments)}function E(t,e){return T.apply(this,arguments)}function T(){return(T=Object(n.a)((function*(t,e){t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/website/",env:{NUXT_SPEEDKIT_LAZY_OFFSET_COMPONENT:"0%",NUXT_SPEEDKIT_LAZY_OFFSET_ASSET:"0%",NUXT_SPEEDKIT_IGNORE_PERFORMANCE:!1}},e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,r)=>{if(e){t.context._redirected=!0;var n=typeof path;if("number"==typeof e||"undefined"!==n&&"object"!==n||(r=path||{},n=typeof(path=e),e=302),"object"===n&&(path=t.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=F(path,r),window.location.replace(path),new Error("ERR_REDIRECT");t.context.next({path:path,query:r,status:e})}},t.context.nuxtState=window.__NUXT__);var[r,n]=yield Promise.all([C(e.route),C(e.from)]);e.route&&(t.context.route=r),e.from&&(t.context.from=n),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}))).apply(this,arguments)}function P(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():k(t[0],e).then(()=>P(t.slice(1),e))}function k(t,e){var r;return(r=2===t.length?new Promise(r=>{t(e,(function(t,data){t&&e.error(t),r(data=data||{})}))}):t(e))&&r instanceof Promise&&"function"==typeof r.then?r:Promise.resolve(r)}function S(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&(path.endsWith("/")?path:path+"/").startsWith(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function N(t,e){return function(t,e){for(var r=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(r[i]=new RegExp("^(?:"+t[i].pattern+")$",U(e)));return function(e,n){for(var path="",data=e||{},o=(n||{}).pretty?I:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var h=data[l.name||"pathMatch"],f=void 0;if(null==h){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(f=o(h[d]),!r[c].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");path+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?I(h,!0):o(h),!r[c].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');path+=l.prefix+f}}else path+=l}return path}}(function(t,e){var r,n=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(r=A.exec(t));){var h=r[0],f=r[1],d=r.index;if(path+=t.slice(c,d),c=d+h.length,f)path+=f[1];else{var m=t[c],v=r[2],y=r[3],_=r[4],x=r[5],w=r[6],$=r[7];path&&(n.push(path),path="");var O=null!=v&&null!=m&&m!==v,C="+"===w||"*"===w,j="?"===w||"*"===w,E=r[2]||l,pattern=_||x;n.push({name:y||o++,prefix:v||"",delimiter:E,optional:j,repeat:C,partial:O,asterisk:Boolean($),pattern:pattern?M(pattern):$?".*":"[^"+L(E)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&n.push(path);return n}(t,e),e)}function D(t,e){var r={},n=h(h({},t),e);for(var o in n)String(t[o])!==String(e[o])&&(r[o]=!0);return r}function R(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(r){e="[".concat(t.constructor.name,"]")}return h(h({},t),{},{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=t=>{window.onNuxtReadyCbs.push(t)};var A=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(t,e){var r=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(r,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function L(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$/()])/g,"\\$1")}function U(t){return t&&t.sensitive?"":"i"}function F(t,e){var r,n=t.indexOf("://");-1!==n?(r=t.substring(0,n),t=t.substring(n+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(r?r+"://":"//")+c.shift(),path=c.join("/");return""===path&&1===c.length&&(l+="/"),2===(c=path.split("#")).length&&([path,o]=c),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{var r=t[e];return null==r?"":Array.isArray(r)?r.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+r}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}function K(t,e,r){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(r)||t.$options[e].push(r)}function B(path){return path.replace(/\/+$/,"")||"/"}function X(t,e){return B(t)===B(e)}},100:function(t,e,r){var content=r(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("24cef20f",content,!0,{sourceMap:!1})},101:function(t,e,r){t.exports=r.p+"fonts/montserrat-v15-latin-300.7c3daf1.woff2"},102:function(t,e,r){t.exports=r.p+"fonts/montserrat-v15-latin-900.58cd789.woff2"},112:function(t,e,r){"use strict";r(10);var n=r(2),o=r(1),c=r(0),l=window.__NUXT__;function h(){if(!this._hydrated)return this.$fetch()}function f(){if((t=this).$vnode&&t.$vnode.elm&&t.$vnode.elm.dataset&&t.$vnode.elm.dataset.fetchKey){var t;this._hydrated=!0,this._fetchKey=+this.$vnode.elm.dataset.fetchKey;var data=l.fetch[this._fetchKey];if(data&&data._error)this.$fetchState.error=data._error;else for(var e in data)o.a.set(this.$data,e,data[e])}}function d(){return this._fetchPromise||(this._fetchPromise=m.call(this).then(()=>{delete this._fetchPromise})),this._fetchPromise}function m(){return v.apply(this,arguments)}function v(){return(v=Object(n.a)((function*(){this.$nuxt.nbFetching++,this.$fetchState.pending=!0,this.$fetchState.error=null,this._hydrated=!1;var t=null,e=Date.now();try{yield this.$options.fetch.call(this)}catch(e){0,t=Object(c.o)(e)}var r=this._fetchDelay-(Date.now()-e);r>0&&(yield new Promise(t=>setTimeout(t,r))),this.$fetchState.error=t,this.$fetchState.pending=!1,this.$fetchState.timestamp=Date.now(),this.$nextTick(()=>this.$nuxt.nbFetching--)}))).apply(this,arguments)}e.a={beforeCreate(){Object(c.k)(this)&&(this._fetchDelay="number"==typeof this.$options.fetchDelay?this.$options.fetchDelay:200,o.a.util.defineReactive(this,"$fetchState",{pending:!1,error:null,timestamp:Date.now()}),this.$fetch=d.bind(this),Object(c.a)(this,"created",f),Object(c.a)(this,"beforeMount",h))}}},114:function(t,e,r){t.exports=r(115)},115:function(t,e,r){"use strict";r.r(e),function(t){r(10);var e=r(67),n=!1;t.__NUXT_SPEEDKIT_INIT__=()=>{n||(n=!0,Promise.resolve().then(r.bind(null,137)))},t.__NUXT_SPEEDKIT_AUTO_INIT__="__NUXT_SPEEDKIT_AUTO_INIT__"in t&&t.__NUXT_SPEEDKIT_AUTO_INIT__,Object(e.b)({device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:800,dcl:1200},lighthouseDetectionByUserAgent:!1});var button=document.querySelector(".nuxt-speedkit__speedkit-layer__button");button?button.addEventListener("click",()=>{t.__NUXT_SPEEDKIT_INIT__()},{capture:!0,once:!0,passive:!0}):console.error("info layer is not implemented"),(t.__NUXT_SPEEDKIT_AUTO_INIT__||Object(e.a)())&&t.__NUXT_SPEEDKIT_INIT__()}.call(this,r(9))},137:function(t,e,r){"use strict";r.r(e),function(t){r(12),r(22),r(10),r(60),r(143),r(14);var e=r(2),n=r(1),o=r(104),c=r(68),l=r(0),h=r(17),f=r(112),d=r(45);n.a.__nuxt__fetch__mixin__||(n.a.mixin(f.a),n.a.__nuxt__fetch__mixin__=!0),n.a.component(d.a.name,d.a),n.a.component("NLink",d.a),t.fetch||(t.fetch=o.a);var m,v,y=[],_=window.__NUXT__||{};Object.assign(n.a.config,{silent:!0,performance:!1});var x=n.a.config.errorHandler||console.error;function w(t,e,r){for(var n=component=>{var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,r=new Array(e>2?e-2:0),n=2;n<e;n++)r[n-2]=arguments[n];return option(...r)}return option}(component,"transition",e,r)||{};return"string"==typeof t?{name:t}:t},o=r?Object(l.g)(r):[],c=Math.max(t.length,o.length),h=[],f=function(i){var e=Object.assign({},n(t[i])),r=Object.assign({},n(o[i]));Object.keys(e).filter(t=>void 0!==e[t]&&!t.toLowerCase().includes("leave")).forEach(t=>{r[t]=e[t]}),h.push(r)},i=0;i<c;i++)f(i);return h}function $(t,e,r){return O.apply(this,arguments)}function O(){return(O=Object(e.a)((function*(t,e,r){this._routeChanged=Boolean(m.nuxt.err)||e.name!==t.name,this._paramChanged=!this._routeChanged&&e.path!==t.path,this._queryChanged=!this._paramChanged&&e.fullPath!==t.fullPath,this._diffQuery=this._queryChanged?Object(l.i)(t.query,e.query):[],(this._routeChanged||this._paramChanged)&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();try{if(this._queryChanged)(yield Object(l.q)(t,(t,e)=>({Component:t,instance:e}))).some(r=>{var{Component:n,instance:o}=r,c=n.options.watchQuery;return!0===c||(Array.isArray(c)?c.some(t=>this._diffQuery[t]):"function"==typeof c&&c.apply(o,[t.query,e.query]))})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();r()}catch(l){var n=l||{},o=n.statusCode||n.status||n.response&&n.response.status||500,c=n.message||"";if(/^Loading( CSS)? chunk (\d)+ failed\./.test(c))return void window.location.reload(!0);this.error({statusCode:o,message:c}),this.$nuxt.$emit("routeChanged",t,e,n),r()}}))).apply(this,arguments)}function C(t){var path=Object(l.f)(t.options.base,t.options.mode);return Object(l.d)(t.match(path),function(){var t=Object(e.a)((function*(t,e,r,n,o){"function"!=typeof t||t.options||(t=yield t());var c=function(t,e){return _.serverRendered&&e&&Object(l.b)(t,e),t._Ctor=t,t}(Object(l.r)(t),_.data?_.data[o]:null);return r.components[n]=c,c}));return function(e,r,n,o,c){return t.apply(this,arguments)}}())}function j(t,e,r){var n=[],o=!1;if(void 0!==r&&(n=[],(r=Object(l.r)(r)).options.middleware&&(n=n.concat(r.options.middleware)),t.forEach(t=>{t.options.middleware&&(n=n.concat(t.options.middleware))})),n=n.map(t=>"function"==typeof t?t:("function"!=typeof c.a[t]&&(o=!0,this.error({statusCode:500,message:"Unknown middleware "+t})),c.a[t])),!o)return Object(l.n)(n,e)}function E(t,e,r){return T.apply(this,arguments)}function T(){return(T=Object(e.a)((function*(t,r,n){var o=this;if(!1===this._routeChanged&&!1===this._paramChanged&&!1===this._queryChanged)return n();if(t===r)y=[],!0;else{var c=[];y=Object(l.g)(r,c).map((t,i)=>Object(l.c)(r.matched[c[i]].path)(r.params))}var f=!1;yield Object(l.s)(m,{route:t,from:r,next:(path=>{r.path===path.path&&this.$loading.finish&&this.$loading.finish(),r.path!==path.path&&this.$loading.pause&&this.$loading.pause(),f||(f=!0,n(path))}).bind(this)}),this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err);var d=[],v=Object(l.g)(t,d);if(!v.length){if(yield j.call(this,v,m.context),f)return;var _=(h.a.options||h.a).layout,x=yield this.loadLayout("function"==typeof _?_.call(h.a,m.context):_);if(yield j.call(this,v,m.context,x),f)return;return m.context.error({statusCode:404,message:"This page could not be found"}),n()}v.forEach(t=>{t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(w(v,t,r));try{if(yield j.call(this,v,m.context),f)return;if(m.context._errored)return n();var $=v[0].options.layout;if("function"==typeof $&&($=$(m.context)),$=yield this.loadLayout($),yield j.call(this,v,m.context,$),f)return;if(m.context._errored)return n();var O,C=!0;try{for(var E of v)if("function"==typeof E.options.validate&&!(C=yield E.options.validate(m.context)))break}catch(t){return this.error({statusCode:t.statusCode||"500",message:t.message}),n()}if(!C)return this.error({statusCode:404,message:"This page could not be found"}),n();yield Promise.all(v.map(function(){var n=Object(e.a)((function*(e,i){e._path=Object(l.c)(t.matched[d[i]].path)(t.params),e._dataRefresh=!1;var n=e._path!==y[i];if(o._routeChanged&&n)e._dataRefresh=!0;else if(o._paramChanged&&n){var c=e.options.watchParam;e._dataRefresh=!1!==c}else if(o._queryChanged){var h=e.options.watchQuery;!0===h?e._dataRefresh=!0:Array.isArray(h)?e._dataRefresh=h.some(t=>o._diffQuery[t]):"function"==typeof h&&(O||(O=Object(l.h)(t)),e._dataRefresh=h.apply(O[i],[t.query,r.query]))}if(o._hadError||!o._isMounted||e._dataRefresh){var f=[],v=e.options.asyncData&&"function"==typeof e.options.asyncData,_=Boolean(e.options.fetch)&&e.options.fetch.length,x=v&&_?30:45;if(v){var w=Object(l.p)(e.options.asyncData,m.context);w.then(t=>{Object(l.b)(e,t),o.$loading.increase&&o.$loading.increase(x)}),f.push(w)}if(o.$loading.manual=!1===e.options.loading,_){var p=e.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(t=>{o.$loading.increase&&o.$loading.increase(x)}),f.push(p)}return Promise.all(f)}}));return function(t,e){return n.apply(this,arguments)}}())),f||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),n())}catch(e){var T=e||{};if("ERR_REDIRECT"===T.message)return this.$nuxt.$emit("routeChanged",t,r,T);y=[],Object(l.j)(T);var P=(h.a.options||h.a).layout;"function"==typeof P&&(P=P(m.context)),yield this.loadLayout(P),this.error(T),this.$nuxt.$emit("routeChanged",t,r,T),n()}}))).apply(this,arguments)}function P(t,e){Object(l.d)(t,(t,e,r,o)=>("object"!=typeof t||t.options||((t=n.a.extend(t))._Ctor=t,r.components[o]=t),t))}function k(t){var e=Boolean(this.$options.nuxt.err);this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&(e=!1);var r=e?(h.a.options||h.a).layout:t.matched[0].components.default.options.layout;"function"==typeof r&&(r=r(m.context)),this.setLayout(r)}function S(t){t._hadError&&t._dateLastError===t.$options.nuxt.dateErr&&t.error()}function N(t,e){if(!1!==this._routeChanged||!1!==this._paramChanged||!1!==this._queryChanged){var r=Object(l.h)(t),o=Object(l.g)(t);n.a.nextTick(()=>{r.forEach((t,i)=>{if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&o[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)n.a.set(t.$data,r,e[r]);window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}),S(this)})}}function D(t){window.onNuxtReadyCbs.forEach(e=>{"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach((e,r)=>{n.a.nextTick(()=>t.$nuxt.$emit("routeChanged",e,r))})}function R(){return(R=Object(e.a)((function*(t){m=t.app,v=t.router;var e=new n.a(m),r=_.layout||"default";yield e.loadLayout(r),e.setLayout(r);var o=()=>{e.$mount("#__nuxt"),v.afterEach(P),v.afterEach(k.bind(e)),v.afterEach(N.bind(e)),n.a.nextTick(()=>{D(e)})},c=yield Promise.all(C(v));if(e.setTransitions=e.$options.nuxt.setTransitions.bind(e),c.length&&(e.setTransitions(w(c,v.currentRoute)),y=v.currentRoute.matched.map(t=>Object(l.c)(t.path)(v.currentRoute.params))),e.$loading={},_.error&&e.error(_.error),v.beforeEach($.bind(e)),v.beforeEach(E.bind(e)),_.serverRendered&&Object(l.m)(_.routePath,e.context.route.path))return o();var h=()=>{P(v.currentRoute,v.currentRoute),k.call(e,v.currentRoute),S(e),o()};yield new Promise(t=>setTimeout(t,0)),E.call(e,v.currentRoute,v.currentRoute,path=>{if(path){var t=v.afterEach((e,r)=>{t(),h()});v.push(path,void 0,t=>{t&&x(t)})}else h()})}))).apply(this,arguments)}Object(h.b)(null,_.config).then((function(t){return R.apply(this,arguments)})).catch(x)}.call(this,r(9))},161:function(t,e,r){"use strict";r(98)},162:function(t,e,r){(e=r(35)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},163:function(t,e,r){"use strict";r(99)},164:function(t,e,r){(e=r(35)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},165:function(t,e,r){"use strict";r(100)},166:function(t,e,r){(e=r(35)(!1)).push([t.i,"div[data-v-b565952a]{position:fixed;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},167:function(t,e,r){var content=r(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("5f618b5e",content,!0,{sourceMap:!1})},168:function(t,e,r){var n=r(35),o=r(169),c=r(101),l=r(170),h=r(102),f=r(171);e=n(!1);var d=o(c),m=o(l),v=o(h),y=o(f);e.push([t.i,'@font-face{font-family:"Montserrat";font-style:normal;font-weight:300;font-display:swap;src:local("Montserrat Black"),url('+d+') format("woff2"),url('+m+') format("woff")}@font-face{font-family:"Montserrat";font-style:normal;font-weight:900;font-display:swap;src:local("Montserrat Black"),url('+v+') format("woff2"),url('+y+') format("woff")}',""]),t.exports=e},17:function(t,e,r){"use strict";r.d(e,"b",(function(){return X})),r.d(e,"a",(function(){return P}));r(22),r(10);var n=r(2),o=r(28),c=r(1),l=r(105),h=r(69),f=r.n(h),d=r(29),m=r.n(d),v=r(34),y=r(0);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",()=>{window.history.scrollRestoration="auto"}),window.addEventListener("load",()=>{window.history.scrollRestoration="manual"}));var _=()=>{},x=v.a.prototype.push;v.a.prototype.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,r=arguments.length>2?arguments[2]:void 0;return x.call(this,t,e,r)},c.a.use(v.a);var w={mode:"history",base:decodeURI("/website/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,r){var n=!1,o=Object(y.g)(t);(o.some(t=>t.options.scrollToTop)||o.length<2&&o.every(t=>!1!==t.options.scrollToTop))&&(n={x:0,y:0}),r&&(n=r);var c=window.$nuxt;return(t.path===e.path&&t.hash!==e.hash||t===e)&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){var r=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(r="#"+window.CSS.escape(r.substr(1)));try{document.querySelector(r)&&(n={selector:r})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(n)})})},routes:[{path:"/",component:()=>Object(y.l)(r.e(2).then(r.bind(null,209))),name:"index"}],fallback:!1};function $(){return new v.a(w)}var O={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,e){var{parent:r,data:data,props:n}=e,o=r.$createElement;data.nuxtChild=!0;for(var c=r,l=r.$nuxt.nuxt.transitions,h=r.$nuxt.nuxt.defaultTransition,f=0;r;)r.$vnode&&r.$vnode.data.nuxtChild&&f++,r=r.$parent;data.nuxtChildDepth=f;var d=l[f]||h,m={};C.forEach(t=>{void 0!==d[t]&&(m[t]=d[t])});var v={};j.forEach(t=>{"function"==typeof d[t]&&(v[t]=d[t].bind(c))});var y=v.beforeEnter;if(v.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),y)return y.call(c,t)},!1===d.css){var _=v.leave;(!_||_.length<2)&&(v.leave=(t,e)=>{_&&_.call(c,t),c.$nextTick(e)})}var x=o("routerView",data);return n.keepAlive&&(x=o("keep-alive",{props:n.keepAliveProps},[x])),o("transition",{props:m,on:v},[x])}},C=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],j=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],E={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},T=(r(161),r(23)),P=Object(T.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[r("div",{staticClass:"error"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[r("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?r("p",{staticClass:"description"},[void 0===t.$route?r("a",{staticClass:"error-link",attrs:{href:"/"}}):r("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,k=(r(12),r(43),r(96),r(14),{name:"Nuxt",components:{NuxtChild:O,NuxtError:P},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(y.c)(this.$route.matched[0].path)(this.$route.params);var[t]=this.$route.matched;if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var{options:r}=e;if(r.key)return"function"==typeof r.key?r.key(this.$route):r.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occurred while showing the error page"),t("p","Unfortunately an error occurred and while showing the error page another error occurred"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(P,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}}),S={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(t){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100||this.percent<=0)&&(this.skipTimerCount=1,this.reversed=!this.reversed))},100)}},render(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},N=(r(163),Object(T.a)(S,void 0,void 0,!1,null,null,null).exports),D=(r(165),Object(T.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,"b565952a",null).exports),R={_default:Object(y.r)(D)},A={render(t,e){var r=t("NuxtLoading",{ref:"loading"}),n=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[r,c])},data:()=>({isOnline:!0,layout:null,layoutName:"",nbFetching:0}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted(){var t=this;return Object(n.a)((function*(){t.$loading=t.$refs.loading}))()},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline},isFetching(){return this.nbFetching>0},isPreview(){return Boolean(this.$options.previewData)}},methods:{refreshOnlineStatus(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh(){var t=this;return Object(n.a)((function*(){var e=Object(y.h)(t.$route);if(e.length){t.$loading.start();var r=e.map(e=>{var p=[];if(e.$options.fetch&&e.$options.fetch.length&&p.push(Object(y.p)(e.$options.fetch,t.context)),e.$fetch)p.push(e.$fetch());else for(var component of Object(y.e)(e.$vnode.componentInstance))p.push(component.$fetch());return e.$options.asyncData&&p.push(Object(y.p)(e.$options.asyncData,t.context).then(t=>{for(var r in t)c.a.set(e.$data,r,t[r])})),Promise.all(p)});try{yield Promise.all(r)}catch(e){t.$loading.fail(e),Object(y.j)(e),t.error(e)}t.$loading.finish()}}))()},errorChanged(){if(this.nuxt.err){this.$loading&&(this.$loading.fail&&this.$loading.fail(this.nuxt.err),this.$loading.finish&&this.$loading.finish());var t=(P.options||P).layout;"function"==typeof t&&(t=t(this.context)),this.setLayout(t)}},setLayout(t){return t&&R["_"+t]||(t="default"),this.layoutName=t,this.layout=R["_"+t],this.layout},loadLayout:t=>(t&&R["_"+t]||(t="default"),Promise.resolve(R["_"+t]))},components:{NuxtLoading:N}},I=(r(167),r(113)),L=r(107);c.a.use(I.a);var M=new L.a([{family:"Montserrat",locals:["Montserrat Black"],fallback:["sans-serif"],variances:[{style:"normal",weight:300,sources:[{src:"@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-300.woff2",type:"woff2"},{src:"@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-300.woff",type:"woff"}],src:r(101),type:"woff2"},{style:"normal",weight:900,sources:[{src:"@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-900.woff2",type:"woff2"},{src:"@/assets/fonts/montserrat-v15-latin/montserrat-v15-latin-900.woff",type:"woff"}],src:r(102),type:"woff2"}]}]),U=(t,e)=>{e("getFont",M.getFont.bind(M))};function F(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function K(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.a.component(f.a.name,f.a),c.a.component(m.a.name,K(K({},m.a),{},{render:(t,e)=>(m.a._warned||(m.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),m.a.render(t,e))})),c.a.component(O.name,O),c.a.component("NChild",O),c.a.component(k.name,k),c.a.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var B={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function X(t){return z.apply(this,arguments)}function z(){return(z=Object(n.a)((function*(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=yield $(),o=K({head:{title:"Erwin Lorenz - Art Director",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},router:n,nuxt:{defaultTransition:B,transitions:[B],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},B,{name:t}):Object.assign({},B,t):B),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,o.context._errored=Boolean(e),e=e?Object(y.o)(e):null;var r=o.nuxt;return this&&(r=this.nuxt||this.$options.nuxt),r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}}},A),l=t?t.next:t=>o.router.push(t);if(t)e=n.resolve(t.url).route;else{var path=Object(y.f)(n.options.base,n.options.mode);e=n.resolve(path).route}function h(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject('".concat(t,"', value) has no value provided"));o[t="$"+t]=e,o.context[t]||(o.context[t]=e);var r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{Object.prototype.hasOwnProperty.call(c.a.prototype,t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))}return yield Object(y.s)(o,{route:e,next:l,error:o.nuxt.error.bind(o),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t}),h("config",r),o.context.enablePreview=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.previewData=Object.assign({},t),h("preview",t)},yield U(o.context,h),o.context.enablePreview=function(){console.warn("You cannot call enablePreview() outside a plugin.")},{app:o,router:n}}))).apply(this,arguments)}},170:function(t,e,r){t.exports=r.p+"fonts/montserrat-v15-latin-300.8dc95fa.woff"},171:function(t,e,r){t.exports=r.p+"fonts/montserrat-v15-latin-900.26d42c9.woff"},45:function(t,e,r){"use strict";r(12),r(10),r(60),r(14);var n=r(1),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))})}),1)},c=window.cancelIdleCallback||function(t){clearTimeout(t)},l=window.IntersectionObserver&&new window.IntersectionObserver(t=>{t.forEach(t=>{var{intersectionRatio:e,target:link}=t;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:n.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy(){c(this.handleId),this.__observed&&(l.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe(){l&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),l.observe(this.$el),this.__observed=!0)},shouldPrefetch(){return this.getPrefetchComponents().length>0},canPrefetch(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(t=>t.components.default).filter(t=>"function"==typeof t&&!t.options&&!t.__prefetched)},prefetchLink(){if(this.canPrefetch()){l.unobserve(this.$el);var t=this.getPrefetchComponents();for(var e of t){var r=e();r instanceof Promise&&r.catch(()=>{}),e.__prefetched=!0}}}}}},68:function(t,e,r){"use strict";e.a={}},98:function(t,e,r){var content=r(162);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("72daabed",content,!0,{sourceMap:!1})},99:function(t,e,r){var content=r(164);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("3191d5ad",content,!0,{sourceMap:!1})}});