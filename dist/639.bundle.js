"use strict";(self.webpackChunkbattleship=self.webpackChunkbattleship||[]).push([[639],{639:(t,n,e)=>{e.r(n),e.d(n,{default:()=>s});var u=e(191);function s(){const t=[],n=[l()],e=[];let s=null,o=null,h=!1,r=!1;function i(t,n){return t[0]<n[0]?"right":t[0]>n[0]?"left":t[1]<n[1]?"top":t[1]>n[1]?"bottom":void 0}function f(n,e){let s=1;const o=[];switch(e){case"top":for(;n[1]+s<10;)o.push([n[0],n[1]+s]),s++;break;case"left":for(;n[0]-s>=0;)o.push([n[0]-s,n[1]]),s++;break;case"bottom":for(;n[1]-s>=0;)o.push([n[0],n[1]-s]),s++;break;case"right":for(;n[0]+s<10;)o.push([n[0]+s,n[1]]),s++}return o.filter((n=>(0,u.H)(n)&&c(t,n)))}function l(){if(100===t.length)return null;let n=[(0,u.h)(10),(0,u.h)(10)];for(;!c(t,n);)n=[(0,u.h)(10),(0,u.h)(10)];return n}function c(t,n){return!t.some((t=>t[0]===n[0]&&t[1]===n[1]))}return{generateShot:function(){return s=n.shift(),t.push(s),s},notifyMiss:function(){if(h&&r){n.length=0,e.length=0;const t=i(s,o);n.push(...f(o,t))}else h?e.shift():n.push(l())},notifyHit:function(){if(r&&!e.length&&!n.length){const t=i(s,o);n.push(...f(o,t))}if(h&&!r){r=!0;const t=e.shift();if(e.length=0,n.length=0,n.push(...f(s,t)),0===n.length){const e=function(t){switch(t){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}}(t);n.push(...f(o,e))}}else h||(o=s,h=!0,n.push(...function(n){const s=[];return o([n[0],n[1]+1],"top"),o([n[0]-1,n[1]],"left"),o([n[0],n[1]-1],"bottom"),o([n[0]+1,n[1]],"right"),s;function o(n,o){(0,u.H)(n)&&c(t,n)&&(s.push(n),e.push(o))}}(s)))},notifyHitAndSunk:function(){n.length=0,e.length=0,h=!1,r=!1,o=null,n.push(l())}}}}}]);