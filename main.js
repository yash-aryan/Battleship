(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([t.id,"#root {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#player-screen {\n\tdisplay: flex;\n\tgap: 2rem;\n\talign-self: center;\n}\n\n.grid-containers {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n#ocean-grid,\n#target-grid {\n\tmin-width: 15rem;\n\twidth: clamp(15rem, 35vw, 30rem);\n\theight: clamp(15rem, 35vw, 30rem);\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n\tborder: 1px solid black;\n}\n.ocean-grid__cell,\n.target-grid__cell {\n\tborder: 0.5px solid black;\n}\n.highlighted {\n\tbackground-color: rgba(202, 155, 12, 0.31);\n}\n.occupied {\n\tbackground-color: lightblue;\n}\n.occupied.hit,\n.hit {\n\tbackground-color: red;\n}\n.miss {\n\tbackground-color: #a0a0a0;\n}\n#button-container {\n\tdisplay: flex;\n\talign-self: stretch;\n\tjustify-content: space-around;\n}\n\n#result {\n\twidth: 20rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 3rem;\n}\n#result__title,\n#result__summary {\n\tmargin: 0;\n}\n\n#accuracy-stat {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 1rem 5rem;\n}\n#accuracy-stat__title {\n\tmax-height: 5rem;\n\tplace-self: center;\n\tgrid-row: 1;\n\tgrid-column: 1 / 3;\n\tmargin: 0;\n\toverflow: auto;\n}\n#accuracy-player1,\n#accuracy-player2 {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n#accuracy-player1 {\n\tgrid-row: 2;\n\tgrid-column: 1 / 2;\n}\n#accuracy-player2 {\n\tgrid-row: 2;\n\tgrid-column: 2 / 3;\n}\n#accuracy-player1__rate,\n#accuracy-player2__rate {\n\tfont-size: 2rem;\n}\n",""]);const s=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],s=0;s<t.length;s++){var a=t[s],u=r.base?a[0]+r.base:a[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=n(d),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var p=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}c.push(d)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var s=n(i[c]);e[s].references--}for(var a=r(t,o),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=a}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),c=n.n(i),s=n(565),a=n.n(s),u=n(216),l=n.n(u),d=n(589),f=n.n(d),h=n(426),p={};p.styleTagTransform=f(),p.setAttributes=a(),p.insert=c().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),e()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const g={createGrids:function(){const t=document.querySelectorAll(".grid-containers");function e(t){const e=document.createElement("div");let n=0,r=9;e.id=t;for(let o=0;o<100;o++){n>9&&(n=0,--r);const o=document.createElement("div");o.classList.add(`${t}__cell`),o.dataset.posX=n,o.dataset.posY=r,e.append(o),++n}return e}t[0].children[0].insertAdjacentElement("afterend",e("ocean-grid")),t[1].children[0].insertAdjacentElement("afterend",e("target-grid"))},rotateShipBtn:(()=>{function t(){return document.querySelector("#rotate-ship-btn")}return{getElement:t,show:function(){t().style.display="block"},hide:function(){t().style.display="none"}}})(),confirmShipBtn:(()=>{function t(){return document.querySelector("#confirm-ship-btn")}return{getElement:t,enable:function(){t().removeAttribute("disabled")},disable:function(){t().setAttribute("disabled","")},show:function(){t().style.display="block"},hide:function(){t().style.display="none"}}})(),oceanGrid:(()=>{function t(){return document.querySelector("#ocean-grid")}return{getElement:t,getCell:function(e){return t().querySelector(`[data-pos-x="${e[0]}"][data-pos-y="${e[1]}"]`)},isCell:function(t){return!!t.classList.contains("ocean-grid__cell")},highlightCells:function(e){const n=t();e.forEach((t=>{n.querySelector(`[data-pos-x="${t[0]}"][data-pos-y="${t[1]}"]`).classList.add("highlighted")}))},unhighlightAll:function(){t().querySelectorAll(".highlighted").forEach((t=>t.classList.remove("highlighted")))},markOccupied:function(e){const n=t();e.forEach((t=>{n.querySelector(`[data-pos-x="${t[0]}"][data-pos-y="${t[1]}"]`).classList.add("occupied")}))},markHit:function(t){t.classList.add("hit")},markMiss:function(t){t.classList.add("miss")},reset:function(){t().querySelectorAll(".ocean-grid__cell").forEach((t=>t.className="ocean-grid__cell"))}}})(),targetGrid:(()=>{function t(){return document.querySelector("#target-grid")}return{getElement:t,isCell:function(t){return!!t.classList.contains("target-grid__cell")},isCellMarked:function(t){return!(!t.classList.contains("hit")&&!t.classList.contains("miss"))},markHit:function(t){t.classList.add("hit")},markMiss:function(t){t.classList.add("miss")},reset:function(){t().querySelectorAll(".target-grid__cell").forEach((t=>t.className="target-grid__cell"))}}})(),resultScreen:(()=>{function t(){return document.querySelector("#result-modal")}return{displayResults:function(e,n,r,o,i){const c=t(),s=c.querySelector("#result__title"),a=c.querySelector("#result__summary"),u=c.querySelector("#accuracy-player1__name"),l=c.querySelector("#accuracy-player1__rate"),d=c.querySelector("#accuracy-player2__name"),f=c.querySelector("#accuracy-player2__rate");i?(s.textContent="Brilliant!",a.textContent=`${e} destroys ${n}!`):(s.textContent="Unlucky!",a.textContent=`${e} washes ${n}!`),u.textContent=e,d.textContent=n,l.textContent=`${r}%`,f.textContent=`${o}%`,c.showModal()},hide:function(){t().close()},getResetButton:function(){return t().querySelector("#reset-btn")}}})()};function m(){const t=[],e=[u()],n=[];let r=null,o=null,i=!1,c=!1;function s(t,e){return t[0]<e[0]?"right":t[0]>e[0]?"left":t[1]<e[1]?"top":t[1]>e[1]?"bottom":void 0}function a(e,n){let r=1;const o=[];switch(n){case"top":for(;e[1]+r<10;)o.push([e[0],e[1]+r]),r++;break;case"left":for(;e[0]-r>=0;)o.push([e[0]-r,e[1]]),r++;break;case"bottom":for(;e[1]-r>=0;)o.push([e[0],e[1]-r]),r++;break;case"right":for(;e[0]+r<10;)o.push([e[0]+r,e[1]]),r++}return o.filter((e=>l(e)&&d(t,e)))}function u(){if(100===t.length)return null;let e=[f(10),f(10)];for(;!d(t,e);)e=[f(10),f(10)];return e}function l(t){return t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10}function d(t,e){return!t.some((t=>t[0]===e[0]&&t[1]===e[1]))}function f(t){return Math.floor(Math.random()*t)}return{generateShot:function(){return r=e.shift(),t.push(r),r},notifyMiss:function(){if(i&&c){e.length=0,n.length=0;const t=s(r,o);e.push(...a(o,t))}else i?n.shift():e.push(u())},notifyHit:function(){if(c&&!n.length&&!e.length){const t=s(r,o);e.push(...a(o,t))}if(i&&!c){c=!0;const t=n.shift();if(n.length=0,e.length=0,e.push(...a(r,t)),0===e.length){const n=function(t){switch(t){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}}(t);e.push(...a(o,n))}}else i||(o=r,i=!0,e.push(...function(e){const r=[];return o([e[0],e[1]+1],"top"),o([e[0]-1,e[1]],"left"),o([e[0],e[1]-1],"bottom"),o([e[0]+1,e[1]],"right"),r;function o(e,o){l(e)&&d(t,e)&&(r.push(e),n.push(o))}}(r)))},notifyHitAndSunk:function(){e.length=0,n.length=0,i=!1,c=!1,o=null,e.push(u())}}}function y(t=[5,4,3,3,2]){const e=[],n=[],r=[],o=[],i=[];let c,s=null;return t.forEach(((t,e)=>{const n=function(t){let e=0,n=null;const r=[],o=[];return{getInfo:function(){return{length:t,isHorizontal:n,hitCount:e,hitbox:r,padding:o}},hit:function(){e<t&&e++},isSunk:function(){return e===t},setPos:function(e){e.length===t&&(e.sort(),r.length=0,r.push(...e),function(){const e=r[0],o=r[t-1];n=e[1]===o[1]}(),function(){const t=[],e=[];function i(e){let r,o;e.forEach((e=>{n?(r=[e[0],e[1]-1],o=[e[0],e[1]+1]):(r=[e[0]-1,e[1]],o=[e[0]+1,e[1]]),t.push(r,o)}))}e.push(...function(){let t,e,o=[10,10],i=[-1,-1];return r.forEach((t=>{let e;e=n?0:1,t[e]<o[e]?o=t:t[e]>i[e]&&(i=t)})),n?(t=[o[0]-1,o[1]],e=[i[0]+1,i[1]]):(t=[o[0],o[1]-1],e=[i[0],i[1]+1]),[t,e]}()),t.push(...e),i(e),i(r),o.length=0,o.push(...t.filter((t=>t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10)))}())},isHit:function(t){return r.some((e=>e[0]===t[0]&&e[1]===t[1]))},isOccupied:function(t){return r.concat(o).some((e=>e[0]===t[0]&&e[1]===t[1]))}}}(t);i.push({id:e,length:n.getInfo().length}),o.push(n)})),c=o.length,{getInfo:function(){return{remainingShips:c,hitsTaken:n,avoided:r}},getAllShipIDs:function(){return i},getAllOccupiedPos:function(t){const e=o[t].getInfo().hitbox,n=o[t].getInfo().padding;return e.concat(n)},isPosOccupied:function(t){return o.some((e=>e.isOccupied(t)))},moveShip:function(t,e){o[t].setPos(e)},receiveAttack:function(t){e.push(t);const i=(a=t,o.find((t=>t.isHit(a))));var a;i?(i.hit(),n.push(t),i.isSunk()?(--c,s="sunk"):s="hit"):(r.push(t),s="miss")},getLastShotReport:function(){return s},isAllShipSunk:function(){return 0===c}}}function v(t,e,n){const r=n?g.targetGrid:g.oceanGrid;switch(e){case"miss":r.markMiss(t);break;case"hit":case"sunk":r.markHit(t)}}function S(t,e){const n=[];e.forEach(((e,r)=>{const o=t.getAllShipIDs()[r].id,i=function(t,e){const n=[],r=!!s(2);do{const t=o();n.length=0,n.push(...i(t))}while(n.length!==t);return n;function o(){let t=[s(10),s(10)];for(;c(t);)t=[s(10),s(10)];return t}function i(e){const n=[e];for(let o=1;o<t;o++)if(r){const t=[e[0]+o,e[1]];n.push(t)}else{const t=[e[0],e[1]+o];n.push(t)}return n.filter((t=>k(t)&&!c(t)))}function c(t){return e.some((e=>t[0]===e[0]&&t[1]===e[1]))}function s(t){return Math.floor(Math.random()*t)}}(e,n);t.moveShip(o,i),n.push(...t.getAllOccupiedPos(o))}))}function b(t,e){const n=g.oceanGrid.getElement(),r=g.rotateShipBtn.getElement(),o=[...t.getAllShipIDs()],i=[];let c=o.shift(),s=c.id,a=c.length,u=!0;function l(t){if(!g.oceanGrid.isCell(t.target))return;const e=[+t.target.dataset.posX,+t.target.dataset.posY],n=g.oceanGrid.getCell(e);i.length=0,i.push(...h(e,u,a)),f(i),n.addEventListener("click",d,{once:!0})}function d(){t.isPosOccupied(i[0])||i.length!==a||(t.moveShip(s,i),g.oceanGrid.markOccupied(i),0===o.length?(n.removeEventListener("mouseover",l),g.rotateShipBtn.hide(),e()):(c=o.shift(),s=c.id,a=c.length,f(h([3,4],!0,a))))}function f(t){g.oceanGrid.unhighlightAll(),g.oceanGrid.highlightCells(t)}function h(t,e,n){const r=[t];for(let o=1;o<n;o++)e?r.push([t[0]+o,t[1]]):r.push([t[0],t[1]+o]);return r.filter((t=>k(t)))}i.push(...h([3,4],!0,a)),f(i),n.addEventListener("mouseover",l),r.addEventListener("click",(function(){u=!u}))}function k(t){return t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10}!function(){const t=[5,4,3,3,2],e=g.confirmShipBtn.getElement();let n={name:"Player",isHuman:!0,...y()},r={name:"Bot Azur",isHuman:!1,...y()},o=m();g.createGrids(),S(r,t),b(n,g.confirmShipBtn.enable),e.addEventListener("click",(function(){const e=g.targetGrid.getElement(),i=[];let c=null,s=null,a=!1;function u(t){if(!g.targetGrid.isCell(t.target))return;if(g.targetGrid.isCellMarked(t.target))return;if(a)return;a=!0;const e=t.target;i.includes(e)||(i.push(e),l([+e.dataset.posX,+e.dataset.posY]),v(e,f(),!0),h(),p(),async function(t=0){const e=await new Promise((e=>{setTimeout((()=>e(o.generateShot())),t)}));l(e);const n=f();(function(t){switch(t){case"miss":o.notifyMiss();break;case"hit":o.notifyHit();break;case"sunk":o.notifyHitAndSunk()}})(n),v(g.oceanGrid.getCell(e),n,!1),h(),p(),a=!1}(1e3))}function l(t){r.receiveAttack(t),d()&&(c=n,s=r)}function d(){return r.isAllShipSunk()}function f(){return r.getLastShotReport()}function h(){d()&&(e.removeEventListener("click",u),function(e,i){const c=i.getInfo().hitsTaken.length,s=e.getInfo().hitsTaken.length,a=c+i.getInfo().avoided.length,u=s+e.getInfo().avoided.length;function l(t,e){return Math.round(t/e*100)}g.resultScreen.displayResults(e.name,i.name,l(c,a),l(s,u),e.isHuman),g.resultScreen.getResetButton().addEventListener("click",(function(){n={name:"Player",isHuman:!0,...y()},r={name:"Bot Azur",isHuman:!1,...y()},o=m(),g.oceanGrid.reset(),g.targetGrid.reset(),S(r,t),g.rotateShipBtn.show(),g.confirmShipBtn.show(),g.confirmShipBtn.disable(),b(n,g.confirmShipBtn.enable),g.resultScreen.hide()}),{once:!0})}(c,s))}function p(){const t=n;n=r,r=t}g.confirmShipBtn.hide(),e.addEventListener("click",u)}))}()})()})();