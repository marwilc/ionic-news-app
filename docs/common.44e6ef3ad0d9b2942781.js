(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return c});const r=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}},A2gu:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("Ke8Y");const i=async(t,e,n,i,o)=>{if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),e.appendChild(s),await new Promise(t=>Object(r.c)(s,t)),s},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},Ado8:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("tk/3"),i=n("AytR"),o=n("fXoL");const s=new r.c({"X-Api-key":i.a.apiKey});let c=(()=>{class t{constructor(t){this.http=t,this.headLinesPage=0,this.currentCategory="",this.pageCategory=0}executeQuery(t){return this.http.get(t=i.a.apiUrl+t,{headers:s})}getTopHeadLines(){return this.headLinesPage++,this.executeQuery(`/top-headlines?country=us&page=${this.headLinesPage}`)}getTopHeadlinesCategory(t){return this.currentCategory===t?this.pageCategory++:(this.pageCategory=1,this.currentCategory=t),this.executeQuery(`/top-headlines?country=us&category=${t}&page=${this.pageCategory}`)}}return t.\u0275fac=function(e){return new(e||t)(o.Qb(r.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},HGan:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("ofXK"),i=n("3Pt+"),o=n("TEn/"),s=n("fXoL");let c=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[r.b,i.a,o.C]]}),t})()},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return r});const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},pX2f:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("2atR"),i=n("iWo5"),o=n("qULd");const s=(t,e)=>{let n,s;const c=(t,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,r);o&&e(o)?o!==n&&(u(),a(o,i)):u()},a=(t,e)=>{n=t,s||(s=n);const i=n;Object(r.f)(()=>i.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!n)return;const e=n;Object(r.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{u(!0),Object(o.e)(),s=void 0}})}},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return c});const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},c=()=>{r.selectionEnd()},a=t=>{r.impact(t)}}}]);