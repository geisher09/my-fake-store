(function(){"use strict";var e={875:function(e,t,a){var n=a(963),s=a(252);function r(e,t){const a=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(a)}var i=a(744);const o={},l=(0,i.Z)(o,[["render",r]]);var c=l,u=a(201),d=a(262),p=a(577);const f={class:"loader-wrapper"},v=(0,s._)("div",{class:"loader"},null,-1),m=[v];function w(e,t){return(0,s.wg)(),(0,s.iD)("div",f,m)}const g={},b=(0,i.Z)(g,[["render",w]]);var h=b;const y={class:"banner"},k=(0,s.uE)('<div class="container d-flex justify-content-between"><span>Welcome to MyFakeStore!</span><div class="other-details d-flex justify-content-between"><div class="icon-text"><i class="fa-solid fa-location-dot"></i><span>Deliver to <strong>123456</strong></span></div><div class="icon-text"><i class="fa-solid fa-truck"></i><span>Track your order</span></div><div class="icon-text"><i class="fa-solid fa-tag"></i><span>All Offers</span></div></div></div>',1),_=[k];function j(e,t){return(0,s.wg)(),(0,s.iD)("div",y,_)}const x={},C=(0,i.Z)(x,[["render",j]]);var D=C;const O={class:"footer-wrapper"},S=(0,s.uE)('<div class="main-details text-center"><h2 class="mb-3 fw-bold">Lorem. Ipmsum. Dolor.</h2><p class="mb-5"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><div class="contact-links d-flex justify-content-between"><a href=""><i class="fa-brands fa-facebook-f"></i></a><a href=""><i class="fa-brands fa-twitter"></i></a><a href=""><i class="fa-brands fa-instagram"></i></a></div></div><div class="brand-details d-flex justify-content-between align-items-center row"><a href="" class="col-md-6 col-sm-12 text-md-start text-center"> MyFakeStore </a><span class="col-md-6 col-sm-12 text-md-end text-center"> © 2024 MyFakeStore. All Rights Reserved. </span></div>',2),H=[S];function L(e,t){return(0,s.wg)(),(0,s.iD)("div",O,H)}const T={},E=(0,i.Z)(T,[["render",L]]);var P=E;const M={class:"background"},A=(0,s.uE)("<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>",20),F=[A];function U(e,t){return(0,s.wg)(),(0,s.iD)("div",M,F)}const z={},K=(0,i.Z)(z,[["render",U]]);var Z=K;const q={class:"products-list-main"},N={class:"container h-100"},W={key:1,class:"products-list-wrapper container"},Y={class:"d-flex justify-content-between main-logo align-items-center"},R=(0,s._)("h1",{class:"fw-bold"},"MyFakeStore",-1),$={class:"search-wrapper"},B=(0,s._)("i",{class:"fa-solid fa-magnifying-glass"},null,-1),I={class:"categories-wrapper"},V=["onClick"],G={key:0,class:"row gy-5 products-row"},J={class:"product-details-wrapper"},Q=["src","alt"],X={class:"product-info"},ee={class:"product-title mb-2"},te={class:"product-description mb-3"},ae={class:"product-price mb-1"},ne={class:"ratings-container"},se={class:"empty-stars-wrapper"},re={class:"rate-count"},ie={key:1,class:"no-results"};var oe={__name:"Products",setup(e){const t=(0,d.iH)(!0),a=(0,d.iH)(""),r=(0,d.iH)(""),i=(0,d.iH)(null),o=(0,d.iH)(null),l=(0,d.iH)(null),c=(0,d.iH)(null),u=async()=>{const e=await fetch("https://fakestoreapi.com/products");o.value=await e.json(),l.value=o.value;const a=await fetch("https://fakestoreapi.com/products/categories");c.value=await a.json(),t.value=!1},f=()=>{r.value?l.value=o.value.filter((e=>e.category==r.value&&e.title.toLowerCase().includes(a.value.toLowerCase()))):l.value=o.value.filter((e=>e.title.toLowerCase().includes(a.value.toLowerCase())))},v=(e,t)=>{const n=e.currentTarget.innerHTML;if(i.value=i.value===t?null:t,null==i.value)return l.value=o.value.filter((e=>e.title.toLowerCase().includes(a.value.toLowerCase()))),void(r.value=null);r.value=n,l.value=o.value.filter((e=>e.category==n&&e.title.toLowerCase().includes(a.value.toLowerCase())))};return(0,s.bv)((()=>{u()})),(e,r)=>((0,s.wg)(),(0,s.iD)("div",q,[(0,s.Wm)((0,d.SU)(D)),(0,s._)("div",N,[(0,s.Wm)((0,d.SU)(Z)),(0,s._)("div",{class:(0,p.C_)(["row h-100",t.value?"loader-row":""])},[t.value?((0,s.wg)(),(0,s.j4)((0,d.SU)(h),{key:0})):((0,s.wg)(),(0,s.iD)("div",W,[(0,s._)("div",Y,[R,(0,s._)("div",$,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>a.value=e),placeholder:"Search..",onKeyup:f},null,544),[[n.nr,a.value]]),B])]),(0,s._)("div",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.value,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,onClick:e=>v(e,t),class:(0,p.C_)(["category",{active:i.value==t}])},(0,p.zw)(e),11,V)))),128))]),l.value.length?((0,s.wg)(),(0,s.iD)("div",G,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.value,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"col-xl-3 col-lg-4 col-md-6 col-sm-12"},[(0,s._)("div",J,[(0,s._)("img",{class:"mb-3",src:e.image,alt:e.title,width:"90"},null,8,Q),(0,s._)("div",X,[(0,s._)("div",ee,(0,p.zw)(e.title),1),(0,s._)("div",te,(0,p.zw)(e.description),1),(0,s._)("div",ae," $"+(0,p.zw)(e.price),1),(0,s._)("div",ne,[(0,s._)("div",se,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(e=>(0,s._)("span",{key:e,class:"fa-regular fa-star"}))),64))]),(0,s._)("div",{class:"filled-stars-wrapper",style:(0,p.j5)(`width: ${e.rating.rate/5*100}%`)},[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(e=>(0,s._)("span",{key:e,class:"fa-solid fa-star"}))),64))],4)]),(0,s._)("div",re,(0,p.zw)(e.rating.count)+" Reviews ",1)])])])))),128))])):((0,s.wg)(),(0,s.iD)("div",ie," No results found. "))]))],2)]),(0,s.Wm)((0,d.SU)(P))]))}};const le=oe;var ce=le;const ue=[{path:"/",name:"home",component:ce},{path:"/dashboard",name:"dashboard",component:()=>a.e(443).then(a.bind(a,833))}],de=(0,u.p7)({history:(0,u.PO)("/my-fake-store/"),routes:ue});var pe=de;(0,n.ri)(c).use(pe).mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,r){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],r=e[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(o=!1,r<i&&(i=r));if(o){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,s,r]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.bb7a902a.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-fake-store:";a.l=function(n,s,r,i){if(e[n])e[n].push(s);else{var o,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+r),o.src=n),e[n]=[s];var p=function(t,a){o.onerror=o.onload=null,clearTimeout(f);var s=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/my-fake-store/"}(),function(){var e={143:0};a.f.j=function(t,n){var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise((function(a,n){s=e[t]=[a,n]}));n.push(s[2]=r);var i=a.p+a.u(t),o=new Error,l=function(n){if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,s[1](o)}};a.l(i,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,i=n[0],o=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var u=l(a)}for(t&&t(n);c<i.length;c++)r=i[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=self["webpackChunkmy_fake_store"]=self["webpackChunkmy_fake_store"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(875)}));n=a.O(n)})();
//# sourceMappingURL=app.7fbd21c7.js.map