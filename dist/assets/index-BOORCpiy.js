import{V as To,M as as,C as si,G as xa,an as Vh,g as Wh,c as $a,b as qh,e as Gh,r as br,ao as ln,X as Yh,Y as Zh,O as Xh,a as Jh}from"./three-D6zBG5Mv.js";import{L as Un,t as zo,a as Hn,M as Io,J as Kh,n as ls,$ as yt,h as Po,_ as Ft,x as Ht,d as dc,b as Qh,o as ji,c as Cn,I as No,u as tf,z as Ir,S as ef,r as hc,e as Ks,m as nf,f as rf}from"./components-B_QfFtKG.js";import{t as sf,R as of,c as fc,C as pc,G as af,J as mc,K as lf,M as cf,N as bc,O as gc,P as uf,D as df}from"./web-ifc-CL1j-px8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();var hf=Object.defineProperty,ff=(i,t,e)=>t in i?hf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ue=(i,t,e)=>(ff(i,typeof t!="symbol"?t+"":t,e),e);const _i=Math.min,de=Math.max,Pr=Math.round,Ee=i=>({x:i,y:i}),pf={left:"right",right:"left",bottom:"top",top:"bottom"},mf={start:"end",end:"start"};function ka(i,t,e){return de(i,_i(t,e))}function Vn(i,t){return typeof i=="function"?i(t):i}function me(i){return i.split("-")[0]}function cs(i){return i.split("-")[1]}function vc(i){return i==="x"?"y":"x"}function yc(i){return i==="y"?"height":"width"}function Qe(i){return["top","bottom"].includes(me(i))?"y":"x"}function _c(i){return vc(Qe(i))}function bf(i,t,e){e===void 0&&(e=!1);const r=cs(i),n=_c(i),s=yc(n);let o=n==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=Nr(o)),[o,Nr(o)]}function gf(i){const t=Nr(i);return[Qs(i),t,Qs(t)]}function Qs(i){return i.replace(/start|end/g,t=>mf[t])}function vf(i,t,e){const r=["left","right"],n=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:r:t?r:n;case"left":case"right":return t?s:o;default:return[]}}function yf(i,t,e,r){const n=cs(i);let s=vf(me(i),e==="start",r);return n&&(s=s.map(o=>o+"-"+n),t&&(s=s.concat(s.map(Qs)))),s}function Nr(i){return i.replace(/left|right|bottom|top/g,t=>pf[t])}function _f(i){return{top:0,right:0,bottom:0,left:0,...i}}function wc(i){return typeof i!="number"?_f(i):{top:i,right:i,bottom:i,left:i}}function wi(i){const{x:t,y:e,width:r,height:n}=i;return{width:r,height:n,top:e,left:t,right:t+r,bottom:e+n,x:t,y:e}}function Ca(i,t,e){let{reference:r,floating:n}=i;const s=Qe(t),o=_c(t),a=yc(o),l=me(t),c=s==="y",d=r.x+r.width/2-n.width/2,u=r.y+r.height/2-n.height/2,f=r[a]/2-n[a]/2;let h;switch(l){case"top":h={x:d,y:r.y-n.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:u};break;case"left":h={x:r.x-n.width,y:u};break;default:h={x:r.x,y:r.y}}switch(cs(t)){case"start":h[o]-=f*(e&&c?-1:1);break;case"end":h[o]+=f*(e&&c?-1:1);break}return h}const wf=async(i,t,e)=>{const{placement:r="bottom",strategy:n="absolute",middleware:s=[],platform:o}=e,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:d,y:u}=Ca(c,r,l),f=r,h={},b=0;for(let p=0;p<a.length;p++){const{name:v,fn:g}=a[p],{x:_,y:w,data:x,reset:C}=await g({x:d,y:u,initialPlacement:r,placement:f,strategy:n,middlewareData:h,rects:c,platform:o,elements:{reference:i,floating:t}});d=_??d,u=w??u,h={...h,[v]:{...h[v],...x}},C&&b<=50&&(b++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(c=C.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):C.rects),{x:d,y:u}=Ca(c,f,l)),p=-1)}return{x:d,y:u,placement:f,strategy:n,middlewareData:h}};async function xc(i,t){var e;t===void 0&&(t={});const{x:r,y:n,platform:s,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:h=0}=Vn(t,i),b=wc(h),p=a[f?u==="floating"?"reference":"floating":u],v=wi(await s.getClippingRect({element:(e=await(s.isElement==null?void 0:s.isElement(p)))==null||e?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),g=u==="floating"?{x:r,y:n,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),w=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=wi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:_,strategy:l}):g);return{top:(v.top-x.top+b.top)/w.y,bottom:(x.bottom-v.bottom+b.bottom)/w.y,left:(v.left-x.left+b.left)/w.x,right:(x.right-v.right+b.right)/w.x}}const xf=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,r;const{placement:n,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:p=!0,...v}=Vn(i,t);if((e=s.arrow)!=null&&e.alignmentOffset)return{};const g=me(n),_=Qe(a),w=me(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=f||(w||!p?[Nr(a)]:gf(a)),S=b!=="none";!f&&S&&C.push(...yf(a,p,b,x));const O=[a,...C],M=await xc(t,v),A=[];let z=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&A.push(M[g]),u){const y=bf(n,o,x);A.push(M[y[0]],M[y[1]])}if(z=[...z,{placement:n,overflows:A}],!A.every(y=>y<=0)){var G,E;const y=(((G=s.flip)==null?void 0:G.index)||0)+1,j=O[y];if(j)return{data:{index:y,overflows:z},reset:{placement:j}};let tt=(E=z.filter(H=>H.overflows[0]<=0).sort((H,et)=>H.overflows[1]-et.overflows[1])[0])==null?void 0:E.placement;if(!tt)switch(h){case"bestFit":{var R;const H=(R=z.filter(et=>{if(S){const V=Qe(et.placement);return V===_||V==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(V=>V>0).reduce((V,it)=>V+it,0)]).sort((et,V)=>et[1]-V[1])[0])==null?void 0:R[0];H&&(tt=H);break}case"initialPlacement":tt=a;break}if(n!==tt)return{reset:{placement:tt}}}return{}}}};function $c(i){const t=_i(...i.map(s=>s.left)),e=_i(...i.map(s=>s.top)),r=de(...i.map(s=>s.right)),n=de(...i.map(s=>s.bottom));return{x:t,y:e,width:r-t,height:n-e}}function $f(i){const t=i.slice().sort((n,s)=>n.y-s.y),e=[];let r=null;for(let n=0;n<t.length;n++){const s=t[n];!r||s.y-r.y>r.height/2?e.push([s]):e[e.length-1].push(s),r=s}return e.map(n=>wi($c(n)))}const kf=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:r,rects:n,platform:s,strategy:o}=t,{padding:a=2,x:l,y:c}=Vn(i,t),d=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(r.reference))||[]),u=$f(d),f=wi($c(d)),h=wc(a);function b(){if(u.length===2&&u[0].left>u[1].right&&l!=null&&c!=null)return u.find(v=>l>v.left-h.left&&l<v.right+h.right&&c>v.top-h.top&&c<v.bottom+h.bottom)||f;if(u.length>=2){if(Qe(e)==="y"){const z=u[0],G=u[u.length-1],E=me(e)==="top",R=z.top,y=G.bottom,j=E?z.left:G.left,tt=E?z.right:G.right,H=tt-j,et=y-R;return{top:R,bottom:y,left:j,right:tt,width:H,height:et,x:j,y:R}}const v=me(e)==="left",g=de(...u.map(z=>z.right)),_=_i(...u.map(z=>z.left)),w=u.filter(z=>v?z.left===_:z.right===g),x=w[0].top,C=w[w.length-1].bottom,S=_,O=g,M=O-S,A=C-x;return{top:x,bottom:C,left:S,right:O,width:M,height:A,x:S,y:x}}return f}const p=await s.getElementRects({reference:{getBoundingClientRect:b},floating:r.floating,strategy:o});return n.reference.x!==p.reference.x||n.reference.y!==p.reference.y||n.reference.width!==p.reference.width||n.reference.height!==p.reference.height?{reset:{rects:p}}:{}}}};async function Cf(i,t){const{placement:e,platform:r,elements:n}=i,s=await(r.isRTL==null?void 0:r.isRTL(n.floating)),o=me(e),a=cs(e),l=Qe(e)==="y",c=["left","top"].includes(o)?-1:1,d=s&&l?-1:1,u=Vn(t,i);let{mainAxis:f,crossAxis:h,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof b=="number"&&(h=a==="end"?b*-1:b),l?{x:h*d,y:f*c}:{x:f*c,y:h*d}}const kc=function(i){return{name:"offset",options:i,async fn(t){var e,r;const{x:n,y:s,placement:o,middlewareData:a}=t,l=await Cf(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:n+l.x,y:s+l.y,data:{...l,placement:o}}}}},Ef=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:r,placement:n}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:v=>{let{x:g,y:_}=v;return{x:g,y:_}}},...l}=Vn(i,t),c={x:e,y:r},d=await xc(t,l),u=Qe(me(n)),f=vc(u);let h=c[f],b=c[u];if(s){const v=f==="y"?"top":"left",g=f==="y"?"bottom":"right",_=h+d[v],w=h-d[g];h=ka(_,h,w)}if(o){const v=u==="y"?"top":"left",g=u==="y"?"bottom":"right",_=b+d[v],w=b-d[g];b=ka(_,b,w)}const p=a.fn({...t,[f]:h,[u]:b});return{...p,data:{x:p.x-e,y:p.y-r}}}}};function Se(i){return Cc(i)?(i.nodeName||"").toLowerCase():"#document"}function It(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function Ie(i){var t;return(t=(Cc(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function Cc(i){return i instanceof Node||i instanceof It(i).Node}function ne(i){return i instanceof Element||i instanceof It(i).Element}function re(i){return i instanceof HTMLElement||i instanceof It(i).HTMLElement}function Ea(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof It(i).ShadowRoot}function Wn(i){const{overflow:t,overflowX:e,overflowY:r,display:n}=Bt(i);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!["inline","contents"].includes(n)}function Sf(i){return["table","td","th"].includes(Se(i))}function Af(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function Lo(i){const t=Ro(),e=ne(i)?Bt(i):i;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(e.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(e.contain||"").includes(r))}function Of(i){let t=xi(i);for(;re(t)&&!us(t);){if(Lo(t))return t;if(Af(t))return null;t=xi(t)}return null}function Ro(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function us(i){return["html","body","#document"].includes(Se(i))}function Bt(i){return It(i).getComputedStyle(i)}function ds(i){return ne(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function xi(i){if(Se(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Ea(i)&&i.host||Ie(i);return Ea(t)?t.host:t}function Ec(i){const t=xi(i);return us(t)?i.ownerDocument?i.ownerDocument.body:i.body:re(t)&&Wn(t)?t:Ec(t)}function Sc(i,t,e){var r;t===void 0&&(t=[]);const n=Ec(i),s=n===((r=i.ownerDocument)==null?void 0:r.body),o=It(n);return s?(Tf(o),t.concat(o,o.visualViewport||[],Wn(n)?n:[],[])):t.concat(n,Sc(n,[]))}function Tf(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function Ac(i){const t=Bt(i);let e=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=re(i),s=n?i.offsetWidth:e,o=n?i.offsetHeight:r,a=Pr(e)!==s||Pr(r)!==o;return a&&(e=s,r=o),{width:e,height:r,$:a}}function Oc(i){return ne(i)?i:i.contextElement}function vi(i){const t=Oc(i);if(!re(t))return Ee(1);const e=t.getBoundingClientRect(),{width:r,height:n,$:s}=Ac(t);let o=(s?Pr(e.width):e.width)/r,a=(s?Pr(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const zf=Ee(0);function Tc(i){const t=It(i);return!Ro()||!t.visualViewport?zf:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function If(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==It(i)?!1:t}function En(i,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),s=Oc(i);let o=Ee(1);t&&(r?ne(r)&&(o=vi(r)):o=vi(i));const a=If(s,e,r)?Tc(s):Ee(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,d=n.width/o.x,u=n.height/o.y;if(s){const f=It(s),h=r&&ne(r)?It(r):r;let b=f,p=b.frameElement;for(;p&&r&&h!==b;){const v=vi(p),g=p.getBoundingClientRect(),_=Bt(p),w=g.left+(p.clientLeft+parseFloat(_.paddingLeft))*v.x,x=g.top+(p.clientTop+parseFloat(_.paddingTop))*v.y;l*=v.x,c*=v.y,d*=v.x,u*=v.y,l+=w,c+=x,b=It(p),p=b.frameElement}}return wi({width:d,height:u,x:l,y:c})}const Pf=[":popover-open",":modal"];function zc(i){return Pf.some(t=>{try{return i.matches(t)}catch{return!1}})}function Nf(i){let{elements:t,rect:e,offsetParent:r,strategy:n}=i;const s=n==="fixed",o=Ie(r),a=t?zc(t.floating):!1;if(r===o||a&&s)return e;let l={scrollLeft:0,scrollTop:0},c=Ee(1);const d=Ee(0),u=re(r);if((u||!u&&!s)&&((Se(r)!=="body"||Wn(o))&&(l=ds(r)),re(r))){const f=En(r);c=vi(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+d.x,y:e.y*c.y-l.scrollTop*c.y+d.y}}function Lf(i){return Array.from(i.getClientRects())}function Ic(i){return En(Ie(i)).left+ds(i).scrollLeft}function Rf(i){const t=Ie(i),e=ds(i),r=i.ownerDocument.body,n=de(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=de(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-e.scrollLeft+Ic(i);const a=-e.scrollTop;return Bt(r).direction==="rtl"&&(o+=de(t.clientWidth,r.clientWidth)-n),{width:n,height:s,x:o,y:a}}function Mf(i,t){const e=It(i),r=Ie(i),n=e.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(n){s=n.width,o=n.height;const c=Ro();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:s,height:o,x:a,y:l}}function Df(i,t){const e=En(i,!0,t==="fixed"),r=e.top+i.clientTop,n=e.left+i.clientLeft,s=re(i)?vi(i):Ee(1),o=i.clientWidth*s.x,a=i.clientHeight*s.y,l=n*s.x,c=r*s.y;return{width:o,height:a,x:l,y:c}}function Sa(i,t,e){let r;if(t==="viewport")r=Mf(i,e);else if(t==="document")r=Rf(Ie(i));else if(ne(t))r=Df(t,e);else{const n=Tc(i);r={...t,x:t.x-n.x,y:t.y-n.y}}return wi(r)}function Pc(i,t){const e=xi(i);return e===t||!ne(e)||us(e)?!1:Bt(e).position==="fixed"||Pc(e,t)}function jf(i,t){const e=t.get(i);if(e)return e;let r=Sc(i,[]).filter(a=>ne(a)&&Se(a)!=="body"),n=null;const s=Bt(i).position==="fixed";let o=s?xi(i):i;for(;ne(o)&&!us(o);){const a=Bt(o),l=Lo(o);!l&&a.position==="fixed"&&(n=null),(s?!l&&!n:!l&&a.position==="static"&&n&&["absolute","fixed"].includes(n.position)||Wn(o)&&!l&&Pc(i,o))?r=r.filter(c=>c!==o):n=a,o=xi(o)}return t.set(i,r),r}function Ff(i){let{element:t,boundary:e,rootBoundary:r,strategy:n}=i;const s=[...e==="clippingAncestors"?jf(t,this._c):[].concat(e),r],o=s[0],a=s.reduce((l,c)=>{const d=Sa(t,c,n);return l.top=de(d.top,l.top),l.right=_i(d.right,l.right),l.bottom=_i(d.bottom,l.bottom),l.left=de(d.left,l.left),l},Sa(t,o,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Bf(i){const{width:t,height:e}=Ac(i);return{width:t,height:e}}function Uf(i,t,e){const r=re(t),n=Ie(t),s=e==="fixed",o=En(i,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=Ee(0);if(r||!r&&!s)if((Se(t)!=="body"||Wn(n))&&(a=ds(t)),r){const u=En(t,!0,s,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else n&&(l.x=Ic(n));const c=o.left+a.scrollLeft-l.x,d=o.top+a.scrollTop-l.y;return{x:c,y:d,width:o.width,height:o.height}}function Aa(i,t){return!re(i)||Bt(i).position==="fixed"?null:t?t(i):i.offsetParent}function Nc(i,t){const e=It(i);if(!re(i)||zc(i))return e;let r=Aa(i,t);for(;r&&Sf(r)&&Bt(r).position==="static";)r=Aa(r,t);return r&&(Se(r)==="html"||Se(r)==="body"&&Bt(r).position==="static"&&!Lo(r))?e:r||Of(i)||e}const Hf=async function(i){const t=this.getOffsetParent||Nc,e=this.getDimensions;return{reference:Uf(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Vf(i){return Bt(i).direction==="rtl"}const Wf={convertOffsetParentRelativeRectToViewportRelativeRect:Nf,getDocumentElement:Ie,getClippingRect:Ff,getOffsetParent:Nc,getElementRects:Hf,getClientRects:Lf,getDimensions:Bf,getScale:vi,isElement:ne,isRTL:Vf},Lc=Ef,Rc=xf,Mc=kf,Dc=(i,t,e)=>{const r=new Map,n={platform:Wf,...e},s={...n.platform,_c:r};return wf(i,t,{...n,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=globalThis,Mo=kr.ShadowRoot&&(kr.ShadyCSS===void 0||kr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Do=Symbol(),Oa=new WeakMap;let jc=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Do)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Mo&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Oa.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Oa.set(e,t))}return t}toString(){return this.cssText}};const qf=i=>new jc(typeof i=="string"?i:i+"",void 0,Do),pt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new jc(e,i,Do)},Gf=(i,t)=>{if(Mo)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=kr.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},Ta=Mo?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return qf(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Yf,defineProperty:Zf,getOwnPropertyDescriptor:Xf,getOwnPropertyNames:Jf,getOwnPropertySymbols:Kf,getPrototypeOf:Qf}=Object,$i=globalThis,za=$i.trustedTypes,tp=za?za.emptyScript:"",Ia=$i.reactiveElementPolyfillSupport,mn=(i,t)=>i,Lr={toAttribute(i,t){switch(t){case Boolean:i=i?tp:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},jo=(i,t)=>!Yf(i,t),Pa={attribute:!0,type:String,converter:Lr,reflect:!1,hasChanged:jo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$i.litPropertyMetadata??($i.litPropertyMetadata=new WeakMap);let mi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pa){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Zf(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:s}=Xf(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n?.call(this)},set(o){const a=n?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pa}static _$Ei(){if(this.hasOwnProperty(mn("elementProperties")))return;const t=Qf(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(mn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mn("properties"))){const e=this.properties,r=[...Jf(e),...Kf(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Ta(n))}else t!==void 0&&e.push(Ta(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gf(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Lr).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Lr;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??jo)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};mi.elementStyles=[],mi.shadowRootOptions={mode:"open"},mi[mn("elementProperties")]=new Map,mi[mn("finalized")]=new Map,Ia?.({ReactiveElement:mi}),($i.reactiveElementVersions??($i.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=globalThis,Mr=Rr.trustedTypes,Na=Mr?Mr.createPolicy("lit-html",{createHTML:i=>i}):void 0,Fc="$lit$",$e=`lit$${Math.random().toFixed(9).slice(2)}$`,Bc="?"+$e,ep=`<${Bc}>`,ti=document,Sn=()=>ti.createComment(""),An=i=>i===null||typeof i!="object"&&typeof i!="function",Fo=Array.isArray,ip=i=>Fo(i)||typeof i?.[Symbol.iterator]=="function",Ls=`[ 	
\f\r]`,cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,La=/-->/g,Ra=/>/g,He=RegExp(`>|${Ls}(?:([^\\s"'>=/]+)(${Ls}*=${Ls}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ma=/'/g,Da=/"/g,Uc=/^(?:script|style|textarea|title)$/i,np=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),J=np(1),ki=Symbol.for("lit-noChange"),xt=Symbol.for("lit-nothing"),ja=new WeakMap,Ge=ti.createTreeWalker(ti,129);function Hc(i,t){if(!Fo(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Na!==void 0?Na.createHTML(t):t}const rp=(i,t)=>{const e=i.length-1,r=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=cn;for(let a=0;a<e;a++){const l=i[a];let c,d,u=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===cn?d[1]==="!--"?o=La:d[1]!==void 0?o=Ra:d[2]!==void 0?(Uc.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=He):d[3]!==void 0&&(o=He):o===He?d[0]===">"?(o=n??cn,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?He:d[3]==='"'?Da:Ma):o===Da||o===Ma?o=He:o===La||o===Ra?o=cn:(o=He,n=void 0);const h=o===He&&i[a+1].startsWith("/>")?" ":"";s+=o===cn?l+ep:u>=0?(r.push(c),l.slice(0,u)+Fc+l.slice(u)+$e+h):l+$e+(u===-2?a:h)}return[Hc(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let to=class Vc{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,d]=rp(t,e);if(this.el=Vc.createElement(c,r),Ge.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=Ge.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(Fc)){const f=d[o++],h=n.getAttribute(u).split($e),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:b[2],strings:h,ctor:b[1]==="."?op:b[1]==="?"?ap:b[1]==="@"?lp:hs}),n.removeAttribute(u)}else u.startsWith($e)&&(l.push({type:6,index:s}),n.removeAttribute(u));if(Uc.test(n.tagName)){const u=n.textContent.split($e),f=u.length-1;if(f>0){n.textContent=Mr?Mr.emptyScript:"";for(let h=0;h<f;h++)n.append(u[h],Sn()),Ge.nextNode(),l.push({type:2,index:++s});n.append(u[f],Sn())}}}else if(n.nodeType===8)if(n.data===Bc)l.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf($e,u+1))!==-1;)l.push({type:7,index:s}),u+=$e.length-1}s++}}static createElement(t,e){const r=ti.createElement("template");return r.innerHTML=t,r}};function Ci(i,t,e=i,r){var n,s;if(t===ki)return t;let o=r!==void 0?(n=e.o)==null?void 0:n[r]:e.l;const a=An(t)?void 0:t._$litDirective$;return o?.constructor!==a&&((s=o?._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=o:e.l=o),o!==void 0&&(t=Ci(i,o._$AS(i,t.values),o,r)),t}let sp=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??ti).importNode(e,!0);Ge.currentNode=n;let s=Ge.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new Bo(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new cp(s,this,t)),this._$AV.push(c),l=r[++a]}o!==l?.index&&(s=Ge.nextNode(),o++)}return Ge.currentNode=ti,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Bo=class Wc{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,n){this.type=2,this._$AH=xt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ci(this,t,e),An(t)?t===xt||t==null||t===""?(this._$AH!==xt&&this._$AR(),this._$AH=xt):t!==this._$AH&&t!==ki&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ip(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==xt&&An(this._$AH)?this._$AA.nextSibling.data=t:this.T(ti.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=to.createElement(Hc(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(r);else{const o=new sp(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let e=ja.get(t.strings);return e===void 0&&ja.set(t.strings,e=new to(t)),e}k(t){Fo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const s of t)n===e.length?e.push(r=new Wc(this.O(Sn()),this.O(Sn()),this,this.options)):r=e[n],r._$AI(s),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}},hs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,s){this.type=1,this._$AH=xt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=xt}_$AI(t,e=this,r,n){const s=this.strings;let o=!1;if(s===void 0)t=Ci(this,t,e,0),o=!An(t)||t!==this._$AH&&t!==ki,o&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Ci(this,a[r+l],e,l),c===ki&&(c=this._$AH[l]),o||(o=!An(c)||c!==this._$AH[l]),c===xt?t=xt:t!==xt&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!n&&this.j(t)}j(t){t===xt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class op extends hs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===xt?void 0:t}}class ap extends hs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==xt)}}class lp extends hs{constructor(t,e,r,n,s){super(t,e,r,n,s),this.type=5}_$AI(t,e=this){if((t=Ci(this,t,e,0)??xt)===ki)return;const r=this._$AH,n=t===xt&&r!==xt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==xt&&(r===xt||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class cp{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ci(this,t)}}const Fa=Rr.litHtmlPolyfillSupport;Fa?.(to,Bo),(Rr.litHtmlVersions??(Rr.litHtmlVersions=[])).push("3.2.0");const Ei=(i,t,e)=>{const r=e?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const s=e?.renderBefore??null;r._$litPart$=n=new Bo(t.insertBefore(Sn(),s),s,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends mi{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ei(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return ki}}var Ba;ht._$litElement$=!0,ht.finalized=!0,(Ba=globalThis.litElementHydrateSupport)==null||Ba.call(globalThis,{LitElement:ht});const Ua=globalThis.litElementPolyfillSupport;Ua?.({LitElement:ht});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const up={attribute:!0,type:String,converter:Lr,reflect:!1,hasChanged:jo},dp=(i=up,t,e)=>{const{kind:r,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+r)};function F(i){return(t,e)=>typeof e=="object"?dp(i,t,e):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fi(i){return F({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hp=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fp={CHILD:2},pp=i=>(...t)=>({_$litDirective$:i,values:t});let mp=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this.t=t,this._$AM=e,this.i=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const n of r)(e=n._$AO)==null||e.call(n,t,!1),bn(n,t);return!0},Dr=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},qc=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),vp(t)}};function bp(i){this._$AN!==void 0?(Dr(this),this._$AM=i,qc(this)):this._$AM=i}function gp(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)bn(r[s],!1),Dr(r[s]);else r!=null&&(bn(r,!1),Dr(r));else bn(this,i)}const vp=i=>{i.type==fp.CHILD&&(i._$AP??(i._$AP=gp),i._$AQ??(i._$AQ=bp))};let yp=class extends mp{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),qc(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&(bn(this,t),Dr(this))}setValue(t){if(hp(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=()=>new _p;let _p=class{};const Rs=new WeakMap,he=pp(class extends yp{render(i){return xt}update(i,[t]){var e;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),xt}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=Rs.get(t);e===void 0&&(e=new WeakMap,Rs.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Rs.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Gc=Object.freeze({left:0,top:0,width:16,height:16}),jr=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),qn=Object.freeze({...Gc,...jr}),eo=Object.freeze({...qn,body:"",hidden:!1}),wp=Object.freeze({width:null,height:null}),Yc=Object.freeze({...wp,...jr});function xp(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:r(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(i.slice(0,i.length-e.length));return isNaN(s)?0:(s=s/n,s%1===0?r(s):0)}}return t}const $p=/[\s,]+/;function kp(i,t){t.split($p).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const Zc={...Yc,preserveAspectRatio:""};function Ha(i){const t={...Zc},e=(r,n)=>i.getAttribute(r)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=xp(e("rotate","")),kp(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Cp(i,t){for(const e in Zc)if(i[e]!==t[e])return!0;return!1}const gn=/^[a-z0-9]+(-[a-z0-9]+)*$/,Gn=(i,t,e,r="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:r,prefix:l,name:a};return t&&!Cr(c)?null:c}const s=n[0],o=s.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return t&&!Cr(a)?null:a}if(e&&r===""){const a={provider:r,prefix:"",name:s};return t&&!Cr(a,e)?null:a}return null},Cr=(i,t)=>i?!!((i.provider===""||i.provider.match(gn))&&(t&&i.prefix===""||i.prefix.match(gn))&&i.name.match(gn)):!1;function Ep(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const r=((i.rotate||0)+(t.rotate||0))%4;return r&&(e.rotate=r),e}function Va(i,t){const e=Ep(i,t);for(const r in eo)r in jr?r in i&&!(r in e)&&(e[r]=jr[r]):r in t?e[r]=t[r]:r in i&&(e[r]=i[r]);return e}function Sp(i,t){const e=i.icons,r=i.aliases||Object.create(null),n=Object.create(null);function s(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=r[o]&&r[o].parent,l=a&&s(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(r)).forEach(s),n}function Ap(i,t,e){const r=i.icons,n=i.aliases||Object.create(null);let s={};function o(a){s=Va(r[a]||n[a],s)}return o(t),e.forEach(o),Va(i,s)}function Xc(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const r=Sp(i);for(const n in r){const s=r[n];s&&(t(n,Ap(i,n,s)),e.push(n))}return e}const Op={provider:"",aliases:{},not_found:{},...Gc};function Ms(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function Jc(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Ms(i,Op))return null;const e=t.icons;for(const n in e){const s=e[n];if(!n.match(gn)||typeof s.body!="string"||!Ms(s,eo))return null}const r=t.aliases||Object.create(null);for(const n in r){const s=r[n],o=s.parent;if(!n.match(gn)||typeof o!="string"||!e[o]&&!r[o]||!Ms(s,eo))return null}return t}const Fr=Object.create(null);function Tp(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function Ae(i,t){const e=Fr[i]||(Fr[i]=Object.create(null));return e[t]||(e[t]=Tp(i,t))}function Uo(i,t){return Jc(t)?Xc(t,(e,r)=>{r?i.icons[e]=r:i.missing.add(e)}):[]}function zp(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Ip(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(Fr)).forEach(r=>{(typeof r=="string"&&typeof t=="string"?[t]:Object.keys(Fr[r]||{})).forEach(n=>{const s=Ae(r,n);e=e.concat(Object.keys(s.icons).map(o=>(r!==""?"@"+r+":":"")+n+":"+o))})}),e}let On=!1;function Kc(i){return typeof i=="boolean"&&(On=i),On}function Tn(i){const t=typeof i=="string"?Gn(i,!0,On):i;if(t){const e=Ae(t.provider,t.prefix),r=t.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function Qc(i,t){const e=Gn(i,!0,On);if(!e)return!1;const r=Ae(e.provider,e.prefix);return zp(r,e.name,t)}function Wa(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),On&&!t&&!i.prefix){let n=!1;return Jc(i)&&(i.prefix="",Xc(i,(s,o)=>{o&&Qc(s,o)&&(n=!0)})),n}const e=i.prefix;if(!Cr({provider:t,prefix:e,name:"a"}))return!1;const r=Ae(t,e);return!!Uo(r,i)}function qa(i){return!!Tn(i)}function Pp(i){const t=Tn(i);return t?{...qn,...t}:null}function Np(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return i.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const s=n.provider,o=n.prefix,a=n.name,l=e[s]||(e[s]=Object.create(null)),c=l[o]||(l[o]=Ae(s,o));let d;a in c.icons?d=t.loaded:o===""||c.missing.has(a)?d=t.missing:d=t.pending;const u={provider:s,prefix:o,name:a};d.push(u)}),t}function tu(i,t){i.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(n=>n.id!==t))})}function Lp(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const r=i.provider,n=i.prefix;t.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])o.loaded.push({provider:r,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:r,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||tu([i],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let Rp=0;function Mp(i,t,e){const r=Rp++,n=tu.bind(null,e,r);if(!t.pending.length)return n;const s={id:r,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),n}const io=Object.create(null);function Ga(i,t){io[i]=t}function no(i){return io[i]||io[""]}function Dp(i,t=!0,e=!1){const r=[];return i.forEach(n=>{const s=typeof n=="string"?Gn(n,t,e):n;s&&r.push(s)}),r}var jp={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Fp(i,t,e,r){const n=i.resources.length,s=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let S=i.resources.slice(0);for(o=[];S.length>1;){const O=Math.floor(Math.random()*S.length);o.push(S[O]),S=S.slice(0,O).concat(S.slice(O+1))}o=o.concat(S)}else o=i.resources.slice(s).concat(i.resources.slice(0,s));const a=Date.now();let l="pending",c=0,d,u=null,f=[],h=[];typeof r=="function"&&h.push(r);function b(){u&&(clearTimeout(u),u=null)}function p(){l==="pending"&&(l="aborted"),b(),f.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),f=[]}function v(S,O){O&&(h=[]),typeof S=="function"&&h.push(S)}function g(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:p}}function _(){l="failed",h.forEach(S=>{S(void 0,d)})}function w(){f.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),f=[]}function x(S,O,M){const A=O!=="success";switch(f=f.filter(z=>z!==S),l){case"pending":break;case"failed":if(A||!i.dataAfterTimeout)return;break;default:return}if(O==="abort"){d=M,_();return}if(A){d=M,f.length||(o.length?C():_());return}if(b(),w(),!i.random){const z=i.resources.indexOf(S.resource);z!==-1&&z!==i.index&&(i.index=z)}l="completed",h.forEach(z=>{z(M)})}function C(){if(l!=="pending")return;b();const S=o.shift();if(S===void 0){if(f.length){u=setTimeout(()=>{b(),l==="pending"&&(w(),_())},i.timeout);return}_();return}const O={status:"pending",resource:S,callback:(M,A)=>{x(O,M,A)}};f.push(O),c++,u=setTimeout(C,i.rotate),e(S,t,O.callback)}return setTimeout(C),g}function eu(i){const t={...jp,...i};let e=[];function r(){e=e.filter(o=>o().status==="pending")}function n(o,a,l){const c=Fp(t,o,a,(d,u)=>{r(),l&&l(d,u)});return e.push(c),c}function s(o){return e.find(a=>o(a))||null}return{query:n,find:s,setIndex:o=>{t.index=o},getIndex:()=>t.index,cleanup:r}}function Ho(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const fs=Object.create(null),gr=["https://api.simplesvg.com","https://api.unisvg.com"],ro=[];for(;gr.length>0;)gr.length===1||Math.random()>.5?ro.push(gr.shift()):ro.push(gr.pop());fs[""]=Ho({resources:["https://api.iconify.design"].concat(ro)});function Ya(i,t){const e=Ho(t);return e===null?!1:(fs[i]=e,!0)}function ps(i){return fs[i]}function Bp(){return Object.keys(fs)}function Za(){}const Ds=Object.create(null);function Up(i){if(!Ds[i]){const t=ps(i);if(!t)return;const e=eu(t),r={config:t,redundancy:e};Ds[i]=r}return Ds[i]}function iu(i,t,e){let r,n;if(typeof i=="string"){const s=no(i);if(!s)return e(void 0,424),Za;n=s.send;const o=Up(i);o&&(r=o.redundancy)}else{const s=Ho(i);if(s){r=eu(s);const o=i.resources?i.resources[0]:"",a=no(o);a&&(n=a.send)}}return!r||!n?(e(void 0,424),Za):r.query(t,n,e)().abort}const Xa="iconify2",zn="iconify",nu=zn+"-count",Ja=zn+"-version",ru=36e5,Hp=168,Vp=50;function so(i,t){try{return i.getItem(t)}catch{}}function Vo(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Ka(i,t){try{i.removeItem(t)}catch{}}function oo(i,t){return Vo(i,nu,t.toString())}function ao(i){return parseInt(so(i,nu))||0}const Xe={local:!0,session:!0},su={local:new Set,session:new Set};let Wo=!1;function Wp(i){Wo=i}let vr=typeof window>"u"?{}:window;function ou(i){const t=i+"Storage";try{if(vr&&vr[t]&&typeof vr[t].length=="number")return vr[t]}catch{}Xe[i]=!1}function au(i,t){const e=ou(i);if(!e)return;const r=so(e,Ja);if(r!==Xa){if(r){const a=ao(e);for(let l=0;l<a;l++)Ka(e,zn+l.toString())}Vo(e,Ja,Xa),oo(e,0);return}const n=Math.floor(Date.now()/ru)-Hp,s=a=>{const l=zn+a.toString(),c=so(e,l);if(typeof c=="string"){try{const d=JSON.parse(c);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}Ka(e,l)}};let o=ao(e);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,oo(e,o)):su[i].add(a))}function lu(){if(!Wo){Wp(!0);for(const i in Xe)au(i,t=>{const e=t.data,r=t.provider,n=e.prefix,s=Ae(r,n);if(!Uo(s,e).length)return!1;const o=e.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function qp(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const r in Xe)au(r,n=>{const s=n.data;return n.provider!==i.provider||s.prefix!==i.prefix||s.lastModified===t});return!0}function Gp(i,t){Wo||lu();function e(r){let n;if(!Xe[r]||!(n=ou(r)))return;const s=su[r];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=ao(n),o>=Vp||!oo(n,o+1))return;const a={cached:Math.floor(Date.now()/ru),provider:i.provider,data:t};return Vo(n,zn+o.toString(),JSON.stringify(a))}t.lastModified&&!qp(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Qa(){}function Yp(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Lp(i)}))}function Zp(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:r}=i,n=i.iconsToLoad;delete i.iconsToLoad;let s;!n||!(s=no(e))||s.prepare(e,r,n).forEach(o=>{iu(e,o,a=>{if(typeof a!="object")o.icons.forEach(l=>{i.missing.add(l)});else try{const l=Uo(i,a);if(!l.length)return;const c=i.pendingIcons;c&&l.forEach(d=>{c.delete(d)}),Gp(i,a)}catch(l){console.error(l)}Yp(i)})})}))}const qo=(i,t)=>{const e=Dp(i,!0,Kc()),r=Np(e);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Qa)}),()=>{l=!1}}const n=Object.create(null),s=[];let o,a;return r.pending.forEach(l=>{const{provider:c,prefix:d}=l;if(d===a&&c===o)return;o=c,a=d,s.push(Ae(c,d));const u=n[c]||(n[c]=Object.create(null));u[d]||(u[d]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:d,name:u}=l,f=Ae(c,d),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(u)||(h.add(u),n[c][d].push(u))}),s.forEach(l=>{const{provider:c,prefix:d}=l;n[c][d].length&&Zp(l,n[c][d])}),t?Mp(t,r,s):Qa},Xp=i=>new Promise((t,e)=>{const r=typeof i=="string"?Gn(i,!0):i;if(!r){e(i);return}qo([r||i],n=>{if(n.length&&r){const s=Tn(r);if(s){t({...qn,...s});return}}e(i)})});function Jp(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function Kp(i,t){const e=typeof i=="string"?Gn(i,!0,!0):null;if(!e){const s=Jp(i);return{value:i,data:s}}const r=Tn(e);if(r!==void 0||!e.prefix)return{value:i,name:e,data:r};const n=qo([e],()=>t(i,e,Tn(e)));return{value:i,name:e,loading:n}}function js(i){return i.hasAttribute("inline")}let cu=!1;try{cu=navigator.vendor.indexOf("Apple")===0}catch{}function Qp(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(cu||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const tm=/(-?[0-9.]*[0-9]+[0-9.]*)/g,em=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function lo(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const r=i.split(tm);if(r===null||!r.length)return i;const n=[];let s=r.shift(),o=em.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?n.push(s):n.push(Math.ceil(a*t*e)/e)}else n.push(s);if(s=r.shift(),s===void 0)return n.join("");o=!o}}function im(i,t="defs"){let e="";const r=i.indexOf("<"+t);for(;r>=0;){const n=i.indexOf(">",r),s=i.indexOf("</"+t);if(n===-1||s===-1)break;const o=i.indexOf(">",s);if(o===-1)break;e+=i.slice(n+1,s).trim(),i=i.slice(0,r).trim()+i.slice(o+1)}return{defs:e,content:i}}function nm(i,t){return i?"<defs>"+i+"</defs>"+t:t}function rm(i,t,e){const r=im(i);return nm(r.defs,t+r.content+e)}const sm=i=>i==="unset"||i==="undefined"||i==="none";function uu(i,t){const e={...qn,...i},r={...Yc,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let s=e.body;[e,r].forEach(p=>{const v=[],g=p.hFlip,_=p.vFlip;let w=p.rotate;g?_?w+=2:(v.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),v.push("scale(-1 1)"),n.top=n.left=0):_&&(v.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),v.push("scale(1 -1)"),n.top=n.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=n.height/2+n.top,v.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:v.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:x=n.width/2+n.left,v.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(n.left!==n.top&&(x=n.left,n.left=n.top,n.top=x),n.width!==n.height&&(x=n.width,n.width=n.height,n.height=x)),v.length&&(s=rm(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const o=r.width,a=r.height,l=n.width,c=n.height;let d,u;o===null?(u=a===null?"1em":a==="auto"?c:a,d=lo(u,l/c)):(d=o==="auto"?l:o,u=a===null?lo(d,c/l):a==="auto"?c:a);const f={},h=(p,v)=>{sm(v)||(f[p]=v.toString())};h("width",d),h("height",u);const b=[n.left,n.top,l,c];return f.viewBox=b.join(" "),{attributes:f,viewBox:b,body:s}}function Go(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)e+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function om(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function am(i){return"data:image/svg+xml,"+om(i)}function du(i){return'url("'+am(i)+'")'}const lm=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let Br=lm();function cm(i){Br=i}function um(){return Br}function dm(i,t){const e=ps(i);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const s=t+".json?icons=";r=e.maxURL-n-e.path.length-s.length}return r}function hm(i){return i===404}const fm=(i,t,e)=>{const r=[],n=dm(i,t),s="icons";let o={type:s,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(r.push(o),o={type:s,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),r.push(o),r};function pm(i){if(typeof i=="string"){const t=ps(i);if(t)return t.path}return"/"}const mm=(i,t,e)=>{if(!Br){e("abort",424);return}let r=pm(t.provider);switch(t.type){case"icons":{const s=t.prefix,o=t.icons.join(","),a=new URLSearchParams({icons:o});r+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:e("abort",400);return}let n=503;Br(i+r).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{e(hm(o)?"abort":"next",o)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?e("abort",s):e("next",n)});return}setTimeout(()=>{e("success",s)})}).catch(()=>{e("next",n)})},bm={prepare:fm,send:mm};function tl(i,t){switch(i){case"local":case"session":Xe[i]=t;break;case"all":for(const e in Xe)Xe[e]=t;break}}const Fs="data-style";let hu="";function gm(i){hu=i}function el(i,t){let e=Array.from(i.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(Fs));e||(e=document.createElement("style"),e.setAttribute(Fs,Fs),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+hu}function fu(){Ga("",bm),Kc(!0);let i;try{i=window}catch{}if(i){if(lu(),i.IconifyPreload!==void 0){const t=i.IconifyPreload,e="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Wa(r))&&console.error(e)}catch{console.error(e)}})}if(i.IconifyProviders!==void 0){const t=i.IconifyProviders;if(typeof t=="object"&&t!==null)for(const e in t){const r="IconifyProviders["+e+"] is invalid.";try{const n=t[e];if(typeof n!="object"||!n||n.resources===void 0)continue;Ya(e,n)||console.error(r)}catch{console.error(r)}}}}return{enableCache:t=>tl(t,!0),disableCache:t=>tl(t,!1),iconLoaded:qa,iconExists:qa,getIcon:Pp,listIcons:Ip,addIcon:Qc,addCollection:Wa,calculateSize:lo,buildIcon:uu,iconToHTML:Go,svgToURL:du,loadIcons:qo,loadIcon:Xp,addAPIProvider:Ya,appendCustomStyle:gm,_api:{getAPIConfig:ps,setAPIModule:Ga,sendAPIQuery:iu,setFetch:cm,getFetch:um,listAPIProviders:Bp}}}const co={"background-color":"currentColor"},pu={"background-color":"transparent"},il={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},nl={"-webkit-mask":co,mask:co,background:pu};for(const i in nl){const t=nl[i];for(const e in il)t[i+"-"+e]=il[e]}function rl(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function vm(i,t,e){const r=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const s=i.attributes,o=Go(n,{...s,width:t.width+"",height:t.height+""}),a=du(o),l=r.style,c={"--svg":a,width:rl(s.width),height:rl(s.height),...e?co:pu};for(const d in c)l.setProperty(d,c[d]);return r}let vn;function ym(){try{vn=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{vn=null}}function _m(i){return vn===void 0&&ym(),vn?vn.createHTML(i):i}function wm(i){const t=document.createElement("span"),e=i.attributes;let r="";e.width||(r="width: inherit;"),e.height||(r+="height: inherit;"),r&&(e.style=r);const n=Go(i.body,e);return t.innerHTML=_m(n),t.firstChild}function uo(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function sl(i,t){const e=t.icon.data,r=t.customisations,n=uu(e,r);r.preserveAspectRatio&&(n.attributes.preserveAspectRatio=r.preserveAspectRatio);const s=t.renderedMode;let o;switch(s){case"svg":o=wm(n);break;default:o=vm(n,{...qn,...e},s==="mask")}const a=uo(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function ol(i,t,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:r}}function xm(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const r=t.get(i);if(r)return r;const n=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends e{constructor(){super(),Ue(this,"_shadowRoot"),Ue(this,"_initialised",!1),Ue(this,"_state"),Ue(this,"_checkQueued",!1),Ue(this,"_connected",!1),Ue(this,"_observer",null),Ue(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=js(this);el(a,l),this._state=ol({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=js(this),c=this._state;l!==c.inline&&(c.inline=l,el(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return js(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}sl(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const c=this.getAttribute("mode"),d=Ha(this);(a.attrMode!==c||Cp(a.customisations,d)||!uo(this._shadowRoot))&&this._renderIcon(a.icon,d,c)}_iconChanged(a){const l=Kp(a,(c,d,u)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==c)return;const h={value:c,name:d,data:u};h.data?this._gotIconData(h):f.icon=h});l.data?this._gotIconData(l):this._state=ol(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=uo(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Ha(this),this.getAttribute("mode"))}_renderIcon(a,l,c){const d=Qp(a.data.body,c),u=this._state.inline;sl(this._shadowRoot,this._state={rendered:!0,icon:a,inline:u,customisations:l,attrMode:c,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(c=>c.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in s.prototype||Object.defineProperty(s.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=fu();for(const a in o)s[a]=s.prototype[a]=o[a];return t.define(i,s),s}xm()||fu();const $m=pt`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,km=pt`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-7: hsl(210 10% 70%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,Pe={scrollbar:$m,globalStyles:km},mu=class ut{static set config(t){this._config={...ut._config,...t}}static get config(){return ut._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Pe.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){ut.init()}static init(){ut.addGlobalStyles(),ut.defineCustomElement("bim-button",Om),ut.defineCustomElement("bim-checkbox",Bi),ut.defineCustomElement("bim-color-input",oi),ut.defineCustomElement("bim-context-menu",ho),ut.defineCustomElement("bim-dropdown",ge),ut.defineCustomElement("bim-grid",Xo),ut.defineCustomElement("bim-icon",Dm),ut.defineCustomElement("bim-input",Zn),ut.defineCustomElement("bim-label",Hi),ut.defineCustomElement("bim-number-input",Lt),ut.defineCustomElement("bim-option",St),ut.defineCustomElement("bim-panel",ai),ut.defineCustomElement("bim-panel-section",Vi),ut.defineCustomElement("bim-selector",Wi),ut.defineCustomElement("bim-table",qt),ut.defineCustomElement("bim-tabs",ci),ut.defineCustomElement("bim-tab",Dt),ut.defineCustomElement("bim-table-cell",Tu),ut.defineCustomElement("bim-table-children",Iu),ut.defineCustomElement("bim-table-group",Nu),ut.defineCustomElement("bim-table-row",li),ut.defineCustomElement("bim-text-input",ae),ut.defineCustomElement("bim-toolbar",_s),ut.defineCustomElement("bim-toolbar-group",vs),ut.defineCustomElement("bim-toolbar-section",Yi),ut.defineCustomElement("bim-viewport",Wu)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let r=0;r<10;r++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};mu._config={sectionLabelOnVerticalToolbar:!1};let Yo=mu,Pt=class extends ht{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const r of t)this.elements.add(r);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const r of e)r.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const r=e[0];if(!r.isIntersecting)return;const n=r.target;t.unobserve(n);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][s];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,r=[...this.elements][e];r&&t.observe(r)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const r=document.createDocumentFragment();if(t.length===0)return Ei(t(),r),r.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const s=t,o=l=>(n={...n,...l},Ei(s(n),r),n);o(e);const a=()=>n;return[r.firstElementChild,o,a]}};var Cm=Object.defineProperty,Em=Object.getOwnPropertyDescriptor,bu=(i,t,e,r)=>{for(var n=Em(t,e),s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Cm(t,e,n),n},Ct;const Zo=(Ct=class extends ht{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(i){this._placement=i,this.updatePosition()}static removeMenus(){for(const i of Ct.menus)i instanceof Ct&&(i.visible=!1);Ct.dialog.close(),Ct.dialog.remove()}get visible(){return this._visible}set visible(i){var t;this._visible=i,i?(Ct.dialog.parentElement||document.body.append(Ct.dialog),this._previousContainer=this.parentElement,Ct.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,Ct.dialog.append(this),Ct.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const i=this.placement??"right",t=await Dc(this._previousContainer,this,{placement:i,middleware:[kc(10),Mc(),Rc(),Lc({padding:5})]}),{x:e,y:r}=t;this.style.left=`${e}px`,this.style.top=`${r}px`}connectedCallback(){super.connectedCallback(),Ct.menus.push(this)}render(){return J` <slot></slot> `}},Ct.styles=[Pe.scrollbar,pt`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host(:not([visible])) {
        display: none;
      }
    `],Ct.dialog=Pt.create(()=>J` <dialog
      @click=${i=>{i.target===Ct.dialog&&Ct.removeMenus()}}
      @cancel=${()=>Ct.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`),Ct.menus=[],Ct);bu([F({type:String,reflect:!0})],Zo.prototype,"placement");bu([F({type:Boolean,reflect:!0})],Zo.prototype,"visible");let ho=Zo;var Sm=Object.defineProperty,Am=Object.getOwnPropertyDescriptor,Jt=(i,t,e,r)=>{for(var n=r>1?void 0:r?Am(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Sm(t,e,n),n},un;const Vt=(un=class extends ht{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=Si(),this._tooltip=Si(),this._mouseLeave=!1,this.onClick=i=>{i.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const i=this._contextMenu;if(i){const t=this.getAttribute("data-context-group");t&&i.setAttribute("data-context-group",t),this.closeNestedContexts();const e=Yo.newRandomId();for(const r of i.children)r instanceof un&&r.setAttribute("data-context-group",e);i.visible=!0}},this.mouseLeave=!0}set loading(i){if(this._loading=i,i)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=i,this.icon="eos-icons:loading";else{const{disabled:t,icon:e}=this._stateBeforeLoading;this.disabled=t,this.icon=e}}get loading(){return this._loading}set mouseLeave(i){this._mouseLeave=i,i&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:i}=this._parent,{value:t}=this._tooltip;i&&t&&Dc(i,t,{placement:"bottom",middleware:[kc(10),Mc(),Rc(),Lc({padding:5})]}).then(e=>{const{x:r,y:n}=e;Object.assign(t.style,{left:`${r}px`,top:`${n}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const i=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},i)}closeNestedContexts(){const i=this.getAttribute("data-context-group");if(i)for(const t of ho.dialog.children){const e=t.getAttribute("data-context-group");if(t instanceof ho&&e===i){t.visible=!1,t.removeAttribute("data-context-group");for(const r of t.children)r instanceof un&&(r.closeNestedContexts(),r.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const i=J`
      <div ${he(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?J`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?J`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=J`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return J`
      <div ${he(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?J`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?t:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?i:null}
      </div>
      <slot></slot>
    `}},un.styles=pt`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover),
    :host([active]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      background-color: gray;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `,un);Jt([F({type:String,reflect:!0})],Vt.prototype,"label",2);Jt([F({type:Boolean,attribute:"label-hidden",reflect:!0})],Vt.prototype,"labelHidden",2);Jt([F({type:Boolean,reflect:!0})],Vt.prototype,"active",2);Jt([F({type:Boolean,reflect:!0,attribute:"disabled"})],Vt.prototype,"disabled",2);Jt([F({type:String,reflect:!0})],Vt.prototype,"icon",2);Jt([F({type:Boolean,reflect:!0})],Vt.prototype,"vertical",2);Jt([F({type:Number,attribute:"tooltip-time",reflect:!0})],Vt.prototype,"tooltipTime",2);Jt([F({type:Boolean,attribute:"tooltip-visible",reflect:!0})],Vt.prototype,"tooltipVisible",2);Jt([F({type:String,attribute:"tooltip-title",reflect:!0})],Vt.prototype,"tooltipTitle",2);Jt([F({type:String,attribute:"tooltip-text",reflect:!0})],Vt.prototype,"tooltipText",2);Jt([F({type:Boolean,reflect:!0})],Vt.prototype,"loading",1);let Om=Vt;var Tm=Object.defineProperty,Yn=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Tm(t,e,n),n};const gu=class extends ht{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return J`
      <div class="parent">
        ${this.label?J`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};gu.styles=pt`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.25rem;
      width: 100%;
      align-items: center;
      transition: all 0.15s;
    }

    :host([inverted]) .parent {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
      transition: all 0.15s;
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }
  `;let Bi=gu;Yn([F({type:String,reflect:!0})],Bi.prototype,"icon");Yn([F({type:String,reflect:!0})],Bi.prototype,"name");Yn([F({type:String,reflect:!0})],Bi.prototype,"label");Yn([F({type:Boolean,reflect:!0})],Bi.prototype,"checked");Yn([F({type:Boolean,reflect:!0})],Bi.prototype,"inverted");var zm=Object.defineProperty,Ui=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&zm(t,e,n),n};const vu=class extends ht{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=Si(),this._textInput=Si(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:r}=t;this.color=e,r&&(this.opacity=r)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:r}=e;let n=r.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return J`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${he(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${he(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?J`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};vu.styles=pt`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let oi=vu;Ui([F({type:String,reflect:!0})],oi.prototype,"name");Ui([F({type:String,reflect:!0})],oi.prototype,"label");Ui([F({type:String,reflect:!0})],oi.prototype,"icon");Ui([F({type:Boolean,reflect:!0})],oi.prototype,"vertical");Ui([F({type:Number,reflect:!0})],oi.prototype,"opacity");Ui([F({type:String,reflect:!0})],oi.prototype,"color");const Ur=(i,t={},e=!0)=>{let r={};for(const n of i.children){const s=n,o=s.getAttribute("name")||s.getAttribute("label"),a=t[o];if(o){if("value"in s&&typeof s.value<"u"&&s.value!==null){const l=s.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;r[o]=a?a(s.value):s.value}else if(e){const l=Ur(s,t);if(Object.keys(l).length===0)continue;r[o]=a?a(l):l}}else e&&(r={...r,...Ur(s,t)})}return r},ms=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Im=[">=","<=","=",">","<","?","/","#"];function al(i){const t=Im.find(o=>i.split(o).length===2),e=i.split(t).map(o=>o.trim()),[r,n]=e,s=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):ms(n);return{key:r,condition:t,value:s}}const fo=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(r=>r.trim());for(const r of e){const n=!r.startsWith("(")&&!r.endsWith(")"),s=r.startsWith("(")&&r.endsWith(")");if(n){const o=al(r);t.push(o)}if(s){const o={operator:"&",queries:r.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const c=al(a);return l>0&&(c.operator="&"),c})};t.push(o)}}return t}catch{return null}},ll=(i,t,e)=>{let r=!1;switch(t){case"=":r=i===e;break;case"?":r=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(r=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(r=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(r=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(r=i>=e);break;case"/":r=String(i).startsWith(String(e));break}return r};var Pm=Object.defineProperty,Nm=Object.getOwnPropertyDescriptor,Ne=(i,t,e,r)=>{for(var n=r>1?void 0:r?Nm(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Pm(t,e,n),n};const yu=class extends ht{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?ms(this.label):this.label}set value(t){this._value=t}render(){return J`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?J` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?J`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?J`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};yu.styles=pt`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_main-base) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
    }
  `;let St=yu;Ne([F({type:String,reflect:!0})],St.prototype,"img",2);Ne([F({type:String,reflect:!0})],St.prototype,"label",2);Ne([F({type:String,reflect:!0})],St.prototype,"icon",2);Ne([F({type:Boolean,reflect:!0})],St.prototype,"checked",2);Ne([F({type:Boolean,reflect:!0})],St.prototype,"checkbox",2);Ne([F({type:Boolean,attribute:"no-mark",reflect:!0})],St.prototype,"noMark",2);Ne([F({converter:{fromAttribute(i){return i&&ms(i)}}})],St.prototype,"value",1);Ne([F({type:Boolean,reflect:!0})],St.prototype,"vertical",2);var Lm=Object.defineProperty,Rm=Object.getOwnPropertyDescriptor,Le=(i,t,e,r)=>{for(var n=r>1?void 0:r?Rm(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Lm(t,e,n),n};const _u=class extends Pt{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=Si(),this.onOptionClick=t=>{const e=t.target,r=this._value.has(e);if(!this.multiple&&!this.required&&!r)this._value=new Set([e]);else if(!this.multiple&&!this.required&&r)this._value=new Set([]);else if(!this.multiple&&this.required&&!r)this._value=new Set([e]);else if(this.multiple&&!this.required&&!r)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&r){const n=[...this._value].filter(s=>s!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!r)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&r){const n=[...this._value].filter(o=>o!==e),s=new Set(n);s.size!==0&&(this._value=s)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const r of this.elements)e.append(r);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const r of t){const n=this.findOption(r);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(t=>t instanceof St&&t.checked).map(t=>t.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof St&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const r=new Set;for(const n of this.elements){if(!(n instanceof St)){n.remove();continue}n.checked&&r.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=r}updateOptionsState(){for(const t of this._options)t instanceof St&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(e=>e instanceof St?e.label===t||e.value===t:!1)}render(){let t,e,r;if(this._value.size===0)t="Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=n?.label||n?.value,e=n?.img,r=n?.icon}else t=`Multiple (${this._value.size})`;return J`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${e}
            .icon=${r}
            style="overflow: hidden;"
            >${t}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${he(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};_u.styles=[Pe.scrollbar,pt`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let ge=_u;Le([F({type:String,reflect:!0})],ge.prototype,"name",2);Le([F({type:String,reflect:!0})],ge.prototype,"icon",2);Le([F({type:String,reflect:!0})],ge.prototype,"label",2);Le([F({type:Boolean,reflect:!0})],ge.prototype,"multiple",2);Le([F({type:Boolean,reflect:!0})],ge.prototype,"required",2);Le([F({type:Boolean,reflect:!0})],ge.prototype,"vertical",2);Le([F({type:Boolean,reflect:!0})],ge.prototype,"visible",1);Le([Fi()],ge.prototype,"_value",2);var Mm=Object.defineProperty,wu=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Mm(t,e,n),n};const xu=class extends ht{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(t){const e=t.split(`
`).map(r=>r.trim()).map(r=>r.split('"')[1]).filter(r=>r!==void 0).flatMap(r=>r.split(/\s+/));return[...new Set(e)].filter(r=>r!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const t=this.layouts[this.layout],e=this.getUniqueAreasFromTemplate(t.template).map(r=>{const n=t.elements[r];return n&&(n.style.gridArea=r),n}).filter(r=>!!r);this.style.gridTemplate=t.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...e)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return J`<slot></slot>`}};xu.styles=pt`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let Xo=xu;wu([F({type:Boolean,reflect:!0})],Xo.prototype,"floating");wu([F({type:String,reflect:!0})],Xo.prototype,"layout");const po=class extends ht{render(){return J`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};po.styles=pt`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
    }
  `,po.properties={icon:{type:String}};let Dm=po;var jm=Object.defineProperty,bs=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&jm(t,e,n),n};const $u=class extends ht{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const r=e;"value"in r?t[r.name||r.label]=r.value:"checked"in r&&(t[r.name||r.label]=r.checked)}return t}set value(t){const e=[...this.children];for(const r in t){const n=e.find(a=>{const l=a;return l.name===r||l.label===r});if(!n)continue;const s=n,o=t[r];typeof o=="boolean"?s.checked=o:s.value=o}}render(){return J`
      <div class="parent">
        ${this.label||this.icon?J`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};$u.styles=pt`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let Zn=$u;bs([F({type:String,reflect:!0})],Zn.prototype,"name");bs([F({type:String,reflect:!0})],Zn.prototype,"label");bs([F({type:String,reflect:!0})],Zn.prototype,"icon");bs([F({type:Boolean,reflect:!0})],Zn.prototype,"vertical");var Fm=Object.defineProperty,Xn=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Fm(t,e,n),n};const ku=class extends ht{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?ms(this.textContent):this.textContent}render(){return J`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?J`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?J`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};ku.styles=pt`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
      display: block;
      white-space: nowrap;
      line-height: 1.1rem;
      transition: all 0.15s;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: none;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let Hi=ku;Xn([F({type:String,reflect:!0})],Hi.prototype,"img");Xn([F({type:Boolean,attribute:"label-hidden",reflect:!0})],Hi.prototype,"labelHidden");Xn([F({type:String,reflect:!0})],Hi.prototype,"icon");Xn([F({type:Boolean,attribute:"icon-hidden",reflect:!0})],Hi.prototype,"iconHidden");Xn([F({type:Boolean,reflect:!0})],Hi.prototype,"vertical");var Bm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,Wt=(i,t,e,r)=>{for(var n=r>1?void 0:r?Um(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Bm(t,e,n),n};const Cu=class extends ht{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Si(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let r=t;if(r=r.replace(/[^0-9.-]/g,""),r=r.replace(/(\..*)\./g,"$1"),r.endsWith(".")||(r.lastIndexOf("-")>0&&(r=r[0]+r.substring(1).replace(/-/g,"")),r==="-"||r==="-0"))return;let n=Number(r);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,r=this.value;let n=!1;const s=l=>{var c;n=!0;const{clientX:d}=l,u=this.step??1,f=((c=u.toString().split(".")[1])==null?void 0:c.length)||0,h=1/(this.sensitivity??1),b=(d-e)/h;if(Math.floor(Math.abs(b))!==Math.abs(b))return;const p=r+b*u;this.setValue(p.toFixed(f))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},a=()=>{document.removeEventListener("mousemove",s),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=r=>{r.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=J`
      ${this.pref||this.icon?J`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${he(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?J`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,r=this.max??1/0,n=100*(this.value-e)/(r-e),s=J`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?J`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?J`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return J`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?s:t}
      </bim-input>
    `}};Cu.styles=pt`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let Lt=Cu;Wt([F({type:String,reflect:!0})],Lt.prototype,"name",2);Wt([F({type:String,reflect:!0})],Lt.prototype,"icon",2);Wt([F({type:String,reflect:!0})],Lt.prototype,"label",2);Wt([F({type:String,reflect:!0})],Lt.prototype,"pref",2);Wt([F({type:Number,reflect:!0})],Lt.prototype,"min",2);Wt([F({type:Number,reflect:!0})],Lt.prototype,"value",1);Wt([F({type:Number,reflect:!0})],Lt.prototype,"step",2);Wt([F({type:Number,reflect:!0})],Lt.prototype,"sensitivity",2);Wt([F({type:Number,reflect:!0})],Lt.prototype,"max",2);Wt([F({type:String,reflect:!0})],Lt.prototype,"suffix",2);Wt([F({type:Boolean,reflect:!0})],Lt.prototype,"vertical",2);Wt([F({type:Boolean,reflect:!0})],Lt.prototype,"slider",2);var Hm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,Jn=(i,t,e,r)=>{for(var n=r>1?void 0:r?Vm(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Hm(t,e,n),n};const Eu=class extends ht{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return Ur(this,this.valueTransform)}set value(t){const e=[...this.children];for(const r in t){const n=e.find(o=>{const a=o;return a.name===r||a.label===r});if(!n)continue;const s=n;s.value=t[r]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,J`
      <div class="parent">
        ${this.label||this.name||this.icon?J`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};Eu.styles=[Pe.scrollbar,pt`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let ai=Eu;Jn([F({type:String,reflect:!0})],ai.prototype,"icon",2);Jn([F({type:String,reflect:!0})],ai.prototype,"name",2);Jn([F({type:String,reflect:!0})],ai.prototype,"label",2);Jn([F({type:Boolean,reflect:!0})],ai.prototype,"hidden",1);Jn([F({type:Boolean,attribute:"header-hidden",reflect:!0})],ai.prototype,"headerHidden",2);var Wm=Object.defineProperty,Kn=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Wm(t,e,n),n};const Su=class extends ht{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const t=this.parentElement;let e;return t instanceof ai&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),Ur(this,e)}set value(t){const e=[...this.children];for(const r in t){const n=e.find(o=>{const a=o;return a.name===r||a.label===r});if(!n)continue;const s=n;s.value=t[r]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=J`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,r=J`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=this.collapsed?e:r,s=J`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?J`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return J`
      <div class="parent">
        ${t?s:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};Su.styles=[Pe.scrollbar,pt`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .header svg {
        fill: var(--bim-ui_bg-contrast-80);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }
    `];let Vi=Su;Kn([F({type:String,reflect:!0})],Vi.prototype,"icon");Kn([F({type:String,reflect:!0})],Vi.prototype,"label");Kn([F({type:String,reflect:!0})],Vi.prototype,"name");Kn([F({type:Boolean,reflect:!0})],Vi.prototype,"fixed");Kn([F({type:Boolean,reflect:!0})],Vi.prototype,"collapsed");var qm=Object.defineProperty,Qn=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&qm(t,e,n),n};const Au=class extends ht{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof St&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const r of this._options)r.checked=r===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const r of e)r instanceof St&&(r.noMark=!0,r.removeEventListener("click",this.onOptionClick),r.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(e=>e instanceof St?e.label===t||e.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof St&&e.checked);t&&(this._value=t)}render(){return J`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Au.styles=pt`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }
  `;let Wi=Au;Qn([F({type:String,reflect:!0})],Wi.prototype,"name");Qn([F({type:String,reflect:!0})],Wi.prototype,"icon");Qn([F({type:String,reflect:!0})],Wi.prototype,"label");Qn([F({type:Boolean,reflect:!0})],Wi.prototype,"vertical");Qn([Fi()],Wi.prototype,"_value");const Gm=()=>J`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-10);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-20);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div style="display: flex; flex-direction: column;">
      <div data-type="row" style="gap: 2rem">
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 2"></div>
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 0.5"></div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.7s5"></div>
        </div>
      </div>
    </div>
  `,Ym=()=>J`
    <style>
      .loader {
        grid-area: Processing;
        position: relative;
        padding: 0.125rem;
      }
      .loader:before {
        content: "";
        position: absolute;
      }
      .loader .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: var(--bim-ui_main-base);
        /* width: 25%; */
        width: 0;
        animation: borealisBar 2s linear infinite;
      }

      @keyframes borealisBar {
        0% {
          left: 0%;
          right: 100%;
          width: 0%;
        }
        10% {
          left: 0%;
          right: 75%;
          width: 25%;
        }
        90% {
          right: 0%;
          left: 75%;
          width: 25%;
        }
        100% {
          left: 100%;
          right: 0%;
          width: 0%;
        }
      }
    </style>
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  `;var Zm=Object.defineProperty,Xm=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Zm(t,e,n),n};const Ou=class extends ht{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return J`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Ou.styles=pt`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let Tu=Ou;Xm([F({type:String,reflect:!0})],Tu.prototype,"column");var Jm=Object.defineProperty,Km=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Jm(t,e,n),n};const zu=class extends ht{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const r of this._groups)r.childrenHidden=typeof t>"u"?!r.childrenHidden:!t,e&&r.toggleChildren(t,e)}render(){return this._groups=[],J`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};zu.styles=pt`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let Iu=zu;Km([F({type:Array,attribute:!1})],Iu.prototype,"data");var Qm=Object.defineProperty,tb=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Qm(t,e,n),n};const Pu=class extends ht{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,e=J`
      ${this.table.noIndentation?null:J`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,r=document.createDocumentFragment();Ei(e,r);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let s=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(c);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("height","6.5"),d.setAttribute("width","9.5"),d.setAttribute("viewBox","0 0 5.9111118 5.0175439");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),d.append(u),s=document.createElement("div"),s.addEventListener("click",f=>{f.stopPropagation(),this.toggleChildren()}),s.classList.add("caret"),s.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,this.childrenHidden?s.append(l):s.append(d)}const o=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&o.append(r),o.table=this.table,o.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),s&&this.data.children&&o.append(s),t!==0&&(!this.data.children||this.childrenHidden)&&n&&o.append(n);let a;if(this.data.children){a=document.createElement("bim-table-children"),this._children=a,a.table=this.table,a.data=this.data.children;const l=document.createDocumentFragment();Ei(e,l),a.append(l)}return J`
      <div class="parent">${o} ${this.childrenHidden?null:a}</div>
    `}};Pu.styles=pt`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let Nu=Pu;tb([F({type:Boolean,attribute:"children-hidden",reflect:!0})],Nu.prototype,"childrenHidden");var eb=Object.defineProperty,qi=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&eb(t,e,n),n};const Lu=class extends ht{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.name)}get _columnWidths(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,e=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,r=[];for(const n in e){if(this.hiddenColumns.includes(n))continue;const s=e[n];let o;if(typeof s=="string"||typeof s=="boolean"||typeof s=="number"?(o=document.createElement("bim-label"),o.textContent=String(s)):s instanceof HTMLElement?o=s:(o=document.createDocumentFragment(),Ei(s,o)),!o)continue;const a=document.createElement("bim-table-cell");a.append(o),a.column=n,this._columnNames.indexOf(n)===0&&(a.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const l=this._columnNames.indexOf(n);a.setAttribute("data-column-index",String(l)),a.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),a.toggleAttribute("data-cell-header",this.isHeader),a.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:a}})),r.push(a)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,J`
      ${!this.isHeader&&this.table.selectableRows?J`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${r}
      <slot></slot>
    `}render(){return J`${this._intersecting?this.compute():J``}`}};Lu.styles=pt`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;let li=Lu;qi([F({type:Boolean,reflect:!0})],li.prototype,"selected");qi([F({attribute:!1})],li.prototype,"columns");qi([F({attribute:!1})],li.prototype,"hiddenColumns");qi([F({attribute:!1})],li.prototype,"data");qi([F({type:Boolean,attribute:"is-header",reflect:!0})],li.prototype,"isHeader");qi([Fi()],li.prototype,"_intersecting");var ib=Object.defineProperty,nb=Object.getOwnPropertyDescriptor,Kt=(i,t,e,r)=>{for(var n=r>1?void 0:r?nb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&ib(t,e,n),n};const Ru=class extends ht{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this.loadingErrorElement=null,this._stringFilterFunction=(t,e)=>Object.values(e.data).some(r=>String(r).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let r=!1;const n=fo(t)??[];for(const s of n){if("queries"in s){r=!1;break}const{condition:o,value:a}=s;let{key:l}=s;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,r=Object.keys(e.data).filter(d=>d.includes(c)).map(d=>ll(e.data[d],o,a)).some(d=>d)}else r=ll(e.data[l],o,a);if(!r)break}return r}}set columns(t){const e=[];for(const r of t){const n=typeof r=="string"?{name:r,width:`minmax(${this.minColWidth}, 1fr)`}:r;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:r}=e;t[r]=r}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(fo(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const r of t){const{children:n,data:s}=r;for(const o in s)this._columns.map(a=>typeof a=="string"?a:a.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,r="",n=!0){const s=this._textDelimiters[t];let o="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(o+=`Indentation${s}`);const l=`${a.join(s)}
`;o+=l}for(const[l,c]of e.entries()){const{data:d,children:u}=c,f=this.indentationInText?`${r}${l+1}${s}`:"",h=a.map(p=>d[p]??""),b=`${f}${h.join(s)}
`;o+=b,u&&(o+=this.generateText(t,c.children,`${r}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};for(const r of Object.keys(this.dataTransform)){const n=this.columns.find(s=>s.name===r);n&&n.forceDataTransform&&(r in t||(t[r]=""))}for(const r in t){const n=this.dataTransform[r];n?e[r]=n(t[r],t):e[r]=t[r]}return e}downloadData(t="BIM Table Data",e="json"){let r=null;if(e==="json"&&(r=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(r=new File([this.csv],`${t}.csv`)),e==="tsv"&&(r=new File([this.tsv],`${t}.tsv`)),!r)return;const n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=r.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,r=0){for(const n of e){if(n.data===t)return r;if(n.children){const s=this.getRowIndentation(t,n.children,r+1);if(s!==null)return s}}return null}getGroupIndentation(t,e=this.value,r=0){for(const n of e){if(n===t)return r;if(n.children){const s=this.getGroupIndentation(t,n.children,r+1);if(s!==null)return s}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){return this.loading=!1,this._filteredData.length!==0||(e instanceof Error&&this.loadingErrorElement&&e.message.trim()!==""&&(this.loadingErrorElement.textContent=e.message),this._errorLoading=!0),!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,r=this.data){const n=[];for(const s of r)if(e(t,s)){if(this.preserveStructureOnFilter){const o={data:s.data};if(s.children){const a=this.filter(t,e,s.children);a.length&&(o.children=a)}n.push(o)}else if(n.push({data:s.data}),s.children){const o=this.filter(t,e,s.children);n.push(...o)}}else if(s.children){const o=this.filter(t,e,s.children);this.preserveStructureOnFilter&&o.length?n.push({data:s.data,children:o}):n.push(...o)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return Gm();if(this._errorLoading)return J`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return J`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",J`
      <div class="parent">
        ${this.headersHidden?null:t} ${Ym()}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};Ru.styles=[Pe.scrollbar,pt`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let qt=Ru;Kt([Fi()],qt.prototype,"_filteredData",2);Kt([F({type:Boolean,attribute:"headers-hidden",reflect:!0})],qt.prototype,"headersHidden",2);Kt([F({type:String,attribute:"min-col-width",reflect:!0})],qt.prototype,"minColWidth",2);Kt([F({type:Array,attribute:!1})],qt.prototype,"columns",1);Kt([F({type:Array,attribute:!1})],qt.prototype,"data",1);Kt([F({type:Boolean,reflect:!0})],qt.prototype,"expanded",2);Kt([F({type:Boolean,reflect:!0,attribute:"selectable-rows"})],qt.prototype,"selectableRows",2);Kt([F({attribute:!1})],qt.prototype,"selection",2);Kt([F({type:Boolean,attribute:"no-indentation",reflect:!0})],qt.prototype,"noIndentation",2);Kt([F({type:Boolean,reflect:!0})],qt.prototype,"loading",2);Kt([Fi()],qt.prototype,"_errorLoading",2);var rb=Object.defineProperty,sb=Object.getOwnPropertyDescriptor,gs=(i,t,e,r)=>{for(var n=r>1?void 0:r?sb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&rb(t,e,n),n};const Mu=class extends ht{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return J` <slot></slot> `}};Mu.styles=pt`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let Dt=Mu;gs([F({type:String,reflect:!0})],Dt.prototype,"name",2);gs([F({type:String,reflect:!0})],Dt.prototype,"label",2);gs([F({type:String,reflect:!0})],Dt.prototype,"icon",2);gs([F({type:Boolean,reflect:!0})],Dt.prototype,"hidden",1);var ob=Object.defineProperty,ab=Object.getOwnPropertyDescriptor,Gi=(i,t,e,r)=>{for(var n=r>1?void 0:r?ab(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&ob(t,e,n),n};const Du=class extends ht{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof Dt&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],r=e.find(n=>n instanceof Dt&&n.name===t);for(const n of e){if(!(n instanceof Dt))continue;n.hidden=r!==n;const s=this.getTabSwitcher(n.name);s&&s.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(e=>e.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof Dt))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const r=document.createElement("bim-label");r.textContent=t.label??"",r.icon=t.icon,e.append(r),this._switchers.push(e)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),r=e.find(n=>n instanceof Dt?this.tab?n.name===this.tab:!n.hidden:!1);r&&r instanceof Dt&&(this.tab=r.name);for(const n of e){if(!(n instanceof Dt)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),r!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return J`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Du.styles=[Pe.scrollbar,pt`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: var(--bim-ui_bg-base);
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        transition: all 0.15s;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_main-base);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        grid-area: content;
        overflow: auto;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let ci=Du;Gi([Fi()],ci.prototype,"_switchers",2);Gi([F({type:Boolean,reflect:!0})],ci.prototype,"bottom",2);Gi([F({type:Boolean,attribute:"switchers-hidden",reflect:!0})],ci.prototype,"switchersHidden",2);Gi([F({type:Boolean,reflect:!0})],ci.prototype,"floating",2);Gi([F({type:String,reflect:!0})],ci.prototype,"tab",1);Gi([F({type:Boolean,attribute:"switchers-full",reflect:!0})],ci.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cl=i=>i??xt;var lb=Object.defineProperty,cb=Object.getOwnPropertyDescriptor,ve=(i,t,e,r)=>{for(var n=r>1?void 0:r?cb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&lb(t,e,n),n};const ju=class extends ht{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return fo(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("input");e?.focus()})}render(){return J`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?J` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${cl(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:J` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${cl(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};ju.styles=[Pe.scrollbar,pt`
      :host {
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        flex: 1;
        display: block;
      }

      input,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: var(--bim-ui_size-3xs);
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        height: 100%;
        padding: 0 var(--bim-ui_size-3xs); /* Override padding */
        border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      }

      textarea {
        line-height: 1.1rem;
        resize: vertical;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let ae=ju;ve([F({type:String,reflect:!0})],ae.prototype,"icon",2);ve([F({type:String,reflect:!0})],ae.prototype,"label",2);ve([F({type:String,reflect:!0})],ae.prototype,"name",2);ve([F({type:String,reflect:!0})],ae.prototype,"placeholder",2);ve([F({type:String,reflect:!0})],ae.prototype,"value",2);ve([F({type:Boolean,reflect:!0})],ae.prototype,"vertical",2);ve([F({type:Number,reflect:!0})],ae.prototype,"debounce",2);ve([F({type:Number,reflect:!0})],ae.prototype,"rows",2);ve([F({type:String,reflect:!0})],ae.prototype,"type",1);var ub=Object.defineProperty,db=Object.getOwnPropertyDescriptor,Fu=(i,t,e,r)=>{for(var n=r>1?void 0:r?db(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&ub(t,e,n),n};const Bu=class extends ht{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return J`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Bu.styles=pt`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let vs=Bu;Fu([F({type:Number,reflect:!0})],vs.prototype,"rows",2);Fu([F({type:Boolean,reflect:!0})],vs.prototype,"vertical",1);var hb=Object.defineProperty,fb=Object.getOwnPropertyDescriptor,ys=(i,t,e,r)=>{for(var n=r>1?void 0:r?fb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&hb(t,e,n),n};const Uu=class extends ht{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof vs&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return J`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?J`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Uu.styles=pt`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let Yi=Uu;ys([F({type:String,reflect:!0})],Yi.prototype,"label",2);ys([F({type:String,reflect:!0})],Yi.prototype,"icon",2);ys([F({type:Boolean,reflect:!0})],Yi.prototype,"vertical",1);ys([F({type:Boolean,attribute:"label-hidden",reflect:!0})],Yi.prototype,"labelHidden",1);var pb=Object.defineProperty,mb=Object.getOwnPropertyDescriptor,Jo=(i,t,e,r)=>{for(var n=r>1?void 0:r?mb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&pb(t,e,n),n};const Hu=class extends ht{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof Yi&&(e.labelHidden=this.vertical&&!Yo.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return J`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Hu.styles=pt`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: min-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let _s=Hu;Jo([F({type:String,reflect:!0})],_s.prototype,"icon",2);Jo([F({type:Boolean,attribute:"labels-hidden",reflect:!0})],_s.prototype,"labelsHidden",2);Jo([F({type:Boolean,reflect:!0})],_s.prototype,"vertical",1);var bb=Object.defineProperty,gb=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&bb(t,e,n),n};const Vu=class extends ht{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return J`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Vu.styles=pt`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let Wu=Vu;gb([F({type:String,reflect:!0})],Wu.prototype,"name");var vb=Object.defineProperty,yb=(i,t,e)=>t in i?vb(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ve=(i,t,e)=>(yb(i,typeof t!="symbol"?t+"":t,e),e);const Ai=Math.min,fe=Math.max,Hr=Math.round,Oe=i=>({x:i,y:i}),_b={left:"right",right:"left",bottom:"top",top:"bottom"},wb={start:"end",end:"start"};function ul(i,t,e){return fe(i,Ai(t,e))}function tr(i,t){return typeof i=="function"?i(t):i}function be(i){return i.split("-")[0]}function ws(i){return i.split("-")[1]}function qu(i){return i==="x"?"y":"x"}function Gu(i){return i==="y"?"height":"width"}function ei(i){return["top","bottom"].includes(be(i))?"y":"x"}function Yu(i){return qu(ei(i))}function xb(i,t,e){e===void 0&&(e=!1);const r=ws(i),n=Yu(i),s=Gu(n);let o=n==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=Vr(o)),[o,Vr(o)]}function $b(i){const t=Vr(i);return[mo(i),t,mo(t)]}function mo(i){return i.replace(/start|end/g,t=>wb[t])}function kb(i,t,e){const r=["left","right"],n=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:r:t?r:n;case"left":case"right":return t?s:o;default:return[]}}function Cb(i,t,e,r){const n=ws(i);let s=kb(be(i),e==="start",r);return n&&(s=s.map(o=>o+"-"+n),t&&(s=s.concat(s.map(mo)))),s}function Vr(i){return i.replace(/left|right|bottom|top/g,t=>_b[t])}function Eb(i){return{top:0,right:0,bottom:0,left:0,...i}}function Zu(i){return typeof i!="number"?Eb(i):{top:i,right:i,bottom:i,left:i}}function Oi(i){const{x:t,y:e,width:r,height:n}=i;return{width:r,height:n,top:e,left:t,right:t+r,bottom:e+n,x:t,y:e}}function dl(i,t,e){let{reference:r,floating:n}=i;const s=ei(t),o=Yu(t),a=Gu(o),l=be(t),c=s==="y",d=r.x+r.width/2-n.width/2,u=r.y+r.height/2-n.height/2,f=r[a]/2-n[a]/2;let h;switch(l){case"top":h={x:d,y:r.y-n.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:u};break;case"left":h={x:r.x-n.width,y:u};break;default:h={x:r.x,y:r.y}}switch(ws(t)){case"start":h[o]-=f*(e&&c?-1:1);break;case"end":h[o]+=f*(e&&c?-1:1);break}return h}const Sb=async(i,t,e)=>{const{placement:r="bottom",strategy:n="absolute",middleware:s=[],platform:o}=e,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:d,y:u}=dl(c,r,l),f=r,h={},b=0;for(let p=0;p<a.length;p++){const{name:v,fn:g}=a[p],{x:_,y:w,data:x,reset:C}=await g({x:d,y:u,initialPlacement:r,placement:f,strategy:n,middlewareData:h,rects:c,platform:o,elements:{reference:i,floating:t}});d=_??d,u=w??u,h={...h,[v]:{...h[v],...x}},C&&b<=50&&(b++,typeof C=="object"&&(C.placement&&(f=C.placement),C.rects&&(c=C.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):C.rects),{x:d,y:u}=dl(c,f,l)),p=-1)}return{x:d,y:u,placement:f,strategy:n,middlewareData:h}};async function Xu(i,t){var e;t===void 0&&(t={});const{x:r,y:n,platform:s,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:h=0}=tr(t,i),b=Zu(h),p=a[f?u==="floating"?"reference":"floating":u],v=Oi(await s.getClippingRect({element:(e=await(s.isElement==null?void 0:s.isElement(p)))==null||e?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),g=u==="floating"?{x:r,y:n,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),w=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=Oi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:_,strategy:l}):g);return{top:(v.top-x.top+b.top)/w.y,bottom:(x.bottom-v.bottom+b.bottom)/w.y,left:(v.left-x.left+b.left)/w.x,right:(x.right-v.right+b.right)/w.x}}const Ab=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,r;const{placement:n,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:p=!0,...v}=tr(i,t);if((e=s.arrow)!=null&&e.alignmentOffset)return{};const g=be(n),_=ei(a),w=be(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),C=f||(w||!p?[Vr(a)]:$b(a)),S=b!=="none";!f&&S&&C.push(...Cb(a,p,b,x));const O=[a,...C],M=await Xu(t,v),A=[];let z=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&A.push(M[g]),u){const y=xb(n,o,x);A.push(M[y[0]],M[y[1]])}if(z=[...z,{placement:n,overflows:A}],!A.every(y=>y<=0)){var G,E;const y=(((G=s.flip)==null?void 0:G.index)||0)+1,j=O[y];if(j)return{data:{index:y,overflows:z},reset:{placement:j}};let tt=(E=z.filter(H=>H.overflows[0]<=0).sort((H,et)=>H.overflows[1]-et.overflows[1])[0])==null?void 0:E.placement;if(!tt)switch(h){case"bestFit":{var R;const H=(R=z.filter(et=>{if(S){const V=ei(et.placement);return V===_||V==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(V=>V>0).reduce((V,it)=>V+it,0)]).sort((et,V)=>et[1]-V[1])[0])==null?void 0:R[0];H&&(tt=H);break}case"initialPlacement":tt=a;break}if(n!==tt)return{reset:{placement:tt}}}return{}}}};function Ju(i){const t=Ai(...i.map(s=>s.left)),e=Ai(...i.map(s=>s.top)),r=fe(...i.map(s=>s.right)),n=fe(...i.map(s=>s.bottom));return{x:t,y:e,width:r-t,height:n-e}}function Ob(i){const t=i.slice().sort((n,s)=>n.y-s.y),e=[];let r=null;for(let n=0;n<t.length;n++){const s=t[n];!r||s.y-r.y>r.height/2?e.push([s]):e[e.length-1].push(s),r=s}return e.map(n=>Oi(Ju(n)))}const Tb=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:r,rects:n,platform:s,strategy:o}=t,{padding:a=2,x:l,y:c}=tr(i,t),d=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(r.reference))||[]),u=Ob(d),f=Oi(Ju(d)),h=Zu(a);function b(){if(u.length===2&&u[0].left>u[1].right&&l!=null&&c!=null)return u.find(v=>l>v.left-h.left&&l<v.right+h.right&&c>v.top-h.top&&c<v.bottom+h.bottom)||f;if(u.length>=2){if(ei(e)==="y"){const z=u[0],G=u[u.length-1],E=be(e)==="top",R=z.top,y=G.bottom,j=E?z.left:G.left,tt=E?z.right:G.right,H=tt-j,et=y-R;return{top:R,bottom:y,left:j,right:tt,width:H,height:et,x:j,y:R}}const v=be(e)==="left",g=fe(...u.map(z=>z.right)),_=Ai(...u.map(z=>z.left)),w=u.filter(z=>v?z.left===_:z.right===g),x=w[0].top,C=w[w.length-1].bottom,S=_,O=g,M=O-S,A=C-x;return{top:x,bottom:C,left:S,right:O,width:M,height:A,x:S,y:x}}return f}const p=await s.getElementRects({reference:{getBoundingClientRect:b},floating:r.floating,strategy:o});return n.reference.x!==p.reference.x||n.reference.y!==p.reference.y||n.reference.width!==p.reference.width||n.reference.height!==p.reference.height?{reset:{rects:p}}:{}}}};async function zb(i,t){const{placement:e,platform:r,elements:n}=i,s=await(r.isRTL==null?void 0:r.isRTL(n.floating)),o=be(e),a=ws(e),l=ei(e)==="y",c=["left","top"].includes(o)?-1:1,d=s&&l?-1:1,u=tr(t,i);let{mainAxis:f,crossAxis:h,alignmentAxis:b}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof b=="number"&&(h=a==="end"?b*-1:b),l?{x:h*d,y:f*c}:{x:f*c,y:h*d}}const Ku=function(i){return{name:"offset",options:i,async fn(t){var e,r;const{x:n,y:s,placement:o,middlewareData:a}=t,l=await zb(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:n+l.x,y:s+l.y,data:{...l,placement:o}}}}},Ib=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:r,placement:n}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:v=>{let{x:g,y:_}=v;return{x:g,y:_}}},...l}=tr(i,t),c={x:e,y:r},d=await Xu(t,l),u=ei(be(n)),f=qu(u);let h=c[f],b=c[u];if(s){const v=f==="y"?"top":"left",g=f==="y"?"bottom":"right",_=h+d[v],w=h-d[g];h=ul(_,h,w)}if(o){const v=u==="y"?"top":"left",g=u==="y"?"bottom":"right",_=b+d[v],w=b-d[g];b=ul(_,b,w)}const p=a.fn({...t,[f]:h,[u]:b});return{...p,data:{x:p.x-e,y:p.y-r}}}}};function Te(i){return Qu(i)?(i.nodeName||"").toLowerCase():"#document"}function Nt(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function Re(i){var t;return(t=(Qu(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function Qu(i){return i instanceof Node||i instanceof Nt(i).Node}function se(i){return i instanceof Element||i instanceof Nt(i).Element}function oe(i){return i instanceof HTMLElement||i instanceof Nt(i).HTMLElement}function hl(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Nt(i).ShadowRoot}function er(i){const{overflow:t,overflowX:e,overflowY:r,display:n}=Ut(i);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!["inline","contents"].includes(n)}function Pb(i){return["table","td","th"].includes(Te(i))}function Nb(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function Ko(i){const t=Qo(),e=se(i)?Ut(i):i;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(e.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(e.contain||"").includes(r))}function Lb(i){let t=Ti(i);for(;oe(t)&&!xs(t);){if(Ko(t))return t;if(Nb(t))return null;t=Ti(t)}return null}function Qo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function xs(i){return["html","body","#document"].includes(Te(i))}function Ut(i){return Nt(i).getComputedStyle(i)}function $s(i){return se(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Ti(i){if(Te(i)==="html")return i;const t=i.assignedSlot||i.parentNode||hl(i)&&i.host||Re(i);return hl(t)?t.host:t}function td(i){const t=Ti(i);return xs(t)?i.ownerDocument?i.ownerDocument.body:i.body:oe(t)&&er(t)?t:td(t)}function ed(i,t,e){var r;t===void 0&&(t=[]);const n=td(i),s=n===((r=i.ownerDocument)==null?void 0:r.body),o=Nt(n);return s?(Rb(o),t.concat(o,o.visualViewport||[],er(n)?n:[],[])):t.concat(n,ed(n,[]))}function Rb(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function id(i){const t=Ut(i);let e=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=oe(i),s=n?i.offsetWidth:e,o=n?i.offsetHeight:r,a=Hr(e)!==s||Hr(r)!==o;return a&&(e=s,r=o),{width:e,height:r,$:a}}function nd(i){return se(i)?i:i.contextElement}function yi(i){const t=nd(i);if(!oe(t))return Oe(1);const e=t.getBoundingClientRect(),{width:r,height:n,$:s}=id(t);let o=(s?Hr(e.width):e.width)/r,a=(s?Hr(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Mb=Oe(0);function rd(i){const t=Nt(i);return!Qo()||!t.visualViewport?Mb:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Db(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==Nt(i)?!1:t}function In(i,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),s=nd(i);let o=Oe(1);t&&(r?se(r)&&(o=yi(r)):o=yi(i));const a=Db(s,e,r)?rd(s):Oe(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,d=n.width/o.x,u=n.height/o.y;if(s){const f=Nt(s),h=r&&se(r)?Nt(r):r;let b=f,p=b.frameElement;for(;p&&r&&h!==b;){const v=yi(p),g=p.getBoundingClientRect(),_=Ut(p),w=g.left+(p.clientLeft+parseFloat(_.paddingLeft))*v.x,x=g.top+(p.clientTop+parseFloat(_.paddingTop))*v.y;l*=v.x,c*=v.y,d*=v.x,u*=v.y,l+=w,c+=x,b=Nt(p),p=b.frameElement}}return Oi({width:d,height:u,x:l,y:c})}const jb=[":popover-open",":modal"];function sd(i){return jb.some(t=>{try{return i.matches(t)}catch{return!1}})}function Fb(i){let{elements:t,rect:e,offsetParent:r,strategy:n}=i;const s=n==="fixed",o=Re(r),a=t?sd(t.floating):!1;if(r===o||a&&s)return e;let l={scrollLeft:0,scrollTop:0},c=Oe(1);const d=Oe(0),u=oe(r);if((u||!u&&!s)&&((Te(r)!=="body"||er(o))&&(l=$s(r)),oe(r))){const f=In(r);c=yi(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+d.x,y:e.y*c.y-l.scrollTop*c.y+d.y}}function Bb(i){return Array.from(i.getClientRects())}function od(i){return In(Re(i)).left+$s(i).scrollLeft}function Ub(i){const t=Re(i),e=$s(i),r=i.ownerDocument.body,n=fe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=fe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-e.scrollLeft+od(i);const a=-e.scrollTop;return Ut(r).direction==="rtl"&&(o+=fe(t.clientWidth,r.clientWidth)-n),{width:n,height:s,x:o,y:a}}function Hb(i,t){const e=Nt(i),r=Re(i),n=e.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(n){s=n.width,o=n.height;const c=Qo();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:s,height:o,x:a,y:l}}function Vb(i,t){const e=In(i,!0,t==="fixed"),r=e.top+i.clientTop,n=e.left+i.clientLeft,s=oe(i)?yi(i):Oe(1),o=i.clientWidth*s.x,a=i.clientHeight*s.y,l=n*s.x,c=r*s.y;return{width:o,height:a,x:l,y:c}}function fl(i,t,e){let r;if(t==="viewport")r=Hb(i,e);else if(t==="document")r=Ub(Re(i));else if(se(t))r=Vb(t,e);else{const n=rd(i);r={...t,x:t.x-n.x,y:t.y-n.y}}return Oi(r)}function ad(i,t){const e=Ti(i);return e===t||!se(e)||xs(e)?!1:Ut(e).position==="fixed"||ad(e,t)}function Wb(i,t){const e=t.get(i);if(e)return e;let r=ed(i,[]).filter(a=>se(a)&&Te(a)!=="body"),n=null;const s=Ut(i).position==="fixed";let o=s?Ti(i):i;for(;se(o)&&!xs(o);){const a=Ut(o),l=Ko(o);!l&&a.position==="fixed"&&(n=null),(s?!l&&!n:!l&&a.position==="static"&&n&&["absolute","fixed"].includes(n.position)||er(o)&&!l&&ad(i,o))?r=r.filter(c=>c!==o):n=a,o=Ti(o)}return t.set(i,r),r}function qb(i){let{element:t,boundary:e,rootBoundary:r,strategy:n}=i;const s=[...e==="clippingAncestors"?Wb(t,this._c):[].concat(e),r],o=s[0],a=s.reduce((l,c)=>{const d=fl(t,c,n);return l.top=fe(d.top,l.top),l.right=Ai(d.right,l.right),l.bottom=Ai(d.bottom,l.bottom),l.left=fe(d.left,l.left),l},fl(t,o,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Gb(i){const{width:t,height:e}=id(i);return{width:t,height:e}}function Yb(i,t,e){const r=oe(t),n=Re(t),s=e==="fixed",o=In(i,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=Oe(0);if(r||!r&&!s)if((Te(t)!=="body"||er(n))&&(a=$s(t)),r){const u=In(t,!0,s,t);l.x=u.x+t.clientLeft,l.y=u.y+t.clientTop}else n&&(l.x=od(n));const c=o.left+a.scrollLeft-l.x,d=o.top+a.scrollTop-l.y;return{x:c,y:d,width:o.width,height:o.height}}function pl(i,t){return!oe(i)||Ut(i).position==="fixed"?null:t?t(i):i.offsetParent}function ld(i,t){const e=Nt(i);if(!oe(i)||sd(i))return e;let r=pl(i,t);for(;r&&Pb(r)&&Ut(r).position==="static";)r=pl(r,t);return r&&(Te(r)==="html"||Te(r)==="body"&&Ut(r).position==="static"&&!Ko(r))?e:r||Lb(i)||e}const Zb=async function(i){const t=this.getOffsetParent||ld,e=this.getDimensions;return{reference:Yb(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Xb(i){return Ut(i).direction==="rtl"}const Jb={convertOffsetParentRelativeRectToViewportRelativeRect:Fb,getDocumentElement:Re,getClippingRect:qb,getOffsetParent:ld,getElementRects:Zb,getClientRects:Bb,getDimensions:Gb,getScale:yi,isElement:se,isRTL:Xb},cd=Ib,ud=Ab,dd=Tb,hd=(i,t,e)=>{const r=new Map,n={platform:Jb,...e},s={...n.platform,_c:r};return Sb(i,t,{...n,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=globalThis,ta=Er.ShadowRoot&&(Er.ShadyCSS===void 0||Er.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ea=Symbol(),ml=new WeakMap;let fd=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==ea)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(ta&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=ml.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&ml.set(t,i))}return i}toString(){return this.cssText}};const Kb=i=>new fd(typeof i=="string"?i:i+"",void 0,ea),mt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new fd(e,i,ea)},Qb=(i,t)=>{if(ta)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=Er.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},bl=ta?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Kb(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tg,defineProperty:eg,getOwnPropertyDescriptor:ig,getOwnPropertyNames:ng,getOwnPropertySymbols:rg,getPrototypeOf:sg}=Object,zi=globalThis,gl=zi.trustedTypes,og=gl?gl.emptyScript:"",vl=zi.reactiveElementPolyfillSupport,yn=(i,t)=>i,Wr={toAttribute(i,t){switch(t){case Boolean:i=i?og:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ia=(i,t)=>!tg(i,t),yl={attribute:!0,type:String,converter:Wr,reflect:!1,hasChanged:ia};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),zi.litPropertyMetadata??(zi.litPropertyMetadata=new WeakMap);class bi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=yl){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&eg(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:s}=ig(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n?.call(this)},set(o){const a=n?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??yl}static _$Ei(){if(this.hasOwnProperty(yn("elementProperties")))return;const t=sg(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(yn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(yn("properties"))){const e=this.properties,r=[...ng(e),...rg(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(bl(n))}else t!==void 0&&e.push(bl(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qb(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Wr).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Wr;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ia)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}bi.elementStyles=[],bi.shadowRootOptions={mode:"open"},bi[yn("elementProperties")]=new Map,bi[yn("finalized")]=new Map,vl?.({ReactiveElement:bi}),(zi.reactiveElementVersions??(zi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qr=globalThis,Gr=qr.trustedTypes,_l=Gr?Gr.createPolicy("lit-html",{createHTML:i=>i}):void 0,pd="$lit$",ke=`lit$${Math.random().toFixed(9).slice(2)}$`,md="?"+ke,ag=`<${md}>`,ii=document,Pn=()=>ii.createComment(""),Nn=i=>i===null||typeof i!="object"&&typeof i!="function",na=Array.isArray,lg=i=>na(i)||typeof i?.[Symbol.iterator]=="function",Bs=`[ 	
\f\r]`,dn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wl=/-->/g,xl=/>/g,We=RegExp(`>|${Bs}(?:([^\\s"'>=/]+)(${Bs}*=${Bs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$l=/'/g,kl=/"/g,bd=/^(?:script|style|textarea|title)$/i,cg=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),N=cg(1),ni=Symbol.for("lit-noChange"),$t=Symbol.for("lit-nothing"),Cl=new WeakMap,Ye=ii.createTreeWalker(ii,129);function gd(i,t){if(!na(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return _l!==void 0?_l.createHTML(t):t}const ug=(i,t)=>{const e=i.length-1,r=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=dn;for(let a=0;a<e;a++){const l=i[a];let c,d,u=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===dn?d[1]==="!--"?o=wl:d[1]!==void 0?o=xl:d[2]!==void 0?(bd.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=We):d[3]!==void 0&&(o=We):o===We?d[0]===">"?(o=n??dn,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?We:d[3]==='"'?kl:$l):o===kl||o===$l?o=We:o===wl||o===xl?o=dn:(o=We,n=void 0);const h=o===We&&i[a+1].startsWith("/>")?" ":"";s+=o===dn?l+ag:u>=0?(r.push(c),l.slice(0,u)+pd+l.slice(u)+ke+h):l+ke+(u===-2?a:h)}return[gd(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ln{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,d]=ug(t,e);if(this.el=Ln.createElement(c,r),Ye.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=Ye.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(pd)){const f=d[o++],h=n.getAttribute(u).split(ke),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:b[2],strings:h,ctor:b[1]==="."?hg:b[1]==="?"?fg:b[1]==="@"?pg:ks}),n.removeAttribute(u)}else u.startsWith(ke)&&(l.push({type:6,index:s}),n.removeAttribute(u));if(bd.test(n.tagName)){const u=n.textContent.split(ke),f=u.length-1;if(f>0){n.textContent=Gr?Gr.emptyScript:"";for(let h=0;h<f;h++)n.append(u[h],Pn()),Ye.nextNode(),l.push({type:2,index:++s});n.append(u[f],Pn())}}}else if(n.nodeType===8)if(n.data===md)l.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(ke,u+1))!==-1;)l.push({type:7,index:s}),u+=ke.length-1}s++}}static createElement(t,e){const r=ii.createElement("template");return r.innerHTML=t,r}}function Ii(i,t,e=i,r){var n,s;if(t===ni)return t;let o=r!==void 0?(n=e.o)==null?void 0:n[r]:e.l;const a=Nn(t)?void 0:t._$litDirective$;return o?.constructor!==a&&((s=o?._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=o:e.l=o),o!==void 0&&(t=Ii(i,o._$AS(i,t.values),o,r)),t}class dg{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??ii).importNode(e,!0);Ye.currentNode=n;let s=Ye.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new ir(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new mg(s,this,t)),this._$AV.push(c),l=r[++a]}o!==l?.index&&(s=Ye.nextNode(),o++)}return Ye.currentNode=ii,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class ir{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,n){this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ii(this,t,e),Nn(t)?t===$t||t==null||t===""?(this._$AH!==$t&&this._$AR(),this._$AH=$t):t!==this._$AH&&t!==ni&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lg(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$t&&Nn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ii.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ln.createElement(gd(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(r);else{const o=new dg(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let e=Cl.get(t.strings);return e===void 0&&Cl.set(t.strings,e=new Ln(t)),e}k(t){na(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const s of t)n===e.length?e.push(r=new ir(this.O(Pn()),this.O(Pn()),this,this.options)):r=e[n],r._$AI(s),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class ks{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,s){this.type=1,this._$AH=$t,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$t}_$AI(t,e=this,r,n){const s=this.strings;let o=!1;if(s===void 0)t=Ii(this,t,e,0),o=!Nn(t)||t!==this._$AH&&t!==ni,o&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Ii(this,a[r+l],e,l),c===ni&&(c=this._$AH[l]),o||(o=!Nn(c)||c!==this._$AH[l]),c===$t?t=$t:t!==$t&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!n&&this.j(t)}j(t){t===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hg extends ks{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$t?void 0:t}}class fg extends ks{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$t)}}class pg extends ks{constructor(t,e,r,n,s){super(t,e,r,n,s),this.type=5}_$AI(t,e=this){if((t=Ii(this,t,e,0)??$t)===ni)return;const r=this._$AH,n=t===$t&&r!==$t||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==$t&&(r===$t||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class mg{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ii(this,t)}}const El=qr.litHtmlPolyfillSupport;El?.(Ln,ir),(qr.litHtmlVersions??(qr.litHtmlVersions=[])).push("3.2.0");const Pi=(i,t,e)=>{const r=e?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const s=e?.renderBefore??null;r._$litPart$=n=new ir(t.insertBefore(Pn(),s),s,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ft=class extends bi{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this.o=Pi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this.o)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.o)==null||i.setConnected(!1)}render(){return ni}};var Sl;ft._$litElement$=!0,ft.finalized=!0,(Sl=globalThis.litElementHydrateSupport)==null||Sl.call(globalThis,{LitElement:ft});const Al=globalThis.litElementPolyfillSupport;Al?.({LitElement:ft});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bg={attribute:!0,type:String,converter:Wr,reflect:!1,hasChanged:ia},gg=(i=bg,t,e)=>{const{kind:r,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+r)};function B(i){return(t,e)=>typeof e=="object"?gg(i,t,e):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zi(i){return B({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vg=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vd={ATTRIBUTE:1,CHILD:2},yd=i=>(...t)=>({_$litDirective$:i,values:t});class _d{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this.t=t,this._$AM=e,this.i=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _n=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const n of r)(e=n._$AO)==null||e.call(n,t,!1),_n(n,t);return!0},Yr=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},wd=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),wg(t)}};function yg(i){this._$AN!==void 0?(Yr(this),this._$AM=i,wd(this)):this._$AM=i}function _g(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)_n(r[s],!1),Yr(r[s]);else r!=null&&(_n(r,!1),Yr(r));else _n(this,i)}const wg=i=>{i.type==vd.CHILD&&(i._$AP??(i._$AP=_g),i._$AQ??(i._$AQ=yg))};class xg extends _d{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),wd(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&(_n(this,t),Yr(this))}setValue(t){if(vg(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=()=>new $g;class $g{}const Us=new WeakMap,Tt=yd(class extends xg{render(i){return $t}update(i,[t]){var e;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),$t}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=Us.get(t);e===void 0&&(e=new WeakMap,Us.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Us.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const xd=Object.freeze({left:0,top:0,width:16,height:16}),Zr=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),nr=Object.freeze({...xd,...Zr}),bo=Object.freeze({...nr,body:"",hidden:!1}),kg=Object.freeze({width:null,height:null}),$d=Object.freeze({...kg,...Zr});function Cg(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:r(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(i.slice(0,i.length-e.length));return isNaN(s)?0:(s=s/n,s%1===0?r(s):0)}}return t}const Eg=/[\s,]+/;function Sg(i,t){t.split(Eg).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const kd={...$d,preserveAspectRatio:""};function Ol(i){const t={...kd},e=(r,n)=>i.getAttribute(r)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Cg(e("rotate","")),Sg(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Ag(i,t){for(const e in kd)if(i[e]!==t[e])return!0;return!1}const wn=/^[a-z0-9]+(-[a-z0-9]+)*$/,rr=(i,t,e,r="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:r,prefix:l,name:a};return t&&!Sr(c)?null:c}const s=n[0],o=s.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return t&&!Sr(a)?null:a}if(e&&r===""){const a={provider:r,prefix:"",name:s};return t&&!Sr(a,e)?null:a}return null},Sr=(i,t)=>i?!!((i.provider===""||i.provider.match(wn))&&(t&&i.prefix===""||i.prefix.match(wn))&&i.name.match(wn)):!1;function Og(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const r=((i.rotate||0)+(t.rotate||0))%4;return r&&(e.rotate=r),e}function Tl(i,t){const e=Og(i,t);for(const r in bo)r in Zr?r in i&&!(r in e)&&(e[r]=Zr[r]):r in t?e[r]=t[r]:r in i&&(e[r]=i[r]);return e}function Tg(i,t){const e=i.icons,r=i.aliases||Object.create(null),n=Object.create(null);function s(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=r[o]&&r[o].parent,l=a&&s(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(r)).forEach(s),n}function zg(i,t,e){const r=i.icons,n=i.aliases||Object.create(null);let s={};function o(a){s=Tl(r[a]||n[a],s)}return o(t),e.forEach(o),Tl(i,s)}function Cd(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const r=Tg(i);for(const n in r){const s=r[n];s&&(t(n,zg(i,n,s)),e.push(n))}return e}const Ig={provider:"",aliases:{},not_found:{},...xd};function Hs(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function Ed(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Hs(i,Ig))return null;const e=t.icons;for(const n in e){const s=e[n];if(!n.match(wn)||typeof s.body!="string"||!Hs(s,bo))return null}const r=t.aliases||Object.create(null);for(const n in r){const s=r[n],o=s.parent;if(!n.match(wn)||typeof o!="string"||!e[o]&&!r[o]||!Hs(s,bo))return null}return t}const Xr=Object.create(null);function Pg(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function ze(i,t){const e=Xr[i]||(Xr[i]=Object.create(null));return e[t]||(e[t]=Pg(i,t))}function ra(i,t){return Ed(t)?Cd(t,(e,r)=>{r?i.icons[e]=r:i.missing.add(e)}):[]}function Ng(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Lg(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(Xr)).forEach(r=>{(typeof r=="string"&&typeof t=="string"?[t]:Object.keys(Xr[r]||{})).forEach(n=>{const s=ze(r,n);e=e.concat(Object.keys(s.icons).map(o=>(r!==""?"@"+r+":":"")+n+":"+o))})}),e}let Rn=!1;function Sd(i){return typeof i=="boolean"&&(Rn=i),Rn}function Mn(i){const t=typeof i=="string"?rr(i,!0,Rn):i;if(t){const e=ze(t.provider,t.prefix),r=t.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function Ad(i,t){const e=rr(i,!0,Rn);if(!e)return!1;const r=ze(e.provider,e.prefix);return Ng(r,e.name,t)}function zl(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Rn&&!t&&!i.prefix){let n=!1;return Ed(i)&&(i.prefix="",Cd(i,(s,o)=>{o&&Ad(s,o)&&(n=!0)})),n}const e=i.prefix;if(!Sr({provider:t,prefix:e,name:"a"}))return!1;const r=ze(t,e);return!!ra(r,i)}function Il(i){return!!Mn(i)}function Rg(i){const t=Mn(i);return t?{...nr,...t}:null}function Mg(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return i.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const s=n.provider,o=n.prefix,a=n.name,l=e[s]||(e[s]=Object.create(null)),c=l[o]||(l[o]=ze(s,o));let d;a in c.icons?d=t.loaded:o===""||c.missing.has(a)?d=t.missing:d=t.pending;const u={provider:s,prefix:o,name:a};d.push(u)}),t}function Od(i,t){i.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(n=>n.id!==t))})}function Dg(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const r=i.provider,n=i.prefix;t.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])o.loaded.push({provider:r,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:r,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||Od([i],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let jg=0;function Fg(i,t,e){const r=jg++,n=Od.bind(null,e,r);if(!t.pending.length)return n;const s={id:r,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),n}const go=Object.create(null);function Pl(i,t){go[i]=t}function vo(i){return go[i]||go[""]}function Bg(i,t=!0,e=!1){const r=[];return i.forEach(n=>{const s=typeof n=="string"?rr(n,t,e):n;s&&r.push(s)}),r}var Ug={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Hg(i,t,e,r){const n=i.resources.length,s=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let S=i.resources.slice(0);for(o=[];S.length>1;){const O=Math.floor(Math.random()*S.length);o.push(S[O]),S=S.slice(0,O).concat(S.slice(O+1))}o=o.concat(S)}else o=i.resources.slice(s).concat(i.resources.slice(0,s));const a=Date.now();let l="pending",c=0,d,u=null,f=[],h=[];typeof r=="function"&&h.push(r);function b(){u&&(clearTimeout(u),u=null)}function p(){l==="pending"&&(l="aborted"),b(),f.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),f=[]}function v(S,O){O&&(h=[]),typeof S=="function"&&h.push(S)}function g(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:p}}function _(){l="failed",h.forEach(S=>{S(void 0,d)})}function w(){f.forEach(S=>{S.status==="pending"&&(S.status="aborted")}),f=[]}function x(S,O,M){const A=O!=="success";switch(f=f.filter(z=>z!==S),l){case"pending":break;case"failed":if(A||!i.dataAfterTimeout)return;break;default:return}if(O==="abort"){d=M,_();return}if(A){d=M,f.length||(o.length?C():_());return}if(b(),w(),!i.random){const z=i.resources.indexOf(S.resource);z!==-1&&z!==i.index&&(i.index=z)}l="completed",h.forEach(z=>{z(M)})}function C(){if(l!=="pending")return;b();const S=o.shift();if(S===void 0){if(f.length){u=setTimeout(()=>{b(),l==="pending"&&(w(),_())},i.timeout);return}_();return}const O={status:"pending",resource:S,callback:(M,A)=>{x(O,M,A)}};f.push(O),c++,u=setTimeout(C,i.rotate),e(S,t,O.callback)}return setTimeout(C),g}function Td(i){const t={...Ug,...i};let e=[];function r(){e=e.filter(o=>o().status==="pending")}function n(o,a,l){const c=Hg(t,o,a,(d,u)=>{r(),l&&l(d,u)});return e.push(c),c}function s(o){return e.find(a=>o(a))||null}return{query:n,find:s,setIndex:o=>{t.index=o},getIndex:()=>t.index,cleanup:r}}function sa(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const Cs=Object.create(null),yr=["https://api.simplesvg.com","https://api.unisvg.com"],yo=[];for(;yr.length>0;)yr.length===1||Math.random()>.5?yo.push(yr.shift()):yo.push(yr.pop());Cs[""]=sa({resources:["https://api.iconify.design"].concat(yo)});function Nl(i,t){const e=sa(t);return e===null?!1:(Cs[i]=e,!0)}function Es(i){return Cs[i]}function Vg(){return Object.keys(Cs)}function Ll(){}const Vs=Object.create(null);function Wg(i){if(!Vs[i]){const t=Es(i);if(!t)return;const e=Td(t),r={config:t,redundancy:e};Vs[i]=r}return Vs[i]}function zd(i,t,e){let r,n;if(typeof i=="string"){const s=vo(i);if(!s)return e(void 0,424),Ll;n=s.send;const o=Wg(i);o&&(r=o.redundancy)}else{const s=sa(i);if(s){r=Td(s);const o=i.resources?i.resources[0]:"",a=vo(o);a&&(n=a.send)}}return!r||!n?(e(void 0,424),Ll):r.query(t,n,e)().abort}const Rl="iconify2",Dn="iconify",Id=Dn+"-count",Ml=Dn+"-version",Pd=36e5,qg=168,Gg=50;function _o(i,t){try{return i.getItem(t)}catch{}}function oa(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Dl(i,t){try{i.removeItem(t)}catch{}}function wo(i,t){return oa(i,Id,t.toString())}function xo(i){return parseInt(_o(i,Id))||0}const Je={local:!0,session:!0},Nd={local:new Set,session:new Set};let aa=!1;function Yg(i){aa=i}let _r=typeof window>"u"?{}:window;function Ld(i){const t=i+"Storage";try{if(_r&&_r[t]&&typeof _r[t].length=="number")return _r[t]}catch{}Je[i]=!1}function Rd(i,t){const e=Ld(i);if(!e)return;const r=_o(e,Ml);if(r!==Rl){if(r){const a=xo(e);for(let l=0;l<a;l++)Dl(e,Dn+l.toString())}oa(e,Ml,Rl),wo(e,0);return}const n=Math.floor(Date.now()/Pd)-qg,s=a=>{const l=Dn+a.toString(),c=_o(e,l);if(typeof c=="string"){try{const d=JSON.parse(c);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}Dl(e,l)}};let o=xo(e);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,wo(e,o)):Nd[i].add(a))}function Md(){if(!aa){Yg(!0);for(const i in Je)Rd(i,t=>{const e=t.data,r=t.provider,n=e.prefix,s=ze(r,n);if(!ra(s,e).length)return!1;const o=e.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function Zg(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const r in Je)Rd(r,n=>{const s=n.data;return n.provider!==i.provider||s.prefix!==i.prefix||s.lastModified===t});return!0}function Xg(i,t){aa||Md();function e(r){let n;if(!Je[r]||!(n=Ld(r)))return;const s=Nd[r];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=xo(n),o>=Gg||!wo(n,o+1))return;const a={cached:Math.floor(Date.now()/Pd),provider:i.provider,data:t};return oa(n,Dn+o.toString(),JSON.stringify(a))}t.lastModified&&!Zg(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function jl(){}function Jg(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Dg(i)}))}function Kg(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:r}=i,n=i.iconsToLoad;delete i.iconsToLoad;let s;!n||!(s=vo(e))||s.prepare(e,r,n).forEach(o=>{zd(e,o,a=>{if(typeof a!="object")o.icons.forEach(l=>{i.missing.add(l)});else try{const l=ra(i,a);if(!l.length)return;const c=i.pendingIcons;c&&l.forEach(d=>{c.delete(d)}),Xg(i,a)}catch(l){console.error(l)}Jg(i)})})}))}const la=(i,t)=>{const e=Bg(i,!0,Sd()),r=Mg(e);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,jl)}),()=>{l=!1}}const n=Object.create(null),s=[];let o,a;return r.pending.forEach(l=>{const{provider:c,prefix:d}=l;if(d===a&&c===o)return;o=c,a=d,s.push(ze(c,d));const u=n[c]||(n[c]=Object.create(null));u[d]||(u[d]=[])}),r.pending.forEach(l=>{const{provider:c,prefix:d,name:u}=l,f=ze(c,d),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(u)||(h.add(u),n[c][d].push(u))}),s.forEach(l=>{const{provider:c,prefix:d}=l;n[c][d].length&&Kg(l,n[c][d])}),t?Fg(t,r,s):jl},Qg=i=>new Promise((t,e)=>{const r=typeof i=="string"?rr(i,!0):i;if(!r){e(i);return}la([r||i],n=>{if(n.length&&r){const s=Mn(r);if(s){t({...nr,...s});return}}e(i)})});function tv(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function ev(i,t){const e=typeof i=="string"?rr(i,!0,!0):null;if(!e){const s=tv(i);return{value:i,data:s}}const r=Mn(e);if(r!==void 0||!e.prefix)return{value:i,name:e,data:r};const n=la([e],()=>t(i,e,Mn(e)));return{value:i,name:e,loading:n}}function Ws(i){return i.hasAttribute("inline")}let Dd=!1;try{Dd=navigator.vendor.indexOf("Apple")===0}catch{}function iv(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Dd||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const nv=/(-?[0-9.]*[0-9]+[0-9.]*)/g,rv=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function $o(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const r=i.split(nv);if(r===null||!r.length)return i;const n=[];let s=r.shift(),o=rv.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?n.push(s):n.push(Math.ceil(a*t*e)/e)}else n.push(s);if(s=r.shift(),s===void 0)return n.join("");o=!o}}function sv(i,t="defs"){let e="";const r=i.indexOf("<"+t);for(;r>=0;){const n=i.indexOf(">",r),s=i.indexOf("</"+t);if(n===-1||s===-1)break;const o=i.indexOf(">",s);if(o===-1)break;e+=i.slice(n+1,s).trim(),i=i.slice(0,r).trim()+i.slice(o+1)}return{defs:e,content:i}}function ov(i,t){return i?"<defs>"+i+"</defs>"+t:t}function av(i,t,e){const r=sv(i);return ov(r.defs,t+r.content+e)}const lv=i=>i==="unset"||i==="undefined"||i==="none";function jd(i,t){const e={...nr,...i},r={...$d,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let s=e.body;[e,r].forEach(p=>{const v=[],g=p.hFlip,_=p.vFlip;let w=p.rotate;g?_?w+=2:(v.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),v.push("scale(-1 1)"),n.top=n.left=0):_&&(v.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),v.push("scale(1 -1)"),n.top=n.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=n.height/2+n.top,v.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:v.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:x=n.width/2+n.left,v.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(n.left!==n.top&&(x=n.left,n.left=n.top,n.top=x),n.width!==n.height&&(x=n.width,n.width=n.height,n.height=x)),v.length&&(s=av(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const o=r.width,a=r.height,l=n.width,c=n.height;let d,u;o===null?(u=a===null?"1em":a==="auto"?c:a,d=$o(u,l/c)):(d=o==="auto"?l:o,u=a===null?$o(d,c/l):a==="auto"?c:a);const f={},h=(p,v)=>{lv(v)||(f[p]=v.toString())};h("width",d),h("height",u);const b=[n.left,n.top,l,c];return f.viewBox=b.join(" "),{attributes:f,viewBox:b,body:s}}function ca(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)e+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function cv(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function uv(i){return"data:image/svg+xml,"+cv(i)}function Fd(i){return'url("'+uv(i)+'")'}const dv=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let Jr=dv();function hv(i){Jr=i}function fv(){return Jr}function pv(i,t){const e=Es(i);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const s=t+".json?icons=";r=e.maxURL-n-e.path.length-s.length}return r}function mv(i){return i===404}const bv=(i,t,e)=>{const r=[],n=pv(i,t),s="icons";let o={type:s,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(r.push(o),o={type:s,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),r.push(o),r};function gv(i){if(typeof i=="string"){const t=Es(i);if(t)return t.path}return"/"}const vv=(i,t,e)=>{if(!Jr){e("abort",424);return}let r=gv(t.provider);switch(t.type){case"icons":{const s=t.prefix,o=t.icons.join(","),a=new URLSearchParams({icons:o});r+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:e("abort",400);return}let n=503;Jr(i+r).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{e(mv(o)?"abort":"next",o)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?e("abort",s):e("next",n)});return}setTimeout(()=>{e("success",s)})}).catch(()=>{e("next",n)})},yv={prepare:bv,send:vv};function Fl(i,t){switch(i){case"local":case"session":Je[i]=t;break;case"all":for(const e in Je)Je[e]=t;break}}const qs="data-style";let Bd="";function _v(i){Bd=i}function Bl(i,t){let e=Array.from(i.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(qs));e||(e=document.createElement("style"),e.setAttribute(qs,qs),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Bd}function Ud(){Pl("",yv),Sd(!0);let i;try{i=window}catch{}if(i){if(Md(),i.IconifyPreload!==void 0){const t=i.IconifyPreload,e="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!zl(r))&&console.error(e)}catch{console.error(e)}})}if(i.IconifyProviders!==void 0){const t=i.IconifyProviders;if(typeof t=="object"&&t!==null)for(const e in t){const r="IconifyProviders["+e+"] is invalid.";try{const n=t[e];if(typeof n!="object"||!n||n.resources===void 0)continue;Nl(e,n)||console.error(r)}catch{console.error(r)}}}}return{enableCache:t=>Fl(t,!0),disableCache:t=>Fl(t,!1),iconLoaded:Il,iconExists:Il,getIcon:Rg,listIcons:Lg,addIcon:Ad,addCollection:zl,calculateSize:$o,buildIcon:jd,iconToHTML:ca,svgToURL:Fd,loadIcons:la,loadIcon:Qg,addAPIProvider:Nl,appendCustomStyle:_v,_api:{getAPIConfig:Es,setAPIModule:Pl,sendAPIQuery:zd,setFetch:hv,getFetch:fv,listAPIProviders:Vg}}}const ko={"background-color":"currentColor"},Hd={"background-color":"transparent"},Ul={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Hl={"-webkit-mask":ko,mask:ko,background:Hd};for(const i in Hl){const t=Hl[i];for(const e in Ul)t[i+"-"+e]=Ul[e]}function Vl(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function wv(i,t,e){const r=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const s=i.attributes,o=ca(n,{...s,width:t.width+"",height:t.height+""}),a=Fd(o),l=r.style,c={"--svg":a,width:Vl(s.width),height:Vl(s.height),...e?ko:Hd};for(const d in c)l.setProperty(d,c[d]);return r}let xn;function xv(){try{xn=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{xn=null}}function $v(i){return xn===void 0&&xv(),xn?xn.createHTML(i):i}function kv(i){const t=document.createElement("span"),e=i.attributes;let r="";e.width||(r="width: inherit;"),e.height||(r+="height: inherit;"),r&&(e.style=r);const n=ca(i.body,e);return t.innerHTML=$v(n),t.firstChild}function Co(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Wl(i,t){const e=t.icon.data,r=t.customisations,n=jd(e,r);r.preserveAspectRatio&&(n.attributes.preserveAspectRatio=r.preserveAspectRatio);const s=t.renderedMode;let o;switch(s){case"svg":o=kv(n);break;default:o=wv(n,{...nr,...e},s==="mask")}const a=Co(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function ql(i,t,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:r}}function Cv(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const r=t.get(i);if(r)return r;const n=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends e{constructor(){super(),Ve(this,"_shadowRoot"),Ve(this,"_initialised",!1),Ve(this,"_state"),Ve(this,"_checkQueued",!1),Ve(this,"_connected",!1),Ve(this,"_observer",null),Ve(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=Ws(this);Bl(a,l),this._state=ql({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=Ws(this),c=this._state;l!==c.inline&&(c.inline=l,Bl(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Ws(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}Wl(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const c=this.getAttribute("mode"),d=Ol(this);(a.attrMode!==c||Ag(a.customisations,d)||!Co(this._shadowRoot))&&this._renderIcon(a.icon,d,c)}_iconChanged(a){const l=ev(a,(c,d,u)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==c)return;const h={value:c,name:d,data:u};h.data?this._gotIconData(h):f.icon=h});l.data?this._gotIconData(l):this._state=ql(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=Co(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Ol(this),this.getAttribute("mode"))}_renderIcon(a,l,c){const d=iv(a.data.body,c),u=this._state.inline;Wl(this._shadowRoot,this._state={rendered:!0,icon:a,inline:u,customisations:l,attrMode:c,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(c=>c.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in s.prototype||Object.defineProperty(s.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=Ud();for(const a in o)s[a]=s.prototype[a]=o[a];return t.define(i,s),s}Cv()||Ud();const Ev=mt`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,Sv=mt`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-7: hsl(210 10% 70%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,Me={scrollbar:Ev,globalStyles:Sv},Vd=class dt{static set config(t){this._config={...dt._config,...t}}static get config(){return dt._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Me.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){dt.init()}static init(){dt.addGlobalStyles(),dt.defineCustomElement("bim-button",Iv),dt.defineCustomElement("bim-checkbox",Xi),dt.defineCustomElement("bim-color-input",ui),dt.defineCustomElement("bim-context-menu",Eo),dt.defineCustomElement("bim-dropdown",ye),dt.defineCustomElement("bim-grid",da),dt.defineCustomElement("bim-icon",Bv),dt.defineCustomElement("bim-input",or),dt.defineCustomElement("bim-label",Ki),dt.defineCustomElement("bim-number-input",Rt),dt.defineCustomElement("bim-option",At),dt.defineCustomElement("bim-panel",di),dt.defineCustomElement("bim-panel-section",Qi),dt.defineCustomElement("bim-selector",tn),dt.defineCustomElement("bim-table",Zt),dt.defineCustomElement("bim-tabs",fi),dt.defineCustomElement("bim-tab",jt),dt.defineCustomElement("bim-table-cell",oh),dt.defineCustomElement("bim-table-children",lh),dt.defineCustomElement("bim-table-group",uh),dt.defineCustomElement("bim-table-row",hi),dt.defineCustomElement("bim-text-input",le),dt.defineCustomElement("bim-toolbar",Is),dt.defineCustomElement("bim-toolbar-group",Ts),dt.defineCustomElement("bim-toolbar-section",rn),dt.defineCustomElement("bim-viewport",wh)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let r=0;r<10;r++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};Vd._config={sectionLabelOnVerticalToolbar:!1};let Wd=Vd;class Ot extends ft{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const r of t)this.elements.add(r);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const r of e)r.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const r=e[0];if(!r.isIntersecting)return;const n=r.target;t.unobserve(n);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][s];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,r=[...this.elements][e];r&&t.observe(r)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const r=document.createDocumentFragment();if(t.length===0)return Pi(t(),r),r.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const s=t,o=l=>(n={...n,...l},Pi(s(n),r),n);o(e);const a=()=>n;return[r.firstElementChild,o,a]}}var Av=Object.defineProperty,Ov=Object.getOwnPropertyDescriptor,qd=(i,t,e,r)=>{for(var n=Ov(t,e),s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Av(t,e,n),n},Et;const ua=(Et=class extends ft{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(i){this._placement=i,this.updatePosition()}static removeMenus(){for(const i of Et.menus)i instanceof Et&&(i.visible=!1);Et.dialog.close(),Et.dialog.remove()}get visible(){return this._visible}set visible(i){var t;this._visible=i,i?(Et.dialog.parentElement||document.body.append(Et.dialog),this._previousContainer=this.parentElement,Et.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,Et.dialog.append(this),Et.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const i=this.placement??"right",t=await hd(this._previousContainer,this,{placement:i,middleware:[Ku(10),dd(),ud(),cd({padding:5})]}),{x:e,y:r}=t;this.style.left=`${e}px`,this.style.top=`${r}px`}connectedCallback(){super.connectedCallback(),Et.menus.push(this)}render(){return N` <slot></slot> `}},Et.styles=[Me.scrollbar,mt`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host(:not([visible])) {
        display: none;
      }
    `],Et.dialog=Ot.create(()=>N` <dialog
      @click=${i=>{i.target===Et.dialog&&Et.removeMenus()}}
      @cancel=${()=>Et.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`),Et.menus=[],Et);qd([B({type:String,reflect:!0})],ua.prototype,"placement");qd([B({type:Boolean,reflect:!0})],ua.prototype,"visible");let Eo=ua;var Tv=Object.defineProperty,zv=Object.getOwnPropertyDescriptor,Qt=(i,t,e,r)=>{for(var n=r>1?void 0:r?zv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Tv(t,e,n),n},hn;const Gt=(hn=class extends ft{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=Ni(),this._tooltip=Ni(),this._mouseLeave=!1,this.onClick=i=>{i.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const i=this._contextMenu;if(i){const t=this.getAttribute("data-context-group");t&&i.setAttribute("data-context-group",t),this.closeNestedContexts();const e=Wd.newRandomId();for(const r of i.children)r instanceof hn&&r.setAttribute("data-context-group",e);i.visible=!0}},this.mouseLeave=!0}set loading(i){if(this._loading=i,i)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=i,this.icon="eos-icons:loading";else{const{disabled:t,icon:e}=this._stateBeforeLoading;this.disabled=t,this.icon=e}}get loading(){return this._loading}set mouseLeave(i){this._mouseLeave=i,i&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:i}=this._parent,{value:t}=this._tooltip;i&&t&&hd(i,t,{placement:"bottom",middleware:[Ku(10),dd(),ud(),cd({padding:5})]}).then(e=>{const{x:r,y:n}=e;Object.assign(t.style,{left:`${r}px`,top:`${n}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const i=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},i)}closeNestedContexts(){const i=this.getAttribute("data-context-group");if(i)for(const t of Eo.dialog.children){const e=t.getAttribute("data-context-group");if(t instanceof Eo&&e===i){t.visible=!1,t.removeAttribute("data-context-group");for(const r of t.children)r instanceof hn&&(r.closeNestedContexts(),r.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const i=N`
      <div ${Tt(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?N`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?N`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=N`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return N`
      <div ${Tt(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?N`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?t:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?i:null}
      </div>
      <slot></slot>
    `}},hn.styles=mt`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover),
    :host([active]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      background-color: gray;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `,hn);Qt([B({type:String,reflect:!0})],Gt.prototype,"label",2);Qt([B({type:Boolean,attribute:"label-hidden",reflect:!0})],Gt.prototype,"labelHidden",2);Qt([B({type:Boolean,reflect:!0})],Gt.prototype,"active",2);Qt([B({type:Boolean,reflect:!0,attribute:"disabled"})],Gt.prototype,"disabled",2);Qt([B({type:String,reflect:!0})],Gt.prototype,"icon",2);Qt([B({type:Boolean,reflect:!0})],Gt.prototype,"vertical",2);Qt([B({type:Number,attribute:"tooltip-time",reflect:!0})],Gt.prototype,"tooltipTime",2);Qt([B({type:Boolean,attribute:"tooltip-visible",reflect:!0})],Gt.prototype,"tooltipVisible",2);Qt([B({type:String,attribute:"tooltip-title",reflect:!0})],Gt.prototype,"tooltipTitle",2);Qt([B({type:String,attribute:"tooltip-text",reflect:!0})],Gt.prototype,"tooltipText",2);Qt([B({type:Boolean,reflect:!0})],Gt.prototype,"loading",1);let Iv=Gt;var Pv=Object.defineProperty,sr=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Pv(t,e,n),n};const Gd=class extends ft{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(i){i.stopPropagation(),this.checked=i.target.checked,this.dispatchEvent(this.onValueChange)}render(){return N`
      <div class="parent">
        ${this.label?N`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};Gd.styles=mt`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.25rem;
      width: 100%;
      align-items: center;
      transition: all 0.15s;
    }

    :host([inverted]) .parent {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
      transition: all 0.15s;
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }
  `;let Xi=Gd;sr([B({type:String,reflect:!0})],Xi.prototype,"icon");sr([B({type:String,reflect:!0})],Xi.prototype,"name");sr([B({type:String,reflect:!0})],Xi.prototype,"label");sr([B({type:Boolean,reflect:!0})],Xi.prototype,"checked");sr([B({type:Boolean,reflect:!0})],Xi.prototype,"inverted");var Nv=Object.defineProperty,Ji=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Nv(t,e,n),n};const Yd=class extends ft{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=Ni(),this._textInput=Ni(),this.onValueChange=new Event("input"),this.onOpacityInput=i=>{const t=i.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(i){const{color:t,opacity:e}=i;this.color=t,e&&(this.opacity=e)}get value(){const i={color:this.color};return this.opacity&&(i.opacity=this.opacity),i}onColorInput(i){i.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(i){i.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:e}=t;let r=e.replace(/[^a-fA-F0-9]/g,"");r.startsWith("#")||(r=`#${r}`),t.value=r.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:i}=this._colorInput;i&&i.click()}render(){return N`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${Tt(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${Tt(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?N`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};Yd.styles=mt`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let ui=Yd;Ji([B({type:String,reflect:!0})],ui.prototype,"name");Ji([B({type:String,reflect:!0})],ui.prototype,"label");Ji([B({type:String,reflect:!0})],ui.prototype,"icon");Ji([B({type:Boolean,reflect:!0})],ui.prototype,"vertical");Ji([B({type:Number,reflect:!0})],ui.prototype,"opacity");Ji([B({type:String,reflect:!0})],ui.prototype,"color");const Kr=(i,t={},e=!0)=>{let r={};for(const n of i.children){const s=n,o=s.getAttribute("name")||s.getAttribute("label"),a=t[o];if(o){if("value"in s&&typeof s.value<"u"&&s.value!==null){const l=s.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;r[o]=a?a(s.value):s.value}else if(e){const l=Kr(s,t);if(Object.keys(l).length===0)continue;r[o]=a?a(l):l}}else e&&(r={...r,...Kr(s,t)})}return r},Ss=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Lv=[">=","<=","=",">","<","?","/","#"];function Gl(i){const t=Lv.find(o=>i.split(o).length===2),e=i.split(t).map(o=>o.trim()),[r,n]=e,s=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):Ss(n);return{key:r,condition:t,value:s}}const So=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(r=>r.trim());for(const r of e){const n=!r.startsWith("(")&&!r.endsWith(")"),s=r.startsWith("(")&&r.endsWith(")");if(n){const o=Gl(r);t.push(o)}if(s){const o={operator:"&",queries:r.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const c=Gl(a);return l>0&&(c.operator="&"),c})};t.push(o)}}return t}catch{return null}},Yl=(i,t,e)=>{let r=!1;switch(t){case"=":r=i===e;break;case"?":r=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(r=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(r=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(r=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(r=i>=e);break;case"/":r=String(i).startsWith(String(e));break}return r};var Rv=Object.defineProperty,Mv=Object.getOwnPropertyDescriptor,De=(i,t,e,r)=>{for(var n=r>1?void 0:r?Mv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Rv(t,e,n),n};const Zd=class extends ft{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Ss(this.label):this.label}set value(i){this._value=i}render(){return N`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?N` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?N`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?N`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};Zd.styles=mt`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_main-base) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
    }
  `;let At=Zd;De([B({type:String,reflect:!0})],At.prototype,"img",2);De([B({type:String,reflect:!0})],At.prototype,"label",2);De([B({type:String,reflect:!0})],At.prototype,"icon",2);De([B({type:Boolean,reflect:!0})],At.prototype,"checked",2);De([B({type:Boolean,reflect:!0})],At.prototype,"checkbox",2);De([B({type:Boolean,attribute:"no-mark",reflect:!0})],At.prototype,"noMark",2);De([B({converter:{fromAttribute(i){return i&&Ss(i)}}})],At.prototype,"value",1);De([B({type:Boolean,reflect:!0})],At.prototype,"vertical",2);var Dv=Object.defineProperty,jv=Object.getOwnPropertyDescriptor,je=(i,t,e,r)=>{for(var n=r>1?void 0:r?jv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Dv(t,e,n),n};const Xd=class extends Ot{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=Ni(),this.onOptionClick=i=>{const t=i.target,e=this._value.has(t);if(!this.multiple&&!this.required&&!e)this._value=new Set([t]);else if(!this.multiple&&!this.required&&e)this._value=new Set([]);else if(!this.multiple&&this.required&&!e)this._value=new Set([t]);else if(this.multiple&&!this.required&&!e)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&e){const r=[...this._value].filter(n=>n!==t);this._value=new Set(r)}else if(this.multiple&&this.required&&!e)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&e){const r=[...this._value].filter(s=>s!==t),n=new Set(r);n.size!==0&&(this._value=n)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(i){if(i){const{value:t}=this._contextMenu;if(!t)return;for(const e of this.elements)t.append(e);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(i){if(this.required&&Object.keys(i).length===0)return;const t=new Set;for(const e of i){const r=this.findOption(e);if(r&&(t.add(r),!this.multiple&&Object.keys(i).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(i=>i instanceof At&&i.checked).map(i=>i.value)}get _options(){const i=new Set([...this.elements]);for(const t of this.children)t instanceof At&&i.add(t);return[...i]}onSlotChange(i){const t=i.target.assignedElements();this.observe(t);const e=new Set;for(const r of this.elements){if(!(r instanceof At)){r.remove();continue}r.checked&&e.add(r),r.removeEventListener("click",this.onOptionClick),r.addEventListener("click",this.onOptionClick)}this._value=e}updateOptionsState(){for(const i of this._options)i instanceof At&&(i.checked=this._value.has(i))}findOption(i){return this._options.find(t=>t instanceof At?t.label===i||t.value===i:!1)}render(){let i,t,e;if(this._value.size===0)i="Select an option...";else if(this._value.size===1){const r=[...this._value][0];i=r?.label||r?.value,t=r?.img,e=r?.icon}else i=`Multiple (${this._value.size})`;return N`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${t}
            .icon=${e}
            style="overflow: hidden;"
            >${i}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${Tt(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};Xd.styles=[Me.scrollbar,mt`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let ye=Xd;je([B({type:String,reflect:!0})],ye.prototype,"name",2);je([B({type:String,reflect:!0})],ye.prototype,"icon",2);je([B({type:String,reflect:!0})],ye.prototype,"label",2);je([B({type:Boolean,reflect:!0})],ye.prototype,"multiple",2);je([B({type:Boolean,reflect:!0})],ye.prototype,"required",2);je([B({type:Boolean,reflect:!0})],ye.prototype,"vertical",2);je([B({type:Boolean,reflect:!0})],ye.prototype,"visible",1);je([Zi()],ye.prototype,"_value",2);var Fv=Object.defineProperty,Jd=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Fv(t,e,n),n};const Kd=class extends ft{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(i){const t=i.split(`
`).map(e=>e.trim()).map(e=>e.split('"')[1]).filter(e=>e!==void 0).flatMap(e=>e.split(/\s+/));return[...new Set(t)].filter(e=>e!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const i=this.layouts[this.layout],t=this.getUniqueAreasFromTemplate(i.template).map(e=>{const r=i.elements[e];return r&&(r.style.gridArea=e),r}).filter(e=>!!e);this.style.gridTemplate=i.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...t)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return N`<slot></slot>`}};Kd.styles=mt`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let da=Kd;Jd([B({type:Boolean,reflect:!0})],da.prototype,"floating");Jd([B({type:String,reflect:!0})],da.prototype,"layout");const Ao=class extends ft{render(){return N`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};Ao.styles=mt`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
    }
  `,Ao.properties={icon:{type:String}};let Bv=Ao;var Uv=Object.defineProperty,As=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Uv(t,e,n),n};const Qd=class extends ft{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const i={};for(const t of this.children){const e=t;"value"in e?i[e.name||e.label]=e.value:"checked"in e&&(i[e.name||e.label]=e.checked)}return i}set value(i){const t=[...this.children];for(const e in i){const r=t.find(o=>{const a=o;return a.name===e||a.label===e});if(!r)continue;const n=r,s=i[e];typeof s=="boolean"?n.checked=s:n.value=s}}render(){return N`
      <div class="parent">
        ${this.label||this.icon?N`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Qd.styles=mt`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let or=Qd;As([B({type:String,reflect:!0})],or.prototype,"name");As([B({type:String,reflect:!0})],or.prototype,"label");As([B({type:String,reflect:!0})],or.prototype,"icon");As([B({type:Boolean,reflect:!0})],or.prototype,"vertical");var Hv=Object.defineProperty,ar=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Hv(t,e,n),n};const th=class extends ft{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Ss(this.textContent):this.textContent}render(){return N`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?N`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?N`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};th.styles=mt`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
      display: block;
      white-space: nowrap;
      line-height: 1.1rem;
      transition: all 0.15s;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: none;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let Ki=th;ar([B({type:String,reflect:!0})],Ki.prototype,"img");ar([B({type:Boolean,attribute:"label-hidden",reflect:!0})],Ki.prototype,"labelHidden");ar([B({type:String,reflect:!0})],Ki.prototype,"icon");ar([B({type:Boolean,attribute:"icon-hidden",reflect:!0})],Ki.prototype,"iconHidden");ar([B({type:Boolean,reflect:!0})],Ki.prototype,"vertical");var Vv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,Yt=(i,t,e,r)=>{for(var n=r>1?void 0:r?Wv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Vv(t,e,n),n};const eh=class extends ft{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Ni(),this.onValueChange=new Event("change")}set value(i){this.setValue(i.toString())}get value(){return this._value}onChange(i){i.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(i){const{value:t}=this._input;let e=i;if(e=e.replace(/[^0-9.-]/g,""),e=e.replace(/(\..*)\./g,"$1"),e.endsWith(".")||(e.lastIndexOf("-")>0&&(e=e[0]+e.substring(1).replace(/-/g,"")),e==="-"||e==="-0"))return;let r=Number(e);Number.isNaN(r)||(r=this.min!==void 0?Math.max(r,this.min):r,r=this.max!==void 0?Math.min(r,this.max):r,this.value!==r&&(this._value=r,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:i}=this._input;i&&Number.isNaN(Number(i.value))&&(i.value=this.value.toString())}onSliderMouseDown(i){document.body.style.cursor="w-resize";const{clientX:t}=i,e=this.value;let r=!1;const n=a=>{var l;r=!0;const{clientX:c}=a,d=this.step??1,u=((l=d.toString().split(".")[1])==null?void 0:l.length)||0,f=1/(this.sensitivity??1),h=(c-t)/f;if(Math.floor(Math.abs(h))!==Math.abs(h))return;const b=e+h*d;this.setValue(b.toFixed(u))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},o=()=>{document.removeEventListener("mousemove",n),document.body.style.cursor="default",r?r=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}onFocus(i){i.stopPropagation();const t=e=>{e.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:i}=this._input;i&&i.focus()}render(){const i=N`
      ${this.pref||this.icon?N`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Tt(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${o=>o.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?N`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,t=this.min??-1/0,e=this.max??1/0,r=100*(this.value-t)/(e-t),n=N`
      <style>
        .slider-indicator {
          width: ${`${r}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?N`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?N`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,s=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return N`
      <bim-input
        title=${s}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?n:i}
      </bim-input>
    `}};eh.styles=mt`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let Rt=eh;Yt([B({type:String,reflect:!0})],Rt.prototype,"name",2);Yt([B({type:String,reflect:!0})],Rt.prototype,"icon",2);Yt([B({type:String,reflect:!0})],Rt.prototype,"label",2);Yt([B({type:String,reflect:!0})],Rt.prototype,"pref",2);Yt([B({type:Number,reflect:!0})],Rt.prototype,"min",2);Yt([B({type:Number,reflect:!0})],Rt.prototype,"value",1);Yt([B({type:Number,reflect:!0})],Rt.prototype,"step",2);Yt([B({type:Number,reflect:!0})],Rt.prototype,"sensitivity",2);Yt([B({type:Number,reflect:!0})],Rt.prototype,"max",2);Yt([B({type:String,reflect:!0})],Rt.prototype,"suffix",2);Yt([B({type:Boolean,reflect:!0})],Rt.prototype,"vertical",2);Yt([B({type:Boolean,reflect:!0})],Rt.prototype,"slider",2);var qv=Object.defineProperty,Gv=Object.getOwnPropertyDescriptor,lr=(i,t,e,r)=>{for(var n=r>1?void 0:r?Gv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&qv(t,e,n),n};const ih=class extends ft{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(i){this._hidden=i,this.activationButton.active=!i,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return Kr(this,this.valueTransform)}set value(i){const t=[...this.children];for(const e in i){const r=t.find(s=>{const o=s;return o.name===e||o.label===e});if(!r)continue;const n=r;n.value=i[e]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const i=this.querySelectorAll("bim-panel-section");for(const t of i)t.collapsed=!0}expandSections(){const i=this.querySelectorAll("bim-panel-section");for(const t of i)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,N`
      <div class="parent">
        ${this.label||this.name||this.icon?N`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};ih.styles=[Me.scrollbar,mt`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let di=ih;lr([B({type:String,reflect:!0})],di.prototype,"icon",2);lr([B({type:String,reflect:!0})],di.prototype,"name",2);lr([B({type:String,reflect:!0})],di.prototype,"label",2);lr([B({type:Boolean,reflect:!0})],di.prototype,"hidden",1);lr([B({type:Boolean,attribute:"header-hidden",reflect:!0})],di.prototype,"headerHidden",2);var Yv=Object.defineProperty,cr=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Yv(t,e,n),n};const nh=class extends ft{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const i=this.parentElement;let t;return i instanceof di&&(t=i.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),Kr(this,t)}set value(i){const t=[...this.children];for(const e in i){const r=t.find(s=>{const o=s;return o.name===e||o.label===e});if(!r)continue;const n=r;n.value=i[e]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const i=this.label||this.icon||this.name||this.fixed,t=N`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,e=N`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,r=this.collapsed?t:e,n=N`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?N`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:r}
      </div>
    `;return N`
      <div class="parent">
        ${i?n:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};nh.styles=[Me.scrollbar,mt`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .header svg {
        fill: var(--bim-ui_bg-contrast-80);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }
    `];let Qi=nh;cr([B({type:String,reflect:!0})],Qi.prototype,"icon");cr([B({type:String,reflect:!0})],Qi.prototype,"label");cr([B({type:String,reflect:!0})],Qi.prototype,"name");cr([B({type:Boolean,reflect:!0})],Qi.prototype,"fixed");cr([B({type:Boolean,reflect:!0})],Qi.prototype,"collapsed");var Zv=Object.defineProperty,ur=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Zv(t,e,n),n};const rh=class extends ft{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=i=>{this._value=i.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof At&&(t.checked=t===i.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(i){const t=this.findOption(i);if(t){for(const e of this._options)e.checked=e===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(i){const t=i.target.assignedElements();for(const e of t)e instanceof At&&(e.noMark=!0,e.removeEventListener("click",this.onOptionClick),e.addEventListener("click",this.onOptionClick))}findOption(i){return this._options.find(t=>t instanceof At?t.label===i||t.value===i:!1)}firstUpdated(){const i=[...this.children].find(t=>t instanceof At&&t.checked);i&&(this._value=i)}render(){return N`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};rh.styles=mt`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }
  `;let tn=rh;ur([B({type:String,reflect:!0})],tn.prototype,"name");ur([B({type:String,reflect:!0})],tn.prototype,"icon");ur([B({type:String,reflect:!0})],tn.prototype,"label");ur([B({type:Boolean,reflect:!0})],tn.prototype,"vertical");ur([Zi()],tn.prototype,"_value");const Xv=()=>N`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-10);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-20);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div style="display: flex; flex-direction: column;">
      <div data-type="row" style="gap: 2rem">
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 2"></div>
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 0.5"></div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.7s5"></div>
        </div>
      </div>
    </div>
  `,Jv=()=>N`
    <style>
      .loader {
        grid-area: Processing;
        position: relative;
        padding: 0.125rem;
      }
      .loader:before {
        content: "";
        position: absolute;
      }
      .loader .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: var(--bim-ui_main-base);
        /* width: 25%; */
        width: 0;
        animation: borealisBar 2s linear infinite;
      }

      @keyframes borealisBar {
        0% {
          left: 0%;
          right: 100%;
          width: 0%;
        }
        10% {
          left: 0%;
          right: 75%;
          width: 25%;
        }
        90% {
          right: 0%;
          left: 75%;
          width: 25%;
        }
        100% {
          left: 100%;
          right: 0%;
          width: 0%;
        }
      }
    </style>
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  `;var Kv=Object.defineProperty,Qv=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Kv(t,e,n),n};const sh=class extends ft{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return N`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};sh.styles=mt`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let oh=sh;Qv([B({type:String,reflect:!0})],oh.prototype,"column");var ty=Object.defineProperty,ey=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&ty(t,e,n),n};const ah=class extends ft{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(i,t=!1){for(const e of this._groups)e.childrenHidden=typeof i>"u"?!e.childrenHidden:!i,t&&e.toggleChildren(i,t)}render(){return this._groups=[],N`
      <slot></slot>
      ${this.data.map(i=>{const t=document.createElement("bim-table-group");return this._groups.push(t),t.table=this.table,t.data=i,t})}
    `}};ah.styles=mt`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let lh=ah;ey([B({type:Array,attribute:!1})],lh.prototype,"data");var iy=Object.defineProperty,ny=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&iy(t,e,n),n};const ch=class extends ft{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(i,t=!1){this._children&&(this.childrenHidden=typeof i>"u"?!this.childrenHidden:!i,t&&this._children.toggleGroups(i,t))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const i=this.table.getGroupIndentation(this.data)??0,t=N`
      ${this.table.noIndentation?null:N`
            <style>
              .branch-vertical {
                left: ${i+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,e=document.createDocumentFragment();Pi(t,e);let r=null;this.table.noIndentation||(r=document.createElement("div"),r.classList.add("branch","branch-horizontal"),r.style.left=`${i-1+(this.table.selectableRows?2.05:.5625)}rem`);let n=null;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("height","9.5"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.3333333");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(l);const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("height","6.5"),c.setAttribute("width","9.5"),c.setAttribute("viewBox","0 0 5.9111118 5.0175439");const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),c.append(d),n=document.createElement("div"),n.addEventListener("click",u=>{u.stopPropagation(),this.toggleChildren()}),n.classList.add("caret"),n.style.left=`${(this.table.selectableRows?1.5:.125)+i}rem`,this.childrenHidden?n.append(a):n.append(c)}const s=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&s.append(e),s.table=this.table,s.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:s}})),n&&this.data.children&&s.append(n),i!==0&&(!this.data.children||this.childrenHidden)&&r&&s.append(r);let o;if(this.data.children){o=document.createElement("bim-table-children"),this._children=o,o.table=this.table,o.data=this.data.children;const a=document.createDocumentFragment();Pi(t,a),o.append(a)}return N`
      <div class="parent">${s} ${this.childrenHidden?null:o}</div>
    `}};ch.styles=mt`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let uh=ch;ny([B({type:Boolean,attribute:"children-hidden",reflect:!0})],uh.prototype,"childrenHidden");var ry=Object.defineProperty,en=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&ry(t,e,n),n};const dh=class extends ft{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(i=>{this._intersecting=i[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(i=>!this.hiddenColumns.includes(i.name)).map(i=>i.name)}get _columnWidths(){return this.columns.filter(i=>!this.hiddenColumns.includes(i.name)).map(i=>i.width)}get _isSelected(){var i;return(i=this.table)==null?void 0:i.selection.has(this.data)}onSelectionChange(i){if(!this.table)return;const t=i.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const i=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,e=[];for(const r in t){if(this.hiddenColumns.includes(r))continue;const n=t[r];let s;if(typeof n=="string"||typeof n=="boolean"||typeof n=="number"?(s=document.createElement("bim-label"),s.textContent=String(n)):n instanceof HTMLElement?s=n:(s=document.createDocumentFragment(),Pi(n,s)),!s)continue;const o=document.createElement("bim-table-cell");o.append(s),o.column=r,this._columnNames.indexOf(r)===0&&(o.style.marginLeft=`${this.table.noIndentation?0:i+.75}rem`);const a=this._columnNames.indexOf(r);o.setAttribute("data-column-index",String(a)),o.toggleAttribute("data-no-indentation",a===0&&this.table.noIndentation),o.toggleAttribute("data-cell-header",this.isHeader),o.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:o}})),e.push(o)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,N`
      ${!this.isHeader&&this.table.selectableRows?N`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${e}
      <slot></slot>
    `}render(){return N`${this._intersecting?this.compute():N``}`}};dh.styles=mt`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;let hi=dh;en([B({type:Boolean,reflect:!0})],hi.prototype,"selected");en([B({attribute:!1})],hi.prototype,"columns");en([B({attribute:!1})],hi.prototype,"hiddenColumns");en([B({attribute:!1})],hi.prototype,"data");en([B({type:Boolean,attribute:"is-header",reflect:!0})],hi.prototype,"isHeader");en([Zi()],hi.prototype,"_intersecting");var sy=Object.defineProperty,oy=Object.getOwnPropertyDescriptor,te=(i,t,e,r)=>{for(var n=r>1?void 0:r?oy(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&sy(t,e,n),n};const hh=class extends ft{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this.loadingErrorElement=null,this._stringFilterFunction=(i,t)=>Object.values(t.data).some(e=>String(e).toLowerCase().includes(i.toLowerCase())),this._queryFilterFunction=(i,t)=>{let e=!1;const r=So(i)??[];for(const n of r){if("queries"in n){e=!1;break}const{condition:s,value:o}=n;let{key:a}=n;if(a.startsWith("[")&&a.endsWith("]")){const l=a.replace("[","").replace("]","");a=l,e=Object.keys(t.data).filter(c=>c.includes(l)).map(c=>Yl(t.data[c],s,o)).some(c=>c)}else e=Yl(t.data[a],s,o);if(!e)break}return e}}set columns(i){const t=[];for(const e of i){const r=typeof e=="string"?{name:e,width:`minmax(${this.minColWidth}, 1fr)`}:e;t.push(r)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const i={};for(const t of this.columns)if(typeof t=="string")i[t]=t;else{const{name:e}=t;i[e]=e}return i}get value(){return this._filteredData}set queryString(i){this.toggleAttribute("data-processing",!0),this._queryString=i&&i.trim()!==""?i.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(i){this._data=i,this.updateFilteredData(),this.computeMissingColumns(i)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(i=>{setTimeout(()=>{i(this.data)})})}set hiddenColumns(i){this._hiddenColumns=i,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(So(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(i){let t=!1;for(const e of i){const{children:r,data:n}=e;for(const s in n)this._columns.map(o=>typeof o=="string"?o:o.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(r){const s=this.computeMissingColumns(r);s&&!t&&(t=s)}}return t}generateText(i="comma",t=this.value,e="",r=!0){const n=this._textDelimiters[i];let s="";const o=this.columns.map(a=>a.name);if(r){this.indentationInText&&(s+=`Indentation${n}`);const a=`${o.join(n)}
`;s+=a}for(const[a,l]of t.entries()){const{data:c,children:d}=l,u=this.indentationInText?`${e}${a+1}${n}`:"",f=o.map(b=>c[b]??""),h=`${u}${f.join(n)}
`;s+=h,d&&(s+=this.generateText(i,l.children,`${e}${a+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(i){const t={};for(const e of Object.keys(this.dataTransform)){const r=this.columns.find(n=>n.name===e);r&&r.forceDataTransform&&(e in i||(i[e]=""))}for(const e in i){const r=this.dataTransform[e];r?t[e]=r(i[e],i):t[e]=i[e]}return t}downloadData(i="BIM Table Data",t="json"){let e=null;if(t==="json"&&(e=new File([JSON.stringify(this.value,void 0,2)],`${i}.json`)),t==="csv"&&(e=new File([this.csv],`${i}.csv`)),t==="tsv"&&(e=new File([this.tsv],`${i}.tsv`)),!e)return;const r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=e.name,r.click(),URL.revokeObjectURL(r.href)}getRowIndentation(i,t=this.value,e=0){for(const r of t){if(r.data===i)return e;if(r.children){const n=this.getRowIndentation(i,r.children,e+1);if(n!==null)return n}}return null}getGroupIndentation(i,t=this.value,e=0){for(const r of t){if(r===i)return e;if(r.children){const n=this.getGroupIndentation(i,r.children,e+1);if(n!==null)return n}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(i=!1){if(this._filteredData.length!==0&&!i||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){return this.loading=!1,this._filteredData.length!==0||(t instanceof Error&&this.loadingErrorElement&&t.message.trim()!==""&&(this.loadingErrorElement.textContent=t.message),this._errorLoading=!0),!1}}filter(i,t=this.filterFunction??this._stringFilterFunction,e=this.data){const r=[];for(const n of e)if(t(i,n)){if(this.preserveStructureOnFilter){const s={data:n.data};if(n.children){const o=this.filter(i,t,n.children);o.length&&(s.children=o)}r.push(s)}else if(r.push({data:n.data}),n.children){const s=this.filter(i,t,n.children);r.push(...s)}}else if(n.children){const s=this.filter(i,t,n.children);this.preserveStructureOnFilter&&s.length?r.push({data:n.data,children:s}):r.push(...s)}return r}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return Xv();if(this._errorLoading)return N`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return N`<slot name="missing-data"></slot>`;const i=document.createElement("bim-table-row");i.table=this,i.isHeader=!0,i.data=this._headerRowData,i.style.gridArea="Header",i.style.position="sticky",i.style.top="0",i.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",N`
      <div class="parent">
        ${this.headersHidden?null:i} ${Jv()}
        <div style="overflow-x: hidden; grid-area: Body">${t}</div>
      </div>
    `}};hh.styles=[Me.scrollbar,mt`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let Zt=hh;te([Zi()],Zt.prototype,"_filteredData",2);te([B({type:Boolean,attribute:"headers-hidden",reflect:!0})],Zt.prototype,"headersHidden",2);te([B({type:String,attribute:"min-col-width",reflect:!0})],Zt.prototype,"minColWidth",2);te([B({type:Array,attribute:!1})],Zt.prototype,"columns",1);te([B({type:Array,attribute:!1})],Zt.prototype,"data",1);te([B({type:Boolean,reflect:!0})],Zt.prototype,"expanded",2);te([B({type:Boolean,reflect:!0,attribute:"selectable-rows"})],Zt.prototype,"selectableRows",2);te([B({attribute:!1})],Zt.prototype,"selection",2);te([B({type:Boolean,attribute:"no-indentation",reflect:!0})],Zt.prototype,"noIndentation",2);te([B({type:Boolean,reflect:!0})],Zt.prototype,"loading",2);te([Zi()],Zt.prototype,"_errorLoading",2);var ay=Object.defineProperty,ly=Object.getOwnPropertyDescriptor,Os=(i,t,e,r)=>{for(var n=r>1?void 0:r?ly(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&ay(t,e,n),n};const fh=class extends ft{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(i){this._hidden=i,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:i}=this;if(i&&this.name===this._defaultName){const t=[...i.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return N` <slot></slot> `}};fh.styles=mt`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let jt=fh;Os([B({type:String,reflect:!0})],jt.prototype,"name",2);Os([B({type:String,reflect:!0})],jt.prototype,"label",2);Os([B({type:String,reflect:!0})],jt.prototype,"icon",2);Os([B({type:Boolean,reflect:!0})],jt.prototype,"hidden",1);var cy=Object.defineProperty,uy=Object.getOwnPropertyDescriptor,nn=(i,t,e,r)=>{for(var n=r>1?void 0:r?uy(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&cy(t,e,n),n};const ph=class extends ft{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=i=>{const t=i.target;t instanceof jt&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(i){this._tab=i;const t=[...this.children],e=t.find(r=>r instanceof jt&&r.name===i);for(const r of t){if(!(r instanceof jt))continue;r.hidden=e!==r;const n=this.getTabSwitcher(r.name);n&&n.toggleAttribute("data-active",!r.hidden)}}get tab(){return this._tab}getTabSwitcher(i){return this._switchers.find(t=>t.getAttribute("data-name")===i)}createSwitchers(){this._switchers=[];for(const i of this.children){if(!(i instanceof jt))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===i.name?this.toggleAttribute("tab",!1):this.tab=i.name}),t.setAttribute("data-name",i.name),t.className="switcher";const e=document.createElement("bim-label");e.textContent=i.label??"",e.icon=i.icon,t.append(e),this._switchers.push(t)}}onSlotChange(i){this.createSwitchers();const t=i.target.assignedElements(),e=t.find(r=>r instanceof jt?this.tab?r.name===this.tab:!r.hidden:!1);e&&e instanceof jt&&(this.tab=e.name);for(const r of t){if(!(r instanceof jt)){r.remove();continue}r.removeEventListener("hiddenchange",this.onTabHiddenChange),e!==r&&(r.hidden=!0),r.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return N`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};ph.styles=[Me.scrollbar,mt`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: var(--bim-ui_bg-base);
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        transition: all 0.15s;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_main-base);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        grid-area: content;
        overflow: auto;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let fi=ph;nn([Zi()],fi.prototype,"_switchers",2);nn([B({type:Boolean,reflect:!0})],fi.prototype,"bottom",2);nn([B({type:Boolean,attribute:"switchers-hidden",reflect:!0})],fi.prototype,"switchersHidden",2);nn([B({type:Boolean,reflect:!0})],fi.prototype,"floating",2);nn([B({type:String,reflect:!0})],fi.prototype,"tab",1);nn([B({type:Boolean,attribute:"switchers-full",reflect:!0})],fi.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zl=i=>i??$t;var dy=Object.defineProperty,hy=Object.getOwnPropertyDescriptor,_e=(i,t,e,r)=>{for(var n=r>1?void 0:r?hy(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&dy(t,e,n),n};const mh=class extends ft{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(i){this._inputTypes.includes(i)&&(this._type=i)}get type(){return this._type}get query(){return So(this.value)}onInputChange(i){i.stopPropagation();const t=i.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("input");t?.focus()})}render(){return N`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?N` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${Zl(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:N` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Zl(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};mh.styles=[Me.scrollbar,mt`
      :host {
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        flex: 1;
        display: block;
      }

      input,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: var(--bim-ui_size-3xs);
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        height: 100%;
        padding: 0 var(--bim-ui_size-3xs); /* Override padding */
        border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      }

      textarea {
        line-height: 1.1rem;
        resize: vertical;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let le=mh;_e([B({type:String,reflect:!0})],le.prototype,"icon",2);_e([B({type:String,reflect:!0})],le.prototype,"label",2);_e([B({type:String,reflect:!0})],le.prototype,"name",2);_e([B({type:String,reflect:!0})],le.prototype,"placeholder",2);_e([B({type:String,reflect:!0})],le.prototype,"value",2);_e([B({type:Boolean,reflect:!0})],le.prototype,"vertical",2);_e([B({type:Number,reflect:!0})],le.prototype,"debounce",2);_e([B({type:Number,reflect:!0})],le.prototype,"rows",2);_e([B({type:String,reflect:!0})],le.prototype,"type",1);var fy=Object.defineProperty,py=Object.getOwnPropertyDescriptor,bh=(i,t,e,r)=>{for(var n=r>1?void 0:r?py(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&fy(t,e,n),n};const gh=class extends ft{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(i){this._vertical=i,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const i=this.children;for(const t of i)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return N`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};gh.styles=mt`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let Ts=gh;bh([B({type:Number,reflect:!0})],Ts.prototype,"rows",2);bh([B({type:Boolean,reflect:!0})],Ts.prototype,"vertical",1);var my=Object.defineProperty,by=Object.getOwnPropertyDescriptor,zs=(i,t,e,r)=>{for(var n=r>1?void 0:r?by(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&my(t,e,n),n};const vh=class extends ft{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(i){this._vertical=i,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(i){this._labelHidden=i,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const i=this.children;for(const t of i)t instanceof Ts&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return N`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?N`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};vh.styles=mt`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let rn=vh;zs([B({type:String,reflect:!0})],rn.prototype,"label",2);zs([B({type:String,reflect:!0})],rn.prototype,"icon",2);zs([B({type:Boolean,reflect:!0})],rn.prototype,"vertical",1);zs([B({type:Boolean,attribute:"label-hidden",reflect:!0})],rn.prototype,"labelHidden",1);var gy=Object.defineProperty,vy=Object.getOwnPropertyDescriptor,ha=(i,t,e,r)=>{for(var n=r>1?void 0:r?vy(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&gy(t,e,n),n};const yh=class extends ft{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(i){this._vertical=i,this.updateSections()}get vertical(){return this._vertical}set hidden(i){this._hidden=i,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const i=this.children;for(const t of i)t instanceof rn&&(t.labelHidden=this.vertical&&!Wd.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return N`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};yh.styles=mt`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: min-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let Is=yh;ha([B({type:String,reflect:!0})],Is.prototype,"icon",2);ha([B({type:Boolean,attribute:"labels-hidden",reflect:!0})],Is.prototype,"labelsHidden",2);ha([B({type:Boolean,reflect:!0})],Is.prototype,"vertical",1);var yy=Object.defineProperty,_y=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&yy(t,e,n),n};const _h=class extends ft{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return N`
      <div class="parent">
        <slot></slot>
      </div>
    `}};_h.styles=mt`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let wh=_h;_y([B({type:String,reflect:!0})],wh.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xh="important",wy=" !"+xh,pe=yd(class extends _d{constructor(i){var t;if(super(i),i.type!==vd.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const r=i[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(const r in t){const n=t[r];if(n!=null){this.ft.add(r);const s=typeof n=="string"&&n.endsWith(wy);r.includes("-")||s?e.setProperty(r,s?n.slice(0,-11):n,s?xh:""):e[r]=n}}return ni}}),xy=i=>{const{components:t}=i,e=t.get(dc);return N`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const r=document.createElement("input");r.type="file",r.accept=".ifc",r.onchange=async()=>{if(r.files===null||r.files.length===0)return;const n=r.files[0];r.remove();const s=await n.arrayBuffer(),o=new Uint8Array(s),a=await e.load(o);a.name=n.name.replace(".ifc","")},r.click()}}
    ></bim-button>
  `},$y=i=>Ot.create(xy,i),ky=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:$y},Symbol.toStringTag,{value:"Module"})),Cy={...ky},Ar={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},Gs={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"},Xl=(i,t)=>{const e=(t?.users??Ar.users)[i],r=e?.name??i,n=r.trim().split(/\s+/);let s,o;return n[0]&&n[0][0]&&(s=n[0][0].toUpperCase(),n[0][1]&&(o=n[0][1].toUpperCase())),n[1]&&n[1][0]&&(o=n[1][0].toUpperCase()),N`
  <div style="display: flex; gap: 0.25rem; overflow: hidden;">
    ${!(e!=null&&e.picture)&&(s||o)?N`
      <bim-label
        style=${pe({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${o}</bim-label>
      `:null}
    <bim-label .img=${e?.picture}>${r}</bim-label>
  </div>
`},Ey=i=>{const{components:t,dataStyles:e,onTopicEnter:r}=i,n=t.get(Un),s=i.topics??n.list.values();return N`
    <bim-table @cellcreated=${({detail:o})=>{const{cell:a}=o;a.style.marginLeft="0"}} ${Tt(o=>{if(!o)return;const a=o;a.hiddenColumns=["Guid"],a.columns=["Title"],a.selectableRows=!0,a.dataTransform={Title:(l,c)=>{const{Guid:d}=c;if(typeof d!="string")return l;const u=n.list.get(d);return u?N`
        <div style="display: flex; overflow: hidden;">
          <style>
            #BBETO {
              background-color: transparent
            }
  
            #BBETO:hover {
              --bim-label--c: var(--bim-ui_accent-base)
            }
          </style> 
          <bim-button @click=${()=>{r&&r(u)}} id="BBETO" icon="iconamoon:enter-duotone"></bim-button>
          <bim-label>${l}</bim-label>
        </div>`:l},Priority:l=>{if(typeof l!="string")return l;const c=(e?.priorities??Ar.priorities)[l];return N`
          <bim-label
            .icon=${c?.icon}
            style=${pe({...Gs,...c?.style})}
          >${l}
          </bim-label>
        `},Status:l=>{if(typeof l!="string")return l;const c=(e?.statuses??Ar.statuses)[l];return N`
          <bim-label
            .icon=${c?.icon}
            style=${pe({...Gs,...c?.style})}
          >${l}
          </bim-label>
        `},Type:l=>{if(typeof l!="string")return l;const c=(e?.types??Ar.types)[l];return N`
          <bim-label
            .icon=${c?.icon}
            style=${pe({...Gs,...c?.style})}
          >${l}
          </bim-label>
        `},Author:l=>typeof l!="string"?l:Xl(l,e),Assignee:l=>typeof l!="string"?l:Xl(l,e)},a.data=[...s].map(l=>{var c;return{data:{Guid:l.guid,Title:l.title,Status:l.status,Description:l.description??"",Author:l.creationAuthor,Assignee:l.assignedTo??"",Date:l.creationDate.toDateString(),DueDate:((c=l.dueDate)==null?void 0:c.toDateString())??"",Type:l.type,Priority:l.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>`},$h=(i,t=!0)=>{const e=Ot.create(Ey,i);if(t){const{components:r,topics:n}=i,[,s]=e,o=r.get(Un);if(o.list.onItemUpdated.add(()=>s()),o.list.onItemDeleted.add(()=>s()),n)for(const a of n)a.relatedTopics.onItemAdded.add(()=>s()),a.relatedTopics.onItemDeleted.add(()=>s()),a.relatedTopics.onCleared.add(()=>s());else o.list.onItemSet.add(()=>s())}return e},Sy=Object.freeze(Object.defineProperty({__proto__:null,topicsList:$h},Symbol.toStringTag,{value:"Module"})),Ay=i=>{var t;const{components:e,topic:r,actions:n}=i,s={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!r,...n},o=e.get(zo),a=((t=i.topic)==null?void 0:t.viewpoints)??o.list.keys(),l=[];for(const c of a){const d=o.list.get(c);d&&l.push(d)}return N`
    <bim-table ${Tt(c=>{if(!c)return;const d=c;d.addEventListener("cellcreated",({detail:u})=>{const{cell:f}=u;f.style.padding="0.25rem"}),d.headersHidden=!0,d.hiddenColumns=["Guid"],d.columns=["Title",{name:"Actions",width:"auto"}],d.dataTransform={Actions:(u,f)=>{const{Guid:h}=f;if(!(h&&typeof h=="string"))return h;const b=o.list.get(h);return b?N`
          <bim-button icon="ph:eye-fill" @click=${()=>b.go()}></bim-button>
          ${Object.values(s).includes(!0)?N`
                <bim-button icon="prime:ellipsis-v">
                  <bim-context-menu>
                    ${s.selectComponents?N`<bim-button label="Select Components" @click=${()=>console.log(b.selection)}></bim-button> `:null}
                    ${s.colorizeComponent?N`<bim-button label="Colorize Components" @click=${()=>b.colorize()}></bim-button> `:null}
                    ${s.resetColors?N`<bim-button label="Reset Colors" @click=${()=>b.resetColors()}></bim-button> `:null}
                    ${s.updateCamera?N`<bim-button label="Update Camera" @click=${()=>b.updateCamera()}></bim-button> `:null}
                    ${s.unlink?N`<bim-button .disabled=${!r} label="Unlink" @click=${()=>r?.viewpoints.delete(b.guid)}></bim-button> `:null}
                    ${s.delete?N`<bim-button label="Delete" @click=${()=>o.list.delete(b.guid)}></bim-button>`:null}
                  </bim-context-menu>
                </bim-button>
              `:null}
        `:h}},d.data=l.map((u,f)=>({data:{Guid:u.guid,Title:u.title??`Viewpoint ${i.topic?f+1:""}`,Actions:""}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No viewpoints to show</bim-label>
    </bim-table>
  `},fa=(i,t=!0)=>{const e=Ot.create(Ay,i),{components:r,topic:n}=i;if(t){const[,s]=e,o=r.get(zo);o.list.onItemUpdated.add(()=>s()),o.list.onItemDeleted.add(()=>s()),o.list.onCleared.add(()=>s()),n?(n.viewpoints.onItemAdded.add(()=>s()),n.viewpoints.onItemDeleted.add(()=>s()),n.viewpoints.onCleared.add(()=>s())):o.list.onItemSet.add(()=>s())}return e},Oy=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:fa},Symbol.toStringTag,{value:"Module"})),Ty={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"}},zy=(i,t)=>{const e=(t??Ty)[i],r=e?.name??i,n=r.trim().split(/\s+/);let s,o;return n[0]&&n[0][0]&&(s=n[0][0].toUpperCase(),n[0][1]&&(o=n[0][1].toUpperCase())),n[1]&&n[1][0]&&(o=n[1][0].toUpperCase()),N`
  <div style="display: flex; gap: 0.25rem; overflow: hidden;">
    ${!(e!=null&&e.picture)&&(s||o)?N`
      <bim-label
        style=${pe({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${o}</bim-label>
      `:null}
    <bim-label .img=${e?.picture}>${r}</bim-label>
  </div>
`},Iy=i=>{const{topic:t,styles:e,viewpoint:r,actions:n}=i,s={delete:!0,...n};return N`<bim-table @cellcreated=${({detail:o})=>{const{cell:a}=o;a.style.marginLeft="0"}} ${Tt(o=>{if(!o)return;const a=o;a.headersHidden=!0,a.hiddenColumns=["guid","author"],a.dataTransform={Comment:(c,d)=>{const{guid:u}=d;if(typeof u!="string")return c;const f=t.comments.get(u);if(!f)return c;const h=()=>{t.comments.delete(u)};return N`
        <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 0.375rem;">
              ${zy(f.author,e)}
              <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${f.date.toDateString()}</bim-label>
            </div>
            <div>
              <style>
                #TCDBT {
                  background-color: transparent;
                  --bim-label--c: var(--bim-ui_bg-contrast-60)
                }

                #TCDBT:hover {
                  --bim-label--c: #FF5252;
                }
              </style>
              ${s!=null&&s.delete?N`<bim-button @click=${h} id="TCDBT" icon="majesticons:delete-bin"></bim-button>`:null}
            </div>
          </div>
          <bim-label style="margin-left: 1.7rem; white-space: normal">${f.comment}</bim-label>
        </div>
      `}};let l=t.comments.values();r&&(l=[...t.comments.values()].filter(c=>c.viewpoint===r)),a.data=[...l].map(c=>({data:{guid:c.guid,Comment:c.comment,author:(()=>{const d=e;if(!d)return c.author;const u=d[c.author];return u?.name??c.author})()}}))})}><bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label></bim-table>`},kh=(i,t=!0)=>{const e=Ot.create(Iy,i);if(t){const{topic:r}=i,[n,s]=e;r.comments.onItemSet.add(()=>s()),r.comments.onItemUpdated.add(()=>s()),r.comments.onItemDeleted.add(()=>s()),r.comments.onCleared.add(()=>s())}return e},Py=Object.freeze(Object.defineProperty({__proto__:null,topicComments:kh},Symbol.toStringTag,{value:"Module"})),Or={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"#2E2E2E"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#2E2E2E","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},Ys={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"white"},Zs=(i,t)=>{const e=(t?.users??Or.users)[i],r=e?.name??i,n=r.trim().split(/\s+/);let s,o;return n[0]&&n[0][0]&&(s=n[0][0].toUpperCase(),n[0][1]&&(o=n[0][1].toUpperCase())),n[1]&&n[1][0]&&(o=n[1][0].toUpperCase()),N`
  <div style="display: flex; gap: 0.25rem; overflow: hidden;">
    ${!(e!=null&&e.picture)&&(s||o)?N`
      <bim-label
        style=${pe({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${o}</bim-label>
      `:null}
    <bim-label .img=${e?.picture}>${r}</bim-label>
  </div>
`},[Qr,Ny]=Ot.create(i=>{const{topic:t}=i,e=document.createElement("bim-text-input");e.type="area";const r=()=>{e.value="",Qr.close(),Qr.remove()};return N`
     <dialog>
      ${t?N`
            <bim-panel style="border-radius: var(--bim-ui_size-base); outline: 2px solid var(--bim-ui_bg-contrast-20); width: 20rem;">
              <bim-panel-section label="New Comment" fixed>
                ${e}
                <div style="justify-content: right; display: flex; gap: 0.375rem">
                  <style>
                    #PAISD {
                      background-color: transparent;
                    }

                    #PAISD:hover {
                      --bim-label--c: #FF5252;
                    }

                    #MDOG9:hover {
                      background-color: #329936;
                    }
                  </style>
                  <bim-button @click=${r} style="flex: 0" id="PAISD" label="Cancel"></bim-button>
                  <bim-button @click=${()=>{const n=e.value;!t||n.trim()===""||(t.createComment(n),r())}} style="flex: 0" id="MDOG9" label="Add Comment"} icon="mi:add"}></bim-button>
                </div>
              </bim-panel-section>
            </bim-panel> 
          `:N`<bim-label>No topic refereced</bim-label>`}
     </dialog> 
    `},{}),[ts,Ly]=Ot.create(i=>{const{components:t,topic:e}=i;let r;t&&(r=fa({components:t,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1,selectComponents:!1}})[0],r.selectableRows=!0);const n=()=>{ts.close(),ts.remove(),r?.remove()};return N`
     <dialog>
      ${e?N`
            <bim-panel style="border-radius: var(--bim-ui_size-base); outline: 2px solid var(--bim-ui_bg-contrast-20); width: 20rem;">
              <bim-panel-section label="Link Viewpoints" fixed>
                ${r}
                <div style="justify-content: right; display: flex; gap: 0.375rem">
                  <style>
                    #PAISD {
                      background-color: transparent;
                    }

                    #PAISD:hover {
                      --bim-label--c: #FF5252;
                    }

                    #MDOG9:hover {
                      background-color: #329936;
                    }
                  </style>
                  <bim-button @click=${n} style="flex: 0" id="PAISD" label="Cancel"></bim-button>
                  <bim-button @click=${()=>{if(!(r&&e))return;const s=r.selection;for(const o of s){const{Guid:a}=o;typeof a=="string"&&e.viewpoints.add(a)}n()}} style="flex: 0" id="MDOG9" label="Link Viewpoints"} icon="mi:add"}></bim-button>
                </div>
              </bim-panel-section>
            </bim-panel> 
          `:N`<bim-label>No topic refereced</bim-label>`}
     </dialog> 
    `},{}),[es,Ry]=Ot.create(i=>{const{components:t,topic:e}=i;let r;if(t){const s=[...t.get(Un).list.values()].filter(o=>o!==e);r=$h({components:t,topics:s})[0],r.selectableRows=!0,r.hiddenColumns=["Guid","Author","Assignee","Date","DueDate"]}const n=()=>{es.close(),es.remove(),r?.remove()};return N`
     <dialog>
        <bim-panel style="border-radius: var(--bim-ui_size-base); outline: 2px solid var(--bim-ui_bg-contrast-20); width: 50rem;">
          <bim-panel-section label="Link Viewpoints" fixed>
            ${r}
            <div style="justify-content: right; display: flex; gap: 0.375rem">
              <style>
                #PAISD {
                  background-color: transparent;
                }

                #PAISD:hover {
                  --bim-label--c: #FF5252;
                }

                #MDOG9:hover {
                  background-color: #329936;
                }
              </style>
              <bim-button @click=${n} style="flex: 0" id="PAISD" label="Cancel"></bim-button>
              <bim-button @click=${()=>{if(!(r&&e))return;const s=r.selection;for(const o of s){const{Guid:a}=o;typeof a=="string"&&e.relatedTopics.add(a)}n()}} style="flex: 0" id="MDOG9" label="Link Topics"} icon="mi:add"}></bim-button>
            </div>
          </bim-panel-section>
        </bim-panel> 
     </dialog> 
    `},{}),My=i=>{const{components:t,topic:e,styles:r,onUpdateInformation:n,actions:s,world:o}=i,a={update:!0,addComments:!0,linkViewpoints:!0,addViewpoints:!0,...s},l=r?.priorities??Or.priorities,c=r?.statuses??Or.statuses,d=r?.types??Or.types;let u;e!=null&&e.priority&&(u=l[e.priority]);let f;e!=null&&e.type&&(f=d[e.type]);let h;e!=null&&e.type&&(h=c[e.status]);let b,p,v;e&&(b=kh({topic:e,styles:r?.users})[0],p=fa({components:t,topic:e})[0]);const g=()=>{if(!(e&&o))return;const C=t.get(zo).create(o);e.viewpoints.add(C.guid)},_=()=>{Ny({topic:e}),document.body.append(Qr),Qr.showModal()},w=()=>{Ly({components:t,topic:e}),document.body.append(ts),ts.showModal()},x=()=>{Ry({components:t,topic:e}),document.body.append(es),es.showModal()};return N`
   <bim-panel>
    ${e?N`
      <bim-panel-section label="Information" icon="ph:info-bold" collapsed>
      <div>
        <bim-label>Title</bim-label> 
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${e.title}</bim-label> 
      </div>
      <div>
        <bim-label>Description</bim-label> 
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${e.description}</bim-label> 
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label> 
        <bim-label .icon=${h?.icon} style=${pe({...Ys,...h?.style})}
        >${e.status}
        </bim-label>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label> 
        <bim-label .icon=${f?.icon} style=${pe({...Ys,...f?.style})}
        >${e.type}
        </bim-label>
      </div>
      ${e.priority?N`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label> 
              <bim-label .icon=${u?.icon} style=${pe({...Ys,...u?.style})}
              >${e.priority}
              </bim-label>
            </div>`:null}
      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label> 
        ${Zs(e.creationAuthor,r)}
      </div>
      ${e.assignedTo?N`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label> 
            ${Zs(e.assignedTo,r)}
          </div>`:null}
      ${e.dueDate?N`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label> 
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${e.dueDate.toDateString()}</bim-label>
          </div>`:null}
      ${e.modifiedAuthor?N`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label> 
            ${Zs(e.modifiedAuthor,r)}
          </div>`:null}
      ${e.modifiedDate?N`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label> 
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${e.modifiedDate.toDateString()}</bim-label>
            </div>`:null}
      ${e.labels.size!==0?N`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label> 
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${[...e.labels].join(", ")}</bim-label>
          </div>`:null}
      ${a.update?N`
            <bim-button @click=${()=>{n&&n(e)}} label="Update Information" icon="tabler:refresh"></bim-button> 
          `:null}
    </bim-panel-section>
    <bim-panel-section label="Comments" icon="majesticons:comment-line">
      ${b}
      ${a.addComments?N`
            <bim-button @click=${_} label="Add Comment" icon="majesticons:comment-line"></bim-button>
          `:null}
    </bim-panel-section>
    <bim-panel-section label="Viewpoints" icon="tabler:camera">
      ${p}
      ${a.linkViewpoints||a.addViewpoints?N`
          <div style="display: flex; gap: 0.375rem">
            ${a.addViewpoints?N`<bim-button @click=${g} .disabled=${!o} label="Add Viewpoint" icon="mi:add"></bim-button> `:null}
            ${a.linkViewpoints?N`<bim-button @click=${w} label="Link Viewpoint" icon="tabler:camera"></bim-button>`:null}
          </div>
          `:null}
    </bim-panel-section>
    <!-- <bim-panel-section label="Related Topics" icon="material-symbols:topic-outline">
      ${v}
      ${a.linkViewpoints?N`
            <bim-button @click=${x} label="Link Topic" icon="material-symbols:topic-outline"></bim-button> 
          `:null}
    </bim-panel-section> -->
    `:N`<bim-label>No topic selected!</bim-label>`}
   </bim-panel> 
  `},Dy=(i,t=!0)=>{const e=Ot.create(My,i);if(t){const{components:r}=i,[n,s]=e;r.get(Un).list.onItemUpdated.add(({value:o})=>{const{topic:a}=s(),{guid:l}=o;l===a?.guid&&s()})}return e},jy=Object.freeze(Object.defineProperty({__proto__:null,topicData:Dy},Symbol.toStringTag,{value:"Module"}));({...jy});const Fy=i=>{const{components:t,actions:e,tags:r}=i,n=e?.dispose??!0,s=e?.download??!0,o=e?.visibility??!0,a=r?.schema??!0,l=r?.viewDefinition??!0,c=t.get(Ft),d=({detail:u})=>{const{cell:f}=u;f.style.padding="0.25rem 0"};return N`
    <bim-table ${Tt(u=>{if(!u)return;const f=u;f.hiddenColumns=["modelID"];const h=[];for(const[,b]of c.groups){if(!b)continue;const p={data:{Name:b.name||b.uuid,modelID:b.uuid}};h.push(p)}f.dataTransform={Name:(b,p)=>{const{modelID:v}=p;if(typeof v!="string")return b;const g=c.groups.get(v);if(!g)return v;const _={};for(const A of g.items)_[A.id]=A.ids;let w;const{schema:x}=g.ifcMetadata;a&&x&&(w=N`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${x}</bim-label>
            `);let C;if(l&&"viewDefinition"in g.ifcMetadata){const A=g.ifcMetadata.viewDefinition;C=N`
            ${A.split(",").map(z=>N`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${z}</bim-label>`)}
          `}let S;n&&(S=N`<bim-button @click=${()=>c.disposeGroup(g)} icon="mdi:delete"></bim-button>`);let O;o&&(O=N`<bim-button @click=${A=>{const z=t.get(No),G=A.target;z.set(G.hasAttribute("data-model-hidden"),_),G.toggleAttribute("data-model-hidden"),G.icon=G.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let M;return s&&(M=N`<bim-button @click=${()=>{const A=document.createElement("input");A.type="file",A.accept=".ifc",A.multiple=!1,A.addEventListener("change",async()=>{if(!(A.files&&A.files.length===1))return;const z=A.files[0],G=await z.arrayBuffer(),E=await t.get(tf).saveToIfc(g,new Uint8Array(G)),R=new File([E],z.name),y=document.createElement("a");y.href=URL.createObjectURL(R),y.download=R.name,y.click(),URL.revokeObjectURL(y.href)}),A.click()}} icon="flowbite:download-solid"></bim-button>`),N`
         <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
            <div style="min-height: 1.75rem; overflow: auto; display: flex;">
              <bim-label style="white-space: normal;">${b}</bim-label>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
              ${w}
              ${C}
            </div>
          </div>
          <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
            ${M}
            ${O}
            ${S}
          </div>
         </div>
        `}},f.data=h})} @cellcreated=${d} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},By=(i,t=!0)=>{const e=Ot.create(Fy,i);if(t){const{components:r}=i,n=r.get(Ft),[,s]=e;n.onFragmentsLoaded.add(()=>setTimeout(()=>s())),n.onFragmentsDisposed.add(()=>s())}return e},Uy=Object.freeze(Object.defineProperty({__proto__:null,modelsList:By},Symbol.toStringTag,{value:"Module"})),Ch=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",i=>i.includes("Value"),i=>i.startsWith("Material"),i=>i.startsWith("Relating"),i=>{const t=["IsGroupedBy","IsDecomposedBy"];return i.startsWith("Is")&&!t.includes(i)}];async function Tr(i,t,e,r=Ch,n=!1){const s=i.get(Ht),o=await t.getProperties(e);if(!o)return{data:{Entity:`${e} properties not found...`}};const a=s.relationMaps[t.uuid],l={data:{}};for(const c in o){const d=r.map(f=>typeof f=="string"?c===f:f(c)).includes(!0);if(!(c==="type"||d))continue;const u=o[c];if(u)if(u.type===5){l.children||(l.children=[]);const f=await Tr(i,t,u.value,r,n);l.children.push(f)}else if(typeof u=="object"&&!Array.isArray(u)){const{value:f,type:h}=u;if(n)h===1||h===2||h===3||(l.data[c]=f);else{const b=typeof f=="number"?Number(f.toFixed(3)):f;l.data[c]=b}}else if(Array.isArray(u))for(const f of u){if(f.type!==5)continue;l.children||(l.children=[]);const h=await Tr(i,t,f.value,r,n);l.children.push(h)}else if(c==="type"){const f=Ir[u];l.data.Entity=f}else l.data[c]=u}if(a&&a.get(o.expressID)){const c=a.get(o.expressID);for(const d of r){const u=[];if(typeof d=="string"){const f=s._inverseAttributes.indexOf(d);f!==-1&&u.push(f)}else{const f=s._inverseAttributes.filter(h=>d(h));for(const h of f){const b=s._inverseAttributes.indexOf(h);u.push(b)}}for(const f of u){const h=c.get(f);if(h)for(const b of h){const p=await Tr(i,t,b,r,n);l.children||(l.children=[]),l.children.push(p)}}}}return l}const Hy=i=>{const{components:t,fragmentIdMap:e,attributesToInclude:r,editable:n,tableDefinition:s}=i,o=t.get(Ft);let a;return typeof r=="function"?a=r(Ch):a=r,N`<bim-table ${Tt(async l=>{if(!l)return;const c=l,d=[],u=[];for(const f in e){const h=o.list.get(f);if(!(h&&h.group))continue;const b=h.group,p=u.find(v=>v.model===b);if(p)for(const v of e[f])p.expressIDs.add(v);else{const v={model:b,expressIDs:new Set(e[f])};u.push(v)}}for(const f of u){const{model:h,expressIDs:b}=f;for(const p of b){const v=await Tr(t,h,p,a,n);d.push(v)}}c.dataTransform=s,c.data=d,c.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},Vy=i=>Ot.create(Hy,i),Wy=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:Vy},Symbol.toStringTag,{value:"Module"}));let we;const qy=i=>{const{components:t,classifications:e}=i,r=t.get(Cn),n=t.get(No);we||(we=document.createElement("bim-table"),we.headersHidden=!0,we.hiddenColumns=["system"],we.columns=["Name",{name:"Actions",width:"auto"}],we.dataTransform={Actions:(o,a)=>{const{system:l,Name:c}=a;if(!(typeof l=="string"&&typeof c=="string"))return o;const d=r.list[l];if(!(d&&d[c]))return o;const u=d[c],{map:f}=u;return N`
          <div>
            <bim-checkbox checked @change=${h=>{const b=h.target;n.set(b.value,f)}}></bim-checkbox>
          </div>
        `}});const s=[];for(const o of e){const a=typeof o=="string"?o:o.system,l=typeof o=="string"?o:o.label,c=r.list[a];c&&s.push({data:{Name:l,system:a},children:Object.keys(c).map(d=>({data:{Name:d,system:a,Actions:""}}))})}return we.data=s,N`${we}`},Gy=(i,t=!0)=>{const e=Ot.create(qy,i);if(t){const{components:r}=i,n=r.get(Ft),[,s]=e;n.onFragmentsDisposed.add(()=>s())}return e},Yy=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:Gy},Symbol.toStringTag,{value:"Module"})),Eh=async(i,t,e)=>{var r,n,s,o;const a=i.get(Ht),l={data:{Name:(r=e.Name)==null?void 0:r.value},children:[{data:{Name:"Identification",Value:(n=e.Identification)==null?void 0:n.value}},{data:{Name:"Name",Value:(s=e.Name)==null?void 0:s.value}},{data:{Name:"Description",Value:(o=e.Description)==null?void 0:o.value}}]},c=a.getEntityRelations(t,e.expressID,"IsNestedBy");if(!c)return l;l.children||(l.children=[]);const d=[];l.children.push({data:{Name:"Tasks"},children:d});for(const u of c){const f=await t.getProperties(u);if(!f)continue;const h=await Eh(i,t,f);d.push(h)}return l},Zy=async(i,t,e)=>{const r=[];for(const n of e){const s=await Eh(i,t,n);r.push(s)}return{data:{Name:"Tasks"},children:r}},Xy=async(i,t)=>{var e,r;const n={data:{Name:"Classifications"}};for(const s of t){const{value:o}=s.ReferencedSource,a=await i.getProperties(o);if(!a)continue;const l={data:{Name:a.Name.value},children:[{data:{Name:"Identification",Value:((e=s.Identification)==null?void 0:e.value)||((r=s.ItemReference)==null?void 0:r.value)}},{data:{Name:"Name",Value:s.Name.value}}]};n.children||(n.children=[]),n.children.push(l)}return n},Jy=async(i,t)=>{const e={data:{Name:"Materials"}};for(const r of t){if(r.type===mc){const n=r.ForLayerSet.value,s=await i.getProperties(n);if(!s)continue;for(const o of s.MaterialLayers){const{value:a}=o,l=await i.getProperties(a);if(!l)continue;const c=await i.getProperties(l.Material.value);if(!c)continue;const d={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:l.LayerThickness.value}},{data:{Name:"Material",Value:c.Name.value}}]};e.children||(e.children=[]),e.children.push(d)}}if(r.type===gc)for(const n of r.Materials){const{value:s}=n,o=await i.getProperties(s);if(!o)continue;const a={data:{Name:"Name",Value:o.Name.value}};e.children||(e.children=[]),e.children.push(a)}if(r.type===bc){const n={data:{Name:"Name",Value:r.Name.value}};e.children||(e.children=[]),e.children.push(n)}}return e},Ky={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},Qy={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},Sh=async(i,t)=>{var e,r,n;const s=Object.values(await i.getAllPropertiesOfType(df))[0];let o;for(const a of s.Units){const l=await i.getProperties(a.value);if(l&&((e=l.UnitType)==null?void 0:e.value)===Ky[t]){o=`${((r=l.Prefix)==null?void 0:r.value)??""}${((n=l.Name)==null?void 0:n.value)??""}`;break}}return o?Qy[o]:null},t0=async(i,t,e)=>{const{displayUnits:r}=e,n={data:{Name:"PropertySets"}};for(const s of t){const o={data:{Name:s.Name.value}};if(s.type===fc){for(const a of s.HasProperties){const{value:l}=a,c=await i.getProperties(l);if(!c)continue;const d=Object.keys(c).find(b=>b.includes("Value"));if(!(d&&c[d]))continue;let u=c[d].value,f="";if(r){const{name:b}=c[d],p=await Sh(i,b)??{};f=p.symbol,u=c[d].value,typeof u=="number"&&p.digits&&(u=u.toFixed(p.digits))}const h={data:{Name:c.Name.value,Value:`${u} ${f??""}`}};o.children||(o.children=[]),o.children.push(h)}o.children&&(n.children||(n.children=[]),n.children.push(o))}}return n},e0=async(i,t,e)=>{const{displayUnits:r}=e,n={data:{Name:"QuantitySets"}};for(const s of t){const o={data:{Name:s.Name.value}};if(s.type===pc){for(const a of s.Quantities){const{value:l}=a,c=await i.getProperties(l);if(!c)continue;const d=Object.keys(c).find(b=>b.includes("Value"));if(!(d&&c[d]))continue;let u=c[d].value,f="";if(r){const{name:b}=c[d],p=await Sh(i,b)??{};f=p.symbol,u=c[d].value,typeof u=="number"&&p.digits&&(u=u.toFixed(p.digits))}const h={data:{Name:c.Name.value,Value:`${u} ${f??""}`}};o.children||(o.children=[]),o.children.push(h)}o.children&&(n.children||(n.children=[]),n.children.push(o))}}return n},i0=["OwnerHistory","ObjectPlacement","CompositionType"],Ah=async(i,t)=>{const e={groupName:"Attributes",includeClass:!1,...t},{groupName:r,includeClass:n}=e,s={data:{Name:r}};n&&(s.children||(s.children=[]),s.children.push({data:{Name:"Class",Value:Ir[i.type]}}));for(const o in i){if(i0.includes(o))continue;const a=i[o];if(a&&typeof a=="object"&&!Array.isArray(a)){if(a.type===of)continue;const l={data:{Name:o,Value:a.value}};s.children||(s.children=[]),s.children.push(l)}}return s},Li=(i,...t)=>{i.children||(i.children=[]),i.children.push(...t)},n0=async(i,t,e,r,n)=>{const s=i.get(Ht).getEntityRelations(t,e,"IsDefinedBy");if(s){const o=[],a=[];for(const d of s){const u=await t.getProperties(d);u&&(u.type===fc&&o.push(u),u.type===pc&&a.push(u))}const l=await t0(t,o,n);l.children&&Li(r,l);const c=await e0(t,a,n);c.children&&Li(r,c)}},r0=async(i,t,e,r)=>{const n=i.get(Ht).getEntityRelations(t,e,"HasAssociations");if(n){const s=[],o=[];for(const c of n){const d=await t.getProperties(c);d&&(d.type===af&&s.push(d),(d.type===mc||d.type===lf||d.type===cf||d.type===bc||d.type===gc)&&o.push(d))}const a=await Xy(t,s);a.children&&Li(r,a);const l=await Jy(t,o);l.children&&Li(r,l)}},s0=async(i,t,e,r)=>{const n=i.get(Ht).getEntityRelations(t,e,"HasAssignments");if(n){const s=[];for(const a of n){const l=await t.getProperties(a);l&&l.type===uf&&s.push(l)}const o=await Zy(i,t,s);o.children&&Li(r,o)}},o0=async(i,t,e,r)=>{const n=i.get(Ht).getEntityRelations(t,e,"ContainedInStructure");if(n&&n[0]){const s=n[0],o=await t.getProperties(s);if(o){const a=await Ah(o,{groupName:"SpatialContainer"});Li(r,a)}}};let wr={};const a0=async(i,t,e)=>{var r;const n=i.get(Ht),s=i.get(Ft),o=s.getModelIdMap(t);Object.keys(t).length===0&&(wr={});const a=[];for(const l in o){const c=s.groups.get(l);if(!c)continue;const d=n.relationMaps[c.uuid];if(!d)continue;l in wr||(wr[l]=new Map);const u=wr[l],f=o[l];for(const h of f){let b=u.get(h);if(b){a.push(b);continue}const p=await c.getProperties(h);if(!p)continue;b={data:{Name:(r=p.Name)==null?void 0:r.value}},a.push(b),u.set(h,b);const v=await Ah(p,{includeClass:!0});b.children||(b.children=[]),b.children.push(v),d.get(h)&&(await n0(i,c,h,b,e),await r0(i,c,h,b),await s0(i,c,h,b),await o0(i,c,h,b))}}return a},l0=i=>{const t={emptySelectionWarning:!0,...i},{components:e,fragmentIdMap:r,emptySelectionWarning:n}=t;return N`
    <bim-table @cellcreated=${({detail:s})=>{const{cell:o}=s;o.column==="Name"&&!("Value"in o.rowData)&&(o.style.gridColumn="1 / -1")}} ${Tt(async s=>{if(!s)return;const o=s;o.columns=[{name:"Name",width:"12rem"}],o.headersHidden=!0,o.loadFunction=()=>a0(e,r,i),await o.loadData(!0)&&o.dispatchEvent(new Event("datacomputed"))})}>
      ${n?N`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
          `:null}
    </bim-table>
  `},c0=i=>Ot.create(l0,i),u0=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:c0},Symbol.toStringTag,{value:"Module"})),Oo=async(i,t,e,r)=>{var n;const s=[],o=i.get(Ht),a=await t.getProperties(e);if(!a)return s;const{type:l}=a,c={data:{Entity:Ir[l],Name:(n=a.Name)==null?void 0:n.value,modelID:t.uuid,expressID:e}};for(const d of r){const u=o.getEntityRelations(t,e,d);if(!u)continue;c.children||(c.children=[]),c.data.relations=JSON.stringify(u);const f={};for(const h of u){const b=await Oo(i,t,h,r);for(const p of b)if(p.data.relations)c.children.push(p);else{const v=t.data.get(h);if(!v){c.children.push(p);continue}const g=v[1][1],_=Ir[g];_ in f||(f[_]=[]),p.data.Entity=p.data.Name,delete p.data.Name,f[_].push(p)}}for(const h in f){const b=f[h],p=b.map(g=>g.data.expressID),v={data:{Entity:h,modelID:t.uuid,relations:JSON.stringify(p)},children:b};c.children.push(v)}}return s.push(c),s},d0=async(i,t,e,r)=>{const n=i.get(Ht),s=[];for(const o of t){let a;if(r)a={data:{Entity:o.name!==""?o.name:o.uuid},children:await Oo(i,o,r,e)};else{const l=n.relationMaps[o.uuid],c=await o.getAllPropertiesOfType(sf);if(!(l&&c))continue;const{expressID:d}=Object.values(c)[0];a={data:{Entity:o.name!==""?o.name:o.uuid},children:await Oo(i,o,d,e)}}s.push(a)}return s};let ue;const h0=(i,t)=>{const e=i.get(Ft),{modelID:r,expressID:n,relations:s}=t.data;if(!r)return null;const o=e.groups.get(r);return o?o.getFragmentMap([n,...JSON.parse(s??"[]")]):null},f0=i=>{const{components:t,models:e,expressID:r}=i,n=i.selectHighlighterName??"select",s=i.hoverHighlighterName??"hover";ue||(ue=document.createElement("bim-table"),ue.hiddenColumns=["modelID","expressID","relations"],ue.columns=["Entity","Name"],ue.headersHidden=!0,ue.addEventListener("cellcreated",({detail:a})=>{const{cell:l}=a;l.column==="Entity"&&!("Name"in l.rowData)&&(l.style.gridColumn="1 / -1")})),ue.addEventListener("rowcreated",a=>{a.stopImmediatePropagation();const{row:l}=a.detail,c=t.get(ji),d=h0(t,l);d&&Object.keys(d).length!==0&&(l.onmouseover=()=>{s&&(l.style.backgroundColor="var(--bim-ui_bg-contrast-20)",c.highlightByID(s,d,!0,!1,c.selection[n]??{}))},l.onmouseout=()=>{l.style.backgroundColor="",c.clear(s)},l.onclick=()=>{n&&c.highlightByID(n,d,!0,!0)})});const o=i.inverseAttributes??["IsDecomposedBy","ContainsElements"];return d0(t,e,o,r).then(a=>ue.data=a),N`${ue}`},p0=(i,t=!0)=>{const e=Ot.create(f0,i);if(t){const[,r]=e,{components:n}=i,s=n.get(Ft),o=n.get(Ht),a=()=>r({models:s.groups.values()});o.onRelationsIndexed.add(a),s.onFragmentsDisposed.add(a)}return e},m0=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:p0},Symbol.toStringTag,{value:"Module"})),fn=(i,t)=>[...i.get(Po).list.values()].find(e=>e.world===t),b0=(i,t)=>N`
    <bim-color-input @input=${e=>{const r=e.target;i.color=new si(r.color)}} color=${t}></bim-color-input>
  `,g0=(i,t)=>{const{postproduction:e}=i,r=e.n8ao.configuration;return N`
    <bim-color-input @input=${n=>{const s=n.target;r.color=new si(s.color)}} color=${t}></bim-color-input>
  `},v0=(i,t)=>{const{color:e,opacity:r}=JSON.parse(t),{postproduction:n}=i,{customEffects:s}=n;return N`
    <bim-color-input @input=${o=>{const{color:a,opacity:l}=o.target;s.lineColor=new si(a).getHex(),l&&(s.opacity=l/100)}} color=${e} opacity=${r*100}></bim-color-input>
  `},y0=(i,t)=>N`
    <bim-color-input @input=${e=>{const r=e.target,n=new si(r.color);i.material.uniforms.uColor.value=n}} color=${t}></bim-color-input>
  `,_0=(i,t)=>{const{postproduction:e}=i;return N`
    <bim-checkbox @change=${r=>{const n=r.target;e.setPasses({ao:n.checked})}} .checked=${t}></bim-checkbox>
  `},w0=(i,t)=>{const{postproduction:e}=i;return N`
    <bim-checkbox @change=${r=>{const n=r.target;e.setPasses({gamma:n.checked})}} .checked=${t}></bim-checkbox>
  `},x0=(i,t)=>{const{postproduction:e}=i;return N`
    <bim-checkbox @change=${r=>{const n=r.target;e.setPasses({custom:n.checked})}} .checked=${t}></bim-checkbox>
  `},xe=(i,t,e,r=()=>{})=>N`
    <bim-checkbox .checked="${e}" @change="${n=>{const s=n.target.checked;i[t]=s,r(s)}}"></bim-checkbox> 
  `,gt=(i,t,e,r)=>{const n={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...r},{slider:s,min:o,max:a,step:l,suffix:c,prefix:d,onInputSet:u}=n;return N`
    <bim-number-input
      .pref=${d}
      .suffix=${c}
      .slider=${s} 
      min=${o} 
      value="${e}" 
      max=${a} 
      step=${l} 
      @change="${f=>{const h=f.target.value;i[t]=h,u(h)}}"
    ></bim-number-input> 
  `},$0=i=>{const{components:t}=i,e=t.get(Hn);return N`<bim-table ${Tt(async r=>{var n,s,o,a,l;if(!r)return;const c=r;c.preserveStructureOnFilter=!0,c.dataTransform={Value:(u,f)=>{const h=f.World,b=e.list.get(h);if(!b)return u;const{scene:p,camera:v,renderer:g}=b,_=f.Name;if(_==="Grid"&&f.IsGridConfig&&typeof u=="boolean"){const w=fn(t,b);return w?xe(w,"visible",u):u}if(_==="Color"&&f.IsGridConfig&&typeof u=="string"){const w=fn(t,b);return w?y0(w,u):u}if(_==="Distance"&&f.IsGridConfig&&typeof u=="number"){const w=fn(t,b);return w?gt(w.material.uniforms.uDistance,"value",u,{slider:!0,min:300,max:1e3}):u}if(_==="Size"&&f.IsGridConfig&&typeof u=="string"){const w=fn(t,b);if(!w)return u;const{x,y:C}=JSON.parse(u),S=gt(w.material.uniforms.uSize1,"value",x,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),O=gt(w.material.uniforms.uSize2,"value",C,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return N`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${S}${O}</div>
          `}if(_==="Near Frustum"&&v.three instanceof br&&typeof u=="number"){const w=v.three;return gt(v.three,"near",u,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Far Frustum"&&v.three instanceof br&&typeof u=="number"){const w=v.three;return gt(v.three,"far",u,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Field of View"&&v.three instanceof br&&typeof u=="number"){const w=v.three;return gt(v.three,"fov",u,{slider:!0,min:10,max:120,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Invert Drag"&&v.hasCameraControls()&&typeof u=="boolean")return xe(v.controls,"dollyDragInverted",u);if(_==="Dolly Speed"&&v.hasCameraControls()&&typeof u=="number")return gt(v.controls,"dollySpeed",u,{slider:!0,min:.5,max:3,step:.1});if(_==="Truck Speed"&&v.hasCameraControls()&&typeof u=="number")return gt(v.controls,"truckSpeed",u,{slider:!0,min:.5,max:6,step:.1});if(_==="Smooth Time"&&v.hasCameraControls()&&typeof u=="number")return gt(v.controls,"smoothTime",u,{slider:!0,min:.01,max:2,step:.01});if(_==="Intensity"&&typeof u=="number"){if(f.Light&&typeof f.Light=="string"){const w=p.three.children.find(x=>x.uuid===f.Light);return w&&w instanceof ln?gt(w,"intensity",u,{slider:!0,min:0,max:10,step:.1}):u}if(f.IsAOConfig&&g instanceof yt)return gt(g.postproduction.n8ao.configuration,"intensity",u,{slider:!0,max:16,step:.1})}if(_==="Color"&&typeof u=="string"){const w=f.Light,x=p.three.children.find(C=>C.uuid===w);if(x&&x instanceof ln)return b0(x,u);if(f.IsAOConfig&&g instanceof yt)return g0(g,u)}if(_==="Ambient Oclussion"&&typeof u=="boolean"&&f.IsAOConfig&&g instanceof yt)return _0(g,u);if(_==="Half Resolution"&&f.IsAOConfig&&g instanceof yt&&typeof u=="boolean")return xe(g.postproduction.n8ao.configuration,"halfRes",u);if(_==="Screen Space Radius"&&f.IsAOConfig&&g instanceof yt&&typeof u=="boolean")return xe(g.postproduction.n8ao.configuration,"screenSpaceRadius",u);if(_==="Radius"&&f.IsAOConfig&&g instanceof yt&&typeof u=="number")return gt(g.postproduction.n8ao.configuration,"aoRadius",u,{slider:!0,max:2,step:.1});if(_==="Denoise Samples"&&f.IsAOConfig&&g instanceof yt&&typeof u=="number")return gt(g.postproduction.n8ao.configuration,"denoiseSamples",u,{slider:!0,min:1,max:16});if(_==="Samples"&&f.IsAOConfig&&g instanceof yt&&typeof u=="number")return gt(g.postproduction.n8ao.configuration,"aoSamples",u,{slider:!0,min:1,max:16});if(_==="Denoise Radius"&&f.IsAOConfig&&g instanceof yt&&typeof u=="number")return gt(g.postproduction.n8ao.configuration,"denoiseRadius",u,{slider:!0,min:0,max:16,step:.1});if(_==="Distance Falloff"&&f.IsAOConfig&&g instanceof yt&&typeof u=="number")return gt(g.postproduction.n8ao.configuration,"distanceFalloff",u,{slider:!0,min:0,max:4,step:.1});if(_==="Directional Light"&&f.Light&&typeof f.Light=="string"&&typeof u=="boolean"){const w=p.three.children.find(x=>x.uuid===f.Light);return w&&w instanceof ln?xe(w,"visible",u):u}if(_==="Ambient Light"&&f.Light&&typeof f.Light=="string"&&typeof u=="boolean"){const w=p.three.children.find(x=>x.uuid===f.Light);return w&&w instanceof ln?xe(w,"visible",u):u}if(_==="Position"&&f.Light&&typeof f.Light=="string"&&typeof u=="string"){const w=p.three.children.find(z=>z.uuid===f.Light);if(!(w&&w instanceof ln))return u;const{x,y:C,z:S}=JSON.parse(u),O=gt(w.position,"x",x,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),M=gt(w.position,"y",C,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),A=gt(w.position,"z",S,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return N`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${O}${M}${A}</div>
          `}return _==="Custom Effects"&&f.IsCEConfig&&g instanceof yt&&typeof u=="boolean"?x0(g,u):_==="Color"&&f.IsOutlineConfig&&g instanceof yt&&typeof u=="string"?v0(g,u):_==="Tolerance"&&f.IsOutlineConfig&&g instanceof yt&&typeof u=="number"?gt(g.postproduction.customEffects,"tolerance",u,{slider:!0,min:0,max:6,step:.01}):_==="Outline"&&f.IsOutlineConfig&&g instanceof yt&&typeof u=="boolean"?xe(g.postproduction.customEffects,"outlineEnabled",u):_==="Gloss"&&f.IsGlossConfig&&g instanceof yt&&typeof u=="boolean"?xe(g.postproduction.customEffects,"glossEnabled",u):_==="Min"&&f.IsGlossConfig&&g instanceof yt&&typeof u=="number"?gt(g.postproduction.customEffects,"minGloss",u,{slider:!0,min:-.5,max:.5,step:.01}):_==="Max"&&f.IsGlossConfig&&g instanceof yt&&typeof u=="number"?gt(g.postproduction.customEffects,"maxGloss",u,{slider:!0,min:-.5,max:.5,step:.01}):_==="Exponent"&&f.IsGlossConfig&&g instanceof yt&&typeof u=="number"?gt(g.postproduction.customEffects,"glossExponent",u,{slider:!0,min:0,max:5,step:.01}):_==="Gamma Correction"&&f.IsGammaConfig&&g instanceof yt&&typeof u=="boolean"?w0(g,u):u}},c.addEventListener("cellcreated",({detail:u})=>{const f=u.cell.parentNode;if(!f)return;const h=f.querySelector("bim-table-cell[column='Name']"),b=f.querySelector("bim-table-cell[column='Value']");h&&!b&&(h.style.gridColumn="1 / -1")});const d=[];for(const[,u]of e.list){const{scene:f,camera:h,renderer:b}=u,p=fn(t,u),v={data:{Name:u instanceof Qh&&u.name||u.uuid},children:[]};if(f){const g={data:{Name:"Scene"}};if(p){const x={data:{Name:"Grid",Value:p.three.visible,World:u.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",get Value(){return`#${p.material.uniforms.uColor.value.getHexString()}`},World:u.uuid,IsGridConfig:!0}},{data:{Name:"Size",get Value(){const C=p.material.uniforms.uSize1.value,S=p.material.uniforms.uSize2.value;return JSON.stringify({x:C,y:S})},World:u.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:p.material.uniforms.uDistance.value,World:u.uuid,IsGridConfig:!0}}]};g.children||(g.children=[]),g.children.push(x)}const _=f.three.children.filter(x=>x instanceof Yh);for(const x of _){const C={data:{Name:"Directional Light",Value:x.visible,World:u.uuid,Light:x.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(x.position),World:u.uuid,Light:x.uuid}},{data:{Name:"Intensity",Value:x.intensity,World:u.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:u.uuid,Light:x.uuid}}]};g.children||(g.children=[]),g.children.push(C)}const w=f.three.children.filter(x=>x instanceof Zh);for(const x of w){const C={data:{Name:"Ambient Light",Value:x.visible,World:u.uuid,Light:x.uuid},children:[{data:{Name:"Intensity",Value:x.intensity,World:u.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:u.uuid,Light:x.uuid}}]};g.children||(g.children=[]),g.children.push(C)}g.children&&((n=g.children)==null?void 0:n.length)>0&&((s=v.children)==null||s.push(g))}if(h.three instanceof br){const g={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:h.three.near,World:u.uuid}},{data:{Name:"Far Frustum",Value:h.three.far,World:u.uuid}},{data:{Name:"Field of View",Value:h.three.fov,World:u.uuid}}]};if(h.hasCameraControls()){const{controls:_}=h,w={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const x in w){const C=_[x];C!=null&&((o=g.children)==null||o.push({data:{Name:w[x],Value:C,World:u.uuid}}))}}(a=v.children)==null||a.push(g)}if(b instanceof yt){const{postproduction:g}=b,_=g.n8ao.configuration,w={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:g.settings.gamma??!1,World:u.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:g.settings.ao??!1,World:u.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:_.aoSamples,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${_.color.getHexString()}`,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:_.halfRes,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:_.screenSpaceRadius,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:_.aoRadius,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:_.intensity,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:_.distanceFalloff,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:_.denoiseSamples,World:u.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:_.denoiseRadius,World:u.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:g.settings.custom??!1,World:u.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:g.customEffects.glossEnabled,World:u.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:g.customEffects.minGloss,World:u.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:g.customEffects.maxGloss,World:u.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:g.customEffects.glossExponent,World:u.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:g.customEffects.outlineEnabled,World:u.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const x=new si(g.customEffects.lineColor),C=g.customEffects.opacity;return JSON.stringify({color:`#${x.getHexString()}`,opacity:C})},World:u.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:g.customEffects.tolerance,World:u.uuid,IsOutlineConfig:!0}}]}]}]};(l=v.children)==null||l.push(w)}d.push(v)}c.columns=[{name:"Name",width:"11rem"}],c.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],c.data=d})} headers-hidden expanded></bim-table>`},k0=(i,t=!0)=>{const e=Ot.create($0,i);if(t){const[r]=e,n=()=>e[1](),{components:s}=i,o=s.get(Hn);o.onDisposed.add(r.remove);for(const[,a]of o.list)a.onDisposed.add(n);r.addEventListener("disconnected",()=>{o.onDisposed.remove(r.remove);for(const[,a]of o.list)a.onDisposed.remove(n)})}return e},C0=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:k0},Symbol.toStringTag,{value:"Module"})),is={...Uy,...Wy,...Yy,...u0,...m0,...C0,...Sy,...Py,...Oy};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=globalThis,rs=ns.trustedTypes,Jl=rs?rs.createPolicy("lit-html",{createHTML:i=>i}):void 0,Oh="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,Th="?"+Ce,E0=`<${Th}>`,ri=document,jn=()=>ri.createComment(""),Fn=i=>i===null||typeof i!="object"&&typeof i!="function",pa=Array.isArray,S0=i=>pa(i)||typeof i?.[Symbol.iterator]=="function",Xs=`[ 	
\f\r]`,pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kl=/-->/g,Ql=/>/g,qe=RegExp(`>|${Xs}(?:([^\\s"'>=/]+)(${Xs}*=${Xs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tc=/'/g,ec=/"/g,zh=/^(?:script|style|textarea|title)$/i,A0=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),ma=A0(1),Ri=Symbol.for("lit-noChange"),kt=Symbol.for("lit-nothing"),ic=new WeakMap,Ze=ri.createTreeWalker(ri,129);function Ih(i,t){if(!pa(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Jl!==void 0?Jl.createHTML(t):t}const O0=(i,t)=>{const e=i.length-1,r=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=pn;for(let a=0;a<e;a++){const l=i[a];let c,d,u=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===pn?d[1]==="!--"?o=Kl:d[1]!==void 0?o=Ql:d[2]!==void 0?(zh.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=qe):d[3]!==void 0&&(o=qe):o===qe?d[0]===">"?(o=n??pn,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?qe:d[3]==='"'?ec:tc):o===ec||o===tc?o=qe:o===Kl||o===Ql?o=pn:(o=qe,n=void 0);const h=o===qe&&i[a+1].startsWith("/>")?" ":"";s+=o===pn?l+E0:u>=0?(r.push(c),l.slice(0,u)+Oh+l.slice(u)+Ce+h):l+Ce+(u===-2?a:h)}return[Ih(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Bn{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[c,d]=O0(t,e);if(this.el=Bn.createElement(c,r),Ze.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=Ze.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(Oh)){const f=d[o++],h=n.getAttribute(u).split(Ce),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:b[2],strings:h,ctor:b[1]==="."?z0:b[1]==="?"?I0:b[1]==="@"?P0:Ps}),n.removeAttribute(u)}else u.startsWith(Ce)&&(l.push({type:6,index:s}),n.removeAttribute(u));if(zh.test(n.tagName)){const u=n.textContent.split(Ce),f=u.length-1;if(f>0){n.textContent=rs?rs.emptyScript:"";for(let h=0;h<f;h++)n.append(u[h],jn()),Ze.nextNode(),l.push({type:2,index:++s});n.append(u[f],jn())}}}else if(n.nodeType===8)if(n.data===Th)l.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(Ce,u+1))!==-1;)l.push({type:7,index:s}),u+=Ce.length-1}s++}}static createElement(t,e){const r=ri.createElement("template");return r.innerHTML=t,r}}function Mi(i,t,e=i,r){var n,s;if(t===Ri)return t;let o=r!==void 0?(n=e.o)==null?void 0:n[r]:e.l;const a=Fn(t)?void 0:t._$litDirective$;return o?.constructor!==a&&((s=o?._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=o:e.l=o),o!==void 0&&(t=Mi(i,o._$AS(i,t.values),o,r)),t}class T0{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??ri).importNode(e,!0);Ze.currentNode=n;let s=Ze.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new dr(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new N0(s,this,t)),this._$AV.push(c),l=r[++a]}o!==l?.index&&(s=Ze.nextNode(),o++)}return Ze.currentNode=ri,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class dr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,n){this.type=2,this._$AH=kt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Mi(this,t,e),Fn(t)?t===kt||t==null||t===""?(this._$AH!==kt&&this._$AR(),this._$AH=kt):t!==this._$AH&&t!==Ri&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):S0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==kt&&Fn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ri.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Bn.createElement(Ih(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(r);else{const o=new T0(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let e=ic.get(t.strings);return e===void 0&&ic.set(t.strings,e=new Bn(t)),e}k(t){pa(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const s of t)n===e.length?e.push(r=new dr(this.O(jn()),this.O(jn()),this,this.options)):r=e[n],r._$AI(s),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class Ps{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,s){this.type=1,this._$AH=kt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=kt}_$AI(t,e=this,r,n){const s=this.strings;let o=!1;if(s===void 0)t=Mi(this,t,e,0),o=!Fn(t)||t!==this._$AH&&t!==Ri,o&&(this._$AH=t);else{const a=t;let l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Mi(this,a[r+l],e,l),c===Ri&&(c=this._$AH[l]),o||(o=!Fn(c)||c!==this._$AH[l]),c===kt?t=kt:t!==kt&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!n&&this.j(t)}j(t){t===kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class z0 extends Ps{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===kt?void 0:t}}class I0 extends Ps{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==kt)}}class P0 extends Ps{constructor(t,e,r,n,s){super(t,e,r,n,s),this.type=5}_$AI(t,e=this){if((t=Mi(this,t,e,0)??kt)===Ri)return;const r=this._$AH,n=t===kt&&r!==kt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==kt&&(r===kt||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class N0{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Mi(this,t)}}const nc=ns.litHtmlPolyfillSupport;nc?.(Bn,dr),(ns.litHtmlVersions??(ns.litHtmlVersions=[])).push("3.2.0");const L0=(i,t,e)=>{const r=e?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const s=e?.renderBefore??null;r._$litPart$=n=new dr(t.insertBefore(jn(),s),s,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R0=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M0={CHILD:2},D0=i=>(...t)=>({_$litDirective$:i,values:t});let j0=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this.t=i,this._$AM=t,this.i=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const n of r)(e=n._$AO)==null||e.call(n,t,!1),$n(n,t);return!0},ss=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},Ph=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),U0(t)}};function F0(i){this._$AN!==void 0?(ss(this),this._$AM=i,Ph(this)):this._$AM=i}function B0(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)$n(r[s],!1),ss(r[s]);else r!=null&&($n(r,!1),ss(r));else $n(this,i)}const U0=i=>{i.type==M0.CHILD&&(i._$AP??(i._$AP=B0),i._$AQ??(i._$AQ=F0))};class H0 extends j0{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Ph(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&($n(this,t),ss(this))}setValue(t){if(R0(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nh=()=>new V0;class V0{}const Js=new WeakMap,W0=D0(class extends H0{render(i){return kt}update(i,[t]){var e;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),kt}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=Js.get(t);e===void 0&&(e=new WeakMap,Js.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Js.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),q0=i=>{const{components:t,topic:e,onCancel:r,onSubmit:n,styles:s}=i,o=n??(()=>{}),a=t.get(Un),l=e?.title??null,c=e?.status??null,d=e?.type??null,u=e?.priority??null,f=e?.assignedTo??null,h=e?.labels??null,b=e?.stage??null,p=e?.description??null,v=e!=null&&e.dueDate?e.dueDate.toISOString().split("T")[0]:null,g=new Set([...a.config.statuses]);c&&g.add(c);const _=new Set([...a.config.types]);d&&_.add(d);const w=new Set([...a.config.priorities]);u&&w.add(u);const x=new Set([...a.config.users]);f&&x.add(f);const C=new Set([...a.config.labels]);if(h)for(const A of h)C.add(A);const S=new Set([...a.config.stages]);b&&S.add(b);const O=Nh(),M=async()=>{const{value:A}=O;if(!A)return;Object.values(A.valueTransform).length===0&&(A.valueTransform={dueDate:G=>{if(typeof G=="string"&&G.trim()!=="")return new Date(G)},status:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]},type:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]},priority:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]},assignedTo:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]}});const z=A.value;if(e)e.set(z),await o(e);else{const G=a.create(z);await o(G)}};return N`
    <bim-panel style="border-radius: var(--bim-ui_size-base); outline: 2px solid var(--bim-ui_bg-contrast-20); width: 22rem;">
      <bim-panel-section ${Tt(O)} fixed label="New Topic" name="topic">
        <div style="display: flex; gap: 0.375rem">
          <bim-text-input vertical label="Title" name="title" .value=${l}></bim-text-input>
          ${e?N`
              <bim-dropdown vertical label="Status" name="status" required>
                ${[...g].map(A=>N`<bim-option label=${A} .checked=${c===A}></bim-option>`)}
              </bim-dropdown>`:N``}
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-dropdown vertical label="Type" name="type" required>
            ${[..._].map(A=>N`<bim-option label=${A} .checked=${d===A}></bim-option>`)}
          </bim-dropdown>
          <bim-dropdown vertical label="Priority" name="priority">
            ${[...w].map(A=>N`<bim-option label=${A} .checked=${u===A}></bim-option>`)}
          </bim-dropdown>
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-dropdown vertical label="Labels" name="labels" multiple>
            ${[...C].map(A=>N`<bim-option label=${A} .checked=${h?.has(A)}></bim-option>`)}
          </bim-dropdown>
          <bim-dropdown vertical label="Assignee" name="assignedTo">
            ${[...x].map(A=>{const z=s!=null&&s.users?s.users[A]:null,G=z?z.name:A,E=z?.picture;return N`<bim-option label=${G} value=${A} .img=${E} .checked=${f===A}></bim-option>`})}
          </bim-dropdown>
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${v}></bim-text-input> 
          <bim-dropdown vertical label="Stage" name="stage">
            ${[...S].map(A=>N`<bim-option label=${A} .checked=${b===A}></bim-option>`)}
          </bim-dropdown>
        </div>
        <bim-text-input vertical label="Description" name="description" type="area" .value=${p??null}></bim-text-input>
        <div style="justify-content: right; display: flex; gap: 0.375rem">
          <style>
            #A7T9K {
              background-color: transparent;
            }

            #A7T9K:hover {
              --bim-label--c: #FF5252;
            }

            #W3F2J:hover {
              background-color: #329936;
            }
          </style>
          <bim-button @click=${r} style="flex: 0" id="A7T9K" label="Cancel"></bim-button>
          <bim-button @click=${M} style="flex: 0" id="W3F2J" label=${e?"Update Topic":"Add Topic"} icon=${e?"tabler:refresh":"mi:add"}></bim-button>
        </div>
      </bim-panel-section>
    </bim-panel>
  `},G0=i=>Ot.create(q0,i),Y0=Object.freeze(Object.defineProperty({__proto__:null,createTopic:G0},Symbol.toStringTag,{value:"Module"}));({...Y0});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=globalThis,ba=zr.ShadowRoot&&(zr.ShadyCSS===void 0||zr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ga=Symbol(),rc=new WeakMap;let Lh=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==ga)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(ba&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=rc.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&rc.set(t,i))}return i}toString(){return this.cssText}};const Z0=i=>new Lh(typeof i=="string"?i:i+"",void 0,ga),va=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new Lh(e,i,ga)},X0=(i,t)=>{if(ba)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=zr.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},sc=ba?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Z0(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:J0,defineProperty:K0,getOwnPropertyDescriptor:Q0,getOwnPropertyNames:t_,getOwnPropertySymbols:e_,getPrototypeOf:i_}=Object,Di=globalThis,oc=Di.trustedTypes,n_=oc?oc.emptyScript:"",ac=Di.reactiveElementPolyfillSupport,kn=(i,t)=>i,os={toAttribute(i,t){switch(t){case Boolean:i=i?n_:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ya=(i,t)=>!J0(i,t),lc={attribute:!0,type:String,converter:os,reflect:!1,hasChanged:ya};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Di.litPropertyMetadata??(Di.litPropertyMetadata=new WeakMap);class gi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lc){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&K0(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:s}=Q0(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n?.call(this)},set(o){const a=n?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lc}static _$Ei(){if(this.hasOwnProperty(kn("elementProperties")))return;const t=i_(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(kn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kn("properties"))){const e=this.properties,r=[...t_(e),...e_(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(sc(n))}else t!==void 0&&e.push(sc(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return X0(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:os).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:os;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ya)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}gi.elementStyles=[],gi.shadowRootOptions={mode:"open"},gi[kn("elementProperties")]=new Map,gi[kn("finalized")]=new Map,ac?.({ReactiveElement:gi}),(Di.reactiveElementVersions??(Di.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ke extends gi{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=L0(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Ri}}var cc;Ke._$litElement$=!0,Ke.finalized=!0,(cc=globalThis.litElementHydrateSupport)==null||cc.call(globalThis,{LitElement:Ke});const uc=globalThis.litElementPolyfillSupport;uc?.({LitElement:Ke});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r_={attribute:!0,type:String,converter:os,reflect:!1,hasChanged:ya},s_=(i=r_,t,e)=>{const{kind:r,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+r)};function zt(i){return(t,e)=>typeof e=="object"?s_(i,t,e):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o_(i){return zt({...i,state:!0,attribute:!1})}class a_ extends Xh{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Jh(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new To;new as;new as;new To;new To;class l_{constructor(t,e){this._group=new xa,this._frustum=new Vh,this._frustumMat=new as,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new Wh({color:"#2e3338"}),this.numbers=new xa,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=e;const r=this.newGrid(-1),n=this.newGrid(-2);this.grids={main:r,secondary:n},this._group.add(n,r,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:e}=this.grids;t.removeFromParent(),e.removeFromParent(),t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:e}=this._frustum,r=e[0].constant*-e[0].normal.x,n=e[1].constant*-e[1].normal.x,s=e[2].constant*-e[2].normal.y,o=e[3].constant*-e[3].normal.y,a=Math.abs(r-n),l=Math.abs(o-s),{clientWidth:c,clientHeight:d}=this._container,u=Math.max(c,d),f=Math.max(a,l)/u,h=Math.ceil(Math.log10(a/this.scaleX)),b=Math.ceil(Math.log10(l/this.scaleY)),p=10**(h-2)*this.scaleX,v=10**(b-2)*this.scaleY,g=p*this.gridsFactor,_=v*this.gridsFactor,w=Math.ceil(l/_),x=Math.ceil(a/g),C=Math.ceil(l/v),S=Math.ceil(a/p),O=p*Math.ceil(n/p),M=v*Math.ceil(s/v),A=g*Math.ceil(n/g),z=_*Math.ceil(s/_),G=[...this.numbers.children];for(const ot of G)ot.removeFromParent();this.numbers.children=[];const E=[],R=9*f,y=1e4,j=A+this._offsetX,tt=Math.round(Math.abs(j/this.scaleX)*y)/y,H=(x-1)*g,et=Math.round(Math.abs((j+H)/this.scaleX)*y)/y,V=Math.max(tt,et).toString().length*R;let it=Math.ceil(V/g)*g;for(let ot=0;ot<x;ot++){let at=A+ot*g;E.push(at,o,0,at,s,0),at=Math.round(at*y)/y,it=Math.round(it*y)/y;const st=at%it;if(!(g<1||_<1)&&Math.abs(st)>.01)continue;const lt=this.newNumber((at+this._offsetX)/this.scaleX),vt=12*f;lt.position.set(at,s+vt,0)}for(let ot=0;ot<w;ot++){const at=z+ot*_;E.push(n,at,0,r,at,0);const st=this.newNumber(at/this.scaleY);let lt=12;st.element.textContent&&(lt+=4*st.element.textContent.length);const vt=lt*f;st.position.set(n+vt,at,0)}const L=[];for(let ot=0;ot<S;ot++){const at=O+ot*p;L.push(at,o,0,at,s,0)}for(let ot=0;ot<C;ot++){const at=M+ot*v;L.push(n,at,0,r,at,0)}const P=new $a(new Float32Array(E),3),nt=new $a(new Float32Array(L),3),{main:K,secondary:X}=this.grids;K.geometry.setAttribute("position",P),X.geometry.setAttribute("position",nt)}newNumber(t){const e=document.createElement("bim-label");e.textContent=String(Math.round(t*100)/100);const r=new a_(e);return this.numbers.add(r),r}newGrid(t){const e=new qh,r=new Gh(e,this.material);return r.frustumCulled=!1,r.renderOrder=t,r}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let e=0;e<t.length;e++){const r=t[e];if(Number.isNaN(r))return!1}return!0}}var c_=Object.defineProperty,u_=Object.getOwnPropertyDescriptor,hr=(i,t,e,r)=>{for(var n=u_(t,e),s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&c_(t,e,n),n};const Rh=class extends Ke{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const e=Number(t.replace("#","0x"));Number.isNaN(e)||this._grid.material.color.setHex(e)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const e=t.get(Hn).create();this._world=e,e.scene=new Io(t),e.scene.setup(),e.renderer=new Kh(t,this);const r=new ls(t);e.camera=r;const n=new l_(r.threeOrtho,this);this._grid=n,e.scene.three.add(n.get()),r.controls.addEventListener("update",()=>n.regenerate()),setTimeout(async()=>{e.camera.updateAspect(),r.set("Plan"),await r.controls.setLookAt(0,0,100,0,0,0),await r.projection.set("Orthographic"),r.controls.dollySpeed=3,r.controls.draggingSmoothTime=.085,r.controls.maxZoom=1e3,r.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return ma`<slot></slot>`}};Rh.styles=va`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let fr=Rh;hr([zt({type:String,attribute:"grid-color",reflect:!0})],fr.prototype,"gridColor");hr([zt({type:Number,attribute:"grid-scale-x",reflect:!0})],fr.prototype,"gridScaleX");hr([zt({type:Number,attribute:"grid-scale-y",reflect:!0})],fr.prototype,"gridScaleY");hr([zt({type:Number,attribute:"grid-offset-x",reflect:!0})],fr.prototype,"gridOffsetX");hr([zt({type:Number,attribute:"grid-offset-y",reflect:!0})],fr.prototype,"gridOffsetY");var d_=Object.defineProperty,Fe=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&d_(t,e,n),n};const Mh=class extends Ke{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new as,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
      ${this._epsilon(t[0])},
      ${this._epsilon(-t[1])},
      ${this._epsilon(t[2])},
      ${this._epsilon(t[3])},
      ${this._epsilon(t[4])},
      ${this._epsilon(-t[5])},
      ${this._epsilon(t[6])},
      ${this._epsilon(t[7])},
      ${this._epsilon(t[8])},
      ${this._epsilon(-t[9])},
      ${this._epsilon(t[10])},
      ${this._epsilon(t[11])},
      ${this._epsilon(t[12])},
      ${this._epsilon(-t[13])},
      ${this._epsilon(t[14])},
      ${this._epsilon(t[15])})
    `}render(){const t=this.size??this._defaults.size;return ma`
      <style>
        .face,
        .cube {
          width: ${t}px;
          height: ${t}px;
          transform: translateZ(-300px) ${this._cssMatrix3D};
        }

        .face-right {
          translate: ${t/2}px 0 0;
        }

        .face-left {
          translate: ${-t/2}px 0 0;
        }

        .face-top {
          translate: 0 ${t/2}px 0;
        }

        .face-bottom {
          translate: 0 ${-t/2}px 0;
        }

        .face-front {
          translate: 0 0 ${t/2}px;
        }

        .face-back {
          translate: 0 0 ${-t/2}px;
        }
      </style>
      <div class="parent">
        <div class="cube">
          <div
            class="face x-direction face-right"
            @click=${()=>this.dispatchEvent(this._onRightClick)}
          >
            ${this.rightText}
          </div>
          <div
            class="face x-direction face-left"
            @click=${()=>this.dispatchEvent(this._onLeftClick)}
          >
            ${this.leftText}
          </div>
          <div
            class="face y-direction face-top"
            @click=${()=>this.dispatchEvent(this._onTopClick)}
          >
            ${this.topText}
          </div>
          <div
            class="face y-direction face-bottom"
            @click=${()=>this.dispatchEvent(this._onBottomClick)}
          >
            ${this.bottomText}
          </div>
          <div
            class="face z-direction face-front"
            @click=${()=>this.dispatchEvent(this._onFrontClick)}
          >
            ${this.frontText}
          </div>
          <div
            class="face z-direction face-back"
            @click=${()=>this.dispatchEvent(this._onBackClick)}
          >
            ${this.backText}
          </div>
        </div>
      </div>
    `}};Mh.styles=va`
    :host {
      position: absolute;
      z-index: 999;
      bottom: 1rem;
      right: 1rem;
    }

    .parent {
      perspective: 400px;
    }

    .cube {
      position: relative;
      transform-style: preserve-3d;
    }

    .face {
      position: absolute;
      display: flex;
      justify-content: center;
      user-select: none;
      align-items: center;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s;
      color: var(--bim-view-cube--c, white);
      font-size: var(--bim-view-cube--fz, --bim-ui_size-2xl);
    }

    .x-direction {
      // background-color: var(--bim-view-cube_x--bgc, #c93830DD);
      background-color: var(--bim-view-cube_x--bgc, #01a6bcde);
    }

    .x-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .y-direction {
      // background-color: var(--bim-view-cube_y--bgc, #54ff19DD);
      background-color: var(--bim-view-cube_y--bgc, #8d0ec8de);
    }

    .y-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .z-direction {
      // background-color: var(--bim-view-cube_z--bgc, #3041c9DD);
      background-color: var(--bim-view-cube_z--bgc, #2718afde);
    }

    .z-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .face-front {
      transform: rotateX(180deg);
    }

    .face-back {
      transform: rotateZ(180deg);
    }

    .face-top {
      transform: rotateX(90deg);
    }

    .face-bottom {
      transform: rotateX(270deg);
    }

    .face-right {
      transform: rotateY(-270deg) rotateX(180deg);
    }

    .face-left {
      transform: rotateY(-90deg) rotateX(180deg);
    }
  `;let Be=Mh;Fe([zt({type:Number,reflect:!0})],Be.prototype,"size");Fe([zt({type:String,attribute:"right-text",reflect:!0})],Be.prototype,"rightText");Fe([zt({type:String,attribute:"left-text",reflect:!0})],Be.prototype,"leftText");Fe([zt({type:String,attribute:"top-text",reflect:!0})],Be.prototype,"topText");Fe([zt({type:String,attribute:"bottom-text",reflect:!0})],Be.prototype,"bottomText");Fe([zt({type:String,attribute:"front-text",reflect:!0})],Be.prototype,"frontText");Fe([zt({type:String,attribute:"back-text",reflect:!0})],Be.prototype,"backText");Fe([o_()],Be.prototype,"_cssMatrix3D");var h_=Object.defineProperty,f_=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&h_(t,e,n),n};const Dh=class extends Ke{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=Nh()}set components(t){var e;if(this._components=t,this.components){const r=this.components.get(Hn);this.world=r.create(),this.world.name=this.name}else(e=this.world)==null||e.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const e=new Io(this.components);this.world.scene=e,e.setup(),e.three.background=null;const r=new yt(this.components,t);this.world.renderer=r;const{postproduction:n}=r,s=new ls(this.components);this.world.camera=s;const o=this.components.get(Po).create(this.world);o.material.uniforms.uColor.value=new si(4342338),o.material.uniforms.uSize1.value=2,o.material.uniforms.uSize2.value=8,n.enabled=!0,n.customEffects.excludedMeshes.push(o.three),n.setPasses({custom:!0,ao:!0,gamma:!0}),n.customEffects.lineColor=1513756}render(){return ma`<bim-viewport ${W0(this._viewport)}
      ><slot></slot
    ></bim-viewport>`}};Dh.styles=va``;let p_=Dh;f_([zt({type:String,reflect:!0})],p_.prototype,"name");const m_=i=>{const t={};for(const e in i)t[e]=[...i[e]];return console.log(JSON.stringify(t)),JSON.stringify(t)},b_=i=>{const{components:t}=i,e=i.components.get(Cn),r=s=>{const o=s.get(Cn),a=[];if("CustomSelections"in o.list){const l=o.list.CustomSelections;console.log("CustomSelections for Table:",l);for(const c in l){const d=l[c].map,u={data:{Name:c,fragmentIdMap:m_(d)}};a.push(u)}}return a},n=document.createElement("bim-table");return n.headersHidden=!0,n.hiddenColumns=["fragmentIdMap"],n.dataTransform={Name:s=>(console.log("Transform value:",s),typeof s!="string"?s:J`
      <div style=" display: flex; justify-content: space-between; flex: 1; align-items: center;">
        <bim-label>${s}</bim-label>
        <bim-button @click=${()=>{"CustomSelections"in e.list&&(delete e.list.CustomSelections[s],n.data=r(i.components))}} style="flex: 0" icon="majesticons:delete-bin"></bim-button>
      </div> 
      `)},n.addEventListener("cellcreated",({detail:s})=>{const{cell:o}=s;o.style.padding="0.25rem 0"}),n.addEventListener("rowcreated",({detail:s})=>{const{row:o}=s,{fragmentIdMap:a}=o.data;if(typeof a!="string")return;const l=JSON.parse(a);if(Object.keys(l).length===0)return;const c=t.get(ji);o.onmouseover=()=>{o.style.setProperty("--bim-label--c","var(--bim-ui_accent-base)"),o.style.cursor="pointer",c.highlightByID("hover",l,!0,!1,c.selection.select)},o.onmouseleave=()=>{o.style.removeProperty("--bim-label--c"),o.style.cursor="default",c.clear("hover")},o.onclick=()=>{c.highlightByID("select",l,!0)}}),Pt.create(s=>(n.data=r(s.components),J`${n}`),i)},g_=i=>{const[t,e]=b_({components:i}),r=i.get(ji);let n,s,o;const a=[{value:"In Production",label:"In Production"},{value:"As-built",label:"As-built"},{value:"In design",label:"In design"}],l=p=>{p&&(n=p,r.events.select.onClear.add(()=>{n.style.display="none"}))};let c;const d=p=>{p&&(s=p,s.innerHTML="",a.forEach(v=>{const g=document.createElement("bim-option");g.value=v.value,g.textContent=v.label,g.addEventListener("click",()=>{console.log("Item clicked:",v.value),s.value=[v.value],c=v.value,console.log("Dropdown value set to:",s.value)}),s.appendChild(g)}),s.addEventListener("change",()=>{console.log("Dropdown changed, current value:",s.value),s.value.length===0&&c&&(console.log("Preventing unexpected reset of the value"),s.value=[c])}))},u=p=>{p&&(o=p,r.events.select.onHighlight.add(()=>{o.style.display="block"}),r.events.select.onClear.add(()=>{o.style.display="none"}))},f=async()=>{if(console.log("onSaveGroupSelection triggered"),!c){console.log("Dropdown has no value");return}const p=c;console.log("Saving selection:",p),n.style.display="none",o.style.display="none";const v=i.get(Cn);p in v.list||(v.list.CustomSelections[p]={id:null,map:r.selection.select,name:p}),console.log("Updated CustomSelections:",v.list.CustomSelections),e(),c=void 0,s.value=[],s.label="Select..."},h=()=>{console.log("onNewSelection triggered");const p=Object.keys(r.selection.select).length;n&&p!==0&&(n.style.display="flex")},b=()=>{n&&(n.style.display="none",s.value=[],s.label="Select...")};return Pt.create(()=>J`
      <bim-panel-section label="Custom Selections" icon="clarity:blocks-group-solid">
        <div ${he(l)} style="display: none; gap: 0.5rem">
          <bim-dropdown 
            ${he(d)} 
            label="Example Label" 
            .multiple=${!1}> 
          </bim-dropdown>
          <bim-button @click=${f} icon="mingcute:check-fill" style="flex: 0" label="Accept"></bim-button>
          <bim-button @click=${b} icon="mingcute:close-fill" style="flex: 0" label="Cancel"></bim-button>
        </div>
        ${t}
        <bim-button style="display: none;" ${he(u)} @click=${h} label="Save Selection"></bim-button>
      </bim-panel-section>
    `)},v_=i=>{const[t]=is.modelsList({components:i}),[e]=is.relationsTree({components:i,models:[],hoverHighlighterName:"hover",selectHighlighterName:"select"});e.preserveStructureOnFilter=!0;const r=n=>{const s=n.target;e.queryString=s.value};return Pt.create(()=>J`
      <bim-panel>
        <bim-panel-section label="Loaded Models" icon="mage:box-3d-fill">
          ${t}
        </bim-panel-section>
        <bim-panel-section label="Spatial Structures" icon="ph:tree-structure-fill">
          <div style="display: flex; gap: 0.375rem;">
            <bim-text-input @input=${r} vertical placeholder="Search..." debounce="200"></bim-text-input>
            <bim-button style="flex: 0;" @click=${()=>e.expanded=!e.expanded} icon="eva:expand-fill"></bim-button>
          </div>
          ${e}
        </bim-panel-section>
        ${g_(i)}
      </bim-panel> 
    `)};class jh extends ef{static uuid="939bb2bc-7d31-4a44-811d-68e4dd286c35";enabled=!0;grids=new Map}const y_=i=>{const t=i.get(Ft),e=i.get(ji),n=i.get(jh).grids.get("viewport"),[s,o]=is.elementProperties({components:i,fragmentIdMap:{}});s.preserveStructureOnFilter=!0,t.onFragmentsDisposed.add(()=>o()),e.events.select.onHighlight.add(c=>{n&&(n.layout="second",s.expanded=!1,o({fragmentIdMap:c}))}),e.events.select.onClear.add(()=>{o({fragmentIdMap:{}}),n&&(n.layout="main")});const a=c=>{const d=c.target;s.queryString=d.value},l=()=>{s.expanded=!s.expanded};return Pt.create(()=>J`
      <bim-panel>
        <bim-panel-section name="selection" label="Selection Information" icon="solar:document-bold" fixed>
          <div style="display: flex; gap: 0.375rem;">
            <bim-text-input @input=${a} vertical placeholder="Search..." debounce="200"></bim-text-input>
            <bim-button style="flex: 0;" @click=${l} icon="eva:expand-fill"></bim-button>
            <bim-button style="flex: 0;" @click=${()=>s.downloadData("ElementData","tsv")} icon="ph:export-fill" tooltip-title="Export Data" tooltip-text="Export the shown properties to TSV."></bim-button>
          </div>
          ${s}
        </bim-panel-section>
      </bim-panel> 
    `)},__=i=>{const t=document.querySelector("html"),e=s=>{const o=s.target;o.value===void 0||o.value===null||o.value===0?t.classList.remove("bim-ui-dark","bim-ui-light"):o.value===1?t.className="bim-ui-dark":o.value===2&&(t.className="bim-ui-light")},[r]=is.worldsConfiguration({components:i}),n=s=>{const o=s.target;r.queryString=o.value};return Pt.create(()=>J`
      <bim-panel>
        <bim-panel-section label="Aspect" icon="mage:box-3d-fill">
          <bim-selector vertical @change=${e}>
            <bim-option
              value="0"
              label="System"
              icon="majesticons:laptop"
              .checked=${!t.classList.contains("bim-ui-dark")&&!t.classList.contains("bim-ui-light")}>
            </bim-option>
            <bim-option value="1" label="Dark" icon="solar:moon-bold" .checked=${t.classList.contains("bim-ui-dark")}></bim-option>
            <bim-option value="2" label="Light" icon="solar:sun-bold" .checked=${t.classList.contains("bim-ui-light")}></bim-option>
          </bim-selector>
        </bim-panel-section>
        <bim-panel-section label="Worlds" icon="tabler:world">
          <div style="display: flex; gap: 0.375rem;">
            <bim-text-input @input=${n} vertical placeholder="Search..." debounce="200"></bim-text-input>
            <bim-button style="flex: 0;" @click=${()=>r.expanded=!r.expanded} icon="eva:expand-fill"></bim-button>
          </div>
          ${r}
        </bim-panel-section>
      </bim-panel> 
    `)};var xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function w_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function $r(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fh={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(r,n,s){function o(c,d){if(!n[c]){if(!r[c]){var u=typeof $r=="function"&&$r;if(!d&&u)return u(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var h=n[c]={exports:{}};r[c][0].call(h.exports,function(b){var p=r[c][1][b];return o(p||b)},h,h.exports,e,r,n,s)}return n[c].exports}for(var a=typeof $r=="function"&&$r,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,r,n){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(l){for(var c,d,u,f,h,b,p,v=[],g=0,_=l.length,w=_,x=s.getTypeOf(l)!=="string";g<l.length;)w=_-g,u=x?(c=l[g++],d=g<_?l[g++]:0,g<_?l[g++]:0):(c=l.charCodeAt(g++),d=g<_?l.charCodeAt(g++):0,g<_?l.charCodeAt(g++):0),f=c>>2,h=(3&c)<<4|d>>4,b=1<w?(15&d)<<2|u>>6:64,p=2<w?63&u:64,v.push(a.charAt(f)+a.charAt(h)+a.charAt(b)+a.charAt(p));return v.join("")},n.decode=function(l){var c,d,u,f,h,b,p=0,v=0,g="data:";if(l.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var _,w=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&w--,l.charAt(l.length-2)===a.charAt(64)&&w--,w%1!=0)throw new Error("Invalid base64 input, bad content length.");for(_=o.uint8array?new Uint8Array(0|w):new Array(0|w);p<l.length;)c=a.indexOf(l.charAt(p++))<<2|(f=a.indexOf(l.charAt(p++)))>>4,d=(15&f)<<4|(h=a.indexOf(l.charAt(p++)))>>2,u=(3&h)<<6|(b=a.indexOf(l.charAt(p++))),_[v++]=c,h!==64&&(_[v++]=d),b!==64&&(_[v++]=u);return _}},{"./support":30,"./utils":32}],2:[function(e,r,n){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(d,u,f,h,b){this.compressedSize=d,this.uncompressedSize=u,this.crc32=f,this.compression=h,this.compressedContent=b}c.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),u=this;return d.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(d,u,f){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(u.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",u)},r.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,r,n){var s=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,r,n){var s=e("./utils"),o=function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(c,d,u,f){var h=o,b=f+u;c^=-1;for(var p=f;p<b;p++)c=c>>>8^h[255&(c^d[p])];return-1^c}(0|l,a,a.length,0):function(c,d,u,f){var h=o,b=f+u;c^=-1;for(var p=f;p<b;p++)c=c>>>8^h[255&(c^d.charCodeAt(p))];return-1^c}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,r,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,r,n){var s=null;s=typeof Promise<"u"?Promise:e("lie"),r.exports={Promise:s}},{lie:37}],7:[function(e,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),c=s?"uint8array":"array";function d(u,f){l.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=f,this.meta={}}n.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,u.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(f){u.push({data:f,meta:u.meta})}},n.compressWorker=function(u){return new d("Deflate",u)},n.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,r,n){function s(h,b){var p,v="";for(p=0;p<b;p++)v+=String.fromCharCode(255&h),h>>>=8;return v}function o(h,b,p,v,g,_){var w,x,C=h.file,S=h.compression,O=_!==c.utf8encode,M=a.transformTo("string",_(C.name)),A=a.transformTo("string",c.utf8encode(C.name)),z=C.comment,G=a.transformTo("string",_(z)),E=a.transformTo("string",c.utf8encode(z)),R=A.length!==C.name.length,y=E.length!==z.length,j="",tt="",H="",et=C.dir,V=C.date,it={crc32:0,compressedSize:0,uncompressedSize:0};b&&!p||(it.crc32=h.crc32,it.compressedSize=h.compressedSize,it.uncompressedSize=h.uncompressedSize);var L=0;b&&(L|=8),O||!R&&!y||(L|=2048);var P=0,nt=0;et&&(P|=16),g==="UNIX"?(nt=798,P|=function(X,ot){var at=X;return X||(at=ot?16893:33204),(65535&at)<<16}(C.unixPermissions,et)):(nt=20,P|=function(X){return 63&(X||0)}(C.dosPermissions)),w=V.getUTCHours(),w<<=6,w|=V.getUTCMinutes(),w<<=5,w|=V.getUTCSeconds()/2,x=V.getUTCFullYear()-1980,x<<=4,x|=V.getUTCMonth()+1,x<<=5,x|=V.getUTCDate(),R&&(tt=s(1,1)+s(d(M),4)+A,j+="up"+s(tt.length,2)+tt),y&&(H=s(1,1)+s(d(G),4)+E,j+="uc"+s(H.length,2)+H);var K="";return K+=`
\0`,K+=s(L,2),K+=S.magic,K+=s(w,2),K+=s(x,2),K+=s(it.crc32,4),K+=s(it.compressedSize,4),K+=s(it.uncompressedSize,4),K+=s(M.length,2),K+=s(j.length,2),{fileRecord:u.LOCAL_FILE_HEADER+K+M+j,dirRecord:u.CENTRAL_FILE_HEADER+s(nt,2)+K+s(G.length,2)+"\0\0\0\0"+s(P,4)+s(v,4)+M+j+G}}var a=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),d=e("../crc32"),u=e("../signature");function f(h,b,p,v){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=b,this.zipPlatform=p,this.encodeFileName=v,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(f,l),f.prototype.push=function(h){var b=h.meta.percent||0,p=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:p?(b+100*(p-v-1))/p:100}}))},f.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var b=this.streamFiles&&!h.file.dir;if(b){var p=o(h,b,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(h){this.accumulate=!1;var b=this.streamFiles&&!h.file.dir,p=o(h,b,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),b)this.push({data:function(v){return u.DATA_DESCRIPTOR+s(v.crc32,4)+s(v.compressedSize,4)+s(v.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var h=this.bytesWritten,b=0;b<this.dirRecords.length;b++)this.push({data:this.dirRecords[b],meta:{percent:100}});var p=this.bytesWritten-h,v=function(g,_,w,x,C){var S=a.transformTo("string",C(x));return u.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(g,2)+s(g,2)+s(_,4)+s(w,4)+s(S.length,2)+S}(this.dirRecords.length,p,h,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(h){this._sources.push(h);var b=this;return h.on("data",function(p){b.processChunk(p)}),h.on("end",function(){b.closedSource(b.previous.streamInfo),b._sources.length?b.prepareNextSource():b.end()}),h.on("error",function(p){b.error(p)}),this},f.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(h){var b=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var p=0;p<b.length;p++)try{b[p].error(h)}catch{}return!0},f.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,b=0;b<h.length;b++)h[b].lock()},r.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,r,n){var s=e("../compressions"),o=e("./ZipFileWorker");n.generateWorker=function(a,l,c){var d=new o(l.streamFiles,c,l.platform,l.encodeFileName),u=0;try{a.forEach(function(f,h){u++;var b=function(_,w){var x=_||w,C=s[x];if(!C)throw new Error(x+" is not a valid compression method !");return C}(h.options.compression,l.compression),p=h.options.compressionOptions||l.compressionOptions||{},v=h.dir,g=h.date;h._compressWorker(b,p).withStreamInfo("file",{name:f,dir:v,date:g,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(d)}),d.entriesCount=u}catch(f){d.error(f)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,r,n){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,r,n){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function u(f){return new o.Promise(function(h,b){var p=f.decompressed.getContentWorker().pipe(new c);p.on("error",function(v){b(v)}).on("end",function(){p.streamInfo.crc32!==f.decompressed.crc32?b(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}r.exports=function(f,h){var b=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(f)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",f,!0,h.optimizedBinaryString,h.base64).then(function(p){var v=new l(h);return v.load(p),v}).then(function(p){var v=[o.Promise.resolve(p)],g=p.files;if(h.checkCRC32)for(var _=0;_<g.length;_++)v.push(u(g[_]));return o.Promise.all(v)}).then(function(p){for(var v=p.shift(),g=v.files,_=0;_<g.length;_++){var w=g[_],x=w.fileNameStr,C=s.resolve(w.fileNameStr);b.file(C,w.decompressed,{binary:!0,optimizedBinaryString:!0,date:w.date,dir:w.dir,comment:w.fileCommentStr.length?w.fileCommentStr:null,unixPermissions:w.unixPermissions,dosPermissions:w.dosPermissions,createFolders:h.createFolders}),w.dir||(b.file(C).unsafeOriginalName=x)}return v.zipComment.length&&(b.comment=v.zipComment),b})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,r,n){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(d){c.push({data:d,meta:{percent:0}})}).on("error",function(d){c.isPaused?this.generatedError=d:c.error(d)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,r,n){var s=e("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var d=this;a.on("data",function(u,f){d.push(u)||d._helper.pause(),c&&c(f)}).on("error",function(u){d.emit("error",u)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,r,n){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,r,n){function s(C,S,O){var M,A=a.getTypeOf(S),z=a.extend(O||{},d);z.date=z.date||new Date,z.compression!==null&&(z.compression=z.compression.toUpperCase()),typeof z.unixPermissions=="string"&&(z.unixPermissions=parseInt(z.unixPermissions,8)),z.unixPermissions&&16384&z.unixPermissions&&(z.dir=!0),z.dosPermissions&&16&z.dosPermissions&&(z.dir=!0),z.dir&&(C=g(C)),z.createFolders&&(M=v(C))&&_.call(this,M,!0);var G=A==="string"&&z.binary===!1&&z.base64===!1;O&&O.binary!==void 0||(z.binary=!G),(S instanceof u&&S.uncompressedSize===0||z.dir||!S||S.length===0)&&(z.base64=!1,z.binary=!0,S="",z.compression="STORE",A="string");var E=null;E=S instanceof u||S instanceof l?S:b.isNode&&b.isStream(S)?new p(C,S):a.prepareContent(C,S,z.binary,z.optimizedBinaryString,z.base64);var R=new f(C,E,z);this.files[C]=R}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),d=e("./defaults"),u=e("./compressedObject"),f=e("./zipObject"),h=e("./generate"),b=e("./nodejsUtils"),p=e("./nodejs/NodejsStreamInputAdapter"),v=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var S=C.lastIndexOf("/");return 0<S?C.substring(0,S):""},g=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},_=function(C,S){return S=S!==void 0?S:d.createFolders,C=g(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:S}),this.files[C]};function w(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var x={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var S,O,M;for(S in this.files)M=this.files[S],(O=S.slice(this.root.length,S.length))&&S.slice(0,this.root.length)===this.root&&C(O,M)},filter:function(C){var S=[];return this.forEach(function(O,M){C(O,M)&&S.push(M)}),S},file:function(C,S,O){if(arguments.length!==1)return C=this.root+C,s.call(this,C,S,O),this;if(w(C)){var M=C;return this.filter(function(z,G){return!G.dir&&M.test(z)})}var A=this.files[this.root+C];return A&&!A.dir?A:null},folder:function(C){if(!C)return this;if(w(C))return this.filter(function(A,z){return z.dir&&C.test(A)});var S=this.root+C,O=_.call(this,S),M=this.clone();return M.root=O.name,M},remove:function(C){C=this.root+C;var S=this.files[C];if(S||(C.slice(-1)!=="/"&&(C+="/"),S=this.files[C]),S&&!S.dir)delete this.files[C];else for(var O=this.filter(function(A,z){return z.name.slice(0,C.length)===C}),M=0;M<O.length;M++)delete this.files[O[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var S,O={};try{if((O=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");a.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var M=O.comment||this.comment||"";S=h.generateWorker(this,O,M)}catch(A){(S=new l("error")).error(A)}return new c(S,O.type||"string",O.mimeType)},generateAsync:function(C,S){return this.generateInternalStream(C).accumulate(S)},generateNodeStream:function(C,S){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(S)}};r.exports=x},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,r,n){r.exports=e("stream")},{stream:void 0}],17:[function(e,r,n){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),u=a.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===l&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===u)return f-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),u=a.charCodeAt(3),f=this.readData(4);return l===f[0]&&c===f[1]&&d===f[2]&&u===f[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,r,n){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=o},{"../utils":32}],19:[function(e,r,n){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,r,n){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,r,n){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,r,n){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");r.exports=function(u){var f=s.getTypeOf(u);return s.checkSupport(f),f!=="string"||o.uint8array?f==="nodebuffer"?new c(u):o.uint8array?new d(s.transformTo("uint8array",u)):new a(s.transformTo("array",u)):new l(u)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,r,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,r,n){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,r,n){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,r,n){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,r,n){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){c.dataIsReady=!0,c.data=d,c.max=d&&d.length||0,c.type=s.getTypeOf(d),c.isPaused||c._tickAndRepeat()},function(d){c.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,r,n){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=s},{}],29:[function(e,r,n){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),c=e("../support"),d=e("../external"),u=null;if(c.nodestream)try{u=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(b,p){return new d.Promise(function(v,g){var _=[],w=b._internalType,x=b._outputType,C=b._mimeType;b.on("data",function(S,O){_.push(S),p&&p(O)}).on("error",function(S){_=[],g(S)}).on("end",function(){try{var S=function(O,M,A){switch(O){case"blob":return s.newBlob(s.transformTo("arraybuffer",M),A);case"base64":return l.encode(M);default:return s.transformTo(O,M)}}(x,function(O,M){var A,z=0,G=null,E=0;for(A=0;A<M.length;A++)E+=M[A].length;switch(O){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(G=new Uint8Array(E),A=0;A<M.length;A++)G.set(M[A],z),z+=M[A].length;return G;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+O+"'")}}(w,_),C);v(S)}catch(O){g(O)}_=[]}).resume()})}function h(b,p,v){var g=p;switch(p){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=p,this._mimeType=v,s.checkSupport(g),this._worker=b.pipe(new o(g)),b.lock()}catch(_){this._worker=new a("error"),this._worker.error(_)}}h.prototype={accumulate:function(b){return f(this,b)},on:function(b,p){var v=this;return b==="data"?this._worker.on(b,function(g){p.call(v,g.data,g.meta)}):this._worker.on(b,function(){s.delay(p,arguments,v)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(b){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},b)}},r.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,r,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var s=new ArrayBuffer(0);try{n.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),n.blob=o.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,r,n){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),d=0;d<256;d++)c[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;c[254]=c[254]=1;function u(){l.call(this,"utf-8 decode"),this.leftOver=null}function f(){l.call(this,"utf-8 encode")}n.utf8encode=function(h){return o.nodebuffer?a.newBufferFrom(h,"utf-8"):function(b){var p,v,g,_,w,x=b.length,C=0;for(_=0;_<x;_++)(64512&(v=b.charCodeAt(_)))==55296&&_+1<x&&(64512&(g=b.charCodeAt(_+1)))==56320&&(v=65536+(v-55296<<10)+(g-56320),_++),C+=v<128?1:v<2048?2:v<65536?3:4;for(p=o.uint8array?new Uint8Array(C):new Array(C),_=w=0;w<C;_++)(64512&(v=b.charCodeAt(_)))==55296&&_+1<x&&(64512&(g=b.charCodeAt(_+1)))==56320&&(v=65536+(v-55296<<10)+(g-56320),_++),v<128?p[w++]=v:(v<2048?p[w++]=192|v>>>6:(v<65536?p[w++]=224|v>>>12:(p[w++]=240|v>>>18,p[w++]=128|v>>>12&63),p[w++]=128|v>>>6&63),p[w++]=128|63&v);return p}(h)},n.utf8decode=function(h){return o.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):function(b){var p,v,g,_,w=b.length,x=new Array(2*w);for(p=v=0;p<w;)if((g=b[p++])<128)x[v++]=g;else if(4<(_=c[g]))x[v++]=65533,p+=_-1;else{for(g&=_===2?31:_===3?15:7;1<_&&p<w;)g=g<<6|63&b[p++],_--;1<_?x[v++]=65533:g<65536?x[v++]=g:(g-=65536,x[v++]=55296|g>>10&1023,x[v++]=56320|1023&g)}return x.length!==v&&(x.subarray?x=x.subarray(0,v):x.length=v),s.applyFromCharCode(x)}(h=s.transformTo(o.uint8array?"uint8array":"array",h))},s.inherits(u,l),u.prototype.processChunk=function(h){var b=s.transformTo(o.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var p=b;(b=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),b.set(p,this.leftOver.length)}else b=this.leftOver.concat(b);this.leftOver=null}var v=function(_,w){var x;for((w=w||_.length)>_.length&&(w=_.length),x=w-1;0<=x&&(192&_[x])==128;)x--;return x<0||x===0?w:x+c[_[x]]>w?x:w}(b),g=b;v!==b.length&&(o.uint8array?(g=b.subarray(0,v),this.leftOver=b.subarray(v,b.length)):(g=b.slice(0,v),this.leftOver=b.slice(v,b.length))),this.push({data:n.utf8decode(g),meta:h.meta})},u.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=u,s.inherits(f,l),f.prototype.processChunk=function(h){this.push({data:n.utf8encode(h.data),meta:h.meta})},n.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,r,n){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function c(p){return p}function d(p,v){for(var g=0;g<p.length;++g)v[g]=255&p.charCodeAt(g);return v}e("setimmediate"),n.newBlob=function(p,v){n.checkSupport("blob");try{return new Blob([p],{type:v})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(p),g.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var u={stringifyByChunk:function(p,v,g){var _=[],w=0,x=p.length;if(x<=g)return String.fromCharCode.apply(null,p);for(;w<x;)v==="array"||v==="nodebuffer"?_.push(String.fromCharCode.apply(null,p.slice(w,Math.min(w+g,x)))):_.push(String.fromCharCode.apply(null,p.subarray(w,Math.min(w+g,x)))),w+=g;return _.join("")},stringifyByChar:function(p){for(var v="",g=0;g<p.length;g++)v+=String.fromCharCode(p[g]);return v},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function f(p){var v=65536,g=n.getTypeOf(p),_=!0;if(g==="uint8array"?_=u.applyCanBeUsed.uint8array:g==="nodebuffer"&&(_=u.applyCanBeUsed.nodebuffer),_)for(;1<v;)try{return u.stringifyByChunk(p,g,v)}catch{v=Math.floor(v/2)}return u.stringifyByChar(p)}function h(p,v){for(var g=0;g<p.length;g++)v[g]=p[g];return v}n.applyFromCharCode=f;var b={};b.string={string:c,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return b.string.uint8array(p).buffer},uint8array:function(p){return d(p,new Uint8Array(p.length))},nodebuffer:function(p){return d(p,a.allocBuffer(p.length))}},b.array={string:f,array:c,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(p)}},b.arraybuffer={string:function(p){return f(new Uint8Array(p))},array:function(p){return h(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:c,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(new Uint8Array(p))}},b.uint8array={string:f,array:function(p){return h(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:c,nodebuffer:function(p){return a.newBufferFrom(p)}},b.nodebuffer={string:f,array:function(p){return h(p,new Array(p.length))},arraybuffer:function(p){return b.nodebuffer.uint8array(p).buffer},uint8array:function(p){return h(p,new Uint8Array(p.length))},nodebuffer:c},n.transformTo=function(p,v){if(v=v||"",!p)return v;n.checkSupport(p);var g=n.getTypeOf(v);return b[g][p](v)},n.resolve=function(p){for(var v=p.split("/"),g=[],_=0;_<v.length;_++){var w=v[_];w==="."||w===""&&_!==0&&_!==v.length-1||(w===".."?g.pop():g.push(w))}return g.join("/")},n.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(p)?"nodebuffer":s.uint8array&&p instanceof Uint8Array?"uint8array":s.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(p){if(!s[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(p){var v,g,_="";for(g=0;g<(p||"").length;g++)_+="\\x"+((v=p.charCodeAt(g))<16?"0":"")+v.toString(16).toUpperCase();return _},n.delay=function(p,v,g){setImmediate(function(){p.apply(g||null,v||[])})},n.inherits=function(p,v){function g(){}g.prototype=v.prototype,p.prototype=new g},n.extend=function(){var p,v,g={};for(p=0;p<arguments.length;p++)for(v in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],v)&&g[v]===void 0&&(g[v]=arguments[p][v]);return g},n.prepareContent=function(p,v,g,_,w){return l.Promise.resolve(v).then(function(x){return s.blob&&(x instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(x))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,S){var O=new FileReader;O.onload=function(M){C(M.target.result)},O.onerror=function(M){S(M.target.error)},O.readAsArrayBuffer(x)}):x}).then(function(x){var C=n.getTypeOf(x);return C?(C==="arraybuffer"?x=n.transformTo("uint8array",x):C==="string"&&(w?x=o.decode(x):g&&_!==!0&&(x=function(S){return d(S,s.uint8array?new Uint8Array(S.length):new Array(S.length))}(x))),x):l.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,r,n){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),c=e("./support");function d(u){this.files=[],this.loadOptions=u}d.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(f)+", expected "+o.pretty(u)+")")}},isSignature:function(u,f){var h=this.reader.index;this.reader.setIndex(u);var b=this.reader.readString(4)===f;return this.reader.setIndex(h),b},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),f=c.uint8array?"uint8array":"array",h=o.transformTo(f,u);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u,f,h,b=this.zip64EndOfCentralSize-44;0<b;)u=this.reader.readInt(2),f=this.reader.readInt(4),h=this.reader.readData(f),this.zip64ExtensibleData[u]={id:u,length:f,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,f;for(u=0;u<this.files.length;u++)f=this.files[u],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(u=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(u<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(u);var f=u;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(u=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var b=f-h;if(0<b)this.isSignature(f,a.CENTRAL_FILE_HEADER)||(this.reader.zero=b);else if(b<0)throw new Error("Corrupted zip: missing "+Math.abs(b)+" bytes.")},prepareReader:function(u){this.reader=s(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,r,n){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),d=e("./compressions"),u=e("./support");function f(h,b){this.options=h,this.loadOptions=b}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var b,p;if(h.skip(22),this.fileNameLength=h.readInt(2),p=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((b=function(v){for(var g in d)if(Object.prototype.hasOwnProperty.call(d,g)&&d[g].magic===v)return d[g];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,b,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var b=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(b),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var b,p,v,g=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<g;)b=h.readInt(2),p=h.readInt(2),v=h.readData(p),this.extraFields[b]={id:b,length:p,value:v};h.setIndex(g)},handleUTF8:function(){var h=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var b=this.findExtraFieldUnicodePath();if(b!==null)this.fileNameStr=b;else{var p=o.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var g=o.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var b=s(h.value);return b.readInt(1)!==1||l(this.fileName)!==b.readInt(4)?null:c.utf8decode(b.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var b=s(h.value);return b.readInt(1)!==1||l(this.fileComment)!==b.readInt(4)?null:c.utf8decode(b.readData(h.length-5))}return null}},r.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,r,n){function s(b,p,v){this.name=b,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=p,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(b){var p=null,v="string";try{if(!b)throw new Error("No output type specified.");var g=(v=b.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),p=this._decompressWorker();var _=!this._dataBinary;_&&!g&&(p=p.pipe(new l.Utf8EncodeWorker)),!_&&g&&(p=p.pipe(new l.Utf8DecodeWorker))}catch(w){(p=new d("error")).error(w)}return new o(p,v,"")},async:function(b,p){return this.internalStream(b).accumulate(p)},nodeStream:function(b,p){return this.internalStream(b||"nodebuffer").toNodejsStream(p)},_compressWorker:function(b,p){if(this._data instanceof c&&this._data.compression.magic===b.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(v,b,p)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<u.length;h++)s.prototype[u[h]]=f;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,r,n){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,d=new l(b),u=s.document.createTextNode("");d.observe(u,{characterData:!0}),o=function(){u.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var p=s.document.createElement("script");p.onreadystatechange=function(){b(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},s.document.documentElement.appendChild(p)}:function(){setTimeout(b,0)};else{var f=new s.MessageChannel;f.port1.onmessage=b,o=function(){f.port2.postMessage(0)}}var h=[];function b(){var p,v;a=!0;for(var g=h.length;g;){for(v=h,h=[],p=-1;++p<g;)v[p]();g=h.length}a=!1}r.exports=function(p){h.push(p)!==1||a||o()}}).call(this,typeof xr<"u"?xr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,r,n){var s=e("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],d=["PENDING"];function u(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,g!==o&&p(this,g)}function f(g,_,w){this.promise=g,typeof _=="function"&&(this.onFulfilled=_,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function h(g,_,w){s(function(){var x;try{x=_(w)}catch(C){return a.reject(g,C)}x===g?a.reject(g,new TypeError("Cannot resolve promise with itself")):a.resolve(g,x)})}function b(g){var _=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof _=="function")return function(){_.apply(g,arguments)}}function p(g,_){var w=!1;function x(O){w||(w=!0,a.reject(g,O))}function C(O){w||(w=!0,a.resolve(g,O))}var S=v(function(){_(C,x)});S.status==="error"&&x(S.value)}function v(g,_){var w={};try{w.value=g(_),w.status="success"}catch(x){w.status="error",w.value=x}return w}(r.exports=u).prototype.finally=function(g){if(typeof g!="function")return this;var _=this.constructor;return this.then(function(w){return _.resolve(g()).then(function(){return w})},function(w){return _.resolve(g()).then(function(){throw w})})},u.prototype.catch=function(g){return this.then(null,g)},u.prototype.then=function(g,_){if(typeof g!="function"&&this.state===c||typeof _!="function"&&this.state===l)return this;var w=new this.constructor(o);return this.state!==d?h(w,this.state===c?g:_,this.outcome):this.queue.push(new f(w,g,_)),w},f.prototype.callFulfilled=function(g){a.resolve(this.promise,g)},f.prototype.otherCallFulfilled=function(g){h(this.promise,this.onFulfilled,g)},f.prototype.callRejected=function(g){a.reject(this.promise,g)},f.prototype.otherCallRejected=function(g){h(this.promise,this.onRejected,g)},a.resolve=function(g,_){var w=v(b,_);if(w.status==="error")return a.reject(g,w.value);var x=w.value;if(x)p(g,x);else{g.state=c,g.outcome=_;for(var C=-1,S=g.queue.length;++C<S;)g.queue[C].callFulfilled(_)}return g},a.reject=function(g,_){g.state=l,g.outcome=_;for(var w=-1,x=g.queue.length;++w<x;)g.queue[w].callRejected(_);return g},u.resolve=function(g){return g instanceof this?g:a.resolve(new this(o),g)},u.reject=function(g){var _=new this(o);return a.reject(_,g)},u.all=function(g){var _=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=g.length,x=!1;if(!w)return this.resolve([]);for(var C=new Array(w),S=0,O=-1,M=new this(o);++O<w;)A(g[O],O);return M;function A(z,G){_.resolve(z).then(function(E){C[G]=E,++S!==w||x||(x=!0,a.resolve(M,C))},function(E){x||(x=!0,a.reject(M,E))})}},u.race=function(g){var _=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=g.length,x=!1;if(!w)return this.resolve([]);for(var C=-1,S=new this(o);++C<w;)O=g[C],_.resolve(O).then(function(M){x||(x=!0,a.resolve(S,M))},function(M){x||(x=!0,a.reject(S,M))});var O;return S}},{immediate:36}],38:[function(e,r,n){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,r,n){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),d=Object.prototype.toString,u=0,f=-1,h=0,b=8;function p(g){if(!(this instanceof p))return new p(g);this.options=o.assign({level:f,method:b,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},g||{});var _=this.options;_.raw&&0<_.windowBits?_.windowBits=-_.windowBits:_.gzip&&0<_.windowBits&&_.windowBits<16&&(_.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var w=s.deflateInit2(this.strm,_.level,_.method,_.windowBits,_.memLevel,_.strategy);if(w!==u)throw new Error(l[w]);if(_.header&&s.deflateSetHeader(this.strm,_.header),_.dictionary){var x;if(x=typeof _.dictionary=="string"?a.string2buf(_.dictionary):d.call(_.dictionary)==="[object ArrayBuffer]"?new Uint8Array(_.dictionary):_.dictionary,(w=s.deflateSetDictionary(this.strm,x))!==u)throw new Error(l[w]);this._dict_set=!0}}function v(g,_){var w=new p(_);if(w.push(g,!0),w.err)throw w.msg||l[w.err];return w.result}p.prototype.push=function(g,_){var w,x,C=this.strm,S=this.options.chunkSize;if(this.ended)return!1;x=_===~~_?_:_===!0?4:0,typeof g=="string"?C.input=a.string2buf(g):d.call(g)==="[object ArrayBuffer]"?C.input=new Uint8Array(g):C.input=g,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(S),C.next_out=0,C.avail_out=S),(w=s.deflate(C,x))!==1&&w!==u)return this.onEnd(w),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||x!==4&&x!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&w!==1);return x===4?(w=s.deflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===u):x!==2||(this.onEnd(u),!(C.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===u&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},n.Deflate=p,n.deflate=v,n.deflateRaw=function(g,_){return(_=_||{}).raw=!0,v(g,_)},n.gzip=function(g,_){return(_=_||{}).gzip=!0,v(g,_)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,r,n){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),d=e("./zlib/zstream"),u=e("./zlib/gzheader"),f=Object.prototype.toString;function h(p){if(!(this instanceof h))return new h(p);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},p||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||p&&p.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&!(15&v.windowBits)&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var g=s.inflateInit2(this.strm,v.windowBits);if(g!==l.Z_OK)throw new Error(c[g]);this.header=new u,s.inflateGetHeader(this.strm,this.header)}function b(p,v){var g=new h(v);if(g.push(p,!0),g.err)throw g.msg||c[g.err];return g.result}h.prototype.push=function(p,v){var g,_,w,x,C,S,O=this.strm,M=this.options.chunkSize,A=this.options.dictionary,z=!1;if(this.ended)return!1;_=v===~~v?v:v===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof p=="string"?O.input=a.binstring2buf(p):f.call(p)==="[object ArrayBuffer]"?O.input=new Uint8Array(p):O.input=p,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new o.Buf8(M),O.next_out=0,O.avail_out=M),(g=s.inflate(O,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&A&&(S=typeof A=="string"?a.string2buf(A):f.call(A)==="[object ArrayBuffer]"?new Uint8Array(A):A,g=s.inflateSetDictionary(this.strm,S)),g===l.Z_BUF_ERROR&&z===!0&&(g=l.Z_OK,z=!1),g!==l.Z_STREAM_END&&g!==l.Z_OK)return this.onEnd(g),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&g!==l.Z_STREAM_END&&(O.avail_in!==0||_!==l.Z_FINISH&&_!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(w=a.utf8border(O.output,O.next_out),x=O.next_out-w,C=a.buf2string(O.output,w),O.next_out=x,O.avail_out=M-x,x&&o.arraySet(O.output,O.output,w,x,0),this.onData(C)):this.onData(o.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(z=!0)}while((0<O.avail_in||O.avail_out===0)&&g!==l.Z_STREAM_END);return g===l.Z_STREAM_END&&(_=l.Z_FINISH),_===l.Z_FINISH?(g=s.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===l.Z_OK):_!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(O.avail_out=0))},h.prototype.onData=function(p){this.chunks.push(p)},h.prototype.onEnd=function(p){p===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},n.Inflate=h,n.inflate=b,n.inflateRaw=function(p,v){return(v=v||{}).raw=!0,b(p,v)},n.ungzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var d=c.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var u in d)d.hasOwnProperty(u)&&(l[u]=d[u])}}return l},n.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,d,u,f){if(c.subarray&&l.subarray)l.set(c.subarray(d,d+u),f);else for(var h=0;h<u;h++)l[f+h]=c[d+h]},flattenChunks:function(l){var c,d,u,f,h,b;for(c=u=0,d=l.length;c<d;c++)u+=l[c].length;for(b=new Uint8Array(u),c=f=0,d=l.length;c<d;c++)h=l[c],b.set(h,f),f+=h.length;return b}},a={arraySet:function(l,c,d,u,f){for(var h=0;h<u;h++)l[f+h]=c[d+h]},flattenChunks:function(l){return[].concat.apply([],l)}};n.setTyped=function(l){l?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(s)},{}],42:[function(e,r,n){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function d(u,f){if(f<65537&&(u.subarray&&a||!u.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(u,f));for(var h="",b=0;b<f;b++)h+=String.fromCharCode(u[b]);return h}l[254]=l[254]=1,n.string2buf=function(u){var f,h,b,p,v,g=u.length,_=0;for(p=0;p<g;p++)(64512&(h=u.charCodeAt(p)))==55296&&p+1<g&&(64512&(b=u.charCodeAt(p+1)))==56320&&(h=65536+(h-55296<<10)+(b-56320),p++),_+=h<128?1:h<2048?2:h<65536?3:4;for(f=new s.Buf8(_),p=v=0;v<_;p++)(64512&(h=u.charCodeAt(p)))==55296&&p+1<g&&(64512&(b=u.charCodeAt(p+1)))==56320&&(h=65536+(h-55296<<10)+(b-56320),p++),h<128?f[v++]=h:(h<2048?f[v++]=192|h>>>6:(h<65536?f[v++]=224|h>>>12:(f[v++]=240|h>>>18,f[v++]=128|h>>>12&63),f[v++]=128|h>>>6&63),f[v++]=128|63&h);return f},n.buf2binstring=function(u){return d(u,u.length)},n.binstring2buf=function(u){for(var f=new s.Buf8(u.length),h=0,b=f.length;h<b;h++)f[h]=u.charCodeAt(h);return f},n.buf2string=function(u,f){var h,b,p,v,g=f||u.length,_=new Array(2*g);for(h=b=0;h<g;)if((p=u[h++])<128)_[b++]=p;else if(4<(v=l[p]))_[b++]=65533,h+=v-1;else{for(p&=v===2?31:v===3?15:7;1<v&&h<g;)p=p<<6|63&u[h++],v--;1<v?_[b++]=65533:p<65536?_[b++]=p:(p-=65536,_[b++]=55296|p>>10&1023,_[b++]=56320|1023&p)}return d(_,b)},n.utf8border=function(u,f){var h;for((f=f||u.length)>u.length&&(f=u.length),h=f-1;0<=h&&(192&u[h])==128;)h--;return h<0||h===0?f:h+l[u[h]]>f?h:f}},{"./common":41}],43:[function(e,r,n){r.exports=function(s,o,a,l){for(var c=65535&s|0,d=s>>>16&65535|0,u=0;a!==0;){for(a-=u=2e3<a?2e3:a;d=d+(c=c+o[l++]|0)|0,--u;);c%=65521,d%=65521}return c|d<<16|0}},{}],44:[function(e,r,n){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,r,n){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();r.exports=function(o,a,l,c){var d=s,u=c+l;o^=-1;for(var f=c;f<u;f++)o=o>>>8^d[255&(o^a[f])];return-1^o}},{}],46:[function(e,r,n){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),c=e("./crc32"),d=e("./messages"),u=0,f=4,h=0,b=-2,p=-1,v=4,g=2,_=8,w=9,x=286,C=30,S=19,O=2*x+1,M=15,A=3,z=258,G=z+A+1,E=42,R=113,y=1,j=2,tt=3,H=4;function et(m,U){return m.msg=d[U],U}function V(m){return(m<<1)-(4<m?9:0)}function it(m){for(var U=m.length;0<=--U;)m[U]=0}function L(m){var U=m.state,D=U.pending;D>m.avail_out&&(D=m.avail_out),D!==0&&(o.arraySet(m.output,U.pending_buf,U.pending_out,D,m.next_out),m.next_out+=D,U.pending_out+=D,m.total_out+=D,m.avail_out-=D,U.pending-=D,U.pending===0&&(U.pending_out=0))}function P(m,U){a._tr_flush_block(m,0<=m.block_start?m.block_start:-1,m.strstart-m.block_start,U),m.block_start=m.strstart,L(m.strm)}function nt(m,U){m.pending_buf[m.pending++]=U}function K(m,U){m.pending_buf[m.pending++]=U>>>8&255,m.pending_buf[m.pending++]=255&U}function X(m,U){var D,k,$=m.max_chain_length,T=m.strstart,W=m.prev_length,q=m.nice_match,I=m.strstart>m.w_size-G?m.strstart-(m.w_size-G):0,Y=m.window,Q=m.w_mask,Z=m.prev,rt=m.strstart+z,bt=Y[T+W-1],ct=Y[T+W];m.prev_length>=m.good_match&&($>>=2),q>m.lookahead&&(q=m.lookahead);do if(Y[(D=U)+W]===ct&&Y[D+W-1]===bt&&Y[D]===Y[T]&&Y[++D]===Y[T+1]){T+=2,D++;do;while(Y[++T]===Y[++D]&&Y[++T]===Y[++D]&&Y[++T]===Y[++D]&&Y[++T]===Y[++D]&&Y[++T]===Y[++D]&&Y[++T]===Y[++D]&&Y[++T]===Y[++D]&&Y[++T]===Y[++D]&&T<rt);if(k=z-(rt-T),T=rt-z,W<k){if(m.match_start=U,q<=(W=k))break;bt=Y[T+W-1],ct=Y[T+W]}}while((U=Z[U&Q])>I&&--$!=0);return W<=m.lookahead?W:m.lookahead}function ot(m){var U,D,k,$,T,W,q,I,Y,Q,Z=m.w_size;do{if($=m.window_size-m.lookahead-m.strstart,m.strstart>=Z+(Z-G)){for(o.arraySet(m.window,m.window,Z,Z,0),m.match_start-=Z,m.strstart-=Z,m.block_start-=Z,U=D=m.hash_size;k=m.head[--U],m.head[U]=Z<=k?k-Z:0,--D;);for(U=D=Z;k=m.prev[--U],m.prev[U]=Z<=k?k-Z:0,--D;);$+=Z}if(m.strm.avail_in===0)break;if(W=m.strm,q=m.window,I=m.strstart+m.lookahead,Y=$,Q=void 0,Q=W.avail_in,Y<Q&&(Q=Y),D=Q===0?0:(W.avail_in-=Q,o.arraySet(q,W.input,W.next_in,Q,I),W.state.wrap===1?W.adler=l(W.adler,q,Q,I):W.state.wrap===2&&(W.adler=c(W.adler,q,Q,I)),W.next_in+=Q,W.total_in+=Q,Q),m.lookahead+=D,m.lookahead+m.insert>=A)for(T=m.strstart-m.insert,m.ins_h=m.window[T],m.ins_h=(m.ins_h<<m.hash_shift^m.window[T+1])&m.hash_mask;m.insert&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[T+A-1])&m.hash_mask,m.prev[T&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=T,T++,m.insert--,!(m.lookahead+m.insert<A)););}while(m.lookahead<G&&m.strm.avail_in!==0)}function at(m,U){for(var D,k;;){if(m.lookahead<G){if(ot(m),m.lookahead<G&&U===u)return y;if(m.lookahead===0)break}if(D=0,m.lookahead>=A&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+A-1])&m.hash_mask,D=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),D!==0&&m.strstart-D<=m.w_size-G&&(m.match_length=X(m,D)),m.match_length>=A)if(k=a._tr_tally(m,m.strstart-m.match_start,m.match_length-A),m.lookahead-=m.match_length,m.match_length<=m.max_lazy_match&&m.lookahead>=A){for(m.match_length--;m.strstart++,m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+A-1])&m.hash_mask,D=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart,--m.match_length!=0;);m.strstart++}else m.strstart+=m.match_length,m.match_length=0,m.ins_h=m.window[m.strstart],m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+1])&m.hash_mask;else k=a._tr_tally(m,0,m.window[m.strstart]),m.lookahead--,m.strstart++;if(k&&(P(m,!1),m.strm.avail_out===0))return y}return m.insert=m.strstart<A-1?m.strstart:A-1,U===f?(P(m,!0),m.strm.avail_out===0?tt:H):m.last_lit&&(P(m,!1),m.strm.avail_out===0)?y:j}function st(m,U){for(var D,k,$;;){if(m.lookahead<G){if(ot(m),m.lookahead<G&&U===u)return y;if(m.lookahead===0)break}if(D=0,m.lookahead>=A&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+A-1])&m.hash_mask,D=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),m.prev_length=m.match_length,m.prev_match=m.match_start,m.match_length=A-1,D!==0&&m.prev_length<m.max_lazy_match&&m.strstart-D<=m.w_size-G&&(m.match_length=X(m,D),m.match_length<=5&&(m.strategy===1||m.match_length===A&&4096<m.strstart-m.match_start)&&(m.match_length=A-1)),m.prev_length>=A&&m.match_length<=m.prev_length){for($=m.strstart+m.lookahead-A,k=a._tr_tally(m,m.strstart-1-m.prev_match,m.prev_length-A),m.lookahead-=m.prev_length-1,m.prev_length-=2;++m.strstart<=$&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+A-1])&m.hash_mask,D=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),--m.prev_length!=0;);if(m.match_available=0,m.match_length=A-1,m.strstart++,k&&(P(m,!1),m.strm.avail_out===0))return y}else if(m.match_available){if((k=a._tr_tally(m,0,m.window[m.strstart-1]))&&P(m,!1),m.strstart++,m.lookahead--,m.strm.avail_out===0)return y}else m.match_available=1,m.strstart++,m.lookahead--}return m.match_available&&(k=a._tr_tally(m,0,m.window[m.strstart-1]),m.match_available=0),m.insert=m.strstart<A-1?m.strstart:A-1,U===f?(P(m,!0),m.strm.avail_out===0?tt:H):m.last_lit&&(P(m,!1),m.strm.avail_out===0)?y:j}function lt(m,U,D,k,$){this.good_length=m,this.max_lazy=U,this.nice_length=D,this.max_chain=k,this.func=$}function vt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*O),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*S+1)),it(this.dyn_ltree),it(this.dyn_dtree),it(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(M+1),this.heap=new o.Buf16(2*x+1),it(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*x+1),it(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function _t(m){var U;return m&&m.state?(m.total_in=m.total_out=0,m.data_type=g,(U=m.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?E:R,m.adler=U.wrap===2?0:1,U.last_flush=u,a._tr_init(U),h):et(m,b)}function ee(m){var U=_t(m);return U===h&&function(D){D.window_size=2*D.w_size,it(D.head),D.max_lazy_match=s[D.level].max_lazy,D.good_match=s[D.level].good_length,D.nice_match=s[D.level].nice_length,D.max_chain_length=s[D.level].max_chain,D.strstart=0,D.block_start=0,D.lookahead=0,D.insert=0,D.match_length=D.prev_length=A-1,D.match_available=0,D.ins_h=0}(m.state),U}function Xt(m,U,D,k,$,T){if(!m)return b;var W=1;if(U===p&&(U=6),k<0?(W=0,k=-k):15<k&&(W=2,k-=16),$<1||w<$||D!==_||k<8||15<k||U<0||9<U||T<0||v<T)return et(m,b);k===8&&(k=9);var q=new vt;return(m.state=q).strm=m,q.wrap=W,q.gzhead=null,q.w_bits=k,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=$+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+A-1)/A),q.window=new o.Buf8(2*q.w_size),q.head=new o.Buf16(q.hash_size),q.prev=new o.Buf16(q.w_size),q.lit_bufsize=1<<$+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new o.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=U,q.strategy=T,q.method=D,ee(m)}s=[new lt(0,0,0,0,function(m,U){var D=65535;for(D>m.pending_buf_size-5&&(D=m.pending_buf_size-5);;){if(m.lookahead<=1){if(ot(m),m.lookahead===0&&U===u)return y;if(m.lookahead===0)break}m.strstart+=m.lookahead,m.lookahead=0;var k=m.block_start+D;if((m.strstart===0||m.strstart>=k)&&(m.lookahead=m.strstart-k,m.strstart=k,P(m,!1),m.strm.avail_out===0)||m.strstart-m.block_start>=m.w_size-G&&(P(m,!1),m.strm.avail_out===0))return y}return m.insert=0,U===f?(P(m,!0),m.strm.avail_out===0?tt:H):(m.strstart>m.block_start&&(P(m,!1),m.strm.avail_out),y)}),new lt(4,4,8,4,at),new lt(4,5,16,8,at),new lt(4,6,32,32,at),new lt(4,4,16,16,st),new lt(8,16,32,32,st),new lt(8,16,128,128,st),new lt(8,32,128,256,st),new lt(32,128,258,1024,st),new lt(32,258,258,4096,st)],n.deflateInit=function(m,U){return Xt(m,U,_,15,8,0)},n.deflateInit2=Xt,n.deflateReset=ee,n.deflateResetKeep=_t,n.deflateSetHeader=function(m,U){return m&&m.state?m.state.wrap!==2?b:(m.state.gzhead=U,h):b},n.deflate=function(m,U){var D,k,$,T;if(!m||!m.state||5<U||U<0)return m?et(m,b):b;if(k=m.state,!m.output||!m.input&&m.avail_in!==0||k.status===666&&U!==f)return et(m,m.avail_out===0?-5:b);if(k.strm=m,D=k.last_flush,k.last_flush=U,k.status===E)if(k.wrap===2)m.adler=0,nt(k,31),nt(k,139),nt(k,8),k.gzhead?(nt(k,(k.gzhead.text?1:0)+(k.gzhead.hcrc?2:0)+(k.gzhead.extra?4:0)+(k.gzhead.name?8:0)+(k.gzhead.comment?16:0)),nt(k,255&k.gzhead.time),nt(k,k.gzhead.time>>8&255),nt(k,k.gzhead.time>>16&255),nt(k,k.gzhead.time>>24&255),nt(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),nt(k,255&k.gzhead.os),k.gzhead.extra&&k.gzhead.extra.length&&(nt(k,255&k.gzhead.extra.length),nt(k,k.gzhead.extra.length>>8&255)),k.gzhead.hcrc&&(m.adler=c(m.adler,k.pending_buf,k.pending,0)),k.gzindex=0,k.status=69):(nt(k,0),nt(k,0),nt(k,0),nt(k,0),nt(k,0),nt(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),nt(k,3),k.status=R);else{var W=_+(k.w_bits-8<<4)<<8;W|=(2<=k.strategy||k.level<2?0:k.level<6?1:k.level===6?2:3)<<6,k.strstart!==0&&(W|=32),W+=31-W%31,k.status=R,K(k,W),k.strstart!==0&&(K(k,m.adler>>>16),K(k,65535&m.adler)),m.adler=1}if(k.status===69)if(k.gzhead.extra){for($=k.pending;k.gzindex<(65535&k.gzhead.extra.length)&&(k.pending!==k.pending_buf_size||(k.gzhead.hcrc&&k.pending>$&&(m.adler=c(m.adler,k.pending_buf,k.pending-$,$)),L(m),$=k.pending,k.pending!==k.pending_buf_size));)nt(k,255&k.gzhead.extra[k.gzindex]),k.gzindex++;k.gzhead.hcrc&&k.pending>$&&(m.adler=c(m.adler,k.pending_buf,k.pending-$,$)),k.gzindex===k.gzhead.extra.length&&(k.gzindex=0,k.status=73)}else k.status=73;if(k.status===73)if(k.gzhead.name){$=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>$&&(m.adler=c(m.adler,k.pending_buf,k.pending-$,$)),L(m),$=k.pending,k.pending===k.pending_buf_size)){T=1;break}T=k.gzindex<k.gzhead.name.length?255&k.gzhead.name.charCodeAt(k.gzindex++):0,nt(k,T)}while(T!==0);k.gzhead.hcrc&&k.pending>$&&(m.adler=c(m.adler,k.pending_buf,k.pending-$,$)),T===0&&(k.gzindex=0,k.status=91)}else k.status=91;if(k.status===91)if(k.gzhead.comment){$=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>$&&(m.adler=c(m.adler,k.pending_buf,k.pending-$,$)),L(m),$=k.pending,k.pending===k.pending_buf_size)){T=1;break}T=k.gzindex<k.gzhead.comment.length?255&k.gzhead.comment.charCodeAt(k.gzindex++):0,nt(k,T)}while(T!==0);k.gzhead.hcrc&&k.pending>$&&(m.adler=c(m.adler,k.pending_buf,k.pending-$,$)),T===0&&(k.status=103)}else k.status=103;if(k.status===103&&(k.gzhead.hcrc?(k.pending+2>k.pending_buf_size&&L(m),k.pending+2<=k.pending_buf_size&&(nt(k,255&m.adler),nt(k,m.adler>>8&255),m.adler=0,k.status=R)):k.status=R),k.pending!==0){if(L(m),m.avail_out===0)return k.last_flush=-1,h}else if(m.avail_in===0&&V(U)<=V(D)&&U!==f)return et(m,-5);if(k.status===666&&m.avail_in!==0)return et(m,-5);if(m.avail_in!==0||k.lookahead!==0||U!==u&&k.status!==666){var q=k.strategy===2?function(I,Y){for(var Q;;){if(I.lookahead===0&&(ot(I),I.lookahead===0)){if(Y===u)return y;break}if(I.match_length=0,Q=a._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++,Q&&(P(I,!1),I.strm.avail_out===0))return y}return I.insert=0,Y===f?(P(I,!0),I.strm.avail_out===0?tt:H):I.last_lit&&(P(I,!1),I.strm.avail_out===0)?y:j}(k,U):k.strategy===3?function(I,Y){for(var Q,Z,rt,bt,ct=I.window;;){if(I.lookahead<=z){if(ot(I),I.lookahead<=z&&Y===u)return y;if(I.lookahead===0)break}if(I.match_length=0,I.lookahead>=A&&0<I.strstart&&(Z=ct[rt=I.strstart-1])===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]){bt=I.strstart+z;do;while(Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&rt<bt);I.match_length=z-(bt-rt),I.match_length>I.lookahead&&(I.match_length=I.lookahead)}if(I.match_length>=A?(Q=a._tr_tally(I,1,I.match_length-A),I.lookahead-=I.match_length,I.strstart+=I.match_length,I.match_length=0):(Q=a._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++),Q&&(P(I,!1),I.strm.avail_out===0))return y}return I.insert=0,Y===f?(P(I,!0),I.strm.avail_out===0?tt:H):I.last_lit&&(P(I,!1),I.strm.avail_out===0)?y:j}(k,U):s[k.level].func(k,U);if(q!==tt&&q!==H||(k.status=666),q===y||q===tt)return m.avail_out===0&&(k.last_flush=-1),h;if(q===j&&(U===1?a._tr_align(k):U!==5&&(a._tr_stored_block(k,0,0,!1),U===3&&(it(k.head),k.lookahead===0&&(k.strstart=0,k.block_start=0,k.insert=0))),L(m),m.avail_out===0))return k.last_flush=-1,h}return U!==f?h:k.wrap<=0?1:(k.wrap===2?(nt(k,255&m.adler),nt(k,m.adler>>8&255),nt(k,m.adler>>16&255),nt(k,m.adler>>24&255),nt(k,255&m.total_in),nt(k,m.total_in>>8&255),nt(k,m.total_in>>16&255),nt(k,m.total_in>>24&255)):(K(k,m.adler>>>16),K(k,65535&m.adler)),L(m),0<k.wrap&&(k.wrap=-k.wrap),k.pending!==0?h:1)},n.deflateEnd=function(m){var U;return m&&m.state?(U=m.state.status)!==E&&U!==69&&U!==73&&U!==91&&U!==103&&U!==R&&U!==666?et(m,b):(m.state=null,U===R?et(m,-3):h):b},n.deflateSetDictionary=function(m,U){var D,k,$,T,W,q,I,Y,Q=U.length;if(!m||!m.state||(T=(D=m.state).wrap)===2||T===1&&D.status!==E||D.lookahead)return b;for(T===1&&(m.adler=l(m.adler,U,Q,0)),D.wrap=0,Q>=D.w_size&&(T===0&&(it(D.head),D.strstart=0,D.block_start=0,D.insert=0),Y=new o.Buf8(D.w_size),o.arraySet(Y,U,Q-D.w_size,D.w_size,0),U=Y,Q=D.w_size),W=m.avail_in,q=m.next_in,I=m.input,m.avail_in=Q,m.next_in=0,m.input=U,ot(D);D.lookahead>=A;){for(k=D.strstart,$=D.lookahead-(A-1);D.ins_h=(D.ins_h<<D.hash_shift^D.window[k+A-1])&D.hash_mask,D.prev[k&D.w_mask]=D.head[D.ins_h],D.head[D.ins_h]=k,k++,--$;);D.strstart=k,D.lookahead=A-1,ot(D)}return D.strstart+=D.lookahead,D.block_start=D.strstart,D.insert=D.lookahead,D.lookahead=0,D.match_length=D.prev_length=A-1,D.match_available=0,m.next_in=q,m.input=I,m.avail_in=W,D.wrap=T,h},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,r,n){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,r,n){r.exports=function(s,o){var a,l,c,d,u,f,h,b,p,v,g,_,w,x,C,S,O,M,A,z,G,E,R,y,j;a=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),d=s.next_out,j=s.output,u=d-(o-s.avail_out),f=d+(s.avail_out-257),h=a.dmax,b=a.wsize,p=a.whave,v=a.wnext,g=a.window,_=a.hold,w=a.bits,x=a.lencode,C=a.distcode,S=(1<<a.lenbits)-1,O=(1<<a.distbits)-1;t:do{w<15&&(_+=y[l++]<<w,w+=8,_+=y[l++]<<w,w+=8),M=x[_&S];e:for(;;){if(_>>>=A=M>>>24,w-=A,(A=M>>>16&255)===0)j[d++]=65535&M;else{if(!(16&A)){if(!(64&A)){M=x[(65535&M)+(_&(1<<A)-1)];continue e}if(32&A){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}z=65535&M,(A&=15)&&(w<A&&(_+=y[l++]<<w,w+=8),z+=_&(1<<A)-1,_>>>=A,w-=A),w<15&&(_+=y[l++]<<w,w+=8,_+=y[l++]<<w,w+=8),M=C[_&O];i:for(;;){if(_>>>=A=M>>>24,w-=A,!(16&(A=M>>>16&255))){if(!(64&A)){M=C[(65535&M)+(_&(1<<A)-1)];continue i}s.msg="invalid distance code",a.mode=30;break t}if(G=65535&M,w<(A&=15)&&(_+=y[l++]<<w,(w+=8)<A&&(_+=y[l++]<<w,w+=8)),h<(G+=_&(1<<A)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(_>>>=A,w-=A,(A=d-u)<G){if(p<(A=G-A)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(R=g,(E=0)===v){if(E+=b-A,A<z){for(z-=A;j[d++]=g[E++],--A;);E=d-G,R=j}}else if(v<A){if(E+=b+v-A,(A-=v)<z){for(z-=A;j[d++]=g[E++],--A;);if(E=0,v<z){for(z-=A=v;j[d++]=g[E++],--A;);E=d-G,R=j}}}else if(E+=v-A,A<z){for(z-=A;j[d++]=g[E++],--A;);E=d-G,R=j}for(;2<z;)j[d++]=R[E++],j[d++]=R[E++],j[d++]=R[E++],z-=3;z&&(j[d++]=R[E++],1<z&&(j[d++]=R[E++]))}else{for(E=d-G;j[d++]=j[E++],j[d++]=j[E++],j[d++]=j[E++],2<(z-=3););z&&(j[d++]=j[E++],1<z&&(j[d++]=j[E++]))}break}}break}}while(l<c&&d<f);l-=z=w>>3,_&=(1<<(w-=z<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=d<f?f-d+257:257-(d-f),a.hold=_,a.bits=w}},{}],49:[function(e,r,n){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),d=1,u=2,f=0,h=-2,b=1,p=852,v=592;function g(E){return(E>>>24&255)+(E>>>8&65280)+((65280&E)<<8)+((255&E)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function w(E){var R;return E&&E.state?(R=E.state,E.total_in=E.total_out=R.total=0,E.msg="",R.wrap&&(E.adler=1&R.wrap),R.mode=b,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new s.Buf32(p),R.distcode=R.distdyn=new s.Buf32(v),R.sane=1,R.back=-1,f):h}function x(E){var R;return E&&E.state?((R=E.state).wsize=0,R.whave=0,R.wnext=0,w(E)):h}function C(E,R){var y,j;return E&&E.state?(j=E.state,R<0?(y=0,R=-R):(y=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?h:(j.window!==null&&j.wbits!==R&&(j.window=null),j.wrap=y,j.wbits=R,x(E))):h}function S(E,R){var y,j;return E?(j=new _,(E.state=j).window=null,(y=C(E,R))!==f&&(E.state=null),y):h}var O,M,A=!0;function z(E){if(A){var R;for(O=new s.Buf32(512),M=new s.Buf32(32),R=0;R<144;)E.lens[R++]=8;for(;R<256;)E.lens[R++]=9;for(;R<280;)E.lens[R++]=7;for(;R<288;)E.lens[R++]=8;for(c(d,E.lens,0,288,O,0,E.work,{bits:9}),R=0;R<32;)E.lens[R++]=5;c(u,E.lens,0,32,M,0,E.work,{bits:5}),A=!1}E.lencode=O,E.lenbits=9,E.distcode=M,E.distbits=5}function G(E,R,y,j){var tt,H=E.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new s.Buf8(H.wsize)),j>=H.wsize?(s.arraySet(H.window,R,y-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(j<(tt=H.wsize-H.wnext)&&(tt=j),s.arraySet(H.window,R,y-j,tt,H.wnext),(j-=tt)?(s.arraySet(H.window,R,y-j,j,0),H.wnext=j,H.whave=H.wsize):(H.wnext+=tt,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=tt))),0}n.inflateReset=x,n.inflateReset2=C,n.inflateResetKeep=w,n.inflateInit=function(E){return S(E,15)},n.inflateInit2=S,n.inflate=function(E,R){var y,j,tt,H,et,V,it,L,P,nt,K,X,ot,at,st,lt,vt,_t,ee,Xt,m,U,D,k,$=0,T=new s.Buf8(4),W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!E||!E.state||!E.output||!E.input&&E.avail_in!==0)return h;(y=E.state).mode===12&&(y.mode=13),et=E.next_out,tt=E.output,it=E.avail_out,H=E.next_in,j=E.input,V=E.avail_in,L=y.hold,P=y.bits,nt=V,K=it,U=f;t:for(;;)switch(y.mode){case b:if(y.wrap===0){y.mode=13;break}for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(2&y.wrap&&L===35615){T[y.check=0]=255&L,T[1]=L>>>8&255,y.check=a(y.check,T,2,0),P=L=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&L)<<8)+(L>>8))%31){E.msg="incorrect header check",y.mode=30;break}if((15&L)!=8){E.msg="unknown compression method",y.mode=30;break}if(P-=4,m=8+(15&(L>>>=4)),y.wbits===0)y.wbits=m;else if(m>y.wbits){E.msg="invalid window size",y.mode=30;break}y.dmax=1<<m,E.adler=y.check=1,y.mode=512&L?10:12,P=L=0;break;case 2:for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(y.flags=L,(255&y.flags)!=8){E.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){E.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=L>>8&1),512&y.flags&&(T[0]=255&L,T[1]=L>>>8&255,y.check=a(y.check,T,2,0)),P=L=0,y.mode=3;case 3:for(;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.head&&(y.head.time=L),512&y.flags&&(T[0]=255&L,T[1]=L>>>8&255,T[2]=L>>>16&255,T[3]=L>>>24&255,y.check=a(y.check,T,4,0)),P=L=0,y.mode=4;case 4:for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.head&&(y.head.xflags=255&L,y.head.os=L>>8),512&y.flags&&(T[0]=255&L,T[1]=L>>>8&255,y.check=a(y.check,T,2,0)),P=L=0,y.mode=5;case 5:if(1024&y.flags){for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.length=L,y.head&&(y.head.extra_len=L),512&y.flags&&(T[0]=255&L,T[1]=L>>>8&255,y.check=a(y.check,T,2,0)),P=L=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(V<(X=y.length)&&(X=V),X&&(y.head&&(m=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,j,H,X,m)),512&y.flags&&(y.check=a(y.check,j,X,H)),V-=X,H+=X,y.length-=X),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(V===0)break t;for(X=0;m=j[H+X++],y.head&&m&&y.length<65536&&(y.head.name+=String.fromCharCode(m)),m&&X<V;);if(512&y.flags&&(y.check=a(y.check,j,X,H)),V-=X,H+=X,m)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(V===0)break t;for(X=0;m=j[H+X++],y.head&&m&&y.length<65536&&(y.head.comment+=String.fromCharCode(m)),m&&X<V;);if(512&y.flags&&(y.check=a(y.check,j,X,H)),V-=X,H+=X,m)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(L!==(65535&y.check)){E.msg="header crc mismatch",y.mode=30;break}P=L=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),E.adler=y.check=0,y.mode=12;break;case 10:for(;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}E.adler=y.check=g(L),P=L=0,y.mode=11;case 11:if(y.havedict===0)return E.next_out=et,E.avail_out=it,E.next_in=H,E.avail_in=V,y.hold=L,y.bits=P,2;E.adler=y.check=1,y.mode=12;case 12:if(R===5||R===6)break t;case 13:if(y.last){L>>>=7&P,P-=7&P,y.mode=27;break}for(;P<3;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}switch(y.last=1&L,P-=1,3&(L>>>=1)){case 0:y.mode=14;break;case 1:if(z(y),y.mode=20,R!==6)break;L>>>=2,P-=2;break t;case 2:y.mode=17;break;case 3:E.msg="invalid block type",y.mode=30}L>>>=2,P-=2;break;case 14:for(L>>>=7&P,P-=7&P;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if((65535&L)!=(L>>>16^65535)){E.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&L,P=L=0,y.mode=15,R===6)break t;case 15:y.mode=16;case 16:if(X=y.length){if(V<X&&(X=V),it<X&&(X=it),X===0)break t;s.arraySet(tt,j,H,X,et),V-=X,H+=X,it-=X,et+=X,y.length-=X;break}y.mode=12;break;case 17:for(;P<14;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(y.nlen=257+(31&L),L>>>=5,P-=5,y.ndist=1+(31&L),L>>>=5,P-=5,y.ncode=4+(15&L),L>>>=4,P-=4,286<y.nlen||30<y.ndist){E.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;P<3;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.lens[W[y.have++]]=7&L,L>>>=3,P-=3}for(;y.have<19;)y.lens[W[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,D={bits:y.lenbits},U=c(0,y.lens,0,19,y.lencode,0,y.work,D),y.lenbits=D.bits,U){E.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;lt=($=y.lencode[L&(1<<y.lenbits)-1])>>>16&255,vt=65535&$,!((st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(vt<16)L>>>=st,P-=st,y.lens[y.have++]=vt;else{if(vt===16){for(k=st+2;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(L>>>=st,P-=st,y.have===0){E.msg="invalid bit length repeat",y.mode=30;break}m=y.lens[y.have-1],X=3+(3&L),L>>>=2,P-=2}else if(vt===17){for(k=st+3;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}P-=st,m=0,X=3+(7&(L>>>=st)),L>>>=3,P-=3}else{for(k=st+7;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}P-=st,m=0,X=11+(127&(L>>>=st)),L>>>=7,P-=7}if(y.have+X>y.nlen+y.ndist){E.msg="invalid bit length repeat",y.mode=30;break}for(;X--;)y.lens[y.have++]=m}}if(y.mode===30)break;if(y.lens[256]===0){E.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,D={bits:y.lenbits},U=c(d,y.lens,0,y.nlen,y.lencode,0,y.work,D),y.lenbits=D.bits,U){E.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,D={bits:y.distbits},U=c(u,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,D),y.distbits=D.bits,U){E.msg="invalid distances set",y.mode=30;break}if(y.mode=20,R===6)break t;case 20:y.mode=21;case 21:if(6<=V&&258<=it){E.next_out=et,E.avail_out=it,E.next_in=H,E.avail_in=V,y.hold=L,y.bits=P,l(E,K),et=E.next_out,tt=E.output,it=E.avail_out,H=E.next_in,j=E.input,V=E.avail_in,L=y.hold,P=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;lt=($=y.lencode[L&(1<<y.lenbits)-1])>>>16&255,vt=65535&$,!((st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(lt&&!(240&lt)){for(_t=st,ee=lt,Xt=vt;lt=($=y.lencode[Xt+((L&(1<<_t+ee)-1)>>_t)])>>>16&255,vt=65535&$,!(_t+(st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}L>>>=_t,P-=_t,y.back+=_t}if(L>>>=st,P-=st,y.back+=st,y.length=vt,lt===0){y.mode=26;break}if(32&lt){y.back=-1,y.mode=12;break}if(64&lt){E.msg="invalid literal/length code",y.mode=30;break}y.extra=15&lt,y.mode=22;case 22:if(y.extra){for(k=y.extra;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.length+=L&(1<<y.extra)-1,L>>>=y.extra,P-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;lt=($=y.distcode[L&(1<<y.distbits)-1])>>>16&255,vt=65535&$,!((st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(!(240&lt)){for(_t=st,ee=lt,Xt=vt;lt=($=y.distcode[Xt+((L&(1<<_t+ee)-1)>>_t)])>>>16&255,vt=65535&$,!(_t+(st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}L>>>=_t,P-=_t,y.back+=_t}if(L>>>=st,P-=st,y.back+=st,64&lt){E.msg="invalid distance code",y.mode=30;break}y.offset=vt,y.extra=15&lt,y.mode=24;case 24:if(y.extra){for(k=y.extra;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.offset+=L&(1<<y.extra)-1,L>>>=y.extra,P-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){E.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(it===0)break t;if(X=K-it,y.offset>X){if((X=y.offset-X)>y.whave&&y.sane){E.msg="invalid distance too far back",y.mode=30;break}ot=X>y.wnext?(X-=y.wnext,y.wsize-X):y.wnext-X,X>y.length&&(X=y.length),at=y.window}else at=tt,ot=et-y.offset,X=y.length;for(it<X&&(X=it),it-=X,y.length-=X;tt[et++]=at[ot++],--X;);y.length===0&&(y.mode=21);break;case 26:if(it===0)break t;tt[et++]=y.length,it--,y.mode=21;break;case 27:if(y.wrap){for(;P<32;){if(V===0)break t;V--,L|=j[H++]<<P,P+=8}if(K-=it,E.total_out+=K,y.total+=K,K&&(E.adler=y.check=y.flags?a(y.check,tt,K,et-K):o(y.check,tt,K,et-K)),K=it,(y.flags?L:g(L))!==y.check){E.msg="incorrect data check",y.mode=30;break}P=L=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(L!==(4294967295&y.total)){E.msg="incorrect length check",y.mode=30;break}P=L=0}y.mode=29;case 29:U=1;break t;case 30:U=-3;break t;case 31:return-4;case 32:default:return h}return E.next_out=et,E.avail_out=it,E.next_in=H,E.avail_in=V,y.hold=L,y.bits=P,(y.wsize||K!==E.avail_out&&y.mode<30&&(y.mode<27||R!==4))&&G(E,E.output,E.next_out,K-E.avail_out)?(y.mode=31,-4):(nt-=E.avail_in,K-=E.avail_out,E.total_in+=nt,E.total_out+=K,y.total+=K,y.wrap&&K&&(E.adler=y.check=y.flags?a(y.check,tt,K,E.next_out-K):o(y.check,tt,K,E.next_out-K)),E.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(nt==0&&K===0||R===4)&&U===f&&(U=-5),U)},n.inflateEnd=function(E){if(!E||!E.state)return h;var R=E.state;return R.window&&(R.window=null),E.state=null,f},n.inflateGetHeader=function(E,R){var y;return E&&E.state&&2&(y=E.state).wrap?((y.head=R).done=!1,f):h},n.inflateSetDictionary=function(E,R){var y,j=R.length;return E&&E.state?(y=E.state).wrap!==0&&y.mode!==11?h:y.mode===11&&o(1,R,j,0)!==y.check?-3:G(E,R,j,j)?(y.mode=31,-4):(y.havedict=1,f):h},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,r,n){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(d,u,f,h,b,p,v,g){var _,w,x,C,S,O,M,A,z,G=g.bits,E=0,R=0,y=0,j=0,tt=0,H=0,et=0,V=0,it=0,L=0,P=null,nt=0,K=new s.Buf16(16),X=new s.Buf16(16),ot=null,at=0;for(E=0;E<=15;E++)K[E]=0;for(R=0;R<h;R++)K[u[f+R]]++;for(tt=G,j=15;1<=j&&K[j]===0;j--);if(j<tt&&(tt=j),j===0)return b[p++]=20971520,b[p++]=20971520,g.bits=1,0;for(y=1;y<j&&K[y]===0;y++);for(tt<y&&(tt=y),E=V=1;E<=15;E++)if(V<<=1,(V-=K[E])<0)return-1;if(0<V&&(d===0||j!==1))return-1;for(X[1]=0,E=1;E<15;E++)X[E+1]=X[E]+K[E];for(R=0;R<h;R++)u[f+R]!==0&&(v[X[u[f+R]]++]=R);if(O=d===0?(P=ot=v,19):d===1?(P=o,nt-=257,ot=a,at-=257,256):(P=l,ot=c,-1),E=y,S=p,et=R=L=0,x=-1,C=(it=1<<(H=tt))-1,d===1&&852<it||d===2&&592<it)return 1;for(;;){for(M=E-et,z=v[R]<O?(A=0,v[R]):v[R]>O?(A=ot[at+v[R]],P[nt+v[R]]):(A=96,0),_=1<<E-et,y=w=1<<H;b[S+(L>>et)+(w-=_)]=M<<24|A<<16|z|0,w!==0;);for(_=1<<E-1;L&_;)_>>=1;if(_!==0?(L&=_-1,L+=_):L=0,R++,--K[E]==0){if(E===j)break;E=u[f+v[R]]}if(tt<E&&(L&C)!==x){for(et===0&&(et=tt),S+=y,V=1<<(H=E-et);H+et<j&&!((V-=K[H+et])<=0);)H++,V<<=1;if(it+=1<<H,d===1&&852<it||d===2&&592<it)return 1;b[x=L&C]=tt<<24|H<<16|S-p|0}}return L!==0&&(b[S+L]=E-et<<24|64<<16|0),g.bits=tt,0}},{"../utils/common":41}],51:[function(e,r,n){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,r,n){var s=e("../utils/common"),o=0,a=1;function l($){for(var T=$.length;0<=--T;)$[T]=0}var c=0,d=29,u=256,f=u+1+d,h=30,b=19,p=2*f+1,v=15,g=16,_=7,w=256,x=16,C=17,S=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],A=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=new Array(2*(f+2));l(G);var E=new Array(2*h);l(E);var R=new Array(512);l(R);var y=new Array(256);l(y);var j=new Array(d);l(j);var tt,H,et,V=new Array(h);function it($,T,W,q,I){this.static_tree=$,this.extra_bits=T,this.extra_base=W,this.elems=q,this.max_length=I,this.has_stree=$&&$.length}function L($,T){this.dyn_tree=$,this.max_code=0,this.stat_desc=T}function P($){return $<256?R[$]:R[256+($>>>7)]}function nt($,T){$.pending_buf[$.pending++]=255&T,$.pending_buf[$.pending++]=T>>>8&255}function K($,T,W){$.bi_valid>g-W?($.bi_buf|=T<<$.bi_valid&65535,nt($,$.bi_buf),$.bi_buf=T>>g-$.bi_valid,$.bi_valid+=W-g):($.bi_buf|=T<<$.bi_valid&65535,$.bi_valid+=W)}function X($,T,W){K($,W[2*T],W[2*T+1])}function ot($,T){for(var W=0;W|=1&$,$>>>=1,W<<=1,0<--T;);return W>>>1}function at($,T,W){var q,I,Y=new Array(v+1),Q=0;for(q=1;q<=v;q++)Y[q]=Q=Q+W[q-1]<<1;for(I=0;I<=T;I++){var Z=$[2*I+1];Z!==0&&($[2*I]=ot(Y[Z]++,Z))}}function st($){var T;for(T=0;T<f;T++)$.dyn_ltree[2*T]=0;for(T=0;T<h;T++)$.dyn_dtree[2*T]=0;for(T=0;T<b;T++)$.bl_tree[2*T]=0;$.dyn_ltree[2*w]=1,$.opt_len=$.static_len=0,$.last_lit=$.matches=0}function lt($){8<$.bi_valid?nt($,$.bi_buf):0<$.bi_valid&&($.pending_buf[$.pending++]=$.bi_buf),$.bi_buf=0,$.bi_valid=0}function vt($,T,W,q){var I=2*T,Y=2*W;return $[I]<$[Y]||$[I]===$[Y]&&q[T]<=q[W]}function _t($,T,W){for(var q=$.heap[W],I=W<<1;I<=$.heap_len&&(I<$.heap_len&&vt(T,$.heap[I+1],$.heap[I],$.depth)&&I++,!vt(T,q,$.heap[I],$.depth));)$.heap[W]=$.heap[I],W=I,I<<=1;$.heap[W]=q}function ee($,T,W){var q,I,Y,Q,Z=0;if($.last_lit!==0)for(;q=$.pending_buf[$.d_buf+2*Z]<<8|$.pending_buf[$.d_buf+2*Z+1],I=$.pending_buf[$.l_buf+Z],Z++,q===0?X($,I,T):(X($,(Y=y[I])+u+1,T),(Q=O[Y])!==0&&K($,I-=j[Y],Q),X($,Y=P(--q),W),(Q=M[Y])!==0&&K($,q-=V[Y],Q)),Z<$.last_lit;);X($,w,T)}function Xt($,T){var W,q,I,Y=T.dyn_tree,Q=T.stat_desc.static_tree,Z=T.stat_desc.has_stree,rt=T.stat_desc.elems,bt=-1;for($.heap_len=0,$.heap_max=p,W=0;W<rt;W++)Y[2*W]!==0?($.heap[++$.heap_len]=bt=W,$.depth[W]=0):Y[2*W+1]=0;for(;$.heap_len<2;)Y[2*(I=$.heap[++$.heap_len]=bt<2?++bt:0)]=1,$.depth[I]=0,$.opt_len--,Z&&($.static_len-=Q[2*I+1]);for(T.max_code=bt,W=$.heap_len>>1;1<=W;W--)_t($,Y,W);for(I=rt;W=$.heap[1],$.heap[1]=$.heap[$.heap_len--],_t($,Y,1),q=$.heap[1],$.heap[--$.heap_max]=W,$.heap[--$.heap_max]=q,Y[2*I]=Y[2*W]+Y[2*q],$.depth[I]=($.depth[W]>=$.depth[q]?$.depth[W]:$.depth[q])+1,Y[2*W+1]=Y[2*q+1]=I,$.heap[1]=I++,_t($,Y,1),2<=$.heap_len;);$.heap[--$.heap_max]=$.heap[1],function(ct,Mt){var sn,ie,on,wt,pr,Ns,ce=Mt.dyn_tree,_a=Mt.max_code,Bh=Mt.stat_desc.static_tree,Uh=Mt.stat_desc.has_stree,Hh=Mt.stat_desc.extra_bits,wa=Mt.stat_desc.extra_base,an=Mt.stat_desc.max_length,mr=0;for(wt=0;wt<=v;wt++)ct.bl_count[wt]=0;for(ce[2*ct.heap[ct.heap_max]+1]=0,sn=ct.heap_max+1;sn<p;sn++)an<(wt=ce[2*ce[2*(ie=ct.heap[sn])+1]+1]+1)&&(wt=an,mr++),ce[2*ie+1]=wt,_a<ie||(ct.bl_count[wt]++,pr=0,wa<=ie&&(pr=Hh[ie-wa]),Ns=ce[2*ie],ct.opt_len+=Ns*(wt+pr),Uh&&(ct.static_len+=Ns*(Bh[2*ie+1]+pr)));if(mr!==0){do{for(wt=an-1;ct.bl_count[wt]===0;)wt--;ct.bl_count[wt]--,ct.bl_count[wt+1]+=2,ct.bl_count[an]--,mr-=2}while(0<mr);for(wt=an;wt!==0;wt--)for(ie=ct.bl_count[wt];ie!==0;)_a<(on=ct.heap[--sn])||(ce[2*on+1]!==wt&&(ct.opt_len+=(wt-ce[2*on+1])*ce[2*on],ce[2*on+1]=wt),ie--)}}($,T),at(Y,bt,$.bl_count)}function m($,T,W){var q,I,Y=-1,Q=T[1],Z=0,rt=7,bt=4;for(Q===0&&(rt=138,bt=3),T[2*(W+1)+1]=65535,q=0;q<=W;q++)I=Q,Q=T[2*(q+1)+1],++Z<rt&&I===Q||(Z<bt?$.bl_tree[2*I]+=Z:I!==0?(I!==Y&&$.bl_tree[2*I]++,$.bl_tree[2*x]++):Z<=10?$.bl_tree[2*C]++:$.bl_tree[2*S]++,Y=I,bt=(Z=0)===Q?(rt=138,3):I===Q?(rt=6,3):(rt=7,4))}function U($,T,W){var q,I,Y=-1,Q=T[1],Z=0,rt=7,bt=4;for(Q===0&&(rt=138,bt=3),q=0;q<=W;q++)if(I=Q,Q=T[2*(q+1)+1],!(++Z<rt&&I===Q)){if(Z<bt)for(;X($,I,$.bl_tree),--Z!=0;);else I!==0?(I!==Y&&(X($,I,$.bl_tree),Z--),X($,x,$.bl_tree),K($,Z-3,2)):Z<=10?(X($,C,$.bl_tree),K($,Z-3,3)):(X($,S,$.bl_tree),K($,Z-11,7));Y=I,bt=(Z=0)===Q?(rt=138,3):I===Q?(rt=6,3):(rt=7,4)}}l(V);var D=!1;function k($,T,W,q){K($,(c<<1)+(q?1:0),3),function(I,Y,Q,Z){lt(I),nt(I,Q),nt(I,~Q),s.arraySet(I.pending_buf,I.window,Y,Q,I.pending),I.pending+=Q}($,T,W)}n._tr_init=function($){D||(function(){var T,W,q,I,Y,Q=new Array(v+1);for(I=q=0;I<d-1;I++)for(j[I]=q,T=0;T<1<<O[I];T++)y[q++]=I;for(y[q-1]=I,I=Y=0;I<16;I++)for(V[I]=Y,T=0;T<1<<M[I];T++)R[Y++]=I;for(Y>>=7;I<h;I++)for(V[I]=Y<<7,T=0;T<1<<M[I]-7;T++)R[256+Y++]=I;for(W=0;W<=v;W++)Q[W]=0;for(T=0;T<=143;)G[2*T+1]=8,T++,Q[8]++;for(;T<=255;)G[2*T+1]=9,T++,Q[9]++;for(;T<=279;)G[2*T+1]=7,T++,Q[7]++;for(;T<=287;)G[2*T+1]=8,T++,Q[8]++;for(at(G,f+1,Q),T=0;T<h;T++)E[2*T+1]=5,E[2*T]=ot(T,5);tt=new it(G,O,u+1,f,v),H=new it(E,M,0,h,v),et=new it(new Array(0),A,0,b,_)}(),D=!0),$.l_desc=new L($.dyn_ltree,tt),$.d_desc=new L($.dyn_dtree,H),$.bl_desc=new L($.bl_tree,et),$.bi_buf=0,$.bi_valid=0,st($)},n._tr_stored_block=k,n._tr_flush_block=function($,T,W,q){var I,Y,Q=0;0<$.level?($.strm.data_type===2&&($.strm.data_type=function(Z){var rt,bt=4093624447;for(rt=0;rt<=31;rt++,bt>>>=1)if(1&bt&&Z.dyn_ltree[2*rt]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return a;for(rt=32;rt<u;rt++)if(Z.dyn_ltree[2*rt]!==0)return a;return o}($)),Xt($,$.l_desc),Xt($,$.d_desc),Q=function(Z){var rt;for(m(Z,Z.dyn_ltree,Z.l_desc.max_code),m(Z,Z.dyn_dtree,Z.d_desc.max_code),Xt(Z,Z.bl_desc),rt=b-1;3<=rt&&Z.bl_tree[2*z[rt]+1]===0;rt--);return Z.opt_len+=3*(rt+1)+5+5+4,rt}($),I=$.opt_len+3+7>>>3,(Y=$.static_len+3+7>>>3)<=I&&(I=Y)):I=Y=W+5,W+4<=I&&T!==-1?k($,T,W,q):$.strategy===4||Y===I?(K($,2+(q?1:0),3),ee($,G,E)):(K($,4+(q?1:0),3),function(Z,rt,bt,ct){var Mt;for(K(Z,rt-257,5),K(Z,bt-1,5),K(Z,ct-4,4),Mt=0;Mt<ct;Mt++)K(Z,Z.bl_tree[2*z[Mt]+1],3);U(Z,Z.dyn_ltree,rt-1),U(Z,Z.dyn_dtree,bt-1)}($,$.l_desc.max_code+1,$.d_desc.max_code+1,Q+1),ee($,$.dyn_ltree,$.dyn_dtree)),st($),q&&lt($)},n._tr_tally=function($,T,W){return $.pending_buf[$.d_buf+2*$.last_lit]=T>>>8&255,$.pending_buf[$.d_buf+2*$.last_lit+1]=255&T,$.pending_buf[$.l_buf+$.last_lit]=255&W,$.last_lit++,T===0?$.dyn_ltree[2*W]++:($.matches++,T--,$.dyn_ltree[2*(y[W]+u+1)]++,$.dyn_dtree[2*P(T)]++),$.last_lit===$.lit_bufsize-1},n._tr_align=function($){K($,2,3),X($,w,G),function(T){T.bi_valid===16?(nt(T,T.bi_buf),T.bi_buf=0,T.bi_valid=0):8<=T.bi_valid&&(T.pending_buf[T.pending++]=255&T.bi_buf,T.bi_buf>>=8,T.bi_valid-=8)}($)}},{"../utils/common":41}],53:[function(e,r,n){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,r,n){(function(s){(function(o,a){if(!o.setImmediate){var l,c,d,u,f=1,h={},b=!1,p=o.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(o);v=v&&v.setTimeout?v:o,l={}.toString.call(o.process)==="[object process]"?function(x){process.nextTick(function(){_(x)})}:function(){if(o.postMessage&&!o.importScripts){var x=!0,C=o.onmessage;return o.onmessage=function(){x=!1},o.postMessage("","*"),o.onmessage=C,x}}()?(u="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",w,!1):o.attachEvent("onmessage",w),function(x){o.postMessage(u+x,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(x){_(x.data)},function(x){d.port2.postMessage(x)}):p&&"onreadystatechange"in p.createElement("script")?(c=p.documentElement,function(x){var C=p.createElement("script");C.onreadystatechange=function(){_(x),C.onreadystatechange=null,c.removeChild(C),C=null},c.appendChild(C)}):function(x){setTimeout(_,0,x)},v.setImmediate=function(x){typeof x!="function"&&(x=new Function(""+x));for(var C=new Array(arguments.length-1),S=0;S<C.length;S++)C[S]=arguments[S+1];var O={callback:x,args:C};return h[f]=O,l(f),f++},v.clearImmediate=g}function g(x){delete h[x]}function _(x){if(b)setTimeout(_,0,x);else{var C=h[x];if(C){b=!0;try{(function(S){var O=S.callback,M=S.args;switch(M.length){case 0:O();break;case 1:O(M[0]);break;case 2:O(M[0],M[1]);break;case 3:O(M[0],M[1],M[2]);break;default:O.apply(a,M)}})(C)}finally{g(x),b=!1}}}}function w(x){x.source===o&&typeof x.data=="string"&&x.data.indexOf(u)===0&&_(+x.data.slice(u.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof xr<"u"?xr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Fh);var x_=Fh.exports;const $_=w_(x_),pi=document.createElement("input"),k_=i=>new Promise(t=>{pi.type="file",pi.accept=i,pi.multiple=!1,pi.onchange=()=>{const e=pi.files;if(!(e&&e[0])){t(null);return}const r=e[0];t(r)},pi.click()}),C_=i=>{const[t]=Cy.loadIfc({components:i});t.label="IFC",t.tooltipTitle="Load IFC",t.tooltipText="Loads an IFC file into the scene. The IFC gets automatically converted to Fragments.";const e=i.get(Ft),r=i.get(Ht),n=async()=>{const a=await k_(".zip");if(!a)return;const l=await a.arrayBuffer(),c=new $_;await c.loadAsync(l);const d=c.file("geometry.frag");if(!d){alert("No geometry found in the file!");return}const u=await d.async("uint8array");let f;const h=c.file("properties.json");if(h){const v=await h.async("string");f=JSON.parse(v)}let b;const p=c.file("relations-map.json");if(p){const v=await p.async("string");b=r.getRelationsMapFromJSON(v)}e.load(u,{properties:f,relationsMap:b})},s=i.get(hc);async function o(){const a=document.createElement("input");a.type="file",a.accept=".json",a.multiple=!0,a.addEventListener("change",async()=>{if(!a.files)return;const l={};for(const d of a.files){const{name:u}=d,f=u.replace("-processed.json","").replace("-processed-properties.json","");l[f]||(l[f]={geometry:new File([],"asd")}),u.includes("-processed.json")?l[f].geometry=d:u.includes("-processed-properties.json")&&(l[f].properties=d)}const c=[];for(const d in l){const u=l[d];u.geometry&&c.push(u)}for(const d of c){const{geometry:u,properties:f}=d,h=JSON.parse(await u.text());let b;f&&(b=JSON.parse(await f.text()));try{s.load(h,!0,b)}catch(p){alert(p)}}}),a.click()}return Pt.create(()=>J`
      <bim-toolbar-section label="Import" icon="solar:import-bold">
        ${t}
        <bim-button @click=${n} label="Fragments" icon="fluent:puzzle-cube-piece-20-filled" tooltip-title="Load Fragments"
          tooltip-text="Loads a pre-converted IFC from a Fragments file. Use this option if you want to avoid the conversion from IFC to Fragments."></bim-button>
        <!-- <bim-button @click=${o} label="Tiles" icon="fe:tiled" tooltip-title="Load BIM Tiles"
        tooltip-text="Loads a pre-converted IFC from a Tiles file to stream the model. Perfect for big models."></bim-button> -->
      </bim-toolbar-section>
    `)},E_=i=>{const{camera:t}=i,e=()=>{t instanceof ls&&i.meshes.size>0&&t.fit(i.meshes,.5)},r=n=>{const s=n.target;t.enabled=!t.enabled,s.active=!t.enabled,s.label=t.enabled?"Disable":"Enable",s.icon=t.enabled?"tabler:lock-filled":"majesticons:unlock-open"};return Pt.create(()=>J`
      <bim-toolbar-section label="Camera" icon="ph:camera-fill" style="pointer-events: auto">
        <bim-button label="Fit Model" icon="material-symbols:fit-screen-rounded" @click=${e}></bim-button>
        <bim-button label="Disable" icon="tabler:lock-filled" @click=${r} .active=${!t.enabled}></bim-button>
        <!-- <bim-dropdown required>
          <bim-option label="Perspective"></bim-option>
          <bim-option label="Orthographic"></bim-option>
        </bim-dropdown> -->
      </bim-toolbar-section>
    `)},S_=(i,t)=>{const e=i.get(ji),r=i.get(No),n=i.get(Ft),s=()=>{const c=e.selection.select;if(Object.keys(c).length!==0)for(const d in c){const u=n.list.get(d);if(!u)continue;const f=c[d];for(const h of f)u.hiddenItems.has(h)?u.setVisibility(!0,[h]):u.setVisibility(!1,[h])}},o=()=>{const c=e.selection.select;if(Object.keys(c).length!==0){for(const[,d]of n.list){d.setVisibility(!1);const u=i.get(Ks);for(const[,f]of u.list){const h=f.colorMeshes.get(d.id);h&&(h.count=d.mesh.count)}}r.set(!0,c)}},a=()=>{for(const[,c]of n.list){c.setVisibility(!0);const d=i.get(Ks);for(const[,u]of d.list){const f=u.colorMeshes.get(c.id);f&&(f.count=c.mesh.count)}}},l=async()=>{if(!t||!t.camera.hasCameraControls())return;const c=i.get(nf),d=i.get(Ft);c.reset();const u=e.selection.select;if(!Object.keys(u).length)return;for(const S in u){const O=d.list.get(S);if(!O)continue;const M=u[S];c.addMesh(O.mesh,M)}const f=c.getSphere(),h=1/0,b=-1/0,{x:p,y:v,z:g}=f.center,_=f.radius===h||p===h||v===h||g===h,w=f.radius===b||p===b||v===b||g===b,x=f.radius===0;if(_||w||x)return;f.radius*=1.2,await t.camera.controls.fitToSphere(f,!0)};return Pt.create(()=>J`
      <bim-toolbar-section label="Selection" icon="ph:cursor-fill">
        <bim-button @click=${a} label="Show All" icon="tabler:eye-filled" tooltip-title="Show All" tooltip-text="Shows all elements in all models."></bim-button>
        <bim-button @click=${s} label="Toggle Visibility" icon="tabler:square-toggle" tooltip-title="Toggle Visibility" tooltip-text="From the current selection, hides visible elements and shows hidden elements."></bim-button>
        <bim-button @click=${o} label="Isolate" icon="prime:filter-fill" tooltip-title="Isolate" tooltip-text="Isolates the current selection."></bim-button>
        <bim-button @click=${l} label="Focus" icon="ri:focus-mode" tooltip-title="Focus" tooltip-text="Focus the camera to the current selection."></bim-button>
      </bim-toolbar-section> 
    `)};(async()=>{try{const i=window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.className=i?"bim-ui-dark":"bim-ui-light",window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",S=>{document.documentElement.className=S.matches?"bim-ui-dark":"bim-ui-light"}),await Yo.init();const t=new rf,r=t.get(Hn).create();r.name="Main",r.scene=new Io(t),await r.scene.setup(),r.scene.three.background=null;const n=Pt.create(()=>J`
        <bim-viewport>
          <bim-grid floating></bim-grid>
        </bim-viewport>
      `);r.renderer=new yt(t,n);const{postproduction:s}=r.renderer;r.camera=new ls(t);const o=t.get(Po).create(r);o.material.uniforms.uColor.value=new si(4342338),o.material.uniforms.uSize1.value=2,o.material.uniforms.uSize2.value=8;const a=()=>{r.renderer?.resize(),r.camera.updateAspect()};n.addEventListener("resize",a),await t.init(),s.enabled=!0,s.customEffects.excludedMeshes.push(o.three),s.setPasses({custom:!0,ao:!0,gamma:!0}),s.customEffects.lineColor=1513756;const l=t.get(jh),c=n.querySelector("bim-grid[floating]");l.grids.set("viewport",c);const d=t.get(Ft),u=t.get(Ht),f=t.get(Cn);f.list.CustomSelections={};const h=t.get(dc);await h.setup();const b=t.get(hc);b.url="./resources/tiles/",b.world=r,b.culler.threshold=10,b.culler.maxHiddenTime=1e3,b.culler.maxLostTime=4e4;const p=t.get(ji);await p.setup({world:r}),p.zoomToSelection=!0;const v=t.get(Ks).create(r);v.threshold=5,r.camera.controls.restThreshold=.25,r.camera.controls.addEventListener("rest",()=>{v.needsUpdate=!0,b.culler.needsUpdate=!0});const g=v_(t),_=y_(t),w=Pt.create(()=>J`
        <bim-toolbar>
          ${C_(t)}
          ${E_(r)}
          ${S_(t,r)}
        </bim-toolbar>
      `),x=Pt.create(()=>J`
        <bim-tabs switchers-full>
          <bim-tab name="project" label="Project" icon="ph:building-fill">
            ${g}
          </bim-tab>
          <bim-tab name="settings" label="Settings" icon="solar:settings-bold">
            ${__(t)}
          </bim-tab>
        </bim-tabs> 
      `),C=document.getElementById("app");if(!C)throw new Error("App element not found");C.layouts={main:{template:`
          "leftPanel viewport" 1fr
          /26rem 1fr
        `,elements:{leftPanel:x,viewport:n}}},C.layout="main",c.layouts={main:{template:`
          "empty" 1fr
          "toolbar" auto
          /1fr
        `,elements:{toolbar:w}},second:{template:`
          "empty elementDataPanel" 1fr
          "toolbar elementDataPanel" auto
          /1fr 24rem
        `,elements:{toolbar:w,elementDataPanel:_}}},c.layout="main",window.addEventListener("message",async S=>{if(!["https://buccbv.sharepoint.com","https://localhost:4321"].includes(S.origin)){console.warn("Unauthorized origin:",S.origin);return}try{if(S.data instanceof ArrayBuffer){console.log("Received ArrayBuffer from SharePoint");const M=new CustomEvent("ifcLoadEvent",{detail:{name:"openModel",payload:{name:"SharePointModel",buffer:S.data}}});window.dispatchEvent(M)}}catch(M){console.error("Error processing message:",M)}}),window.addEventListener("ifcLoadEvent",async S=>{try{const{name:O,payload:M}=S.detail;if(O==="openModel"){console.log("Starting to load IFC model...");const A=await h.load(M.buffer,M.name);r.scene.three.add(A),console.log("IFC model loaded successfully")}}catch(O){console.error("Error loading IFC model:",O)}}),d.onFragmentsLoaded.add(async S=>{S.hasProperties&&(await u.process(S),f.byEntity(S));for(const O of S.items)r.meshes.add(O.mesh),v.add(O.mesh);r.scene.three.add(S),setTimeout(async()=>{r.camera.fit(r.meshes,.8)},50)}),d.onFragmentsDisposed.add(({fragmentIDs:S})=>{for(const O of S){const M=[...r.meshes].find(A=>A.uuid===O);M&&r.meshes.delete(M)}}),window.dispatchEvent(new Event("resize"))}catch(i){console.error("Application initialization error:",i)}})();
//# sourceMappingURL=index-BOORCpiy.js.map
