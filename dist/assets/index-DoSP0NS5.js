import{V as Ro,M as us,C as ai,G as Ta,an as sf,g as of,c as za,b as af,e as lf,r as yr,ao as dn,X as cf,Y as uf,O as df,a as hf}from"./three-D6zBG5Mv.js";import{L as Wn,t as Mo,a as qn,M as Do,J as ff,n as ds,$ as _t,h as jo,_ as Ut,x as Wt,d as _c,b as pf,o as Bi,c as An,I as Fo,u as mf,z as Lr,S as bf,r as wc,e as ro,m as gf,f as vf}from"./components-B_QfFtKG.js";import{t as yf,R as _f,c as xc,C as $c,G as wf,J as kc,K as xf,M as $f,N as Cc,O as Ec,P as kf,D as Cf}from"./web-ifc-CL1j-px8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();var Ef=Object.defineProperty,Sf=(i,t,e)=>t in i?Ef(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ve=(i,t,e)=>(Sf(i,typeof t!="symbol"?t+"":t,e),e);const xi=Math.min,fe=Math.max,Rr=Math.round,Ae=i=>({x:i,y:i}),Af={left:"right",right:"left",bottom:"top",top:"bottom"},Of={start:"end",end:"start"};function Ia(i,t,e){return fe(i,xi(t,e))}function Gn(i,t){return typeof i=="function"?i(t):i}function ge(i){return i.split("-")[0]}function hs(i){return i.split("-")[1]}function Sc(i){return i==="x"?"y":"x"}function Ac(i){return i==="y"?"height":"width"}function ei(i){return["top","bottom"].includes(ge(i))?"y":"x"}function Oc(i){return Sc(ei(i))}function Tf(i,t,e){e===void 0&&(e=!1);const r=hs(i),n=Oc(i),s=Ac(n);let o=n==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=Mr(o)),[o,Mr(o)]}function zf(i){const t=Mr(i);return[so(i),t,so(t)]}function so(i){return i.replace(/start|end/g,t=>Of[t])}function If(i,t,e){const r=["left","right"],n=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:r:t?r:n;case"left":case"right":return t?s:o;default:return[]}}function Pf(i,t,e,r){const n=hs(i);let s=If(ge(i),e==="start",r);return n&&(s=s.map(o=>o+"-"+n),t&&(s=s.concat(s.map(so)))),s}function Mr(i){return i.replace(/left|right|bottom|top/g,t=>Af[t])}function Nf(i){return{top:0,right:0,bottom:0,left:0,...i}}function Tc(i){return typeof i!="number"?Nf(i):{top:i,right:i,bottom:i,left:i}}function $i(i){const{x:t,y:e,width:r,height:n}=i;return{width:r,height:n,top:e,left:t,right:t+r,bottom:e+n,x:t,y:e}}function Pa(i,t,e){let{reference:r,floating:n}=i;const s=ei(t),o=Oc(t),a=Ac(o),l=ge(t),u=s==="y",d=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2,f=r[a]/2-n[a]/2;let h;switch(l){case"top":h={x:d,y:r.y-n.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:c};break;case"left":h={x:r.x-n.width,y:c};break;default:h={x:r.x,y:r.y}}switch(hs(t)){case"start":h[o]-=f*(e&&u?-1:1);break;case"end":h[o]+=f*(e&&u?-1:1);break}return h}const Lf=async(i,t,e)=>{const{placement:r="bottom",strategy:n="absolute",middleware:s=[],platform:o}=e,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let u=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:d,y:c}=Pa(u,r,l),f=r,h={},g=0;for(let p=0;p<a.length;p++){const{name:v,fn:b}=a[p],{x:_,y:w,data:x,reset:E}=await b({x:d,y:c,initialPlacement:r,placement:f,strategy:n,middlewareData:h,rects:u,platform:o,elements:{reference:i,floating:t}});d=_??d,c=w??c,h={...h,[v]:{...h[v],...x}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(f=E.placement),E.rects&&(u=E.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):E.rects),{x:d,y:c}=Pa(u,f,l)),p=-1)}return{x:d,y:c,placement:f,strategy:n,middlewareData:h}};async function zc(i,t){var e;t===void 0&&(t={});const{x:r,y:n,platform:s,rects:o,elements:a,strategy:l}=i,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:f=!1,padding:h=0}=Gn(t,i),g=Tc(h),p=a[f?c==="floating"?"reference":"floating":c],v=$i(await s.getClippingRect({element:(e=await(s.isElement==null?void 0:s.isElement(p)))==null||e?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),b=c==="floating"?{x:r,y:n,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),w=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=$i(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:_,strategy:l}):b);return{top:(v.top-x.top+g.top)/w.y,bottom:(x.bottom-v.bottom+g.bottom)/w.y,left:(v.left-x.left+g.left)/w.x,right:(x.right-v.right+g.right)/w.x}}const Rf=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,r;const{placement:n,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...v}=Gn(i,t);if((e=s.arrow)!=null&&e.alignmentOffset)return{};const b=ge(n),_=ei(a),w=ge(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(u.floating)),E=f||(w||!p?[Mr(a)]:zf(a)),A=g!=="none";!f&&A&&E.push(...Pf(a,p,g,x));const T=[a,...E],D=await zc(t,v),S=[];let z=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&S.push(D[b]),c){const y=Tf(n,o,x);S.push(D[y[0]],D[y[1]])}if(z=[...z,{placement:n,overflows:S}],!S.every(y=>y<=0)){var G,C;const y=(((G=s.flip)==null?void 0:G.index)||0)+1,j=T[y];if(j)return{data:{index:y,overflows:z},reset:{placement:j}};let tt=(C=z.filter(H=>H.overflows[0]<=0).sort((H,et)=>H.overflows[1]-et.overflows[1])[0])==null?void 0:C.placement;if(!tt)switch(h){case"bestFit":{var R;const H=(R=z.filter(et=>{if(A){const V=ei(et.placement);return V===_||V==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(V=>V>0).reduce((V,it)=>V+it,0)]).sort((et,V)=>et[1]-V[1])[0])==null?void 0:R[0];H&&(tt=H);break}case"initialPlacement":tt=a;break}if(n!==tt)return{reset:{placement:tt}}}return{}}}};function Ic(i){const t=xi(...i.map(s=>s.left)),e=xi(...i.map(s=>s.top)),r=fe(...i.map(s=>s.right)),n=fe(...i.map(s=>s.bottom));return{x:t,y:e,width:r-t,height:n-e}}function Mf(i){const t=i.slice().sort((n,s)=>n.y-s.y),e=[];let r=null;for(let n=0;n<t.length;n++){const s=t[n];!r||s.y-r.y>r.height/2?e.push([s]):e[e.length-1].push(s),r=s}return e.map(n=>$i(Ic(n)))}const Df=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:r,rects:n,platform:s,strategy:o}=t,{padding:a=2,x:l,y:u}=Gn(i,t),d=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(r.reference))||[]),c=Mf(d),f=$i(Ic(d)),h=Tc(a);function g(){if(c.length===2&&c[0].left>c[1].right&&l!=null&&u!=null)return c.find(v=>l>v.left-h.left&&l<v.right+h.right&&u>v.top-h.top&&u<v.bottom+h.bottom)||f;if(c.length>=2){if(ei(e)==="y"){const z=c[0],G=c[c.length-1],C=ge(e)==="top",R=z.top,y=G.bottom,j=C?z.left:G.left,tt=C?z.right:G.right,H=tt-j,et=y-R;return{top:R,bottom:y,left:j,right:tt,width:H,height:et,x:j,y:R}}const v=ge(e)==="left",b=fe(...c.map(z=>z.right)),_=xi(...c.map(z=>z.left)),w=c.filter(z=>v?z.left===_:z.right===b),x=w[0].top,E=w[w.length-1].bottom,A=_,T=b,D=T-A,S=E-x;return{top:x,bottom:E,left:A,right:T,width:D,height:S,x:A,y:x}}return f}const p=await s.getElementRects({reference:{getBoundingClientRect:g},floating:r.floating,strategy:o});return n.reference.x!==p.reference.x||n.reference.y!==p.reference.y||n.reference.width!==p.reference.width||n.reference.height!==p.reference.height?{reset:{rects:p}}:{}}}};async function jf(i,t){const{placement:e,platform:r,elements:n}=i,s=await(r.isRTL==null?void 0:r.isRTL(n.floating)),o=ge(e),a=hs(e),l=ei(e)==="y",u=["left","top"].includes(o)?-1:1,d=s&&l?-1:1,c=Gn(t,i);let{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&typeof g=="number"&&(h=a==="end"?g*-1:g),l?{x:h*d,y:f*u}:{x:f*u,y:h*d}}const Pc=function(i){return{name:"offset",options:i,async fn(t){var e,r;const{x:n,y:s,placement:o,middlewareData:a}=t,l=await jf(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:n+l.x,y:s+l.y,data:{...l,placement:o}}}}},Ff=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:r,placement:n}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:v=>{let{x:b,y:_}=v;return{x:b,y:_}}},...l}=Gn(i,t),u={x:e,y:r},d=await zc(t,l),c=ei(ge(n)),f=Sc(c);let h=u[f],g=u[c];if(s){const v=f==="y"?"top":"left",b=f==="y"?"bottom":"right",_=h+d[v],w=h-d[b];h=Ia(_,h,w)}if(o){const v=c==="y"?"top":"left",b=c==="y"?"bottom":"right",_=g+d[v],w=g-d[b];g=Ia(_,g,w)}const p=a.fn({...t,[f]:h,[c]:g});return{...p,data:{x:p.x-e,y:p.y-r}}}}};function Oe(i){return Nc(i)?(i.nodeName||"").toLowerCase():"#document"}function Nt(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function Ne(i){var t;return(t=(Nc(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function Nc(i){return i instanceof Node||i instanceof Nt(i).Node}function se(i){return i instanceof Element||i instanceof Nt(i).Element}function oe(i){return i instanceof HTMLElement||i instanceof Nt(i).HTMLElement}function Na(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Nt(i).ShadowRoot}function Yn(i){const{overflow:t,overflowX:e,overflowY:r,display:n}=Ht(i);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!["inline","contents"].includes(n)}function Bf(i){return["table","td","th"].includes(Oe(i))}function Uf(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function Bo(i){const t=Uo(),e=se(i)?Ht(i):i;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(e.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(e.contain||"").includes(r))}function Hf(i){let t=ki(i);for(;oe(t)&&!fs(t);){if(Bo(t))return t;if(Uf(t))return null;t=ki(t)}return null}function Uo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fs(i){return["html","body","#document"].includes(Oe(i))}function Ht(i){return Nt(i).getComputedStyle(i)}function ps(i){return se(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function ki(i){if(Oe(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Na(i)&&i.host||Ne(i);return Na(t)?t.host:t}function Lc(i){const t=ki(i);return fs(t)?i.ownerDocument?i.ownerDocument.body:i.body:oe(t)&&Yn(t)?t:Lc(t)}function Rc(i,t,e){var r;t===void 0&&(t=[]);const n=Lc(i),s=n===((r=i.ownerDocument)==null?void 0:r.body),o=Nt(n);return s?(Vf(o),t.concat(o,o.visualViewport||[],Yn(n)?n:[],[])):t.concat(n,Rc(n,[]))}function Vf(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function Mc(i){const t=Ht(i);let e=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=oe(i),s=n?i.offsetWidth:e,o=n?i.offsetHeight:r,a=Rr(e)!==s||Rr(r)!==o;return a&&(e=s,r=o),{width:e,height:r,$:a}}function Dc(i){return se(i)?i:i.contextElement}function _i(i){const t=Dc(i);if(!oe(t))return Ae(1);const e=t.getBoundingClientRect(),{width:r,height:n,$:s}=Mc(t);let o=(s?Rr(e.width):e.width)/r,a=(s?Rr(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Wf=Ae(0);function jc(i){const t=Nt(i);return!Uo()||!t.visualViewport?Wf:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function qf(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==Nt(i)?!1:t}function On(i,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),s=Dc(i);let o=Ae(1);t&&(r?se(r)&&(o=_i(r)):o=_i(i));const a=qf(s,e,r)?jc(s):Ae(0);let l=(n.left+a.x)/o.x,u=(n.top+a.y)/o.y,d=n.width/o.x,c=n.height/o.y;if(s){const f=Nt(s),h=r&&se(r)?Nt(r):r;let g=f,p=g.frameElement;for(;p&&r&&h!==g;){const v=_i(p),b=p.getBoundingClientRect(),_=Ht(p),w=b.left+(p.clientLeft+parseFloat(_.paddingLeft))*v.x,x=b.top+(p.clientTop+parseFloat(_.paddingTop))*v.y;l*=v.x,u*=v.y,d*=v.x,c*=v.y,l+=w,u+=x,g=Nt(p),p=g.frameElement}}return $i({width:d,height:c,x:l,y:u})}const Gf=[":popover-open",":modal"];function Fc(i){return Gf.some(t=>{try{return i.matches(t)}catch{return!1}})}function Yf(i){let{elements:t,rect:e,offsetParent:r,strategy:n}=i;const s=n==="fixed",o=Ne(r),a=t?Fc(t.floating):!1;if(r===o||a&&s)return e;let l={scrollLeft:0,scrollTop:0},u=Ae(1);const d=Ae(0),c=oe(r);if((c||!c&&!s)&&((Oe(r)!=="body"||Yn(o))&&(l=ps(r)),oe(r))){const f=On(r);u=_i(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}return{width:e.width*u.x,height:e.height*u.y,x:e.x*u.x-l.scrollLeft*u.x+d.x,y:e.y*u.y-l.scrollTop*u.y+d.y}}function Zf(i){return Array.from(i.getClientRects())}function Bc(i){return On(Ne(i)).left+ps(i).scrollLeft}function Xf(i){const t=Ne(i),e=ps(i),r=i.ownerDocument.body,n=fe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=fe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-e.scrollLeft+Bc(i);const a=-e.scrollTop;return Ht(r).direction==="rtl"&&(o+=fe(t.clientWidth,r.clientWidth)-n),{width:n,height:s,x:o,y:a}}function Jf(i,t){const e=Nt(i),r=Ne(i),n=e.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(n){s=n.width,o=n.height;const u=Uo();(!u||u&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:s,height:o,x:a,y:l}}function Kf(i,t){const e=On(i,!0,t==="fixed"),r=e.top+i.clientTop,n=e.left+i.clientLeft,s=oe(i)?_i(i):Ae(1),o=i.clientWidth*s.x,a=i.clientHeight*s.y,l=n*s.x,u=r*s.y;return{width:o,height:a,x:l,y:u}}function La(i,t,e){let r;if(t==="viewport")r=Jf(i,e);else if(t==="document")r=Xf(Ne(i));else if(se(t))r=Kf(t,e);else{const n=jc(i);r={...t,x:t.x-n.x,y:t.y-n.y}}return $i(r)}function Uc(i,t){const e=ki(i);return e===t||!se(e)||fs(e)?!1:Ht(e).position==="fixed"||Uc(e,t)}function Qf(i,t){const e=t.get(i);if(e)return e;let r=Rc(i,[]).filter(a=>se(a)&&Oe(a)!=="body"),n=null;const s=Ht(i).position==="fixed";let o=s?ki(i):i;for(;se(o)&&!fs(o);){const a=Ht(o),l=Bo(o);!l&&a.position==="fixed"&&(n=null),(s?!l&&!n:!l&&a.position==="static"&&n&&["absolute","fixed"].includes(n.position)||Yn(o)&&!l&&Uc(i,o))?r=r.filter(u=>u!==o):n=a,o=ki(o)}return t.set(i,r),r}function tp(i){let{element:t,boundary:e,rootBoundary:r,strategy:n}=i;const s=[...e==="clippingAncestors"?Qf(t,this._c):[].concat(e),r],o=s[0],a=s.reduce((l,u)=>{const d=La(t,u,n);return l.top=fe(d.top,l.top),l.right=xi(d.right,l.right),l.bottom=xi(d.bottom,l.bottom),l.left=fe(d.left,l.left),l},La(t,o,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ep(i){const{width:t,height:e}=Mc(i);return{width:t,height:e}}function ip(i,t,e){const r=oe(t),n=Ne(t),s=e==="fixed",o=On(i,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=Ae(0);if(r||!r&&!s)if((Oe(t)!=="body"||Yn(n))&&(a=ps(t)),r){const c=On(t,!0,s,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else n&&(l.x=Bc(n));const u=o.left+a.scrollLeft-l.x,d=o.top+a.scrollTop-l.y;return{x:u,y:d,width:o.width,height:o.height}}function Ra(i,t){return!oe(i)||Ht(i).position==="fixed"?null:t?t(i):i.offsetParent}function Hc(i,t){const e=Nt(i);if(!oe(i)||Fc(i))return e;let r=Ra(i,t);for(;r&&Bf(r)&&Ht(r).position==="static";)r=Ra(r,t);return r&&(Oe(r)==="html"||Oe(r)==="body"&&Ht(r).position==="static"&&!Bo(r))?e:r||Hf(i)||e}const np=async function(i){const t=this.getOffsetParent||Hc,e=this.getDimensions;return{reference:ip(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function rp(i){return Ht(i).direction==="rtl"}const sp={convertOffsetParentRelativeRectToViewportRelativeRect:Yf,getDocumentElement:Ne,getClippingRect:tp,getOffsetParent:Hc,getElementRects:np,getClientRects:Zf,getDimensions:ep,getScale:_i,isElement:se,isRTL:rp},Vc=Ff,Wc=Rf,qc=Df,Gc=(i,t,e)=>{const r=new Map,n={platform:sp,...e},s={...n.platform,_c:r};return Lf(i,t,{...n,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=globalThis,Ho=Sr.ShadowRoot&&(Sr.ShadyCSS===void 0||Sr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vo=Symbol(),Ma=new WeakMap;let Yc=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ho&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Ma.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ma.set(e,t))}return t}toString(){return this.cssText}};const op=i=>new Yc(typeof i=="string"?i:i+"",void 0,Vo),pt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new Yc(e,i,Vo)},ap=(i,t)=>{if(Ho)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=Sr.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},Da=Ho?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return op(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:lp,defineProperty:cp,getOwnPropertyDescriptor:up,getOwnPropertyNames:dp,getOwnPropertySymbols:hp,getPrototypeOf:fp}=Object,Ci=globalThis,ja=Ci.trustedTypes,pp=ja?ja.emptyScript:"",Fa=Ci.reactiveElementPolyfillSupport,vn=(i,t)=>i,Dr={toAttribute(i,t){switch(t){case Boolean:i=i?pp:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Wo=(i,t)=>!lp(i,t),Ba={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:Wo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ci.litPropertyMetadata??(Ci.litPropertyMetadata=new WeakMap);let gi=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ba){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&cp(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:s}=up(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n?.call(this)},set(o){const a=n?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ba}static _$Ei(){if(this.hasOwnProperty(vn("elementProperties")))return;const t=fp(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(vn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vn("properties"))){const e=this.properties,r=[...dp(e),...hp(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Da(n))}else t!==void 0&&e.push(Da(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ap(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Dr).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Dr;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Wo)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};gi.elementStyles=[],gi.shadowRootOptions={mode:"open"},gi[vn("elementProperties")]=new Map,gi[vn("finalized")]=new Map,Fa?.({ReactiveElement:gi}),(Ci.reactiveElementVersions??(Ci.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jr=globalThis,Fr=jr.trustedTypes,Ua=Fr?Fr.createPolicy("lit-html",{createHTML:i=>i}):void 0,Zc="$lit$",Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,Xc="?"+Ce,mp=`<${Xc}>`,ii=document,Tn=()=>ii.createComment(""),zn=i=>i===null||typeof i!="object"&&typeof i!="function",qo=Array.isArray,bp=i=>qo(i)||typeof i?.[Symbol.iterator]=="function",Bs=`[ 	
\f\r]`,hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ha=/-->/g,Va=/>/g,We=RegExp(`>|${Bs}(?:([^\\s"'>=/]+)(${Bs}*=${Bs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wa=/'/g,qa=/"/g,Jc=/^(?:script|style|textarea|title)$/i,gp=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),J=gp(1),Ei=Symbol.for("lit-noChange"),$t=Symbol.for("lit-nothing"),Ga=new WeakMap,Ze=ii.createTreeWalker(ii,129);function Kc(i,t){if(!qo(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ua!==void 0?Ua.createHTML(t):t}const vp=(i,t)=>{const e=i.length-1,r=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=hn;for(let a=0;a<e;a++){const l=i[a];let u,d,c=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===hn?d[1]==="!--"?o=Ha:d[1]!==void 0?o=Va:d[2]!==void 0?(Jc.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=We):d[3]!==void 0&&(o=We):o===We?d[0]===">"?(o=n??hn,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?We:d[3]==='"'?qa:Wa):o===qa||o===Wa?o=We:o===Ha||o===Va?o=hn:(o=We,n=void 0);const h=o===We&&i[a+1].startsWith("/>")?" ":"";s+=o===hn?l+mp:c>=0?(r.push(u),l.slice(0,c)+Zc+l.slice(c)+Ce+h):l+Ce+(c===-2?a:h)}return[Kc(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};let oo=class Qc{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,d]=vp(t,e);if(this.el=Qc.createElement(u,r),Ze.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Ze.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(Zc)){const f=d[o++],h=n.getAttribute(c).split(Ce),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:g[2],strings:h,ctor:g[1]==="."?_p:g[1]==="?"?wp:g[1]==="@"?xp:ms}),n.removeAttribute(c)}else c.startsWith(Ce)&&(l.push({type:6,index:s}),n.removeAttribute(c));if(Jc.test(n.tagName)){const c=n.textContent.split(Ce),f=c.length-1;if(f>0){n.textContent=Fr?Fr.emptyScript:"";for(let h=0;h<f;h++)n.append(c[h],Tn()),Ze.nextNode(),l.push({type:2,index:++s});n.append(c[f],Tn())}}}else if(n.nodeType===8)if(n.data===Xc)l.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ce,c+1))!==-1;)l.push({type:7,index:s}),c+=Ce.length-1}s++}}static createElement(t,e){const r=ii.createElement("template");return r.innerHTML=t,r}};function Si(i,t,e=i,r){var n,s;if(t===Ei)return t;let o=r!==void 0?(n=e.o)==null?void 0:n[r]:e.l;const a=zn(t)?void 0:t._$litDirective$;return o?.constructor!==a&&((s=o?._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=o:e.l=o),o!==void 0&&(t=Si(i,o._$AS(i,t.values),o,r)),t}let yp=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??ii).importNode(e,!0);Ze.currentNode=n;let s=Ze.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new Go(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new $p(s,this,t)),this._$AV.push(u),l=r[++a]}o!==l?.index&&(s=Ze.nextNode(),o++)}return Ze.currentNode=ii,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Go=class tu{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,n){this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Si(this,t,e),zn(t)?t===$t||t==null||t===""?(this._$AH!==$t&&this._$AR(),this._$AH=$t):t!==this._$AH&&t!==Ei&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bp(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$t&&zn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ii.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=oo.createElement(Kc(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(r);else{const o=new yp(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let e=Ga.get(t.strings);return e===void 0&&Ga.set(t.strings,e=new oo(t)),e}k(t){qo(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const s of t)n===e.length?e.push(r=new tu(this.O(Tn()),this.O(Tn()),this,this.options)):r=e[n],r._$AI(s),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}},ms=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,s){this.type=1,this._$AH=$t,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$t}_$AI(t,e=this,r,n){const s=this.strings;let o=!1;if(s===void 0)t=Si(this,t,e,0),o=!zn(t)||t!==this._$AH&&t!==Ei,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=Si(this,a[r+l],e,l),u===Ei&&(u=this._$AH[l]),o||(o=!zn(u)||u!==this._$AH[l]),u===$t?t=$t:t!==$t&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!n&&this.j(t)}j(t){t===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class _p extends ms{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$t?void 0:t}}class wp extends ms{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$t)}}class xp extends ms{constructor(t,e,r,n,s){super(t,e,r,n,s),this.type=5}_$AI(t,e=this){if((t=Si(this,t,e,0)??$t)===Ei)return;const r=this._$AH,n=t===$t&&r!==$t||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==$t&&(r===$t||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class $p{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Si(this,t)}}const Ya=jr.litHtmlPolyfillSupport;Ya?.(oo,Go),(jr.litHtmlVersions??(jr.litHtmlVersions=[])).push("3.2.0");const Ai=(i,t,e)=>{const r=e?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const s=e?.renderBefore??null;r._$litPart$=n=new Go(t.insertBefore(Tn(),s),s,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends gi{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ai(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Ei}}var Za;ht._$litElement$=!0,ht.finalized=!0,(Za=globalThis.litElementHydrateSupport)==null||Za.call(globalThis,{LitElement:ht});const Xa=globalThis.litElementPolyfillSupport;Xa?.({LitElement:ht});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kp={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:Wo},Cp=(i=kp,t,e)=>{const{kind:r,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+r)};function F(i){return(t,e)=>typeof e=="object"?Cp(i,t,e):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ui(i){return F({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ep=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sp={CHILD:2},Ap=i=>(...t)=>({_$litDirective$:i,values:t});let Op=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this.t=t,this._$AM=e,this.i=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const n of r)(e=n._$AO)==null||e.call(n,t,!1),yn(n,t);return!0},Br=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},eu=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Ip(t)}};function Tp(i){this._$AN!==void 0?(Br(this),this._$AM=i,eu(this)):this._$AM=i}function zp(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)yn(r[s],!1),Br(r[s]);else r!=null&&(yn(r,!1),Br(r));else yn(this,i)}const Ip=i=>{i.type==Sp.CHILD&&(i._$AP??(i._$AP=zp),i._$AQ??(i._$AQ=Tp))};let Pp=class extends Op{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),eu(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&(yn(this,t),Br(this))}setValue(t){if(Ep(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=()=>new Np;let Np=class{};const Us=new WeakMap,pe=Ap(class extends Pp{render(i){return $t}update(i,[t]){var e;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),$t}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=Us.get(t);e===void 0&&(e=new WeakMap,Us.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Us.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const iu=Object.freeze({left:0,top:0,width:16,height:16}),Ur=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Zn=Object.freeze({...iu,...Ur}),ao=Object.freeze({...Zn,body:"",hidden:!1}),Lp=Object.freeze({width:null,height:null}),nu=Object.freeze({...Lp,...Ur});function Rp(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:r(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(i.slice(0,i.length-e.length));return isNaN(s)?0:(s=s/n,s%1===0?r(s):0)}}return t}const Mp=/[\s,]+/;function Dp(i,t){t.split(Mp).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const ru={...nu,preserveAspectRatio:""};function Ja(i){const t={...ru},e=(r,n)=>i.getAttribute(r)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Rp(e("rotate","")),Dp(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function jp(i,t){for(const e in ru)if(i[e]!==t[e])return!0;return!1}const _n=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xn=(i,t,e,r="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),u={provider:n.length>0?n[0]:r,prefix:l,name:a};return t&&!Ar(u)?null:u}const s=n[0],o=s.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return t&&!Ar(a)?null:a}if(e&&r===""){const a={provider:r,prefix:"",name:s};return t&&!Ar(a,e)?null:a}return null},Ar=(i,t)=>i?!!((i.provider===""||i.provider.match(_n))&&(t&&i.prefix===""||i.prefix.match(_n))&&i.name.match(_n)):!1;function Fp(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const r=((i.rotate||0)+(t.rotate||0))%4;return r&&(e.rotate=r),e}function Ka(i,t){const e=Fp(i,t);for(const r in ao)r in Ur?r in i&&!(r in e)&&(e[r]=Ur[r]):r in t?e[r]=t[r]:r in i&&(e[r]=i[r]);return e}function Bp(i,t){const e=i.icons,r=i.aliases||Object.create(null),n=Object.create(null);function s(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=r[o]&&r[o].parent,l=a&&s(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(r)).forEach(s),n}function Up(i,t,e){const r=i.icons,n=i.aliases||Object.create(null);let s={};function o(a){s=Ka(r[a]||n[a],s)}return o(t),e.forEach(o),Ka(i,s)}function su(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const r=Bp(i);for(const n in r){const s=r[n];s&&(t(n,Up(i,n,s)),e.push(n))}return e}const Hp={provider:"",aliases:{},not_found:{},...iu};function Hs(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function ou(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Hs(i,Hp))return null;const e=t.icons;for(const n in e){const s=e[n];if(!n.match(_n)||typeof s.body!="string"||!Hs(s,ao))return null}const r=t.aliases||Object.create(null);for(const n in r){const s=r[n],o=s.parent;if(!n.match(_n)||typeof o!="string"||!e[o]&&!r[o]||!Hs(s,ao))return null}return t}const Hr=Object.create(null);function Vp(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function Te(i,t){const e=Hr[i]||(Hr[i]=Object.create(null));return e[t]||(e[t]=Vp(i,t))}function Yo(i,t){return ou(t)?su(t,(e,r)=>{r?i.icons[e]=r:i.missing.add(e)}):[]}function Wp(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function qp(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(Hr)).forEach(r=>{(typeof r=="string"&&typeof t=="string"?[t]:Object.keys(Hr[r]||{})).forEach(n=>{const s=Te(r,n);e=e.concat(Object.keys(s.icons).map(o=>(r!==""?"@"+r+":":"")+n+":"+o))})}),e}let In=!1;function au(i){return typeof i=="boolean"&&(In=i),In}function Pn(i){const t=typeof i=="string"?Xn(i,!0,In):i;if(t){const e=Te(t.provider,t.prefix),r=t.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function lu(i,t){const e=Xn(i,!0,In);if(!e)return!1;const r=Te(e.provider,e.prefix);return Wp(r,e.name,t)}function Qa(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),In&&!t&&!i.prefix){let n=!1;return ou(i)&&(i.prefix="",su(i,(s,o)=>{o&&lu(s,o)&&(n=!0)})),n}const e=i.prefix;if(!Ar({provider:t,prefix:e,name:"a"}))return!1;const r=Te(t,e);return!!Yo(r,i)}function tl(i){return!!Pn(i)}function Gp(i){const t=Pn(i);return t?{...Zn,...t}:null}function Yp(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return i.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const s=n.provider,o=n.prefix,a=n.name,l=e[s]||(e[s]=Object.create(null)),u=l[o]||(l[o]=Te(s,o));let d;a in u.icons?d=t.loaded:o===""||u.missing.has(a)?d=t.missing:d=t.pending;const c={provider:s,prefix:o,name:a};d.push(c)}),t}function cu(i,t){i.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(n=>n.id!==t))})}function Zp(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const r=i.provider,n=i.prefix;t.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const u=l.name;if(i.icons[u])o.loaded.push({provider:r,prefix:n,name:u});else if(i.missing.has(u))o.missing.push({provider:r,prefix:n,name:u});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||cu([i],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let Xp=0;function Jp(i,t,e){const r=Xp++,n=cu.bind(null,e,r);if(!t.pending.length)return n;const s={id:r,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),n}const lo=Object.create(null);function el(i,t){lo[i]=t}function co(i){return lo[i]||lo[""]}function Kp(i,t=!0,e=!1){const r=[];return i.forEach(n=>{const s=typeof n=="string"?Xn(n,t,e):n;s&&r.push(s)}),r}var Qp={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function tm(i,t,e,r){const n=i.resources.length,s=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let A=i.resources.slice(0);for(o=[];A.length>1;){const T=Math.floor(Math.random()*A.length);o.push(A[T]),A=A.slice(0,T).concat(A.slice(T+1))}o=o.concat(A)}else o=i.resources.slice(s).concat(i.resources.slice(0,s));const a=Date.now();let l="pending",u=0,d,c=null,f=[],h=[];typeof r=="function"&&h.push(r);function g(){c&&(clearTimeout(c),c=null)}function p(){l==="pending"&&(l="aborted"),g(),f.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),f=[]}function v(A,T){T&&(h=[]),typeof A=="function"&&h.push(A)}function b(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:f.length,subscribe:v,abort:p}}function _(){l="failed",h.forEach(A=>{A(void 0,d)})}function w(){f.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),f=[]}function x(A,T,D){const S=T!=="success";switch(f=f.filter(z=>z!==A),l){case"pending":break;case"failed":if(S||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){d=D,_();return}if(S){d=D,f.length||(o.length?E():_());return}if(g(),w(),!i.random){const z=i.resources.indexOf(A.resource);z!==-1&&z!==i.index&&(i.index=z)}l="completed",h.forEach(z=>{z(D)})}function E(){if(l!=="pending")return;g();const A=o.shift();if(A===void 0){if(f.length){c=setTimeout(()=>{g(),l==="pending"&&(w(),_())},i.timeout);return}_();return}const T={status:"pending",resource:A,callback:(D,S)=>{x(T,D,S)}};f.push(T),u++,c=setTimeout(E,i.rotate),e(A,t,T.callback)}return setTimeout(E),b}function uu(i){const t={...Qp,...i};let e=[];function r(){e=e.filter(o=>o().status==="pending")}function n(o,a,l){const u=tm(t,o,a,(d,c)=>{r(),l&&l(d,c)});return e.push(u),u}function s(o){return e.find(a=>o(a))||null}return{query:n,find:s,setIndex:o=>{t.index=o},getIndex:()=>t.index,cleanup:r}}function Zo(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const bs=Object.create(null),_r=["https://api.simplesvg.com","https://api.unisvg.com"],uo=[];for(;_r.length>0;)_r.length===1||Math.random()>.5?uo.push(_r.shift()):uo.push(_r.pop());bs[""]=Zo({resources:["https://api.iconify.design"].concat(uo)});function il(i,t){const e=Zo(t);return e===null?!1:(bs[i]=e,!0)}function gs(i){return bs[i]}function em(){return Object.keys(bs)}function nl(){}const Vs=Object.create(null);function im(i){if(!Vs[i]){const t=gs(i);if(!t)return;const e=uu(t),r={config:t,redundancy:e};Vs[i]=r}return Vs[i]}function du(i,t,e){let r,n;if(typeof i=="string"){const s=co(i);if(!s)return e(void 0,424),nl;n=s.send;const o=im(i);o&&(r=o.redundancy)}else{const s=Zo(i);if(s){r=uu(s);const o=i.resources?i.resources[0]:"",a=co(o);a&&(n=a.send)}}return!r||!n?(e(void 0,424),nl):r.query(t,n,e)().abort}const rl="iconify2",Nn="iconify",hu=Nn+"-count",sl=Nn+"-version",fu=36e5,nm=168,rm=50;function ho(i,t){try{return i.getItem(t)}catch{}}function Xo(i,t,e){try{return i.setItem(t,e),!0}catch{}}function ol(i,t){try{i.removeItem(t)}catch{}}function fo(i,t){return Xo(i,hu,t.toString())}function po(i){return parseInt(ho(i,hu))||0}const Ke={local:!0,session:!0},pu={local:new Set,session:new Set};let Jo=!1;function sm(i){Jo=i}let wr=typeof window>"u"?{}:window;function mu(i){const t=i+"Storage";try{if(wr&&wr[t]&&typeof wr[t].length=="number")return wr[t]}catch{}Ke[i]=!1}function bu(i,t){const e=mu(i);if(!e)return;const r=ho(e,sl);if(r!==rl){if(r){const a=po(e);for(let l=0;l<a;l++)ol(e,Nn+l.toString())}Xo(e,sl,rl),fo(e,0);return}const n=Math.floor(Date.now()/fu)-nm,s=a=>{const l=Nn+a.toString(),u=ho(e,l);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}ol(e,l)}};let o=po(e);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,fo(e,o)):pu[i].add(a))}function gu(){if(!Jo){sm(!0);for(const i in Ke)bu(i,t=>{const e=t.data,r=t.provider,n=e.prefix,s=Te(r,n);if(!Yo(s,e).length)return!1;const o=e.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function om(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const r in Ke)bu(r,n=>{const s=n.data;return n.provider!==i.provider||s.prefix!==i.prefix||s.lastModified===t});return!0}function am(i,t){Jo||gu();function e(r){let n;if(!Ke[r]||!(n=mu(r)))return;const s=pu[r];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=po(n),o>=rm||!fo(n,o+1))return;const a={cached:Math.floor(Date.now()/fu),provider:i.provider,data:t};return Xo(n,Nn+o.toString(),JSON.stringify(a))}t.lastModified&&!om(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function al(){}function lm(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Zp(i)}))}function cm(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:r}=i,n=i.iconsToLoad;delete i.iconsToLoad;let s;!n||!(s=co(e))||s.prepare(e,r,n).forEach(o=>{du(e,o,a=>{if(typeof a!="object")o.icons.forEach(l=>{i.missing.add(l)});else try{const l=Yo(i,a);if(!l.length)return;const u=i.pendingIcons;u&&l.forEach(d=>{u.delete(d)}),am(i,a)}catch(l){console.error(l)}lm(i)})})}))}const Ko=(i,t)=>{const e=Kp(i,!0,au()),r=Yp(e);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,al)}),()=>{l=!1}}const n=Object.create(null),s=[];let o,a;return r.pending.forEach(l=>{const{provider:u,prefix:d}=l;if(d===a&&u===o)return;o=u,a=d,s.push(Te(u,d));const c=n[u]||(n[u]=Object.create(null));c[d]||(c[d]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:d,name:c}=l,f=Te(u,d),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(c)||(h.add(c),n[u][d].push(c))}),s.forEach(l=>{const{provider:u,prefix:d}=l;n[u][d].length&&cm(l,n[u][d])}),t?Jp(t,r,s):al},um=i=>new Promise((t,e)=>{const r=typeof i=="string"?Xn(i,!0):i;if(!r){e(i);return}Ko([r||i],n=>{if(n.length&&r){const s=Pn(r);if(s){t({...Zn,...s});return}}e(i)})});function dm(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function hm(i,t){const e=typeof i=="string"?Xn(i,!0,!0):null;if(!e){const s=dm(i);return{value:i,data:s}}const r=Pn(e);if(r!==void 0||!e.prefix)return{value:i,name:e,data:r};const n=Ko([e],()=>t(i,e,Pn(e)));return{value:i,name:e,loading:n}}function Ws(i){return i.hasAttribute("inline")}let vu=!1;try{vu=navigator.vendor.indexOf("Apple")===0}catch{}function fm(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(vu||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const pm=/(-?[0-9.]*[0-9]+[0-9.]*)/g,mm=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function mo(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const r=i.split(pm);if(r===null||!r.length)return i;const n=[];let s=r.shift(),o=mm.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?n.push(s):n.push(Math.ceil(a*t*e)/e)}else n.push(s);if(s=r.shift(),s===void 0)return n.join("");o=!o}}function bm(i,t="defs"){let e="";const r=i.indexOf("<"+t);for(;r>=0;){const n=i.indexOf(">",r),s=i.indexOf("</"+t);if(n===-1||s===-1)break;const o=i.indexOf(">",s);if(o===-1)break;e+=i.slice(n+1,s).trim(),i=i.slice(0,r).trim()+i.slice(o+1)}return{defs:e,content:i}}function gm(i,t){return i?"<defs>"+i+"</defs>"+t:t}function vm(i,t,e){const r=bm(i);return gm(r.defs,t+r.content+e)}const ym=i=>i==="unset"||i==="undefined"||i==="none";function yu(i,t){const e={...Zn,...i},r={...nu,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let s=e.body;[e,r].forEach(p=>{const v=[],b=p.hFlip,_=p.vFlip;let w=p.rotate;b?_?w+=2:(v.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),v.push("scale(-1 1)"),n.top=n.left=0):_&&(v.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),v.push("scale(1 -1)"),n.top=n.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=n.height/2+n.top,v.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:v.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:x=n.width/2+n.left,v.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(n.left!==n.top&&(x=n.left,n.left=n.top,n.top=x),n.width!==n.height&&(x=n.width,n.width=n.height,n.height=x)),v.length&&(s=vm(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const o=r.width,a=r.height,l=n.width,u=n.height;let d,c;o===null?(c=a===null?"1em":a==="auto"?u:a,d=mo(c,l/u)):(d=o==="auto"?l:o,c=a===null?mo(d,u/l):a==="auto"?u:a);const f={},h=(p,v)=>{ym(v)||(f[p]=v.toString())};h("width",d),h("height",c);const g=[n.left,n.top,l,u];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:s}}function Qo(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)e+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function _m(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function wm(i){return"data:image/svg+xml,"+_m(i)}function _u(i){return'url("'+wm(i)+'")'}const xm=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let Vr=xm();function $m(i){Vr=i}function km(){return Vr}function Cm(i,t){const e=gs(i);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const s=t+".json?icons=";r=e.maxURL-n-e.path.length-s.length}return r}function Em(i){return i===404}const Sm=(i,t,e)=>{const r=[],n=Cm(i,t),s="icons";let o={type:s,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,u)=>{a+=l.length+1,a>=n&&u>0&&(r.push(o),o={type:s,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),r.push(o),r};function Am(i){if(typeof i=="string"){const t=gs(i);if(t)return t.path}return"/"}const Om=(i,t,e)=>{if(!Vr){e("abort",424);return}let r=Am(t.provider);switch(t.type){case"icons":{const s=t.prefix,o=t.icons.join(","),a=new URLSearchParams({icons:o});r+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:e("abort",400);return}let n=503;Vr(i+r).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{e(Em(o)?"abort":"next",o)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?e("abort",s):e("next",n)});return}setTimeout(()=>{e("success",s)})}).catch(()=>{e("next",n)})},Tm={prepare:Sm,send:Om};function ll(i,t){switch(i){case"local":case"session":Ke[i]=t;break;case"all":for(const e in Ke)Ke[e]=t;break}}const qs="data-style";let wu="";function zm(i){wu=i}function cl(i,t){let e=Array.from(i.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(qs));e||(e=document.createElement("style"),e.setAttribute(qs,qs),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+wu}function xu(){el("",Tm),au(!0);let i;try{i=window}catch{}if(i){if(gu(),i.IconifyPreload!==void 0){const t=i.IconifyPreload,e="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Qa(r))&&console.error(e)}catch{console.error(e)}})}if(i.IconifyProviders!==void 0){const t=i.IconifyProviders;if(typeof t=="object"&&t!==null)for(const e in t){const r="IconifyProviders["+e+"] is invalid.";try{const n=t[e];if(typeof n!="object"||!n||n.resources===void 0)continue;il(e,n)||console.error(r)}catch{console.error(r)}}}}return{enableCache:t=>ll(t,!0),disableCache:t=>ll(t,!1),iconLoaded:tl,iconExists:tl,getIcon:Gp,listIcons:qp,addIcon:lu,addCollection:Qa,calculateSize:mo,buildIcon:yu,iconToHTML:Qo,svgToURL:_u,loadIcons:Ko,loadIcon:um,addAPIProvider:il,appendCustomStyle:zm,_api:{getAPIConfig:gs,setAPIModule:el,sendAPIQuery:du,setFetch:$m,getFetch:km,listAPIProviders:em}}}const bo={"background-color":"currentColor"},$u={"background-color":"transparent"},ul={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},dl={"-webkit-mask":bo,mask:bo,background:$u};for(const i in dl){const t=dl[i];for(const e in ul)t[i+"-"+e]=ul[e]}function hl(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Im(i,t,e){const r=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const s=i.attributes,o=Qo(n,{...s,width:t.width+"",height:t.height+""}),a=_u(o),l=r.style,u={"--svg":a,width:hl(s.width),height:hl(s.height),...e?bo:$u};for(const d in u)l.setProperty(d,u[d]);return r}let wn;function Pm(){try{wn=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{wn=null}}function Nm(i){return wn===void 0&&Pm(),wn?wn.createHTML(i):i}function Lm(i){const t=document.createElement("span"),e=i.attributes;let r="";e.width||(r="width: inherit;"),e.height||(r+="height: inherit;"),r&&(e.style=r);const n=Qo(i.body,e);return t.innerHTML=Nm(n),t.firstChild}function go(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function fl(i,t){const e=t.icon.data,r=t.customisations,n=yu(e,r);r.preserveAspectRatio&&(n.attributes.preserveAspectRatio=r.preserveAspectRatio);const s=t.renderedMode;let o;switch(s){case"svg":o=Lm(n);break;default:o=Im(n,{...Zn,...e},s==="mask")}const a=go(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function pl(i,t,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:r}}function Rm(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const r=t.get(i);if(r)return r;const n=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends e{constructor(){super(),Ve(this,"_shadowRoot"),Ve(this,"_initialised",!1),Ve(this,"_state"),Ve(this,"_checkQueued",!1),Ve(this,"_connected",!1),Ve(this,"_observer",null),Ve(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=Ws(this);cl(a,l),this._state=pl({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=Ws(this),u=this._state;l!==u.inline&&(u.inline=l,cl(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Ws(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}fl(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const u=this.getAttribute("mode"),d=Ja(this);(a.attrMode!==u||jp(a.customisations,d)||!go(this._shadowRoot))&&this._renderIcon(a.icon,d,u)}_iconChanged(a){const l=hm(a,(u,d,c)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==u)return;const h={value:u,name:d,data:c};h.data?this._gotIconData(h):f.icon=h});l.data?this._gotIconData(l):this._state=pl(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=go(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Ja(this),this.getAttribute("mode"))}_renderIcon(a,l,u){const d=fm(a.data.body,u),c=this._state.inline;fl(this._shadowRoot,this._state={rendered:!0,icon:a,inline:c,customisations:l,attrMode:u,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(u=>u.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in s.prototype||Object.defineProperty(s.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=xu();for(const a in o)s[a]=s.prototype[a]=o[a];return t.define(i,s),s}Rm()||xu();const Mm=pt`
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
`,Dm=pt`
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
`,Le={scrollbar:Mm,globalStyles:Dm},ku=class ut{static set config(t){this._config={...ut._config,...t}}static get config(){return ut._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Le.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){ut.init()}static init(){ut.addGlobalStyles(),ut.defineCustomElement("bim-button",Hm),ut.defineCustomElement("bim-checkbox",Hi),ut.defineCustomElement("bim-color-input",li),ut.defineCustomElement("bim-context-menu",vo),ut.defineCustomElement("bim-dropdown",ye),ut.defineCustomElement("bim-grid",ia),ut.defineCustomElement("bim-icon",Km),ut.defineCustomElement("bim-input",Kn),ut.defineCustomElement("bim-label",Wi),ut.defineCustomElement("bim-number-input",Mt),ut.defineCustomElement("bim-option",Ot),ut.defineCustomElement("bim-panel",ci),ut.defineCustomElement("bim-panel-section",qi),ut.defineCustomElement("bim-selector",Gi),ut.defineCustomElement("bim-table",Yt),ut.defineCustomElement("bim-tabs",di),ut.defineCustomElement("bim-tab",Ft),ut.defineCustomElement("bim-table-cell",ju),ut.defineCustomElement("bim-table-children",Bu),ut.defineCustomElement("bim-table-group",Hu),ut.defineCustomElement("bim-table-row",ui),ut.defineCustomElement("bim-text-input",ce),ut.defineCustomElement("bim-toolbar",$s),ut.defineCustomElement("bim-toolbar-group",ws),ut.defineCustomElement("bim-toolbar-section",Xi),ut.defineCustomElement("bim-viewport",td)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let r=0;r<10;r++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};ku._config={sectionLabelOnVerticalToolbar:!1};let ta=ku,Rt=class extends ht{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const r of t)this.elements.add(r);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const r of e)r.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const r=e[0];if(!r.isIntersecting)return;const n=r.target;t.unobserve(n);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][s];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,r=[...this.elements][e];r&&t.observe(r)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const r=document.createDocumentFragment();if(t.length===0)return Ai(t(),r),r.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const s=t,o=l=>(n={...n,...l},Ai(s(n),r),n);o(e);const a=()=>n;return[r.firstElementChild,o,a]}};var jm=Object.defineProperty,Fm=Object.getOwnPropertyDescriptor,Cu=(i,t,e,r)=>{for(var n=Fm(t,e),s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&jm(t,e,n),n},St;const ea=(St=class extends ht{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(i){this._placement=i,this.updatePosition()}static removeMenus(){for(const i of St.menus)i instanceof St&&(i.visible=!1);St.dialog.close(),St.dialog.remove()}get visible(){return this._visible}set visible(i){var t;this._visible=i,i?(St.dialog.parentElement||document.body.append(St.dialog),this._previousContainer=this.parentElement,St.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,St.dialog.append(this),St.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const i=this.placement??"right",t=await Gc(this._previousContainer,this,{placement:i,middleware:[Pc(10),qc(),Wc(),Vc({padding:5})]}),{x:e,y:r}=t;this.style.left=`${e}px`,this.style.top=`${r}px`}connectedCallback(){super.connectedCallback(),St.menus.push(this)}render(){return J` <slot></slot> `}},St.styles=[Le.scrollbar,pt`
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
    `],St.dialog=Rt.create(()=>J` <dialog
      @click=${i=>{i.target===St.dialog&&St.removeMenus()}}
      @cancel=${()=>St.removeMenus()}
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
    ></dialog>`),St.menus=[],St);Cu([F({type:String,reflect:!0})],ea.prototype,"placement");Cu([F({type:Boolean,reflect:!0})],ea.prototype,"visible");let vo=ea;var Bm=Object.defineProperty,Um=Object.getOwnPropertyDescriptor,Qt=(i,t,e,r)=>{for(var n=r>1?void 0:r?Um(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Bm(t,e,n),n},fn;const qt=(fn=class extends ht{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=Oi(),this._tooltip=Oi(),this._mouseLeave=!1,this.onClick=i=>{i.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const i=this._contextMenu;if(i){const t=this.getAttribute("data-context-group");t&&i.setAttribute("data-context-group",t),this.closeNestedContexts();const e=ta.newRandomId();for(const r of i.children)r instanceof fn&&r.setAttribute("data-context-group",e);i.visible=!0}},this.mouseLeave=!0}set loading(i){if(this._loading=i,i)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=i,this.icon="eos-icons:loading";else{const{disabled:t,icon:e}=this._stateBeforeLoading;this.disabled=t,this.icon=e}}get loading(){return this._loading}set mouseLeave(i){this._mouseLeave=i,i&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:i}=this._parent,{value:t}=this._tooltip;i&&t&&Gc(i,t,{placement:"bottom",middleware:[Pc(10),qc(),Wc(),Vc({padding:5})]}).then(e=>{const{x:r,y:n}=e;Object.assign(t.style,{left:`${r}px`,top:`${n}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const i=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},i)}closeNestedContexts(){const i=this.getAttribute("data-context-group");if(i)for(const t of vo.dialog.children){const e=t.getAttribute("data-context-group");if(t instanceof vo&&e===i){t.visible=!1,t.removeAttribute("data-context-group");for(const r of t.children)r instanceof fn&&(r.closeNestedContexts(),r.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const i=J`
      <div ${pe(this._tooltip)} class="tooltip">
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
      <div ${pe(this._parent)} class="parent" @click=${this.onClick}>
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
    `}},fn.styles=pt`
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
  `,fn);Qt([F({type:String,reflect:!0})],qt.prototype,"label",2);Qt([F({type:Boolean,attribute:"label-hidden",reflect:!0})],qt.prototype,"labelHidden",2);Qt([F({type:Boolean,reflect:!0})],qt.prototype,"active",2);Qt([F({type:Boolean,reflect:!0,attribute:"disabled"})],qt.prototype,"disabled",2);Qt([F({type:String,reflect:!0})],qt.prototype,"icon",2);Qt([F({type:Boolean,reflect:!0})],qt.prototype,"vertical",2);Qt([F({type:Number,attribute:"tooltip-time",reflect:!0})],qt.prototype,"tooltipTime",2);Qt([F({type:Boolean,attribute:"tooltip-visible",reflect:!0})],qt.prototype,"tooltipVisible",2);Qt([F({type:String,attribute:"tooltip-title",reflect:!0})],qt.prototype,"tooltipTitle",2);Qt([F({type:String,attribute:"tooltip-text",reflect:!0})],qt.prototype,"tooltipText",2);Qt([F({type:Boolean,reflect:!0})],qt.prototype,"loading",1);let Hm=qt;var Vm=Object.defineProperty,Jn=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Vm(t,e,n),n};const Eu=class extends ht{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return J`
      <div class="parent">
        ${this.label?J`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};Eu.styles=pt`
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
  `;let Hi=Eu;Jn([F({type:String,reflect:!0})],Hi.prototype,"icon");Jn([F({type:String,reflect:!0})],Hi.prototype,"name");Jn([F({type:String,reflect:!0})],Hi.prototype,"label");Jn([F({type:Boolean,reflect:!0})],Hi.prototype,"checked");Jn([F({type:Boolean,reflect:!0})],Hi.prototype,"inverted");var Wm=Object.defineProperty,Vi=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Wm(t,e,n),n};const Su=class extends ht{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=Oi(),this._textInput=Oi(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:r}=t;this.color=e,r&&(this.opacity=r)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:r}=e;let n=r.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return J`
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
                ${pe(this._colorInput)}
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
                ${pe(this._textInput)}
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
    `}};Su.styles=pt`
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
  `;let li=Su;Vi([F({type:String,reflect:!0})],li.prototype,"name");Vi([F({type:String,reflect:!0})],li.prototype,"label");Vi([F({type:String,reflect:!0})],li.prototype,"icon");Vi([F({type:Boolean,reflect:!0})],li.prototype,"vertical");Vi([F({type:Number,reflect:!0})],li.prototype,"opacity");Vi([F({type:String,reflect:!0})],li.prototype,"color");const Wr=(i,t={},e=!0)=>{let r={};for(const n of i.children){const s=n,o=s.getAttribute("name")||s.getAttribute("label"),a=t[o];if(o){if("value"in s&&typeof s.value<"u"&&s.value!==null){const l=s.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;r[o]=a?a(s.value):s.value}else if(e){const l=Wr(s,t);if(Object.keys(l).length===0)continue;r[o]=a?a(l):l}}else e&&(r={...r,...Wr(s,t)})}return r},vs=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,qm=[">=","<=","=",">","<","?","/","#"];function ml(i){const t=qm.find(o=>i.split(o).length===2),e=i.split(t).map(o=>o.trim()),[r,n]=e,s=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):vs(n);return{key:r,condition:t,value:s}}const yo=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(r=>r.trim());for(const r of e){const n=!r.startsWith("(")&&!r.endsWith(")"),s=r.startsWith("(")&&r.endsWith(")");if(n){const o=ml(r);t.push(o)}if(s){const o={operator:"&",queries:r.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const u=ml(a);return l>0&&(u.operator="&"),u})};t.push(o)}}return t}catch{return null}},bl=(i,t,e)=>{let r=!1;switch(t){case"=":r=i===e;break;case"?":r=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(r=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(r=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(r=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(r=i>=e);break;case"/":r=String(i).startsWith(String(e));break}return r};var Gm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,Re=(i,t,e,r)=>{for(var n=r>1?void 0:r?Ym(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Gm(t,e,n),n};const Au=class extends ht{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?vs(this.label):this.label}set value(t){this._value=t}render(){return J`
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
    `}};Au.styles=pt`
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
  `;let Ot=Au;Re([F({type:String,reflect:!0})],Ot.prototype,"img",2);Re([F({type:String,reflect:!0})],Ot.prototype,"label",2);Re([F({type:String,reflect:!0})],Ot.prototype,"icon",2);Re([F({type:Boolean,reflect:!0})],Ot.prototype,"checked",2);Re([F({type:Boolean,reflect:!0})],Ot.prototype,"checkbox",2);Re([F({type:Boolean,attribute:"no-mark",reflect:!0})],Ot.prototype,"noMark",2);Re([F({converter:{fromAttribute(i){return i&&vs(i)}}})],Ot.prototype,"value",1);Re([F({type:Boolean,reflect:!0})],Ot.prototype,"vertical",2);var Zm=Object.defineProperty,Xm=Object.getOwnPropertyDescriptor,Me=(i,t,e,r)=>{for(var n=r>1?void 0:r?Xm(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Zm(t,e,n),n};const Ou=class extends Rt{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=Oi(),this.onOptionClick=t=>{const e=t.target,r=this._value.has(e);if(!this.multiple&&!this.required&&!r)this._value=new Set([e]);else if(!this.multiple&&!this.required&&r)this._value=new Set([]);else if(!this.multiple&&this.required&&!r)this._value=new Set([e]);else if(this.multiple&&!this.required&&!r)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&r){const n=[...this._value].filter(s=>s!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!r)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&r){const n=[...this._value].filter(o=>o!==e),s=new Set(n);s.size!==0&&(this._value=s)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const r of this.elements)e.append(r);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const r of t){const n=this.findOption(r);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(t=>t instanceof Ot&&t.checked).map(t=>t.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof Ot&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const r=new Set;for(const n of this.elements){if(!(n instanceof Ot)){n.remove();continue}n.checked&&r.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=r}updateOptionsState(){for(const t of this._options)t instanceof Ot&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(e=>e instanceof Ot?e.label===t||e.value===t:!1)}render(){let t,e,r;if(this._value.size===0)t="Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=n?.label||n?.value,e=n?.img,r=n?.icon}else t=`Multiple (${this._value.size})`;return J`
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
            ${pe(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};Ou.styles=[Le.scrollbar,pt`
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
    `];let ye=Ou;Me([F({type:String,reflect:!0})],ye.prototype,"name",2);Me([F({type:String,reflect:!0})],ye.prototype,"icon",2);Me([F({type:String,reflect:!0})],ye.prototype,"label",2);Me([F({type:Boolean,reflect:!0})],ye.prototype,"multiple",2);Me([F({type:Boolean,reflect:!0})],ye.prototype,"required",2);Me([F({type:Boolean,reflect:!0})],ye.prototype,"vertical",2);Me([F({type:Boolean,reflect:!0})],ye.prototype,"visible",1);Me([Ui()],ye.prototype,"_value",2);var Jm=Object.defineProperty,Tu=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Jm(t,e,n),n};const zu=class extends ht{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(t){const e=t.split(`
`).map(r=>r.trim()).map(r=>r.split('"')[1]).filter(r=>r!==void 0).flatMap(r=>r.split(/\s+/));return[...new Set(e)].filter(r=>r!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const t=this.layouts[this.layout],e=this.getUniqueAreasFromTemplate(t.template).map(r=>{const n=t.elements[r];return n&&(n.style.gridArea=r),n}).filter(r=>!!r);this.style.gridTemplate=t.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...e)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return J`<slot></slot>`}};zu.styles=pt`
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
  `;let ia=zu;Tu([F({type:Boolean,reflect:!0})],ia.prototype,"floating");Tu([F({type:String,reflect:!0})],ia.prototype,"layout");const _o=class extends ht{render(){return J`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};_o.styles=pt`
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
  `,_o.properties={icon:{type:String}};let Km=_o;var Qm=Object.defineProperty,ys=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Qm(t,e,n),n};const Iu=class extends ht{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const r=e;"value"in r?t[r.name||r.label]=r.value:"checked"in r&&(t[r.name||r.label]=r.checked)}return t}set value(t){const e=[...this.children];for(const r in t){const n=e.find(a=>{const l=a;return l.name===r||l.label===r});if(!n)continue;const s=n,o=t[r];typeof o=="boolean"?s.checked=o:s.value=o}}render(){return J`
      <div class="parent">
        ${this.label||this.icon?J`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Iu.styles=pt`
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
  `;let Kn=Iu;ys([F({type:String,reflect:!0})],Kn.prototype,"name");ys([F({type:String,reflect:!0})],Kn.prototype,"label");ys([F({type:String,reflect:!0})],Kn.prototype,"icon");ys([F({type:Boolean,reflect:!0})],Kn.prototype,"vertical");var tb=Object.defineProperty,Qn=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&tb(t,e,n),n};const Pu=class extends ht{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?vs(this.textContent):this.textContent}render(){return J`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?J`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?J`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};Pu.styles=pt`
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
  `;let Wi=Pu;Qn([F({type:String,reflect:!0})],Wi.prototype,"img");Qn([F({type:Boolean,attribute:"label-hidden",reflect:!0})],Wi.prototype,"labelHidden");Qn([F({type:String,reflect:!0})],Wi.prototype,"icon");Qn([F({type:Boolean,attribute:"icon-hidden",reflect:!0})],Wi.prototype,"iconHidden");Qn([F({type:Boolean,reflect:!0})],Wi.prototype,"vertical");var eb=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,Gt=(i,t,e,r)=>{for(var n=r>1?void 0:r?ib(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&eb(t,e,n),n};const Nu=class extends ht{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Oi(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let r=t;if(r=r.replace(/[^0-9.-]/g,""),r=r.replace(/(\..*)\./g,"$1"),r.endsWith(".")||(r.lastIndexOf("-")>0&&(r=r[0]+r.substring(1).replace(/-/g,"")),r==="-"||r==="-0"))return;let n=Number(r);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,r=this.value;let n=!1;const s=l=>{var u;n=!0;const{clientX:d}=l,c=this.step??1,f=((u=c.toString().split(".")[1])==null?void 0:u.length)||0,h=1/(this.sensitivity??1),g=(d-e)/h;if(Math.floor(Math.abs(g))!==Math.abs(g))return;const p=r+g*c;this.setValue(p.toFixed(f))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},a=()=>{document.removeEventListener("mousemove",s),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=r=>{r.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=J`
      ${this.pref||this.icon?J`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${pe(this._input)}
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
    `}};Nu.styles=pt`
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
  `;let Mt=Nu;Gt([F({type:String,reflect:!0})],Mt.prototype,"name",2);Gt([F({type:String,reflect:!0})],Mt.prototype,"icon",2);Gt([F({type:String,reflect:!0})],Mt.prototype,"label",2);Gt([F({type:String,reflect:!0})],Mt.prototype,"pref",2);Gt([F({type:Number,reflect:!0})],Mt.prototype,"min",2);Gt([F({type:Number,reflect:!0})],Mt.prototype,"value",1);Gt([F({type:Number,reflect:!0})],Mt.prototype,"step",2);Gt([F({type:Number,reflect:!0})],Mt.prototype,"sensitivity",2);Gt([F({type:Number,reflect:!0})],Mt.prototype,"max",2);Gt([F({type:String,reflect:!0})],Mt.prototype,"suffix",2);Gt([F({type:Boolean,reflect:!0})],Mt.prototype,"vertical",2);Gt([F({type:Boolean,reflect:!0})],Mt.prototype,"slider",2);var nb=Object.defineProperty,rb=Object.getOwnPropertyDescriptor,tr=(i,t,e,r)=>{for(var n=r>1?void 0:r?rb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&nb(t,e,n),n};const Lu=class extends ht{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return Wr(this,this.valueTransform)}set value(t){const e=[...this.children];for(const r in t){const n=e.find(o=>{const a=o;return a.name===r||a.label===r});if(!n)continue;const s=n;s.value=t[r]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,J`
      <div class="parent">
        ${this.label||this.name||this.icon?J`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};Lu.styles=[Le.scrollbar,pt`
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
    `];let ci=Lu;tr([F({type:String,reflect:!0})],ci.prototype,"icon",2);tr([F({type:String,reflect:!0})],ci.prototype,"name",2);tr([F({type:String,reflect:!0})],ci.prototype,"label",2);tr([F({type:Boolean,reflect:!0})],ci.prototype,"hidden",1);tr([F({type:Boolean,attribute:"header-hidden",reflect:!0})],ci.prototype,"headerHidden",2);var sb=Object.defineProperty,er=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&sb(t,e,n),n};const Ru=class extends ht{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const t=this.parentElement;let e;return t instanceof ci&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),Wr(this,e)}set value(t){const e=[...this.children];for(const r in t){const n=e.find(o=>{const a=o;return a.name===r||a.label===r});if(!n)continue;const s=n;s.value=t[r]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=J`<svg
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
    `}};Ru.styles=[Le.scrollbar,pt`
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
    `];let qi=Ru;er([F({type:String,reflect:!0})],qi.prototype,"icon");er([F({type:String,reflect:!0})],qi.prototype,"label");er([F({type:String,reflect:!0})],qi.prototype,"name");er([F({type:Boolean,reflect:!0})],qi.prototype,"fixed");er([F({type:Boolean,reflect:!0})],qi.prototype,"collapsed");var ob=Object.defineProperty,ir=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&ob(t,e,n),n};const Mu=class extends ht{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof Ot&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const r of this._options)r.checked=r===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const r of e)r instanceof Ot&&(r.noMark=!0,r.removeEventListener("click",this.onOptionClick),r.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(e=>e instanceof Ot?e.label===t||e.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof Ot&&e.checked);t&&(this._value=t)}render(){return J`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Mu.styles=pt`
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
  `;let Gi=Mu;ir([F({type:String,reflect:!0})],Gi.prototype,"name");ir([F({type:String,reflect:!0})],Gi.prototype,"icon");ir([F({type:String,reflect:!0})],Gi.prototype,"label");ir([F({type:Boolean,reflect:!0})],Gi.prototype,"vertical");ir([Ui()],Gi.prototype,"_value");const ab=()=>J`
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
  `,lb=()=>J`
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
  `;var cb=Object.defineProperty,ub=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&cb(t,e,n),n};const Du=class extends ht{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return J`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Du.styles=pt`
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
  `;let ju=Du;ub([F({type:String,reflect:!0})],ju.prototype,"column");var db=Object.defineProperty,hb=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&db(t,e,n),n};const Fu=class extends ht{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const r of this._groups)r.childrenHidden=typeof t>"u"?!r.childrenHidden:!t,e&&r.toggleChildren(t,e)}render(){return this._groups=[],J`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};Fu.styles=pt`
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
  `;let Bu=Fu;hb([F({type:Array,attribute:!1})],Bu.prototype,"data");var fb=Object.defineProperty,pb=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&fb(t,e,n),n};const Uu=class extends ht{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,e=J`
      ${this.table.noIndentation?null:J`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,r=document.createDocumentFragment();Ai(e,r);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let s=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(u);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("height","6.5"),d.setAttribute("width","9.5"),d.setAttribute("viewBox","0 0 5.9111118 5.0175439");const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),d.append(c),s=document.createElement("div"),s.addEventListener("click",f=>{f.stopPropagation(),this.toggleChildren()}),s.classList.add("caret"),s.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,this.childrenHidden?s.append(l):s.append(d)}const o=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&o.append(r),o.table=this.table,o.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),s&&this.data.children&&o.append(s),t!==0&&(!this.data.children||this.childrenHidden)&&n&&o.append(n);let a;if(this.data.children){a=document.createElement("bim-table-children"),this._children=a,a.table=this.table,a.data=this.data.children;const l=document.createDocumentFragment();Ai(e,l),a.append(l)}return J`
      <div class="parent">${o} ${this.childrenHidden?null:a}</div>
    `}};Uu.styles=pt`
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
  `;let Hu=Uu;pb([F({type:Boolean,attribute:"children-hidden",reflect:!0})],Hu.prototype,"childrenHidden");var mb=Object.defineProperty,Yi=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&mb(t,e,n),n};const Vu=class extends ht{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.name)}get _columnWidths(){return this.columns.filter(t=>!this.hiddenColumns.includes(t.name)).map(t=>t.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,e=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,r=[];for(const n in e){if(this.hiddenColumns.includes(n))continue;const s=e[n];let o;if(typeof s=="string"||typeof s=="boolean"||typeof s=="number"?(o=document.createElement("bim-label"),o.textContent=String(s)):s instanceof HTMLElement?o=s:(o=document.createDocumentFragment(),Ai(s,o)),!o)continue;const a=document.createElement("bim-table-cell");a.append(o),a.column=n,this._columnNames.indexOf(n)===0&&(a.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const l=this._columnNames.indexOf(n);a.setAttribute("data-column-index",String(l)),a.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),a.toggleAttribute("data-cell-header",this.isHeader),a.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:a}})),r.push(a)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,J`
      ${!this.isHeader&&this.table.selectableRows?J`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${r}
      <slot></slot>
    `}render(){return J`${this._intersecting?this.compute():J``}`}};Vu.styles=pt`
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
  `;let ui=Vu;Yi([F({type:Boolean,reflect:!0})],ui.prototype,"selected");Yi([F({attribute:!1})],ui.prototype,"columns");Yi([F({attribute:!1})],ui.prototype,"hiddenColumns");Yi([F({attribute:!1})],ui.prototype,"data");Yi([F({type:Boolean,attribute:"is-header",reflect:!0})],ui.prototype,"isHeader");Yi([Ui()],ui.prototype,"_intersecting");var bb=Object.defineProperty,gb=Object.getOwnPropertyDescriptor,te=(i,t,e,r)=>{for(var n=r>1?void 0:r?gb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&bb(t,e,n),n};const Wu=class extends ht{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this.loadingErrorElement=null,this._stringFilterFunction=(t,e)=>Object.values(e.data).some(r=>String(r).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let r=!1;const n=yo(t)??[];for(const s of n){if("queries"in s){r=!1;break}const{condition:o,value:a}=s;let{key:l}=s;if(l.startsWith("[")&&l.endsWith("]")){const u=l.replace("[","").replace("]","");l=u,r=Object.keys(e.data).filter(d=>d.includes(u)).map(d=>bl(e.data[d],o,a)).some(d=>d)}else r=bl(e.data[l],o,a);if(!r)break}return r}}set columns(t){const e=[];for(const r of t){const n=typeof r=="string"?{name:r,width:`minmax(${this.minColWidth}, 1fr)`}:r;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:r}=e;t[r]=r}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(yo(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const r of t){const{children:n,data:s}=r;for(const o in s)this._columns.map(a=>typeof a=="string"?a:a.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,r="",n=!0){const s=this._textDelimiters[t];let o="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(o+=`Indentation${s}`);const l=`${a.join(s)}
`;o+=l}for(const[l,u]of e.entries()){const{data:d,children:c}=u,f=this.indentationInText?`${r}${l+1}${s}`:"",h=a.map(p=>d[p]??""),g=`${f}${h.join(s)}
`;o+=g,c&&(o+=this.generateText(t,u.children,`${r}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};for(const r of Object.keys(this.dataTransform)){const n=this.columns.find(s=>s.name===r);n&&n.forceDataTransform&&(r in t||(t[r]=""))}for(const r in t){const n=this.dataTransform[r];n?e[r]=n(t[r],t):e[r]=t[r]}return e}downloadData(t="BIM Table Data",e="json"){let r=null;if(e==="json"&&(r=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(r=new File([this.csv],`${t}.csv`)),e==="tsv"&&(r=new File([this.tsv],`${t}.tsv`)),!r)return;const n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=r.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,r=0){for(const n of e){if(n.data===t)return r;if(n.children){const s=this.getRowIndentation(t,n.children,r+1);if(s!==null)return s}}return null}getGroupIndentation(t,e=this.value,r=0){for(const n of e){if(n===t)return r;if(n.children){const s=this.getGroupIndentation(t,n.children,r+1);if(s!==null)return s}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){return this.loading=!1,this._filteredData.length!==0||(e instanceof Error&&this.loadingErrorElement&&e.message.trim()!==""&&(this.loadingErrorElement.textContent=e.message),this._errorLoading=!0),!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,r=this.data){const n=[];for(const s of r)if(e(t,s)){if(this.preserveStructureOnFilter){const o={data:s.data};if(s.children){const a=this.filter(t,e,s.children);a.length&&(o.children=a)}n.push(o)}else if(n.push({data:s.data}),s.children){const o=this.filter(t,e,s.children);n.push(...o)}}else if(s.children){const o=this.filter(t,e,s.children);this.preserveStructureOnFilter&&o.length?n.push({data:s.data,children:o}):n.push(...o)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return ab();if(this._errorLoading)return J`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return J`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",J`
      <div class="parent">
        ${this.headersHidden?null:t} ${lb()}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};Wu.styles=[Le.scrollbar,pt`
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
    `];let Yt=Wu;te([Ui()],Yt.prototype,"_filteredData",2);te([F({type:Boolean,attribute:"headers-hidden",reflect:!0})],Yt.prototype,"headersHidden",2);te([F({type:String,attribute:"min-col-width",reflect:!0})],Yt.prototype,"minColWidth",2);te([F({type:Array,attribute:!1})],Yt.prototype,"columns",1);te([F({type:Array,attribute:!1})],Yt.prototype,"data",1);te([F({type:Boolean,reflect:!0})],Yt.prototype,"expanded",2);te([F({type:Boolean,reflect:!0,attribute:"selectable-rows"})],Yt.prototype,"selectableRows",2);te([F({attribute:!1})],Yt.prototype,"selection",2);te([F({type:Boolean,attribute:"no-indentation",reflect:!0})],Yt.prototype,"noIndentation",2);te([F({type:Boolean,reflect:!0})],Yt.prototype,"loading",2);te([Ui()],Yt.prototype,"_errorLoading",2);var vb=Object.defineProperty,yb=Object.getOwnPropertyDescriptor,_s=(i,t,e,r)=>{for(var n=r>1?void 0:r?yb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&vb(t,e,n),n};const qu=class extends ht{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return J` <slot></slot> `}};qu.styles=pt`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let Ft=qu;_s([F({type:String,reflect:!0})],Ft.prototype,"name",2);_s([F({type:String,reflect:!0})],Ft.prototype,"label",2);_s([F({type:String,reflect:!0})],Ft.prototype,"icon",2);_s([F({type:Boolean,reflect:!0})],Ft.prototype,"hidden",1);var _b=Object.defineProperty,wb=Object.getOwnPropertyDescriptor,Zi=(i,t,e,r)=>{for(var n=r>1?void 0:r?wb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&_b(t,e,n),n};const Gu=class extends ht{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof Ft&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],r=e.find(n=>n instanceof Ft&&n.name===t);for(const n of e){if(!(n instanceof Ft))continue;n.hidden=r!==n;const s=this.getTabSwitcher(n.name);s&&s.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(e=>e.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof Ft))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const r=document.createElement("bim-label");r.textContent=t.label??"",r.icon=t.icon,e.append(r),this._switchers.push(e)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),r=e.find(n=>n instanceof Ft?this.tab?n.name===this.tab:!n.hidden:!1);r&&r instanceof Ft&&(this.tab=r.name);for(const n of e){if(!(n instanceof Ft)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),r!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return J`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Gu.styles=[Le.scrollbar,pt`
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
    `];let di=Gu;Zi([Ui()],di.prototype,"_switchers",2);Zi([F({type:Boolean,reflect:!0})],di.prototype,"bottom",2);Zi([F({type:Boolean,attribute:"switchers-hidden",reflect:!0})],di.prototype,"switchersHidden",2);Zi([F({type:Boolean,reflect:!0})],di.prototype,"floating",2);Zi([F({type:String,reflect:!0})],di.prototype,"tab",1);Zi([F({type:Boolean,attribute:"switchers-full",reflect:!0})],di.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl=i=>i??$t;var xb=Object.defineProperty,$b=Object.getOwnPropertyDescriptor,_e=(i,t,e,r)=>{for(var n=r>1?void 0:r?$b(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&xb(t,e,n),n};const Yu=class extends ht{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return yo(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("input");e?.focus()})}render(){return J`
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
              placeholder=${gl(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:J` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${gl(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Yu.styles=[Le.scrollbar,pt`
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
    `];let ce=Yu;_e([F({type:String,reflect:!0})],ce.prototype,"icon",2);_e([F({type:String,reflect:!0})],ce.prototype,"label",2);_e([F({type:String,reflect:!0})],ce.prototype,"name",2);_e([F({type:String,reflect:!0})],ce.prototype,"placeholder",2);_e([F({type:String,reflect:!0})],ce.prototype,"value",2);_e([F({type:Boolean,reflect:!0})],ce.prototype,"vertical",2);_e([F({type:Number,reflect:!0})],ce.prototype,"debounce",2);_e([F({type:Number,reflect:!0})],ce.prototype,"rows",2);_e([F({type:String,reflect:!0})],ce.prototype,"type",1);var kb=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,Zu=(i,t,e,r)=>{for(var n=r>1?void 0:r?Cb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&kb(t,e,n),n};const Xu=class extends ht{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return J`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Xu.styles=pt`
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
  `;let ws=Xu;Zu([F({type:Number,reflect:!0})],ws.prototype,"rows",2);Zu([F({type:Boolean,reflect:!0})],ws.prototype,"vertical",1);var Eb=Object.defineProperty,Sb=Object.getOwnPropertyDescriptor,xs=(i,t,e,r)=>{for(var n=r>1?void 0:r?Sb(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Eb(t,e,n),n};const Ju=class extends ht{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof ws&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return J`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?J`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Ju.styles=pt`
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
  `;let Xi=Ju;xs([F({type:String,reflect:!0})],Xi.prototype,"label",2);xs([F({type:String,reflect:!0})],Xi.prototype,"icon",2);xs([F({type:Boolean,reflect:!0})],Xi.prototype,"vertical",1);xs([F({type:Boolean,attribute:"label-hidden",reflect:!0})],Xi.prototype,"labelHidden",1);var Ab=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,na=(i,t,e,r)=>{for(var n=r>1?void 0:r?Ob(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Ab(t,e,n),n};const Ku=class extends ht{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof Xi&&(e.labelHidden=this.vertical&&!ta.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return J`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Ku.styles=pt`
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
  `;let $s=Ku;na([F({type:String,reflect:!0})],$s.prototype,"icon",2);na([F({type:Boolean,attribute:"labels-hidden",reflect:!0})],$s.prototype,"labelsHidden",2);na([F({type:Boolean,reflect:!0})],$s.prototype,"vertical",1);var Tb=Object.defineProperty,zb=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Tb(t,e,n),n};const Qu=class extends ht{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return J`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Qu.styles=pt`
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
  `;let td=Qu;zb([F({type:String,reflect:!0})],td.prototype,"name");var Ib=Object.defineProperty,Pb=(i,t,e)=>t in i?Ib(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,qe=(i,t,e)=>(Pb(i,typeof t!="symbol"?t+"":t,e),e);const Ti=Math.min,me=Math.max,qr=Math.round,ze=i=>({x:i,y:i}),Nb={left:"right",right:"left",bottom:"top",top:"bottom"},Lb={start:"end",end:"start"};function vl(i,t,e){return me(i,Ti(t,e))}function nr(i,t){return typeof i=="function"?i(t):i}function ve(i){return i.split("-")[0]}function ks(i){return i.split("-")[1]}function ed(i){return i==="x"?"y":"x"}function id(i){return i==="y"?"height":"width"}function ni(i){return["top","bottom"].includes(ve(i))?"y":"x"}function nd(i){return ed(ni(i))}function Rb(i,t,e){e===void 0&&(e=!1);const r=ks(i),n=nd(i),s=id(n);let o=n==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(o=Gr(o)),[o,Gr(o)]}function Mb(i){const t=Gr(i);return[wo(i),t,wo(t)]}function wo(i){return i.replace(/start|end/g,t=>Lb[t])}function Db(i,t,e){const r=["left","right"],n=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:r:t?r:n;case"left":case"right":return t?s:o;default:return[]}}function jb(i,t,e,r){const n=ks(i);let s=Db(ve(i),e==="start",r);return n&&(s=s.map(o=>o+"-"+n),t&&(s=s.concat(s.map(wo)))),s}function Gr(i){return i.replace(/left|right|bottom|top/g,t=>Nb[t])}function Fb(i){return{top:0,right:0,bottom:0,left:0,...i}}function rd(i){return typeof i!="number"?Fb(i):{top:i,right:i,bottom:i,left:i}}function zi(i){const{x:t,y:e,width:r,height:n}=i;return{width:r,height:n,top:e,left:t,right:t+r,bottom:e+n,x:t,y:e}}function yl(i,t,e){let{reference:r,floating:n}=i;const s=ni(t),o=nd(t),a=id(o),l=ve(t),u=s==="y",d=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2,f=r[a]/2-n[a]/2;let h;switch(l){case"top":h={x:d,y:r.y-n.height};break;case"bottom":h={x:d,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:c};break;case"left":h={x:r.x-n.width,y:c};break;default:h={x:r.x,y:r.y}}switch(ks(t)){case"start":h[o]-=f*(e&&u?-1:1);break;case"end":h[o]+=f*(e&&u?-1:1);break}return h}const Bb=async(i,t,e)=>{const{placement:r="bottom",strategy:n="absolute",middleware:s=[],platform:o}=e,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let u=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:d,y:c}=yl(u,r,l),f=r,h={},g=0;for(let p=0;p<a.length;p++){const{name:v,fn:b}=a[p],{x:_,y:w,data:x,reset:E}=await b({x:d,y:c,initialPlacement:r,placement:f,strategy:n,middlewareData:h,rects:u,platform:o,elements:{reference:i,floating:t}});d=_??d,c=w??c,h={...h,[v]:{...h[v],...x}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(f=E.placement),E.rects&&(u=E.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):E.rects),{x:d,y:c}=yl(u,f,l)),p=-1)}return{x:d,y:c,placement:f,strategy:n,middlewareData:h}};async function sd(i,t){var e;t===void 0&&(t={});const{x:r,y:n,platform:s,rects:o,elements:a,strategy:l}=i,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:f=!1,padding:h=0}=nr(t,i),g=rd(h),p=a[f?c==="floating"?"reference":"floating":c],v=zi(await s.getClippingRect({element:(e=await(s.isElement==null?void 0:s.isElement(p)))==null||e?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),b=c==="floating"?{x:r,y:n,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),w=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=zi(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:_,strategy:l}):b);return{top:(v.top-x.top+g.top)/w.y,bottom:(x.bottom-v.bottom+g.bottom)/w.y,left:(v.left-x.left+g.left)/w.x,right:(x.right-v.right+g.right)/w.x}}const Ub=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,r;const{placement:n,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...v}=nr(i,t);if((e=s.arrow)!=null&&e.alignmentOffset)return{};const b=ve(n),_=ni(a),w=ve(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(u.floating)),E=f||(w||!p?[Gr(a)]:Mb(a)),A=g!=="none";!f&&A&&E.push(...jb(a,p,g,x));const T=[a,...E],D=await sd(t,v),S=[];let z=((r=s.flip)==null?void 0:r.overflows)||[];if(d&&S.push(D[b]),c){const y=Rb(n,o,x);S.push(D[y[0]],D[y[1]])}if(z=[...z,{placement:n,overflows:S}],!S.every(y=>y<=0)){var G,C;const y=(((G=s.flip)==null?void 0:G.index)||0)+1,j=T[y];if(j)return{data:{index:y,overflows:z},reset:{placement:j}};let tt=(C=z.filter(H=>H.overflows[0]<=0).sort((H,et)=>H.overflows[1]-et.overflows[1])[0])==null?void 0:C.placement;if(!tt)switch(h){case"bestFit":{var R;const H=(R=z.filter(et=>{if(A){const V=ni(et.placement);return V===_||V==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(V=>V>0).reduce((V,it)=>V+it,0)]).sort((et,V)=>et[1]-V[1])[0])==null?void 0:R[0];H&&(tt=H);break}case"initialPlacement":tt=a;break}if(n!==tt)return{reset:{placement:tt}}}return{}}}};function od(i){const t=Ti(...i.map(s=>s.left)),e=Ti(...i.map(s=>s.top)),r=me(...i.map(s=>s.right)),n=me(...i.map(s=>s.bottom));return{x:t,y:e,width:r-t,height:n-e}}function Hb(i){const t=i.slice().sort((n,s)=>n.y-s.y),e=[];let r=null;for(let n=0;n<t.length;n++){const s=t[n];!r||s.y-r.y>r.height/2?e.push([s]):e[e.length-1].push(s),r=s}return e.map(n=>zi(od(n)))}const Vb=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:r,rects:n,platform:s,strategy:o}=t,{padding:a=2,x:l,y:u}=nr(i,t),d=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(r.reference))||[]),c=Hb(d),f=zi(od(d)),h=rd(a);function g(){if(c.length===2&&c[0].left>c[1].right&&l!=null&&u!=null)return c.find(v=>l>v.left-h.left&&l<v.right+h.right&&u>v.top-h.top&&u<v.bottom+h.bottom)||f;if(c.length>=2){if(ni(e)==="y"){const z=c[0],G=c[c.length-1],C=ve(e)==="top",R=z.top,y=G.bottom,j=C?z.left:G.left,tt=C?z.right:G.right,H=tt-j,et=y-R;return{top:R,bottom:y,left:j,right:tt,width:H,height:et,x:j,y:R}}const v=ve(e)==="left",b=me(...c.map(z=>z.right)),_=Ti(...c.map(z=>z.left)),w=c.filter(z=>v?z.left===_:z.right===b),x=w[0].top,E=w[w.length-1].bottom,A=_,T=b,D=T-A,S=E-x;return{top:x,bottom:E,left:A,right:T,width:D,height:S,x:A,y:x}}return f}const p=await s.getElementRects({reference:{getBoundingClientRect:g},floating:r.floating,strategy:o});return n.reference.x!==p.reference.x||n.reference.y!==p.reference.y||n.reference.width!==p.reference.width||n.reference.height!==p.reference.height?{reset:{rects:p}}:{}}}};async function Wb(i,t){const{placement:e,platform:r,elements:n}=i,s=await(r.isRTL==null?void 0:r.isRTL(n.floating)),o=ve(e),a=ks(e),l=ni(e)==="y",u=["left","top"].includes(o)?-1:1,d=s&&l?-1:1,c=nr(t,i);let{mainAxis:f,crossAxis:h,alignmentAxis:g}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return a&&typeof g=="number"&&(h=a==="end"?g*-1:g),l?{x:h*d,y:f*u}:{x:f*u,y:h*d}}const ad=function(i){return{name:"offset",options:i,async fn(t){var e,r;const{x:n,y:s,placement:o,middlewareData:a}=t,l=await Wb(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:n+l.x,y:s+l.y,data:{...l,placement:o}}}}},qb=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:r,placement:n}=t,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:v=>{let{x:b,y:_}=v;return{x:b,y:_}}},...l}=nr(i,t),u={x:e,y:r},d=await sd(t,l),c=ni(ve(n)),f=ed(c);let h=u[f],g=u[c];if(s){const v=f==="y"?"top":"left",b=f==="y"?"bottom":"right",_=h+d[v],w=h-d[b];h=vl(_,h,w)}if(o){const v=c==="y"?"top":"left",b=c==="y"?"bottom":"right",_=g+d[v],w=g-d[b];g=vl(_,g,w)}const p=a.fn({...t,[f]:h,[c]:g});return{...p,data:{x:p.x-e,y:p.y-r}}}}};function Ie(i){return ld(i)?(i.nodeName||"").toLowerCase():"#document"}function Lt(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function De(i){var t;return(t=(ld(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function ld(i){return i instanceof Node||i instanceof Lt(i).Node}function ae(i){return i instanceof Element||i instanceof Lt(i).Element}function le(i){return i instanceof HTMLElement||i instanceof Lt(i).HTMLElement}function _l(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Lt(i).ShadowRoot}function rr(i){const{overflow:t,overflowX:e,overflowY:r,display:n}=Vt(i);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!["inline","contents"].includes(n)}function Gb(i){return["table","td","th"].includes(Ie(i))}function Yb(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function ra(i){const t=sa(),e=ae(i)?Vt(i):i;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(e.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(e.contain||"").includes(r))}function Zb(i){let t=Ii(i);for(;le(t)&&!Cs(t);){if(ra(t))return t;if(Yb(t))return null;t=Ii(t)}return null}function sa(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Cs(i){return["html","body","#document"].includes(Ie(i))}function Vt(i){return Lt(i).getComputedStyle(i)}function Es(i){return ae(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Ii(i){if(Ie(i)==="html")return i;const t=i.assignedSlot||i.parentNode||_l(i)&&i.host||De(i);return _l(t)?t.host:t}function cd(i){const t=Ii(i);return Cs(t)?i.ownerDocument?i.ownerDocument.body:i.body:le(t)&&rr(t)?t:cd(t)}function ud(i,t,e){var r;t===void 0&&(t=[]);const n=cd(i),s=n===((r=i.ownerDocument)==null?void 0:r.body),o=Lt(n);return s?(Xb(o),t.concat(o,o.visualViewport||[],rr(n)?n:[],[])):t.concat(n,ud(n,[]))}function Xb(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function dd(i){const t=Vt(i);let e=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const n=le(i),s=n?i.offsetWidth:e,o=n?i.offsetHeight:r,a=qr(e)!==s||qr(r)!==o;return a&&(e=s,r=o),{width:e,height:r,$:a}}function hd(i){return ae(i)?i:i.contextElement}function wi(i){const t=hd(i);if(!le(t))return ze(1);const e=t.getBoundingClientRect(),{width:r,height:n,$:s}=dd(t);let o=(s?qr(e.width):e.width)/r,a=(s?qr(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Jb=ze(0);function fd(i){const t=Lt(i);return!sa()||!t.visualViewport?Jb:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Kb(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==Lt(i)?!1:t}function Ln(i,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),s=hd(i);let o=ze(1);t&&(r?ae(r)&&(o=wi(r)):o=wi(i));const a=Kb(s,e,r)?fd(s):ze(0);let l=(n.left+a.x)/o.x,u=(n.top+a.y)/o.y,d=n.width/o.x,c=n.height/o.y;if(s){const f=Lt(s),h=r&&ae(r)?Lt(r):r;let g=f,p=g.frameElement;for(;p&&r&&h!==g;){const v=wi(p),b=p.getBoundingClientRect(),_=Vt(p),w=b.left+(p.clientLeft+parseFloat(_.paddingLeft))*v.x,x=b.top+(p.clientTop+parseFloat(_.paddingTop))*v.y;l*=v.x,u*=v.y,d*=v.x,c*=v.y,l+=w,u+=x,g=Lt(p),p=g.frameElement}}return zi({width:d,height:c,x:l,y:u})}const Qb=[":popover-open",":modal"];function pd(i){return Qb.some(t=>{try{return i.matches(t)}catch{return!1}})}function tg(i){let{elements:t,rect:e,offsetParent:r,strategy:n}=i;const s=n==="fixed",o=De(r),a=t?pd(t.floating):!1;if(r===o||a&&s)return e;let l={scrollLeft:0,scrollTop:0},u=ze(1);const d=ze(0),c=le(r);if((c||!c&&!s)&&((Ie(r)!=="body"||rr(o))&&(l=Es(r)),le(r))){const f=Ln(r);u=wi(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}return{width:e.width*u.x,height:e.height*u.y,x:e.x*u.x-l.scrollLeft*u.x+d.x,y:e.y*u.y-l.scrollTop*u.y+d.y}}function eg(i){return Array.from(i.getClientRects())}function md(i){return Ln(De(i)).left+Es(i).scrollLeft}function ig(i){const t=De(i),e=Es(i),r=i.ownerDocument.body,n=me(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=me(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-e.scrollLeft+md(i);const a=-e.scrollTop;return Vt(r).direction==="rtl"&&(o+=me(t.clientWidth,r.clientWidth)-n),{width:n,height:s,x:o,y:a}}function ng(i,t){const e=Lt(i),r=De(i),n=e.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(n){s=n.width,o=n.height;const u=sa();(!u||u&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:s,height:o,x:a,y:l}}function rg(i,t){const e=Ln(i,!0,t==="fixed"),r=e.top+i.clientTop,n=e.left+i.clientLeft,s=le(i)?wi(i):ze(1),o=i.clientWidth*s.x,a=i.clientHeight*s.y,l=n*s.x,u=r*s.y;return{width:o,height:a,x:l,y:u}}function wl(i,t,e){let r;if(t==="viewport")r=ng(i,e);else if(t==="document")r=ig(De(i));else if(ae(t))r=rg(t,e);else{const n=fd(i);r={...t,x:t.x-n.x,y:t.y-n.y}}return zi(r)}function bd(i,t){const e=Ii(i);return e===t||!ae(e)||Cs(e)?!1:Vt(e).position==="fixed"||bd(e,t)}function sg(i,t){const e=t.get(i);if(e)return e;let r=ud(i,[]).filter(a=>ae(a)&&Ie(a)!=="body"),n=null;const s=Vt(i).position==="fixed";let o=s?Ii(i):i;for(;ae(o)&&!Cs(o);){const a=Vt(o),l=ra(o);!l&&a.position==="fixed"&&(n=null),(s?!l&&!n:!l&&a.position==="static"&&n&&["absolute","fixed"].includes(n.position)||rr(o)&&!l&&bd(i,o))?r=r.filter(u=>u!==o):n=a,o=Ii(o)}return t.set(i,r),r}function og(i){let{element:t,boundary:e,rootBoundary:r,strategy:n}=i;const s=[...e==="clippingAncestors"?sg(t,this._c):[].concat(e),r],o=s[0],a=s.reduce((l,u)=>{const d=wl(t,u,n);return l.top=me(d.top,l.top),l.right=Ti(d.right,l.right),l.bottom=Ti(d.bottom,l.bottom),l.left=me(d.left,l.left),l},wl(t,o,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ag(i){const{width:t,height:e}=dd(i);return{width:t,height:e}}function lg(i,t,e){const r=le(t),n=De(t),s=e==="fixed",o=Ln(i,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=ze(0);if(r||!r&&!s)if((Ie(t)!=="body"||rr(n))&&(a=Es(t)),r){const c=Ln(t,!0,s,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else n&&(l.x=md(n));const u=o.left+a.scrollLeft-l.x,d=o.top+a.scrollTop-l.y;return{x:u,y:d,width:o.width,height:o.height}}function xl(i,t){return!le(i)||Vt(i).position==="fixed"?null:t?t(i):i.offsetParent}function gd(i,t){const e=Lt(i);if(!le(i)||pd(i))return e;let r=xl(i,t);for(;r&&Gb(r)&&Vt(r).position==="static";)r=xl(r,t);return r&&(Ie(r)==="html"||Ie(r)==="body"&&Vt(r).position==="static"&&!ra(r))?e:r||Zb(i)||e}const cg=async function(i){const t=this.getOffsetParent||gd,e=this.getDimensions;return{reference:lg(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function ug(i){return Vt(i).direction==="rtl"}const dg={convertOffsetParentRelativeRectToViewportRelativeRect:tg,getDocumentElement:De,getClippingRect:og,getOffsetParent:gd,getElementRects:cg,getClientRects:eg,getDimensions:ag,getScale:wi,isElement:ae,isRTL:ug},vd=qb,yd=Ub,_d=Vb,wd=(i,t,e)=>{const r=new Map,n={platform:dg,...e},s={...n.platform,_c:r};return Bb(i,t,{...n,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Or=globalThis,oa=Or.ShadowRoot&&(Or.ShadyCSS===void 0||Or.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,aa=Symbol(),$l=new WeakMap;let xd=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==aa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(oa&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=$l.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&$l.set(t,i))}return i}toString(){return this.cssText}};const hg=i=>new xd(typeof i=="string"?i:i+"",void 0,aa),mt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new xd(e,i,aa)},fg=(i,t)=>{if(oa)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=Or.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},kl=oa?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return hg(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pg,defineProperty:mg,getOwnPropertyDescriptor:bg,getOwnPropertyNames:gg,getOwnPropertySymbols:vg,getPrototypeOf:yg}=Object,Pi=globalThis,Cl=Pi.trustedTypes,_g=Cl?Cl.emptyScript:"",El=Pi.reactiveElementPolyfillSupport,xn=(i,t)=>i,Yr={toAttribute(i,t){switch(t){case Boolean:i=i?_g:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},la=(i,t)=>!pg(i,t),Sl={attribute:!0,type:String,converter:Yr,reflect:!1,hasChanged:la};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Pi.litPropertyMetadata??(Pi.litPropertyMetadata=new WeakMap);class vi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Sl){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&mg(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:s}=bg(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n?.call(this)},set(o){const a=n?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Sl}static _$Ei(){if(this.hasOwnProperty(xn("elementProperties")))return;const t=yg(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xn("properties"))){const e=this.properties,r=[...gg(e),...vg(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(kl(n))}else t!==void 0&&e.push(kl(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fg(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Yr).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Yr;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??la)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}vi.elementStyles=[],vi.shadowRootOptions={mode:"open"},vi[xn("elementProperties")]=new Map,vi[xn("finalized")]=new Map,El?.({ReactiveElement:vi}),(Pi.reactiveElementVersions??(Pi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zr=globalThis,Xr=Zr.trustedTypes,Al=Xr?Xr.createPolicy("lit-html",{createHTML:i=>i}):void 0,$d="$lit$",Ee=`lit$${Math.random().toFixed(9).slice(2)}$`,kd="?"+Ee,wg=`<${kd}>`,ri=document,Rn=()=>ri.createComment(""),Mn=i=>i===null||typeof i!="object"&&typeof i!="function",ca=Array.isArray,xg=i=>ca(i)||typeof i?.[Symbol.iterator]=="function",Gs=`[ 	
\f\r]`,pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ol=/-->/g,Tl=/>/g,Ge=RegExp(`>|${Gs}(?:([^\\s"'>=/]+)(${Gs}*=${Gs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zl=/'/g,Il=/"/g,Cd=/^(?:script|style|textarea|title)$/i,$g=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),N=$g(1),si=Symbol.for("lit-noChange"),kt=Symbol.for("lit-nothing"),Pl=new WeakMap,Xe=ri.createTreeWalker(ri,129);function Ed(i,t){if(!ca(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Al!==void 0?Al.createHTML(t):t}const kg=(i,t)=>{const e=i.length-1,r=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=pn;for(let a=0;a<e;a++){const l=i[a];let u,d,c=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===pn?d[1]==="!--"?o=Ol:d[1]!==void 0?o=Tl:d[2]!==void 0?(Cd.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=Ge):d[3]!==void 0&&(o=Ge):o===Ge?d[0]===">"?(o=n??pn,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?Ge:d[3]==='"'?Il:zl):o===Il||o===zl?o=Ge:o===Ol||o===Tl?o=pn:(o=Ge,n=void 0);const h=o===Ge&&i[a+1].startsWith("/>")?" ":"";s+=o===pn?l+wg:c>=0?(r.push(u),l.slice(0,c)+$d+l.slice(c)+Ee+h):l+Ee+(c===-2?a:h)}return[Ed(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Dn{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,d]=kg(t,e);if(this.el=Dn.createElement(u,r),Xe.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Xe.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith($d)){const f=d[o++],h=n.getAttribute(c).split(Ee),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:g[2],strings:h,ctor:g[1]==="."?Eg:g[1]==="?"?Sg:g[1]==="@"?Ag:Ss}),n.removeAttribute(c)}else c.startsWith(Ee)&&(l.push({type:6,index:s}),n.removeAttribute(c));if(Cd.test(n.tagName)){const c=n.textContent.split(Ee),f=c.length-1;if(f>0){n.textContent=Xr?Xr.emptyScript:"";for(let h=0;h<f;h++)n.append(c[h],Rn()),Xe.nextNode(),l.push({type:2,index:++s});n.append(c[f],Rn())}}}else if(n.nodeType===8)if(n.data===kd)l.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ee,c+1))!==-1;)l.push({type:7,index:s}),c+=Ee.length-1}s++}}static createElement(t,e){const r=ri.createElement("template");return r.innerHTML=t,r}}function Ni(i,t,e=i,r){var n,s;if(t===si)return t;let o=r!==void 0?(n=e.o)==null?void 0:n[r]:e.l;const a=Mn(t)?void 0:t._$litDirective$;return o?.constructor!==a&&((s=o?._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=o:e.l=o),o!==void 0&&(t=Ni(i,o._$AS(i,t.values),o,r)),t}class Cg{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??ri).importNode(e,!0);Xe.currentNode=n;let s=Xe.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new sr(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Og(s,this,t)),this._$AV.push(u),l=r[++a]}o!==l?.index&&(s=Xe.nextNode(),o++)}return Xe.currentNode=ri,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class sr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,n){this.type=2,this._$AH=kt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ni(this,t,e),Mn(t)?t===kt||t==null||t===""?(this._$AH!==kt&&this._$AR(),this._$AH=kt):t!==this._$AH&&t!==si&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xg(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==kt&&Mn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ri.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Dn.createElement(Ed(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(r);else{const o=new Cg(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let e=Pl.get(t.strings);return e===void 0&&Pl.set(t.strings,e=new Dn(t)),e}k(t){ca(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const s of t)n===e.length?e.push(r=new sr(this.O(Rn()),this.O(Rn()),this,this.options)):r=e[n],r._$AI(s),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class Ss{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,s){this.type=1,this._$AH=kt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=kt}_$AI(t,e=this,r,n){const s=this.strings;let o=!1;if(s===void 0)t=Ni(this,t,e,0),o=!Mn(t)||t!==this._$AH&&t!==si,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=Ni(this,a[r+l],e,l),u===si&&(u=this._$AH[l]),o||(o=!Mn(u)||u!==this._$AH[l]),u===kt?t=kt:t!==kt&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!n&&this.j(t)}j(t){t===kt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Eg extends Ss{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===kt?void 0:t}}class Sg extends Ss{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==kt)}}class Ag extends Ss{constructor(t,e,r,n,s){super(t,e,r,n,s),this.type=5}_$AI(t,e=this){if((t=Ni(this,t,e,0)??kt)===si)return;const r=this._$AH,n=t===kt&&r!==kt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==kt&&(r===kt||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Og{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ni(this,t)}}const Nl=Zr.litHtmlPolyfillSupport;Nl?.(Dn,sr),(Zr.litHtmlVersions??(Zr.litHtmlVersions=[])).push("3.2.0");const Li=(i,t,e)=>{const r=e?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const s=e?.renderBefore??null;r._$litPart$=n=new sr(t.insertBefore(Rn(),s),s,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ft=class extends vi{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(i){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this.o=Li(t,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this.o)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this.o)==null||i.setConnected(!1)}render(){return si}};var Ll;ft._$litElement$=!0,ft.finalized=!0,(Ll=globalThis.litElementHydrateSupport)==null||Ll.call(globalThis,{LitElement:ft});const Rl=globalThis.litElementPolyfillSupport;Rl?.({LitElement:ft});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tg={attribute:!0,type:String,converter:Yr,reflect:!1,hasChanged:la},zg=(i=Tg,t,e)=>{const{kind:r,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+r)};function B(i){return(t,e)=>typeof e=="object"?zg(i,t,e):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ji(i){return B({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ig=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sd={ATTRIBUTE:1,CHILD:2},Ad=i=>(...t)=>({_$litDirective$:i,values:t});class Od{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this.t=t,this._$AM=e,this.i=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const n of r)(e=n._$AO)==null||e.call(n,t,!1),$n(n,t);return!0},Jr=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},Td=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Lg(t)}};function Pg(i){this._$AN!==void 0?(Jr(this),this._$AM=i,Td(this)):this._$AM=i}function Ng(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)$n(r[s],!1),Jr(r[s]);else r!=null&&($n(r,!1),Jr(r));else $n(this,i)}const Lg=i=>{i.type==Sd.CHILD&&(i._$AP??(i._$AP=Ng),i._$AQ??(i._$AQ=Pg))};class Rg extends Od{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Td(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&($n(this,t),Jr(this))}setValue(t){if(Ig(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=()=>new Mg;class Mg{}const Ys=new WeakMap,It=Ad(class extends Rg{render(i){return kt}update(i,[t]){var e;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),kt}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=Ys.get(t);e===void 0&&(e=new WeakMap,Ys.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Ys.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const zd=Object.freeze({left:0,top:0,width:16,height:16}),Kr=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),or=Object.freeze({...zd,...Kr}),xo=Object.freeze({...or,body:"",hidden:!1}),Dg=Object.freeze({width:null,height:null}),Id=Object.freeze({...Dg,...Kr});function jg(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:r(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let s=parseFloat(i.slice(0,i.length-e.length));return isNaN(s)?0:(s=s/n,s%1===0?r(s):0)}}return t}const Fg=/[\s,]+/;function Bg(i,t){t.split(Fg).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const Pd={...Id,preserveAspectRatio:""};function Ml(i){const t={...Pd},e=(r,n)=>i.getAttribute(r)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=jg(e("rotate","")),Bg(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Ug(i,t){for(const e in Pd)if(i[e]!==t[e])return!0;return!1}const kn=/^[a-z0-9]+(-[a-z0-9]+)*$/,ar=(i,t,e,r="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),u={provider:n.length>0?n[0]:r,prefix:l,name:a};return t&&!Tr(u)?null:u}const s=n[0],o=s.split("-");if(o.length>1){const a={provider:r,prefix:o.shift(),name:o.join("-")};return t&&!Tr(a)?null:a}if(e&&r===""){const a={provider:r,prefix:"",name:s};return t&&!Tr(a,e)?null:a}return null},Tr=(i,t)=>i?!!((i.provider===""||i.provider.match(kn))&&(t&&i.prefix===""||i.prefix.match(kn))&&i.name.match(kn)):!1;function Hg(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const r=((i.rotate||0)+(t.rotate||0))%4;return r&&(e.rotate=r),e}function Dl(i,t){const e=Hg(i,t);for(const r in xo)r in Kr?r in i&&!(r in e)&&(e[r]=Kr[r]):r in t?e[r]=t[r]:r in i&&(e[r]=i[r]);return e}function Vg(i,t){const e=i.icons,r=i.aliases||Object.create(null),n=Object.create(null);function s(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=r[o]&&r[o].parent,l=a&&s(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(r)).forEach(s),n}function Wg(i,t,e){const r=i.icons,n=i.aliases||Object.create(null);let s={};function o(a){s=Dl(r[a]||n[a],s)}return o(t),e.forEach(o),Dl(i,s)}function Nd(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const r=Vg(i);for(const n in r){const s=r[n];s&&(t(n,Wg(i,n,s)),e.push(n))}return e}const qg={provider:"",aliases:{},not_found:{},...zd};function Zs(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function Ld(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Zs(i,qg))return null;const e=t.icons;for(const n in e){const s=e[n];if(!n.match(kn)||typeof s.body!="string"||!Zs(s,xo))return null}const r=t.aliases||Object.create(null);for(const n in r){const s=r[n],o=s.parent;if(!n.match(kn)||typeof o!="string"||!e[o]&&!r[o]||!Zs(s,xo))return null}return t}const Qr=Object.create(null);function Gg(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function Pe(i,t){const e=Qr[i]||(Qr[i]=Object.create(null));return e[t]||(e[t]=Gg(i,t))}function ua(i,t){return Ld(t)?Nd(t,(e,r)=>{r?i.icons[e]=r:i.missing.add(e)}):[]}function Yg(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Zg(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(Qr)).forEach(r=>{(typeof r=="string"&&typeof t=="string"?[t]:Object.keys(Qr[r]||{})).forEach(n=>{const s=Pe(r,n);e=e.concat(Object.keys(s.icons).map(o=>(r!==""?"@"+r+":":"")+n+":"+o))})}),e}let jn=!1;function Rd(i){return typeof i=="boolean"&&(jn=i),jn}function Fn(i){const t=typeof i=="string"?ar(i,!0,jn):i;if(t){const e=Pe(t.provider,t.prefix),r=t.name;return e.icons[r]||(e.missing.has(r)?null:void 0)}}function Md(i,t){const e=ar(i,!0,jn);if(!e)return!1;const r=Pe(e.provider,e.prefix);return Yg(r,e.name,t)}function jl(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),jn&&!t&&!i.prefix){let n=!1;return Ld(i)&&(i.prefix="",Nd(i,(s,o)=>{o&&Md(s,o)&&(n=!0)})),n}const e=i.prefix;if(!Tr({provider:t,prefix:e,name:"a"}))return!1;const r=Pe(t,e);return!!ua(r,i)}function Fl(i){return!!Fn(i)}function Xg(i){const t=Fn(i);return t?{...or,...t}:null}function Jg(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,s)=>n.provider!==s.provider?n.provider.localeCompare(s.provider):n.prefix!==s.prefix?n.prefix.localeCompare(s.prefix):n.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return i.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const s=n.provider,o=n.prefix,a=n.name,l=e[s]||(e[s]=Object.create(null)),u=l[o]||(l[o]=Pe(s,o));let d;a in u.icons?d=t.loaded:o===""||u.missing.has(a)?d=t.missing:d=t.pending;const c={provider:s,prefix:o,name:a};d.push(c)}),t}function Dd(i,t){i.forEach(e=>{const r=e.loaderCallbacks;r&&(e.loaderCallbacks=r.filter(n=>n.id!==t))})}function Kg(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const r=i.provider,n=i.prefix;t.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const u=l.name;if(i.icons[u])o.loaded.push({provider:r,prefix:n,name:u});else if(i.missing.has(u))o.missing.push({provider:r,prefix:n,name:u});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||Dd([i],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let Qg=0;function tv(i,t,e){const r=Qg++,n=Dd.bind(null,e,r);if(!t.pending.length)return n;const s={id:r,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),n}const $o=Object.create(null);function Bl(i,t){$o[i]=t}function ko(i){return $o[i]||$o[""]}function ev(i,t=!0,e=!1){const r=[];return i.forEach(n=>{const s=typeof n=="string"?ar(n,t,e):n;s&&r.push(s)}),r}var iv={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function nv(i,t,e,r){const n=i.resources.length,s=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let A=i.resources.slice(0);for(o=[];A.length>1;){const T=Math.floor(Math.random()*A.length);o.push(A[T]),A=A.slice(0,T).concat(A.slice(T+1))}o=o.concat(A)}else o=i.resources.slice(s).concat(i.resources.slice(0,s));const a=Date.now();let l="pending",u=0,d,c=null,f=[],h=[];typeof r=="function"&&h.push(r);function g(){c&&(clearTimeout(c),c=null)}function p(){l==="pending"&&(l="aborted"),g(),f.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),f=[]}function v(A,T){T&&(h=[]),typeof A=="function"&&h.push(A)}function b(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:f.length,subscribe:v,abort:p}}function _(){l="failed",h.forEach(A=>{A(void 0,d)})}function w(){f.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),f=[]}function x(A,T,D){const S=T!=="success";switch(f=f.filter(z=>z!==A),l){case"pending":break;case"failed":if(S||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){d=D,_();return}if(S){d=D,f.length||(o.length?E():_());return}if(g(),w(),!i.random){const z=i.resources.indexOf(A.resource);z!==-1&&z!==i.index&&(i.index=z)}l="completed",h.forEach(z=>{z(D)})}function E(){if(l!=="pending")return;g();const A=o.shift();if(A===void 0){if(f.length){c=setTimeout(()=>{g(),l==="pending"&&(w(),_())},i.timeout);return}_();return}const T={status:"pending",resource:A,callback:(D,S)=>{x(T,D,S)}};f.push(T),u++,c=setTimeout(E,i.rotate),e(A,t,T.callback)}return setTimeout(E),b}function jd(i){const t={...iv,...i};let e=[];function r(){e=e.filter(o=>o().status==="pending")}function n(o,a,l){const u=nv(t,o,a,(d,c)=>{r(),l&&l(d,c)});return e.push(u),u}function s(o){return e.find(a=>o(a))||null}return{query:n,find:s,setIndex:o=>{t.index=o},getIndex:()=>t.index,cleanup:r}}function da(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const As=Object.create(null),xr=["https://api.simplesvg.com","https://api.unisvg.com"],Co=[];for(;xr.length>0;)xr.length===1||Math.random()>.5?Co.push(xr.shift()):Co.push(xr.pop());As[""]=da({resources:["https://api.iconify.design"].concat(Co)});function Ul(i,t){const e=da(t);return e===null?!1:(As[i]=e,!0)}function Os(i){return As[i]}function rv(){return Object.keys(As)}function Hl(){}const Xs=Object.create(null);function sv(i){if(!Xs[i]){const t=Os(i);if(!t)return;const e=jd(t),r={config:t,redundancy:e};Xs[i]=r}return Xs[i]}function Fd(i,t,e){let r,n;if(typeof i=="string"){const s=ko(i);if(!s)return e(void 0,424),Hl;n=s.send;const o=sv(i);o&&(r=o.redundancy)}else{const s=da(i);if(s){r=jd(s);const o=i.resources?i.resources[0]:"",a=ko(o);a&&(n=a.send)}}return!r||!n?(e(void 0,424),Hl):r.query(t,n,e)().abort}const Vl="iconify2",Bn="iconify",Bd=Bn+"-count",Wl=Bn+"-version",Ud=36e5,ov=168,av=50;function Eo(i,t){try{return i.getItem(t)}catch{}}function ha(i,t,e){try{return i.setItem(t,e),!0}catch{}}function ql(i,t){try{i.removeItem(t)}catch{}}function So(i,t){return ha(i,Bd,t.toString())}function Ao(i){return parseInt(Eo(i,Bd))||0}const Qe={local:!0,session:!0},Hd={local:new Set,session:new Set};let fa=!1;function lv(i){fa=i}let $r=typeof window>"u"?{}:window;function Vd(i){const t=i+"Storage";try{if($r&&$r[t]&&typeof $r[t].length=="number")return $r[t]}catch{}Qe[i]=!1}function Wd(i,t){const e=Vd(i);if(!e)return;const r=Eo(e,Wl);if(r!==Vl){if(r){const a=Ao(e);for(let l=0;l<a;l++)ql(e,Bn+l.toString())}ha(e,Wl,Vl),So(e,0);return}const n=Math.floor(Date.now()/Ud)-ov,s=a=>{const l=Bn+a.toString(),u=Eo(e,l);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}ql(e,l)}};let o=Ao(e);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,So(e,o)):Hd[i].add(a))}function qd(){if(!fa){lv(!0);for(const i in Qe)Wd(i,t=>{const e=t.data,r=t.provider,n=e.prefix,s=Pe(r,n);if(!ua(s,e).length)return!1;const o=e.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function cv(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const r in Qe)Wd(r,n=>{const s=n.data;return n.provider!==i.provider||s.prefix!==i.prefix||s.lastModified===t});return!0}function uv(i,t){fa||qd();function e(r){let n;if(!Qe[r]||!(n=Vd(r)))return;const s=Hd[r];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=Ao(n),o>=av||!So(n,o+1))return;const a={cached:Math.floor(Date.now()/Ud),provider:i.provider,data:t};return ha(n,Bn+o.toString(),JSON.stringify(a))}t.lastModified&&!cv(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Gl(){}function dv(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Kg(i)}))}function hv(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:r}=i,n=i.iconsToLoad;delete i.iconsToLoad;let s;!n||!(s=ko(e))||s.prepare(e,r,n).forEach(o=>{Fd(e,o,a=>{if(typeof a!="object")o.icons.forEach(l=>{i.missing.add(l)});else try{const l=ua(i,a);if(!l.length)return;const u=i.pendingIcons;u&&l.forEach(d=>{u.delete(d)}),uv(i,a)}catch(l){console.error(l)}dv(i)})})}))}const pa=(i,t)=>{const e=ev(i,!0,Rd()),r=Jg(e);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,Gl)}),()=>{l=!1}}const n=Object.create(null),s=[];let o,a;return r.pending.forEach(l=>{const{provider:u,prefix:d}=l;if(d===a&&u===o)return;o=u,a=d,s.push(Pe(u,d));const c=n[u]||(n[u]=Object.create(null));c[d]||(c[d]=[])}),r.pending.forEach(l=>{const{provider:u,prefix:d,name:c}=l,f=Pe(u,d),h=f.pendingIcons||(f.pendingIcons=new Set);h.has(c)||(h.add(c),n[u][d].push(c))}),s.forEach(l=>{const{provider:u,prefix:d}=l;n[u][d].length&&hv(l,n[u][d])}),t?tv(t,r,s):Gl},fv=i=>new Promise((t,e)=>{const r=typeof i=="string"?ar(i,!0):i;if(!r){e(i);return}pa([r||i],n=>{if(n.length&&r){const s=Fn(r);if(s){t({...or,...s});return}}e(i)})});function pv(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function mv(i,t){const e=typeof i=="string"?ar(i,!0,!0):null;if(!e){const s=pv(i);return{value:i,data:s}}const r=Fn(e);if(r!==void 0||!e.prefix)return{value:i,name:e,data:r};const n=pa([e],()=>t(i,e,Fn(e)));return{value:i,name:e,loading:n}}function Js(i){return i.hasAttribute("inline")}let Gd=!1;try{Gd=navigator.vendor.indexOf("Apple")===0}catch{}function bv(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Gd||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const gv=/(-?[0-9.]*[0-9]+[0-9.]*)/g,vv=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Oo(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const r=i.split(gv);if(r===null||!r.length)return i;const n=[];let s=r.shift(),o=vv.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?n.push(s):n.push(Math.ceil(a*t*e)/e)}else n.push(s);if(s=r.shift(),s===void 0)return n.join("");o=!o}}function yv(i,t="defs"){let e="";const r=i.indexOf("<"+t);for(;r>=0;){const n=i.indexOf(">",r),s=i.indexOf("</"+t);if(n===-1||s===-1)break;const o=i.indexOf(">",s);if(o===-1)break;e+=i.slice(n+1,s).trim(),i=i.slice(0,r).trim()+i.slice(o+1)}return{defs:e,content:i}}function _v(i,t){return i?"<defs>"+i+"</defs>"+t:t}function wv(i,t,e){const r=yv(i);return _v(r.defs,t+r.content+e)}const xv=i=>i==="unset"||i==="undefined"||i==="none";function Yd(i,t){const e={...or,...i},r={...Id,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let s=e.body;[e,r].forEach(p=>{const v=[],b=p.hFlip,_=p.vFlip;let w=p.rotate;b?_?w+=2:(v.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),v.push("scale(-1 1)"),n.top=n.left=0):_&&(v.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),v.push("scale(1 -1)"),n.top=n.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=n.height/2+n.top,v.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:v.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:x=n.width/2+n.left,v.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(n.left!==n.top&&(x=n.left,n.left=n.top,n.top=x),n.width!==n.height&&(x=n.width,n.width=n.height,n.height=x)),v.length&&(s=wv(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const o=r.width,a=r.height,l=n.width,u=n.height;let d,c;o===null?(c=a===null?"1em":a==="auto"?u:a,d=Oo(c,l/u)):(d=o==="auto"?l:o,c=a===null?Oo(d,u/l):a==="auto"?u:a);const f={},h=(p,v)=>{xv(v)||(f[p]=v.toString())};h("width",d),h("height",c);const g=[n.left,n.top,l,u];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:s}}function ma(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)e+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function $v(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function kv(i){return"data:image/svg+xml,"+$v(i)}function Zd(i){return'url("'+kv(i)+'")'}const Cv=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ts=Cv();function Ev(i){ts=i}function Sv(){return ts}function Av(i,t){const e=Os(i);if(!e)return 0;let r;if(!e.maxURL)r=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const s=t+".json?icons=";r=e.maxURL-n-e.path.length-s.length}return r}function Ov(i){return i===404}const Tv=(i,t,e)=>{const r=[],n=Av(i,t),s="icons";let o={type:s,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,u)=>{a+=l.length+1,a>=n&&u>0&&(r.push(o),o={type:s,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),r.push(o),r};function zv(i){if(typeof i=="string"){const t=Os(i);if(t)return t.path}return"/"}const Iv=(i,t,e)=>{if(!ts){e("abort",424);return}let r=zv(t.provider);switch(t.type){case"icons":{const s=t.prefix,o=t.icons.join(","),a=new URLSearchParams({icons:o});r+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:e("abort",400);return}let n=503;ts(i+r).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{e(Ov(o)?"abort":"next",o)});return}return n=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?e("abort",s):e("next",n)});return}setTimeout(()=>{e("success",s)})}).catch(()=>{e("next",n)})},Pv={prepare:Tv,send:Iv};function Yl(i,t){switch(i){case"local":case"session":Qe[i]=t;break;case"all":for(const e in Qe)Qe[e]=t;break}}const Ks="data-style";let Xd="";function Nv(i){Xd=i}function Zl(i,t){let e=Array.from(i.childNodes).find(r=>r.hasAttribute&&r.hasAttribute(Ks));e||(e=document.createElement("style"),e.setAttribute(Ks,Ks),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Xd}function Jd(){Bl("",Pv),Rd(!0);let i;try{i=window}catch{}if(i){if(qd(),i.IconifyPreload!==void 0){const t=i.IconifyPreload,e="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!jl(r))&&console.error(e)}catch{console.error(e)}})}if(i.IconifyProviders!==void 0){const t=i.IconifyProviders;if(typeof t=="object"&&t!==null)for(const e in t){const r="IconifyProviders["+e+"] is invalid.";try{const n=t[e];if(typeof n!="object"||!n||n.resources===void 0)continue;Ul(e,n)||console.error(r)}catch{console.error(r)}}}}return{enableCache:t=>Yl(t,!0),disableCache:t=>Yl(t,!1),iconLoaded:Fl,iconExists:Fl,getIcon:Xg,listIcons:Zg,addIcon:Md,addCollection:jl,calculateSize:Oo,buildIcon:Yd,iconToHTML:ma,svgToURL:Zd,loadIcons:pa,loadIcon:fv,addAPIProvider:Ul,appendCustomStyle:Nv,_api:{getAPIConfig:Os,setAPIModule:Bl,sendAPIQuery:Fd,setFetch:Ev,getFetch:Sv,listAPIProviders:rv}}}const To={"background-color":"currentColor"},Kd={"background-color":"transparent"},Xl={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Jl={"-webkit-mask":To,mask:To,background:Kd};for(const i in Jl){const t=Jl[i];for(const e in Xl)t[i+"-"+e]=Xl[e]}function Kl(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Lv(i,t,e){const r=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const s=i.attributes,o=ma(n,{...s,width:t.width+"",height:t.height+""}),a=Zd(o),l=r.style,u={"--svg":a,width:Kl(s.width),height:Kl(s.height),...e?To:Kd};for(const d in u)l.setProperty(d,u[d]);return r}let Cn;function Rv(){try{Cn=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Cn=null}}function Mv(i){return Cn===void 0&&Rv(),Cn?Cn.createHTML(i):i}function Dv(i){const t=document.createElement("span"),e=i.attributes;let r="";e.width||(r="width: inherit;"),e.height||(r+="height: inherit;"),r&&(e.style=r);const n=ma(i.body,e);return t.innerHTML=Mv(n),t.firstChild}function zo(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Ql(i,t){const e=t.icon.data,r=t.customisations,n=Yd(e,r);r.preserveAspectRatio&&(n.attributes.preserveAspectRatio=r.preserveAspectRatio);const s=t.renderedMode;let o;switch(s){case"svg":o=Dv(n);break;default:o=Lv(n,{...or,...e},s==="mask")}const a=zo(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function tc(i,t,e){const r=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:r}}function jv(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const r=t.get(i);if(r)return r;const n=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends e{constructor(){super(),qe(this,"_shadowRoot"),qe(this,"_initialised",!1),qe(this,"_state"),qe(this,"_checkQueued",!1),qe(this,"_connected",!1),qe(this,"_observer",null),qe(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=Js(this);Zl(a,l),this._state=tc({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=Js(this),u=this._state;l!==u.inline&&(u.inline=l,Zl(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Js(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}Ql(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const u=this.getAttribute("mode"),d=Ml(this);(a.attrMode!==u||Ug(a.customisations,d)||!zo(this._shadowRoot))&&this._renderIcon(a.icon,d,u)}_iconChanged(a){const l=mv(a,(u,d,c)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==u)return;const h={value:u,name:d,data:c};h.data?this._gotIconData(h):f.icon=h});l.data?this._gotIconData(l):this._state=tc(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=zo(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Ml(this),this.getAttribute("mode"))}_renderIcon(a,l,u){const d=bv(a.data.body,u),c=this._state.inline;Ql(this._shadowRoot,this._state={rendered:!0,icon:a,inline:c,customisations:l,attrMode:u,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(u=>u.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in s.prototype||Object.defineProperty(s.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=Jd();for(const a in o)s[a]=s.prototype[a]=o[a];return t.define(i,s),s}jv()||Jd();const Fv=mt`
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
`,Bv=mt`
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
`,je={scrollbar:Fv,globalStyles:Bv},Qd=class dt{static set config(t){this._config={...dt._config,...t}}static get config(){return dt._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=je.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){dt.init()}static init(){dt.addGlobalStyles(),dt.defineCustomElement("bim-button",qv),dt.defineCustomElement("bim-checkbox",Ki),dt.defineCustomElement("bim-color-input",hi),dt.defineCustomElement("bim-context-menu",Io),dt.defineCustomElement("bim-dropdown",we),dt.defineCustomElement("bim-grid",ga),dt.defineCustomElement("bim-icon",ey),dt.defineCustomElement("bim-input",cr),dt.defineCustomElement("bim-label",tn),dt.defineCustomElement("bim-number-input",Dt),dt.defineCustomElement("bim-option",Tt),dt.defineCustomElement("bim-panel",fi),dt.defineCustomElement("bim-panel-section",en),dt.defineCustomElement("bim-selector",nn),dt.defineCustomElement("bim-table",Jt),dt.defineCustomElement("bim-tabs",mi),dt.defineCustomElement("bim-tab",Bt),dt.defineCustomElement("bim-table-cell",mh),dt.defineCustomElement("bim-table-children",gh),dt.defineCustomElement("bim-table-group",yh),dt.defineCustomElement("bim-table-row",pi),dt.defineCustomElement("bim-text-input",ue),dt.defineCustomElement("bim-toolbar",Ls),dt.defineCustomElement("bim-toolbar-group",Ps),dt.defineCustomElement("bim-toolbar-section",on),dt.defineCustomElement("bim-viewport",Th)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let r=0;r<10;r++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};Qd._config={sectionLabelOnVerticalToolbar:!1};let th=Qd;class zt extends ft{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const r of t)this.elements.add(r);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const r of e)r.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const r=e[0];if(!r.isIntersecting)return;const n=r.target;t.unobserve(n);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][s];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,r=[...this.elements][e];r&&t.observe(r)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const r=document.createDocumentFragment();if(t.length===0)return Li(t(),r),r.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const s=t,o=l=>(n={...n,...l},Li(s(n),r),n);o(e);const a=()=>n;return[r.firstElementChild,o,a]}}var Uv=Object.defineProperty,Hv=Object.getOwnPropertyDescriptor,eh=(i,t,e,r)=>{for(var n=Hv(t,e),s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Uv(t,e,n),n},At;const ba=(At=class extends ft{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(i){this._placement=i,this.updatePosition()}static removeMenus(){for(const i of At.menus)i instanceof At&&(i.visible=!1);At.dialog.close(),At.dialog.remove()}get visible(){return this._visible}set visible(i){var t;this._visible=i,i?(At.dialog.parentElement||document.body.append(At.dialog),this._previousContainer=this.parentElement,At.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,At.dialog.append(this),At.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const i=this.placement??"right",t=await wd(this._previousContainer,this,{placement:i,middleware:[ad(10),_d(),yd(),vd({padding:5})]}),{x:e,y:r}=t;this.style.left=`${e}px`,this.style.top=`${r}px`}connectedCallback(){super.connectedCallback(),At.menus.push(this)}render(){return N` <slot></slot> `}},At.styles=[je.scrollbar,mt`
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
    `],At.dialog=zt.create(()=>N` <dialog
      @click=${i=>{i.target===At.dialog&&At.removeMenus()}}
      @cancel=${()=>At.removeMenus()}
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
    ></dialog>`),At.menus=[],At);eh([B({type:String,reflect:!0})],ba.prototype,"placement");eh([B({type:Boolean,reflect:!0})],ba.prototype,"visible");let Io=ba;var Vv=Object.defineProperty,Wv=Object.getOwnPropertyDescriptor,ee=(i,t,e,r)=>{for(var n=r>1?void 0:r?Wv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Vv(t,e,n),n},mn;const Zt=(mn=class extends ft{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=Ri(),this._tooltip=Ri(),this._mouseLeave=!1,this.onClick=i=>{i.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const i=this._contextMenu;if(i){const t=this.getAttribute("data-context-group");t&&i.setAttribute("data-context-group",t),this.closeNestedContexts();const e=th.newRandomId();for(const r of i.children)r instanceof mn&&r.setAttribute("data-context-group",e);i.visible=!0}},this.mouseLeave=!0}set loading(i){if(this._loading=i,i)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=i,this.icon="eos-icons:loading";else{const{disabled:t,icon:e}=this._stateBeforeLoading;this.disabled=t,this.icon=e}}get loading(){return this._loading}set mouseLeave(i){this._mouseLeave=i,i&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:i}=this._parent,{value:t}=this._tooltip;i&&t&&wd(i,t,{placement:"bottom",middleware:[ad(10),_d(),yd(),vd({padding:5})]}).then(e=>{const{x:r,y:n}=e;Object.assign(t.style,{left:`${r}px`,top:`${n}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const i=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},i)}closeNestedContexts(){const i=this.getAttribute("data-context-group");if(i)for(const t of Io.dialog.children){const e=t.getAttribute("data-context-group");if(t instanceof Io&&e===i){t.visible=!1,t.removeAttribute("data-context-group");for(const r of t.children)r instanceof mn&&(r.closeNestedContexts(),r.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const i=N`
      <div ${It(this._tooltip)} class="tooltip">
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
      <div ${It(this._parent)} class="parent" @click=${this.onClick}>
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
    `}},mn.styles=mt`
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
  `,mn);ee([B({type:String,reflect:!0})],Zt.prototype,"label",2);ee([B({type:Boolean,attribute:"label-hidden",reflect:!0})],Zt.prototype,"labelHidden",2);ee([B({type:Boolean,reflect:!0})],Zt.prototype,"active",2);ee([B({type:Boolean,reflect:!0,attribute:"disabled"})],Zt.prototype,"disabled",2);ee([B({type:String,reflect:!0})],Zt.prototype,"icon",2);ee([B({type:Boolean,reflect:!0})],Zt.prototype,"vertical",2);ee([B({type:Number,attribute:"tooltip-time",reflect:!0})],Zt.prototype,"tooltipTime",2);ee([B({type:Boolean,attribute:"tooltip-visible",reflect:!0})],Zt.prototype,"tooltipVisible",2);ee([B({type:String,attribute:"tooltip-title",reflect:!0})],Zt.prototype,"tooltipTitle",2);ee([B({type:String,attribute:"tooltip-text",reflect:!0})],Zt.prototype,"tooltipText",2);ee([B({type:Boolean,reflect:!0})],Zt.prototype,"loading",1);let qv=Zt;var Gv=Object.defineProperty,lr=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Gv(t,e,n),n};const ih=class extends ft{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(i){i.stopPropagation(),this.checked=i.target.checked,this.dispatchEvent(this.onValueChange)}render(){return N`
      <div class="parent">
        ${this.label?N`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};ih.styles=mt`
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
  `;let Ki=ih;lr([B({type:String,reflect:!0})],Ki.prototype,"icon");lr([B({type:String,reflect:!0})],Ki.prototype,"name");lr([B({type:String,reflect:!0})],Ki.prototype,"label");lr([B({type:Boolean,reflect:!0})],Ki.prototype,"checked");lr([B({type:Boolean,reflect:!0})],Ki.prototype,"inverted");var Yv=Object.defineProperty,Qi=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Yv(t,e,n),n};const nh=class extends ft{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=Ri(),this._textInput=Ri(),this.onValueChange=new Event("input"),this.onOpacityInput=i=>{const t=i.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(i){const{color:t,opacity:e}=i;this.color=t,e&&(this.opacity=e)}get value(){const i={color:this.color};return this.opacity&&(i.opacity=this.opacity),i}onColorInput(i){i.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(i){i.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:e}=t;let r=e.replace(/[^a-fA-F0-9]/g,"");r.startsWith("#")||(r=`#${r}`),t.value=r.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:i}=this._colorInput;i&&i.click()}render(){return N`
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
                ${It(this._colorInput)}
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
                ${It(this._textInput)}
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
    `}};nh.styles=mt`
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
  `;let hi=nh;Qi([B({type:String,reflect:!0})],hi.prototype,"name");Qi([B({type:String,reflect:!0})],hi.prototype,"label");Qi([B({type:String,reflect:!0})],hi.prototype,"icon");Qi([B({type:Boolean,reflect:!0})],hi.prototype,"vertical");Qi([B({type:Number,reflect:!0})],hi.prototype,"opacity");Qi([B({type:String,reflect:!0})],hi.prototype,"color");const es=(i,t={},e=!0)=>{let r={};for(const n of i.children){const s=n,o=s.getAttribute("name")||s.getAttribute("label"),a=t[o];if(o){if("value"in s&&typeof s.value<"u"&&s.value!==null){const l=s.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;r[o]=a?a(s.value):s.value}else if(e){const l=es(s,t);if(Object.keys(l).length===0)continue;r[o]=a?a(l):l}}else e&&(r={...r,...es(s,t)})}return r},Ts=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Zv=[">=","<=","=",">","<","?","/","#"];function ec(i){const t=Zv.find(o=>i.split(o).length===2),e=i.split(t).map(o=>o.trim()),[r,n]=e,s=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):Ts(n);return{key:r,condition:t,value:s}}const Po=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(r=>r.trim());for(const r of e){const n=!r.startsWith("(")&&!r.endsWith(")"),s=r.startsWith("(")&&r.endsWith(")");if(n){const o=ec(r);t.push(o)}if(s){const o={operator:"&",queries:r.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const u=ec(a);return l>0&&(u.operator="&"),u})};t.push(o)}}return t}catch{return null}},ic=(i,t,e)=>{let r=!1;switch(t){case"=":r=i===e;break;case"?":r=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(r=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(r=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(r=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(r=i>=e);break;case"/":r=String(i).startsWith(String(e));break}return r};var Xv=Object.defineProperty,Jv=Object.getOwnPropertyDescriptor,Fe=(i,t,e,r)=>{for(var n=r>1?void 0:r?Jv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Xv(t,e,n),n};const rh=class extends ft{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Ts(this.label):this.label}set value(i){this._value=i}render(){return N`
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
    `}};rh.styles=mt`
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
  `;let Tt=rh;Fe([B({type:String,reflect:!0})],Tt.prototype,"img",2);Fe([B({type:String,reflect:!0})],Tt.prototype,"label",2);Fe([B({type:String,reflect:!0})],Tt.prototype,"icon",2);Fe([B({type:Boolean,reflect:!0})],Tt.prototype,"checked",2);Fe([B({type:Boolean,reflect:!0})],Tt.prototype,"checkbox",2);Fe([B({type:Boolean,attribute:"no-mark",reflect:!0})],Tt.prototype,"noMark",2);Fe([B({converter:{fromAttribute(i){return i&&Ts(i)}}})],Tt.prototype,"value",1);Fe([B({type:Boolean,reflect:!0})],Tt.prototype,"vertical",2);var Kv=Object.defineProperty,Qv=Object.getOwnPropertyDescriptor,Be=(i,t,e,r)=>{for(var n=r>1?void 0:r?Qv(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Kv(t,e,n),n};const sh=class extends zt{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=Ri(),this.onOptionClick=i=>{const t=i.target,e=this._value.has(t);if(!this.multiple&&!this.required&&!e)this._value=new Set([t]);else if(!this.multiple&&!this.required&&e)this._value=new Set([]);else if(!this.multiple&&this.required&&!e)this._value=new Set([t]);else if(this.multiple&&!this.required&&!e)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&e){const r=[...this._value].filter(n=>n!==t);this._value=new Set(r)}else if(this.multiple&&this.required&&!e)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&e){const r=[...this._value].filter(s=>s!==t),n=new Set(r);n.size!==0&&(this._value=n)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(i){if(i){const{value:t}=this._contextMenu;if(!t)return;for(const e of this.elements)t.append(e);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(i){if(this.required&&Object.keys(i).length===0)return;const t=new Set;for(const e of i){const r=this.findOption(e);if(r&&(t.add(r),!this.multiple&&Object.keys(i).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(i=>i instanceof Tt&&i.checked).map(i=>i.value)}get _options(){const i=new Set([...this.elements]);for(const t of this.children)t instanceof Tt&&i.add(t);return[...i]}onSlotChange(i){const t=i.target.assignedElements();this.observe(t);const e=new Set;for(const r of this.elements){if(!(r instanceof Tt)){r.remove();continue}r.checked&&e.add(r),r.removeEventListener("click",this.onOptionClick),r.addEventListener("click",this.onOptionClick)}this._value=e}updateOptionsState(){for(const i of this._options)i instanceof Tt&&(i.checked=this._value.has(i))}findOption(i){return this._options.find(t=>t instanceof Tt?t.label===i||t.value===i:!1)}render(){let i,t,e;if(this._value.size===0)i="Select an option...";else if(this._value.size===1){const r=[...this._value][0];i=r?.label||r?.value,t=r?.img,e=r?.icon}else i=`Multiple (${this._value.size})`;return N`
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
            ${It(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};sh.styles=[je.scrollbar,mt`
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
    `];let we=sh;Be([B({type:String,reflect:!0})],we.prototype,"name",2);Be([B({type:String,reflect:!0})],we.prototype,"icon",2);Be([B({type:String,reflect:!0})],we.prototype,"label",2);Be([B({type:Boolean,reflect:!0})],we.prototype,"multiple",2);Be([B({type:Boolean,reflect:!0})],we.prototype,"required",2);Be([B({type:Boolean,reflect:!0})],we.prototype,"vertical",2);Be([B({type:Boolean,reflect:!0})],we.prototype,"visible",1);Be([Ji()],we.prototype,"_value",2);var ty=Object.defineProperty,oh=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&ty(t,e,n),n};const ah=class extends ft{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(i){const t=i.split(`
`).map(e=>e.trim()).map(e=>e.split('"')[1]).filter(e=>e!==void 0).flatMap(e=>e.split(/\s+/));return[...new Set(t)].filter(e=>e!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const i=this.layouts[this.layout],t=this.getUniqueAreasFromTemplate(i.template).map(e=>{const r=i.elements[e];return r&&(r.style.gridArea=e),r}).filter(e=>!!e);this.style.gridTemplate=i.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...t)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return N`<slot></slot>`}};ah.styles=mt`
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
  `;let ga=ah;oh([B({type:Boolean,reflect:!0})],ga.prototype,"floating");oh([B({type:String,reflect:!0})],ga.prototype,"layout");const No=class extends ft{render(){return N`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};No.styles=mt`
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
  `,No.properties={icon:{type:String}};let ey=No;var iy=Object.defineProperty,zs=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&iy(t,e,n),n};const lh=class extends ft{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const i={};for(const t of this.children){const e=t;"value"in e?i[e.name||e.label]=e.value:"checked"in e&&(i[e.name||e.label]=e.checked)}return i}set value(i){const t=[...this.children];for(const e in i){const r=t.find(o=>{const a=o;return a.name===e||a.label===e});if(!r)continue;const n=r,s=i[e];typeof s=="boolean"?n.checked=s:n.value=s}}render(){return N`
      <div class="parent">
        ${this.label||this.icon?N`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};lh.styles=mt`
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
  `;let cr=lh;zs([B({type:String,reflect:!0})],cr.prototype,"name");zs([B({type:String,reflect:!0})],cr.prototype,"label");zs([B({type:String,reflect:!0})],cr.prototype,"icon");zs([B({type:Boolean,reflect:!0})],cr.prototype,"vertical");var ny=Object.defineProperty,ur=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&ny(t,e,n),n};const ch=class extends ft{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Ts(this.textContent):this.textContent}render(){return N`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?N`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?N`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};ch.styles=mt`
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
  `;let tn=ch;ur([B({type:String,reflect:!0})],tn.prototype,"img");ur([B({type:Boolean,attribute:"label-hidden",reflect:!0})],tn.prototype,"labelHidden");ur([B({type:String,reflect:!0})],tn.prototype,"icon");ur([B({type:Boolean,attribute:"icon-hidden",reflect:!0})],tn.prototype,"iconHidden");ur([B({type:Boolean,reflect:!0})],tn.prototype,"vertical");var ry=Object.defineProperty,sy=Object.getOwnPropertyDescriptor,Xt=(i,t,e,r)=>{for(var n=r>1?void 0:r?sy(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&ry(t,e,n),n};const uh=class extends ft{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Ri(),this.onValueChange=new Event("change")}set value(i){this.setValue(i.toString())}get value(){return this._value}onChange(i){i.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(i){const{value:t}=this._input;let e=i;if(e=e.replace(/[^0-9.-]/g,""),e=e.replace(/(\..*)\./g,"$1"),e.endsWith(".")||(e.lastIndexOf("-")>0&&(e=e[0]+e.substring(1).replace(/-/g,"")),e==="-"||e==="-0"))return;let r=Number(e);Number.isNaN(r)||(r=this.min!==void 0?Math.max(r,this.min):r,r=this.max!==void 0?Math.min(r,this.max):r,this.value!==r&&(this._value=r,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:i}=this._input;i&&Number.isNaN(Number(i.value))&&(i.value=this.value.toString())}onSliderMouseDown(i){document.body.style.cursor="w-resize";const{clientX:t}=i,e=this.value;let r=!1;const n=a=>{var l;r=!0;const{clientX:u}=a,d=this.step??1,c=((l=d.toString().split(".")[1])==null?void 0:l.length)||0,f=1/(this.sensitivity??1),h=(u-t)/f;if(Math.floor(Math.abs(h))!==Math.abs(h))return;const g=e+h*d;this.setValue(g.toFixed(c))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},o=()=>{document.removeEventListener("mousemove",n),document.body.style.cursor="default",r?r=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)}onFocus(i){i.stopPropagation();const t=e=>{e.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:i}=this._input;i&&i.focus()}render(){const i=N`
      ${this.pref||this.icon?N`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${It(this._input)}
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
    `}};uh.styles=mt`
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
  `;let Dt=uh;Xt([B({type:String,reflect:!0})],Dt.prototype,"name",2);Xt([B({type:String,reflect:!0})],Dt.prototype,"icon",2);Xt([B({type:String,reflect:!0})],Dt.prototype,"label",2);Xt([B({type:String,reflect:!0})],Dt.prototype,"pref",2);Xt([B({type:Number,reflect:!0})],Dt.prototype,"min",2);Xt([B({type:Number,reflect:!0})],Dt.prototype,"value",1);Xt([B({type:Number,reflect:!0})],Dt.prototype,"step",2);Xt([B({type:Number,reflect:!0})],Dt.prototype,"sensitivity",2);Xt([B({type:Number,reflect:!0})],Dt.prototype,"max",2);Xt([B({type:String,reflect:!0})],Dt.prototype,"suffix",2);Xt([B({type:Boolean,reflect:!0})],Dt.prototype,"vertical",2);Xt([B({type:Boolean,reflect:!0})],Dt.prototype,"slider",2);var oy=Object.defineProperty,ay=Object.getOwnPropertyDescriptor,dr=(i,t,e,r)=>{for(var n=r>1?void 0:r?ay(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&oy(t,e,n),n};const dh=class extends ft{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(i){this._hidden=i,this.activationButton.active=!i,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return es(this,this.valueTransform)}set value(i){const t=[...this.children];for(const e in i){const r=t.find(s=>{const o=s;return o.name===e||o.label===e});if(!r)continue;const n=r;n.value=i[e]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const i=this.querySelectorAll("bim-panel-section");for(const t of i)t.collapsed=!0}expandSections(){const i=this.querySelectorAll("bim-panel-section");for(const t of i)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,N`
      <div class="parent">
        ${this.label||this.name||this.icon?N`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};dh.styles=[je.scrollbar,mt`
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
    `];let fi=dh;dr([B({type:String,reflect:!0})],fi.prototype,"icon",2);dr([B({type:String,reflect:!0})],fi.prototype,"name",2);dr([B({type:String,reflect:!0})],fi.prototype,"label",2);dr([B({type:Boolean,reflect:!0})],fi.prototype,"hidden",1);dr([B({type:Boolean,attribute:"header-hidden",reflect:!0})],fi.prototype,"headerHidden",2);var ly=Object.defineProperty,hr=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&ly(t,e,n),n};const hh=class extends ft{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const i=this.parentElement;let t;return i instanceof fi&&(t=i.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),es(this,t)}set value(i){const t=[...this.children];for(const e in i){const r=t.find(s=>{const o=s;return o.name===e||o.label===e});if(!r)continue;const n=r;n.value=i[e]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const i=this.label||this.icon||this.name||this.fixed,t=N`<svg
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
    `}};hh.styles=[je.scrollbar,mt`
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
    `];let en=hh;hr([B({type:String,reflect:!0})],en.prototype,"icon");hr([B({type:String,reflect:!0})],en.prototype,"label");hr([B({type:String,reflect:!0})],en.prototype,"name");hr([B({type:Boolean,reflect:!0})],en.prototype,"fixed");hr([B({type:Boolean,reflect:!0})],en.prototype,"collapsed");var cy=Object.defineProperty,fr=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&cy(t,e,n),n};const fh=class extends ft{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=i=>{this._value=i.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof Tt&&(t.checked=t===i.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(i){const t=this.findOption(i);if(t){for(const e of this._options)e.checked=e===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(i){const t=i.target.assignedElements();for(const e of t)e instanceof Tt&&(e.noMark=!0,e.removeEventListener("click",this.onOptionClick),e.addEventListener("click",this.onOptionClick))}findOption(i){return this._options.find(t=>t instanceof Tt?t.label===i||t.value===i:!1)}firstUpdated(){const i=[...this.children].find(t=>t instanceof Tt&&t.checked);i&&(this._value=i)}render(){return N`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};fh.styles=mt`
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
  `;let nn=fh;fr([B({type:String,reflect:!0})],nn.prototype,"name");fr([B({type:String,reflect:!0})],nn.prototype,"icon");fr([B({type:String,reflect:!0})],nn.prototype,"label");fr([B({type:Boolean,reflect:!0})],nn.prototype,"vertical");fr([Ji()],nn.prototype,"_value");const uy=()=>N`
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
  `,dy=()=>N`
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
  `;var hy=Object.defineProperty,fy=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&hy(t,e,n),n};const ph=class extends ft{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return N`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};ph.styles=mt`
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
  `;let mh=ph;fy([B({type:String,reflect:!0})],mh.prototype,"column");var py=Object.defineProperty,my=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&py(t,e,n),n};const bh=class extends ft{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(i,t=!1){for(const e of this._groups)e.childrenHidden=typeof i>"u"?!e.childrenHidden:!i,t&&e.toggleChildren(i,t)}render(){return this._groups=[],N`
      <slot></slot>
      ${this.data.map(i=>{const t=document.createElement("bim-table-group");return this._groups.push(t),t.table=this.table,t.data=i,t})}
    `}};bh.styles=mt`
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
  `;let gh=bh;my([B({type:Array,attribute:!1})],gh.prototype,"data");var by=Object.defineProperty,gy=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&by(t,e,n),n};const vh=class extends ft{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(i,t=!1){this._children&&(this.childrenHidden=typeof i>"u"?!this.childrenHidden:!i,t&&this._children.toggleGroups(i,t))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const i=this.table.getGroupIndentation(this.data)??0,t=N`
      ${this.table.noIndentation?null:N`
            <style>
              .branch-vertical {
                left: ${i+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,e=document.createDocumentFragment();Li(t,e);let r=null;this.table.noIndentation||(r=document.createElement("div"),r.classList.add("branch","branch-horizontal"),r.style.left=`${i-1+(this.table.selectableRows?2.05:.5625)}rem`);let n=null;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("height","9.5"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.3333333");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(l);const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("height","6.5"),u.setAttribute("width","9.5"),u.setAttribute("viewBox","0 0 5.9111118 5.0175439");const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),u.append(d),n=document.createElement("div"),n.addEventListener("click",c=>{c.stopPropagation(),this.toggleChildren()}),n.classList.add("caret"),n.style.left=`${(this.table.selectableRows?1.5:.125)+i}rem`,this.childrenHidden?n.append(a):n.append(u)}const s=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&s.append(e),s.table=this.table,s.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:s}})),n&&this.data.children&&s.append(n),i!==0&&(!this.data.children||this.childrenHidden)&&r&&s.append(r);let o;if(this.data.children){o=document.createElement("bim-table-children"),this._children=o,o.table=this.table,o.data=this.data.children;const a=document.createDocumentFragment();Li(t,a),o.append(a)}return N`
      <div class="parent">${s} ${this.childrenHidden?null:o}</div>
    `}};vh.styles=mt`
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
  `;let yh=vh;gy([B({type:Boolean,attribute:"children-hidden",reflect:!0})],yh.prototype,"childrenHidden");var vy=Object.defineProperty,rn=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&vy(t,e,n),n};const _h=class extends ft{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(i=>{this._intersecting=i[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(i=>!this.hiddenColumns.includes(i.name)).map(i=>i.name)}get _columnWidths(){return this.columns.filter(i=>!this.hiddenColumns.includes(i.name)).map(i=>i.width)}get _isSelected(){var i;return(i=this.table)==null?void 0:i.selection.has(this.data)}onSelectionChange(i){if(!this.table)return;const t=i.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const i=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,e=[];for(const r in t){if(this.hiddenColumns.includes(r))continue;const n=t[r];let s;if(typeof n=="string"||typeof n=="boolean"||typeof n=="number"?(s=document.createElement("bim-label"),s.textContent=String(n)):n instanceof HTMLElement?s=n:(s=document.createDocumentFragment(),Li(n,s)),!s)continue;const o=document.createElement("bim-table-cell");o.append(s),o.column=r,this._columnNames.indexOf(r)===0&&(o.style.marginLeft=`${this.table.noIndentation?0:i+.75}rem`);const a=this._columnNames.indexOf(r);o.setAttribute("data-column-index",String(a)),o.toggleAttribute("data-no-indentation",a===0&&this.table.noIndentation),o.toggleAttribute("data-cell-header",this.isHeader),o.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:o}})),e.push(o)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,N`
      ${!this.isHeader&&this.table.selectableRows?N`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${e}
      <slot></slot>
    `}render(){return N`${this._intersecting?this.compute():N``}`}};_h.styles=mt`
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
  `;let pi=_h;rn([B({type:Boolean,reflect:!0})],pi.prototype,"selected");rn([B({attribute:!1})],pi.prototype,"columns");rn([B({attribute:!1})],pi.prototype,"hiddenColumns");rn([B({attribute:!1})],pi.prototype,"data");rn([B({type:Boolean,attribute:"is-header",reflect:!0})],pi.prototype,"isHeader");rn([Ji()],pi.prototype,"_intersecting");var yy=Object.defineProperty,_y=Object.getOwnPropertyDescriptor,ie=(i,t,e,r)=>{for(var n=r>1?void 0:r?_y(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&yy(t,e,n),n};const wh=class extends ft{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this.loadingErrorElement=null,this._stringFilterFunction=(i,t)=>Object.values(t.data).some(e=>String(e).toLowerCase().includes(i.toLowerCase())),this._queryFilterFunction=(i,t)=>{let e=!1;const r=Po(i)??[];for(const n of r){if("queries"in n){e=!1;break}const{condition:s,value:o}=n;let{key:a}=n;if(a.startsWith("[")&&a.endsWith("]")){const l=a.replace("[","").replace("]","");a=l,e=Object.keys(t.data).filter(u=>u.includes(l)).map(u=>ic(t.data[u],s,o)).some(u=>u)}else e=ic(t.data[a],s,o);if(!e)break}return e}}set columns(i){const t=[];for(const e of i){const r=typeof e=="string"?{name:e,width:`minmax(${this.minColWidth}, 1fr)`}:e;t.push(r)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const i={};for(const t of this.columns)if(typeof t=="string")i[t]=t;else{const{name:e}=t;i[e]=e}return i}get value(){return this._filteredData}set queryString(i){this.toggleAttribute("data-processing",!0),this._queryString=i&&i.trim()!==""?i.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(i){this._data=i,this.updateFilteredData(),this.computeMissingColumns(i)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(i=>{setTimeout(()=>{i(this.data)})})}set hiddenColumns(i){this._hiddenColumns=i,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Po(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(i){let t=!1;for(const e of i){const{children:r,data:n}=e;for(const s in n)this._columns.map(o=>typeof o=="string"?o:o.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(r){const s=this.computeMissingColumns(r);s&&!t&&(t=s)}}return t}generateText(i="comma",t=this.value,e="",r=!0){const n=this._textDelimiters[i];let s="";const o=this.columns.map(a=>a.name);if(r){this.indentationInText&&(s+=`Indentation${n}`);const a=`${o.join(n)}
`;s+=a}for(const[a,l]of t.entries()){const{data:u,children:d}=l,c=this.indentationInText?`${e}${a+1}${n}`:"",f=o.map(g=>u[g]??""),h=`${c}${f.join(n)}
`;s+=h,d&&(s+=this.generateText(i,l.children,`${e}${a+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(i){const t={};for(const e of Object.keys(this.dataTransform)){const r=this.columns.find(n=>n.name===e);r&&r.forceDataTransform&&(e in i||(i[e]=""))}for(const e in i){const r=this.dataTransform[e];r?t[e]=r(i[e],i):t[e]=i[e]}return t}downloadData(i="BIM Table Data",t="json"){let e=null;if(t==="json"&&(e=new File([JSON.stringify(this.value,void 0,2)],`${i}.json`)),t==="csv"&&(e=new File([this.csv],`${i}.csv`)),t==="tsv"&&(e=new File([this.tsv],`${i}.tsv`)),!e)return;const r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=e.name,r.click(),URL.revokeObjectURL(r.href)}getRowIndentation(i,t=this.value,e=0){for(const r of t){if(r.data===i)return e;if(r.children){const n=this.getRowIndentation(i,r.children,e+1);if(n!==null)return n}}return null}getGroupIndentation(i,t=this.value,e=0){for(const r of t){if(r===i)return e;if(r.children){const n=this.getGroupIndentation(i,r.children,e+1);if(n!==null)return n}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(i=!1){if(this._filteredData.length!==0&&!i||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){return this.loading=!1,this._filteredData.length!==0||(t instanceof Error&&this.loadingErrorElement&&t.message.trim()!==""&&(this.loadingErrorElement.textContent=t.message),this._errorLoading=!0),!1}}filter(i,t=this.filterFunction??this._stringFilterFunction,e=this.data){const r=[];for(const n of e)if(t(i,n)){if(this.preserveStructureOnFilter){const s={data:n.data};if(n.children){const o=this.filter(i,t,n.children);o.length&&(s.children=o)}r.push(s)}else if(r.push({data:n.data}),n.children){const s=this.filter(i,t,n.children);r.push(...s)}}else if(n.children){const s=this.filter(i,t,n.children);this.preserveStructureOnFilter&&s.length?r.push({data:n.data,children:s}):r.push(...s)}return r}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return uy();if(this._errorLoading)return N`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return N`<slot name="missing-data"></slot>`;const i=document.createElement("bim-table-row");i.table=this,i.isHeader=!0,i.data=this._headerRowData,i.style.gridArea="Header",i.style.position="sticky",i.style.top="0",i.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",N`
      <div class="parent">
        ${this.headersHidden?null:i} ${dy()}
        <div style="overflow-x: hidden; grid-area: Body">${t}</div>
      </div>
    `}};wh.styles=[je.scrollbar,mt`
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
    `];let Jt=wh;ie([Ji()],Jt.prototype,"_filteredData",2);ie([B({type:Boolean,attribute:"headers-hidden",reflect:!0})],Jt.prototype,"headersHidden",2);ie([B({type:String,attribute:"min-col-width",reflect:!0})],Jt.prototype,"minColWidth",2);ie([B({type:Array,attribute:!1})],Jt.prototype,"columns",1);ie([B({type:Array,attribute:!1})],Jt.prototype,"data",1);ie([B({type:Boolean,reflect:!0})],Jt.prototype,"expanded",2);ie([B({type:Boolean,reflect:!0,attribute:"selectable-rows"})],Jt.prototype,"selectableRows",2);ie([B({attribute:!1})],Jt.prototype,"selection",2);ie([B({type:Boolean,attribute:"no-indentation",reflect:!0})],Jt.prototype,"noIndentation",2);ie([B({type:Boolean,reflect:!0})],Jt.prototype,"loading",2);ie([Ji()],Jt.prototype,"_errorLoading",2);var wy=Object.defineProperty,xy=Object.getOwnPropertyDescriptor,Is=(i,t,e,r)=>{for(var n=r>1?void 0:r?xy(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&wy(t,e,n),n};const xh=class extends ft{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(i){this._hidden=i,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:i}=this;if(i&&this.name===this._defaultName){const t=[...i.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return N` <slot></slot> `}};xh.styles=mt`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let Bt=xh;Is([B({type:String,reflect:!0})],Bt.prototype,"name",2);Is([B({type:String,reflect:!0})],Bt.prototype,"label",2);Is([B({type:String,reflect:!0})],Bt.prototype,"icon",2);Is([B({type:Boolean,reflect:!0})],Bt.prototype,"hidden",1);var $y=Object.defineProperty,ky=Object.getOwnPropertyDescriptor,sn=(i,t,e,r)=>{for(var n=r>1?void 0:r?ky(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&$y(t,e,n),n};const $h=class extends ft{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=i=>{const t=i.target;t instanceof Bt&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(i){this._tab=i;const t=[...this.children],e=t.find(r=>r instanceof Bt&&r.name===i);for(const r of t){if(!(r instanceof Bt))continue;r.hidden=e!==r;const n=this.getTabSwitcher(r.name);n&&n.toggleAttribute("data-active",!r.hidden)}}get tab(){return this._tab}getTabSwitcher(i){return this._switchers.find(t=>t.getAttribute("data-name")===i)}createSwitchers(){this._switchers=[];for(const i of this.children){if(!(i instanceof Bt))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===i.name?this.toggleAttribute("tab",!1):this.tab=i.name}),t.setAttribute("data-name",i.name),t.className="switcher";const e=document.createElement("bim-label");e.textContent=i.label??"",e.icon=i.icon,t.append(e),this._switchers.push(t)}}onSlotChange(i){this.createSwitchers();const t=i.target.assignedElements(),e=t.find(r=>r instanceof Bt?this.tab?r.name===this.tab:!r.hidden:!1);e&&e instanceof Bt&&(this.tab=e.name);for(const r of t){if(!(r instanceof Bt)){r.remove();continue}r.removeEventListener("hiddenchange",this.onTabHiddenChange),e!==r&&(r.hidden=!0),r.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return N`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};$h.styles=[je.scrollbar,mt`
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
    `];let mi=$h;sn([Ji()],mi.prototype,"_switchers",2);sn([B({type:Boolean,reflect:!0})],mi.prototype,"bottom",2);sn([B({type:Boolean,attribute:"switchers-hidden",reflect:!0})],mi.prototype,"switchersHidden",2);sn([B({type:Boolean,reflect:!0})],mi.prototype,"floating",2);sn([B({type:String,reflect:!0})],mi.prototype,"tab",1);sn([B({type:Boolean,attribute:"switchers-full",reflect:!0})],mi.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nc=i=>i??kt;var Cy=Object.defineProperty,Ey=Object.getOwnPropertyDescriptor,xe=(i,t,e,r)=>{for(var n=r>1?void 0:r?Ey(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Cy(t,e,n),n};const kh=class extends ft{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(i){this._inputTypes.includes(i)&&(this._type=i)}get type(){return this._type}get query(){return Po(this.value)}onInputChange(i){i.stopPropagation();const t=i.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("input");t?.focus()})}render(){return N`
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
              placeholder=${nc(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:N` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${nc(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};kh.styles=[je.scrollbar,mt`
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
    `];let ue=kh;xe([B({type:String,reflect:!0})],ue.prototype,"icon",2);xe([B({type:String,reflect:!0})],ue.prototype,"label",2);xe([B({type:String,reflect:!0})],ue.prototype,"name",2);xe([B({type:String,reflect:!0})],ue.prototype,"placeholder",2);xe([B({type:String,reflect:!0})],ue.prototype,"value",2);xe([B({type:Boolean,reflect:!0})],ue.prototype,"vertical",2);xe([B({type:Number,reflect:!0})],ue.prototype,"debounce",2);xe([B({type:Number,reflect:!0})],ue.prototype,"rows",2);xe([B({type:String,reflect:!0})],ue.prototype,"type",1);var Sy=Object.defineProperty,Ay=Object.getOwnPropertyDescriptor,Ch=(i,t,e,r)=>{for(var n=r>1?void 0:r?Ay(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Sy(t,e,n),n};const Eh=class extends ft{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(i){this._vertical=i,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const i=this.children;for(const t of i)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return N`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Eh.styles=mt`
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
  `;let Ps=Eh;Ch([B({type:Number,reflect:!0})],Ps.prototype,"rows",2);Ch([B({type:Boolean,reflect:!0})],Ps.prototype,"vertical",1);var Oy=Object.defineProperty,Ty=Object.getOwnPropertyDescriptor,Ns=(i,t,e,r)=>{for(var n=r>1?void 0:r?Ty(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Oy(t,e,n),n};const Sh=class extends ft{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(i){this._vertical=i,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(i){this._labelHidden=i,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const i=this.children;for(const t of i)t instanceof Ps&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return N`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?N`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Sh.styles=mt`
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
  `;let on=Sh;Ns([B({type:String,reflect:!0})],on.prototype,"label",2);Ns([B({type:String,reflect:!0})],on.prototype,"icon",2);Ns([B({type:Boolean,reflect:!0})],on.prototype,"vertical",1);Ns([B({type:Boolean,attribute:"label-hidden",reflect:!0})],on.prototype,"labelHidden",1);var zy=Object.defineProperty,Iy=Object.getOwnPropertyDescriptor,va=(i,t,e,r)=>{for(var n=r>1?void 0:r?Iy(t,e):t,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&zy(t,e,n),n};const Ah=class extends ft{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(i){this._vertical=i,this.updateSections()}get vertical(){return this._vertical}set hidden(i){this._hidden=i,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const i=this.children;for(const t of i)t instanceof on&&(t.labelHidden=this.vertical&&!th.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return N`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Ah.styles=mt`
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
  `;let Ls=Ah;va([B({type:String,reflect:!0})],Ls.prototype,"icon",2);va([B({type:Boolean,attribute:"labels-hidden",reflect:!0})],Ls.prototype,"labelsHidden",2);va([B({type:Boolean,reflect:!0})],Ls.prototype,"vertical",1);var Py=Object.defineProperty,Ny=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&Py(t,e,n),n};const Oh=class extends ft{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return N`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Oh.styles=mt`
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
  `;let Th=Oh;Ny([B({type:String,reflect:!0})],Th.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zh="important",Ly=" !"+zh,be=Ad(class extends Od{constructor(i){var t;if(super(i),i.type!==Sd.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const r=i[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(const r in t){const n=t[r];if(n!=null){this.ft.add(r);const s=typeof n=="string"&&n.endsWith(Ly);r.includes("-")||s?e.setProperty(r,s?n.slice(0,-11):n,s?zh:""):e[r]=n}}return si}}),Ry=i=>{const{components:t}=i,e=t.get(_c);return N`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const r=document.createElement("input");r.type="file",r.accept=".ifc",r.onchange=async()=>{if(r.files===null||r.files.length===0)return;const n=r.files[0];r.remove();const s=await n.arrayBuffer(),o=new Uint8Array(s),a=await e.load(o);a.name=n.name.replace(".ifc","")},r.click()}}
    ></bim-button>
  `},My=i=>zt.create(Ry,i),Dy=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:My},Symbol.toStringTag,{value:"Module"})),jy={...Dy},zr={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},Qs={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"},rc=(i,t)=>{const e=(t?.users??zr.users)[i],r=e?.name??i,n=r.trim().split(/\s+/);let s,o;return n[0]&&n[0][0]&&(s=n[0][0].toUpperCase(),n[0][1]&&(o=n[0][1].toUpperCase())),n[1]&&n[1][0]&&(o=n[1][0].toUpperCase()),N`
  <div style="display: flex; gap: 0.25rem; overflow: hidden;">
    ${!(e!=null&&e.picture)&&(s||o)?N`
      <bim-label
        style=${be({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${o}</bim-label>
      `:null}
    <bim-label .img=${e?.picture}>${r}</bim-label>
  </div>
`},Fy=i=>{const{components:t,dataStyles:e,onTopicEnter:r}=i,n=t.get(Wn),s=i.topics??n.list.values();return N`
    <bim-table @cellcreated=${({detail:o})=>{const{cell:a}=o;a.style.marginLeft="0"}} ${It(o=>{if(!o)return;const a=o;a.hiddenColumns=["Guid"],a.columns=["Title"],a.selectableRows=!0,a.dataTransform={Title:(l,u)=>{const{Guid:d}=u;if(typeof d!="string")return l;const c=n.list.get(d);return c?N`
        <div style="display: flex; overflow: hidden;">
          <style>
            #BBETO {
              background-color: transparent
            }
  
            #BBETO:hover {
              --bim-label--c: var(--bim-ui_accent-base)
            }
          </style> 
          <bim-button @click=${()=>{r&&r(c)}} id="BBETO" icon="iconamoon:enter-duotone"></bim-button>
          <bim-label>${l}</bim-label>
        </div>`:l},Priority:l=>{if(typeof l!="string")return l;const u=(e?.priorities??zr.priorities)[l];return N`
          <bim-label
            .icon=${u?.icon}
            style=${be({...Qs,...u?.style})}
          >${l}
          </bim-label>
        `},Status:l=>{if(typeof l!="string")return l;const u=(e?.statuses??zr.statuses)[l];return N`
          <bim-label
            .icon=${u?.icon}
            style=${be({...Qs,...u?.style})}
          >${l}
          </bim-label>
        `},Type:l=>{if(typeof l!="string")return l;const u=(e?.types??zr.types)[l];return N`
          <bim-label
            .icon=${u?.icon}
            style=${be({...Qs,...u?.style})}
          >${l}
          </bim-label>
        `},Author:l=>typeof l!="string"?l:rc(l,e),Assignee:l=>typeof l!="string"?l:rc(l,e)},a.data=[...s].map(l=>{var u;return{data:{Guid:l.guid,Title:l.title,Status:l.status,Description:l.description??"",Author:l.creationAuthor,Assignee:l.assignedTo??"",Date:l.creationDate.toDateString(),DueDate:((u=l.dueDate)==null?void 0:u.toDateString())??"",Type:l.type,Priority:l.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>`},Ih=(i,t=!0)=>{const e=zt.create(Fy,i);if(t){const{components:r,topics:n}=i,[,s]=e,o=r.get(Wn);if(o.list.onItemUpdated.add(()=>s()),o.list.onItemDeleted.add(()=>s()),n)for(const a of n)a.relatedTopics.onItemAdded.add(()=>s()),a.relatedTopics.onItemDeleted.add(()=>s()),a.relatedTopics.onCleared.add(()=>s());else o.list.onItemSet.add(()=>s())}return e},By=Object.freeze(Object.defineProperty({__proto__:null,topicsList:Ih},Symbol.toStringTag,{value:"Module"})),Uy=i=>{var t;const{components:e,topic:r,actions:n}=i,s={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!r,...n},o=e.get(Mo),a=((t=i.topic)==null?void 0:t.viewpoints)??o.list.keys(),l=[];for(const u of a){const d=o.list.get(u);d&&l.push(d)}return N`
    <bim-table ${It(u=>{if(!u)return;const d=u;d.addEventListener("cellcreated",({detail:c})=>{const{cell:f}=c;f.style.padding="0.25rem"}),d.headersHidden=!0,d.hiddenColumns=["Guid"],d.columns=["Title",{name:"Actions",width:"auto"}],d.dataTransform={Actions:(c,f)=>{const{Guid:h}=f;if(!(h&&typeof h=="string"))return h;const g=o.list.get(h);return g?N`
          <bim-button icon="ph:eye-fill" @click=${()=>g.go()}></bim-button>
          ${Object.values(s).includes(!0)?N`
                <bim-button icon="prime:ellipsis-v">
                  <bim-context-menu>
                    ${s.selectComponents?N`<bim-button label="Select Components" @click=${()=>console.log(g.selection)}></bim-button> `:null}
                    ${s.colorizeComponent?N`<bim-button label="Colorize Components" @click=${()=>g.colorize()}></bim-button> `:null}
                    ${s.resetColors?N`<bim-button label="Reset Colors" @click=${()=>g.resetColors()}></bim-button> `:null}
                    ${s.updateCamera?N`<bim-button label="Update Camera" @click=${()=>g.updateCamera()}></bim-button> `:null}
                    ${s.unlink?N`<bim-button .disabled=${!r} label="Unlink" @click=${()=>r?.viewpoints.delete(g.guid)}></bim-button> `:null}
                    ${s.delete?N`<bim-button label="Delete" @click=${()=>o.list.delete(g.guid)}></bim-button>`:null}
                  </bim-context-menu>
                </bim-button>
              `:null}
        `:h}},d.data=l.map((c,f)=>({data:{Guid:c.guid,Title:c.title??`Viewpoint ${i.topic?f+1:""}`,Actions:""}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No viewpoints to show</bim-label>
    </bim-table>
  `},ya=(i,t=!0)=>{const e=zt.create(Uy,i),{components:r,topic:n}=i;if(t){const[,s]=e,o=r.get(Mo);o.list.onItemUpdated.add(()=>s()),o.list.onItemDeleted.add(()=>s()),o.list.onCleared.add(()=>s()),n?(n.viewpoints.onItemAdded.add(()=>s()),n.viewpoints.onItemDeleted.add(()=>s()),n.viewpoints.onCleared.add(()=>s())):o.list.onItemSet.add(()=>s())}return e},Hy=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ya},Symbol.toStringTag,{value:"Module"})),Vy={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"}},Wy=(i,t)=>{const e=(t??Vy)[i],r=e?.name??i,n=r.trim().split(/\s+/);let s,o;return n[0]&&n[0][0]&&(s=n[0][0].toUpperCase(),n[0][1]&&(o=n[0][1].toUpperCase())),n[1]&&n[1][0]&&(o=n[1][0].toUpperCase()),N`
  <div style="display: flex; gap: 0.25rem; overflow: hidden;">
    ${!(e!=null&&e.picture)&&(s||o)?N`
      <bim-label
        style=${be({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${o}</bim-label>
      `:null}
    <bim-label .img=${e?.picture}>${r}</bim-label>
  </div>
`},qy=i=>{const{topic:t,styles:e,viewpoint:r,actions:n}=i,s={delete:!0,...n};return N`<bim-table @cellcreated=${({detail:o})=>{const{cell:a}=o;a.style.marginLeft="0"}} ${It(o=>{if(!o)return;const a=o;a.headersHidden=!0,a.hiddenColumns=["guid","author"],a.dataTransform={Comment:(u,d)=>{const{guid:c}=d;if(typeof c!="string")return u;const f=t.comments.get(c);if(!f)return u;const h=()=>{t.comments.delete(c)};return N`
        <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 0.375rem;">
              ${Wy(f.author,e)}
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
      `}};let l=t.comments.values();r&&(l=[...t.comments.values()].filter(u=>u.viewpoint===r)),a.data=[...l].map(u=>({data:{guid:u.guid,Comment:u.comment,author:(()=>{const d=e;if(!d)return u.author;const c=d[u.author];return c?.name??u.author})()}}))})}><bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label></bim-table>`},Ph=(i,t=!0)=>{const e=zt.create(qy,i);if(t){const{topic:r}=i,[n,s]=e;r.comments.onItemSet.add(()=>s()),r.comments.onItemUpdated.add(()=>s()),r.comments.onItemDeleted.add(()=>s()),r.comments.onCleared.add(()=>s())}return e},Gy=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Ph},Symbol.toStringTag,{value:"Module"})),Ir={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"#2E2E2E"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#2E2E2E","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},to={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"white"},eo=(i,t)=>{const e=(t?.users??Ir.users)[i],r=e?.name??i,n=r.trim().split(/\s+/);let s,o;return n[0]&&n[0][0]&&(s=n[0][0].toUpperCase(),n[0][1]&&(o=n[0][1].toUpperCase())),n[1]&&n[1][0]&&(o=n[1][0].toUpperCase()),N`
  <div style="display: flex; gap: 0.25rem; overflow: hidden;">
    ${!(e!=null&&e.picture)&&(s||o)?N`
      <bim-label
        style=${be({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${o}</bim-label>
      `:null}
    <bim-label .img=${e?.picture}>${r}</bim-label>
  </div>
`},[is,Yy]=zt.create(i=>{const{topic:t}=i,e=document.createElement("bim-text-input");e.type="area";const r=()=>{e.value="",is.close(),is.remove()};return N`
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
    `},{}),[ns,Zy]=zt.create(i=>{const{components:t,topic:e}=i;let r;t&&(r=ya({components:t,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1,selectComponents:!1}})[0],r.selectableRows=!0);const n=()=>{ns.close(),ns.remove(),r?.remove()};return N`
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
    `},{}),[rs,Xy]=zt.create(i=>{const{components:t,topic:e}=i;let r;if(t){const s=[...t.get(Wn).list.values()].filter(o=>o!==e);r=Ih({components:t,topics:s})[0],r.selectableRows=!0,r.hiddenColumns=["Guid","Author","Assignee","Date","DueDate"]}const n=()=>{rs.close(),rs.remove(),r?.remove()};return N`
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
    `},{}),Jy=i=>{const{components:t,topic:e,styles:r,onUpdateInformation:n,actions:s,world:o}=i,a={update:!0,addComments:!0,linkViewpoints:!0,addViewpoints:!0,...s},l=r?.priorities??Ir.priorities,u=r?.statuses??Ir.statuses,d=r?.types??Ir.types;let c;e!=null&&e.priority&&(c=l[e.priority]);let f;e!=null&&e.type&&(f=d[e.type]);let h;e!=null&&e.type&&(h=u[e.status]);let g,p,v;e&&(g=Ph({topic:e,styles:r?.users})[0],p=ya({components:t,topic:e})[0]);const b=()=>{if(!(e&&o))return;const E=t.get(Mo).create(o);e.viewpoints.add(E.guid)},_=()=>{Yy({topic:e}),document.body.append(is),is.showModal()},w=()=>{Zy({components:t,topic:e}),document.body.append(ns),ns.showModal()},x=()=>{Xy({components:t,topic:e}),document.body.append(rs),rs.showModal()};return N`
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
        <bim-label .icon=${h?.icon} style=${be({...to,...h?.style})}
        >${e.status}
        </bim-label>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label> 
        <bim-label .icon=${f?.icon} style=${be({...to,...f?.style})}
        >${e.type}
        </bim-label>
      </div>
      ${e.priority?N`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label> 
              <bim-label .icon=${c?.icon} style=${be({...to,...c?.style})}
              >${e.priority}
              </bim-label>
            </div>`:null}
      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label> 
        ${eo(e.creationAuthor,r)}
      </div>
      ${e.assignedTo?N`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label> 
            ${eo(e.assignedTo,r)}
          </div>`:null}
      ${e.dueDate?N`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label> 
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${e.dueDate.toDateString()}</bim-label>
          </div>`:null}
      ${e.modifiedAuthor?N`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label> 
            ${eo(e.modifiedAuthor,r)}
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
      ${g}
      ${a.addComments?N`
            <bim-button @click=${_} label="Add Comment" icon="majesticons:comment-line"></bim-button>
          `:null}
    </bim-panel-section>
    <bim-panel-section label="Viewpoints" icon="tabler:camera">
      ${p}
      ${a.linkViewpoints||a.addViewpoints?N`
          <div style="display: flex; gap: 0.375rem">
            ${a.addViewpoints?N`<bim-button @click=${b} .disabled=${!o} label="Add Viewpoint" icon="mi:add"></bim-button> `:null}
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
  `},Ky=(i,t=!0)=>{const e=zt.create(Jy,i);if(t){const{components:r}=i,[n,s]=e;r.get(Wn).list.onItemUpdated.add(({value:o})=>{const{topic:a}=s(),{guid:l}=o;l===a?.guid&&s()})}return e},Qy=Object.freeze(Object.defineProperty({__proto__:null,topicData:Ky},Symbol.toStringTag,{value:"Module"}));({...Qy});const t0=i=>{const{components:t,actions:e,tags:r}=i,n=e?.dispose??!0,s=e?.download??!0,o=e?.visibility??!0,a=r?.schema??!0,l=r?.viewDefinition??!0,u=t.get(Ut),d=({detail:c})=>{const{cell:f}=c;f.style.padding="0.25rem 0"};return N`
    <bim-table ${It(c=>{if(!c)return;const f=c;f.hiddenColumns=["modelID"];const h=[];for(const[,g]of u.groups){if(!g)continue;const p={data:{Name:g.name||g.uuid,modelID:g.uuid}};h.push(p)}f.dataTransform={Name:(g,p)=>{const{modelID:v}=p;if(typeof v!="string")return g;const b=u.groups.get(v);if(!b)return v;const _={};for(const S of b.items)_[S.id]=S.ids;let w;const{schema:x}=b.ifcMetadata;a&&x&&(w=N`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${x}</bim-label>
            `);let E;if(l&&"viewDefinition"in b.ifcMetadata){const S=b.ifcMetadata.viewDefinition;E=N`
            ${S.split(",").map(z=>N`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${z}</bim-label>`)}
          `}let A;n&&(A=N`<bim-button @click=${()=>u.disposeGroup(b)} icon="mdi:delete"></bim-button>`);let T;o&&(T=N`<bim-button @click=${S=>{const z=t.get(Fo),G=S.target;z.set(G.hasAttribute("data-model-hidden"),_),G.toggleAttribute("data-model-hidden"),G.icon=G.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let D;return s&&(D=N`<bim-button @click=${()=>{const S=document.createElement("input");S.type="file",S.accept=".ifc",S.multiple=!1,S.addEventListener("change",async()=>{if(!(S.files&&S.files.length===1))return;const z=S.files[0],G=await z.arrayBuffer(),C=await t.get(mf).saveToIfc(b,new Uint8Array(G)),R=new File([C],z.name),y=document.createElement("a");y.href=URL.createObjectURL(R),y.download=R.name,y.click(),URL.revokeObjectURL(y.href)}),S.click()}} icon="flowbite:download-solid"></bim-button>`),N`
         <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
            <div style="min-height: 1.75rem; overflow: auto; display: flex;">
              <bim-label style="white-space: normal;">${g}</bim-label>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
              ${w}
              ${E}
            </div>
          </div>
          <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
            ${D}
            ${T}
            ${A}
          </div>
         </div>
        `}},f.data=h})} @cellcreated=${d} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},e0=(i,t=!0)=>{const e=zt.create(t0,i);if(t){const{components:r}=i,n=r.get(Ut),[,s]=e;n.onFragmentsLoaded.add(()=>setTimeout(()=>s())),n.onFragmentsDisposed.add(()=>s())}return e},i0=Object.freeze(Object.defineProperty({__proto__:null,modelsList:e0},Symbol.toStringTag,{value:"Module"})),Nh=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",i=>i.includes("Value"),i=>i.startsWith("Material"),i=>i.startsWith("Relating"),i=>{const t=["IsGroupedBy","IsDecomposedBy"];return i.startsWith("Is")&&!t.includes(i)}];async function Pr(i,t,e,r=Nh,n=!1){const s=i.get(Wt),o=await t.getProperties(e);if(!o)return{data:{Entity:`${e} properties not found...`}};const a=s.relationMaps[t.uuid],l={data:{}};for(const u in o){const d=r.map(f=>typeof f=="string"?u===f:f(u)).includes(!0);if(!(u==="type"||d))continue;const c=o[u];if(c)if(c.type===5){l.children||(l.children=[]);const f=await Pr(i,t,c.value,r,n);l.children.push(f)}else if(typeof c=="object"&&!Array.isArray(c)){const{value:f,type:h}=c;if(n)h===1||h===2||h===3||(l.data[u]=f);else{const g=typeof f=="number"?Number(f.toFixed(3)):f;l.data[u]=g}}else if(Array.isArray(c))for(const f of c){if(f.type!==5)continue;l.children||(l.children=[]);const h=await Pr(i,t,f.value,r,n);l.children.push(h)}else if(u==="type"){const f=Lr[c];l.data.Entity=f}else l.data[u]=c}if(a&&a.get(o.expressID)){const u=a.get(o.expressID);for(const d of r){const c=[];if(typeof d=="string"){const f=s._inverseAttributes.indexOf(d);f!==-1&&c.push(f)}else{const f=s._inverseAttributes.filter(h=>d(h));for(const h of f){const g=s._inverseAttributes.indexOf(h);c.push(g)}}for(const f of c){const h=u.get(f);if(h)for(const g of h){const p=await Pr(i,t,g,r,n);l.children||(l.children=[]),l.children.push(p)}}}}return l}const n0=i=>{const{components:t,fragmentIdMap:e,attributesToInclude:r,editable:n,tableDefinition:s}=i,o=t.get(Ut);let a;return typeof r=="function"?a=r(Nh):a=r,N`<bim-table ${It(async l=>{if(!l)return;const u=l,d=[],c=[];for(const f in e){const h=o.list.get(f);if(!(h&&h.group))continue;const g=h.group,p=c.find(v=>v.model===g);if(p)for(const v of e[f])p.expressIDs.add(v);else{const v={model:g,expressIDs:new Set(e[f])};c.push(v)}}for(const f of c){const{model:h,expressIDs:g}=f;for(const p of g){const v=await Pr(t,h,p,a,n);d.push(v)}}u.dataTransform=s,u.data=d,u.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},r0=i=>zt.create(n0,i),s0=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:r0},Symbol.toStringTag,{value:"Module"}));let $e;const o0=i=>{const{components:t,classifications:e}=i,r=t.get(An),n=t.get(Fo);$e||($e=document.createElement("bim-table"),$e.headersHidden=!0,$e.hiddenColumns=["system"],$e.columns=["Name",{name:"Actions",width:"auto"}],$e.dataTransform={Actions:(o,a)=>{const{system:l,Name:u}=a;if(!(typeof l=="string"&&typeof u=="string"))return o;const d=r.list[l];if(!(d&&d[u]))return o;const c=d[u],{map:f}=c;return N`
          <div>
            <bim-checkbox checked @change=${h=>{const g=h.target;n.set(g.value,f)}}></bim-checkbox>
          </div>
        `}});const s=[];for(const o of e){const a=typeof o=="string"?o:o.system,l=typeof o=="string"?o:o.label,u=r.list[a];u&&s.push({data:{Name:l,system:a},children:Object.keys(u).map(d=>({data:{Name:d,system:a,Actions:""}}))})}return $e.data=s,N`${$e}`},a0=(i,t=!0)=>{const e=zt.create(o0,i);if(t){const{components:r}=i,n=r.get(Ut),[,s]=e;n.onFragmentsDisposed.add(()=>s())}return e},l0=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:a0},Symbol.toStringTag,{value:"Module"})),Lh=async(i,t,e)=>{var r,n,s,o;const a=i.get(Wt),l={data:{Name:(r=e.Name)==null?void 0:r.value},children:[{data:{Name:"Identification",Value:(n=e.Identification)==null?void 0:n.value}},{data:{Name:"Name",Value:(s=e.Name)==null?void 0:s.value}},{data:{Name:"Description",Value:(o=e.Description)==null?void 0:o.value}}]},u=a.getEntityRelations(t,e.expressID,"IsNestedBy");if(!u)return l;l.children||(l.children=[]);const d=[];l.children.push({data:{Name:"Tasks"},children:d});for(const c of u){const f=await t.getProperties(c);if(!f)continue;const h=await Lh(i,t,f);d.push(h)}return l},c0=async(i,t,e)=>{const r=[];for(const n of e){const s=await Lh(i,t,n);r.push(s)}return{data:{Name:"Tasks"},children:r}},u0=async(i,t)=>{var e,r;const n={data:{Name:"Classifications"}};for(const s of t){const{value:o}=s.ReferencedSource,a=await i.getProperties(o);if(!a)continue;const l={data:{Name:a.Name.value},children:[{data:{Name:"Identification",Value:((e=s.Identification)==null?void 0:e.value)||((r=s.ItemReference)==null?void 0:r.value)}},{data:{Name:"Name",Value:s.Name.value}}]};n.children||(n.children=[]),n.children.push(l)}return n},d0=async(i,t)=>{const e={data:{Name:"Materials"}};for(const r of t){if(r.type===kc){const n=r.ForLayerSet.value,s=await i.getProperties(n);if(!s)continue;for(const o of s.MaterialLayers){const{value:a}=o,l=await i.getProperties(a);if(!l)continue;const u=await i.getProperties(l.Material.value);if(!u)continue;const d={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:l.LayerThickness.value}},{data:{Name:"Material",Value:u.Name.value}}]};e.children||(e.children=[]),e.children.push(d)}}if(r.type===Ec)for(const n of r.Materials){const{value:s}=n,o=await i.getProperties(s);if(!o)continue;const a={data:{Name:"Name",Value:o.Name.value}};e.children||(e.children=[]),e.children.push(a)}if(r.type===Cc){const n={data:{Name:"Name",Value:r.Name.value}};e.children||(e.children=[]),e.children.push(n)}}return e},h0={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},f0={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},Rh=async(i,t)=>{var e,r,n;const s=Object.values(await i.getAllPropertiesOfType(Cf))[0];let o;for(const a of s.Units){const l=await i.getProperties(a.value);if(l&&((e=l.UnitType)==null?void 0:e.value)===h0[t]){o=`${((r=l.Prefix)==null?void 0:r.value)??""}${((n=l.Name)==null?void 0:n.value)??""}`;break}}return o?f0[o]:null},p0=async(i,t,e)=>{const{displayUnits:r}=e,n={data:{Name:"PropertySets"}};for(const s of t){const o={data:{Name:s.Name.value}};if(s.type===xc){for(const a of s.HasProperties){const{value:l}=a,u=await i.getProperties(l);if(!u)continue;const d=Object.keys(u).find(g=>g.includes("Value"));if(!(d&&u[d]))continue;let c=u[d].value,f="";if(r){const{name:g}=u[d],p=await Rh(i,g)??{};f=p.symbol,c=u[d].value,typeof c=="number"&&p.digits&&(c=c.toFixed(p.digits))}const h={data:{Name:u.Name.value,Value:`${c} ${f??""}`}};o.children||(o.children=[]),o.children.push(h)}o.children&&(n.children||(n.children=[]),n.children.push(o))}}return n},m0=async(i,t,e)=>{const{displayUnits:r}=e,n={data:{Name:"QuantitySets"}};for(const s of t){const o={data:{Name:s.Name.value}};if(s.type===$c){for(const a of s.Quantities){const{value:l}=a,u=await i.getProperties(l);if(!u)continue;const d=Object.keys(u).find(g=>g.includes("Value"));if(!(d&&u[d]))continue;let c=u[d].value,f="";if(r){const{name:g}=u[d],p=await Rh(i,g)??{};f=p.symbol,c=u[d].value,typeof c=="number"&&p.digits&&(c=c.toFixed(p.digits))}const h={data:{Name:u.Name.value,Value:`${c} ${f??""}`}};o.children||(o.children=[]),o.children.push(h)}o.children&&(n.children||(n.children=[]),n.children.push(o))}}return n},b0=["OwnerHistory","ObjectPlacement","CompositionType"],Mh=async(i,t)=>{const e={groupName:"Attributes",includeClass:!1,...t},{groupName:r,includeClass:n}=e,s={data:{Name:r}};n&&(s.children||(s.children=[]),s.children.push({data:{Name:"Class",Value:Lr[i.type]}}));for(const o in i){if(b0.includes(o))continue;const a=i[o];if(a&&typeof a=="object"&&!Array.isArray(a)){if(a.type===_f)continue;const l={data:{Name:o,Value:a.value}};s.children||(s.children=[]),s.children.push(l)}}return s},Mi=(i,...t)=>{i.children||(i.children=[]),i.children.push(...t)},g0=async(i,t,e,r,n)=>{const s=i.get(Wt).getEntityRelations(t,e,"IsDefinedBy");if(s){const o=[],a=[];for(const d of s){const c=await t.getProperties(d);c&&(c.type===xc&&o.push(c),c.type===$c&&a.push(c))}const l=await p0(t,o,n);l.children&&Mi(r,l);const u=await m0(t,a,n);u.children&&Mi(r,u)}},v0=async(i,t,e,r)=>{const n=i.get(Wt).getEntityRelations(t,e,"HasAssociations");if(n){const s=[],o=[];for(const u of n){const d=await t.getProperties(u);d&&(d.type===wf&&s.push(d),(d.type===kc||d.type===xf||d.type===$f||d.type===Cc||d.type===Ec)&&o.push(d))}const a=await u0(t,s);a.children&&Mi(r,a);const l=await d0(t,o);l.children&&Mi(r,l)}},y0=async(i,t,e,r)=>{const n=i.get(Wt).getEntityRelations(t,e,"HasAssignments");if(n){const s=[];for(const a of n){const l=await t.getProperties(a);l&&l.type===kf&&s.push(l)}const o=await c0(i,t,s);o.children&&Mi(r,o)}},_0=async(i,t,e,r)=>{const n=i.get(Wt).getEntityRelations(t,e,"ContainedInStructure");if(n&&n[0]){const s=n[0],o=await t.getProperties(s);if(o){const a=await Mh(o,{groupName:"SpatialContainer"});Mi(r,a)}}};let kr={};const w0=async(i,t,e)=>{var r;const n=i.get(Wt),s=i.get(Ut),o=s.getModelIdMap(t);Object.keys(t).length===0&&(kr={});const a=[];for(const l in o){const u=s.groups.get(l);if(!u)continue;const d=n.relationMaps[u.uuid];if(!d)continue;l in kr||(kr[l]=new Map);const c=kr[l],f=o[l];for(const h of f){let g=c.get(h);if(g){a.push(g);continue}const p=await u.getProperties(h);if(!p)continue;g={data:{Name:(r=p.Name)==null?void 0:r.value}},a.push(g),c.set(h,g);const v=await Mh(p,{includeClass:!0});g.children||(g.children=[]),g.children.push(v),d.get(h)&&(await g0(i,u,h,g,e),await v0(i,u,h,g),await y0(i,u,h,g),await _0(i,u,h,g))}}return a},x0=i=>{const t={emptySelectionWarning:!0,...i},{components:e,fragmentIdMap:r,emptySelectionWarning:n}=t;return N`
    <bim-table @cellcreated=${({detail:s})=>{const{cell:o}=s;o.column==="Name"&&!("Value"in o.rowData)&&(o.style.gridColumn="1 / -1")}} ${It(async s=>{if(!s)return;const o=s;o.columns=[{name:"Name",width:"12rem"}],o.headersHidden=!0,o.loadFunction=()=>w0(e,r,i),await o.loadData(!0)&&o.dispatchEvent(new Event("datacomputed"))})}>
      ${n?N`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
          `:null}
    </bim-table>
  `},$0=i=>zt.create(x0,i),k0=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:$0},Symbol.toStringTag,{value:"Module"})),Lo=async(i,t,e,r)=>{var n;const s=[],o=i.get(Wt),a=await t.getProperties(e);if(!a)return s;const{type:l}=a,u={data:{Entity:Lr[l],Name:(n=a.Name)==null?void 0:n.value,modelID:t.uuid,expressID:e}};for(const d of r){const c=o.getEntityRelations(t,e,d);if(!c)continue;u.children||(u.children=[]),u.data.relations=JSON.stringify(c);const f={};for(const h of c){const g=await Lo(i,t,h,r);for(const p of g)if(p.data.relations)u.children.push(p);else{const v=t.data.get(h);if(!v){u.children.push(p);continue}const b=v[1][1],_=Lr[b];_ in f||(f[_]=[]),p.data.Entity=p.data.Name,delete p.data.Name,f[_].push(p)}}for(const h in f){const g=f[h],p=g.map(b=>b.data.expressID),v={data:{Entity:h,modelID:t.uuid,relations:JSON.stringify(p)},children:g};u.children.push(v)}}return s.push(u),s},C0=async(i,t,e,r)=>{const n=i.get(Wt),s=[];for(const o of t){let a;if(r)a={data:{Entity:o.name!==""?o.name:o.uuid},children:await Lo(i,o,r,e)};else{const l=n.relationMaps[o.uuid],u=await o.getAllPropertiesOfType(yf);if(!(l&&u))continue;const{expressID:d}=Object.values(u)[0];a={data:{Entity:o.name!==""?o.name:o.uuid},children:await Lo(i,o,d,e)}}s.push(a)}return s};let he;const E0=(i,t)=>{const e=i.get(Ut),{modelID:r,expressID:n,relations:s}=t.data;if(!r)return null;const o=e.groups.get(r);return o?o.getFragmentMap([n,...JSON.parse(s??"[]")]):null},S0=i=>{const{components:t,models:e,expressID:r}=i,n=i.selectHighlighterName??"select",s=i.hoverHighlighterName??"hover";he||(he=document.createElement("bim-table"),he.hiddenColumns=["modelID","expressID","relations"],he.columns=["Entity","Name"],he.headersHidden=!0,he.addEventListener("cellcreated",({detail:a})=>{const{cell:l}=a;l.column==="Entity"&&!("Name"in l.rowData)&&(l.style.gridColumn="1 / -1")})),he.addEventListener("rowcreated",a=>{a.stopImmediatePropagation();const{row:l}=a.detail,u=t.get(Bi),d=E0(t,l);d&&Object.keys(d).length!==0&&(l.onmouseover=()=>{s&&(l.style.backgroundColor="var(--bim-ui_bg-contrast-20)",u.highlightByID(s,d,!0,!1,u.selection[n]??{}))},l.onmouseout=()=>{l.style.backgroundColor="",u.clear(s)},l.onclick=()=>{n&&u.highlightByID(n,d,!0,!0)})});const o=i.inverseAttributes??["IsDecomposedBy","ContainsElements"];return C0(t,e,o,r).then(a=>he.data=a),N`${he}`},A0=(i,t=!0)=>{const e=zt.create(S0,i);if(t){const[,r]=e,{components:n}=i,s=n.get(Ut),o=n.get(Wt),a=()=>r({models:s.groups.values()});o.onRelationsIndexed.add(a),s.onFragmentsDisposed.add(a)}return e},O0=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:A0},Symbol.toStringTag,{value:"Module"})),bn=(i,t)=>[...i.get(jo).list.values()].find(e=>e.world===t),T0=(i,t)=>N`
    <bim-color-input @input=${e=>{const r=e.target;i.color=new ai(r.color)}} color=${t}></bim-color-input>
  `,z0=(i,t)=>{const{postproduction:e}=i,r=e.n8ao.configuration;return N`
    <bim-color-input @input=${n=>{const s=n.target;r.color=new ai(s.color)}} color=${t}></bim-color-input>
  `},I0=(i,t)=>{const{color:e,opacity:r}=JSON.parse(t),{postproduction:n}=i,{customEffects:s}=n;return N`
    <bim-color-input @input=${o=>{const{color:a,opacity:l}=o.target;s.lineColor=new ai(a).getHex(),l&&(s.opacity=l/100)}} color=${e} opacity=${r*100}></bim-color-input>
  `},P0=(i,t)=>N`
    <bim-color-input @input=${e=>{const r=e.target,n=new ai(r.color);i.material.uniforms.uColor.value=n}} color=${t}></bim-color-input>
  `,N0=(i,t)=>{const{postproduction:e}=i;return N`
    <bim-checkbox @change=${r=>{const n=r.target;e.setPasses({ao:n.checked})}} .checked=${t}></bim-checkbox>
  `},L0=(i,t)=>{const{postproduction:e}=i;return N`
    <bim-checkbox @change=${r=>{const n=r.target;e.setPasses({gamma:n.checked})}} .checked=${t}></bim-checkbox>
  `},R0=(i,t)=>{const{postproduction:e}=i;return N`
    <bim-checkbox @change=${r=>{const n=r.target;e.setPasses({custom:n.checked})}} .checked=${t}></bim-checkbox>
  `},ke=(i,t,e,r=()=>{})=>N`
    <bim-checkbox .checked="${e}" @change="${n=>{const s=n.target.checked;i[t]=s,r(s)}}"></bim-checkbox> 
  `,vt=(i,t,e,r)=>{const n={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...r},{slider:s,min:o,max:a,step:l,suffix:u,prefix:d,onInputSet:c}=n;return N`
    <bim-number-input
      .pref=${d}
      .suffix=${u}
      .slider=${s} 
      min=${o} 
      value="${e}" 
      max=${a} 
      step=${l} 
      @change="${f=>{const h=f.target.value;i[t]=h,c(h)}}"
    ></bim-number-input> 
  `},M0=i=>{const{components:t}=i,e=t.get(qn);return N`<bim-table ${It(async r=>{var n,s,o,a,l;if(!r)return;const u=r;u.preserveStructureOnFilter=!0,u.dataTransform={Value:(c,f)=>{const h=f.World,g=e.list.get(h);if(!g)return c;const{scene:p,camera:v,renderer:b}=g,_=f.Name;if(_==="Grid"&&f.IsGridConfig&&typeof c=="boolean"){const w=bn(t,g);return w?ke(w,"visible",c):c}if(_==="Color"&&f.IsGridConfig&&typeof c=="string"){const w=bn(t,g);return w?P0(w,c):c}if(_==="Distance"&&f.IsGridConfig&&typeof c=="number"){const w=bn(t,g);return w?vt(w.material.uniforms.uDistance,"value",c,{slider:!0,min:300,max:1e3}):c}if(_==="Size"&&f.IsGridConfig&&typeof c=="string"){const w=bn(t,g);if(!w)return c;const{x,y:E}=JSON.parse(c),A=vt(w.material.uniforms.uSize1,"value",x,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),T=vt(w.material.uniforms.uSize2,"value",E,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return N`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${A}${T}</div>
          `}if(_==="Near Frustum"&&v.three instanceof yr&&typeof c=="number"){const w=v.three;return vt(v.three,"near",c,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Far Frustum"&&v.three instanceof yr&&typeof c=="number"){const w=v.three;return vt(v.three,"far",c,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Field of View"&&v.three instanceof yr&&typeof c=="number"){const w=v.three;return vt(v.three,"fov",c,{slider:!0,min:10,max:120,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Invert Drag"&&v.hasCameraControls()&&typeof c=="boolean")return ke(v.controls,"dollyDragInverted",c);if(_==="Dolly Speed"&&v.hasCameraControls()&&typeof c=="number")return vt(v.controls,"dollySpeed",c,{slider:!0,min:.5,max:3,step:.1});if(_==="Truck Speed"&&v.hasCameraControls()&&typeof c=="number")return vt(v.controls,"truckSpeed",c,{slider:!0,min:.5,max:6,step:.1});if(_==="Smooth Time"&&v.hasCameraControls()&&typeof c=="number")return vt(v.controls,"smoothTime",c,{slider:!0,min:.01,max:2,step:.01});if(_==="Intensity"&&typeof c=="number"){if(f.Light&&typeof f.Light=="string"){const w=p.three.children.find(x=>x.uuid===f.Light);return w&&w instanceof dn?vt(w,"intensity",c,{slider:!0,min:0,max:10,step:.1}):c}if(f.IsAOConfig&&b instanceof _t)return vt(b.postproduction.n8ao.configuration,"intensity",c,{slider:!0,max:16,step:.1})}if(_==="Color"&&typeof c=="string"){const w=f.Light,x=p.three.children.find(E=>E.uuid===w);if(x&&x instanceof dn)return T0(x,c);if(f.IsAOConfig&&b instanceof _t)return z0(b,c)}if(_==="Ambient Oclussion"&&typeof c=="boolean"&&f.IsAOConfig&&b instanceof _t)return N0(b,c);if(_==="Half Resolution"&&f.IsAOConfig&&b instanceof _t&&typeof c=="boolean")return ke(b.postproduction.n8ao.configuration,"halfRes",c);if(_==="Screen Space Radius"&&f.IsAOConfig&&b instanceof _t&&typeof c=="boolean")return ke(b.postproduction.n8ao.configuration,"screenSpaceRadius",c);if(_==="Radius"&&f.IsAOConfig&&b instanceof _t&&typeof c=="number")return vt(b.postproduction.n8ao.configuration,"aoRadius",c,{slider:!0,max:2,step:.1});if(_==="Denoise Samples"&&f.IsAOConfig&&b instanceof _t&&typeof c=="number")return vt(b.postproduction.n8ao.configuration,"denoiseSamples",c,{slider:!0,min:1,max:16});if(_==="Samples"&&f.IsAOConfig&&b instanceof _t&&typeof c=="number")return vt(b.postproduction.n8ao.configuration,"aoSamples",c,{slider:!0,min:1,max:16});if(_==="Denoise Radius"&&f.IsAOConfig&&b instanceof _t&&typeof c=="number")return vt(b.postproduction.n8ao.configuration,"denoiseRadius",c,{slider:!0,min:0,max:16,step:.1});if(_==="Distance Falloff"&&f.IsAOConfig&&b instanceof _t&&typeof c=="number")return vt(b.postproduction.n8ao.configuration,"distanceFalloff",c,{slider:!0,min:0,max:4,step:.1});if(_==="Directional Light"&&f.Light&&typeof f.Light=="string"&&typeof c=="boolean"){const w=p.three.children.find(x=>x.uuid===f.Light);return w&&w instanceof dn?ke(w,"visible",c):c}if(_==="Ambient Light"&&f.Light&&typeof f.Light=="string"&&typeof c=="boolean"){const w=p.three.children.find(x=>x.uuid===f.Light);return w&&w instanceof dn?ke(w,"visible",c):c}if(_==="Position"&&f.Light&&typeof f.Light=="string"&&typeof c=="string"){const w=p.three.children.find(z=>z.uuid===f.Light);if(!(w&&w instanceof dn))return c;const{x,y:E,z:A}=JSON.parse(c),T=vt(w.position,"x",x,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),D=vt(w.position,"y",E,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),S=vt(w.position,"z",A,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return N`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${T}${D}${S}</div>
          `}return _==="Custom Effects"&&f.IsCEConfig&&b instanceof _t&&typeof c=="boolean"?R0(b,c):_==="Color"&&f.IsOutlineConfig&&b instanceof _t&&typeof c=="string"?I0(b,c):_==="Tolerance"&&f.IsOutlineConfig&&b instanceof _t&&typeof c=="number"?vt(b.postproduction.customEffects,"tolerance",c,{slider:!0,min:0,max:6,step:.01}):_==="Outline"&&f.IsOutlineConfig&&b instanceof _t&&typeof c=="boolean"?ke(b.postproduction.customEffects,"outlineEnabled",c):_==="Gloss"&&f.IsGlossConfig&&b instanceof _t&&typeof c=="boolean"?ke(b.postproduction.customEffects,"glossEnabled",c):_==="Min"&&f.IsGlossConfig&&b instanceof _t&&typeof c=="number"?vt(b.postproduction.customEffects,"minGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):_==="Max"&&f.IsGlossConfig&&b instanceof _t&&typeof c=="number"?vt(b.postproduction.customEffects,"maxGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):_==="Exponent"&&f.IsGlossConfig&&b instanceof _t&&typeof c=="number"?vt(b.postproduction.customEffects,"glossExponent",c,{slider:!0,min:0,max:5,step:.01}):_==="Gamma Correction"&&f.IsGammaConfig&&b instanceof _t&&typeof c=="boolean"?L0(b,c):c}},u.addEventListener("cellcreated",({detail:c})=>{const f=c.cell.parentNode;if(!f)return;const h=f.querySelector("bim-table-cell[column='Name']"),g=f.querySelector("bim-table-cell[column='Value']");h&&!g&&(h.style.gridColumn="1 / -1")});const d=[];for(const[,c]of e.list){const{scene:f,camera:h,renderer:g}=c,p=bn(t,c),v={data:{Name:c instanceof pf&&c.name||c.uuid},children:[]};if(f){const b={data:{Name:"Scene"}};if(p){const x={data:{Name:"Grid",Value:p.three.visible,World:c.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",get Value(){return`#${p.material.uniforms.uColor.value.getHexString()}`},World:c.uuid,IsGridConfig:!0}},{data:{Name:"Size",get Value(){const E=p.material.uniforms.uSize1.value,A=p.material.uniforms.uSize2.value;return JSON.stringify({x:E,y:A})},World:c.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:p.material.uniforms.uDistance.value,World:c.uuid,IsGridConfig:!0}}]};b.children||(b.children=[]),b.children.push(x)}const _=f.three.children.filter(x=>x instanceof cf);for(const x of _){const E={data:{Name:"Directional Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(x.position),World:c.uuid,Light:x.uuid}},{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};b.children||(b.children=[]),b.children.push(E)}const w=f.three.children.filter(x=>x instanceof uf);for(const x of w){const E={data:{Name:"Ambient Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};b.children||(b.children=[]),b.children.push(E)}b.children&&((n=b.children)==null?void 0:n.length)>0&&((s=v.children)==null||s.push(b))}if(h.three instanceof yr){const b={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:h.three.near,World:c.uuid}},{data:{Name:"Far Frustum",Value:h.three.far,World:c.uuid}},{data:{Name:"Field of View",Value:h.three.fov,World:c.uuid}}]};if(h.hasCameraControls()){const{controls:_}=h,w={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const x in w){const E=_[x];E!=null&&((o=b.children)==null||o.push({data:{Name:w[x],Value:E,World:c.uuid}}))}}(a=v.children)==null||a.push(b)}if(g instanceof _t){const{postproduction:b}=g,_=b.n8ao.configuration,w={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:b.settings.gamma??!1,World:c.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:b.settings.ao??!1,World:c.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:_.aoSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${_.color.getHexString()}`,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:_.halfRes,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:_.screenSpaceRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:_.aoRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:_.intensity,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:_.distanceFalloff,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:_.denoiseSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:_.denoiseRadius,World:c.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:b.settings.custom??!1,World:c.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:b.customEffects.glossEnabled,World:c.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:b.customEffects.minGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:b.customEffects.maxGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:b.customEffects.glossExponent,World:c.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:b.customEffects.outlineEnabled,World:c.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const x=new ai(b.customEffects.lineColor),E=b.customEffects.opacity;return JSON.stringify({color:`#${x.getHexString()}`,opacity:E})},World:c.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:b.customEffects.tolerance,World:c.uuid,IsOutlineConfig:!0}}]}]}]};(l=v.children)==null||l.push(w)}d.push(v)}u.columns=[{name:"Name",width:"11rem"}],u.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],u.data=d})} headers-hidden expanded></bim-table>`},D0=(i,t=!0)=>{const e=zt.create(M0,i);if(t){const[r]=e,n=()=>e[1](),{components:s}=i,o=s.get(qn);o.onDisposed.add(r.remove);for(const[,a]of o.list)a.onDisposed.add(n);r.addEventListener("disconnected",()=>{o.onDisposed.remove(r.remove);for(const[,a]of o.list)a.onDisposed.remove(n)})}return e},j0=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:D0},Symbol.toStringTag,{value:"Module"})),ss={...i0,...s0,...l0,...k0,...O0,...j0,...By,...Gy,...Hy};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=globalThis,as=os.trustedTypes,sc=as?as.createPolicy("lit-html",{createHTML:i=>i}):void 0,Dh="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,jh="?"+Se,F0=`<${jh}>`,oi=document,Un=()=>oi.createComment(""),Hn=i=>i===null||typeof i!="object"&&typeof i!="function",_a=Array.isArray,B0=i=>_a(i)||typeof i?.[Symbol.iterator]=="function",io=`[ 	
\f\r]`,gn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oc=/-->/g,ac=/>/g,Ye=RegExp(`>|${io}(?:([^\\s"'>=/]+)(${io}*=${io}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lc=/'/g,cc=/"/g,Fh=/^(?:script|style|textarea|title)$/i,U0=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),wa=U0(1),Di=Symbol.for("lit-noChange"),Ct=Symbol.for("lit-nothing"),uc=new WeakMap,Je=oi.createTreeWalker(oi,129);function Bh(i,t){if(!_a(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return sc!==void 0?sc.createHTML(t):t}const H0=(i,t)=>{const e=i.length-1,r=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=gn;for(let a=0;a<e;a++){const l=i[a];let u,d,c=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===gn?d[1]==="!--"?o=oc:d[1]!==void 0?o=ac:d[2]!==void 0?(Fh.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=Ye):d[3]!==void 0&&(o=Ye):o===Ye?d[0]===">"?(o=n??gn,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?Ye:d[3]==='"'?cc:lc):o===cc||o===lc?o=Ye:o===oc||o===ac?o=gn:(o=Ye,n=void 0);const h=o===Ye&&i[a+1].startsWith("/>")?" ":"";s+=o===gn?l+F0:c>=0?(r.push(u),l.slice(0,c)+Dh+l.slice(c)+Se+h):l+Se+(c===-2?a:h)}return[Bh(i,s+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Vn{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[u,d]=H0(t,e);if(this.el=Vn.createElement(u,r),Je.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=Je.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(Dh)){const f=d[o++],h=n.getAttribute(c).split(Se),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:g[2],strings:h,ctor:g[1]==="."?W0:g[1]==="?"?q0:g[1]==="@"?G0:Rs}),n.removeAttribute(c)}else c.startsWith(Se)&&(l.push({type:6,index:s}),n.removeAttribute(c));if(Fh.test(n.tagName)){const c=n.textContent.split(Se),f=c.length-1;if(f>0){n.textContent=as?as.emptyScript:"";for(let h=0;h<f;h++)n.append(c[h],Un()),Je.nextNode(),l.push({type:2,index:++s});n.append(c[f],Un())}}}else if(n.nodeType===8)if(n.data===jh)l.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Se,c+1))!==-1;)l.push({type:7,index:s}),c+=Se.length-1}s++}}static createElement(t,e){const r=oi.createElement("template");return r.innerHTML=t,r}}function ji(i,t,e=i,r){var n,s;if(t===Di)return t;let o=r!==void 0?(n=e.o)==null?void 0:n[r]:e.l;const a=Hn(t)?void 0:t._$litDirective$;return o?.constructor!==a&&((s=o?._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e.o??(e.o=[]))[r]=o:e.l=o),o!==void 0&&(t=ji(i,o._$AS(i,t.values),o,r)),t}class V0{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??oi).importNode(e,!0);Je.currentNode=n;let s=Je.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new pr(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Y0(s,this,t)),this._$AV.push(u),l=r[++a]}o!==l?.index&&(s=Je.nextNode(),o++)}return Je.currentNode=oi,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class pr{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,r,n){this.type=2,this._$AH=Ct,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this.v=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ji(this,t,e),Hn(t)?t===Ct||t==null||t===""?(this._$AH!==Ct&&this._$AR(),this._$AH=Ct):t!==this._$AH&&t!==Di&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):B0(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ct&&Hn(this._$AH)?this._$AA.nextSibling.data=t:this.T(oi.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Vn.createElement(Bh(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)==null?void 0:e._$AD)===s)this._$AH.p(r);else{const o=new V0(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let e=uc.get(t.strings);return e===void 0&&uc.set(t.strings,e=new Vn(t)),e}k(t){_a(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const s of t)n===e.length?e.push(r=new pr(this.O(Un()),this.O(Un()),this,this.options)):r=e[n],r._$AI(s),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class Rs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,s){this.type=1,this._$AH=Ct,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Ct}_$AI(t,e=this,r,n){const s=this.strings;let o=!1;if(s===void 0)t=ji(this,t,e,0),o=!Hn(t)||t!==this._$AH&&t!==Di,o&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=ji(this,a[r+l],e,l),u===Di&&(u=this._$AH[l]),o||(o=!Hn(u)||u!==this._$AH[l]),u===Ct?t=Ct:t!==Ct&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}o&&!n&&this.j(t)}j(t){t===Ct?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class W0 extends Rs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ct?void 0:t}}class q0 extends Rs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ct)}}class G0 extends Rs{constructor(t,e,r,n,s){super(t,e,r,n,s),this.type=5}_$AI(t,e=this){if((t=ji(this,t,e,0)??Ct)===Di)return;const r=this._$AH,n=t===Ct&&r!==Ct||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==Ct&&(r===Ct||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Y0{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ji(this,t)}}const dc=os.litHtmlPolyfillSupport;dc?.(Vn,pr),(os.litHtmlVersions??(os.litHtmlVersions=[])).push("3.2.0");const Z0=(i,t,e)=>{const r=e?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const s=e?.renderBefore??null;r._$litPart$=n=new pr(t.insertBefore(Un(),s),s,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X0=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J0={CHILD:2},K0=i=>(...t)=>({_$litDirective$:i,values:t});let Q0=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,t,e){this.t=i,this._$AM=t,this.i=e}_$AS(i,t){return this.update(i,t)}update(i,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En=(i,t)=>{var e;const r=i._$AN;if(r===void 0)return!1;for(const n of r)(e=n._$AO)==null||e.call(n,t,!1),En(n,t);return!0},ls=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},Uh=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),i_(t)}};function t_(i){this._$AN!==void 0?(ls(this),this._$AM=i,Uh(this)):this._$AM=i}function e_(i,t=!1,e=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)En(r[s],!1),ls(r[s]);else r!=null&&(En(r,!1),ls(r));else En(this,i)}const i_=i=>{i.type==J0.CHILD&&(i._$AP??(i._$AP=e_),i._$AQ??(i._$AQ=t_))};class n_ extends Q0{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Uh(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,n;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(n=this.disconnected)==null||n.call(this)),e&&(En(this,t),ls(this))}setValue(t){if(X0(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hh=()=>new r_;class r_{}const no=new WeakMap,s_=K0(class extends n_{render(i){return Ct}update(i,[t]){var e;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=i.options)==null?void 0:e.host,this.rt(this.ct=i.element)),Ct}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=no.get(t);e===void 0&&(e=new WeakMap,no.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=no.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),o_=i=>{const{components:t,topic:e,onCancel:r,onSubmit:n,styles:s}=i,o=n??(()=>{}),a=t.get(Wn),l=e?.title??null,u=e?.status??null,d=e?.type??null,c=e?.priority??null,f=e?.assignedTo??null,h=e?.labels??null,g=e?.stage??null,p=e?.description??null,v=e!=null&&e.dueDate?e.dueDate.toISOString().split("T")[0]:null,b=new Set([...a.config.statuses]);u&&b.add(u);const _=new Set([...a.config.types]);d&&_.add(d);const w=new Set([...a.config.priorities]);c&&w.add(c);const x=new Set([...a.config.users]);f&&x.add(f);const E=new Set([...a.config.labels]);if(h)for(const S of h)E.add(S);const A=new Set([...a.config.stages]);g&&A.add(g);const T=Hh(),D=async()=>{const{value:S}=T;if(!S)return;Object.values(S.valueTransform).length===0&&(S.valueTransform={dueDate:G=>{if(typeof G=="string"&&G.trim()!=="")return new Date(G)},status:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]},type:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]},priority:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]},assignedTo:G=>{if(Array.isArray(G)&&G.length!==0)return G[0]}});const z=S.value;if(e)e.set(z),await o(e);else{const G=a.create(z);await o(G)}};return N`
    <bim-panel style="border-radius: var(--bim-ui_size-base); outline: 2px solid var(--bim-ui_bg-contrast-20); width: 22rem;">
      <bim-panel-section ${It(T)} fixed label="New Topic" name="topic">
        <div style="display: flex; gap: 0.375rem">
          <bim-text-input vertical label="Title" name="title" .value=${l}></bim-text-input>
          ${e?N`
              <bim-dropdown vertical label="Status" name="status" required>
                ${[...b].map(S=>N`<bim-option label=${S} .checked=${u===S}></bim-option>`)}
              </bim-dropdown>`:N``}
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-dropdown vertical label="Type" name="type" required>
            ${[..._].map(S=>N`<bim-option label=${S} .checked=${d===S}></bim-option>`)}
          </bim-dropdown>
          <bim-dropdown vertical label="Priority" name="priority">
            ${[...w].map(S=>N`<bim-option label=${S} .checked=${c===S}></bim-option>`)}
          </bim-dropdown>
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-dropdown vertical label="Labels" name="labels" multiple>
            ${[...E].map(S=>N`<bim-option label=${S} .checked=${h?.has(S)}></bim-option>`)}
          </bim-dropdown>
          <bim-dropdown vertical label="Assignee" name="assignedTo">
            ${[...x].map(S=>{const z=s!=null&&s.users?s.users[S]:null,G=z?z.name:S,C=z?.picture;return N`<bim-option label=${G} value=${S} .img=${C} .checked=${f===S}></bim-option>`})}
          </bim-dropdown>
        </div>
        <div style="display: flex; gap: 0.375rem">
          <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${v}></bim-text-input> 
          <bim-dropdown vertical label="Stage" name="stage">
            ${[...A].map(S=>N`<bim-option label=${S} .checked=${g===S}></bim-option>`)}
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
          <bim-button @click=${D} style="flex: 0" id="W3F2J" label=${e?"Update Topic":"Add Topic"} icon=${e?"tabler:refresh":"mi:add"}></bim-button>
        </div>
      </bim-panel-section>
    </bim-panel>
  `},a_=i=>zt.create(o_,i),l_=Object.freeze(Object.defineProperty({__proto__:null,createTopic:a_},Symbol.toStringTag,{value:"Module"}));({...l_});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nr=globalThis,xa=Nr.ShadowRoot&&(Nr.ShadyCSS===void 0||Nr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$a=Symbol(),hc=new WeakMap;let Vh=class{constructor(i,t,e){if(this._$cssResult$=!0,e!==$a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=t}get styleSheet(){let i=this.o;const t=this.t;if(xa&&i===void 0){const e=t!==void 0&&t.length===1;e&&(i=hc.get(t)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),e&&hc.set(t,i))}return i}toString(){return this.cssText}};const c_=i=>new Vh(typeof i=="string"?i:i+"",void 0,$a),ka=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[s+1],i[0]);return new Vh(e,i,$a)},u_=(i,t)=>{if(xa)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),n=Nr.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},fc=xa?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return c_(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:d_,defineProperty:h_,getOwnPropertyDescriptor:f_,getOwnPropertyNames:p_,getOwnPropertySymbols:m_,getPrototypeOf:b_}=Object,Fi=globalThis,pc=Fi.trustedTypes,g_=pc?pc.emptyScript:"",mc=Fi.reactiveElementPolyfillSupport,Sn=(i,t)=>i,cs={toAttribute(i,t){switch(t){case Boolean:i=i?g_:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ca=(i,t)=>!d_(i,t),bc={attribute:!0,type:String,converter:cs,reflect:!1,hasChanged:Ca};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Fi.litPropertyMetadata??(Fi.litPropertyMetadata=new WeakMap);class yi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=bc){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&h_(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:s}=f_(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return n?.call(this)},set(o){const a=n?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bc}static _$Ei(){if(this.hasOwnProperty(Sn("elementProperties")))return;const t=b_(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sn("properties"))){const e=this.properties,r=[...p_(e),...m_(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(fc(n))}else t!==void 0&&e.push(fc(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u_(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var r;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:cs).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:cs;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Ca)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}yi.elementStyles=[],yi.shadowRootOptions={mode:"open"},yi[Sn("elementProperties")]=new Map,yi[Sn("finalized")]=new Map,mc?.({ReactiveElement:yi}),(Fi.reactiveElementVersions??(Fi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ti extends yi{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Z0(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Di}}var gc;ti._$litElement$=!0,ti.finalized=!0,(gc=globalThis.litElementHydrateSupport)==null||gc.call(globalThis,{LitElement:ti});const vc=globalThis.litElementPolyfillSupport;vc?.({LitElement:ti});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v_={attribute:!0,type:String,converter:cs,reflect:!1,hasChanged:Ca},y_=(i=v_,t,e)=>{const{kind:r,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(e.name,i),r==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,i)},init(a){return a!==void 0&&this.P(o,void 0,i),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,i)}}throw Error("Unsupported decorator location: "+r)};function Pt(i){return(t,e)=>typeof e=="object"?y_(i,t,e):((r,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(n,s):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function __(i){return Pt({...i,state:!0,attribute:!1})}class w_ extends df{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new hf(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new Ro;new us;new us;new Ro;new Ro;class x_{constructor(t,e){this._group=new Ta,this._frustum=new sf,this._frustumMat=new us,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new of({color:"#2e3338"}),this.numbers=new Ta,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=e;const r=this.newGrid(-1),n=this.newGrid(-2);this.grids={main:r,secondary:n},this._group.add(n,r,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:e}=this.grids;t.removeFromParent(),e.removeFromParent(),t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:e}=this._frustum,r=e[0].constant*-e[0].normal.x,n=e[1].constant*-e[1].normal.x,s=e[2].constant*-e[2].normal.y,o=e[3].constant*-e[3].normal.y,a=Math.abs(r-n),l=Math.abs(o-s),{clientWidth:u,clientHeight:d}=this._container,c=Math.max(u,d),f=Math.max(a,l)/c,h=Math.ceil(Math.log10(a/this.scaleX)),g=Math.ceil(Math.log10(l/this.scaleY)),p=10**(h-2)*this.scaleX,v=10**(g-2)*this.scaleY,b=p*this.gridsFactor,_=v*this.gridsFactor,w=Math.ceil(l/_),x=Math.ceil(a/b),E=Math.ceil(l/v),A=Math.ceil(a/p),T=p*Math.ceil(n/p),D=v*Math.ceil(s/v),S=b*Math.ceil(n/b),z=_*Math.ceil(s/_),G=[...this.numbers.children];for(const ot of G)ot.removeFromParent();this.numbers.children=[];const C=[],R=9*f,y=1e4,j=S+this._offsetX,tt=Math.round(Math.abs(j/this.scaleX)*y)/y,H=(x-1)*b,et=Math.round(Math.abs((j+H)/this.scaleX)*y)/y,V=Math.max(tt,et).toString().length*R;let it=Math.ceil(V/b)*b;for(let ot=0;ot<x;ot++){let at=S+ot*b;C.push(at,o,0,at,s,0),at=Math.round(at*y)/y,it=Math.round(it*y)/y;const st=at%it;if(!(b<1||_<1)&&Math.abs(st)>.01)continue;const lt=this.newNumber((at+this._offsetX)/this.scaleX),yt=12*f;lt.position.set(at,s+yt,0)}for(let ot=0;ot<w;ot++){const at=z+ot*_;C.push(n,at,0,r,at,0);const st=this.newNumber(at/this.scaleY);let lt=12;st.element.textContent&&(lt+=4*st.element.textContent.length);const yt=lt*f;st.position.set(n+yt,at,0)}const L=[];for(let ot=0;ot<A;ot++){const at=T+ot*p;L.push(at,o,0,at,s,0)}for(let ot=0;ot<E;ot++){const at=D+ot*v;L.push(n,at,0,r,at,0)}const P=new za(new Float32Array(C),3),nt=new za(new Float32Array(L),3),{main:K,secondary:X}=this.grids;K.geometry.setAttribute("position",P),X.geometry.setAttribute("position",nt)}newNumber(t){const e=document.createElement("bim-label");e.textContent=String(Math.round(t*100)/100);const r=new w_(e);return this.numbers.add(r),r}newGrid(t){const e=new af,r=new lf(e,this.material);return r.frustumCulled=!1,r.renderOrder=t,r}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let e=0;e<t.length;e++){const r=t[e];if(Number.isNaN(r))return!1}return!0}}var $_=Object.defineProperty,k_=Object.getOwnPropertyDescriptor,mr=(i,t,e,r)=>{for(var n=k_(t,e),s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&$_(t,e,n),n};const Wh=class extends ti{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const e=Number(t.replace("#","0x"));Number.isNaN(e)||this._grid.material.color.setHex(e)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const e=t.get(qn).create();this._world=e,e.scene=new Do(t),e.scene.setup(),e.renderer=new ff(t,this);const r=new ds(t);e.camera=r;const n=new x_(r.threeOrtho,this);this._grid=n,e.scene.three.add(n.get()),r.controls.addEventListener("update",()=>n.regenerate()),setTimeout(async()=>{e.camera.updateAspect(),r.set("Plan"),await r.controls.setLookAt(0,0,100,0,0,0),await r.projection.set("Orthographic"),r.controls.dollySpeed=3,r.controls.draggingSmoothTime=.085,r.controls.maxZoom=1e3,r.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return wa`<slot></slot>`}};Wh.styles=ka`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let br=Wh;mr([Pt({type:String,attribute:"grid-color",reflect:!0})],br.prototype,"gridColor");mr([Pt({type:Number,attribute:"grid-scale-x",reflect:!0})],br.prototype,"gridScaleX");mr([Pt({type:Number,attribute:"grid-scale-y",reflect:!0})],br.prototype,"gridScaleY");mr([Pt({type:Number,attribute:"grid-offset-x",reflect:!0})],br.prototype,"gridOffsetX");mr([Pt({type:Number,attribute:"grid-offset-y",reflect:!0})],br.prototype,"gridOffsetY");var C_=Object.defineProperty,Ue=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&C_(t,e,n),n};const qh=class extends ti{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new us,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}render(){const t=this.size??this._defaults.size;return wa`
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
    `}};qh.styles=ka`
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
  `;let He=qh;Ue([Pt({type:Number,reflect:!0})],He.prototype,"size");Ue([Pt({type:String,attribute:"right-text",reflect:!0})],He.prototype,"rightText");Ue([Pt({type:String,attribute:"left-text",reflect:!0})],He.prototype,"leftText");Ue([Pt({type:String,attribute:"top-text",reflect:!0})],He.prototype,"topText");Ue([Pt({type:String,attribute:"bottom-text",reflect:!0})],He.prototype,"bottomText");Ue([Pt({type:String,attribute:"front-text",reflect:!0})],He.prototype,"frontText");Ue([Pt({type:String,attribute:"back-text",reflect:!0})],He.prototype,"backText");Ue([__()],He.prototype,"_cssMatrix3D");var E_=Object.defineProperty,S_=(i,t,e,r)=>{for(var n=void 0,s=i.length-1,o;s>=0;s--)(o=i[s])&&(n=o(t,e,n)||n);return n&&E_(t,e,n),n};const Gh=class extends ti{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=Hh()}set components(t){var e;if(this._components=t,this.components){const r=this.components.get(qn);this.world=r.create(),this.world.name=this.name}else(e=this.world)==null||e.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const e=new Do(this.components);this.world.scene=e,e.setup(),e.three.background=null;const r=new _t(this.components,t);this.world.renderer=r;const{postproduction:n}=r,s=new ds(this.components);this.world.camera=s;const o=this.components.get(jo).create(this.world);o.material.uniforms.uColor.value=new ai(4342338),o.material.uniforms.uSize1.value=2,o.material.uniforms.uSize2.value=8,n.enabled=!0,n.customEffects.excludedMeshes.push(o.three),n.setPasses({custom:!0,ao:!0,gamma:!0}),n.customEffects.lineColor=1513756}render(){return wa`<bim-viewport ${s_(this._viewport)}
      ><slot></slot
    ></bim-viewport>`}};Gh.styles=ka``;let A_=Gh;S_([Pt({type:String,reflect:!0})],A_.prototype,"name");const O_=i=>{const t={};for(const e in i)t[e]=[...i[e]];return console.log(JSON.stringify(t)),JSON.stringify(t)},T_=i=>{const{components:t}=i,e=i.components.get(An),r=s=>{const o=s.get(An),a=[];if("CustomSelections"in o.list){const l=o.list.CustomSelections;console.log("CustomSelections for Table:",l);for(const u in l){const d=l[u].map,c={data:{Name:u,fragmentIdMap:O_(d)}};a.push(c)}}return a},n=document.createElement("bim-table");return n.headersHidden=!0,n.hiddenColumns=["fragmentIdMap"],n.dataTransform={Name:s=>(console.log("Transform value:",s),typeof s!="string"?s:J`
      <div style=" display: flex; justify-content: space-between; flex: 1; align-items: center;">
        <bim-label>${s}</bim-label>
        <bim-button @click=${()=>{"CustomSelections"in e.list&&(delete e.list.CustomSelections[s],n.data=r(i.components))}} style="flex: 0" icon="majesticons:delete-bin"></bim-button>
      </div> 
      `)},n.addEventListener("cellcreated",({detail:s})=>{const{cell:o}=s;o.style.padding="0.25rem 0"}),n.addEventListener("rowcreated",({detail:s})=>{const{row:o}=s,{fragmentIdMap:a}=o.data;if(typeof a!="string")return;const l=JSON.parse(a);if(Object.keys(l).length===0)return;const u=t.get(Bi);o.onmouseover=()=>{o.style.setProperty("--bim-label--c","var(--bim-ui_accent-base)"),o.style.cursor="pointer",u.highlightByID("hover",l,!0,!1,u.selection.select)},o.onmouseleave=()=>{o.style.removeProperty("--bim-label--c"),o.style.cursor="default",u.clear("hover")},o.onclick=()=>{u.highlightByID("select",l,!0)}}),Rt.create(s=>(n.data=r(s.components),J`${n}`),i)},z_=i=>{const[t,e]=T_({components:i}),r=i.get(Bi);let n,s,o;const a=[{value:"In Production",label:"In Production"},{value:"As-built",label:"As-built"},{value:"In design",label:"In design"}],l=p=>{p&&(n=p,r.events.select.onClear.add(()=>{n.style.display="none"}))};let u;const d=p=>{p&&(s=p,s.innerHTML="",a.forEach(v=>{const b=document.createElement("bim-option");b.value=v.value,b.textContent=v.label,b.addEventListener("click",()=>{console.log("Item clicked:",v.value),s.value=[v.value],u=v.value,console.log("Dropdown value set to:",s.value)}),s.appendChild(b)}),s.addEventListener("change",()=>{console.log("Dropdown changed, current value:",s.value),s.value.length===0&&u&&(console.log("Preventing unexpected reset of the value"),s.value=[u])}))},c=p=>{p&&(o=p,r.events.select.onHighlight.add(()=>{o.style.display="block"}),r.events.select.onClear.add(()=>{o.style.display="none"}))},f=async()=>{if(console.log("onSaveGroupSelection triggered"),!u){console.log("Dropdown has no value");return}const p=u;console.log("Saving selection:",p),n.style.display="none",o.style.display="none";const v=i.get(An);p in v.list||(v.list.CustomSelections[p]={id:null,map:r.selection.select,name:p}),console.log("Updated CustomSelections:",v.list.CustomSelections),e(),u=void 0,s.value=[],s.label="Select..."},h=()=>{console.log("onNewSelection triggered");const p=Object.keys(r.selection.select).length;n&&p!==0&&(n.style.display="flex")},g=()=>{n&&(n.style.display="none",s.value=[],s.label="Select...")};return Rt.create(()=>J`
      <bim-panel-section label="Custom Selections" icon="clarity:blocks-group-solid">
        <div ${pe(l)} style="display: none; gap: 0.5rem">
          <bim-dropdown 
            ${pe(d)} 
            label="Example Label" 
            .multiple=${!1}> 
          </bim-dropdown>
          <bim-button @click=${f} icon="mingcute:check-fill" style="flex: 0" label="Accept"></bim-button>
          <bim-button @click=${g} icon="mingcute:close-fill" style="flex: 0" label="Cancel"></bim-button>
        </div>
        ${t}
        <bim-button style="display: none;" ${pe(c)} @click=${h} label="Save Selection"></bim-button>
      </bim-panel-section>
    `)},I_=i=>{const[t]=ss.modelsList({components:i}),[e]=ss.relationsTree({components:i,models:[],hoverHighlighterName:"hover",selectHighlighterName:"select"});e.preserveStructureOnFilter=!0;const r=n=>{const s=n.target;e.queryString=s.value};return Rt.create(()=>J`
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
        ${z_(i)}
      </bim-panel> 
    `)};class Yh extends bf{static uuid="939bb2bc-7d31-4a44-811d-68e4dd286c35";enabled=!0;grids=new Map}const P_=i=>{const t=i.get(Ut),e=i.get(Bi),n=i.get(Yh).grids.get("viewport"),[s,o]=ss.elementProperties({components:i,fragmentIdMap:{}});s.preserveStructureOnFilter=!0,t.onFragmentsDisposed.add(()=>o()),e.events.select.onHighlight.add(u=>{n&&(n.layout="second",s.expanded=!1,o({fragmentIdMap:u}))}),e.events.select.onClear.add(()=>{o({fragmentIdMap:{}}),n&&(n.layout="main")});const a=u=>{const d=u.target;s.queryString=d.value},l=()=>{s.expanded=!s.expanded};return Rt.create(()=>J`
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
    `)},N_=i=>{const t=document.querySelector("html"),e=s=>{const o=s.target;o.value===void 0||o.value===null||o.value===0?t.classList.remove("bim-ui-dark","bim-ui-light"):o.value===1?t.className="bim-ui-dark":o.value===2&&(t.className="bim-ui-light")},[r]=ss.worldsConfiguration({components:i}),n=s=>{const o=s.target;r.queryString=o.value};return Rt.create(()=>J`
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
    `)};var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Er(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Zh={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,t){(function(e){i.exports=e()})(function(){return function e(r,n,s){function o(u,d){if(!n[u]){if(!r[u]){var c=typeof Er=="function"&&Er;if(!d&&c)return c(u,!0);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var h=n[u]={exports:{}};r[u][0].call(h.exports,function(g){var p=r[u][1][g];return o(p||g)},h,h.exports,e,r,n,s)}return n[u].exports}for(var a=typeof Er=="function"&&Er,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(e,r,n){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(l){for(var u,d,c,f,h,g,p,v=[],b=0,_=l.length,w=_,x=s.getTypeOf(l)!=="string";b<l.length;)w=_-b,c=x?(u=l[b++],d=b<_?l[b++]:0,b<_?l[b++]:0):(u=l.charCodeAt(b++),d=b<_?l.charCodeAt(b++):0,b<_?l.charCodeAt(b++):0),f=u>>2,h=(3&u)<<4|d>>4,g=1<w?(15&d)<<2|c>>6:64,p=2<w?63&c:64,v.push(a.charAt(f)+a.charAt(h)+a.charAt(g)+a.charAt(p));return v.join("")},n.decode=function(l){var u,d,c,f,h,g,p=0,v=0,b="data:";if(l.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var _,w=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&w--,l.charAt(l.length-2)===a.charAt(64)&&w--,w%1!=0)throw new Error("Invalid base64 input, bad content length.");for(_=o.uint8array?new Uint8Array(0|w):new Array(0|w);p<l.length;)u=a.indexOf(l.charAt(p++))<<2|(f=a.indexOf(l.charAt(p++)))>>4,d=(15&f)<<4|(h=a.indexOf(l.charAt(p++)))>>2,c=(3&h)<<6|(g=a.indexOf(l.charAt(p++))),_[v++]=u,h!==64&&(_[v++]=d),g!==64&&(_[v++]=c);return _}},{"./support":30,"./utils":32}],2:[function(e,r,n){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function u(d,c,f,h,g){this.compressedSize=d,this.uncompressedSize=c,this.crc32=f,this.compression=h,this.compressedContent=g}u.prototype={getContentWorker:function(){var d=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),c=this;return d.on("end",function(){if(this.streamInfo.data_length!==c.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(d,c,f){return d.pipe(new a).pipe(new l("uncompressedSize")).pipe(c.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",c)},r.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,r,n){var s=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,r,n){var s=e("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();r.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(u,d,c,f){var h=o,g=f+c;u^=-1;for(var p=f;p<g;p++)u=u>>>8^h[255&(u^d[p])];return-1^u}(0|l,a,a.length,0):function(u,d,c,f){var h=o,g=f+c;u^=-1;for(var p=f;p<g;p++)u=u>>>8^h[255&(u^d.charCodeAt(p))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(e,r,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,r,n){var s=null;s=typeof Promise<"u"?Promise:e("lie"),r.exports={Promise:s}},{lie:37}],7:[function(e,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),l=e("./stream/GenericWorker"),u=s?"uint8array":"array";function d(c,f){l.call(this,"FlateWorker/"+c),this._pako=null,this._pakoAction=c,this._pakoOptions=f,this.meta={}}n.magic="\b\0",a.inherits(d,l),d.prototype.processChunk=function(c){this.meta=c.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,c.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var c=this;this._pako.onData=function(f){c.push({data:f,meta:c.meta})}},n.compressWorker=function(c){return new d("Deflate",c)},n.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,r,n){function s(h,g){var p,v="";for(p=0;p<g;p++)v+=String.fromCharCode(255&h),h>>>=8;return v}function o(h,g,p,v,b,_){var w,x,E=h.file,A=h.compression,T=_!==u.utf8encode,D=a.transformTo("string",_(E.name)),S=a.transformTo("string",u.utf8encode(E.name)),z=E.comment,G=a.transformTo("string",_(z)),C=a.transformTo("string",u.utf8encode(z)),R=S.length!==E.name.length,y=C.length!==z.length,j="",tt="",H="",et=E.dir,V=E.date,it={crc32:0,compressedSize:0,uncompressedSize:0};g&&!p||(it.crc32=h.crc32,it.compressedSize=h.compressedSize,it.uncompressedSize=h.uncompressedSize);var L=0;g&&(L|=8),T||!R&&!y||(L|=2048);var P=0,nt=0;et&&(P|=16),b==="UNIX"?(nt=798,P|=function(X,ot){var at=X;return X||(at=ot?16893:33204),(65535&at)<<16}(E.unixPermissions,et)):(nt=20,P|=function(X){return 63&(X||0)}(E.dosPermissions)),w=V.getUTCHours(),w<<=6,w|=V.getUTCMinutes(),w<<=5,w|=V.getUTCSeconds()/2,x=V.getUTCFullYear()-1980,x<<=4,x|=V.getUTCMonth()+1,x<<=5,x|=V.getUTCDate(),R&&(tt=s(1,1)+s(d(D),4)+S,j+="up"+s(tt.length,2)+tt),y&&(H=s(1,1)+s(d(G),4)+C,j+="uc"+s(H.length,2)+H);var K="";return K+=`
\0`,K+=s(L,2),K+=A.magic,K+=s(w,2),K+=s(x,2),K+=s(it.crc32,4),K+=s(it.compressedSize,4),K+=s(it.uncompressedSize,4),K+=s(D.length,2),K+=s(j.length,2),{fileRecord:c.LOCAL_FILE_HEADER+K+D+j,dirRecord:c.CENTRAL_FILE_HEADER+s(nt,2)+K+s(G.length,2)+"\0\0\0\0"+s(P,4)+s(v,4)+D+j+G}}var a=e("../utils"),l=e("../stream/GenericWorker"),u=e("../utf8"),d=e("../crc32"),c=e("../signature");function f(h,g,p,v){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=p,this.encodeFileName=v,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(f,l),f.prototype.push=function(h){var g=h.meta.percent||0,p=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:p?(g+100*(p-v-1))/p:100}}))},f.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var g=this.streamFiles&&!h.file.dir;if(g){var p=o(h,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(h){this.accumulate=!1;var g=this.streamFiles&&!h.file.dir,p=o(h,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),g)this.push({data:function(v){return c.DATA_DESCRIPTOR+s(v.crc32,4)+s(v.compressedSize,4)+s(v.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var h=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var p=this.bytesWritten-h,v=function(b,_,w,x,E){var A=a.transformTo("string",E(x));return c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(b,2)+s(b,2)+s(_,4)+s(w,4)+s(A.length,2)+A}(this.dirRecords.length,p,h,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(h){this._sources.push(h);var g=this;return h.on("data",function(p){g.processChunk(p)}),h.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),h.on("error",function(p){g.error(p)}),this},f.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(h){var g=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var p=0;p<g.length;p++)try{g[p].error(h)}catch{}return!0},f.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,g=0;g<h.length;g++)h[g].lock()},r.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,r,n){var s=e("../compressions"),o=e("./ZipFileWorker");n.generateWorker=function(a,l,u){var d=new o(l.streamFiles,u,l.platform,l.encodeFileName),c=0;try{a.forEach(function(f,h){c++;var g=function(_,w){var x=_||w,E=s[x];if(!E)throw new Error(x+" is not a valid compression method !");return E}(h.options.compression,l.compression),p=h.options.compressionOptions||l.compressionOptions||{},v=h.dir,b=h.date;h._compressWorker(g,p).withStreamInfo("file",{name:f,dir:v,date:b,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(d)}),d.entriesCount=c}catch(f){d.error(f)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,r,n){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,r,n){var s=e("./utils"),o=e("./external"),a=e("./utf8"),l=e("./zipEntries"),u=e("./stream/Crc32Probe"),d=e("./nodejsUtils");function c(f){return new o.Promise(function(h,g){var p=f.decompressed.getContentWorker().pipe(new u);p.on("error",function(v){g(v)}).on("end",function(){p.streamInfo.crc32!==f.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}r.exports=function(f,h){var g=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(f)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",f,!0,h.optimizedBinaryString,h.base64).then(function(p){var v=new l(h);return v.load(p),v}).then(function(p){var v=[o.Promise.resolve(p)],b=p.files;if(h.checkCRC32)for(var _=0;_<b.length;_++)v.push(c(b[_]));return o.Promise.all(v)}).then(function(p){for(var v=p.shift(),b=v.files,_=0;_<b.length;_++){var w=b[_],x=w.fileNameStr,E=s.resolve(w.fileNameStr);g.file(E,w.decompressed,{binary:!0,optimizedBinaryString:!0,date:w.date,dir:w.dir,comment:w.fileCommentStr.length?w.fileCommentStr:null,unixPermissions:w.unixPermissions,dosPermissions:w.dosPermissions,createFolders:h.createFolders}),w.dir||(g.file(E).unsafeOriginalName=x)}return v.zipComment.length&&(g.comment=v.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,r,n){var s=e("../utils"),o=e("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(d){u.push({data:d,meta:{percent:0}})}).on("error",function(d){u.isPaused?this.generatedError=d:u.error(d)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,r,n){var s=e("readable-stream").Readable;function o(a,l,u){s.call(this,l),this._helper=a;var d=this;a.on("data",function(c,f){d.push(c)||d._helper.pause(),u&&u(f)}).on("error",function(c){d.emit("error",c)}).on("end",function(){d.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},r.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,r,n){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,r,n){function s(E,A,T){var D,S=a.getTypeOf(A),z=a.extend(T||{},d);z.date=z.date||new Date,z.compression!==null&&(z.compression=z.compression.toUpperCase()),typeof z.unixPermissions=="string"&&(z.unixPermissions=parseInt(z.unixPermissions,8)),z.unixPermissions&&16384&z.unixPermissions&&(z.dir=!0),z.dosPermissions&&16&z.dosPermissions&&(z.dir=!0),z.dir&&(E=b(E)),z.createFolders&&(D=v(E))&&_.call(this,D,!0);var G=S==="string"&&z.binary===!1&&z.base64===!1;T&&T.binary!==void 0||(z.binary=!G),(A instanceof c&&A.uncompressedSize===0||z.dir||!A||A.length===0)&&(z.base64=!1,z.binary=!0,A="",z.compression="STORE",S="string");var C=null;C=A instanceof c||A instanceof l?A:g.isNode&&g.isStream(A)?new p(E,A):a.prepareContent(E,A,z.binary,z.optimizedBinaryString,z.base64);var R=new f(E,C,z);this.files[E]=R}var o=e("./utf8"),a=e("./utils"),l=e("./stream/GenericWorker"),u=e("./stream/StreamHelper"),d=e("./defaults"),c=e("./compressedObject"),f=e("./zipObject"),h=e("./generate"),g=e("./nodejsUtils"),p=e("./nodejs/NodejsStreamInputAdapter"),v=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var A=E.lastIndexOf("/");return 0<A?E.substring(0,A):""},b=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},_=function(E,A){return A=A!==void 0?A:d.createFolders,E=b(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:A}),this.files[E]};function w(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var x={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var A,T,D;for(A in this.files)D=this.files[A],(T=A.slice(this.root.length,A.length))&&A.slice(0,this.root.length)===this.root&&E(T,D)},filter:function(E){var A=[];return this.forEach(function(T,D){E(T,D)&&A.push(D)}),A},file:function(E,A,T){if(arguments.length!==1)return E=this.root+E,s.call(this,E,A,T),this;if(w(E)){var D=E;return this.filter(function(z,G){return!G.dir&&D.test(z)})}var S=this.files[this.root+E];return S&&!S.dir?S:null},folder:function(E){if(!E)return this;if(w(E))return this.filter(function(S,z){return z.dir&&E.test(S)});var A=this.root+E,T=_.call(this,A),D=this.clone();return D.root=T.name,D},remove:function(E){E=this.root+E;var A=this.files[E];if(A||(E.slice(-1)!=="/"&&(E+="/"),A=this.files[E]),A&&!A.dir)delete this.files[E];else for(var T=this.filter(function(S,z){return z.name.slice(0,E.length)===E}),D=0;D<T.length;D++)delete this.files[T[D].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var A,T={};try{if((T=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=T.type.toLowerCase(),T.compression=T.compression.toUpperCase(),T.type==="binarystring"&&(T.type="string"),!T.type)throw new Error("No output type specified.");a.checkSupport(T.type),T.platform!=="darwin"&&T.platform!=="freebsd"&&T.platform!=="linux"&&T.platform!=="sunos"||(T.platform="UNIX"),T.platform==="win32"&&(T.platform="DOS");var D=T.comment||this.comment||"";A=h.generateWorker(this,T,D)}catch(S){(A=new l("error")).error(S)}return new u(A,T.type||"string",T.mimeType)},generateAsync:function(E,A){return this.generateInternalStream(E).accumulate(A)},generateNodeStream:function(E,A){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(A)}};r.exports=x},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,r,n){r.exports=e("stream")},{stream:void 0}],17:[function(e,r,n){var s=e("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),d=a.charCodeAt(2),c=a.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===l&&this.data[f+1]===u&&this.data[f+2]===d&&this.data[f+3]===c)return f-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),d=a.charCodeAt(2),c=a.charCodeAt(3),f=this.readData(4);return l===f[0]&&u===f[1]&&d===f[2]&&c===f[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,r,n){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},r.exports=o},{"../utils":32}],19:[function(e,r,n){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,r,n){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,r,n){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},r.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,r,n){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),l=e("./StringReader"),u=e("./NodeBufferReader"),d=e("./Uint8ArrayReader");r.exports=function(c){var f=s.getTypeOf(c);return s.checkSupport(f),f!=="string"||o.uint8array?f==="nodebuffer"?new u(c):o.uint8array?new d(s.transformTo("uint8array",c)):new a(s.transformTo("array",c)):new l(c)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,r,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,r,n){var s=e("./GenericWorker"),o=e("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},r.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,r,n){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,r,n){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},r.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,r,n){var s=e("../utils"),o=e("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){u.dataIsReady=!0,u.data=d,u.max=d&&d.length||0,u.type=s.getTypeOf(d),u.isPaused||u._tickAndRepeat()},function(d){u.error(d)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,r,n){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},r.exports=s},{}],29:[function(e,r,n){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),l=e("../base64"),u=e("../support"),d=e("../external"),c=null;if(u.nodestream)try{c=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(g,p){return new d.Promise(function(v,b){var _=[],w=g._internalType,x=g._outputType,E=g._mimeType;g.on("data",function(A,T){_.push(A),p&&p(T)}).on("error",function(A){_=[],b(A)}).on("end",function(){try{var A=function(T,D,S){switch(T){case"blob":return s.newBlob(s.transformTo("arraybuffer",D),S);case"base64":return l.encode(D);default:return s.transformTo(T,D)}}(x,function(T,D){var S,z=0,G=null,C=0;for(S=0;S<D.length;S++)C+=D[S].length;switch(T){case"string":return D.join("");case"array":return Array.prototype.concat.apply([],D);case"uint8array":for(G=new Uint8Array(C),S=0;S<D.length;S++)G.set(D[S],z),z+=D[S].length;return G;case"nodebuffer":return Buffer.concat(D);default:throw new Error("concat : unsupported type '"+T+"'")}}(w,_),E);v(A)}catch(T){b(T)}_=[]}).resume()})}function h(g,p,v){var b=p;switch(p){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=p,this._mimeType=v,s.checkSupport(b),this._worker=g.pipe(new o(b)),g.lock()}catch(_){this._worker=new a("error"),this._worker.error(_)}}h.prototype={accumulate:function(g){return f(this,g)},on:function(g,p){var v=this;return g==="data"?this._worker.on(g,function(b){p.call(v,b.data,b.meta)}):this._worker.on(g,function(){s.delay(p,arguments,v)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:this._outputType!=="nodebuffer"},g)}},r.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,r,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var s=new ArrayBuffer(0);try{n.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),n.blob=o.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,r,n){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),l=e("./stream/GenericWorker"),u=new Array(256),d=0;d<256;d++)u[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;u[254]=u[254]=1;function c(){l.call(this,"utf-8 decode"),this.leftOver=null}function f(){l.call(this,"utf-8 encode")}n.utf8encode=function(h){return o.nodebuffer?a.newBufferFrom(h,"utf-8"):function(g){var p,v,b,_,w,x=g.length,E=0;for(_=0;_<x;_++)(64512&(v=g.charCodeAt(_)))==55296&&_+1<x&&(64512&(b=g.charCodeAt(_+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),_++),E+=v<128?1:v<2048?2:v<65536?3:4;for(p=o.uint8array?new Uint8Array(E):new Array(E),_=w=0;w<E;_++)(64512&(v=g.charCodeAt(_)))==55296&&_+1<x&&(64512&(b=g.charCodeAt(_+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),_++),v<128?p[w++]=v:(v<2048?p[w++]=192|v>>>6:(v<65536?p[w++]=224|v>>>12:(p[w++]=240|v>>>18,p[w++]=128|v>>>12&63),p[w++]=128|v>>>6&63),p[w++]=128|63&v);return p}(h)},n.utf8decode=function(h){return o.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):function(g){var p,v,b,_,w=g.length,x=new Array(2*w);for(p=v=0;p<w;)if((b=g[p++])<128)x[v++]=b;else if(4<(_=u[b]))x[v++]=65533,p+=_-1;else{for(b&=_===2?31:_===3?15:7;1<_&&p<w;)b=b<<6|63&g[p++],_--;1<_?x[v++]=65533:b<65536?x[v++]=b:(b-=65536,x[v++]=55296|b>>10&1023,x[v++]=56320|1023&b)}return x.length!==v&&(x.subarray?x=x.subarray(0,v):x.length=v),s.applyFromCharCode(x)}(h=s.transformTo(o.uint8array?"uint8array":"array",h))},s.inherits(c,l),c.prototype.processChunk=function(h){var g=s.transformTo(o.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var p=g;(g=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),g.set(p,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var v=function(_,w){var x;for((w=w||_.length)>_.length&&(w=_.length),x=w-1;0<=x&&(192&_[x])==128;)x--;return x<0||x===0?w:x+u[_[x]]>w?x:w}(g),b=g;v!==g.length&&(o.uint8array?(b=g.subarray(0,v),this.leftOver=g.subarray(v,g.length)):(b=g.slice(0,v),this.leftOver=g.slice(v,g.length))),this.push({data:n.utf8decode(b),meta:h.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=c,s.inherits(f,l),f.prototype.processChunk=function(h){this.push({data:n.utf8encode(h.data),meta:h.meta})},n.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,r,n){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),l=e("./external");function u(p){return p}function d(p,v){for(var b=0;b<p.length;++b)v[b]=255&p.charCodeAt(b);return v}e("setimmediate"),n.newBlob=function(p,v){n.checkSupport("blob");try{return new Blob([p],{type:v})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(p),b.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(p,v,b){var _=[],w=0,x=p.length;if(x<=b)return String.fromCharCode.apply(null,p);for(;w<x;)v==="array"||v==="nodebuffer"?_.push(String.fromCharCode.apply(null,p.slice(w,Math.min(w+b,x)))):_.push(String.fromCharCode.apply(null,p.subarray(w,Math.min(w+b,x)))),w+=b;return _.join("")},stringifyByChar:function(p){for(var v="",b=0;b<p.length;b++)v+=String.fromCharCode(p[b]);return v},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function f(p){var v=65536,b=n.getTypeOf(p),_=!0;if(b==="uint8array"?_=c.applyCanBeUsed.uint8array:b==="nodebuffer"&&(_=c.applyCanBeUsed.nodebuffer),_)for(;1<v;)try{return c.stringifyByChunk(p,b,v)}catch{v=Math.floor(v/2)}return c.stringifyByChar(p)}function h(p,v){for(var b=0;b<p.length;b++)v[b]=p[b];return v}n.applyFromCharCode=f;var g={};g.string={string:u,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return g.string.uint8array(p).buffer},uint8array:function(p){return d(p,new Uint8Array(p.length))},nodebuffer:function(p){return d(p,a.allocBuffer(p.length))}},g.array={string:f,array:u,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(p)}},g.arraybuffer={string:function(p){return f(new Uint8Array(p))},array:function(p){return h(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:u,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(new Uint8Array(p))}},g.uint8array={string:f,array:function(p){return h(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:u,nodebuffer:function(p){return a.newBufferFrom(p)}},g.nodebuffer={string:f,array:function(p){return h(p,new Array(p.length))},arraybuffer:function(p){return g.nodebuffer.uint8array(p).buffer},uint8array:function(p){return h(p,new Uint8Array(p.length))},nodebuffer:u},n.transformTo=function(p,v){if(v=v||"",!p)return v;n.checkSupport(p);var b=n.getTypeOf(v);return g[b][p](v)},n.resolve=function(p){for(var v=p.split("/"),b=[],_=0;_<v.length;_++){var w=v[_];w==="."||w===""&&_!==0&&_!==v.length-1||(w===".."?b.pop():b.push(w))}return b.join("/")},n.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(p)?"nodebuffer":s.uint8array&&p instanceof Uint8Array?"uint8array":s.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(p){if(!s[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(p){var v,b,_="";for(b=0;b<(p||"").length;b++)_+="\\x"+((v=p.charCodeAt(b))<16?"0":"")+v.toString(16).toUpperCase();return _},n.delay=function(p,v,b){setImmediate(function(){p.apply(b||null,v||[])})},n.inherits=function(p,v){function b(){}b.prototype=v.prototype,p.prototype=new b},n.extend=function(){var p,v,b={};for(p=0;p<arguments.length;p++)for(v in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],v)&&b[v]===void 0&&(b[v]=arguments[p][v]);return b},n.prepareContent=function(p,v,b,_,w){return l.Promise.resolve(v).then(function(x){return s.blob&&(x instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(x))!==-1)&&typeof FileReader<"u"?new l.Promise(function(E,A){var T=new FileReader;T.onload=function(D){E(D.target.result)},T.onerror=function(D){A(D.target.error)},T.readAsArrayBuffer(x)}):x}).then(function(x){var E=n.getTypeOf(x);return E?(E==="arraybuffer"?x=n.transformTo("uint8array",x):E==="string"&&(w?x=o.decode(x):b&&_!==!0&&(x=function(A){return d(A,s.uint8array?new Uint8Array(A.length):new Array(A.length))}(x))),x):l.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,r,n){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),l=e("./zipEntry"),u=e("./support");function d(c){this.files=[],this.loadOptions=c}d.prototype={checkSignature:function(c){if(!this.reader.readAndCheckSignature(c)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(f)+", expected "+o.pretty(c)+")")}},isSignature:function(c,f){var h=this.reader.index;this.reader.setIndex(c);var g=this.reader.readString(4)===f;return this.reader.setIndex(h),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var c=this.reader.readData(this.zipCommentLength),f=u.uint8array?"uint8array":"array",h=o.transformTo(f,c);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var c,f,h,g=this.zip64EndOfCentralSize-44;0<g;)c=this.reader.readInt(2),f=this.reader.readInt(4),h=this.reader.readData(f),this.zip64ExtensibleData[c]={id:c,length:f,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var c,f;for(c=0;c<this.files.length;c++)f=this.files[c],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var c;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(c=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(c);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var c=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(c<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(c);var f=c;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(c=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(c),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var g=f-h;if(0<g)this.isSignature(f,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(c){this.reader=s(c)},load:function(c){this.prepareReader(c),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,r,n){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),l=e("./crc32"),u=e("./utf8"),d=e("./compressions"),c=e("./support");function f(h,g){this.options=h,this.loadOptions=g}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var g,p;if(h.skip(22),this.fileNameLength=h.readInt(2),p=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=function(v){for(var b in d)if(Object.prototype.hasOwnProperty.call(d,b)&&d[b].magic===v)return d[b];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,g,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var g=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(g),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var g,p,v,b=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<b;)g=h.readInt(2),p=h.readInt(2),v=h.readData(p),this.extraFields[g]={id:g,length:p,value:v};h.setIndex(b)},handleUTF8:function(){var h=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var p=o.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var b=o.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var g=s(h.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:u.utf8decode(g.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var g=s(h.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:u.utf8decode(g.readData(h.length-5))}return null}},r.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,r,n){function s(g,p,v){this.name=g,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=p,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),l=e("./utf8"),u=e("./compressedObject"),d=e("./stream/GenericWorker");s.prototype={internalStream:function(g){var p=null,v="string";try{if(!g)throw new Error("No output type specified.");var b=(v=g.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),p=this._decompressWorker();var _=!this._dataBinary;_&&!b&&(p=p.pipe(new l.Utf8EncodeWorker)),!_&&b&&(p=p.pipe(new l.Utf8DecodeWorker))}catch(w){(p=new d("error")).error(w)}return new o(p,v,"")},async:function(g,p){return this.internalStream(g).accumulate(p)},nodeStream:function(g,p){return this.internalStream(g||"nodebuffer").toNodejsStream(p)},_compressWorker:function(g,p){if(this._data instanceof u&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(v,g,p)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<c.length;h++)s.prototype[c[h]]=f;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,r,n){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,d=new l(g),c=s.document.createTextNode("");d.observe(c,{characterData:!0}),o=function(){c.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var p=s.document.createElement("script");p.onreadystatechange=function(){g(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},s.document.documentElement.appendChild(p)}:function(){setTimeout(g,0)};else{var f=new s.MessageChannel;f.port1.onmessage=g,o=function(){f.port2.postMessage(0)}}var h=[];function g(){var p,v;a=!0;for(var b=h.length;b;){for(v=h,h=[],p=-1;++p<b;)v[p]();b=h.length}a=!1}r.exports=function(p){h.push(p)!==1||a||o()}}).call(this,typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,r,n){var s=e("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],d=["PENDING"];function c(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,b!==o&&p(this,b)}function f(b,_,w){this.promise=b,typeof _=="function"&&(this.onFulfilled=_,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function h(b,_,w){s(function(){var x;try{x=_(w)}catch(E){return a.reject(b,E)}x===b?a.reject(b,new TypeError("Cannot resolve promise with itself")):a.resolve(b,x)})}function g(b){var _=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof _=="function")return function(){_.apply(b,arguments)}}function p(b,_){var w=!1;function x(T){w||(w=!0,a.reject(b,T))}function E(T){w||(w=!0,a.resolve(b,T))}var A=v(function(){_(E,x)});A.status==="error"&&x(A.value)}function v(b,_){var w={};try{w.value=b(_),w.status="success"}catch(x){w.status="error",w.value=x}return w}(r.exports=c).prototype.finally=function(b){if(typeof b!="function")return this;var _=this.constructor;return this.then(function(w){return _.resolve(b()).then(function(){return w})},function(w){return _.resolve(b()).then(function(){throw w})})},c.prototype.catch=function(b){return this.then(null,b)},c.prototype.then=function(b,_){if(typeof b!="function"&&this.state===u||typeof _!="function"&&this.state===l)return this;var w=new this.constructor(o);return this.state!==d?h(w,this.state===u?b:_,this.outcome):this.queue.push(new f(w,b,_)),w},f.prototype.callFulfilled=function(b){a.resolve(this.promise,b)},f.prototype.otherCallFulfilled=function(b){h(this.promise,this.onFulfilled,b)},f.prototype.callRejected=function(b){a.reject(this.promise,b)},f.prototype.otherCallRejected=function(b){h(this.promise,this.onRejected,b)},a.resolve=function(b,_){var w=v(g,_);if(w.status==="error")return a.reject(b,w.value);var x=w.value;if(x)p(b,x);else{b.state=u,b.outcome=_;for(var E=-1,A=b.queue.length;++E<A;)b.queue[E].callFulfilled(_)}return b},a.reject=function(b,_){b.state=l,b.outcome=_;for(var w=-1,x=b.queue.length;++w<x;)b.queue[w].callRejected(_);return b},c.resolve=function(b){return b instanceof this?b:a.resolve(new this(o),b)},c.reject=function(b){var _=new this(o);return a.reject(_,b)},c.all=function(b){var _=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=b.length,x=!1;if(!w)return this.resolve([]);for(var E=new Array(w),A=0,T=-1,D=new this(o);++T<w;)S(b[T],T);return D;function S(z,G){_.resolve(z).then(function(C){E[G]=C,++A!==w||x||(x=!0,a.resolve(D,E))},function(C){x||(x=!0,a.reject(D,C))})}},c.race=function(b){var _=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=b.length,x=!1;if(!w)return this.resolve([]);for(var E=-1,A=new this(o);++E<w;)T=b[E],_.resolve(T).then(function(D){x||(x=!0,a.resolve(A,D))},function(D){x||(x=!0,a.reject(A,D))});var T;return A}},{immediate:36}],38:[function(e,r,n){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,r,n){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/messages"),u=e("./zlib/zstream"),d=Object.prototype.toString,c=0,f=-1,h=0,g=8;function p(b){if(!(this instanceof p))return new p(b);this.options=o.assign({level:f,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},b||{});var _=this.options;_.raw&&0<_.windowBits?_.windowBits=-_.windowBits:_.gzip&&0<_.windowBits&&_.windowBits<16&&(_.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var w=s.deflateInit2(this.strm,_.level,_.method,_.windowBits,_.memLevel,_.strategy);if(w!==c)throw new Error(l[w]);if(_.header&&s.deflateSetHeader(this.strm,_.header),_.dictionary){var x;if(x=typeof _.dictionary=="string"?a.string2buf(_.dictionary):d.call(_.dictionary)==="[object ArrayBuffer]"?new Uint8Array(_.dictionary):_.dictionary,(w=s.deflateSetDictionary(this.strm,x))!==c)throw new Error(l[w]);this._dict_set=!0}}function v(b,_){var w=new p(_);if(w.push(b,!0),w.err)throw w.msg||l[w.err];return w.result}p.prototype.push=function(b,_){var w,x,E=this.strm,A=this.options.chunkSize;if(this.ended)return!1;x=_===~~_?_:_===!0?4:0,typeof b=="string"?E.input=a.string2buf(b):d.call(b)==="[object ArrayBuffer]"?E.input=new Uint8Array(b):E.input=b,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(A),E.next_out=0,E.avail_out=A),(w=s.deflate(E,x))!==1&&w!==c)return this.onEnd(w),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||x!==4&&x!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&w!==1);return x===4?(w=s.deflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===c):x!==2||(this.onEnd(c),!(E.avail_out=0))},p.prototype.onData=function(b){this.chunks.push(b)},p.prototype.onEnd=function(b){b===c&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},n.Deflate=p,n.deflate=v,n.deflateRaw=function(b,_){return(_=_||{}).raw=!0,v(b,_)},n.gzip=function(b,_){return(_=_||{}).gzip=!0,v(b,_)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,r,n){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),l=e("./zlib/constants"),u=e("./zlib/messages"),d=e("./zlib/zstream"),c=e("./zlib/gzheader"),f=Object.prototype.toString;function h(p){if(!(this instanceof h))return new h(p);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},p||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||p&&p.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&!(15&v.windowBits)&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var b=s.inflateInit2(this.strm,v.windowBits);if(b!==l.Z_OK)throw new Error(u[b]);this.header=new c,s.inflateGetHeader(this.strm,this.header)}function g(p,v){var b=new h(v);if(b.push(p,!0),b.err)throw b.msg||u[b.err];return b.result}h.prototype.push=function(p,v){var b,_,w,x,E,A,T=this.strm,D=this.options.chunkSize,S=this.options.dictionary,z=!1;if(this.ended)return!1;_=v===~~v?v:v===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof p=="string"?T.input=a.binstring2buf(p):f.call(p)==="[object ArrayBuffer]"?T.input=new Uint8Array(p):T.input=p,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new o.Buf8(D),T.next_out=0,T.avail_out=D),(b=s.inflate(T,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&S&&(A=typeof S=="string"?a.string2buf(S):f.call(S)==="[object ArrayBuffer]"?new Uint8Array(S):S,b=s.inflateSetDictionary(this.strm,A)),b===l.Z_BUF_ERROR&&z===!0&&(b=l.Z_OK,z=!1),b!==l.Z_STREAM_END&&b!==l.Z_OK)return this.onEnd(b),!(this.ended=!0);T.next_out&&(T.avail_out!==0&&b!==l.Z_STREAM_END&&(T.avail_in!==0||_!==l.Z_FINISH&&_!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(w=a.utf8border(T.output,T.next_out),x=T.next_out-w,E=a.buf2string(T.output,w),T.next_out=x,T.avail_out=D-x,x&&o.arraySet(T.output,T.output,w,x,0),this.onData(E)):this.onData(o.shrinkBuf(T.output,T.next_out)))),T.avail_in===0&&T.avail_out===0&&(z=!0)}while((0<T.avail_in||T.avail_out===0)&&b!==l.Z_STREAM_END);return b===l.Z_STREAM_END&&(_=l.Z_FINISH),_===l.Z_FINISH?(b=s.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===l.Z_OK):_!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(T.avail_out=0))},h.prototype.onData=function(p){this.chunks.push(p)},h.prototype.onEnd=function(p){p===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},n.Inflate=h,n.inflate=g,n.inflateRaw=function(p,v){return(v=v||{}).raw=!0,g(p,v)},n.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,r,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var d=u.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var c in d)d.hasOwnProperty(c)&&(l[c]=d[c])}}return l},n.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,d,c,f){if(u.subarray&&l.subarray)l.set(u.subarray(d,d+c),f);else for(var h=0;h<c;h++)l[f+h]=u[d+h]},flattenChunks:function(l){var u,d,c,f,h,g;for(u=c=0,d=l.length;u<d;u++)c+=l[u].length;for(g=new Uint8Array(c),u=f=0,d=l.length;u<d;u++)h=l[u],g.set(h,f),f+=h.length;return g}},a={arraySet:function(l,u,d,c,f){for(var h=0;h<c;h++)l[f+h]=u[d+h]},flattenChunks:function(l){return[].concat.apply([],l)}};n.setTyped=function(l){l?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(s)},{}],42:[function(e,r,n){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function d(c,f){if(f<65537&&(c.subarray&&a||!c.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(c,f));for(var h="",g=0;g<f;g++)h+=String.fromCharCode(c[g]);return h}l[254]=l[254]=1,n.string2buf=function(c){var f,h,g,p,v,b=c.length,_=0;for(p=0;p<b;p++)(64512&(h=c.charCodeAt(p)))==55296&&p+1<b&&(64512&(g=c.charCodeAt(p+1)))==56320&&(h=65536+(h-55296<<10)+(g-56320),p++),_+=h<128?1:h<2048?2:h<65536?3:4;for(f=new s.Buf8(_),p=v=0;v<_;p++)(64512&(h=c.charCodeAt(p)))==55296&&p+1<b&&(64512&(g=c.charCodeAt(p+1)))==56320&&(h=65536+(h-55296<<10)+(g-56320),p++),h<128?f[v++]=h:(h<2048?f[v++]=192|h>>>6:(h<65536?f[v++]=224|h>>>12:(f[v++]=240|h>>>18,f[v++]=128|h>>>12&63),f[v++]=128|h>>>6&63),f[v++]=128|63&h);return f},n.buf2binstring=function(c){return d(c,c.length)},n.binstring2buf=function(c){for(var f=new s.Buf8(c.length),h=0,g=f.length;h<g;h++)f[h]=c.charCodeAt(h);return f},n.buf2string=function(c,f){var h,g,p,v,b=f||c.length,_=new Array(2*b);for(h=g=0;h<b;)if((p=c[h++])<128)_[g++]=p;else if(4<(v=l[p]))_[g++]=65533,h+=v-1;else{for(p&=v===2?31:v===3?15:7;1<v&&h<b;)p=p<<6|63&c[h++],v--;1<v?_[g++]=65533:p<65536?_[g++]=p:(p-=65536,_[g++]=55296|p>>10&1023,_[g++]=56320|1023&p)}return d(_,g)},n.utf8border=function(c,f){var h;for((f=f||c.length)>c.length&&(f=c.length),h=f-1;0<=h&&(192&c[h])==128;)h--;return h<0||h===0?f:h+l[c[h]]>f?h:f}},{"./common":41}],43:[function(e,r,n){r.exports=function(s,o,a,l){for(var u=65535&s|0,d=s>>>16&65535|0,c=0;a!==0;){for(a-=c=2e3<a?2e3:a;d=d+(u=u+o[l++]|0)|0,--c;);u%=65521,d%=65521}return u|d<<16|0}},{}],44:[function(e,r,n){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,r,n){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();r.exports=function(o,a,l,u){var d=s,c=u+l;o^=-1;for(var f=u;f<c;f++)o=o>>>8^d[255&(o^a[f])];return-1^o}},{}],46:[function(e,r,n){var s,o=e("../utils/common"),a=e("./trees"),l=e("./adler32"),u=e("./crc32"),d=e("./messages"),c=0,f=4,h=0,g=-2,p=-1,v=4,b=2,_=8,w=9,x=286,E=30,A=19,T=2*x+1,D=15,S=3,z=258,G=z+S+1,C=42,R=113,y=1,j=2,tt=3,H=4;function et(m,U){return m.msg=d[U],U}function V(m){return(m<<1)-(4<m?9:0)}function it(m){for(var U=m.length;0<=--U;)m[U]=0}function L(m){var U=m.state,M=U.pending;M>m.avail_out&&(M=m.avail_out),M!==0&&(o.arraySet(m.output,U.pending_buf,U.pending_out,M,m.next_out),m.next_out+=M,U.pending_out+=M,m.total_out+=M,m.avail_out-=M,U.pending-=M,U.pending===0&&(U.pending_out=0))}function P(m,U){a._tr_flush_block(m,0<=m.block_start?m.block_start:-1,m.strstart-m.block_start,U),m.block_start=m.strstart,L(m.strm)}function nt(m,U){m.pending_buf[m.pending++]=U}function K(m,U){m.pending_buf[m.pending++]=U>>>8&255,m.pending_buf[m.pending++]=255&U}function X(m,U){var M,k,$=m.max_chain_length,O=m.strstart,W=m.prev_length,q=m.nice_match,I=m.strstart>m.w_size-G?m.strstart-(m.w_size-G):0,Y=m.window,Q=m.w_mask,Z=m.prev,rt=m.strstart+z,bt=Y[O+W-1],ct=Y[O+W];m.prev_length>=m.good_match&&($>>=2),q>m.lookahead&&(q=m.lookahead);do if(Y[(M=U)+W]===ct&&Y[M+W-1]===bt&&Y[M]===Y[O]&&Y[++M]===Y[O+1]){O+=2,M++;do;while(Y[++O]===Y[++M]&&Y[++O]===Y[++M]&&Y[++O]===Y[++M]&&Y[++O]===Y[++M]&&Y[++O]===Y[++M]&&Y[++O]===Y[++M]&&Y[++O]===Y[++M]&&Y[++O]===Y[++M]&&O<rt);if(k=z-(rt-O),O=rt-z,W<k){if(m.match_start=U,q<=(W=k))break;bt=Y[O+W-1],ct=Y[O+W]}}while((U=Z[U&Q])>I&&--$!=0);return W<=m.lookahead?W:m.lookahead}function ot(m){var U,M,k,$,O,W,q,I,Y,Q,Z=m.w_size;do{if($=m.window_size-m.lookahead-m.strstart,m.strstart>=Z+(Z-G)){for(o.arraySet(m.window,m.window,Z,Z,0),m.match_start-=Z,m.strstart-=Z,m.block_start-=Z,U=M=m.hash_size;k=m.head[--U],m.head[U]=Z<=k?k-Z:0,--M;);for(U=M=Z;k=m.prev[--U],m.prev[U]=Z<=k?k-Z:0,--M;);$+=Z}if(m.strm.avail_in===0)break;if(W=m.strm,q=m.window,I=m.strstart+m.lookahead,Y=$,Q=void 0,Q=W.avail_in,Y<Q&&(Q=Y),M=Q===0?0:(W.avail_in-=Q,o.arraySet(q,W.input,W.next_in,Q,I),W.state.wrap===1?W.adler=l(W.adler,q,Q,I):W.state.wrap===2&&(W.adler=u(W.adler,q,Q,I)),W.next_in+=Q,W.total_in+=Q,Q),m.lookahead+=M,m.lookahead+m.insert>=S)for(O=m.strstart-m.insert,m.ins_h=m.window[O],m.ins_h=(m.ins_h<<m.hash_shift^m.window[O+1])&m.hash_mask;m.insert&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[O+S-1])&m.hash_mask,m.prev[O&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=O,O++,m.insert--,!(m.lookahead+m.insert<S)););}while(m.lookahead<G&&m.strm.avail_in!==0)}function at(m,U){for(var M,k;;){if(m.lookahead<G){if(ot(m),m.lookahead<G&&U===c)return y;if(m.lookahead===0)break}if(M=0,m.lookahead>=S&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+S-1])&m.hash_mask,M=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),M!==0&&m.strstart-M<=m.w_size-G&&(m.match_length=X(m,M)),m.match_length>=S)if(k=a._tr_tally(m,m.strstart-m.match_start,m.match_length-S),m.lookahead-=m.match_length,m.match_length<=m.max_lazy_match&&m.lookahead>=S){for(m.match_length--;m.strstart++,m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+S-1])&m.hash_mask,M=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart,--m.match_length!=0;);m.strstart++}else m.strstart+=m.match_length,m.match_length=0,m.ins_h=m.window[m.strstart],m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+1])&m.hash_mask;else k=a._tr_tally(m,0,m.window[m.strstart]),m.lookahead--,m.strstart++;if(k&&(P(m,!1),m.strm.avail_out===0))return y}return m.insert=m.strstart<S-1?m.strstart:S-1,U===f?(P(m,!0),m.strm.avail_out===0?tt:H):m.last_lit&&(P(m,!1),m.strm.avail_out===0)?y:j}function st(m,U){for(var M,k,$;;){if(m.lookahead<G){if(ot(m),m.lookahead<G&&U===c)return y;if(m.lookahead===0)break}if(M=0,m.lookahead>=S&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+S-1])&m.hash_mask,M=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),m.prev_length=m.match_length,m.prev_match=m.match_start,m.match_length=S-1,M!==0&&m.prev_length<m.max_lazy_match&&m.strstart-M<=m.w_size-G&&(m.match_length=X(m,M),m.match_length<=5&&(m.strategy===1||m.match_length===S&&4096<m.strstart-m.match_start)&&(m.match_length=S-1)),m.prev_length>=S&&m.match_length<=m.prev_length){for($=m.strstart+m.lookahead-S,k=a._tr_tally(m,m.strstart-1-m.prev_match,m.prev_length-S),m.lookahead-=m.prev_length-1,m.prev_length-=2;++m.strstart<=$&&(m.ins_h=(m.ins_h<<m.hash_shift^m.window[m.strstart+S-1])&m.hash_mask,M=m.prev[m.strstart&m.w_mask]=m.head[m.ins_h],m.head[m.ins_h]=m.strstart),--m.prev_length!=0;);if(m.match_available=0,m.match_length=S-1,m.strstart++,k&&(P(m,!1),m.strm.avail_out===0))return y}else if(m.match_available){if((k=a._tr_tally(m,0,m.window[m.strstart-1]))&&P(m,!1),m.strstart++,m.lookahead--,m.strm.avail_out===0)return y}else m.match_available=1,m.strstart++,m.lookahead--}return m.match_available&&(k=a._tr_tally(m,0,m.window[m.strstart-1]),m.match_available=0),m.insert=m.strstart<S-1?m.strstart:S-1,U===f?(P(m,!0),m.strm.avail_out===0?tt:H):m.last_lit&&(P(m,!1),m.strm.avail_out===0)?y:j}function lt(m,U,M,k,$){this.good_length=m,this.max_lazy=U,this.nice_length=M,this.max_chain=k,this.func=$}function yt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*T),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*A+1)),it(this.dyn_ltree),it(this.dyn_dtree),it(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(D+1),this.heap=new o.Buf16(2*x+1),it(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*x+1),it(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function wt(m){var U;return m&&m.state?(m.total_in=m.total_out=0,m.data_type=b,(U=m.state).pending=0,U.pending_out=0,U.wrap<0&&(U.wrap=-U.wrap),U.status=U.wrap?C:R,m.adler=U.wrap===2?0:1,U.last_flush=c,a._tr_init(U),h):et(m,g)}function ne(m){var U=wt(m);return U===h&&function(M){M.window_size=2*M.w_size,it(M.head),M.max_lazy_match=s[M.level].max_lazy,M.good_match=s[M.level].good_length,M.nice_match=s[M.level].nice_length,M.max_chain_length=s[M.level].max_chain,M.strstart=0,M.block_start=0,M.lookahead=0,M.insert=0,M.match_length=M.prev_length=S-1,M.match_available=0,M.ins_h=0}(m.state),U}function Kt(m,U,M,k,$,O){if(!m)return g;var W=1;if(U===p&&(U=6),k<0?(W=0,k=-k):15<k&&(W=2,k-=16),$<1||w<$||M!==_||k<8||15<k||U<0||9<U||O<0||v<O)return et(m,g);k===8&&(k=9);var q=new yt;return(m.state=q).strm=m,q.wrap=W,q.gzhead=null,q.w_bits=k,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=$+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+S-1)/S),q.window=new o.Buf8(2*q.w_size),q.head=new o.Buf16(q.hash_size),q.prev=new o.Buf16(q.w_size),q.lit_bufsize=1<<$+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new o.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=U,q.strategy=O,q.method=M,ne(m)}s=[new lt(0,0,0,0,function(m,U){var M=65535;for(M>m.pending_buf_size-5&&(M=m.pending_buf_size-5);;){if(m.lookahead<=1){if(ot(m),m.lookahead===0&&U===c)return y;if(m.lookahead===0)break}m.strstart+=m.lookahead,m.lookahead=0;var k=m.block_start+M;if((m.strstart===0||m.strstart>=k)&&(m.lookahead=m.strstart-k,m.strstart=k,P(m,!1),m.strm.avail_out===0)||m.strstart-m.block_start>=m.w_size-G&&(P(m,!1),m.strm.avail_out===0))return y}return m.insert=0,U===f?(P(m,!0),m.strm.avail_out===0?tt:H):(m.strstart>m.block_start&&(P(m,!1),m.strm.avail_out),y)}),new lt(4,4,8,4,at),new lt(4,5,16,8,at),new lt(4,6,32,32,at),new lt(4,4,16,16,st),new lt(8,16,32,32,st),new lt(8,16,128,128,st),new lt(8,32,128,256,st),new lt(32,128,258,1024,st),new lt(32,258,258,4096,st)],n.deflateInit=function(m,U){return Kt(m,U,_,15,8,0)},n.deflateInit2=Kt,n.deflateReset=ne,n.deflateResetKeep=wt,n.deflateSetHeader=function(m,U){return m&&m.state?m.state.wrap!==2?g:(m.state.gzhead=U,h):g},n.deflate=function(m,U){var M,k,$,O;if(!m||!m.state||5<U||U<0)return m?et(m,g):g;if(k=m.state,!m.output||!m.input&&m.avail_in!==0||k.status===666&&U!==f)return et(m,m.avail_out===0?-5:g);if(k.strm=m,M=k.last_flush,k.last_flush=U,k.status===C)if(k.wrap===2)m.adler=0,nt(k,31),nt(k,139),nt(k,8),k.gzhead?(nt(k,(k.gzhead.text?1:0)+(k.gzhead.hcrc?2:0)+(k.gzhead.extra?4:0)+(k.gzhead.name?8:0)+(k.gzhead.comment?16:0)),nt(k,255&k.gzhead.time),nt(k,k.gzhead.time>>8&255),nt(k,k.gzhead.time>>16&255),nt(k,k.gzhead.time>>24&255),nt(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),nt(k,255&k.gzhead.os),k.gzhead.extra&&k.gzhead.extra.length&&(nt(k,255&k.gzhead.extra.length),nt(k,k.gzhead.extra.length>>8&255)),k.gzhead.hcrc&&(m.adler=u(m.adler,k.pending_buf,k.pending,0)),k.gzindex=0,k.status=69):(nt(k,0),nt(k,0),nt(k,0),nt(k,0),nt(k,0),nt(k,k.level===9?2:2<=k.strategy||k.level<2?4:0),nt(k,3),k.status=R);else{var W=_+(k.w_bits-8<<4)<<8;W|=(2<=k.strategy||k.level<2?0:k.level<6?1:k.level===6?2:3)<<6,k.strstart!==0&&(W|=32),W+=31-W%31,k.status=R,K(k,W),k.strstart!==0&&(K(k,m.adler>>>16),K(k,65535&m.adler)),m.adler=1}if(k.status===69)if(k.gzhead.extra){for($=k.pending;k.gzindex<(65535&k.gzhead.extra.length)&&(k.pending!==k.pending_buf_size||(k.gzhead.hcrc&&k.pending>$&&(m.adler=u(m.adler,k.pending_buf,k.pending-$,$)),L(m),$=k.pending,k.pending!==k.pending_buf_size));)nt(k,255&k.gzhead.extra[k.gzindex]),k.gzindex++;k.gzhead.hcrc&&k.pending>$&&(m.adler=u(m.adler,k.pending_buf,k.pending-$,$)),k.gzindex===k.gzhead.extra.length&&(k.gzindex=0,k.status=73)}else k.status=73;if(k.status===73)if(k.gzhead.name){$=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>$&&(m.adler=u(m.adler,k.pending_buf,k.pending-$,$)),L(m),$=k.pending,k.pending===k.pending_buf_size)){O=1;break}O=k.gzindex<k.gzhead.name.length?255&k.gzhead.name.charCodeAt(k.gzindex++):0,nt(k,O)}while(O!==0);k.gzhead.hcrc&&k.pending>$&&(m.adler=u(m.adler,k.pending_buf,k.pending-$,$)),O===0&&(k.gzindex=0,k.status=91)}else k.status=91;if(k.status===91)if(k.gzhead.comment){$=k.pending;do{if(k.pending===k.pending_buf_size&&(k.gzhead.hcrc&&k.pending>$&&(m.adler=u(m.adler,k.pending_buf,k.pending-$,$)),L(m),$=k.pending,k.pending===k.pending_buf_size)){O=1;break}O=k.gzindex<k.gzhead.comment.length?255&k.gzhead.comment.charCodeAt(k.gzindex++):0,nt(k,O)}while(O!==0);k.gzhead.hcrc&&k.pending>$&&(m.adler=u(m.adler,k.pending_buf,k.pending-$,$)),O===0&&(k.status=103)}else k.status=103;if(k.status===103&&(k.gzhead.hcrc?(k.pending+2>k.pending_buf_size&&L(m),k.pending+2<=k.pending_buf_size&&(nt(k,255&m.adler),nt(k,m.adler>>8&255),m.adler=0,k.status=R)):k.status=R),k.pending!==0){if(L(m),m.avail_out===0)return k.last_flush=-1,h}else if(m.avail_in===0&&V(U)<=V(M)&&U!==f)return et(m,-5);if(k.status===666&&m.avail_in!==0)return et(m,-5);if(m.avail_in!==0||k.lookahead!==0||U!==c&&k.status!==666){var q=k.strategy===2?function(I,Y){for(var Q;;){if(I.lookahead===0&&(ot(I),I.lookahead===0)){if(Y===c)return y;break}if(I.match_length=0,Q=a._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++,Q&&(P(I,!1),I.strm.avail_out===0))return y}return I.insert=0,Y===f?(P(I,!0),I.strm.avail_out===0?tt:H):I.last_lit&&(P(I,!1),I.strm.avail_out===0)?y:j}(k,U):k.strategy===3?function(I,Y){for(var Q,Z,rt,bt,ct=I.window;;){if(I.lookahead<=z){if(ot(I),I.lookahead<=z&&Y===c)return y;if(I.lookahead===0)break}if(I.match_length=0,I.lookahead>=S&&0<I.strstart&&(Z=ct[rt=I.strstart-1])===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]){bt=I.strstart+z;do;while(Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&Z===ct[++rt]&&rt<bt);I.match_length=z-(bt-rt),I.match_length>I.lookahead&&(I.match_length=I.lookahead)}if(I.match_length>=S?(Q=a._tr_tally(I,1,I.match_length-S),I.lookahead-=I.match_length,I.strstart+=I.match_length,I.match_length=0):(Q=a._tr_tally(I,0,I.window[I.strstart]),I.lookahead--,I.strstart++),Q&&(P(I,!1),I.strm.avail_out===0))return y}return I.insert=0,Y===f?(P(I,!0),I.strm.avail_out===0?tt:H):I.last_lit&&(P(I,!1),I.strm.avail_out===0)?y:j}(k,U):s[k.level].func(k,U);if(q!==tt&&q!==H||(k.status=666),q===y||q===tt)return m.avail_out===0&&(k.last_flush=-1),h;if(q===j&&(U===1?a._tr_align(k):U!==5&&(a._tr_stored_block(k,0,0,!1),U===3&&(it(k.head),k.lookahead===0&&(k.strstart=0,k.block_start=0,k.insert=0))),L(m),m.avail_out===0))return k.last_flush=-1,h}return U!==f?h:k.wrap<=0?1:(k.wrap===2?(nt(k,255&m.adler),nt(k,m.adler>>8&255),nt(k,m.adler>>16&255),nt(k,m.adler>>24&255),nt(k,255&m.total_in),nt(k,m.total_in>>8&255),nt(k,m.total_in>>16&255),nt(k,m.total_in>>24&255)):(K(k,m.adler>>>16),K(k,65535&m.adler)),L(m),0<k.wrap&&(k.wrap=-k.wrap),k.pending!==0?h:1)},n.deflateEnd=function(m){var U;return m&&m.state?(U=m.state.status)!==C&&U!==69&&U!==73&&U!==91&&U!==103&&U!==R&&U!==666?et(m,g):(m.state=null,U===R?et(m,-3):h):g},n.deflateSetDictionary=function(m,U){var M,k,$,O,W,q,I,Y,Q=U.length;if(!m||!m.state||(O=(M=m.state).wrap)===2||O===1&&M.status!==C||M.lookahead)return g;for(O===1&&(m.adler=l(m.adler,U,Q,0)),M.wrap=0,Q>=M.w_size&&(O===0&&(it(M.head),M.strstart=0,M.block_start=0,M.insert=0),Y=new o.Buf8(M.w_size),o.arraySet(Y,U,Q-M.w_size,M.w_size,0),U=Y,Q=M.w_size),W=m.avail_in,q=m.next_in,I=m.input,m.avail_in=Q,m.next_in=0,m.input=U,ot(M);M.lookahead>=S;){for(k=M.strstart,$=M.lookahead-(S-1);M.ins_h=(M.ins_h<<M.hash_shift^M.window[k+S-1])&M.hash_mask,M.prev[k&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=k,k++,--$;);M.strstart=k,M.lookahead=S-1,ot(M)}return M.strstart+=M.lookahead,M.block_start=M.strstart,M.insert=M.lookahead,M.lookahead=0,M.match_length=M.prev_length=S-1,M.match_available=0,m.next_in=q,m.input=I,m.avail_in=W,M.wrap=O,h},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,r,n){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,r,n){r.exports=function(s,o){var a,l,u,d,c,f,h,g,p,v,b,_,w,x,E,A,T,D,S,z,G,C,R,y,j;a=s.state,l=s.next_in,y=s.input,u=l+(s.avail_in-5),d=s.next_out,j=s.output,c=d-(o-s.avail_out),f=d+(s.avail_out-257),h=a.dmax,g=a.wsize,p=a.whave,v=a.wnext,b=a.window,_=a.hold,w=a.bits,x=a.lencode,E=a.distcode,A=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;t:do{w<15&&(_+=y[l++]<<w,w+=8,_+=y[l++]<<w,w+=8),D=x[_&A];e:for(;;){if(_>>>=S=D>>>24,w-=S,(S=D>>>16&255)===0)j[d++]=65535&D;else{if(!(16&S)){if(!(64&S)){D=x[(65535&D)+(_&(1<<S)-1)];continue e}if(32&S){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}z=65535&D,(S&=15)&&(w<S&&(_+=y[l++]<<w,w+=8),z+=_&(1<<S)-1,_>>>=S,w-=S),w<15&&(_+=y[l++]<<w,w+=8,_+=y[l++]<<w,w+=8),D=E[_&T];i:for(;;){if(_>>>=S=D>>>24,w-=S,!(16&(S=D>>>16&255))){if(!(64&S)){D=E[(65535&D)+(_&(1<<S)-1)];continue i}s.msg="invalid distance code",a.mode=30;break t}if(G=65535&D,w<(S&=15)&&(_+=y[l++]<<w,(w+=8)<S&&(_+=y[l++]<<w,w+=8)),h<(G+=_&(1<<S)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(_>>>=S,w-=S,(S=d-c)<G){if(p<(S=G-S)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(R=b,(C=0)===v){if(C+=g-S,S<z){for(z-=S;j[d++]=b[C++],--S;);C=d-G,R=j}}else if(v<S){if(C+=g+v-S,(S-=v)<z){for(z-=S;j[d++]=b[C++],--S;);if(C=0,v<z){for(z-=S=v;j[d++]=b[C++],--S;);C=d-G,R=j}}}else if(C+=v-S,S<z){for(z-=S;j[d++]=b[C++],--S;);C=d-G,R=j}for(;2<z;)j[d++]=R[C++],j[d++]=R[C++],j[d++]=R[C++],z-=3;z&&(j[d++]=R[C++],1<z&&(j[d++]=R[C++]))}else{for(C=d-G;j[d++]=j[C++],j[d++]=j[C++],j[d++]=j[C++],2<(z-=3););z&&(j[d++]=j[C++],1<z&&(j[d++]=j[C++]))}break}}break}}while(l<u&&d<f);l-=z=w>>3,_&=(1<<(w-=z<<3))-1,s.next_in=l,s.next_out=d,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=d<f?f-d+257:257-(d-f),a.hold=_,a.bits=w}},{}],49:[function(e,r,n){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),l=e("./inffast"),u=e("./inftrees"),d=1,c=2,f=0,h=-2,g=1,p=852,v=592;function b(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function w(C){var R;return C&&C.state?(R=C.state,C.total_in=C.total_out=R.total=0,C.msg="",R.wrap&&(C.adler=1&R.wrap),R.mode=g,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new s.Buf32(p),R.distcode=R.distdyn=new s.Buf32(v),R.sane=1,R.back=-1,f):h}function x(C){var R;return C&&C.state?((R=C.state).wsize=0,R.whave=0,R.wnext=0,w(C)):h}function E(C,R){var y,j;return C&&C.state?(j=C.state,R<0?(y=0,R=-R):(y=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?h:(j.window!==null&&j.wbits!==R&&(j.window=null),j.wrap=y,j.wbits=R,x(C))):h}function A(C,R){var y,j;return C?(j=new _,(C.state=j).window=null,(y=E(C,R))!==f&&(C.state=null),y):h}var T,D,S=!0;function z(C){if(S){var R;for(T=new s.Buf32(512),D=new s.Buf32(32),R=0;R<144;)C.lens[R++]=8;for(;R<256;)C.lens[R++]=9;for(;R<280;)C.lens[R++]=7;for(;R<288;)C.lens[R++]=8;for(u(d,C.lens,0,288,T,0,C.work,{bits:9}),R=0;R<32;)C.lens[R++]=5;u(c,C.lens,0,32,D,0,C.work,{bits:5}),S=!1}C.lencode=T,C.lenbits=9,C.distcode=D,C.distbits=5}function G(C,R,y,j){var tt,H=C.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new s.Buf8(H.wsize)),j>=H.wsize?(s.arraySet(H.window,R,y-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(j<(tt=H.wsize-H.wnext)&&(tt=j),s.arraySet(H.window,R,y-j,tt,H.wnext),(j-=tt)?(s.arraySet(H.window,R,y-j,j,0),H.wnext=j,H.whave=H.wsize):(H.wnext+=tt,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=tt))),0}n.inflateReset=x,n.inflateReset2=E,n.inflateResetKeep=w,n.inflateInit=function(C){return A(C,15)},n.inflateInit2=A,n.inflate=function(C,R){var y,j,tt,H,et,V,it,L,P,nt,K,X,ot,at,st,lt,yt,wt,ne,Kt,m,U,M,k,$=0,O=new s.Buf8(4),W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return h;(y=C.state).mode===12&&(y.mode=13),et=C.next_out,tt=C.output,it=C.avail_out,H=C.next_in,j=C.input,V=C.avail_in,L=y.hold,P=y.bits,nt=V,K=it,U=f;t:for(;;)switch(y.mode){case g:if(y.wrap===0){y.mode=13;break}for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(2&y.wrap&&L===35615){O[y.check=0]=255&L,O[1]=L>>>8&255,y.check=a(y.check,O,2,0),P=L=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&L)<<8)+(L>>8))%31){C.msg="incorrect header check",y.mode=30;break}if((15&L)!=8){C.msg="unknown compression method",y.mode=30;break}if(P-=4,m=8+(15&(L>>>=4)),y.wbits===0)y.wbits=m;else if(m>y.wbits){C.msg="invalid window size",y.mode=30;break}y.dmax=1<<m,C.adler=y.check=1,y.mode=512&L?10:12,P=L=0;break;case 2:for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(y.flags=L,(255&y.flags)!=8){C.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){C.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=L>>8&1),512&y.flags&&(O[0]=255&L,O[1]=L>>>8&255,y.check=a(y.check,O,2,0)),P=L=0,y.mode=3;case 3:for(;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.head&&(y.head.time=L),512&y.flags&&(O[0]=255&L,O[1]=L>>>8&255,O[2]=L>>>16&255,O[3]=L>>>24&255,y.check=a(y.check,O,4,0)),P=L=0,y.mode=4;case 4:for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.head&&(y.head.xflags=255&L,y.head.os=L>>8),512&y.flags&&(O[0]=255&L,O[1]=L>>>8&255,y.check=a(y.check,O,2,0)),P=L=0,y.mode=5;case 5:if(1024&y.flags){for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.length=L,y.head&&(y.head.extra_len=L),512&y.flags&&(O[0]=255&L,O[1]=L>>>8&255,y.check=a(y.check,O,2,0)),P=L=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(V<(X=y.length)&&(X=V),X&&(y.head&&(m=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,j,H,X,m)),512&y.flags&&(y.check=a(y.check,j,X,H)),V-=X,H+=X,y.length-=X),y.length))break t;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(V===0)break t;for(X=0;m=j[H+X++],y.head&&m&&y.length<65536&&(y.head.name+=String.fromCharCode(m)),m&&X<V;);if(512&y.flags&&(y.check=a(y.check,j,X,H)),V-=X,H+=X,m)break t}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(V===0)break t;for(X=0;m=j[H+X++],y.head&&m&&y.length<65536&&(y.head.comment+=String.fromCharCode(m)),m&&X<V;);if(512&y.flags&&(y.check=a(y.check,j,X,H)),V-=X,H+=X,m)break t}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;P<16;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(L!==(65535&y.check)){C.msg="header crc mismatch",y.mode=30;break}P=L=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),C.adler=y.check=0,y.mode=12;break;case 10:for(;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}C.adler=y.check=b(L),P=L=0,y.mode=11;case 11:if(y.havedict===0)return C.next_out=et,C.avail_out=it,C.next_in=H,C.avail_in=V,y.hold=L,y.bits=P,2;C.adler=y.check=1,y.mode=12;case 12:if(R===5||R===6)break t;case 13:if(y.last){L>>>=7&P,P-=7&P,y.mode=27;break}for(;P<3;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}switch(y.last=1&L,P-=1,3&(L>>>=1)){case 0:y.mode=14;break;case 1:if(z(y),y.mode=20,R!==6)break;L>>>=2,P-=2;break t;case 2:y.mode=17;break;case 3:C.msg="invalid block type",y.mode=30}L>>>=2,P-=2;break;case 14:for(L>>>=7&P,P-=7&P;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if((65535&L)!=(L>>>16^65535)){C.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&L,P=L=0,y.mode=15,R===6)break t;case 15:y.mode=16;case 16:if(X=y.length){if(V<X&&(X=V),it<X&&(X=it),X===0)break t;s.arraySet(tt,j,H,X,et),V-=X,H+=X,it-=X,et+=X,y.length-=X;break}y.mode=12;break;case 17:for(;P<14;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(y.nlen=257+(31&L),L>>>=5,P-=5,y.ndist=1+(31&L),L>>>=5,P-=5,y.ncode=4+(15&L),L>>>=4,P-=4,286<y.nlen||30<y.ndist){C.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;P<3;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.lens[W[y.have++]]=7&L,L>>>=3,P-=3}for(;y.have<19;)y.lens[W[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,M={bits:y.lenbits},U=u(0,y.lens,0,19,y.lencode,0,y.work,M),y.lenbits=M.bits,U){C.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;lt=($=y.lencode[L&(1<<y.lenbits)-1])>>>16&255,yt=65535&$,!((st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(yt<16)L>>>=st,P-=st,y.lens[y.have++]=yt;else{if(yt===16){for(k=st+2;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(L>>>=st,P-=st,y.have===0){C.msg="invalid bit length repeat",y.mode=30;break}m=y.lens[y.have-1],X=3+(3&L),L>>>=2,P-=2}else if(yt===17){for(k=st+3;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}P-=st,m=0,X=3+(7&(L>>>=st)),L>>>=3,P-=3}else{for(k=st+7;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}P-=st,m=0,X=11+(127&(L>>>=st)),L>>>=7,P-=7}if(y.have+X>y.nlen+y.ndist){C.msg="invalid bit length repeat",y.mode=30;break}for(;X--;)y.lens[y.have++]=m}}if(y.mode===30)break;if(y.lens[256]===0){C.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,M={bits:y.lenbits},U=u(d,y.lens,0,y.nlen,y.lencode,0,y.work,M),y.lenbits=M.bits,U){C.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,M={bits:y.distbits},U=u(c,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,M),y.distbits=M.bits,U){C.msg="invalid distances set",y.mode=30;break}if(y.mode=20,R===6)break t;case 20:y.mode=21;case 21:if(6<=V&&258<=it){C.next_out=et,C.avail_out=it,C.next_in=H,C.avail_in=V,y.hold=L,y.bits=P,l(C,K),et=C.next_out,tt=C.output,it=C.avail_out,H=C.next_in,j=C.input,V=C.avail_in,L=y.hold,P=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;lt=($=y.lencode[L&(1<<y.lenbits)-1])>>>16&255,yt=65535&$,!((st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(lt&&!(240&lt)){for(wt=st,ne=lt,Kt=yt;lt=($=y.lencode[Kt+((L&(1<<wt+ne)-1)>>wt)])>>>16&255,yt=65535&$,!(wt+(st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}L>>>=wt,P-=wt,y.back+=wt}if(L>>>=st,P-=st,y.back+=st,y.length=yt,lt===0){y.mode=26;break}if(32&lt){y.back=-1,y.mode=12;break}if(64&lt){C.msg="invalid literal/length code",y.mode=30;break}y.extra=15&lt,y.mode=22;case 22:if(y.extra){for(k=y.extra;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.length+=L&(1<<y.extra)-1,L>>>=y.extra,P-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;lt=($=y.distcode[L&(1<<y.distbits)-1])>>>16&255,yt=65535&$,!((st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(!(240&lt)){for(wt=st,ne=lt,Kt=yt;lt=($=y.distcode[Kt+((L&(1<<wt+ne)-1)>>wt)])>>>16&255,yt=65535&$,!(wt+(st=$>>>24)<=P);){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}L>>>=wt,P-=wt,y.back+=wt}if(L>>>=st,P-=st,y.back+=st,64&lt){C.msg="invalid distance code",y.mode=30;break}y.offset=yt,y.extra=15&lt,y.mode=24;case 24:if(y.extra){for(k=y.extra;P<k;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}y.offset+=L&(1<<y.extra)-1,L>>>=y.extra,P-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){C.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(it===0)break t;if(X=K-it,y.offset>X){if((X=y.offset-X)>y.whave&&y.sane){C.msg="invalid distance too far back",y.mode=30;break}ot=X>y.wnext?(X-=y.wnext,y.wsize-X):y.wnext-X,X>y.length&&(X=y.length),at=y.window}else at=tt,ot=et-y.offset,X=y.length;for(it<X&&(X=it),it-=X,y.length-=X;tt[et++]=at[ot++],--X;);y.length===0&&(y.mode=21);break;case 26:if(it===0)break t;tt[et++]=y.length,it--,y.mode=21;break;case 27:if(y.wrap){for(;P<32;){if(V===0)break t;V--,L|=j[H++]<<P,P+=8}if(K-=it,C.total_out+=K,y.total+=K,K&&(C.adler=y.check=y.flags?a(y.check,tt,K,et-K):o(y.check,tt,K,et-K)),K=it,(y.flags?L:b(L))!==y.check){C.msg="incorrect data check",y.mode=30;break}P=L=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;P<32;){if(V===0)break t;V--,L+=j[H++]<<P,P+=8}if(L!==(4294967295&y.total)){C.msg="incorrect length check",y.mode=30;break}P=L=0}y.mode=29;case 29:U=1;break t;case 30:U=-3;break t;case 31:return-4;case 32:default:return h}return C.next_out=et,C.avail_out=it,C.next_in=H,C.avail_in=V,y.hold=L,y.bits=P,(y.wsize||K!==C.avail_out&&y.mode<30&&(y.mode<27||R!==4))&&G(C,C.output,C.next_out,K-C.avail_out)?(y.mode=31,-4):(nt-=C.avail_in,K-=C.avail_out,C.total_in+=nt,C.total_out+=K,y.total+=K,y.wrap&&K&&(C.adler=y.check=y.flags?a(y.check,tt,K,C.next_out-K):o(y.check,tt,K,C.next_out-K)),C.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(nt==0&&K===0||R===4)&&U===f&&(U=-5),U)},n.inflateEnd=function(C){if(!C||!C.state)return h;var R=C.state;return R.window&&(R.window=null),C.state=null,f},n.inflateGetHeader=function(C,R){var y;return C&&C.state&&2&(y=C.state).wrap?((y.head=R).done=!1,f):h},n.inflateSetDictionary=function(C,R){var y,j=R.length;return C&&C.state?(y=C.state).wrap!==0&&y.mode!==11?h:y.mode===11&&o(1,R,j,0)!==y.check?-3:G(C,R,j,j)?(y.mode=31,-4):(y.havedict=1,f):h},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,r,n){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(d,c,f,h,g,p,v,b){var _,w,x,E,A,T,D,S,z,G=b.bits,C=0,R=0,y=0,j=0,tt=0,H=0,et=0,V=0,it=0,L=0,P=null,nt=0,K=new s.Buf16(16),X=new s.Buf16(16),ot=null,at=0;for(C=0;C<=15;C++)K[C]=0;for(R=0;R<h;R++)K[c[f+R]]++;for(tt=G,j=15;1<=j&&K[j]===0;j--);if(j<tt&&(tt=j),j===0)return g[p++]=20971520,g[p++]=20971520,b.bits=1,0;for(y=1;y<j&&K[y]===0;y++);for(tt<y&&(tt=y),C=V=1;C<=15;C++)if(V<<=1,(V-=K[C])<0)return-1;if(0<V&&(d===0||j!==1))return-1;for(X[1]=0,C=1;C<15;C++)X[C+1]=X[C]+K[C];for(R=0;R<h;R++)c[f+R]!==0&&(v[X[c[f+R]]++]=R);if(T=d===0?(P=ot=v,19):d===1?(P=o,nt-=257,ot=a,at-=257,256):(P=l,ot=u,-1),C=y,A=p,et=R=L=0,x=-1,E=(it=1<<(H=tt))-1,d===1&&852<it||d===2&&592<it)return 1;for(;;){for(D=C-et,z=v[R]<T?(S=0,v[R]):v[R]>T?(S=ot[at+v[R]],P[nt+v[R]]):(S=96,0),_=1<<C-et,y=w=1<<H;g[A+(L>>et)+(w-=_)]=D<<24|S<<16|z|0,w!==0;);for(_=1<<C-1;L&_;)_>>=1;if(_!==0?(L&=_-1,L+=_):L=0,R++,--K[C]==0){if(C===j)break;C=c[f+v[R]]}if(tt<C&&(L&E)!==x){for(et===0&&(et=tt),A+=y,V=1<<(H=C-et);H+et<j&&!((V-=K[H+et])<=0);)H++,V<<=1;if(it+=1<<H,d===1&&852<it||d===2&&592<it)return 1;g[x=L&E]=tt<<24|H<<16|A-p|0}}return L!==0&&(g[A+L]=C-et<<24|64<<16|0),b.bits=tt,0}},{"../utils/common":41}],51:[function(e,r,n){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,r,n){var s=e("../utils/common"),o=0,a=1;function l($){for(var O=$.length;0<=--O;)$[O]=0}var u=0,d=29,c=256,f=c+1+d,h=30,g=19,p=2*f+1,v=15,b=16,_=7,w=256,x=16,E=17,A=18,T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],D=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],G=new Array(2*(f+2));l(G);var C=new Array(2*h);l(C);var R=new Array(512);l(R);var y=new Array(256);l(y);var j=new Array(d);l(j);var tt,H,et,V=new Array(h);function it($,O,W,q,I){this.static_tree=$,this.extra_bits=O,this.extra_base=W,this.elems=q,this.max_length=I,this.has_stree=$&&$.length}function L($,O){this.dyn_tree=$,this.max_code=0,this.stat_desc=O}function P($){return $<256?R[$]:R[256+($>>>7)]}function nt($,O){$.pending_buf[$.pending++]=255&O,$.pending_buf[$.pending++]=O>>>8&255}function K($,O,W){$.bi_valid>b-W?($.bi_buf|=O<<$.bi_valid&65535,nt($,$.bi_buf),$.bi_buf=O>>b-$.bi_valid,$.bi_valid+=W-b):($.bi_buf|=O<<$.bi_valid&65535,$.bi_valid+=W)}function X($,O,W){K($,W[2*O],W[2*O+1])}function ot($,O){for(var W=0;W|=1&$,$>>>=1,W<<=1,0<--O;);return W>>>1}function at($,O,W){var q,I,Y=new Array(v+1),Q=0;for(q=1;q<=v;q++)Y[q]=Q=Q+W[q-1]<<1;for(I=0;I<=O;I++){var Z=$[2*I+1];Z!==0&&($[2*I]=ot(Y[Z]++,Z))}}function st($){var O;for(O=0;O<f;O++)$.dyn_ltree[2*O]=0;for(O=0;O<h;O++)$.dyn_dtree[2*O]=0;for(O=0;O<g;O++)$.bl_tree[2*O]=0;$.dyn_ltree[2*w]=1,$.opt_len=$.static_len=0,$.last_lit=$.matches=0}function lt($){8<$.bi_valid?nt($,$.bi_buf):0<$.bi_valid&&($.pending_buf[$.pending++]=$.bi_buf),$.bi_buf=0,$.bi_valid=0}function yt($,O,W,q){var I=2*O,Y=2*W;return $[I]<$[Y]||$[I]===$[Y]&&q[O]<=q[W]}function wt($,O,W){for(var q=$.heap[W],I=W<<1;I<=$.heap_len&&(I<$.heap_len&&yt(O,$.heap[I+1],$.heap[I],$.depth)&&I++,!yt(O,q,$.heap[I],$.depth));)$.heap[W]=$.heap[I],W=I,I<<=1;$.heap[W]=q}function ne($,O,W){var q,I,Y,Q,Z=0;if($.last_lit!==0)for(;q=$.pending_buf[$.d_buf+2*Z]<<8|$.pending_buf[$.d_buf+2*Z+1],I=$.pending_buf[$.l_buf+Z],Z++,q===0?X($,I,O):(X($,(Y=y[I])+c+1,O),(Q=T[Y])!==0&&K($,I-=j[Y],Q),X($,Y=P(--q),W),(Q=D[Y])!==0&&K($,q-=V[Y],Q)),Z<$.last_lit;);X($,w,O)}function Kt($,O){var W,q,I,Y=O.dyn_tree,Q=O.stat_desc.static_tree,Z=O.stat_desc.has_stree,rt=O.stat_desc.elems,bt=-1;for($.heap_len=0,$.heap_max=p,W=0;W<rt;W++)Y[2*W]!==0?($.heap[++$.heap_len]=bt=W,$.depth[W]=0):Y[2*W+1]=0;for(;$.heap_len<2;)Y[2*(I=$.heap[++$.heap_len]=bt<2?++bt:0)]=1,$.depth[I]=0,$.opt_len--,Z&&($.static_len-=Q[2*I+1]);for(O.max_code=bt,W=$.heap_len>>1;1<=W;W--)wt($,Y,W);for(I=rt;W=$.heap[1],$.heap[1]=$.heap[$.heap_len--],wt($,Y,1),q=$.heap[1],$.heap[--$.heap_max]=W,$.heap[--$.heap_max]=q,Y[2*I]=Y[2*W]+Y[2*q],$.depth[I]=($.depth[W]>=$.depth[q]?$.depth[W]:$.depth[q])+1,Y[2*W+1]=Y[2*q+1]=I,$.heap[1]=I++,wt($,Y,1),2<=$.heap_len;);$.heap[--$.heap_max]=$.heap[1],function(ct,jt){var ln,re,cn,xt,gr,Fs,de=jt.dyn_tree,Aa=jt.max_code,ef=jt.stat_desc.static_tree,nf=jt.stat_desc.has_stree,rf=jt.stat_desc.extra_bits,Oa=jt.stat_desc.extra_base,un=jt.stat_desc.max_length,vr=0;for(xt=0;xt<=v;xt++)ct.bl_count[xt]=0;for(de[2*ct.heap[ct.heap_max]+1]=0,ln=ct.heap_max+1;ln<p;ln++)un<(xt=de[2*de[2*(re=ct.heap[ln])+1]+1]+1)&&(xt=un,vr++),de[2*re+1]=xt,Aa<re||(ct.bl_count[xt]++,gr=0,Oa<=re&&(gr=rf[re-Oa]),Fs=de[2*re],ct.opt_len+=Fs*(xt+gr),nf&&(ct.static_len+=Fs*(ef[2*re+1]+gr)));if(vr!==0){do{for(xt=un-1;ct.bl_count[xt]===0;)xt--;ct.bl_count[xt]--,ct.bl_count[xt+1]+=2,ct.bl_count[un]--,vr-=2}while(0<vr);for(xt=un;xt!==0;xt--)for(re=ct.bl_count[xt];re!==0;)Aa<(cn=ct.heap[--ln])||(de[2*cn+1]!==xt&&(ct.opt_len+=(xt-de[2*cn+1])*de[2*cn],de[2*cn+1]=xt),re--)}}($,O),at(Y,bt,$.bl_count)}function m($,O,W){var q,I,Y=-1,Q=O[1],Z=0,rt=7,bt=4;for(Q===0&&(rt=138,bt=3),O[2*(W+1)+1]=65535,q=0;q<=W;q++)I=Q,Q=O[2*(q+1)+1],++Z<rt&&I===Q||(Z<bt?$.bl_tree[2*I]+=Z:I!==0?(I!==Y&&$.bl_tree[2*I]++,$.bl_tree[2*x]++):Z<=10?$.bl_tree[2*E]++:$.bl_tree[2*A]++,Y=I,bt=(Z=0)===Q?(rt=138,3):I===Q?(rt=6,3):(rt=7,4))}function U($,O,W){var q,I,Y=-1,Q=O[1],Z=0,rt=7,bt=4;for(Q===0&&(rt=138,bt=3),q=0;q<=W;q++)if(I=Q,Q=O[2*(q+1)+1],!(++Z<rt&&I===Q)){if(Z<bt)for(;X($,I,$.bl_tree),--Z!=0;);else I!==0?(I!==Y&&(X($,I,$.bl_tree),Z--),X($,x,$.bl_tree),K($,Z-3,2)):Z<=10?(X($,E,$.bl_tree),K($,Z-3,3)):(X($,A,$.bl_tree),K($,Z-11,7));Y=I,bt=(Z=0)===Q?(rt=138,3):I===Q?(rt=6,3):(rt=7,4)}}l(V);var M=!1;function k($,O,W,q){K($,(u<<1)+(q?1:0),3),function(I,Y,Q,Z){lt(I),nt(I,Q),nt(I,~Q),s.arraySet(I.pending_buf,I.window,Y,Q,I.pending),I.pending+=Q}($,O,W)}n._tr_init=function($){M||(function(){var O,W,q,I,Y,Q=new Array(v+1);for(I=q=0;I<d-1;I++)for(j[I]=q,O=0;O<1<<T[I];O++)y[q++]=I;for(y[q-1]=I,I=Y=0;I<16;I++)for(V[I]=Y,O=0;O<1<<D[I];O++)R[Y++]=I;for(Y>>=7;I<h;I++)for(V[I]=Y<<7,O=0;O<1<<D[I]-7;O++)R[256+Y++]=I;for(W=0;W<=v;W++)Q[W]=0;for(O=0;O<=143;)G[2*O+1]=8,O++,Q[8]++;for(;O<=255;)G[2*O+1]=9,O++,Q[9]++;for(;O<=279;)G[2*O+1]=7,O++,Q[7]++;for(;O<=287;)G[2*O+1]=8,O++,Q[8]++;for(at(G,f+1,Q),O=0;O<h;O++)C[2*O+1]=5,C[2*O]=ot(O,5);tt=new it(G,T,c+1,f,v),H=new it(C,D,0,h,v),et=new it(new Array(0),S,0,g,_)}(),M=!0),$.l_desc=new L($.dyn_ltree,tt),$.d_desc=new L($.dyn_dtree,H),$.bl_desc=new L($.bl_tree,et),$.bi_buf=0,$.bi_valid=0,st($)},n._tr_stored_block=k,n._tr_flush_block=function($,O,W,q){var I,Y,Q=0;0<$.level?($.strm.data_type===2&&($.strm.data_type=function(Z){var rt,bt=4093624447;for(rt=0;rt<=31;rt++,bt>>>=1)if(1&bt&&Z.dyn_ltree[2*rt]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return a;for(rt=32;rt<c;rt++)if(Z.dyn_ltree[2*rt]!==0)return a;return o}($)),Kt($,$.l_desc),Kt($,$.d_desc),Q=function(Z){var rt;for(m(Z,Z.dyn_ltree,Z.l_desc.max_code),m(Z,Z.dyn_dtree,Z.d_desc.max_code),Kt(Z,Z.bl_desc),rt=g-1;3<=rt&&Z.bl_tree[2*z[rt]+1]===0;rt--);return Z.opt_len+=3*(rt+1)+5+5+4,rt}($),I=$.opt_len+3+7>>>3,(Y=$.static_len+3+7>>>3)<=I&&(I=Y)):I=Y=W+5,W+4<=I&&O!==-1?k($,O,W,q):$.strategy===4||Y===I?(K($,2+(q?1:0),3),ne($,G,C)):(K($,4+(q?1:0),3),function(Z,rt,bt,ct){var jt;for(K(Z,rt-257,5),K(Z,bt-1,5),K(Z,ct-4,4),jt=0;jt<ct;jt++)K(Z,Z.bl_tree[2*z[jt]+1],3);U(Z,Z.dyn_ltree,rt-1),U(Z,Z.dyn_dtree,bt-1)}($,$.l_desc.max_code+1,$.d_desc.max_code+1,Q+1),ne($,$.dyn_ltree,$.dyn_dtree)),st($),q&&lt($)},n._tr_tally=function($,O,W){return $.pending_buf[$.d_buf+2*$.last_lit]=O>>>8&255,$.pending_buf[$.d_buf+2*$.last_lit+1]=255&O,$.pending_buf[$.l_buf+$.last_lit]=255&W,$.last_lit++,O===0?$.dyn_ltree[2*W]++:($.matches++,O--,$.dyn_ltree[2*(y[W]+c+1)]++,$.dyn_dtree[2*P(O)]++),$.last_lit===$.lit_bufsize-1},n._tr_align=function($){K($,2,3),X($,w,G),function(O){O.bi_valid===16?(nt(O,O.bi_buf),O.bi_buf=0,O.bi_valid=0):8<=O.bi_valid&&(O.pending_buf[O.pending++]=255&O.bi_buf,O.bi_buf>>=8,O.bi_valid-=8)}($)}},{"../utils/common":41}],53:[function(e,r,n){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,r,n){(function(s){(function(o,a){if(!o.setImmediate){var l,u,d,c,f=1,h={},g=!1,p=o.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(o);v=v&&v.setTimeout?v:o,l={}.toString.call(o.process)==="[object process]"?function(x){process.nextTick(function(){_(x)})}:function(){if(o.postMessage&&!o.importScripts){var x=!0,E=o.onmessage;return o.onmessage=function(){x=!1},o.postMessage("","*"),o.onmessage=E,x}}()?(c="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",w,!1):o.attachEvent("onmessage",w),function(x){o.postMessage(c+x,"*")}):o.MessageChannel?((d=new MessageChannel).port1.onmessage=function(x){_(x.data)},function(x){d.port2.postMessage(x)}):p&&"onreadystatechange"in p.createElement("script")?(u=p.documentElement,function(x){var E=p.createElement("script");E.onreadystatechange=function(){_(x),E.onreadystatechange=null,u.removeChild(E),E=null},u.appendChild(E)}):function(x){setTimeout(_,0,x)},v.setImmediate=function(x){typeof x!="function"&&(x=new Function(""+x));for(var E=new Array(arguments.length-1),A=0;A<E.length;A++)E[A]=arguments[A+1];var T={callback:x,args:E};return h[f]=T,l(f),f++},v.clearImmediate=b}function b(x){delete h[x]}function _(x){if(g)setTimeout(_,0,x);else{var E=h[x];if(E){g=!0;try{(function(A){var T=A.callback,D=A.args;switch(D.length){case 0:T();break;case 1:T(D[0]);break;case 2:T(D[0],D[1]);break;case 3:T(D[0],D[1],D[2]);break;default:T.apply(a,D)}})(E)}finally{b(x),g=!1}}}}function w(x){x.source===o&&typeof x.data=="string"&&x.data.indexOf(c)===0&&_(+x.data.slice(c.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Zh);var R_=Zh.exports;const M_=L_(R_),bi=document.createElement("input"),D_=i=>new Promise(t=>{bi.type="file",bi.accept=i,bi.multiple=!1,bi.onchange=()=>{const e=bi.files;if(!(e&&e[0])){t(null);return}const r=e[0];t(r)},bi.click()}),j_=i=>{const[t]=jy.loadIfc({components:i});t.label="IFC",t.tooltipTitle="Load IFC",t.tooltipText="Loads an IFC file into the scene. The IFC gets automatically converted to Fragments.";const e=i.get(Ut),r=i.get(Wt),n=async()=>{const a=await D_(".zip");if(!a)return;const l=await a.arrayBuffer(),u=new M_;await u.loadAsync(l);const d=u.file("geometry.frag");if(!d){alert("No geometry found in the file!");return}const c=await d.async("uint8array");let f;const h=u.file("properties.json");if(h){const v=await h.async("string");f=JSON.parse(v)}let g;const p=u.file("relations-map.json");if(p){const v=await p.async("string");g=r.getRelationsMapFromJSON(v)}e.load(c,{properties:f,relationsMap:g})},s=i.get(wc);async function o(){const a=document.createElement("input");a.type="file",a.accept=".json",a.multiple=!0,a.addEventListener("change",async()=>{if(!a.files)return;const l={};for(const d of a.files){const{name:c}=d,f=c.replace("-processed.json","").replace("-processed-properties.json","");l[f]||(l[f]={geometry:new File([],"asd")}),c.includes("-processed.json")?l[f].geometry=d:c.includes("-processed-properties.json")&&(l[f].properties=d)}const u=[];for(const d in l){const c=l[d];c.geometry&&u.push(c)}for(const d of u){const{geometry:c,properties:f}=d,h=JSON.parse(await c.text());let g;f&&(g=JSON.parse(await f.text()));try{s.load(h,!0,g)}catch(p){alert(p)}}}),a.click()}return Rt.create(()=>J`
      <bim-toolbar-section label="Import" icon="solar:import-bold">
        ${t}
        <bim-button @click=${n} label="Fragments" icon="fluent:puzzle-cube-piece-20-filled" tooltip-title="Load Fragments"
          tooltip-text="Loads a pre-converted IFC from a Fragments file. Use this option if you want to avoid the conversion from IFC to Fragments."></bim-button>
        <!-- <bim-button @click=${o} label="Tiles" icon="fe:tiled" tooltip-title="Load BIM Tiles"
        tooltip-text="Loads a pre-converted IFC from a Tiles file to stream the model. Perfect for big models."></bim-button> -->
      </bim-toolbar-section>
    `)},F_=i=>{const{camera:t}=i,e=()=>{t instanceof ds&&i.meshes.size>0&&t.fit(i.meshes,.5)},r=n=>{const s=n.target;t.enabled=!t.enabled,s.active=!t.enabled,s.label=t.enabled?"Disable":"Enable",s.icon=t.enabled?"tabler:lock-filled":"majesticons:unlock-open"};return Rt.create(()=>J`
      <bim-toolbar-section label="Camera" icon="ph:camera-fill" style="pointer-events: auto">
        <bim-button label="Fit Model" icon="material-symbols:fit-screen-rounded" @click=${e}></bim-button>
        <bim-button label="Disable" icon="tabler:lock-filled" @click=${r} .active=${!t.enabled}></bim-button>
        <!-- <bim-dropdown required>
          <bim-option label="Perspective"></bim-option>
          <bim-option label="Orthographic"></bim-option>
        </bim-dropdown> -->
      </bim-toolbar-section>
    `)},B_=(i,t)=>{const e=i.get(Bi),r=i.get(Fo),n=i.get(Ut),s=()=>{const u=e.selection.select;if(Object.keys(u).length!==0)for(const d in u){const c=n.list.get(d);if(!c)continue;const f=u[d];for(const h of f)c.hiddenItems.has(h)?c.setVisibility(!0,[h]):c.setVisibility(!1,[h])}},o=()=>{const u=e.selection.select;if(Object.keys(u).length!==0){for(const[,d]of n.list){d.setVisibility(!1);const c=i.get(ro);for(const[,f]of c.list){const h=f.colorMeshes.get(d.id);h&&(h.count=d.mesh.count)}}r.set(!0,u)}},a=()=>{for(const[,u]of n.list){u.setVisibility(!0);const d=i.get(ro);for(const[,c]of d.list){const f=c.colorMeshes.get(u.id);f&&(f.count=u.mesh.count)}}},l=async()=>{if(!t||!t.camera.hasCameraControls())return;const u=i.get(gf),d=i.get(Ut);u.reset();const c=e.selection.select;if(!Object.keys(c).length)return;for(const A in c){const T=d.list.get(A);if(!T)continue;const D=c[A];u.addMesh(T.mesh,D)}const f=u.getSphere(),h=1/0,g=-1/0,{x:p,y:v,z:b}=f.center,_=f.radius===h||p===h||v===h||b===h,w=f.radius===g||p===g||v===g||b===g,x=f.radius===0;if(_||w||x)return;f.radius*=1.2,await t.camera.controls.fitToSphere(f,!0)};return Rt.create(()=>J`
      <bim-toolbar-section label="Selection" icon="ph:cursor-fill">
        <bim-button @click=${a} label="Show All" icon="tabler:eye-filled" tooltip-title="Show All" tooltip-text="Shows all elements in all models."></bim-button>
        <bim-button @click=${s} label="Toggle Visibility" icon="tabler:square-toggle" tooltip-title="Toggle Visibility" tooltip-text="From the current selection, hides visible elements and shows hidden elements."></bim-button>
        <bim-button @click=${o} label="Isolate" icon="prime:filter-fill" tooltip-title="Isolate" tooltip-text="Isolates the current selection."></bim-button>
        <bim-button @click=${l} label="Focus" icon="ri:focus-mode" tooltip-title="Focus" tooltip-text="Focus the camera to the current selection."></bim-button>
      </bim-toolbar-section> 
    `)};ta.init();const Et=new vf,U_=Et.get(qn),gt=U_.create();gt.name="Main";gt.scene=new Do(Et);gt.scene.setup();gt.scene.three.background=null;const Ms=Rt.create(()=>J`
    <bim-viewport>
      <bim-grid floating></bim-grid>
    </bim-viewport>
  `);gt.renderer=new _t(Et,Ms);const{postproduction:Ds}=gt.renderer;gt.camera=new ds(Et);const js=Et.get(jo).create(gt);js.material.uniforms.uColor.value=new ai(4342338);js.material.uniforms.uSize1.value=2;js.material.uniforms.uSize2.value=8;const H_=()=>{gt.renderer?.resize(),gt.camera.updateAspect()};Ms.addEventListener("resize",H_);Et.init();Ds.enabled=!0;Ds.customEffects.excludedMeshes.push(js.three);Ds.setPasses({custom:!0,ao:!0,gamma:!0});Ds.customEffects.lineColor=1513756;const V_=Et.get(Yh),Ea=Ms.querySelector("bim-grid[floating]");V_.grids.set("viewport",Ea);const Xh=Et.get(Ut),W_=Et.get(Wt),Jh=Et.get(An);Jh.list.CustomSelections={};const Kh=Et.get(_c);await Kh.setup();const an=Et.get(wc);an.url="../resources/tiles/";an.world=gt;an.culler.threshold=10;an.culler.maxHiddenTime=1e3;an.culler.maxLostTime=4e4;const Qh=Et.get(Bi);Qh.setup({world:gt});Qh.zoomToSelection=!0;const Sa=Et.get(ro).create(gt);Sa.threshold=5;gt.camera.controls.restThreshold=.25;gt.camera.controls.addEventListener("rest",()=>{Sa.needsUpdate=!0,an.culler.needsUpdate=!0});Xh.onFragmentsLoaded.add(async i=>{i.hasProperties&&(await W_.process(i),Jh.byEntity(i));for(const t of i.items)gt.meshes.add(t.mesh),Sa.add(t.mesh);gt.scene.three.add(i),setTimeout(async()=>{gt.camera.fit(gt.meshes,.8)},50)});Xh.onFragmentsDisposed.add(({fragmentIDs:i})=>{for(const t of i){const e=[...gt.meshes].find(r=>r.uuid===t);e&&gt.meshes.delete(e)}});window.addEventListener("message",async i=>{if(!["https://buccbv.sharepoint.com/","https://localhost:4321"].includes(i.origin)){console.warn("Unauthorized origin:",i.origin);return}try{if(i.data instanceof ArrayBuffer){const e=new CustomEvent("ifcLoadEvent",{detail:{name:"openModel",payload:{name:"SharePointModel",buffer:i.data}}});window.dispatchEvent(e)}}catch(e){console.error("Error processing message:",e)}},!1);window.addEventListener("ifcLoadEvent",async i=>{const{name:t,payload:e}=i.detail;if(t==="openModel"){const{name:r,buffer:n}=e;console.log("Received IFC buffer:",n);const s=await Kh.load(n,r);gt.scene.three.add(s)}});const q_=I_(Et),G_=P_(Et),yc=Rt.create(()=>J`
    <bim-toolbar>
      ${j_(Et)}
      ${F_(gt)}
      ${B_(Et,gt)}
    </bim-toolbar>
  `),Y_=Rt.create(()=>J`
    <bim-tabs switchers-full>
      <bim-tab name="project" label="Project" icon="ph:building-fill">
        ${q_}
      </bim-tab>
      <bim-tab name="settings" label="Settings" icon="solar:settings-bold">
        ${N_(Et)}
      </bim-tab>
    </bim-tabs> 
  `),tf=document.getElementById("app");tf.layouts={main:{template:`
      "leftPanel viewport" 1fr
      /26rem 1fr
    `,elements:{leftPanel:Y_,viewport:Ms}}};tf.layout="main";Ea.layouts={main:{template:`
      "empty" 1fr
      "toolbar" auto
      /1fr
    `,elements:{toolbar:yc}},second:{template:`
      "empty elementDataPanel" 1fr
      "toolbar elementDataPanel" auto
      /1fr 24rem
    `,elements:{toolbar:yc,elementDataPanel:G_}}};Ea.layout="main";
//# sourceMappingURL=index-DoSP0NS5.js.map
