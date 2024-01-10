(()=>{"use strict";var t={426:(t,n,e)=>{e.d(n,{Z:()=>s});var r=e(81),i=e.n(r),o=e(645),c=e.n(o)()(i());c.push([t.id,"#root {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n#player-screen {\n\tdisplay: flex;\n\tgap: 2rem;\n\talign-self: center;\n}\n\n.grid-containers {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n#ocean-grid,\n#target-grid {\n\tmin-width: 15rem;\n\twidth: clamp(15rem, 35vw, 30rem);\n\theight: clamp(15rem, 35vw, 30rem);\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n\tborder: 1px solid black;\n}\n.ocean-grid__cell,\n.target-grid__cell {\n\tborder: 0.5px solid black;\n}\n.highlighted {\n\tbackground-color: rgba(202, 155, 12, 0.31);\n}\n.occupied {\n\tbackground-color: lightblue;\n}\n.occupied.hit,\n.hit {\n\tbackground-color: red;\n}\n.miss {\n\tbackground-color: #a0a0a0;\n}\n",""]);const s=c},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var o={},c=[],s=0;s<t.length;s++){var a=t[s],u=r.base?a[0]+r.base:a[0],l=o[u]||0,f="".concat(u," ").concat(l);o[u]=l+1;var d=e(f),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)n[d].references++,n[d].updater(h);else{var p=i(h,r);r.byIndex=s,n.splice(s,0,{identifier:f,updater:p,references:1})}c.push(f)}return c}function i(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var c=0;c<o.length;c++){var s=e(o[c]);n[s].references--}for(var a=r(t,i),u=0;u<o.length;u++){var l=e(o[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=a}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,i&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return t[r](o,o.exports,e),o.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),i=e.n(r),o=e(569),c=e.n(o),s=e(565),a=e.n(s),u=e(216),l=e.n(u),f=e(589),d=e.n(f),h=e(426),p={};p.styleTagTransform=d(),p.setAttributes=a(),p.insert=c().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=l(),n()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const g={createGrids:function(){const t=document.querySelectorAll(".grid-containers");function n(t){const n=document.createElement("div");let e=0,r=9;n.id=t;for(let i=0;i<100;i++){e>9&&(e=0,--r);const i=document.createElement("div");i.classList.add(`${t}__cell`),i.dataset.posX=e,i.dataset.posY=r,n.append(i),++e}return n}t[0].children[0].insertAdjacentElement("afterend",n("ocean-grid")),t[1].children[0].insertAdjacentElement("afterend",n("target-grid"))},rotateShipBtn:(()=>{function t(){return document.querySelector("#rotate-ship-btn")}return{getElement:t,hide:function(){t().style.display="none"}}})(),confirmShipBtn:(()=>{function t(){return document.querySelector("#confirm-ship-btn")}return{getElement:t,enable:function(){t().removeAttribute("disabled")},disable:function(){t().setAttribute("disabled","")},hide:function(){t().style.display="none"}}})(),oceanGrid:(()=>{function t(){return document.querySelector("#ocean-grid")}return{getElement:t,getCell:function(n){return t().querySelector(`[data-pos-x="${n[0]}"][data-pos-y="${n[1]}"]`)},isCell:function(t){return!!t.classList.contains("ocean-grid__cell")},highlightCells:function(n){const e=t();n.forEach((t=>{e.querySelector(`[data-pos-x="${t[0]}"][data-pos-y="${t[1]}"]`).classList.add("highlighted")}))},unhighlightAll:function(){t().querySelectorAll(".highlighted").forEach((t=>t.classList.remove("highlighted")))},markOccupied:function(n){const e=t();n.forEach((t=>{e.querySelector(`[data-pos-x="${t[0]}"][data-pos-y="${t[1]}"]`).classList.add("occupied")}))},markHit:function(t){t.classList.add("hit")},markMiss:function(t){t.classList.add("miss")}}})(),targetGrid:{getElement:function(){return document.querySelector("#target-grid")},isCell:function(t){return!!t.classList.contains("target-grid__cell")},isCellMarked:function(t){return!(!t.classList.contains("hit")&&!t.classList.contains("miss"))},markHit:function(t){t.classList.add("hit")},markMiss:function(t){t.classList.add("miss")}}},m=(()=>{const t=[],n=[u()],e=[];let r=null,i=null,o=!1,c=!1;function s(t,n){return t[0]<n[0]?"right":t[0]>n[0]?"left":t[1]<n[1]?"top":t[1]>n[1]?"bottom":void 0}function a(n,e){let r=1;const i=[];switch(e){case"top":for(;n[1]+r<10;)i.push([n[0],n[1]+r]),r++;break;case"left":for(;n[0]-r>=0;)i.push([n[0]-r,n[1]]),r++;break;case"bottom":for(;n[1]-r>=0;)i.push([n[0],n[1]-r]),r++;break;case"right":for(;n[0]+r<10;)i.push([n[0]+r,n[1]]),r++}return i.filter((n=>l(n)&&f(t,n)))}function u(){if(100===t.length)return null;let n=[d(10),d(10)];for(;!f(t,n);)n=[d(10),d(10)];return n}function l(t){return t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10}function f(t,n){return!t.some((t=>t[0]===n[0]&&t[1]===n[1]))}function d(t){return Math.floor(Math.random()*t)}return{generateShot:function(){return r=n.shift(),t.push(r),r},notifyMiss:function(){if(o&&c){n.length=0,e.length=0;const t=s(r,i);n.push(...a(i,t))}else o?e.shift():n.push(u())},notifyHit:function(){if(c&&!e.length&&!n.length){const t=s(r,i);n.push(...a(i,t))}if(o&&!c){c=!0;const t=e.shift();if(e.length=0,n.length=0,n.push(...a(r,t)),0===n.length){const e=function(t){switch(t){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}}(t);n.push(...a(i,e))}}else o||(i=r,o=!0,n.push(...function(n){const r=[];return i([n[0],n[1]+1],"top"),i([n[0]-1,n[1]],"left"),i([n[0],n[1]-1],"bottom"),i([n[0]+1,n[1]],"right"),r;function i(n,i){l(n)&&f(t,n)&&(r.push(n),e.push(i))}}(r)))},notifyHitAndSunk:function(){n.length=0,e.length=0,o=!1,c=!1,i=null,n.push(u())},resetFull:function(){t.length=0,n.length=0,e.length=0,o=!1,c=!1,i=null,r=null}}})();function v(t=[5,4,3,3,2]){const n=[],e=[],r=[],i=[],o=[];let c,s=null;return t.forEach(((t,n)=>{const e=function(t){let n=0,e=null;const r=[],i=[];return{getInfo:function(){return{length:t,isHorizontal:e,hitCount:n,hitbox:r,padding:i}},hit:function(){n<t&&n++},isSunk:function(){return n===t},setPos:function(n){n.length===t&&(n.sort(),r.length=0,r.push(...n),function(){const n=r[0],i=r[t-1];e=n[1]===i[1]}(),function(){const t=[],n=[];function o(n){let r,i;n.forEach((n=>{e?(r=[n[0],n[1]-1],i=[n[0],n[1]+1]):(r=[n[0]-1,n[1]],i=[n[0]+1,n[1]]),t.push(r,i)}))}n.push(...function(){let t,n,i=[10,10],o=[-1,-1];return r.forEach((t=>{let n;n=e?0:1,t[n]<i[n]?i=t:t[n]>o[n]&&(o=t)})),e?(t=[i[0]-1,i[1]],n=[o[0]+1,o[1]]):(t=[i[0],i[1]-1],n=[o[0],o[1]+1]),[t,n]}()),t.push(...n),o(n),o(r),i.length=0,i.push(...t.filter((t=>t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10)))}())},isHit:function(t){return r.some((n=>n[0]===t[0]&&n[1]===t[1]))},isOccupied:function(t){return r.concat(i).some((n=>n[0]===t[0]&&n[1]===t[1]))}}}(t);o.push({id:n,length:e.getInfo().length}),i.push(e)})),c=i.length,{getInfo:function(){return{remainingShips:c,hits:e,misses:r}},getAllShipIDs:function(){return o},getAllOccupiedPos:function(t){const n=i[t].getInfo().hitbox,e=i[t].getInfo().padding;return n.concat(e)},isPosOccupied:function(t){return i.some((n=>n.isOccupied(t)))},moveShip:function(t,n){i[t].setPos(n)},receiveAttack:function(t){n.push(t);const o=(a=t,i.find((t=>t.isHit(a))));var a;o?(o.hit(),e.push(t),o.isSunk()?(--c,s="sunk"):s="hit"):(r.push(t),s="miss")},getLastShotReport:function(){return s},isAllShipSunk:function(){return 0===c}}}function y(t,n,e){const r=e?g.targetGrid:g.oceanGrid;switch(n){case"miss":r.markMiss(t);break;case"hit":case"sunk":r.markHit(t)}}function b(t){return t[0]>=0&&t[0]<10&&t[1]>=0&&t[1]<10}!function(){const t=g.confirmShipBtn.getElement();let n={name:"Player",isHuman:!0,...v()},e={name:"Bot Azur",isHuman:!1,...v()};g.createGrids(),function(t,n){const e=[];[5,4,3,3,2].forEach(((n,r)=>{const i=t.getAllShipIDs()[r].id,o=function(t,n){const e=[],r=!!s(2);do{const t=i();e.length=0,e.push(...o(t))}while(e.length!==t);return e;function i(){let t=[s(10),s(10)];for(;c(t);)t=[s(10),s(10)];return t}function o(n){const e=[n];for(let i=1;i<t;i++)if(r){const t=[n[0]+i,n[1]];e.push(t)}else{const t=[n[0],n[1]+i];e.push(t)}return e.filter((t=>b(t)&&!c(t)))}function c(t){return n.some((n=>t[0]===n[0]&&t[1]===n[1]))}function s(t){return Math.floor(Math.random()*t)}}(n,e);t.moveShip(i,o),e.push(...t.getAllOccupiedPos(i))}))}(e),function(t,n){const e=g.oceanGrid.getElement(),r=g.rotateShipBtn.getElement(),i=[...t.getAllShipIDs()],o=[];let c=i.shift(),s=c.id,a=c.length,u=!0;function l(t){if(!g.oceanGrid.isCell(t.target))return;const n=[+t.target.dataset.posX,+t.target.dataset.posY],e=g.oceanGrid.getCell(n);o.length=0,o.push(...h(n,u,a)),d(o),e.addEventListener("click",f,{once:!0})}function f(){t.isPosOccupied(o[0])||o.length!==a||(t.moveShip(s,o),g.oceanGrid.markOccupied(o),0===i.length?(e.removeEventListener("mouseover",l),n()):(c=i.shift(),s=c.id,a=c.length,d(h([3,4],!0,a))))}function d(t){g.oceanGrid.unhighlightAll(),g.oceanGrid.highlightCells(t)}function h(t,n,e){const r=[t];for(let i=1;i<e;i++)n?r.push([t[0]+i,t[1]]):r.push([t[0],t[1]+i]);return r.filter((t=>b(t)))}o.push(...h([3,4],!0,a)),d(o),e.addEventListener("mouseover",l),r.addEventListener("click",(function(){u=!u}))}(n,g.confirmShipBtn.enable),t.addEventListener("click",(function(){const t=g.targetGrid.getElement(),r=[];let i=null,o=!1;function c(t){if(!g.targetGrid.isCell(t.target))return;if(g.targetGrid.isCellMarked(t.target))return;if(o)return;o=!0;const n=t.target;r.includes(n)||(r.push(n),s([+n.dataset.posX,+n.dataset.posY]),y(n,u(),!0),l(),f(),async function(t=0){const n=await new Promise((n=>{setTimeout((()=>n(m.generateShot())),t)}));s(n);const e=u();(function(t){switch(t){case"miss":m.notifyMiss();break;case"hit":m.notifyHit();break;case"sunk":m.notifyHitAndSunk()}})(e),y(g.oceanGrid.getCell(n),e,!1),l(),f(),o=!1}(1e3))}function s(t){e.receiveAttack(t),a()&&(i=n)}function a(){return e.isAllShipSunk()}function u(){return e.getLastShotReport()}function l(){a()&&(t.removeEventListener("click",c),function(t){console.log(`winner is ${t.name}`)}(i))}function f(){const t=n;n=e,e=t}g.confirmShipBtn.hide(),g.rotateShipBtn.hide(),t.addEventListener("click",c)}))}()})()})();