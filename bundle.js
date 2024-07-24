(()=>{"use strict";var t,n,e={208:(t,n,e)=>{e.d(n,{A:()=>p});var r=e(601),o=e.n(r),i=e(314),a=e.n(i),s=e(417),c=e.n(s),l=new URL(e(531),e.b),d=a()(o()),u=c()(l);d.push([t.id,`/* \nCTRL+F INDEX\n* GRIDS\n* D-PAD\n* MEDIA QUERIES\n*/\n\n:root {\n\t--dpad-btn-rad: 8px;\n\t--btn-rad: 8px;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 4rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n\tmargin: 0;\n}\n\n.header {\n\talign-self: center;\n}\n\n.root {\n\tdisplay: grid;\n\tgrid-template-columns: 2fr 1fr;\n\tgap: 4rem;\n}\n\n.content-wrap--ocean {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n.content-wrap--target {\n\tdisplay: flex;\n}\n\n/* GRIDS */\n.grid-wrap {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n.grid-wrap--ocean {\n\talign-items: flex-end;\n}\n.grid-wrap--target {\n\talign-items: flex-start;\n}\n.grid {\n\taspect-ratio: 1;\n\twidth: max(35vw, 30rem);\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n\tborder: 1px solid black;\n}\n.grid__cell {\n\tborder: 0.5px solid black;\n}\n.grid__cell--occupied {\n\tbackground-color: lightblue;\n}\n.grid__cell--valid {\n\tbackground-color: rgba(202, 155, 12, 0.31);\n}\n.grid__cell--invalid {\n\tbackground-color: rgba(202, 66, 12, 0.31);\n}\n.grid__cell--occupied.hit,\n.grid__cell--hit {\n\tbackground-color: red;\n}\n.grid__cell--miss {\n\tbackground-color: #a0a0a0;\n}\n\n/* setup controls */\n.setup-controls {\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: flex-end;\n\tgap: 4rem;\n}\n\n/* D-PAD */\n.d-pad {\n\taspect-ratio: 1;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n}\n.d-pad__btn {\n\tbackground-size: contain;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-color: #303030;\n\tborder: 4px outset black;\n\tborder-radius: var(--dpad-btn-rad);\n\tcursor: pointer;\n}\n.d-pad__btn:hover:enabled {\n\tborder-color: #d9d9d9;\n}\n.d-pad__btn:active:enabled {\n\tborder-color: transparent;\n}\n.d-pad__btn:disabled {\n\tborder-color: transparent;\n\topacity: 40%;\n\tcursor: unset;\n}\n.d-pad__up-btn {\n\tgrid-row: 1;\n\tgrid-column: 2;\n}\n\n.d-pad__left-btn {\n\tgrid-row: 2;\n\tgrid-column: 1;\n}\n.d-pad__middle-btn {\n\tgrid-column: 2;\n\tbackground-image: url(${u});\n}\n.d-pad__right-btn {\n\tgrid-row: 2;\n\tgrid-column: 3;\n}\n.d-pad__down-btn {\n\tgrid-row: 3;\n\tgrid-column: 2;\n}\n\n/* additional setup buttons */\n.buttons-wrap {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tmargin-inline: 15%;\n}\n\n.result {\n\twidth: 20rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 2rem;\n}\n.result__title {\n\tfont-size: 2.5rem;\n}\n.result__summary {\n\tfont-size: 2rem;\n\ttext-align: center;\n}\n\n.stats--acc {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 1rem 5rem;\n\tfont-size: 1.5rem;\n}\n.stats__title {\n\tmax-height: 5rem;\n\tplace-self: center;\n\tgrid-row: 1;\n\tgrid-column: 1 / 3;\n\toverflow: auto;\n\tfont-size: 1.5rem;\n}\n.stats__item-wrap {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1rem;\n}\n.stats__item-wrap--left {\n\tgrid-row: 2;\n\tgrid-column: 1 / 2;\n}\n.stats__item-wrap--right {\n\tgrid-row: 2;\n\tgrid-column: 2 / 3;\n}\n.stats__val {\n\tfont-size: 2rem;\n\tfont-weight: 700;\n}\n\n.btn {\n\tpadding: 1rem 2rem;\n\tfont-size: 1.25rem;\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n\tfont-family: monospace;\n\tborder-radius: var(--btn-rad);\n}\n\n.hide {\n\tdisplay: none;\n}\n\n/* MEDIA QUERIES */\n@media screen and (min-width: 1920px) {\n\t:root {\n\t\tfont-size: 1vw;\n\t\t--dpad-btn-rad: 18px;\n\t}\n}\n\n/* tablet */\n@media screen and (max-width: 920px) {\n\tbody {\n\t\talign-items: unset;\n\t}\n\n\t.root {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\n\t.content-wrap--ocean,\n\t.content-wrap--target {\n\t\tdisplay: block;\n\t}\n\n\t.grid-wrap {\n\t\talign-items: center;\n\t}\n\t.grid {\n\t\twidth: 80%;\n\t}\n\n\t.setup-controls {\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\talign-self: unset;\n\t\tjustify-content: space-around;\n\t\tflex-direction: row;\n\t\tgap: 0;\n\t\tpadding-block: 1rem;\n\t\tbackground: #30303070;\n\t\tbackdrop-filter: blur(4px);\n\t}\n\n\t.d-pad {\n\t\tgrid-template-columns: repeat(3, 4rem);\n\t\tmargin-left: 1rem;\n\t}\n\n\t.buttons-wrap {\n\t\tjustify-content: space-around;\n\t\tgap: 0;\n\t\tmargin: 0;\n\t\tmargin-right: 1rem;\n\t}\n}\n\n/* mobile */\n@media screen and (max-width: 500px) {\n\t.grid {\n\t\twidth: 90%;\n\t}\n\n\t.d-pad {\n\t\tgrid-template-columns: repeat(3, 14vw);\n\t}\n\n\t.rotate-btn,\n\t.confirm-btn {\n\t\tpadding: 0.5rem;\n\t\tfont-size: 1rem;\n\t}\n\n\t.result-modal {\n\t\twidth: 70vw;\n\t\tpadding: 1rem;\n\t}\n\t.result {\n\t\twidth: 100%;\n\t\tpadding: 0;\n\t}\n\t.result__title {\n\t\tfont-size: 2rem;\n\t}\n\t.result__summary {\n\t\tfont-size: 1.5rem;\n\t}\n\t.stats--acc {\n\t\tgap: 1rem 3rem;\n\t\tfont-size: 1rem;\n\t}\n\t.stats__val {\n\t\tfont-size: 1.5rem;\n\t}\n\t.result > .btn {\n\t\tpadding: 0.5rem;\n\t\tfont-size: 1rem;\n\t}\n}\n`,""]);const p=d},314:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=r(t,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},659:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},531:(t,n,e)=>{t.exports=e.p+"assets/check.svg"}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={id:t,exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,o.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},o.d=(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((n,e)=>(o.f[e](t,n),n)),[])),o.u=t=>t+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),t={},n="battleship:",o.l=(e,r,i,a)=>{if(t[e])t[e].push(r);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+i){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",n+i),s.src=e),t[e]=[r];var p=(n,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((t=>t(r))),n)return n(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var n=o.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");if(e.length)for(var r=e.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=e[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={792:0};o.f.j=(n,e)=>{var r=o.o(t,n)?t[n]:void 0;if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(((e,o)=>r=t[n]=[e,o]));e.push(r[2]=i);var a=o.p+o.u(n),s=new Error;o.l(a,(e=>{if(o.o(t,n)&&(0!==(r=t[n])&&(t[n]=void 0),r)){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}}),"chunk-"+n,n)}};var n=(n,e)=>{var r,i,[a,s,c]=e,l=0;if(a.some((n=>0!==t[n]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);c&&c(o)}for(n&&n(e);l<a.length;l++)i=a[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0},e=self.webpackChunkbattleship=self.webpackChunkbattleship||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),o.nc=void 0;var i=o(72),a=o.n(i),s=o(825),c=o.n(s),l=o(659),d=o.n(l),u=o(56),p=o.n(u),f=o(540),m=o.n(f),g=o(113),h=o.n(g),b=o(208),v={};function y(){const t=[],n=[],e=[],r=[],o=[];let i;return[5,4,3,3,2].forEach(((t,n)=>{const e=function(t){let n=0,e=null;const r=[],o=[];return{getInfo:function(){return{length:t,isHorizontal:e,hitCount:n,hitbox:r,padding:o}},hit:function(){n<t&&n++},isSunk:function(){return n===t},setPos:function(n){n.length===t&&(n.sort(),r.length=0,r.push(...n),function(){const n=r[0],o=r[t-1];e=n[1]===o[1]}(),function(){const t=[],n=[];function i(n){let r,o;n.forEach((n=>{e?(r=[n[0],n[1]-1],o=[n[0],n[1]+1]):(r=[n[0]-1,n[1]],o=[n[0]+1,n[1]]),t.push(r,o)}))}n.push(...function(){let t,n,o=[10,10],i=[-1,-1];return r.forEach((t=>{let n;n=e?0:1,t[n]<o[n]?o=t:t[n]>i[n]&&(i=t)})),e?(t=[o[0]-1,o[1]],n=[i[0]+1,i[1]]):(t=[o[0],o[1]-1],n=[i[0],i[1]+1]),[t,n]}()),t.push(...n),i(n),i(r),o.length=0,o.push(...t.filter((t=>t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10)))}())},isHit:function(t){return r.some((n=>n[0]===t[0]&&n[1]===t[1]))},isOccupied:function(t){return r.concat(o).some((n=>n[0]===t[0]&&n[1]===t[1]))}}}(t);o.push({id:n,length:e.getInfo().length}),r.push(e)})),i=r.length,{getInfo:function(){return{remainingShips:i,hitsTaken:n,avoided:e}},getAllShipIds:function(){return[...o]},getShipAtPos:function(t){const n=r.findIndex((n=>n.isHit(t))),e=r[n].getInfo();return{...o[n],isHorizontal:e.isHorizontal,hitbox:e.hitbox}},getAllOccupiedPos:function(t){const n=r[t].getInfo().hitbox,e=r[t].getInfo().padding;return n.concat(e)},isPosOccupied:function(t){return r.some((n=>n.isOccupied(t)))},moveShip:function(t,n){r[t].setPos(n)},receiveAttack:function(o){t.push(o);const a=(s=o,r.find((t=>t.isHit(s))));var s;return a?(a.hit(),n.push(o),a.isSunk()?(--i,"sunk"):"hit"):(e.push(o),"miss")},isAllShipSunk:function(){return 0===i}}}v.styleTagTransform=h(),v.setAttributes=p(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=m(),a()(b.A,v),b.A&&b.A.locals&&b.A.locals;const _=(()=>{const t="ocean-grid";function n(){return document.getElementById(t)}return{create:function(n="My Screen"){const e=k(n);e.id=t,e.classList.add("grid-wrap--ocean"),document.querySelector("#js-ocean-parent").append(e)},getElement:n,getCell:function(t){return n().querySelector(`[data-pos-x="${t[0]}"][data-pos-y="${t[1]}"]`)},isCell:function(t){return!!t.classList.contains("grid__cell")},highlightCells:function(t,e){const r=n();t.forEach((t=>{const n=r.querySelector(`[data-pos-x="${t[0]}"][data-pos-y="${t[1]}"]`),o=e?"grid__cell--valid":"grid__cell--invalid";n.classList.add(o)}))},unhighlightAll:function(){n().querySelectorAll(".grid__cell").forEach((t=>{t.classList.remove("grid__cell--valid"),t.classList.remove("grid__cell--invalid")}))},markOccupied:function(t){const e=n();t.forEach((t=>{e.querySelector(`[data-pos-x="${t[0]}"][data-pos-y="${t[1]}"]`).classList.add("grid__cell--occupied")}))},markHit:function(t){t.classList.add("grid__cell--hit")},markMiss:function(t){t.classList.add("grid__cell--miss")},remove:function(){n().closest(".grid-wrap").remove()}}})(),w=(()=>{const t="target-grid";function n(){return document.getElementById(t)}return{create:function(n="Enemy Screen"){const e=k(n);e.id=t,e.classList.add("grid-wrap--target"),document.querySelector("#js-target-parent").append(e)},getElement:n,enable:function(){n().removeAttribute("disabled")},disable:function(){n().setAttribute("disabled","")},isCell:function(t){return!!t.classList.contains("grid__cell")},isCellMarked:function(t){return!(!t.classList.contains("grid__cell--hit")&&!t.classList.contains("grid__cell--miss"))},markHit:function(t){t.classList.add("grid__cell--hit")},markMiss:function(t){t.classList.add("grid__cell--miss")},remove:function(){n().closest(".grid-wrap").remove()}}})();function k(t){let n=0,e=9;const r=document.createElement("div");r.classList.add("grid");for(let t=0;t<100;t++){n>9&&(n=0,--e);const t=document.createElement("div");t.classList.add("grid__cell"),t.dataset.posX=n,t.dataset.posY=e,r.append(t),++n}const o=document.createElement("h2");o.classList.add("grid__title"),o.textContent=t;const i=document.createElement("div");return i.classList.add("grid-wrap"),i.append(o,r),i}const x="hide",S=(()=>{function t(){return document.querySelector(".setup-controls")}return{show:function(){t().classList.remove(x)},hide:function(){t().classList.add(x)}}})(),E=(()=>{function t(){return document.querySelector("#rotate-btn")}return{getElement:t,enable:function(){t().removeAttribute("disabled")},disable:function(){t().setAttribute("disabled","")}}})(),A=(()=>{function t(){return document.querySelector("#confirm-btn")}return{getElement:t,enable:function(){t().removeAttribute("disabled")},disable:function(){t().setAttribute("disabled","")}}})(),L=(()=>{function t(){return document.querySelector(".d-pad")}return{getElement:t,isBtn:function(t){return t.classList.contains("d-pad__btn")},enable:function(){t().querySelectorAll(".d-pad__btn").forEach((t=>t.removeAttribute("disabled")))},disable:function(){t().querySelectorAll(".d-pad__btn").forEach((t=>t.setAttribute("disabled","")))}}})(),C=(()=>{function t(){return document.querySelector("#js-res-modal")}return{show:function(n,e,r,o,i){const a=t(),s=a.querySelector("#js-res-title"),c=a.querySelector("#js-res-summary"),l=a.querySelector("#js-res-p1name"),d=a.querySelector("#js-res-p1acc"),u=a.querySelector("#js-res-p2name"),p=a.querySelector("#js-res-p2acc");i?(s.textContent="Brilliant!",c.textContent=`${n} destroys ${e}!`):(s.textContent="Unlucky!",c.textContent=`${n} washes ${e}!`),l.textContent=n,u.textContent=e,d.textContent=`${r}%`,p.textContent=`${o}%`,a.showModal()},hide:function(){t().close()},getResetBtn:function(){return document.querySelector("#res-btn")}}})();async function I(){const t={name:"Player",...y()},n={name:"Bot Azur",...y()};_.create(),async function(t,n){const e=(await o.e(639).then(o.bind(o,639))).default();async function r(){const n=await new Promise((t=>{setTimeout((()=>t(e.generateShot())),0)}));switch(t.receiveAttack(n)){case"miss":e.notifyMiss(),_.markMiss(_.getCell(n));break;case"hit":e.notifyHit(),_.markHit(_.getCell(n));break;case"sunk":e.notifyHitAndSunk(),_.markHit(_.getCell(n))}}await Promise.all([z(n),P(t)]),S.hide(),w.create(),await r(),w.getElement().addEventListener("click",(async function(e){const o=e.target;if(w.isCell(o)&&!w.isCellMarked(o))return w.disable(),"miss"===n.receiveAttack([+o.dataset.posX,+o.dataset.posY])?w.markMiss(o):w.markHit(o),n.isAllShipSunk()?(w.disable(),M(t,n,!0)):(await r(),t.isAllShipSunk()?(w.disable(),M(n,t,!1)):void w.enable())}))}(t,n)}function M(t,n,e){const r=n.getInfo().hitsTaken.length,o=t.getInfo().hitsTaken.length,i=r+n.getInfo().avoided.length,a=o+t.getInfo().avoided.length;function s(t,n){return Math.round(t/n*100)}C.show(t.name,n.name,s(r,i),s(o,a),e),C.getResetBtn().addEventListener("click",(function(){_.remove(),w.remove(),S.show(),C.hide(),I()}),{once:!0})}async function z(t){const n=[];return[5,4,3,3,2].forEach(((e,r)=>{const o=t.getAllShipIds()[r].id,i=function(t,n){const e=[],r=!!s(2);do{const t=o();e.length=0,e.push(...i(t))}while(e.length!==t);return e;function o(){let t=[s(10),s(10)];for(;a(t);)t=[s(10),s(10)];return t}function i(n){const e=[n];for(let o=1;o<t;o++)if(r){const t=[n[0]+o,n[1]];e.push(t)}else{const t=[n[0],n[1]+o];e.push(t)}return e.filter((t=>j(t)&&!a(t)))}function a(t){return n.some((n=>t[0]===n[0]&&t[1]===n[1]))}function s(t){return Math.floor(Math.random()*t)}}(e,n);t.moveShip(o,i),n.push(...t.getAllOccupiedPos(o))})),new Promise((t=>t(!0)))}function P(t){A.disable();const[n,...e]=t.getAllShipIds(),r={id:n.id,length:n.length,isHorizontal:!0,pos:d([3,4],!0,n.length)};return l(r.pos),document.body.addEventListener("keydown",i),L.getElement().addEventListener("click",o),E.getElement().addEventListener("click",s),L.enable(),E.enable(),new Promise((t=>{A.getElement().addEventListener("click",(function(){A.disable(),t(!0)}),{once:!0})}));function o(t){const n=t.target;if(L.isBtn(n))return"mid"===n.dataset.input?c():void a(n.dataset.input)}function i(t){const n=t.key;return" "===n?s():"Enter"===n?c():void a(n)}function a(t){let n=[...r.pos];switch(t){case"ArrowUp":case"up":n=n.map((t=>[t[0],t[1]+1]));break;case"ArrowLeft":case"left":n=n.map((t=>[t[0]-1,t[1]]));break;case"ArrowRight":case"right":n=n.map((t=>[t[0]+1,t[1]]));break;case"ArrowDown":case"down":n=n.map((t=>[t[0],t[1]-1]));break;default:return}n.every((t=>j(t)))&&(r.pos.length=0,r.pos.push(...n),l(r.pos))}function s(){let t=[...r.pos];const n=d(t[0],!r.isHorizontal,t.length,!0),e=d(t[0],!r.isHorizontal,t.length,!1);t=n.every((t=>j(t)))?n:e,r.isHorizontal=!r.isHorizontal,r.pos.length=0,r.pos.push(...t),l(t)}function c(){if(!r.pos.some((n=>t.isPosOccupied(n))))if(t.moveShip(r.id,r.pos),_.markOccupied(r.pos),0===e.length){document.body.removeEventListener("keydown",i),L.getElement().removeEventListener("click",o),E.getElement().removeEventListener("click",s),L.disable(),E.disable(),_.unhighlightAll();for(const t in r)r[t]=null;A.enable()}else{const t=e.shift();r.id=t.id,r.length=t.length,r.isHorizontal=!0,r.pos.length=0,r.pos.push(...d([3,4],!0,t.length)),l(r.pos)}}function l(n){const e=r.pos.some((n=>t.isPosOccupied(n)));_.unhighlightAll(),_.highlightCells(n,!e)}function d(t,n,e,r=!0){const o=[t];if(r)for(let r=1;r<e;r++)n?o.push([t[0]+r,t[1]]):o.push([t[0],t[1]+r]);else for(let r=1;r<e;r++)n?o.push([t[0]-r,t[1]]):o.push([t[0],t[1]-r]);return o}}function j(t){return t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10}I()})();