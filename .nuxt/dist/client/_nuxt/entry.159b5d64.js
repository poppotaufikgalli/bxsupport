function ac(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Ks(e){if(G(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ee(r)?Cm(r):Ks(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Ee(e))return e;if(me(e))return e}}const Tm=/;(?![^(]*\))/g,Im=/:([^]+)/,Am=/\/\*.*?\*\//gs;function Cm(e){const t={};return e.replace(Am,"").split(Tm).forEach(n=>{if(n){const r=n.split(Im);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ws(e){let t="";if(Ee(e))t=e;else if(G(e))for(let n=0;n<e.length;n++){const r=Ws(e[n]);r&&(t+=r+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function _S(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ee(t)&&(e.class=Ws(t)),n&&(e.style=Ks(n)),e}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",km=ac(Rm);function ih(e){return!!e||e===""}const wS=e=>Ee(e)?e:e==null?"":G(e)||me(e)&&(e.toString===ah||!Q(e.toString))?JSON.stringify(e,sh,2):String(e),sh=(e,t)=>t&&t.__v_isRef?sh(e,t.value):ir(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:oh(t)?{[`Set(${t.size})`]:[...t.values()]}:me(t)&&!G(t)&&!ch(t)?String(t):t,ge={},rr=[],bt=()=>{},Sm=()=>!1,Pm=/^on[^a-z]/,Ei=e=>Pm.test(e),cc=e=>e.startsWith("onUpdate:"),Ne=Object.assign,lc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Om=Object.prototype.hasOwnProperty,se=(e,t)=>Om.call(e,t),G=Array.isArray,ir=e=>bi(e)==="[object Map]",oh=e=>bi(e)==="[object Set]",Dm=e=>bi(e)==="[object RegExp]",Q=e=>typeof e=="function",Ee=e=>typeof e=="string",uc=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",fc=e=>me(e)&&Q(e.then)&&Q(e.catch),ah=Object.prototype.toString,bi=e=>ah.call(e),Nm=e=>bi(e).slice(8,-1),ch=e=>bi(e)==="[object Object]",hc=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kr=ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Mm=/-(\w)/g,Mt=Vs(e=>e.replace(Mm,(t,n)=>n?n.toUpperCase():"")),Lm=/\B([A-Z])/g,br=Vs(e=>e.replace(Lm,"-$1").toLowerCase()),qs=Vs(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ro=Vs(e=>e?`on${qs(e)}`:""),ei=(e,t)=>!Object.is(e,t),Wr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ds=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xm=e=>{const t=parseFloat(e);return isNaN(t)?e:t},lh=e=>{const t=Ee(e)?Number(e):NaN;return isNaN(t)?e:t};let jl;const $m=()=>jl||(jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class Um{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!t&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=_t;try{return _t=this,t()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Fm(e,t=_t){t&&t.active&&t.effects.push(e)}function Hm(){return _t}const dc=e=>{const t=new Set(e);return t.w=0,t.n=0,t},uh=e=>(e.w&yn)>0,fh=e=>(e.n&yn)>0,jm=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=yn},Bm=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];uh(i)&&!fh(i)?i.delete(e):t[n++]=i,i.w&=~yn,i.n&=~yn}t.length=n}},ps=new WeakMap;let $r=0,yn=1;const pa=30;let wt;const Ln=Symbol(""),ga=Symbol("");class pc{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fm(this,r)}run(){if(!this.active)return this.fn();let t=wt,n=fn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=wt,wt=this,fn=!0,yn=1<<++$r,$r<=pa?jm(this):Bl(this),this.fn()}finally{$r<=pa&&Bm(this),yn=1<<--$r,wt=this.parent,fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Bl(this),this.onStop&&this.onStop(),this.active=!1)}}function Bl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let fn=!0;const hh=[];function Tr(){hh.push(fn),fn=!1}function Ir(){const e=hh.pop();fn=e===void 0?!0:e}function Xe(e,t,n){if(fn&&wt){let r=ps.get(e);r||ps.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=dc()),dh(i)}}function dh(e,t){let n=!1;$r<=pa?fh(e)||(e.n|=yn,n=!uh(e)):n=!e.has(wt),n&&(e.add(wt),wt.deps.push(e))}function Vt(e,t,n,r,i,s){const o=ps.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&G(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":G(e)?hc(n)&&a.push(o.get("length")):(a.push(o.get(Ln)),ir(e)&&a.push(o.get(ga)));break;case"delete":G(e)||(a.push(o.get(Ln)),ir(e)&&a.push(o.get(ga)));break;case"set":ir(e)&&a.push(o.get(Ln));break}if(a.length===1)a[0]&&ma(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ma(dc(c))}}function ma(e,t){const n=G(e)?e:[...e];for(const r of n)r.computed&&Kl(r);for(const r of n)r.computed||Kl(r)}function Kl(e,t){(e!==wt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Km(e,t){var n;return(n=ps.get(e))===null||n===void 0?void 0:n.get(t)}const Wm=ac("__proto__,__v_isRef,__isVue"),ph=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(uc)),Vm=gc(),qm=gc(!1,!0),zm=gc(!0),Wl=Gm();function Gm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=oe(this);for(let s=0,o=this.length;s<o;s++)Xe(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(oe)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tr();const r=oe(this)[t].apply(this,n);return Ir(),r}}),e}function Jm(e){const t=oe(this);return Xe(t,"has",e),t.hasOwnProperty(e)}function gc(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?fy:_h:t?vh:yh).get(r))return r;const o=G(r);if(!e){if(o&&se(Wl,i))return Reflect.get(Wl,i,s);if(i==="hasOwnProperty")return Jm}const a=Reflect.get(r,i,s);return(uc(i)?ph.has(i):Wm(i))||(e||Xe(r,"get",i),t)?a:Ie(a)?o&&hc(i)?a:a.value:me(a)?e?gs(a):Lt(a):a}}const Xm=gh(),Ym=gh(!0);function gh(e=!1){return function(n,r,i,s){let o=n[r];if(Un(o)&&Ie(o)&&!Ie(i))return!1;if(!e&&(!ms(i)&&!Un(i)&&(o=oe(o),i=oe(i)),!G(n)&&Ie(o)&&!Ie(i)))return o.value=i,!0;const a=G(n)&&hc(r)?Number(r)<n.length:se(n,r),c=Reflect.set(n,r,i,s);return n===oe(s)&&(a?ei(i,o)&&Vt(n,"set",r,i):Vt(n,"add",r,i)),c}}function Qm(e,t){const n=se(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Vt(e,"delete",t,void 0),r}function Zm(e,t){const n=Reflect.has(e,t);return(!uc(t)||!ph.has(t))&&Xe(e,"has",t),n}function ey(e){return Xe(e,"iterate",G(e)?"length":Ln),Reflect.ownKeys(e)}const mh={get:Vm,set:Xm,deleteProperty:Qm,has:Zm,ownKeys:ey},ty={get:zm,set(e,t){return!0},deleteProperty(e,t){return!0}},ny=Ne({},mh,{get:qm,set:Ym}),mc=e=>e,zs=e=>Reflect.getPrototypeOf(e);function Ki(e,t,n=!1,r=!1){e=e.__v_raw;const i=oe(e),s=oe(t);n||(t!==s&&Xe(i,"get",t),Xe(i,"get",s));const{has:o}=zs(i),a=r?mc:n?_c:ti;if(o.call(i,t))return a(e.get(t));if(o.call(i,s))return a(e.get(s));e!==i&&e.get(t)}function Wi(e,t=!1){const n=this.__v_raw,r=oe(n),i=oe(e);return t||(e!==i&&Xe(r,"has",e),Xe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Vi(e,t=!1){return e=e.__v_raw,!t&&Xe(oe(e),"iterate",Ln),Reflect.get(e,"size",e)}function Vl(e){e=oe(e);const t=oe(this);return zs(t).has.call(t,e)||(t.add(e),Vt(t,"add",e,e)),this}function ql(e,t){t=oe(t);const n=oe(this),{has:r,get:i}=zs(n);let s=r.call(n,e);s||(e=oe(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?ei(t,o)&&Vt(n,"set",e,t):Vt(n,"add",e,t),this}function zl(e){const t=oe(this),{has:n,get:r}=zs(t);let i=n.call(t,e);i||(e=oe(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&Vt(t,"delete",e,void 0),s}function Gl(){const e=oe(this),t=e.size!==0,n=e.clear();return t&&Vt(e,"clear",void 0,void 0),n}function qi(e,t){return function(r,i){const s=this,o=s.__v_raw,a=oe(o),c=t?mc:e?_c:ti;return!e&&Xe(a,"iterate",Ln),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function zi(e,t,n){return function(...r){const i=this.__v_raw,s=oe(i),o=ir(s),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...r),u=n?mc:t?_c:ti;return!t&&Xe(s,"iterate",c?ga:Ln),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Qt(e){return function(...t){return e==="delete"?!1:this}}function ry(){const e={get(s){return Ki(this,s)},get size(){return Vi(this)},has:Wi,add:Vl,set:ql,delete:zl,clear:Gl,forEach:qi(!1,!1)},t={get(s){return Ki(this,s,!1,!0)},get size(){return Vi(this)},has:Wi,add:Vl,set:ql,delete:zl,clear:Gl,forEach:qi(!1,!0)},n={get(s){return Ki(this,s,!0)},get size(){return Vi(this,!0)},has(s){return Wi.call(this,s,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:qi(!0,!1)},r={get(s){return Ki(this,s,!0,!0)},get size(){return Vi(this,!0)},has(s){return Wi.call(this,s,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zi(s,!1,!1),n[s]=zi(s,!0,!1),t[s]=zi(s,!1,!0),r[s]=zi(s,!0,!0)}),[e,n,t,r]}const[iy,sy,oy,ay]=ry();function yc(e,t){const n=t?e?ay:oy:e?sy:iy;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(se(n,i)&&i in r?n:r,i,s)}const cy={get:yc(!1,!1)},ly={get:yc(!1,!0)},uy={get:yc(!0,!1)},yh=new WeakMap,vh=new WeakMap,_h=new WeakMap,fy=new WeakMap;function hy(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dy(e){return e.__v_skip||!Object.isExtensible(e)?0:hy(Nm(e))}function Lt(e){return Un(e)?e:vc(e,!1,mh,cy,yh)}function py(e){return vc(e,!1,ny,ly,vh)}function gs(e){return vc(e,!0,ty,uy,_h)}function vc(e,t,n,r,i){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=dy(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return i.set(e,a),a}function sr(e){return Un(e)?sr(e.__v_raw):!!(e&&e.__v_isReactive)}function Un(e){return!!(e&&e.__v_isReadonly)}function ms(e){return!!(e&&e.__v_isShallow)}function wh(e){return sr(e)||Un(e)}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function Eh(e){return ds(e,"__v_skip",!0),e}const ti=e=>me(e)?Lt(e):e,_c=e=>me(e)?gs(e):e;function bh(e){fn&&wt&&(e=oe(e),dh(e.dep||(e.dep=dc())))}function Th(e,t){e=oe(e);const n=e.dep;n&&ma(n)}function Ie(e){return!!(e&&e.__v_isRef===!0)}function hn(e){return Ih(e,!1)}function ya(e){return Ih(e,!0)}function Ih(e,t){return Ie(e)?e:new gy(e,t)}class gy{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:oe(t),this._value=n?t:ti(t)}get value(){return bh(this),this._value}set value(t){const n=this.__v_isShallow||ms(t)||Un(t);t=n?t:oe(t),ei(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ti(t),Th(this))}}function Pe(e){return Ie(e)?e.value:e}const my={get:(e,t,n)=>Pe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ah(e){return sr(e)?e:new Proxy(e,my)}class yy{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Km(oe(this._object),this._key)}}function Ch(e,t,n){const r=e[t];return Ie(r)?r:new yy(e,t,n)}var Rh;class vy{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Rh]=!1,this._dirty=!0,this.effect=new pc(t,()=>{this._dirty||(this._dirty=!0,Th(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=oe(this);return bh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Rh="__v_isReadonly";function _y(e,t,n=!1){let r,i;const s=Q(e);return s?(r=e,i=bt):(r=e.get,i=e.set),new vy(r,i,s||!i,n)}function dn(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Ar(s,t,n)}return i}function dt(e,t,n,r){if(Q(e)){const s=dn(e,t,n,r);return s&&fc(s)&&s.catch(o=>{Ar(o,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(dt(e[s],t,n,r));return i}function Ar(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){dn(c,null,10,[e,o,a]);return}}wy(e,n,i,r)}function wy(e,t,n,r=!0){console.error(e)}let ni=!1,va=!1;const xe=[];let kt=0;const or=[];let Ft=null,Sn=0;const kh=Promise.resolve();let wc=null;function Cr(e){const t=wc||kh;return e?t.then(this?e.bind(this):e):t}function Ey(e){let t=kt+1,n=xe.length;for(;t<n;){const r=t+n>>>1;ri(xe[r])<e?t=r+1:n=r}return t}function Gs(e){(!xe.length||!xe.includes(e,ni&&e.allowRecurse?kt+1:kt))&&(e.id==null?xe.push(e):xe.splice(Ey(e.id),0,e),Sh())}function Sh(){!ni&&!va&&(va=!0,wc=kh.then(Oh))}function by(e){const t=xe.indexOf(e);t>kt&&xe.splice(t,1)}function Ph(e){G(e)?or.push(...e):(!Ft||!Ft.includes(e,e.allowRecurse?Sn+1:Sn))&&or.push(e),Sh()}function Jl(e,t=ni?kt+1:0){for(;t<xe.length;t++){const n=xe[t];n&&n.pre&&(xe.splice(t,1),t--,n())}}function ys(e){if(or.length){const t=[...new Set(or)];if(or.length=0,Ft){Ft.push(...t);return}for(Ft=t,Ft.sort((n,r)=>ri(n)-ri(r)),Sn=0;Sn<Ft.length;Sn++)Ft[Sn]();Ft=null,Sn=0}}const ri=e=>e.id==null?1/0:e.id,Ty=(e,t)=>{const n=ri(e)-ri(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Oh(e){va=!1,ni=!0,xe.sort(Ty);const t=bt;try{for(kt=0;kt<xe.length;kt++){const n=xe[kt];n&&n.active!==!1&&dn(n,null,14)}}finally{kt=0,xe.length=0,ys(),ni=!1,wc=null,(xe.length||or.length)&&Oh()}}function Iy(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ge;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||ge;h&&(i=n.map(p=>Ee(p)?p.trim():p)),f&&(i=n.map(xm))}let a,c=r[a=Ro(t)]||r[a=Ro(Mt(t))];!c&&s&&(c=r[a=Ro(br(t))]),c&&dt(c,e,6,i);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,dt(l,e,6,i)}}function Dh(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let o={},a=!1;if(!Q(e)){const c=l=>{const u=Dh(l,t,!0);u&&(a=!0,Ne(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!a?(me(e)&&r.set(e,null),null):(G(s)?s.forEach(c=>o[c]=null):Ne(o,s),me(e)&&r.set(e,o),o)}function Js(e,t){return!e||!Ei(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,br(t))||se(e,t))}let ft=null,Xs=null;function vs(e){const t=ft;return ft=e,Xs=e&&e.type.__scopeId||null,t}function ES(e){Xs=e}function bS(){Xs=null}function Ec(e,t=ft,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ou(-1);const s=vs(t);let o;try{o=e(...i)}finally{vs(s),r._d&&ou(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ko(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:p,ctx:y,inheritAttrs:I}=e;let b,_;const g=vs(e);try{if(n.shapeFlag&4){const w=i||r;b=lt(u.call(w,w,f,s,p,h,y)),_=c}else{const w=t;b=lt(w.length>1?w(s,{attrs:c,slots:a,emit:l}):w(s,null)),_=t.props?c:Cy(c)}}catch(w){qr.length=0,Ar(w,e,1),b=we(ze)}let v=b;if(_&&I!==!1){const w=Object.keys(_),{shapeFlag:A}=v;w.length&&A&7&&(o&&w.some(cc)&&(_=Ry(_,o)),v=qt(v,_))}return n.dirs&&(v=qt(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),b=v,vs(g),b}function Ay(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(si(r)){if(r.type!==ze||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Cy=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ei(n))&&((t||(t={}))[n]=e[n]);return t},Ry=(e,t)=>{const n={};for(const r in e)(!cc(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ky(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xl(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Js(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xl(r,o,l):!0:!!o;return!1}function Xl(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Js(n,s))return!0}return!1}function bc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Nh=e=>e.__isSuspense,Sy={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,s,o,a,c,l){e==null?Py(t,n,r,i,s,o,a,c,l):Oy(e,t,n,r,i,o,a,c,l)},hydrate:Dy,create:Tc,normalize:Ny},Mh=Sy;function ii(e,t){const n=e.props&&e.props[t];Q(n)&&n()}function Py(e,t,n,r,i,s,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),h=e.suspense=Tc(e,i,r,t,f,n,s,o,a,c);l(null,h.pendingBranch=e.ssContent,f,null,r,h,s,o),h.deps>0?(ii(e,"onPending"),ii(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,s,o),ar(h,e.ssFallback)):h.resolve()}function Oy(e,t,n,r,i,s,o,a,{p:c,um:l,o:{createElement:u}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const h=t.ssContent,p=t.ssFallback,{activeBranch:y,pendingBranch:I,isInFallback:b,isHydrating:_}=f;if(I)f.pendingBranch=h,Et(h,I)?(c(I,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0?f.resolve():b&&(c(y,p,n,r,i,null,s,o,a),ar(f,p))):(f.pendingId++,_?(f.isHydrating=!1,f.activeBranch=I):l(I,i,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),b?(c(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0?f.resolve():(c(y,p,n,r,i,null,s,o,a),ar(f,p))):y&&Et(h,y)?(c(y,h,n,r,i,f,s,o,a),f.resolve(!0)):(c(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0&&f.resolve()));else if(y&&Et(h,y))c(y,h,n,r,i,f,s,o,a),ar(f,h);else if(ii(t,"onPending"),f.pendingBranch=h,f.pendingId++,c(null,h,f.hiddenContainer,null,i,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:g,pendingId:v}=f;g>0?setTimeout(()=>{f.pendingId===v&&f.fallback(p)},g):g===0&&f.fallback(p)}}function Tc(e,t,n,r,i,s,o,a,c,l,u=!1){const{p:f,m:h,um:p,n:y,o:{parentNode:I,remove:b}}=l,_=e.props?lh(e.props.timeout):void 0,g={vnode:e,parent:t,parentComponent:n,isSVG:o,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:w,activeBranch:A,pendingBranch:N,pendingId:F,effects:S,parentComponent:K,container:B}=g;if(g.isHydrating)g.isHydrating=!1;else if(!v){const Z=A&&N.transition&&N.transition.mode==="out-in";Z&&(A.transition.afterLeave=()=>{F===g.pendingId&&h(N,B,H,0)});let{anchor:H}=g;A&&(H=y(A),p(A,K,g,!0)),Z||h(N,B,H,0)}ar(g,N),g.pendingBranch=null,g.isInFallback=!1;let z=g.parent,$=!1;for(;z;){if(z.pendingBranch){z.effects.push(...S),$=!0;break}z=z.parent}$||Ph(S),g.effects=[],ii(w,"onResolve")},fallback(v){if(!g.pendingBranch)return;const{vnode:w,activeBranch:A,parentComponent:N,container:F,isSVG:S}=g;ii(w,"onFallback");const K=y(A),B=()=>{g.isInFallback&&(f(null,v,F,K,N,null,S,a,c),ar(g,v))},z=v.transition&&v.transition.mode==="out-in";z&&(A.transition.afterLeave=B),g.isInFallback=!0,p(A,N,null,!0),z||B()},move(v,w,A){g.activeBranch&&h(g.activeBranch,v,w,A),g.container=v},next(){return g.activeBranch&&y(g.activeBranch)},registerDep(v,w){const A=!!g.pendingBranch;A&&g.deps++;const N=v.vnode.el;v.asyncDep.catch(F=>{Ar(F,v,0)}).then(F=>{if(v.isUnmounted||g.isUnmounted||g.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:S}=v;Ia(v,F,!1),N&&(S.el=N);const K=!N&&v.subTree.el;w(v,S,I(N||v.subTree.el),N?null:y(v.subTree),g,o,c),K&&b(K),bc(v,S.el),A&&--g.deps===0&&g.resolve()})},unmount(v,w){g.isUnmounted=!0,g.activeBranch&&p(g.activeBranch,n,v,w),g.pendingBranch&&p(g.pendingBranch,n,v,w)}};return g}function Dy(e,t,n,r,i,s,o,a,c){const l=t.suspense=Tc(t,r,n,e.parentNode,document.createElement("div"),null,i,s,o,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,s,o);return l.deps===0&&l.resolve(),u}function Ny(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Yl(r?n.default:n),e.ssFallback=r?Yl(n.fallback):we(ze)}function Yl(e){let t;if(Q(e)){const n=mr&&e._c;n&&(e._d=!1,On()),e=e(),n&&(e._d=!0,t=ht,nd())}return G(e)&&(e=Ay(e)),e=lt(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Lh(e,t){t&&t.pendingBranch?G(e)?t.effects.push(...e):t.effects.push(e):Ph(e)}function ar(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,i=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=i,bc(r,i))}function cr(e,t){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[e]=t}}function rt(e,t,n=!1){const r=_e||ft;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Q(t)?t.call(r.proxy):t}}function My(e,t){return Ic(e,null,t)}const Gi={};function lr(e,t,n){return Ic(e,t,n)}function Ic(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ge){const a=Hm()===(_e==null?void 0:_e.scope)?_e:null;let c,l=!1,u=!1;if(Ie(e)?(c=()=>e.value,l=ms(e)):sr(e)?(c=()=>e,r=!0):G(e)?(u=!0,l=e.some(v=>sr(v)||ms(v)),c=()=>e.map(v=>{if(Ie(v))return v.value;if(sr(v))return Yn(v);if(Q(v))return dn(v,a,2)})):Q(e)?t?c=()=>dn(e,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),dt(e,a,3,[h])}:c=bt,t&&r){const v=c;c=()=>Yn(v())}let f,h=v=>{f=_.onStop=()=>{dn(v,a,4)}},p;if(yr)if(h=bt,t?n&&dt(t,a,3,[c(),u?[]:void 0,h]):c(),i==="sync"){const v=Cv();p=v.__watcherHandles||(v.__watcherHandles=[])}else return bt;let y=u?new Array(e.length).fill(Gi):Gi;const I=()=>{if(_.active)if(t){const v=_.run();(r||l||(u?v.some((w,A)=>ei(w,y[A])):ei(v,y)))&&(f&&f(),dt(t,a,3,[v,y===Gi?void 0:u&&y[0]===Gi?[]:y,h]),y=v)}else _.run()};I.allowRecurse=!!t;let b;i==="sync"?b=I:i==="post"?b=()=>Se(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),b=()=>Gs(I));const _=new pc(c,b);t?n?I():y=_.run():i==="post"?Se(_.run.bind(_),a&&a.suspense):_.run();const g=()=>{_.stop(),a&&a.scope&&lc(a.scope.effects,_)};return p&&p.push(g),g}function Ly(e,t,n){const r=this.proxy,i=Ee(e)?e.includes(".")?xh(r,e):()=>r[e]:e.bind(r,r);let s;Q(t)?s=t:(s=t.handler,n=t);const o=_e;vn(this);const a=Ic(i,s.bind(r),n);return o?vn(o):pn(),a}function xh(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Yn(e,t){if(!me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ie(e))Yn(e.value,t);else if(G(e))for(let n=0;n<e.length;n++)Yn(e[n],t);else if(oh(e)||ir(e))e.forEach(n=>{Yn(n,t)});else if(ch(e))for(const n in e)Yn(e[n],t);return e}function xy(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qs(()=>{e.isMounted=!0}),Ii(()=>{e.isUnmounting=!0}),e}const at=[Function,Array],$y={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},setup(e,{slots:t}){const n=Vn(),r=xy();let i;return()=>{const s=t.default&&Fh(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const I of s)if(I.type!==ze){o=I;break}}const a=oe(e),{mode:c}=a;if(r.isLeaving)return So(o);const l=Ql(o);if(!l)return So(o);const u=_a(l,a,r,n);_s(l,u);const f=n.subTree,h=f&&Ql(f);let p=!1;const{getTransitionKey:y}=l.type;if(y){const I=y();i===void 0?i=I:I!==i&&(i=I,p=!0)}if(h&&h.type!==ze&&(!Et(l,h)||p)){const I=_a(h,a,r,n);if(_s(h,I),c==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},So(o);c==="in-out"&&l.type!==ze&&(I.delayLeave=(b,_,g)=>{const v=Uh(r,h);v[String(h.key)]=h,b._leaveCb=()=>{_(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},$h=$y;function Uh(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function _a(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:I,onAppear:b,onAfterAppear:_,onAppearCancelled:g}=t,v=String(e.key),w=Uh(n,e),A=(S,K)=>{S&&dt(S,r,9,K)},N=(S,K)=>{const B=K[1];A(S,K),G(S)?S.every(z=>z.length<=1)&&B():S.length<=1&&B()},F={mode:s,persisted:o,beforeEnter(S){let K=a;if(!n.isMounted)if(i)K=I||a;else return;S._leaveCb&&S._leaveCb(!0);const B=w[v];B&&Et(e,B)&&B.el._leaveCb&&B.el._leaveCb(),A(K,[S])},enter(S){let K=c,B=l,z=u;if(!n.isMounted)if(i)K=b||c,B=_||l,z=g||u;else return;let $=!1;const Z=S._enterCb=H=>{$||($=!0,H?A(z,[S]):A(B,[S]),F.delayedLeave&&F.delayedLeave(),S._enterCb=void 0)};K?N(K,[S,Z]):Z()},leave(S,K){const B=String(e.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return K();A(f,[S]);let z=!1;const $=S._leaveCb=Z=>{z||(z=!0,K(),Z?A(y,[S]):A(p,[S]),S._leaveCb=void 0,w[B]===e&&delete w[B])};w[B]=e,h?N(h,[S,$]):$()},clone(S){return _a(S,t,n,r)}};return F}function So(e){if(Ti(e))return e=qt(e),e.children=null,e}function Ql(e){return Ti(e)?e.children?e.children[0]:void 0:e}function _s(e,t){e.shapeFlag&6&&e.component?_s(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Fh(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ct?(o.patchFlag&128&&i++,r=r.concat(Fh(o.children,t,a))):(t||o.type!==ze)&&r.push(a!=null?qt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Xt(e){return Q(e)?{setup:e,name:e.name}:e}const ur=e=>!!e.type.__asyncLoader;function Uy(e){Q(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,timeout:s,suspensible:o=!0,onError:a}=e;let c=null,l,u=0;const f=()=>(u++,c=null,h()),h=()=>{let p;return c||(p=c=t().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),a)return new Promise((I,b)=>{a(y,()=>I(f()),()=>b(y),u+1)});throw y}).then(y=>p!==c&&c?c:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),l=y,y)))};return Xt({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return l},setup(){const p=_e;if(l)return()=>Po(l,p);const y=g=>{c=null,Ar(g,p,13,!r)};if(o&&p.suspense||yr)return h().then(g=>()=>Po(g,p)).catch(g=>(y(g),()=>r?we(r,{error:g}):null));const I=hn(!1),b=hn(),_=hn(!!i);return i&&setTimeout(()=>{_.value=!1},i),s!=null&&setTimeout(()=>{if(!I.value&&!b.value){const g=new Error(`Async component timed out after ${s}ms.`);y(g),b.value=g}},s),h().then(()=>{I.value=!0,p.parent&&Ti(p.parent.vnode)&&Gs(p.parent.update)}).catch(g=>{y(g),b.value=g}),()=>{if(I.value&&l)return Po(l,p);if(b.value&&r)return we(r,{error:b.value});if(n&&!_.value)return we(n)}}})}function Po(e,t){const{ref:n,props:r,children:i,ce:s}=t.vnode,o=we(e,r,i);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const Ti=e=>e.type.__isKeepAlive,Fy={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Vn(),r=n.ctx;if(!r.renderer)return()=>{const g=t.default&&t.default();return g&&g.length===1?g[0]:g};const i=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,h=f("div");r.activate=(g,v,w,A,N)=>{const F=g.component;l(g,v,w,0,a),c(F.vnode,g,v,w,F,a,A,g.slotScopeIds,N),Se(()=>{F.isDeactivated=!1,F.a&&Wr(F.a);const S=g.props&&g.props.onVnodeMounted;S&&qe(S,F.parent,g)},a)},r.deactivate=g=>{const v=g.component;l(g,h,null,1,a),Se(()=>{v.da&&Wr(v.da);const w=g.props&&g.props.onVnodeUnmounted;w&&qe(w,v.parent,g),v.isDeactivated=!0},a)};function p(g){Oo(g),u(g,n,a,!0)}function y(g){i.forEach((v,w)=>{const A=Aa(v.type);A&&(!g||!g(A))&&I(w)})}function I(g){const v=i.get(g);!o||!Et(v,o)?p(v):o&&Oo(o),i.delete(g),s.delete(g)}lr(()=>[e.include,e.exclude],([g,v])=>{g&&y(w=>Ur(g,w)),v&&y(w=>!Ur(v,w))},{flush:"post",deep:!0});let b=null;const _=()=>{b!=null&&i.set(b,Do(n.subTree))};return Qs(_),Kh(_),Ii(()=>{i.forEach(g=>{const{subTree:v,suspense:w}=n,A=Do(v);if(g.type===A.type&&g.key===A.key){Oo(A);const N=A.component.da;N&&Se(N,w);return}p(g)})}),()=>{if(b=null,!t.default)return null;const g=t.default(),v=g[0];if(g.length>1)return o=null,g;if(!si(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let w=Do(v);const A=w.type,N=Aa(ur(w)?w.type.__asyncResolved||{}:A),{include:F,exclude:S,max:K}=e;if(F&&(!N||!Ur(F,N))||S&&N&&Ur(S,N))return o=w,v;const B=w.key==null?A:w.key,z=i.get(B);return w.el&&(w=qt(w),v.shapeFlag&128&&(v.ssContent=w)),b=B,z?(w.el=z.el,w.component=z.component,w.transition&&_s(w,w.transition),w.shapeFlag|=512,s.delete(B),s.add(B)):(s.add(B),K&&s.size>parseInt(K,10)&&I(s.values().next().value)),w.shapeFlag|=256,o=w,Nh(v.type)?v:w}}},Hy=Fy;function Ur(e,t){return G(e)?e.some(n=>Ur(n,t)):Ee(e)?e.split(",").includes(t):Dm(e)?e.test(t):!1}function Hh(e,t){Bh(e,"a",t)}function jh(e,t){Bh(e,"da",t)}function Bh(e,t,n=_e){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ys(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ti(i.parent.vnode)&&jy(r,t,n,i),i=i.parent}}function jy(e,t,n,r){const i=Ys(t,e,r,!0);Wh(()=>{lc(r[t],i)},n)}function Oo(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Do(e){return e.shapeFlag&128?e.ssContent:e}function Ys(e,t,n=_e,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tr(),vn(n);const a=dt(t,n,e,o);return pn(),Ir(),a});return r?i.unshift(s):i.push(s),s}}const Yt=e=>(t,n=_e)=>(!yr||e==="sp")&&Ys(e,(...r)=>t(...r),n),By=Yt("bm"),Qs=Yt("m"),Ky=Yt("bu"),Kh=Yt("u"),Ii=Yt("bum"),Wh=Yt("um"),Wy=Yt("sp"),Vy=Yt("rtg"),qy=Yt("rtc");function Vh(e,t=_e){Ys("ec",e,t)}function Rt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Tr(),dt(c,n,8,[e.el,a,e,t]),Ir())}}const qh="components";function zy(e,t){return Jy(qh,e,!0,t)||e}const Gy=Symbol();function Jy(e,t,n=!0,r=!1){const i=ft||_e;if(i){const s=i.type;if(e===qh){const a=Aa(s,!1);if(a&&(a===t||a===Mt(t)||a===qs(Mt(t))))return s}const o=Zl(i[e]||s[e],t)||Zl(i.appContext[e],t);return!o&&r?s:o}}function Zl(e,t){return e&&(e[t]||e[Mt(t)]||e[qs(Mt(t))])}const wa=e=>e?ad(e)?kc(e)||e.proxy:wa(e.parent):null,Vr=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wa(e.parent),$root:e=>wa(e.root),$emit:e=>e.emit,$options:e=>Ac(e),$forceUpdate:e=>e.f||(e.f=()=>Gs(e.update)),$nextTick:e=>e.n||(e.n=Cr.bind(e.proxy)),$watch:e=>Ly.bind(e)}),No=(e,t)=>e!==ge&&!e.__isScriptSetup&&se(e,t),Xy={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(No(r,t))return o[t]=1,r[t];if(i!==ge&&se(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&se(l,t))return o[t]=3,s[t];if(n!==ge&&se(n,t))return o[t]=4,n[t];Ea&&(o[t]=0)}}const u=Vr[t];let f,h;if(u)return t==="$attrs"&&Xe(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ge&&se(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,se(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return No(i,t)?(i[t]=n,!0):r!==ge&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||e!==ge&&se(e,o)||No(t,o)||(a=s[0])&&se(a,o)||se(r,o)||se(Vr,o)||se(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ea=!0;function Yy(e){const t=Ac(e),n=e.proxy,r=e.ctx;Ea=!1,t.beforeCreate&&eu(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:y,activated:I,deactivated:b,beforeDestroy:_,beforeUnmount:g,destroyed:v,unmounted:w,render:A,renderTracked:N,renderTriggered:F,errorCaptured:S,serverPrefetch:K,expose:B,inheritAttrs:z,components:$,directives:Z,filters:H}=t;if(l&&Qy(l,r,null,e.appContext.config.unwrapInjectedRef),o)for(const he in o){const ue=o[he];Q(ue)&&(r[he]=ue.bind(n))}if(i){const he=i.call(n,n);me(he)&&(e.data=Lt(he))}if(Ea=!0,s)for(const he in s){const ue=s[he],mt=Q(ue)?ue.bind(n,n):Q(ue.get)?ue.get.bind(n,n):bt,Tn=!Q(ue)&&Q(ue.set)?ue.set.bind(n):bt,yt=Ce({get:mt,set:Tn});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Ve=>yt.value=Ve})}if(a)for(const he in a)zh(a[he],r,n,he);if(c){const he=Q(c)?c.call(n):c;Reflect.ownKeys(he).forEach(ue=>{cr(ue,he[ue])})}u&&eu(u,e,"c");function re(he,ue){G(ue)?ue.forEach(mt=>he(mt.bind(n))):ue&&he(ue.bind(n))}if(re(By,f),re(Qs,h),re(Ky,p),re(Kh,y),re(Hh,I),re(jh,b),re(Vh,S),re(qy,N),re(Vy,F),re(Ii,g),re(Wh,w),re(Wy,K),G(B))if(B.length){const he=e.exposed||(e.exposed={});B.forEach(ue=>{Object.defineProperty(he,ue,{get:()=>n[ue],set:mt=>n[ue]=mt})})}else e.exposed||(e.exposed={});A&&e.render===bt&&(e.render=A),z!=null&&(e.inheritAttrs=z),$&&(e.components=$),Z&&(e.directives=Z)}function Qy(e,t,n=bt,r=!1){G(e)&&(e=ba(e));for(const i in e){const s=e[i];let o;me(s)?"default"in s?o=rt(s.from||i,s.default,!0):o=rt(s.from||i):o=rt(s),Ie(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[i]=o}}function eu(e,t,n){dt(G(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function zh(e,t,n,r){const i=r.includes(".")?xh(n,r):()=>n[r];if(Ee(e)){const s=t[e];Q(s)&&lr(i,s)}else if(Q(e))lr(i,e.bind(n));else if(me(e))if(G(e))e.forEach(s=>zh(s,t,n,r));else{const s=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(s)&&lr(i,s,e)}}function Ac(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>ws(c,l,o,!0)),ws(c,t,o)),me(t)&&s.set(t,c),c}function ws(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&ws(e,s,n,!0),i&&i.forEach(o=>ws(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Zy[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Zy={data:tu,props:Rn,emits:Rn,methods:Rn,computed:Rn,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Rn,directives:Rn,watch:tv,provide:tu,inject:ev};function tu(e,t){return t?e?function(){return Ne(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function ev(e,t){return Rn(ba(e),ba(t))}function ba(e){if(G(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ke(e,t){return e?[...new Set([].concat(e,t))]:t}function Rn(e,t){return e?Ne(Ne(Object.create(null),e),t):t}function tv(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const r in t)n[r]=Ke(e[r],t[r]);return n}function nv(e,t,n,r=!1){const i={},s={};ds(s,Zs,1),e.propsDefaults=Object.create(null),Gh(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:py(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function rv(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=oe(i),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Js(e.emitsOptions,h))continue;const p=t[h];if(c)if(se(s,h))p!==s[h]&&(s[h]=p,l=!0);else{const y=Mt(h);i[y]=Ta(c,a,y,p,e,!1)}else p!==s[h]&&(s[h]=p,l=!0)}}}else{Gh(e,t,i,s)&&(l=!0);let u;for(const f in a)(!t||!se(t,f)&&((u=br(f))===f||!se(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ta(c,a,f,void 0,e,!0)):delete i[f]);if(s!==a)for(const f in s)(!t||!se(t,f))&&(delete s[f],l=!0)}l&&Vt(e,"set","$attrs")}function Gh(e,t,n,r){const[i,s]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Kr(c))continue;const l=t[c];let u;i&&se(i,u=Mt(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Js(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=oe(n),l=a||ge;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ta(i,c,f,l[f],e,!se(l,f))}}return o}function Ta(e,t,n,r,i,s){const o=e[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Q(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(vn(i),r=l[n]=c.call(null,t),pn())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===br(n))&&(r=!0))}return r}function Jh(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let c=!1;if(!Q(e)){const u=f=>{c=!0;const[h,p]=Jh(f,t,!0);Ne(o,h),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return me(e)&&r.set(e,rr),rr;if(G(s))for(let u=0;u<s.length;u++){const f=Mt(s[u]);nu(f)&&(o[f]=ge)}else if(s)for(const u in s){const f=Mt(u);if(nu(f)){const h=s[u],p=o[f]=G(h)||Q(h)?{type:h}:Object.assign({},h);if(p){const y=su(Boolean,p.type),I=su(String,p.type);p[0]=y>-1,p[1]=I<0||y<I,(y>-1||se(p,"default"))&&a.push(f)}}}const l=[o,a];return me(e)&&r.set(e,l),l}function nu(e){return e[0]!=="$"}function ru(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function iu(e,t){return ru(e)===ru(t)}function su(e,t){return G(t)?t.findIndex(n=>iu(n,e)):Q(t)&&iu(t,e)?0:-1}const Xh=e=>e[0]==="_"||e==="$stable",Cc=e=>G(e)?e.map(lt):[lt(e)],iv=(e,t,n)=>{if(t._n)return t;const r=Ec((...i)=>Cc(t(...i)),n);return r._c=!1,r},Yh=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Xh(i))continue;const s=e[i];if(Q(s))t[i]=iv(i,s,r);else if(s!=null){const o=Cc(s);t[i]=()=>o}}},Qh=(e,t)=>{const n=Cc(t);e.slots.default=()=>n},sv=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=oe(t),ds(t,"_",n)):Yh(t,e.slots={})}else e.slots={},t&&Qh(e,t);ds(e.slots,Zs,1)},ov=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=ge;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:(Ne(i,t),!n&&a===1&&delete i._):(s=!t.$stable,Yh(t,i)),o=t}else t&&(Qh(e,t),o={default:1});if(s)for(const a in i)!Xh(a)&&!(a in o)&&delete i[a]};function Zh(){return{app:null,config:{isNativeTag:Sm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let av=0;function cv(e,t){return function(r,i=null){Q(r)||(r=Object.assign({},r)),i!=null&&!me(i)&&(i=null);const s=Zh(),o=new Set;let a=!1;const c=s.app={_uid:av++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Sc,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&Q(l.install)?(o.add(l),l.install(c,...u)):Q(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=we(r,i);return h.appContext=s,u&&t?t(h,l):e(h,l,f),a=!0,c._container=l,l.__vue_app__=c,kc(h.component)||h.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Es(e,t,n,r,i=!1){if(G(e)){e.forEach((h,p)=>Es(h,t&&(G(t)?t[p]:t),n,r,i));return}if(ur(r)&&!i)return;const s=r.shapeFlag&4?kc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Ee(l)?(u[l]=null,se(f,l)&&(f[l]=null)):Ie(l)&&(l.value=null)),Q(c))dn(c,a,12,[o,u]);else{const h=Ee(c),p=Ie(c);if(h||p){const y=()=>{if(e.f){const I=h?se(f,c)?f[c]:u[c]:c.value;i?G(I)&&lc(I,s):G(I)?I.includes(s)||I.push(s):h?(u[c]=[s],se(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else h?(u[c]=o,se(f,c)&&(f[c]=o)):p&&(c.value=o,e.k&&(u[e.k]=o))};o?(y.id=-1,Se(y,n)):y()}}}let Zt=!1;const Ji=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Xi=e=>e.nodeType===8;function lv(e){const{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:s,parentNode:o,remove:a,insert:c,createComment:l}}=e,u=(_,g)=>{if(!g.hasChildNodes()){n(null,_,g),ys(),g._vnode=_;return}Zt=!1,f(g.firstChild,_,null,null,null),ys(),g._vnode=_,Zt&&console.error("Hydration completed but contains mismatches.")},f=(_,g,v,w,A,N=!1)=>{const F=Xi(_)&&_.data==="[",S=()=>I(_,g,v,w,A,F),{type:K,ref:B,shapeFlag:z,patchFlag:$}=g;let Z=_.nodeType;g.el=_,$===-2&&(N=!1,g.dynamicChildren=null);let H=null;switch(K){case gr:Z!==3?g.children===""?(c(g.el=i(""),o(_),_),H=_):H=S():(_.data!==g.children&&(Zt=!0,_.data=g.children),H=s(_));break;case ze:Z!==8||F?H=S():H=s(_);break;case ss:if(F&&(_=s(_),Z=_.nodeType),Z===1||Z===3){H=_;const Me=!g.children.length;for(let re=0;re<g.staticCount;re++)Me&&(g.children+=H.nodeType===1?H.outerHTML:H.data),re===g.staticCount-1&&(g.anchor=H),H=s(H);return F?s(H):H}else S();break;case ct:F?H=y(_,g,v,w,A,N):H=S();break;default:if(z&1)Z!==1||g.type.toLowerCase()!==_.tagName.toLowerCase()?H=S():H=h(_,g,v,w,A,N);else if(z&6){g.slotScopeIds=A;const Me=o(_);if(t(g,Me,null,v,w,Ji(Me),N),H=F?b(_):s(_),H&&Xi(H)&&H.data==="teleport end"&&(H=s(H)),ur(g)){let re;F?(re=we(ct),re.anchor=H?H.previousSibling:Me.lastChild):re=_.nodeType===3?od(""):we("div"),re.el=_,g.component.subTree=re}}else z&64?Z!==8?H=S():H=g.type.hydrate(_,g,v,w,A,N,e,p):z&128&&(H=g.type.hydrate(_,g,v,w,Ji(o(_)),A,N,e,f))}return B!=null&&Es(B,null,w,g),H},h=(_,g,v,w,A,N)=>{N=N||!!g.dynamicChildren;const{type:F,props:S,patchFlag:K,shapeFlag:B,dirs:z}=g,$=F==="input"&&z||F==="option";if($||K!==-1){if(z&&Rt(g,null,v,"created"),S)if($||!N||K&48)for(const H in S)($&&H.endsWith("value")||Ei(H)&&!Kr(H))&&r(_,H,null,S[H],!1,void 0,v);else S.onClick&&r(_,"onClick",null,S.onClick,!1,void 0,v);let Z;if((Z=S&&S.onVnodeBeforeMount)&&qe(Z,v,g),z&&Rt(g,null,v,"beforeMount"),((Z=S&&S.onVnodeMounted)||z)&&Lh(()=>{Z&&qe(Z,v,g),z&&Rt(g,null,v,"mounted")},w),B&16&&!(S&&(S.innerHTML||S.textContent))){let H=p(_.firstChild,g,_,v,w,A,N);for(;H;){Zt=!0;const Me=H;H=H.nextSibling,a(Me)}}else B&8&&_.textContent!==g.children&&(Zt=!0,_.textContent=g.children)}return _.nextSibling},p=(_,g,v,w,A,N,F)=>{F=F||!!g.dynamicChildren;const S=g.children,K=S.length;for(let B=0;B<K;B++){const z=F?S[B]:S[B]=lt(S[B]);if(_)_=f(_,z,w,A,N,F);else{if(z.type===gr&&!z.children)continue;Zt=!0,n(null,z,v,null,w,A,Ji(v),N)}}return _},y=(_,g,v,w,A,N)=>{const{slotScopeIds:F}=g;F&&(A=A?A.concat(F):F);const S=o(_),K=p(s(_),g,S,v,w,A,N);return K&&Xi(K)&&K.data==="]"?s(g.anchor=K):(Zt=!0,c(g.anchor=l("]"),S,K),K)},I=(_,g,v,w,A,N)=>{if(Zt=!0,g.el=null,N){const K=b(_);for(;;){const B=s(_);if(B&&B!==K)a(B);else break}}const F=s(_),S=o(_);return a(_),n(null,g,S,F,v,w,Ji(S),A),F},b=_=>{let g=0;for(;_;)if(_=s(_),_&&Xi(_)&&(_.data==="["&&g++,_.data==="]")){if(g===0)return s(_);g--}return _};return[u,f]}const Se=Lh;function uv(e){return ed(e)}function fv(e){return ed(e,lv)}function ed(e,t){const n=$m();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=bt,insertStaticContent:y}=e,I=(d,m,E,T=null,R=null,O=null,x=!1,P=null,D=!!m.dynamicChildren)=>{if(d===m)return;d&&!Et(d,m)&&(T=L(d),Ve(d,R,O,!0),d=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:k,ref:V,shapeFlag:j}=m;switch(k){case gr:b(d,m,E,T);break;case ze:_(d,m,E,T);break;case ss:d==null&&g(m,E,T,x);break;case ct:$(d,m,E,T,R,O,x,P,D);break;default:j&1?A(d,m,E,T,R,O,x,P,D):j&6?Z(d,m,E,T,R,O,x,P,D):(j&64||j&128)&&k.process(d,m,E,T,R,O,x,P,D,ie)}V!=null&&R&&Es(V,d&&d.ref,O,m||d,!m)},b=(d,m,E,T)=>{if(d==null)r(m.el=a(m.children),E,T);else{const R=m.el=d.el;m.children!==d.children&&l(R,m.children)}},_=(d,m,E,T)=>{d==null?r(m.el=c(m.children||""),E,T):m.el=d.el},g=(d,m,E,T)=>{[d.el,d.anchor]=y(d.children,m,E,T,d.el,d.anchor)},v=({el:d,anchor:m},E,T)=>{let R;for(;d&&d!==m;)R=h(d),r(d,E,T),d=R;r(m,E,T)},w=({el:d,anchor:m})=>{let E;for(;d&&d!==m;)E=h(d),i(d),d=E;i(m)},A=(d,m,E,T,R,O,x,P,D)=>{x=x||m.type==="svg",d==null?N(m,E,T,R,O,x,P,D):K(d,m,R,O,x,P,D)},N=(d,m,E,T,R,O,x,P)=>{let D,k;const{type:V,props:j,shapeFlag:q,transition:X,dirs:te}=d;if(D=d.el=o(d.type,O,j&&j.is,j),q&8?u(D,d.children):q&16&&S(d.children,D,null,T,R,O&&V!=="foreignObject",x,P),te&&Rt(d,null,T,"created"),F(D,d,d.scopeId,x,T),j){for(const fe in j)fe!=="value"&&!Kr(fe)&&s(D,fe,null,j[fe],O,d.children,T,R,U);"value"in j&&s(D,"value",null,j.value),(k=j.onVnodeBeforeMount)&&qe(k,T,d)}te&&Rt(d,null,T,"beforeMount");const de=(!R||R&&!R.pendingBranch)&&X&&!X.persisted;de&&X.beforeEnter(D),r(D,m,E),((k=j&&j.onVnodeMounted)||de||te)&&Se(()=>{k&&qe(k,T,d),de&&X.enter(D),te&&Rt(d,null,T,"mounted")},R)},F=(d,m,E,T,R)=>{if(E&&p(d,E),T)for(let O=0;O<T.length;O++)p(d,T[O]);if(R){let O=R.subTree;if(m===O){const x=R.vnode;F(d,x,x.scopeId,x.slotScopeIds,R.parent)}}},S=(d,m,E,T,R,O,x,P,D=0)=>{for(let k=D;k<d.length;k++){const V=d[k]=P?sn(d[k]):lt(d[k]);I(null,V,m,E,T,R,O,x,P)}},K=(d,m,E,T,R,O,x)=>{const P=m.el=d.el;let{patchFlag:D,dynamicChildren:k,dirs:V}=m;D|=d.patchFlag&16;const j=d.props||ge,q=m.props||ge;let X;E&&In(E,!1),(X=q.onVnodeBeforeUpdate)&&qe(X,E,m,d),V&&Rt(m,d,E,"beforeUpdate"),E&&In(E,!0);const te=R&&m.type!=="foreignObject";if(k?B(d.dynamicChildren,k,P,E,T,te,O):x||ue(d,m,P,null,E,T,te,O,!1),D>0){if(D&16)z(P,m,j,q,E,T,R);else if(D&2&&j.class!==q.class&&s(P,"class",null,q.class,R),D&4&&s(P,"style",j.style,q.style,R),D&8){const de=m.dynamicProps;for(let fe=0;fe<de.length;fe++){const Te=de[fe],vt=j[Te],zn=q[Te];(zn!==vt||Te==="value")&&s(P,Te,vt,zn,R,d.children,E,T,U)}}D&1&&d.children!==m.children&&u(P,m.children)}else!x&&k==null&&z(P,m,j,q,E,T,R);((X=q.onVnodeUpdated)||V)&&Se(()=>{X&&qe(X,E,m,d),V&&Rt(m,d,E,"updated")},T)},B=(d,m,E,T,R,O,x)=>{for(let P=0;P<m.length;P++){const D=d[P],k=m[P],V=D.el&&(D.type===ct||!Et(D,k)||D.shapeFlag&70)?f(D.el):E;I(D,k,V,null,T,R,O,x,!0)}},z=(d,m,E,T,R,O,x)=>{if(E!==T){if(E!==ge)for(const P in E)!Kr(P)&&!(P in T)&&s(d,P,E[P],null,x,m.children,R,O,U);for(const P in T){if(Kr(P))continue;const D=T[P],k=E[P];D!==k&&P!=="value"&&s(d,P,k,D,x,m.children,R,O,U)}"value"in T&&s(d,"value",E.value,T.value)}},$=(d,m,E,T,R,O,x,P,D)=>{const k=m.el=d?d.el:a(""),V=m.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:q,slotScopeIds:X}=m;X&&(P=P?P.concat(X):X),d==null?(r(k,E,T),r(V,E,T),S(m.children,E,V,R,O,x,P,D)):j>0&&j&64&&q&&d.dynamicChildren?(B(d.dynamicChildren,q,E,R,O,x,P),(m.key!=null||R&&m===R.subTree)&&td(d,m,!0)):ue(d,m,E,V,R,O,x,P,D)},Z=(d,m,E,T,R,O,x,P,D)=>{m.slotScopeIds=P,d==null?m.shapeFlag&512?R.ctx.activate(m,E,T,x,D):H(m,E,T,R,O,x,D):Me(d,m,D)},H=(d,m,E,T,R,O,x)=>{const P=d.component=_v(d,T,R);if(Ti(d)&&(P.ctx.renderer=ie),wv(P),P.asyncDep){if(R&&R.registerDep(P,re),!d.el){const D=P.subTree=we(ze);_(null,D,m,E)}return}re(P,d,m,E,R,O,x)},Me=(d,m,E)=>{const T=m.component=d.component;if(ky(d,m,E))if(T.asyncDep&&!T.asyncResolved){he(T,m,E);return}else T.next=m,by(T.update),T.update();else m.el=d.el,T.vnode=m},re=(d,m,E,T,R,O,x)=>{const P=()=>{if(d.isMounted){let{next:V,bu:j,u:q,parent:X,vnode:te}=d,de=V,fe;In(d,!1),V?(V.el=te.el,he(d,V,x)):V=te,j&&Wr(j),(fe=V.props&&V.props.onVnodeBeforeUpdate)&&qe(fe,X,V,te),In(d,!0);const Te=ko(d),vt=d.subTree;d.subTree=Te,I(vt,Te,f(vt.el),L(vt),d,R,O),V.el=Te.el,de===null&&bc(d,Te.el),q&&Se(q,R),(fe=V.props&&V.props.onVnodeUpdated)&&Se(()=>qe(fe,X,V,te),R)}else{let V;const{el:j,props:q}=m,{bm:X,m:te,parent:de}=d,fe=ur(m);if(In(d,!1),X&&Wr(X),!fe&&(V=q&&q.onVnodeBeforeMount)&&qe(V,de,m),In(d,!0),j&&ee){const Te=()=>{d.subTree=ko(d),ee(j,d.subTree,d,R,null)};fe?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Te()):Te()}else{const Te=d.subTree=ko(d);I(null,Te,E,T,d,R,O),m.el=Te.el}if(te&&Se(te,R),!fe&&(V=q&&q.onVnodeMounted)){const Te=m;Se(()=>qe(V,de,Te),R)}(m.shapeFlag&256||de&&ur(de.vnode)&&de.vnode.shapeFlag&256)&&d.a&&Se(d.a,R),d.isMounted=!0,m=E=T=null}},D=d.effect=new pc(P,()=>Gs(k),d.scope),k=d.update=()=>D.run();k.id=d.uid,In(d,!0),k()},he=(d,m,E)=>{m.component=d;const T=d.vnode.props;d.vnode=m,d.next=null,rv(d,m.props,T,E),ov(d,m.children,E),Tr(),Jl(),Ir()},ue=(d,m,E,T,R,O,x,P,D=!1)=>{const k=d&&d.children,V=d?d.shapeFlag:0,j=m.children,{patchFlag:q,shapeFlag:X}=m;if(q>0){if(q&128){Tn(k,j,E,T,R,O,x,P,D);return}else if(q&256){mt(k,j,E,T,R,O,x,P,D);return}}X&8?(V&16&&U(k,R,O),j!==k&&u(E,j)):V&16?X&16?Tn(k,j,E,T,R,O,x,P,D):U(k,R,O,!0):(V&8&&u(E,""),X&16&&S(j,E,T,R,O,x,P,D))},mt=(d,m,E,T,R,O,x,P,D)=>{d=d||rr,m=m||rr;const k=d.length,V=m.length,j=Math.min(k,V);let q;for(q=0;q<j;q++){const X=m[q]=D?sn(m[q]):lt(m[q]);I(d[q],X,E,null,R,O,x,P,D)}k>V?U(d,R,O,!0,!1,j):S(m,E,T,R,O,x,P,D,j)},Tn=(d,m,E,T,R,O,x,P,D)=>{let k=0;const V=m.length;let j=d.length-1,q=V-1;for(;k<=j&&k<=q;){const X=d[k],te=m[k]=D?sn(m[k]):lt(m[k]);if(Et(X,te))I(X,te,E,null,R,O,x,P,D);else break;k++}for(;k<=j&&k<=q;){const X=d[j],te=m[q]=D?sn(m[q]):lt(m[q]);if(Et(X,te))I(X,te,E,null,R,O,x,P,D);else break;j--,q--}if(k>j){if(k<=q){const X=q+1,te=X<V?m[X].el:T;for(;k<=q;)I(null,m[k]=D?sn(m[k]):lt(m[k]),E,te,R,O,x,P,D),k++}}else if(k>q)for(;k<=j;)Ve(d[k],R,O,!0),k++;else{const X=k,te=k,de=new Map;for(k=te;k<=q;k++){const Ye=m[k]=D?sn(m[k]):lt(m[k]);Ye.key!=null&&de.set(Ye.key,k)}let fe,Te=0;const vt=q-te+1;let zn=!1,Ul=0;const Dr=new Array(vt);for(k=0;k<vt;k++)Dr[k]=0;for(k=X;k<=j;k++){const Ye=d[k];if(Te>=vt){Ve(Ye,R,O,!0);continue}let Ct;if(Ye.key!=null)Ct=de.get(Ye.key);else for(fe=te;fe<=q;fe++)if(Dr[fe-te]===0&&Et(Ye,m[fe])){Ct=fe;break}Ct===void 0?Ve(Ye,R,O,!0):(Dr[Ct-te]=k+1,Ct>=Ul?Ul=Ct:zn=!0,I(Ye,m[Ct],E,null,R,O,x,P,D),Te++)}const Fl=zn?hv(Dr):rr;for(fe=Fl.length-1,k=vt-1;k>=0;k--){const Ye=te+k,Ct=m[Ye],Hl=Ye+1<V?m[Ye+1].el:T;Dr[k]===0?I(null,Ct,E,Hl,R,O,x,P,D):zn&&(fe<0||k!==Fl[fe]?yt(Ct,E,Hl,2):fe--)}}},yt=(d,m,E,T,R=null)=>{const{el:O,type:x,transition:P,children:D,shapeFlag:k}=d;if(k&6){yt(d.component.subTree,m,E,T);return}if(k&128){d.suspense.move(m,E,T);return}if(k&64){x.move(d,m,E,ie);return}if(x===ct){r(O,m,E);for(let j=0;j<D.length;j++)yt(D[j],m,E,T);r(d.anchor,m,E);return}if(x===ss){v(d,m,E);return}if(T!==2&&k&1&&P)if(T===0)P.beforeEnter(O),r(O,m,E),Se(()=>P.enter(O),R);else{const{leave:j,delayLeave:q,afterLeave:X}=P,te=()=>r(O,m,E),de=()=>{j(O,()=>{te(),X&&X()})};q?q(O,te,de):de()}else r(O,m,E)},Ve=(d,m,E,T=!1,R=!1)=>{const{type:O,props:x,ref:P,children:D,dynamicChildren:k,shapeFlag:V,patchFlag:j,dirs:q}=d;if(P!=null&&Es(P,null,E,d,!0),V&256){m.ctx.deactivate(d);return}const X=V&1&&q,te=!ur(d);let de;if(te&&(de=x&&x.onVnodeBeforeUnmount)&&qe(de,m,d),V&6)C(d.component,E,T);else{if(V&128){d.suspense.unmount(E,T);return}X&&Rt(d,null,m,"beforeUnmount"),V&64?d.type.remove(d,m,E,R,ie,T):k&&(O!==ct||j>0&&j&64)?U(k,m,E,!1,!0):(O===ct&&j&384||!R&&V&16)&&U(D,m,E),T&&qn(d)}(te&&(de=x&&x.onVnodeUnmounted)||X)&&Se(()=>{de&&qe(de,m,d),X&&Rt(d,null,m,"unmounted")},E)},qn=d=>{const{type:m,el:E,anchor:T,transition:R}=d;if(m===ct){Bi(E,T);return}if(m===ss){w(d);return}const O=()=>{i(E),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(d.shapeFlag&1&&R&&!R.persisted){const{leave:x,delayLeave:P}=R,D=()=>x(E,O);P?P(d.el,O,D):D()}else O()},Bi=(d,m)=>{let E;for(;d!==m;)E=h(d),i(d),d=E;i(m)},C=(d,m,E)=>{const{bum:T,scope:R,update:O,subTree:x,um:P}=d;T&&Wr(T),R.stop(),O&&(O.active=!1,Ve(x,d,m,E)),P&&Se(P,m),Se(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(d,m,E,T=!1,R=!1,O=0)=>{for(let x=O;x<d.length;x++)Ve(d[x],m,E,T,R)},L=d=>d.shapeFlag&6?L(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),W=(d,m,E)=>{d==null?m._vnode&&Ve(m._vnode,null,null,!0):I(m._vnode||null,d,m,null,null,null,E),Jl(),ys(),m._vnode=d},ie={p:I,um:Ve,m:yt,r:qn,mt:H,mc:S,pc:ue,pbc:B,n:L,o:e};let ve,ee;return t&&([ve,ee]=t(ie)),{render:W,hydrate:ve,createApp:cv(W,ve)}}function In({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function td(e,t,n=!1){const r=e.children,i=t.children;if(G(r)&&G(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=sn(i[s]),a.el=o.el),n||td(o,a)),a.type===gr&&(a.el=o.el)}}function hv(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}const dv=e=>e.__isTeleport,ct=Symbol(void 0),gr=Symbol(void 0),ze=Symbol(void 0),ss=Symbol(void 0),qr=[];let ht=null;function On(e=!1){qr.push(ht=e?null:[])}function nd(){qr.pop(),ht=qr[qr.length-1]||null}let mr=1;function ou(e){mr+=e}function rd(e){return e.dynamicChildren=mr>0?ht||rr:null,nd(),mr>0&&ht&&ht.push(e),e}function TS(e,t,n,r,i,s){return rd(sd(e,t,n,r,i,s,!0))}function Qn(e,t,n,r,i){return rd(we(e,t,n,r,i,!0))}function si(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Zs="__vInternal",id=({key:e})=>e??null,os=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ee(e)||Ie(e)||Q(e)?{i:ft,r:e,k:t,f:!!n}:e:null;function sd(e,t=null,n=null,r=0,i=null,s=e===ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&id(t),ref:t&&os(t),scopeId:Xs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ft};return a?(Rc(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ee(n)?8:16),mr>0&&!o&&ht&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ht.push(c),c}const we=pv;function pv(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Gy)&&(e=ze),si(e)){const a=qt(e,t,!0);return n&&Rc(a,n),mr>0&&!s&&ht&&(a.shapeFlag&6?ht[ht.indexOf(e)]=a:ht.push(a)),a.patchFlag|=-2,a}if(Iv(e)&&(e=e.__vccOpts),t){t=gv(t);let{class:a,style:c}=t;a&&!Ee(a)&&(t.class=Ws(a)),me(c)&&(wh(c)&&!G(c)&&(c=Ne({},c)),t.style=Ks(c))}const o=Ee(e)?1:Nh(e)?128:dv(e)?64:me(e)?4:Q(e)?2:0;return sd(e,t,n,r,i,o,s,!0)}function gv(e){return e?wh(e)||Zs in e?Ne({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?mv(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&id(a),ref:t&&t.ref?n&&i?G(i)?i.concat(os(t)):[i,os(t)]:os(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ct?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function od(e=" ",t=0){return we(gr,null,e,t)}function IS(e="",t=!1){return t?(On(),Qn(ze,null,e)):we(ze,null,e)}function lt(e){return e==null||typeof e=="boolean"?we(ze):G(e)?we(ct,null,e.slice()):typeof e=="object"?sn(e):we(gr,null,String(e))}function sn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Rc(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(G(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Rc(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Zs in t)?t._ctx=ft:i===3&&ft&&(ft.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:ft},n=32):(t=String(t),r&64?(n=16,t=[od(t)]):n=8);e.children=t,e.shapeFlag|=n}function mv(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ws([t.class,r.class]));else if(i==="style")t.style=Ks([t.style,r.style]);else if(Ei(i)){const s=t[i],o=r[i];o&&s!==o&&!(G(s)&&s.includes(o))&&(t[i]=s?[].concat(s,o):o)}else i!==""&&(t[i]=r[i])}return t}function qe(e,t,n,r=null){dt(e,t,7,[n,r])}const yv=Zh();let vv=0;function _v(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||yv,s={uid:vv++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jh(r,i),emitsOptions:Dh(r,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Iy.bind(null,s),e.ce&&e.ce(s),s}let _e=null;const Vn=()=>_e||ft,vn=e=>{_e=e,e.scope.on()},pn=()=>{_e&&_e.scope.off(),_e=null};function ad(e){return e.vnode.shapeFlag&4}let yr=!1;function wv(e,t=!1){yr=t;const{props:n,children:r}=e.vnode,i=ad(e);nv(e,n,i,t),sv(e,r);const s=i?Ev(e,t):void 0;return yr=!1,s}function Ev(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Eh(new Proxy(e.ctx,Xy));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Tv(e):null;vn(e),Tr();const s=dn(r,e,0,[e.props,i]);if(Ir(),pn(),fc(s)){if(s.then(pn,pn),t)return s.then(o=>{Ia(e,o,t)}).catch(o=>{Ar(o,e,0)});e.asyncDep=s}else Ia(e,s,t)}else cd(e,t)}function Ia(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Ah(t)),cd(e,n)}let au;function cd(e,t,n){const r=e.type;if(!e.render){if(!t&&au&&!r.render){const i=r.template||Ac(e).template;if(i){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ne(Ne({isCustomElement:s,delimiters:a},o),c);r.render=au(i,l)}}e.render=r.render||bt}vn(e),Tr(),Yy(e),Ir(),pn()}function bv(e){return new Proxy(e.attrs,{get(t,n){return Xe(e,"get","$attrs"),t[n]}})}function Tv(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=bv(e))},slots:e.slots,emit:e.emit,expose:t}}function kc(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ah(Eh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vr)return Vr[n](e)},has(t,n){return n in t||n in Vr}}))}function Aa(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Iv(e){return Q(e)&&"__vccOpts"in e}const Ce=(e,t)=>_y(e,t,yr);function AS(e){const t=Vn();let n=e();return pn(),fc(n)&&(n=n.catch(r=>{throw vn(t),r})),[n,()=>vn(t)]}function it(e,t,n){const r=arguments.length;return r===2?me(t)&&!G(t)?si(t)?we(e,null,[t]):we(e,t):we(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&si(n)&&(n=[n]),we(e,t,n))}const Av=Symbol(""),Cv=()=>rt(Av),Sc="3.2.47",Rv="http://www.w3.org/2000/svg",Pn=typeof document<"u"?document:null,cu=Pn&&Pn.createElement("template"),kv={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Pn.createElementNS(Rv,e):Pn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Pn.createTextNode(e),createComment:e=>Pn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{cu.innerHTML=r?`<svg>${e}</svg>`:e;const a=cu.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Sv(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pv(e,t,n){const r=e.style,i=Ee(n);if(n&&!i){if(t&&!Ee(t))for(const s in t)n[s]==null&&Ca(r,s,"");for(const s in n)Ca(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const lu=/\s*!important$/;function Ca(e,t,n){if(G(n))n.forEach(r=>Ca(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ov(e,t);lu.test(n)?e.setProperty(br(r),n.replace(lu,""),"important"):e[r]=n}}const uu=["Webkit","Moz","ms"],Mo={};function Ov(e,t){const n=Mo[t];if(n)return n;let r=Mt(t);if(r!=="filter"&&r in e)return Mo[t]=r;r=qs(r);for(let i=0;i<uu.length;i++){const s=uu[i]+r;if(s in e)return Mo[t]=s}return t}const fu="http://www.w3.org/1999/xlink";function Dv(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fu,t.slice(6,t.length)):e.setAttributeNS(fu,t,n);else{const s=km(t);n==null||s&&!ih(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Nv(e,t,n,r,i,s,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ih(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Mv(e,t,n,r){e.addEventListener(t,n,r)}function Lv(e,t,n,r){e.removeEventListener(t,n,r)}function xv(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[a,c]=$v(t);if(r){const l=s[t]=Hv(r,i);Mv(e,a,l,c)}else o&&(Lv(e,a,o,c),s[t]=void 0)}}const hu=/(?:Once|Passive|Capture)$/;function $v(e){let t;if(hu.test(e)){t={};let r;for(;r=e.match(hu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):br(e.slice(2)),t]}let Lo=0;const Uv=Promise.resolve(),Fv=()=>Lo||(Uv.then(()=>Lo=0),Lo=Date.now());function Hv(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dt(jv(r,n.value),t,5,[r])};return n.value=e,n.attached=Fv(),n}function jv(e,t){if(G(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const du=/^on[a-z]/,Bv=(e,t,n,r,i=!1,s,o,a,c)=>{t==="class"?Sv(e,r,i):t==="style"?Pv(e,n,r):Ei(t)?cc(t)||xv(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Kv(e,t,r,i))?Nv(e,t,r,s,o,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Dv(e,t,r,i))};function Kv(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&du.test(t)&&Q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||du.test(t)&&Ee(n)?!1:t in e}const en="transition",Nr="animation",eo=(e,{slots:t})=>it($h,Wv(e),t);eo.displayName="Transition";const ld={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};eo.props=Ne({},$h.props,ld);const An=(e,t=[])=>{G(e)?e.forEach(n=>n(...t)):e&&e(...t)},pu=e=>e?G(e)?e.some(t=>t.length>1):e.length>1:!1;function Wv(e){const t={};for(const $ in e)$ in ld||(t[$]=e[$]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,y=Vv(i),I=y&&y[0],b=y&&y[1],{onBeforeEnter:_,onEnter:g,onEnterCancelled:v,onLeave:w,onLeaveCancelled:A,onBeforeAppear:N=_,onAppear:F=g,onAppearCancelled:S=v}=t,K=($,Z,H)=>{Cn($,Z?u:a),Cn($,Z?l:o),H&&H()},B=($,Z)=>{$._isLeaving=!1,Cn($,f),Cn($,p),Cn($,h),Z&&Z()},z=$=>(Z,H)=>{const Me=$?F:g,re=()=>K(Z,$,H);An(Me,[Z,re]),gu(()=>{Cn(Z,$?c:s),tn(Z,$?u:a),pu(Me)||mu(Z,r,I,re)})};return Ne(t,{onBeforeEnter($){An(_,[$]),tn($,s),tn($,o)},onBeforeAppear($){An(N,[$]),tn($,c),tn($,l)},onEnter:z(!1),onAppear:z(!0),onLeave($,Z){$._isLeaving=!0;const H=()=>B($,Z);tn($,f),Gv(),tn($,h),gu(()=>{$._isLeaving&&(Cn($,f),tn($,p),pu(w)||mu($,r,b,H))}),An(w,[$,H])},onEnterCancelled($){K($,!1),An(v,[$])},onAppearCancelled($){K($,!0),An(S,[$])},onLeaveCancelled($){B($),An(A,[$])}})}function Vv(e){if(e==null)return null;if(me(e))return[xo(e.enter),xo(e.leave)];{const t=xo(e);return[t,t]}}function xo(e){return lh(e)}function tn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Cn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function gu(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let qv=0;function mu(e,t,n,r){const i=e._endId=++qv,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=zv(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,h),s()},h=p=>{p.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,h)}function zv(e,t){const n=window.getComputedStyle(e),r=y=>(n[y]||"").split(", "),i=r(`${en}Delay`),s=r(`${en}Duration`),o=yu(i,s),a=r(`${Nr}Delay`),c=r(`${Nr}Duration`),l=yu(a,c);let u=null,f=0,h=0;t===en?o>0&&(u=en,f=o,h=s.length):t===Nr?l>0&&(u=Nr,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?en:Nr:null,h=u?u===en?s.length:c.length:0);const p=u===en&&/\b(transform|all)(,|$)/.test(r(`${en}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function yu(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>vu(n)+vu(e[r])))}function vu(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Gv(){return document.body.offsetHeight}const ud=Ne({patchProp:Bv},kv);let zr,_u=!1;function Jv(){return zr||(zr=uv(ud))}function Xv(){return zr=_u?zr:fv(ud),_u=!0,zr}const Yv=(...e)=>{const t=Jv().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=fd(r);if(!i)return;const s=t._component;!Q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t},Qv=(...e)=>{const t=Xv().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=fd(r);if(i)return n(i,!0,i instanceof SVGElement)},t};function fd(e){return Ee(e)?document.querySelector(e):e}const Zv=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,e_=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,t_=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function n_(e,t){if(e!=="__proto__"&&!(e==="constructor"&&t&&typeof t=="object"&&"prototype"in t))return t}function r_(e,t={}){if(typeof e!="string")return e;const n=e.toLowerCase().trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!t_.test(e)){if(t.strict)throw new SyntaxError("Invalid JSON");return e}try{return Zv.test(e)||e_.test(e)?JSON.parse(e,n_):JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}}const i_=/#/g,s_=/&/g,o_=/=/g,hd=/\+/g,a_=/%5b/gi,c_=/%5d/gi,l_=/%5e/gi,u_=/%60/gi,f_=/%7b/gi,h_=/%7c/gi,d_=/%7d/gi,p_=/%20/gi;function g_(e){return encodeURI(""+e).replace(h_,"|").replace(a_,"[").replace(c_,"]")}function Ra(e){return g_(e).replace(hd,"%2B").replace(p_,"+").replace(i_,"%23").replace(s_,"%26").replace(u_,"`").replace(f_,"{").replace(d_,"}").replace(l_,"^")}function $o(e){return Ra(e).replace(o_,"%3D")}function dd(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function m_(e){return dd(e.replace(hd," "))}function y_(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const i=dd(r[1]);if(i==="__proto__"||i==="constructor")continue;const s=m_(r[2]||"");typeof t[i]<"u"?Array.isArray(t[i])?t[i].push(s):t[i]=[t[i],s]:t[i]=s}return t}function v_(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${$o(e)}=${Ra(n)}`).join("&"):`${$o(e)}=${Ra(t)}`:$o(e)}function __(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>v_(t,e[t])).join("&")}const w_=/^\w{2,}:(\/\/)?/,E_=/^\/\/[^/]+/;function Ai(e,t=!1){return w_.test(e)||t&&E_.test(e)}const b_=/\/$|\/\?/;function ka(e="",t=!1){return t?b_.test(e):e.endsWith("/")}function pd(e="",t=!1){if(!t)return(ka(e)?e.slice(0,-1):e)||"/";if(!ka(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function T_(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(ka(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function I_(e=""){return e.startsWith("/")}function A_(e=""){return(I_(e)?e.slice(1):e)||"/"}function C_(e,t){if(gd(t)||Ai(e))return e;const n=pd(t);return e.startsWith(n)?e:Ci(n,e)}function wu(e,t){if(gd(t))return e;const n=pd(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function R_(e,t){const n=Pc(e),r={...y_(n.search),...t};return n.search=__(r),S_(n)}function gd(e){return!e||e==="/"}function k_(e){return e&&e!=="/"}function Ci(e,...t){let n=e||"";for(const r of t.filter(i=>k_(i)))n=n?T_(n)+A_(r):r;return n}function Pc(e="",t){if(!Ai(e,!0))return t?Pc(t+e):Eu(e);const[n="",r,i=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[s="",o=""]=(i.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Eu(o.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:s,pathname:a,search:c,hash:l}}function Eu(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function S_(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}class P_ extends Error{constructor(){super(...arguments),this.name="FetchError"}}function O_(e,t,n){let r="";e&&n&&(r=`${n.status} ${n.statusText} (${e.toString()})`),t&&(r=`${t.message} (${r})`);const i=new P_(r);return Object.defineProperty(i,"request",{get(){return e}}),Object.defineProperty(i,"response",{get(){return n}}),Object.defineProperty(i,"data",{get(){return n&&n._data}}),Object.defineProperty(i,"status",{get(){return n&&n.status}}),Object.defineProperty(i,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(i,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(i,"statusMessage",{get(){return n&&n.statusText}}),i}const D_=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function bu(e="GET"){return D_.has(e.toUpperCase())}function N_(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const M_=new Set(["image/svg","application/xml","application/xhtml","application/html"]),L_=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function x_(e=""){if(!e)return"json";const t=e.split(";").shift();return L_.test(t)?"json":M_.has(t)||t.startsWith("text/")?"text":"blob"}const $_=new Set([408,409,425,429,500,502,503,504]);function md(e){const{fetch:t,Headers:n}=e;function r(o){const a=o.error&&o.error.name==="AbortError"||!1;if(o.options.retry!==!1&&!a){const l=typeof o.options.retry=="number"?o.options.retry:bu(o.options.method)?0:1,u=o.response&&o.response.status||500;if(l>0&&$_.has(u))return i(o.request,{...o.options,retry:l-1})}const c=O_(o.request,o.error,o.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,i),c}const i=async function(a,c={}){const l={request:a,options:{...e.defaults,...c},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=C_(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=R_(l.request,{...l.options.params,...l.options.query})),l.options.body&&bu(l.options.method)&&N_(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await t(l.request,l.options).catch(async f=>(l.error=f,l.options.onRequestError&&await l.options.onRequestError(l),r(l)));const u=(l.options.parseResponse?"json":l.options.responseType)||x_(l.response.headers.get("content-type")||"");if(u==="json"){const f=await l.response.text(),h=l.options.parseResponse||r_;l.response._data=h(f)}else u==="stream"?l.response._data=l.response.body:l.response._data=await l.response[u]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),r(l)):l.response},s=function(a,c){return i(a,c).then(l=>l._data)};return s.raw=i,s.native=t,s.create=(o={})=>md({...e,defaults:{...e.defaults,...o}}),s}const yd=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),U_=yd.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),F_=yd.Headers,H_=md({fetch:U_,Headers:F_}),j_=H_,B_=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},bs=B_().app,K_=()=>bs.baseURL,W_=()=>bs.buildAssetsDir,V_=(...e)=>Ci(vd(),W_(),...e),vd=(...e)=>{const t=bs.cdnURL||bs.baseURL;return e.length?Ci(t,...e):t};globalThis.__buildAssetsURL=V_,globalThis.__publicAssetsURL=vd;function Sa(e,t={},n){for(const r in e){const i=e[r],s=n?`${n}:${r}`:r;typeof i=="object"&&i!==null?Sa(i,t,s):typeof i=="function"&&(t[s]=i)}return t}function q_(e,t){return e.reduce((n,r)=>n.then(()=>r.apply(void 0,t)),Promise.resolve())}function z_(e,t){return Promise.all(e.map(n=>n.apply(void 0,t)))}function Uo(e,t){for(const n of e)n(t)}class G_{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const i=t;let s;for(;this._deprecatedHooks[t];)s=this._deprecatedHooks[t],t=s.to;if(s&&!r.allowDeprecated){let o=s.message;o||(o=`${i} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,i=(...s)=>(typeof r=="function"&&r(),r=void 0,i=void 0,n(...s));return r=this.hook(t,i),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];this._hooks[t]=void 0;for(const i of r)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Sa(t),r=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of r.splice(0,r.length))i()}}removeHooks(t){const n=Sa(t);for(const r in n)this.removeHook(r,n[r])}callHook(t,...n){return this.callHookWith(q_,t,...n)}callHookParallel(t,...n){return this.callHookWith(z_,t,...n)}callHookWith(t,n,...r){const i=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&Uo(this._before,i);const s=t(this._hooks[n]||[],r);return s instanceof Promise?s.finally(()=>{this._after&&i&&Uo(this._after,i)}):(this._after&&i&&Uo(this._after,i),s)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}function _d(){return new G_}function J_(){let e,t=!1;const n=r=>{if(e&&e!==r)throw new Error("Context conflict")};return{use:()=>{if(e===void 0)throw new Error("Context is not available");return e},tryUse:()=>e,set:(r,i)=>{i||n(r),e=r,t=!0},unset:()=>{e=void 0,t=!1},call:(r,i)=>{n(r),e=r;try{return i()}finally{t||(e=void 0)}},async callAsync(r,i){e=r;const s=()=>{e=r},o=()=>e===r?s:void 0;Pa.add(o);try{const a=i();return t||(e=void 0),await a}finally{Pa.delete(o)}}}}function X_(){const e={};return{get(t){return e[t]||(e[t]=J_()),e[t],e[t]}}}const Ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Tu="__unctx__",Y_=Ts[Tu]||(Ts[Tu]=X_()),Q_=e=>Y_.get(e),Iu="__unctx_async_handlers__",Pa=Ts[Iu]||(Ts[Iu]=new Set);function Is(e){const t=[];for(const i of Pa){const s=i();s&&t.push(s)}const n=()=>{for(const i of t)i()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(i=>{throw n(),i})),[r,n]}const wd=Q_("nuxt-app"),Z_="__nuxt_plugin";function ew(e){let t=0;const n={provide:void 0,globalName:"nuxt",payload:Lt({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...e};n.hooks=_d(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const a="$"+s;Yi(n,a,o),Yi(n.vueApp.config.globalProperties,a,o)},Yi(n.vueApp,"$nuxt",n),Yi(n.vueApp.config.globalProperties,"$nuxt",n);const r=Lt(n.payload.config),i=new Proxy(r,{get(s,o){return o==="public"?s.public:s[o]??s.public[o]},set(s,o,a){return o==="public"||o==="app"?!1:(s[o]=a,s.public[o]=a,!0)}});return n.provide("config",i),n}async function tw(e,t){if(typeof t!="function")return;const{provide:n}=await Ae(e,t,[e])||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}async function nw(e,t){for(const n of t)await tw(e,n)}function rw(e){return e.map(n=>typeof n!="function"?null:n.length>1?r=>n(r,r.provide):n).filter(Boolean)}function Rr(e){return e[Z_]=!0,e}function Ae(e,t,n){const r=()=>n?t(...n):t();return wd.set(e),r()}function ye(){const e=wd.tryUse();if(!e){const t=Vn();if(!t)throw new Error("nuxt instance unavailable");return t.appContext.app.$nuxt}return e}function Fn(){return ye().$config}function Yi(e,t,n){Object.defineProperty(e,t,{get:()=>n})}class Oa extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const t={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(t.statusMessage=this.statusMessage),this.data!==void 0&&(t.data=this.data),t}}Oa.__h3_error__=!0;function Da(e){if(typeof e=="string")return new Oa(e);if(iw(e))return e;const t=new Oa(e.message??e.statusMessage,e.cause?{cause:e.cause}:void 0);if("stack"in e)try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}return e.data&&(t.data=e.data),e.statusCode?t.statusCode=e.statusCode:e.status&&(t.statusCode=e.status),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function iw(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const to=()=>Ch(ye().payload,"error"),Fr=e=>{const t=Ed(e);try{ye().callHook("app:error",t);const r=to();r.value=r.value||t}catch{throw t}return t},sw=async(e={})=>{const t=ye(),n=to();t.callHook("app:error:cleared",e),e.redirect&&await t.$router.replace(e.redirect),n.value=null},ow=e=>!!(e&&typeof e=="object"&&"__nuxt_error"in e),Ed=e=>{const t=Da(e);return t.__nuxt_error=!0,t};function as(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const i="$s"+n,s=ye(),o=Ch(s.payload.state,i);if(o.value===void 0&&r){const a=r();if(Ie(a))return s.payload.state[i]=a,a;o.value=a}return o}function aw(e){return{}}function cw(e=ye()){var t;return(t=e.ssrContext)==null?void 0:t.event}const no=()=>{var e;return(e=ye())==null?void 0:e.$router},bd=()=>Vn()?rt("_route",ye()._route):ye()._route,Td=e=>e,lw=(e,t,n={})=>{const r=ye();n.global||typeof e=="function"?r._middleware.global.push(typeof e=="function"?e:t):r._middleware.named[e]=t},uw=()=>{try{if(ye()._processingMiddleware)return!0}catch{return!0}return!1},fw=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:e.path||"/",r=Ai(n,!0);if(r&&!(t!=null&&t.external))throw new Error("Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.");if(r&&Pc(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!r&&uw())return e;const i=no();return r?(t!=null&&t.replace?location.replace(n):location.href=n,Promise.resolve()):t!=null&&t.replace?i.replace(e):i.push(e)},hw=["script","style","noscript"],dw=["base","meta","link","style","script","noscript"],pw=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function gw(e,t){const{props:n,tag:r}=e;if(pw.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];r==="meta"&&i.push("name","property","http-equiv");for(const s of i)if(typeof n[s]<"u"){const o=String(n[s]);return t&&!t(o)?!1:`${r}:${s}:${o}`}return!1}const Qi=(e,t)=>{const{tag:n,$el:r}=e;r&&(Object.entries(n.props).forEach(([i,s])=>{s=String(s);const o=`attr:${i}`;if(i==="class"){if(!s)return;for(const a of s.split(" ")){const c=`${o}:${a}`;t&&t(e,c,()=>r.classList.remove(a)),r.classList.contains(a)||r.classList.add(a)}return}t&&!i.startsWith("data-h-")&&t(e,o,()=>r.removeAttribute(i)),r.getAttribute(i)!==s&&r.setAttribute(i,s)}),hw.includes(n.tag)&&r.innerHTML!==(n.children||"")&&(r.innerHTML=n.children||""))};function Oc(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Id(e,t={}){var u,f;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=t.document||window.document,i=e._popSideEffectQueue();e.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([p,y])=>{i[p]=y})});const s=async h=>{const p=e.headEntries().find(I=>I._i===h._e),y={renderId:h._d||Oc(JSON.stringify({...h,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:h,entry:p,staleSideEffects:i};return await e.hooks.callHook("dom:beforeRenderTag",y),y},o=[],a={body:[],head:[]},c=(h,p,y)=>{p=`${h.renderId}:${p}`,h.entry&&(h.entry._sde[p]=y),delete i[p]},l=h=>{e._elMap[h.renderId]=h.$el,o.push(h),c(h,"el",()=>{var p;(p=h.$el)==null||p.remove(),delete e._elMap[h.renderId]})};for(const h of await e.resolveTags()){const p=await s(h);if(!p.shouldRender)continue;const{tag:y}=p;if(y.tag==="title"){r.title=y.children||"",o.push(p);continue}if(y.tag==="htmlAttrs"||y.tag==="bodyAttrs"){p.$el=r[y.tag==="htmlAttrs"?"documentElement":"body"],Qi(p,c),o.push(p);continue}if(p.$el=e._elMap[p.renderId],!p.$el&&y._hash&&(p.$el=r.querySelector(`${(u=y.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${y.tag}[data-h-${y._hash}]`)),p.$el){p.tag._d&&Qi(p),l(p);continue}p.$el=r.createElement(y.tag),Qi(p),a[(f=y.tagPosition)!=null&&f.startsWith("body")?"body":"head"].push(p)}Object.entries(a).forEach(([h,p])=>{var I;if(!p.length)return;const y=(I=r==null?void 0:r[h])==null?void 0:I.children;if(y){for(const b of[...y].reverse()){const _=b.tagName.toLowerCase();if(!dw.includes(_))continue;const g=gw({tag:_,props:b.getAttributeNames().reduce((w,A)=>({...w,[A]:b.getAttribute(A)}),{})}),v=p.findIndex(w=>{var A;return w&&(w.tag._d===g||((A=b.isEqualNode)==null?void 0:A.call(b,w.$el)))});if(v!==-1){const w=p[v];w.$el=b,Qi(w),l(w),delete p[v]}}p.forEach(b=>{if(b.$el){switch(b.tag.tagPosition){case"bodyClose":r.body.appendChild(b.$el);break;case"bodyOpen":r.body.insertBefore(b.$el,r.body.firstChild);break;case"head":default:r.head.appendChild(b.$el);break}l(b)}})}});for(const h of o)await e.hooks.callHook("dom:renderTag",h);Object.values(i).forEach(h=>h())}let cs=null;async function mw(e,t={}){function n(){return cs=null,Id(e,t)}const r=t.delayFn||(i=>setTimeout(i,10));return cs=cs||new Promise(i=>r(()=>i(n())))}const yw={__proto__:null,debouncedRenderDOMHead:mw,get domUpdatePromise(){return cs},hashCode:Oc,renderDOMHead:Id},vw=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],_w=["tagPosition","tagPriority","tagDuplicateStrategy"];async function ww(e,t){const n={tag:e,props:{}};return e==="title"||e==="titleTemplate"?(n.children=t instanceof Promise?await t:t,n):(n.props=await Ew({...t}),["children","innerHtml","innerHTML"].forEach(r=>{typeof n.props[r]<"u"&&(n.children=n.props[r],typeof n.children=="object"&&(n.children=JSON.stringify(n.children)),delete n.props[r])}),Object.keys(n.props).filter(r=>_w.includes(r)).forEach(r=>{n[r]=n.props[r],delete n.props[r]}),typeof n.props.class=="object"&&!Array.isArray(n.props.class)&&(n.props.class=Object.keys(n.props.class).filter(r=>n.props.class[r])),Array.isArray(n.props.class)&&(n.props.class=n.props.class.join(" ")),n.props.content&&Array.isArray(n.props.content)?n.props.content.map((r,i)=>{const s={...n,props:{...n.props}};return s.props.content=r,s.key=`${n.props.name||n.props.property}:${i}`,s}):n)}async function Ew(e){for(const t of Object.keys(e))e[t]instanceof Promise&&(e[t]=await e[t]),String(e[t])==="true"?e[t]="":String(e[t])==="false"&&delete e[t];return e}const Au=e=>{if(typeof e.tagPriority=="number")return e.tagPriority;switch(e.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(e.tag){case"base":return-1;case"title":return 1;case"meta":return e.props.charset?-2:e.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},bw=(e,t)=>Au(e)-Au(t),Tw=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Iw(e,t){const{props:n,tag:r}=e;if(Tw.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];r==="meta"&&i.push("name","property","http-equiv");for(const s of i)if(typeof n[s]<"u"){const o=String(n[s]);return t&&!t(o)?!1:`${r}:${s}:${o}`}return!1}const Cu=(e,t)=>e==null?t||null:typeof e=="function"?e(t):e.replace("%s",t??"");function Aw(e){let t=e.findIndex(r=>r.tag==="titleTemplate");const n=e.findIndex(r=>r.tag==="title");if(n!==-1&&t!==-1){const r=Cu(e[t].children,e[n].children);r!==null?e[n].children=r||e[n].children:delete e[n]}else if(t!==-1){const r=Cu(e[t].children);r!==null&&(e[t].children=r,e[t].tag="title",t=-1)}return t!==-1&&delete e[t],e.filter(Boolean)}const Cw=e=>{e=e||{};const t=e.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){t.forEach(i=>{n.props[i]&&(n.key=n.props[i],delete n.props[i])});const r=n.key?`${n.tag}:${n.key}`:Iw(n);r&&(n._d=r)},"tags:resolve":function(n){const r={};n.tags.forEach(i=>{let s=i._d||i._p;const o=r[s];if(o){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&(i.tag==="htmlAttrs"||i.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const l=o.props;["class","style"].forEach(u=>{i.props[u]&&l[u]&&(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),i.props[u]=`${l[u]} ${i.props[u]}`)}),r[s].props={...l,...i.props};return}else i._e===o._e&&(s=i._d=`${s}:${i._p}`);const c=Object.keys(i.props).length;if((c===0||c===1&&typeof i.props["data-h-key"]<"u")&&!i.children){delete r[s];return}}r[s]=i}),n.tags=Object.values(r)}}}},Rw=()=>({hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(i=>i._d===n))==null?void 0:r._p};for(const n of e.tags){if(!n.tagPriority||typeof n.tagPriority=="number")continue;const r=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:i,offset:s}of r)if(n.tagPriority.startsWith(i)){const o=n.tagPriority.replace(i,""),a=t(o);typeof a<"u"&&(n._p=a+s)}}e.tags.sort((n,r)=>n._p-r._p).sort(bw)}}}),kw=()=>({hooks:{"tags:resolve":e=>{e.tags=Aw(e.tags)}}}),Sw=()=>({hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}),Pw=typeof window<"u",Ow=()=>({hooks:{"tag:normalise":e=>{var i,s;const{tag:t,entry:n}=e,r=typeof t.props._dynamic<"u";!Ad.includes(t.tag)||!t.key||(t._hash=Oc(JSON.stringify({tag:t.tag,key:t.key})),!(Pw||(s=(i=Rd())==null?void 0:i.resolvedOptions)!=null&&s.document)&&(n._m==="server"||r)&&(t.props[`data-h-${t._hash}`]=""))},"tags:resolve":e=>{e.tags=e.tags.map(t=>(delete t.props._dynamic,t))}}}),Dw=e=>({hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Promise.resolve().then(function(){return yw}).then(({debouncedRenderDOMHead:r})=>{r(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})})}}}),Nw=()=>{const e=(t,n)=>{const r={},i={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?i[o]=a:r[o]=a});let s;return t==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof i.onload<"u"&&(s=r.src,delete r.src),{props:r,eventHandlers:i,delayedSrc:s}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(n.props=e("ssr",n).props,n))},"dom:beforeRenderTag":function(t){const{props:n,eventHandlers:r,delayedSrc:i}=e("dom",t.tag);Object.keys(r).length&&(t.tag.props=n,t.tag._eventHandlers=r,t.tag._delayedSrc=i)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const r=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([i,s])=>{const o=`${t.tag._d||t.tag._p}:${i}`,a=i.slice(2).toLowerCase(),c=`data-h-${a}`;if(delete t.staleSideEffects[o],n.hasAttribute(c))return;const l=s;n.setAttribute(c,""),r.addEventListener(a,l),t.entry&&(t.entry._sde[o]=()=>{r.removeEventListener(a,l),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}};function Mw(e){return Array.isArray(e)?e:[e]}const Ad=["base","meta","link","style","script","noscript"];let Cd;const Lw=e=>Cd=e,Rd=()=>Cd,xw=10;async function $w(e){const t=[];return Object.entries(e.resolvedInput||e.input).filter(([n,r])=>typeof r<"u"&&vw.includes(n)).forEach(([n,r])=>{const i=Mw(r);t.push(...i.map(s=>ww(n,s)).flat())}),(await Promise.all(t)).flat().map((n,r)=>(n._e=e._i,n._p=(e._i<<xw)+r,n))}const Uw=()=>[Cw(),Rw(),kw(),Ow(),Nw(),Sw()],Fw=(e={})=>[Dw({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})];function Hw(e={}){const t=jw({...e,plugins:[...Fw(e),...(e==null?void 0:e.plugins)||[]]});return Lw(t),t}function jw(e={}){let t=[],n={},r=0;const i=_d();e!=null&&e.hooks&&i.addHooks(e.hooks),e.plugins=[...Uw(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&i.addHooks(a.hooks));const s=()=>i.callHook("entries:updated",o),o={resolvedOptions:e,headEntries(){return t},get hooks(){return i},use(a){a.hooks&&i.addHooks(a.hooks)},push(a,c){const l={_i:r++,input:a,_sde:{}};return c!=null&&c.mode&&(l._m=c==null?void 0:c.mode),t.push(l),s(),{dispose(){t=t.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},s(),!1))},patch(u){t=t.map(f=>(f._i===l._i&&(l.input=f.input=u,s()),f))}}},async resolveTags(){const a={tags:[],entries:[...t]};await i.callHook("entries:resolve",a);for(const c of a.entries)for(const l of await $w(c)){const u={tag:l,entry:c};await i.callHook("tag:normalise",u),a.tags.push(u.tag)}return await i.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...n};return n={},a}};return o.hooks.callHook("init",o),o}function Bw(e){return typeof e=="function"?e():Pe(e)}function As(e,t=""){if(e instanceof Promise)return e;const n=Bw(e);if(!e||!n)return n;if(Array.isArray(n))return n.map(r=>As(r,t));if(typeof n=="object"){let r=!1;const i=Object.fromEntries(Object.entries(n).map(([s,o])=>s==="titleTemplate"||s.startsWith("on")?[s,Pe(o)]:((typeof o=="function"||Ie(o))&&(r=!0),[s,As(o,s)])));return r&&Ad.includes(String(t))&&(i._dynamic=!0),i}return n}const Kw=Sc.startsWith("3"),Ww=typeof window<"u",kd="usehead";function Dc(){return Vn()&&rt(kd)||Rd()}function Vw(e={}){const t=Hw({...e,domDelayFn:r=>setTimeout(()=>Cr(()=>r()),10),plugins:[qw(),...(e==null?void 0:e.plugins)||[]]}),n={install(r){Kw&&(r.config.globalProperties.$unhead=t,r.provide(kd,t))}};return t.install=n.install,t}const qw=()=>({hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=As(t.input)}}});function zw(e,t={}){const n=Dc(),r=hn(!1),i=hn({});My(()=>{i.value=As(e)});const s=n.push(i.value,t);return lr([i,r],([a,c])=>{c||s.patch(a)}),Vn()&&(Ii(()=>{s.dispose()}),jh(()=>{r.value=!0}),Hh(()=>{r.value=!1})),s}function Gw(e,t={}){return Dc().push(e,t)}function Sd(e,t={}){var r;const n=Dc();if(n){const i=Ww||!!((r=n.resolvedOptions)!=null&&r.document);return t.mode==="server"&&i||t.mode==="client"&&!i?void 0:i?zw(e,t):Gw(e,t)}}const Jw=["script","style","noscript"],Xw=["base","meta","link","style","script","noscript"],Yw=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function Qw(e,t){const{props:n,tag:r}=e;if(Yw.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const i=["id"];r==="meta"&&i.push("name","property","http-equiv");for(const s of i)if(typeof n[s]<"u"){const o=String(n[s]);return t&&!t(o)?!1:`${r}:${s}:${o}`}return!1}const Zi=(e,t)=>{const{tag:n,$el:r}=e;r&&(Object.entries(n.props).forEach(([i,s])=>{s=String(s);const o=`attr:${i}`;if(i==="class"){if(!s)return;for(const a of s.split(" ")){const c=`${o}:${a}`;t&&t(e,c,()=>r.classList.remove(a)),r.classList.contains(a)||r.classList.add(a)}return}t&&!i.startsWith("data-h-")&&t(e,o,()=>r.removeAttribute(i)),r.getAttribute(i)!==s&&r.setAttribute(i,s)}),Jw.includes(n.tag)&&r.innerHTML!==(n.children||"")&&(r.innerHTML=n.children||""))};function Zw(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function Pd(e,t={}){var u,f;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=t.document||window.document,i=e._popSideEffectQueue();e.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([p,y])=>{i[p]=y})});const s=async h=>{const p=e.headEntries().find(I=>I._i===h._e),y={renderId:h._d||Zw(JSON.stringify({...h,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:h,entry:p,staleSideEffects:i};return await e.hooks.callHook("dom:beforeRenderTag",y),y},o=[],a={body:[],head:[]},c=(h,p,y)=>{p=`${h.renderId}:${p}`,h.entry&&(h.entry._sde[p]=y),delete i[p]},l=h=>{e._elMap[h.renderId]=h.$el,o.push(h),c(h,"el",()=>{var p;(p=h.$el)==null||p.remove(),delete e._elMap[h.renderId]})};for(const h of await e.resolveTags()){const p=await s(h);if(!p.shouldRender)continue;const{tag:y}=p;if(y.tag==="title"){r.title=y.children||"",o.push(p);continue}if(y.tag==="htmlAttrs"||y.tag==="bodyAttrs"){p.$el=r[y.tag==="htmlAttrs"?"documentElement":"body"],Zi(p,c),o.push(p);continue}if(p.$el=e._elMap[p.renderId],!p.$el&&y._hash&&(p.$el=r.querySelector(`${(u=y.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${y.tag}[data-h-${y._hash}]`)),p.$el){p.tag._d&&Zi(p),l(p);continue}p.$el=r.createElement(y.tag),Zi(p),a[(f=y.tagPosition)!=null&&f.startsWith("body")?"body":"head"].push(p)}Object.entries(a).forEach(([h,p])=>{var I;if(!p.length)return;const y=(I=r==null?void 0:r[h])==null?void 0:I.children;if(y){for(const b of[...y].reverse()){const _=b.tagName.toLowerCase();if(!Xw.includes(_))continue;const g=Qw({tag:_,props:b.getAttributeNames().reduce((w,A)=>({...w,[A]:b.getAttribute(A)}),{})}),v=p.findIndex(w=>{var A;return w&&(w.tag._d===g||((A=b.isEqualNode)==null?void 0:A.call(b,w.$el)))});if(v!==-1){const w=p[v];w.$el=b,Zi(w),l(w),delete p[v]}}p.forEach(b=>{if(b.$el){switch(b.tag.tagPosition){case"bodyClose":r.body.appendChild(b.$el);break;case"bodyOpen":r.body.insertBefore(b.$el,r.body.firstChild);break;case"head":default:r.head.appendChild(b.$el);break}l(b)}})}});for(const h of o)await e.hooks.callHook("dom:renderTag",h);Object.values(i).forEach(h=>h())}let Fo=null;async function e0(e,t={}){function n(){return Fo=null,Pd(e,t)}const r=t.delayFn||(i=>setTimeout(i,10));return Fo=Fo||new Promise(i=>r(()=>i(n())))}function t0(e){const t=Vw(),n={unhead:t,install(r){Sc.startsWith("3")&&(r.config.globalProperties.$head=t,r.provide("usehead",t))},use(r){t.use(r)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(r,i){return t.push(r,i)},addEntry(r,i){return t.push(r,i)},addHeadObjs(r,i){return t.push(r,i)},addReactiveEntry(r,i){const s=Sd(r,i);return typeof s<"u"?s.dispose:()=>{}},removeHeadObjs(){},updateDOM(r,i){i?Pd(t,{document:r}):e0(t,{delayFn:s=>setTimeout(()=>s(),50),document:r})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=n.addHeadObjs,t.updateDOM=n.updateDOM,t.hooks.hook("dom:beforeRender",r=>{for(const i of n.hooks["before:dom"])i()===!1&&(r.shouldRender=!1)}),e&&n.addHeadObjs(e),n}const Na=globalThis.requestIdleCallback||(e=>{const t=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-t))};return setTimeout(()=>{e(n)},1)}),n0=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),r0=e=>{const t=ye();t.isHydrating?t.hooks.hookOnce("app:suspense:resolve",()=>{Na(e)}):Na(e)};async function Od(e,t=no()){if(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(e))return;t._routePreloaded.add(e);const n=t._preloadPromises=t._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>Od(e,t));const r=t.resolve(e).matched.map(i=>{var s;return(s=i.components)==null?void 0:s.default}).filter(i=>typeof i=="function");for(const i of r){const s=Promise.resolve(i()).catch(()=>{}).finally(()=>n.splice(n.indexOf(s)));n.push(s)}await Promise.all(n)}const i0="modulepreload",s0=function(e,t){return e.startsWith(".")?new URL(e,t).href:e},Ru={},Zn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=s0(s,r),s in Ru)return;Ru[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":i0,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},o0=(...e)=>e.find(t=>t!==void 0),a0="noopener noreferrer";function c0(e){const t=e.componentName||"NuxtLink";return Xt({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(n,{slots:r}){const i=no(),s=Ce(()=>n.to||n.href||""),o=Ce(()=>n.external||n.target&&n.target!=="_self"?!0:typeof s.value=="object"?!1:s.value===""||Ai(s.value,!0)),a=hn(!1),c=hn(null);if(n.prefetch!==!1&&n.noPrefetch!==!0&&typeof s.value=="string"&&n.target!=="_blank"&&!u0()){const u=ye();let f,h=null;Qs(()=>{const p=l0();r0(()=>{f=Na(()=>{var y;(y=c==null?void 0:c.value)!=null&&y.tagName&&(h=p.observe(c.value,async()=>{h==null||h(),h=null,await Promise.all([u.hooks.callHook("link:prefetch",s.value).catch(()=>{}),!o.value&&Od(s.value,i).catch(()=>{})]),a.value=!0}))})})}),Ii(()=>{f&&n0(f),h==null||h(),h=null})}return()=>{var p,y;if(!o.value)return it(zy("RouterLink"),{ref:I=>{c.value=I==null?void 0:I.$el},to:s.value,...a.value&&!n.custom?{class:n.prefetchedClass||e.prefetchedClass}:{},activeClass:n.activeClass||e.activeClass,exactActiveClass:n.exactActiveClass||e.exactActiveClass,replace:n.replace,ariaCurrentValue:n.ariaCurrentValue,custom:n.custom},r.default);const l=typeof s.value=="object"?((p=i.resolve(s.value))==null?void 0:p.href)??null:s.value||null,u=n.target||null,f=n.noRel?null:o0(n.rel,e.externalRelAttribute,l?a0:"")||null,h=()=>fw(l,{replace:n.replace});return n.custom?r.default?r.default({href:l,navigate:h,route:i.resolve(l),rel:f,target:u,isExternal:o.value,isActive:!1,isExactActive:!1}):null:it("a",{ref:c,href:l,rel:f,target:u},(y=r.default)==null?void 0:y.call(r))}}})}const CS=c0({componentName:"NuxtLink"});function l0(){const e=ye();if(e._observer)return e._observer;let t=null;const n=new Map,r=(s,o)=>(t||(t=new IntersectionObserver(a=>{for(const c of a){const l=n.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&l&&l()}})),n.set(s,o),t.observe(s),()=>{n.delete(s),t.unobserve(s),n.size===0&&(t.disconnect(),t=null)});return e._observer={observe:r}}function u0(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}function Ho(e){return e!==null&&typeof e=="object"}function Ma(e,t,n=".",r){if(!Ho(t))return Ma(e,{},n,r);const i=Object.assign({},t);for(const s in e){if(s==="__proto__"||s==="constructor")continue;const o=e[s];o!=null&&(r&&r(i,s,o,n)||(Array.isArray(o)&&Array.isArray(i[s])?i[s]=[...o,...i[s]]:Ho(o)&&Ho(i[s])?i[s]=Ma(o,i[s],(n?`${n}.`:"")+s.toString(),r):i[s]=o))}return i}function Dd(e){return(...t)=>t.reduce((n,r)=>Ma(n,r,"",e),{})}const Nd=Dd(),f0=Dd((e,t,n)=>{if(typeof e[t]<"u"&&typeof n=="function")return e[t]=n(e[t]),!0}),h0={};f0(h0);const jo={},d0=Rr(e=>{for(const t in jo)e.vueApp.component(t,jo[t]),e.vueApp.component("Lazy"+t,jo[t])}),p0={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},g0=!1,La=!1,m0=!1,y0="__nuxt",v0=Rr(e=>{const t=t0();t.push(p0),e.vueApp.use(t);{let n=!0;const r=()=>{n=!1,t.internalHooks.callHook("entries:updated",t.unhead)};t.internalHooks.hook("dom:beforeRender",i=>{i.shouldRender=!n}),e.hooks.hook("page:start",()=>{n=!0}),e.hooks.hook("page:finish",r),e.hooks.hook("app:mounted",r)}e._useHead=Sd});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Xn=typeof window<"u";function _0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Bo(e,t){const n={};for(const r in t){const i=t[r];n[r]=Tt(i)?i.map(e):e(i)}return n}const Gr=()=>{},Tt=Array.isArray,w0=/\/$/,E0=e=>e.replace(w0,"");function Ko(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=A0(r??t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ku(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function T0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&vr(t.matched[r],n.matched[i])&&Md(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function vr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Md(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!I0(e[n],t[n]))return!1;return!0}function I0(e,t){return Tt(e)?Su(e,t):Tt(t)?Su(t,e):e===t}function Su(e,t){return Tt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function A0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var oi;(function(e){e.pop="pop",e.push="push"})(oi||(oi={}));var Jr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Jr||(Jr={}));function C0(e){if(!e)if(Xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),E0(e)}const R0=/^[^#]+#/;function k0(e,t){return e.replace(R0,"#")+t}function S0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function P0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=S0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Pu(e,t){return(history.state?history.state.position-t:-1)+e}const xa=new Map;function O0(e,t){xa.set(e,t)}function D0(e){const t=xa.get(e);return xa.delete(e),t}let N0=()=>location.protocol+"//"+location.host;function Ld(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),ku(c,"")}return ku(n,e)+r+i}function M0(e,t,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const p=Ld(e,location),y=n.value,I=t.value;let b=0;if(h){if(n.value=p,t.value=h,o&&o===y){o=null;return}b=I?h.position-I.position:0}else r(p);i.forEach(_=>{_(n.value,y,{delta:b,type:oi.pop,direction:b?b>0?Jr.forward:Jr.back:Jr.unknown})})};function c(){o=n.value}function l(h){i.push(h);const p=()=>{const y=i.indexOf(h);y>-1&&i.splice(y,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ce({},h.state,{scroll:ro()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function Ou(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ro():null}}function L0(e){const{history:t,location:n}=window,r={value:Ld(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:N0()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(c,l){const u=ce({},t.state,Ou(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=ce({},i.value,t.state,{forward:c,scroll:ro()});s(u.current,u,!0);const f=ce({},Ou(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function xd(e){e=C0(e);const t=L0(e),n=M0(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=ce({location:"",base:e,go:r,createHref:k0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function x0(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),xd(e)}function $0(e){return typeof e=="string"||e&&typeof e=="object"}function $d(e){return typeof e=="string"||typeof e=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ud=Symbol("");var Du;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Du||(Du={}));function _r(e,t){return ce(new Error,{type:e,[Ud]:!0},t)}function $t(e,t){return e instanceof Error&&Ud in e&&(t==null||!!(e.type&t))}const Nu="[^/]+?",U0={sensitive:!1,strict:!1,start:!0,end:!0},F0=/[.+*?^${}()[\]/\\]/g;function H0(e,t){const n=ce({},U0,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(F0,"\\$&"),p+=40;else if(h.type===1){const{value:y,repeatable:I,optional:b,regexp:_}=h;s.push({name:y,repeatable:I,optional:b});const g=_||Nu;if(g!==Nu){p+=10;try{new RegExp(`(${g})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${y}" (${g}): `+w.message)}}let v=I?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;f||(v=b&&l.length<2?`(?:/${v})`:"/"+v),b&&(v+="?"),i+=v,p+=20,b&&(p+=-8),I&&(p+=-20),g===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",y=s[h-1];f[y.name]=p&&y.repeatable?p.split("/"):p}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:I,optional:b}=p,_=y in l?l[y]:"";if(Tt(_)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const g=Tt(_)?_.join("/"):_;if(!g)if(b)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=g}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function j0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function B0(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=j0(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Mu(r))return 1;if(Mu(i))return-1}return i.length-r.length}function Mu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const K0={type:0,value:""},W0=/[a-zA-Z0-9_]/;function V0(e){if(!e)return[[]];if(e==="/")return[[K0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:W0.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function q0(e,t,n){const r=H0(V0(e.path),n),i=ce(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function z0(e,t){const n=[],r=new Map;t=$u({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,h){const p=!h,y=G0(u);y.aliasOf=h&&h.record;const I=$u(t,u),b=[y];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of v)b.push(ce({},y,{components:h?h.record.components:y.components,path:w,aliasOf:h?h.record:y}))}let _,g;for(const v of b){const{path:w}=v;if(f&&w[0]!=="/"){const A=f.record.path,N=A[A.length-1]==="/"?"":"/";v.path=f.record.path+(w&&N+w)}if(_=q0(v,f,I),h?h.alias.push(_):(g=g||_,g!==_&&g.alias.push(_),p&&u.name&&!xu(_)&&o(u.name)),y.children){const A=y.children;for(let N=0;N<A.length;N++)s(A[N],_,h&&h.children[N])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return g?()=>{o(g)}:Gr}function o(u){if($d(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&B0(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Fd(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!xu(u)&&r.set(u.record.name,u)}function l(u,f){let h,p={},y,I;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw _r(1,{location:u});I=h.record.name,p=ce(Lu(f.params,h.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&Lu(u.params,h.keys.map(g=>g.name))),y=h.stringify(p)}else if("path"in u)y=u.path,h=n.find(g=>g.re.test(y)),h&&(p=h.parse(y),I=h.record.name);else{if(h=f.name?r.get(f.name):n.find(g=>g.re.test(f.path)),!h)throw _r(1,{location:u,currentLocation:f});I=h.record.name,p=ce({},f.params,u.params),y=h.stringify(p)}const b=[];let _=h;for(;_;)b.unshift(_.record),_=_.parent;return{name:I,path:y,params:p,matched:b,meta:X0(b)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Lu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function G0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:J0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function J0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function xu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function X0(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function $u(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Fd(e,t){return t.children.some(n=>n===e||Fd(e,n))}const Hd=/#/g,Y0=/&/g,Q0=/\//g,Z0=/=/g,eE=/\?/g,jd=/\+/g,tE=/%5B/g,nE=/%5D/g,Bd=/%5E/g,rE=/%60/g,Kd=/%7B/g,iE=/%7C/g,Wd=/%7D/g,sE=/%20/g;function Nc(e){return encodeURI(""+e).replace(iE,"|").replace(tE,"[").replace(nE,"]")}function oE(e){return Nc(e).replace(Kd,"{").replace(Wd,"}").replace(Bd,"^")}function $a(e){return Nc(e).replace(jd,"%2B").replace(sE,"+").replace(Hd,"%23").replace(Y0,"%26").replace(rE,"`").replace(Kd,"{").replace(Wd,"}").replace(Bd,"^")}function aE(e){return $a(e).replace(Z0,"%3D")}function cE(e){return Nc(e).replace(Hd,"%23").replace(eE,"%3F")}function lE(e){return e==null?"":cE(e).replace(Q0,"%2F")}function Cs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function uE(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(jd," "),o=s.indexOf("="),a=Cs(o<0?s:s.slice(0,o)),c=o<0?null:Cs(s.slice(o+1));if(a in t){let l=t[a];Tt(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Uu(e){let t="";for(let n in e){const r=e[n];if(n=aE(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Tt(r)?r.map(s=>s&&$a(s)):[r&&$a(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function fE(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Tt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const hE=Symbol(""),Fu=Symbol(""),Mc=Symbol(""),Lc=Symbol(""),Ua=Symbol("");function Mr(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function on(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(_r(4,{from:n,to:t})):f instanceof Error?a(f):$0(f)?a(_r(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Wo(e,t,n,r){const i=[];for(const s of e)for(const o in s.components){let a=s.components[o];if(!(t!=="beforeRouteEnter"&&!s.instances[o]))if(dE(a)){const l=(a.__vccOpts||a)[t];l&&i.push(on(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=_0(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[t];return h&&on(h,n,r,s,o)()}))}}return i}function dE(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hu(e){const t=rt(Mc),n=rt(Lc),r=Ce(()=>t.resolve(Pe(e.to))),i=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(vr.bind(null,u));if(h>-1)return h;const p=ju(c[l-2]);return l>1&&ju(u)===p&&f[f.length-1].path!==p?f.findIndex(vr.bind(null,c[l-2])):h}),s=Ce(()=>i.value>-1&&yE(n.params,r.value.params)),o=Ce(()=>i.value>-1&&i.value===n.matched.length-1&&Md(n.params,r.value.params));function a(c={}){return mE(c)?t[Pe(e.replace)?"replace":"push"](Pe(e.to)).catch(Gr):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const pE=Xt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hu,setup(e,{slots:t}){const n=Lt(Hu(e)),{options:r}=rt(Mc),i=Ce(()=>({[Bu(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bu(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:it("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),gE=pE;function mE(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yE(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Tt(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function ju(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Bu=(e,t,n)=>e??t??n,vE=Xt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=rt(Ua),i=Ce(()=>e.route||r.value),s=rt(Fu,0),o=Ce(()=>{let l=Pe(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ce(()=>i.value.matched[o.value]);cr(Fu,Ce(()=>o.value+1)),cr(hE,a),cr(Ua,i);const c=hn();return lr(()=>[c.value,a.value,e.name],([l,u,f],[h,p,y])=>{u&&(u.instances[f]=l,p&&p!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!vr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return Ku(n.default,{Component:h,route:l});const p=f.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,b=it(h,ce({},y,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ku(n.default,{Component:b,route:l})||b}}});function Ku(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vd=vE;function _E(e){const t=z0(e.routes,e),n=e.parseQuery||uE,r=e.stringifyQuery||Uu,i=e.history,s=Mr(),o=Mr(),a=Mr(),c=ya(nn);let l=nn;Xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bo.bind(null,C=>""+C),f=Bo.bind(null,lE),h=Bo.bind(null,Cs);function p(C,U){let L,W;return $d(C)?(L=t.getRecordMatcher(C),W=U):W=C,t.addRoute(W,L)}function y(C){const U=t.getRecordMatcher(C);U&&t.removeRoute(U)}function I(){return t.getRoutes().map(C=>C.record)}function b(C){return!!t.getRecordMatcher(C)}function _(C,U){if(U=ce({},U||c.value),typeof C=="string"){const d=Ko(n,C,U.path),m=t.resolve({path:d.path},U),E=i.createHref(d.fullPath);return ce(d,m,{params:h(m.params),hash:Cs(d.hash),redirectedFrom:void 0,href:E})}let L;if("path"in C)L=ce({},C,{path:Ko(n,C.path,U.path).path});else{const d=ce({},C.params);for(const m in d)d[m]==null&&delete d[m];L=ce({},C,{params:f(C.params)}),U.params=f(U.params)}const W=t.resolve(L,U),ie=C.hash||"";W.params=u(h(W.params));const ve=b0(r,ce({},C,{hash:oE(ie),path:W.path})),ee=i.createHref(ve);return ce({fullPath:ve,hash:ie,query:r===Uu?fE(C.query):C.query||{}},W,{redirectedFrom:void 0,href:ee})}function g(C){return typeof C=="string"?Ko(n,C,c.value.path):ce({},C)}function v(C,U){if(l!==C)return _r(8,{from:U,to:C})}function w(C){return F(C)}function A(C){return w(ce(g(C),{replace:!0}))}function N(C){const U=C.matched[C.matched.length-1];if(U&&U.redirect){const{redirect:L}=U;let W=typeof L=="function"?L(C):L;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=g(W):{path:W},W.params={}),ce({query:C.query,hash:C.hash,params:"path"in W?{}:C.params},W)}}function F(C,U){const L=l=_(C),W=c.value,ie=C.state,ve=C.force,ee=C.replace===!0,d=N(L);if(d)return F(ce(g(d),{state:typeof d=="object"?ce({},ie,d.state):ie,force:ve,replace:ee}),U||L);const m=L;m.redirectedFrom=U;let E;return!ve&&T0(r,W,L)&&(E=_r(16,{to:m,from:W}),Tn(W,W,!0,!1)),(E?Promise.resolve(E):K(m,W)).catch(T=>$t(T)?$t(T,2)?T:mt(T):he(T,m,W)).then(T=>{if(T){if($t(T,2))return F(ce({replace:ee},g(T.to),{state:typeof T.to=="object"?ce({},ie,T.to.state):ie,force:ve}),U||m)}else T=z(m,W,!0,ee,ie);return B(m,W,T),T})}function S(C,U){const L=v(C,U);return L?Promise.reject(L):Promise.resolve()}function K(C,U){let L;const[W,ie,ve]=wE(C,U);L=Wo(W.reverse(),"beforeRouteLeave",C,U);for(const d of W)d.leaveGuards.forEach(m=>{L.push(on(m,C,U))});const ee=S.bind(null,C,U);return L.push(ee),Gn(L).then(()=>{L=[];for(const d of s.list())L.push(on(d,C,U));return L.push(ee),Gn(L)}).then(()=>{L=Wo(ie,"beforeRouteUpdate",C,U);for(const d of ie)d.updateGuards.forEach(m=>{L.push(on(m,C,U))});return L.push(ee),Gn(L)}).then(()=>{L=[];for(const d of C.matched)if(d.beforeEnter&&!U.matched.includes(d))if(Tt(d.beforeEnter))for(const m of d.beforeEnter)L.push(on(m,C,U));else L.push(on(d.beforeEnter,C,U));return L.push(ee),Gn(L)}).then(()=>(C.matched.forEach(d=>d.enterCallbacks={}),L=Wo(ve,"beforeRouteEnter",C,U),L.push(ee),Gn(L))).then(()=>{L=[];for(const d of o.list())L.push(on(d,C,U));return L.push(ee),Gn(L)}).catch(d=>$t(d,8)?d:Promise.reject(d))}function B(C,U,L){for(const W of a.list())W(C,U,L)}function z(C,U,L,W,ie){const ve=v(C,U);if(ve)return ve;const ee=U===nn,d=Xn?history.state:{};L&&(W||ee?i.replace(C.fullPath,ce({scroll:ee&&d&&d.scroll},ie)):i.push(C.fullPath,ie)),c.value=C,Tn(C,U,L,ee),mt()}let $;function Z(){$||($=i.listen((C,U,L)=>{if(!Bi.listening)return;const W=_(C),ie=N(W);if(ie){F(ce(ie,{replace:!0}),W).catch(Gr);return}l=W;const ve=c.value;Xn&&O0(Pu(ve.fullPath,L.delta),ro()),K(W,ve).catch(ee=>$t(ee,12)?ee:$t(ee,2)?(F(ee.to,W).then(d=>{$t(d,20)&&!L.delta&&L.type===oi.pop&&i.go(-1,!1)}).catch(Gr),Promise.reject()):(L.delta&&i.go(-L.delta,!1),he(ee,W,ve))).then(ee=>{ee=ee||z(W,ve,!1),ee&&(L.delta&&!$t(ee,8)?i.go(-L.delta,!1):L.type===oi.pop&&$t(ee,20)&&i.go(-1,!1)),B(W,ve,ee)}).catch(Gr)}))}let H=Mr(),Me=Mr(),re;function he(C,U,L){mt(C);const W=Me.list();return W.length?W.forEach(ie=>ie(C,U,L)):console.error(C),Promise.reject(C)}function ue(){return re&&c.value!==nn?Promise.resolve():new Promise((C,U)=>{H.add([C,U])})}function mt(C){return re||(re=!C,Z(),H.list().forEach(([U,L])=>C?L(C):U()),H.reset()),C}function Tn(C,U,L,W){const{scrollBehavior:ie}=e;if(!Xn||!ie)return Promise.resolve();const ve=!L&&D0(Pu(C.fullPath,0))||(W||!L)&&history.state&&history.state.scroll||null;return Cr().then(()=>ie(C,U,ve)).then(ee=>ee&&P0(ee)).catch(ee=>he(ee,C,U))}const yt=C=>i.go(C);let Ve;const qn=new Set,Bi={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:b,getRoutes:I,resolve:_,options:e,push:w,replace:A,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Me.add,isReady:ue,install(C){const U=this;C.component("RouterLink",gE),C.component("RouterView",Vd),C.config.globalProperties.$router=U,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(c)}),Xn&&!Ve&&c.value===nn&&(Ve=!0,w(i.location).catch(ie=>{}));const L={};for(const ie in nn)L[ie]=Ce(()=>c.value[ie]);C.provide(Mc,U),C.provide(Lc,Lt(L)),C.provide(Ua,c);const W=C.unmount;qn.add(C),C.unmount=function(){qn.delete(C),qn.size<1&&(l=nn,$&&$(),$=null,c.value=nn,Ve=!1,re=!1),W()}}};return Bi}function Gn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function wE(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(l=>vr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>vr(l,c))||i.push(c))}return[n,r,i]}function EE(){return rt(Lc)}const Qe={auth:!1},Ze={auth:!1},et={},tt={auth:!1},Wu=[{name:(Qe==null?void 0:Qe.name)??"api-routes",path:(Qe==null?void 0:Qe.path)??"/api-routes",children:[],meta:Qe,alias:(Qe==null?void 0:Qe.alias)||[],redirect:(Qe==null?void 0:Qe.redirect)||void 0,component:()=>Zn(()=>import("./api-routes.40484a46.js"),[],import.meta.url).then(e=>e.default||e)},{name:(Ze==null?void 0:Ze.name)??"index",path:(Ze==null?void 0:Ze.path)??"/",children:[],meta:Ze,alias:(Ze==null?void 0:Ze.alias)||[],redirect:(Ze==null?void 0:Ze.redirect)||void 0,component:()=>Zn(()=>import("./index.235446c7.js"),["./index.235446c7.js","./index.d5eb94d1.css"],import.meta.url).then(e=>e.default||e)},{name:(et==null?void 0:et.name)??"protected-globally",path:(et==null?void 0:et.path)??"/protected/globally",children:[],meta:et,alias:(et==null?void 0:et.alias)||[],redirect:(et==null?void 0:et.redirect)||void 0,component:()=>Zn(()=>import("./globally.937c2c4a.js"),["./globally.937c2c4a.js","./globally.b6a12266.css"],import.meta.url).then(e=>e.default||e)},{name:(tt==null?void 0:tt.name)??"protected-locally",path:(tt==null?void 0:tt.path)??"/protected/locally",children:[],meta:tt,alias:(tt==null?void 0:tt.alias)||[],redirect:(tt==null?void 0:tt.redirect)||void 0,component:()=>Zn(()=>import("./locally.361519ee.js"),["./locally.361519ee.js","./locally.2f628f6d.css"],import.meta.url).then(e=>e.default||e)}],bE={scrollBehavior(e,t,n){const r=ye();let i=n||void 0;if(!i&&t&&e&&e.meta.scrollToTop!==!1&&TE(t,e)&&(i={left:0,top:0}),e.path===t.path){if(t.hash&&!e.hash)return{left:0,top:0};if(e.hash)return{el:e.hash,top:Vu(e.hash)}}const s=a=>!!(a.meta.pageTransition??La),o=s(t)&&s(e)?"page:transition:finish":"page:finish";return new Promise(a=>{r.hooks.hookOnce(o,async()=>{await Cr(),e.hash&&(i={el:e.hash,top:Vu(e.hash)}),a(i)})})}};function Vu(e){try{const t=document.querySelector(e);if(t)return parseFloat(getComputedStyle(t).scrollMarginTop)}catch{}return 0}function TE(e,t){const n=e.matched[0]===t.matched[0];return!!(!n||n&&JSON.stringify(e.params)!==JSON.stringify(t.params))}const IE={},Ut={...IE,...bE},AE=Td(async e=>{var i;let t,n;if(!((i=e.meta)!=null&&i.validate))return;const r=([t,n]=Is(()=>Promise.resolve(e.meta.validate(e))),t=await t,n(),t);if(r!==!0)return r}),CE=[AE],Xr={};function RE(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){const a=i.includes(e.slice(s))?e.slice(s).length:1;let c=i.slice(a);return c[0]!=="/"&&(c="/"+c),wu(c,"")}return wu(n,e)+r+i}const kE=Rr(async e=>{var y,I;let t,n,r=Fn().app.baseURL;Ut.hashMode&&!r.includes("#")&&(r+="#");const i=((y=Ut.history)==null?void 0:y.call(Ut,r))??(Ut.hashMode?x0(r):xd(r)),s=((I=Ut.routes)==null?void 0:I.call(Ut,Wu))??Wu,o=RE(r,window.location),a=_E({...Ut,history:i,routes:s});e.vueApp.use(a);const c=ya(a.currentRoute.value);a.afterEach((b,_)=>{c.value=_}),Object.defineProperty(e.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const l=ya(a.resolve(o)),u=()=>{l.value=a.currentRoute.value};e.hook("page:finish",u),a.afterEach((b,_)=>{var g,v,w,A;((v=(g=b.matched[0])==null?void 0:g.components)==null?void 0:v.default)===((A=(w=_.matched[0])==null?void 0:w.components)==null?void 0:A.default)&&u()});const f={};for(const b in l.value)f[b]=Ce(()=>l.value[b]);e._route=Lt(f),e._middleware=e._middleware||{global:[],named:{}};const h=to();try{[t,n]=Is(()=>a.isReady()),await t,n()}catch(b){[t,n]=Is(()=>Ae(e,Fr,[b])),await t,n()}const p=as("_layout");return a.beforeEach(async(b,_)=>{var v;b.meta=Lt(b.meta),e.isHydrating&&p.value&&!Un(b.meta.layout)&&(b.meta.layout=p.value),e._processingMiddleware=!0;const g=new Set([...CE,...e._middleware.global]);for(const w of b.matched){const A=w.meta.middleware;if(A)if(Array.isArray(A))for(const N of A)g.add(N);else g.add(A)}for(const w of g){const A=typeof w=="string"?e._middleware.named[w]||await((v=Xr[w])==null?void 0:v.call(Xr).then(F=>F.default||F)):w;if(!A)throw new Error(`Unknown route middleware: '${w}'.`);const N=await Ae(e,A,[b,_]);if(!e.payload.serverRendered&&e.isHydrating&&(N===!1||N instanceof Error)){const F=N||Da({statusCode:404,statusMessage:`Page Not Found: ${o}`});return await Ae(e,Fr,[F]),!1}if(N||N===!1)return N}}),a.afterEach(async b=>{delete e._processingMiddleware,!e.isHydrating&&h.value&&await Ae(e,sw),b.matched.length===0&&await Ae(e,Fr,[Da({statusCode:404,fatal:!1,statusMessage:`Page not found: ${b.fullPath}`})])}),e.hooks.hookOnce("app:created",async()=>{try{await a.replace({...a.resolve(o),name:void 0,force:!0})}catch(b){await Ae(e,Fr,[b])}}),{provide:{router:a}}}),er={default:()=>Zn(()=>import("./default.018ccff2.js"),["./default.018ccff2.js","./composables.83bcaea5.js"],import.meta.url).then(e=>e.default||e)},SE=Rr(()=>{const e=ye(),t=no();e.hooks.hook("app:mounted",()=>{t.beforeEach(async n=>{var i;const r=(i=n==null?void 0:n.meta)==null?void 0:i.layout;r&&typeof er[r]=="function"&&await er[r]()})}),e.hooks.hook("link:prefetch",n=>{var o,a,c,l;if(Ai(n))return;const r=t.resolve(n);if(!r)return;const i=(o=r==null?void 0:r.meta)==null?void 0:o.layout;let s=Array.isArray((a=r==null?void 0:r.meta)==null?void 0:a.middleware)?(c=r==null?void 0:r.meta)==null?void 0:c.middleware:[(l=r==null?void 0:r.meta)==null?void 0:l.middleware];s=s.filter(u=>typeof u=="string");for(const u of s)typeof Xr[u]=="function"&&Xr[u]();i&&typeof er[i]=="function"&&er[i]()})}),xc=()=>{const e=as("session:data",()=>{}),t=e.value!==void 0,n=as("session:lastRefreshedAt",()=>{if(t)return new Date}),r=as("session:loading",()=>!t),i=Ce(()=>r.value?"loading":e.value?"authenticated":"unauthenticated");return{data:e,loading:r,lastRefreshedAt:n,status:i}};function PE(e,t=!0){const n=t&&e.headers?e.headers["x-forwarded-proto"]:void 0,r=typeof n=="string"?n.includes("https"):void 0;if(r)return!0;const i=e.connection?e.connection.encrypted:void 0,s=i!==void 0?i===!0:void 0;if(s)return!0;if(!(r===void 0&&s===void 0))return!1}var OE=PE;const qu=typeof location<"u"?location:{origin:"",pathname:"/"};function DE(e,t){return e?encodeURI("http"+(OE(e)?"s":"")+"://"+(e.headers["x-forwarded-host"]||e.headers.host)+(t?e.url:"")):qu.origin+(t?qu.pathname:"")}const NE=()=>{const e=Fn().public.auth.origin??"";return Ci(e,Fn().public.auth.basePath)},ME=(e=!0)=>{var t;return DE((t=cw())==null?void 0:t.node.req,e)},qd=e=>Ci(NE(),e),LE=e=>{const t=ye();window.location.href=e,e.includes("#")&&window.location.reload();const n=t.$router;return new Promise(i=>setTimeout(i,60*1e3)).then(()=>n.push(e))},Ri=async(e,t,n)=>{const r=await Ae(e,()=>qd(t));try{return $fetch(r,n)}catch(i){throw console.error("Error in `nuxt-auth`-app-side data fetching: Have you added the authentication handler server-endpoint `[...].ts`? Have you added the authentication handler in a non-default location (default is `~/server/api/auth/[...].ts`) and not updated the module-setting `auth.basePath`? Error is:"),console.error(i),new Error("Runtime error, checkout the console logs to debug, open an issue at https://github.com/sidebase/nuxt-auth/issues/new/choose if you continue to have this problem")}},xE=e=>typeof e=="object"&&Object.keys(e).length>0,$c=async e=>{const{cookie:t}=await Ae(e,()=>aw());return t?{cookie:t}:{}},Hr=(e,t)=>Ae(e,LE,[t]),zu=(e,t)=>Ae(e,qd,[t]),Uc=e=>Ae(e,ME),Fc=async()=>{const e=ye(),t=await $c(e);return Ri(e,"csrf",{headers:t}).then(n=>n.csrfToken)},zd=async(e,t,n)=>{const r=ye(),i=await Gd();if(!i){const A=await zu(r,"error");return Hr(r,A)}const s=await Ae(r,Fn);typeof e>"u"&&(e=s.public.auth.defaultProvider);const{callbackUrl:o=await Uc(r),redirect:a=!0}=t??{},l=`${await zu(r,"signin")}?${new URLSearchParams({callbackUrl:o})}`;if(!e)return Hr(r,l);const u=i[e];if(!u)return Hr(r,l);const f=u.type==="credentials",h=u.type==="email",p=f||h;let y="signin";f&&(y="callback");const I=await Ae(r,Fc),b={"Content-Type":"application/x-www-form-urlencoded",...await $c(r)},_=new URLSearchParams({...t,csrfToken:I,callbackUrl:o,json:!0}),v=await Ae(r,()=>Ri(r,`${y}/${e}`,{method:"post",params:n,headers:b,body:_}).catch(A=>A.data));if(a||!p){const A=v.url??o;return Hr(r,A)}const w=new URL(v.url).searchParams.get("error");return await Ae(r,Hc),{error:w,status:200,ok:!0,url:w?null:v.url}},Gd=()=>Ri(ye(),"providers"),Hc=async e=>{const t=ye(),n=await Uc(t),{required:r,callbackUrl:i,onUnauthenticated:s}=Nd(e||{},{required:!1,callbackUrl:void 0,onUnauthenticated:()=>zd(void 0,{callbackUrl:(e==null?void 0:e.callbackUrl)||n})}),{data:o,status:a,loading:c,lastRefreshedAt:l}=await Ae(t,xc),u=()=>{c.value=!1},f=await $c(t);return Ri(t,"session",{onResponse:({response:h})=>{const p=h._data;return o.value=xE(p)?p:null,c.value=!1,r&&a.value==="unauthenticated"?s():p},onRequest:({options:h})=>{l.value=new Date,h.params={...h.params||{},callbackUrl:i||n}},onRequestError:u,onResponseError:u,headers:f})},$E=async e=>{const t=ye(),n=await Uc(t),{callbackUrl:r=n,redirect:i=!0}=e??{},s=await Fc();if(!s)throw Ed({statusCode:400,statusMessage:"Could not fetch CSRF Token for signing out"});const o=n,a=await Ri(t,"signout",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},onRequest:({options:c})=>{c.body=new URLSearchParams({csrfToken:s,callbackUrl:r||o,json:"true"})}}).catch(c=>c.data);if(i){const c=a.url??r;return Hr(t,c)}return await Hc(),a},Jd=()=>{const{data:e,status:t,lastRefreshedAt:n}=xc(),r={getSession:Hc,getCsrfToken:Fc,getProviders:Gd,signIn:zd,signOut:$E},i={status:t,data:gs(e),lastRefreshedAt:gs(n)};return{...r,...i}},UE=Td(e=>{if(e.meta.auth===!1)return;const{status:t,signIn:n}=Jd();if(!(t.value==="authenticated"||Fn().public.auth.globalMiddlewareOptions.allow404WithoutAuth&&!(e.matched.length>0)))return n(void 0,{callbackUrl:e.path,error:"SessionRequired"})}),FE=Rr(async e=>{let t,n;const{enableSessionRefreshOnWindowFocus:r,enableSessionRefreshPeriodically:i,enableGlobalAppMiddleware:s}=Fn().public.auth,{data:o,lastRefreshedAt:a}=xc(),{getSession:c}=Jd();typeof o.value>"u"&&([t,n]=Is(()=>c()),await t,n());const l=()=>{r&&document.visibilityState==="visible"&&c()};let u;e.hook("app:mounted",()=>{document.addEventListener("visibilitychange",l,!1),i!==!1&&(u=setInterval(()=>{o.value&&c()},i===!0?1e3:i))});const f=e.vueApp.unmount;e.vueApp.unmount=function(){document.removeEventListener("visibilitychange",l,!1),clearInterval(u),a.value=void 0,o.value=void 0,f()},lw("auth",UE,{global:s})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},HE=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(h=64)),r.push(n[u],n[f],n[h],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):HE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new jE;const h=s<<2|a>>4;if(r.push(h),l!==64){const p=a<<4&240|l>>2;if(r.push(p),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class jE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BE=function(e){const t=Xd(e);return Yd.encodeByteArray(t,!0)},Rs=function(e){return BE(e).replace(/\./g,"")},Qd=function(e){try{return Yd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=()=>KE().__FIREBASE_DEFAULTS__,VE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},qE=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Qd(e[1]);return t&&JSON.parse(t)},jc=()=>{try{return WE()||VE()||qE()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zd=e=>{var t,n;return(n=(t=jc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},zE=e=>{const t=Zd(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ep=()=>{var e;return(e=jc())===null||e===void 0?void 0:e.config},tp=e=>{var t;return(t=jc())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Rs(JSON.stringify(n)),Rs(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function np(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function YE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QE(){const e=Be();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function Kc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function rp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="FirebaseError";class It extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ZE,Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_n.prototype.create)}}class _n{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?eb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new It(i,a,r)}}function eb(e,t){return e.replace(tb,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const tb=/\{\$([^}]+)}/g;function nb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ai(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Gu(s)&&Gu(o)){if(!ai(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function rb(e,t){const n=new ib(e,t);return n.subscribe.bind(n)}class ib{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sb(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Vo),i.error===void 0&&(i.error=Vo),i.complete===void 0&&(i.complete=Vo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sb(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Vo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=1e3,ab=2,cb=4*60*60*1e3,lb=.5;function Ju(e,t=ob,n=ab){const r=t*Math.pow(n,e),i=Math.round(lb*r*(Math.random()-.5)*2);return Math.min(cb,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new GE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hb(t))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=kn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=kn){return this.instances.has(t)}getOptions(t=kn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fb(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=kn){return this.component?this.component.multipleInstances?t:kn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fb(e){return e===kn?void 0:e}function hb(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ub(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const pb={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},gb=ae.INFO,mb={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},yb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=mb[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class io{constructor(t){this.name=t,this._logLevel=gb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const vb=(e,t)=>t.some(n=>e instanceof n);let Xu,Yu;function _b(){return Xu||(Xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return Yu||(Yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ip=new WeakMap,Fa=new WeakMap,sp=new WeakMap,qo=new WeakMap,Wc=new WeakMap;function Eb(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(gn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ip.set(n,e)}).catch(()=>{}),Wc.set(t,e),t}function bb(e){if(Fa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Fa.set(e,t)}let Ha={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||sp.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Tb(e){Ha=e(Ha)}function Ib(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zo(this),t,...n);return sp.set(r,t.sort?t.sort():[t]),gn(r)}:wb().includes(e)?function(...t){return e.apply(zo(this),t),gn(ip.get(this))}:function(...t){return gn(e.apply(zo(this),t))}}function Ab(e){return typeof e=="function"?Ib(e):(e instanceof IDBTransaction&&bb(e),vb(e,_b())?new Proxy(e,Ha):e)}function gn(e){if(e instanceof IDBRequest)return Eb(e);if(qo.has(e))return qo.get(e);const t=Ab(e);return t!==e&&(qo.set(e,t),Wc.set(t,e)),t}const zo=e=>Wc.get(e);function Cb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=gn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gn(o.result),c.oldVersion,c.newVersion,gn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Rb=["get","getKey","getAll","getAllKeys","count"],kb=["put","add","delete","clear"],Go=new Map;function Qu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Go.get(t))return Go.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=kb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Rb.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Go.set(t,s),s}Tb(e=>({...e,get:(t,n,r)=>Qu(t,n)||e.get(t,n,r),has:(t,n)=>!!Qu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Pb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ja="@firebase/app",Zu="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new io("@firebase/app"),Ob="@firebase/app-compat",Db="@firebase/analytics-compat",Nb="@firebase/analytics",Mb="@firebase/app-check-compat",Lb="@firebase/app-check",xb="@firebase/auth",$b="@firebase/auth-compat",Ub="@firebase/database",Fb="@firebase/database-compat",Hb="@firebase/functions",jb="@firebase/functions-compat",Bb="@firebase/installations",Kb="@firebase/installations-compat",Wb="@firebase/messaging",Vb="@firebase/messaging-compat",qb="@firebase/performance",zb="@firebase/performance-compat",Gb="@firebase/remote-config",Jb="@firebase/remote-config-compat",Xb="@firebase/storage",Yb="@firebase/storage-compat",Qb="@firebase/firestore",Zb="@firebase/firestore-compat",eT="firebase",tT="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="[DEFAULT]",nT={[ja]:"fire-core",[Ob]:"fire-core-compat",[Nb]:"fire-analytics",[Db]:"fire-analytics-compat",[Lb]:"fire-app-check",[Mb]:"fire-app-check-compat",[xb]:"fire-auth",[$b]:"fire-auth-compat",[Ub]:"fire-rtdb",[Fb]:"fire-rtdb-compat",[Hb]:"fire-fn",[jb]:"fire-fn-compat",[Bb]:"fire-iid",[Kb]:"fire-iid-compat",[Wb]:"fire-fcm",[Vb]:"fire-fcm-compat",[qb]:"fire-perf",[zb]:"fire-perf-compat",[Gb]:"fire-rc",[Jb]:"fire-rc-compat",[Xb]:"fire-gcs",[Yb]:"fire-gcs-compat",[Qb]:"fire-fst",[Zb]:"fire-fst-compat","fire-js":"fire-js",[eT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Map,Ka=new Map;function rT(e,t){try{e.container.addComponent(t)}catch(n){Hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pt(e){const t=e.name;if(Ka.has(t))return Hn.debug(`There were multiple attempts to register component ${t}.`),!1;Ka.set(t,e);for(const n of ks.values())rT(n,e);return!0}function wn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mn=new _n("app","Firebase",iT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=tT;function op(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ba,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=ep()),!n)throw mn.create("no-options");const s=ks.get(i);if(s){if(ai(n,s.options)&&ai(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new db(i);for(const c of Ka.values())o.addComponent(c);const a=new sT(n,r,o);return ks.set(i,a),a}function so(e=Ba){const t=ks.get(e);if(!t&&e===Ba&&ep())return op();if(!t)throw mn.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let i=(r=nT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Hn.warn(a.join(" "));return}pt(new ot(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="firebase-heartbeat-database",aT=1,ci="firebase-heartbeat-store";let Jo=null;function ap(){return Jo||(Jo=Cb(oT,aT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ci)}}}).catch(e=>{throw mn.create("idb-open",{originalErrorMessage:e.message})})),Jo}async function cT(e){try{return await(await ap()).transaction(ci).objectStore(ci).get(cp(e))}catch(t){if(t instanceof It)Hn.warn(t.message);else{const n=mn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Hn.warn(n.message)}}}async function ef(e,t){try{const r=(await ap()).transaction(ci,"readwrite");await r.objectStore(ci).put(t,cp(e)),await r.done}catch(n){if(n instanceof It)Hn.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function cp(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=1024,uT=30*24*60*60*1e3;class fT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=uT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tf(),{heartbeatsToSend:n,unsentEntries:r}=hT(this._heartbeatsCache.heartbeats),i=Rs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tf(){return new Date().toISOString().substring(0,10)}function hT(e,t=lT){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?Kc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ef(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function nf(e){return Rs(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(e){pt(new ot("platform-logger",t=>new Sb(t),"PRIVATE")),pt(new ot("heartbeat",t=>new fT(t),"PRIVATE")),Ge(ja,Zu,e),Ge(ja,Zu,"esm2017"),Ge("fire-js","")}pT("");var gT="firebase",mT="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(gT,mT,"app");function Vc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function lp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yT=lp,up=new _n("auth","Firebase",lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new io("@firebase/auth");function vT(e,...t){Ss.logLevel<=ae.WARN&&Ss.warn(`Auth (${kr}): ${e}`,...t)}function ls(e,...t){Ss.logLevel<=ae.ERROR&&Ss.error(`Auth (${kr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,...t){throw qc(e,...t)}function Dt(e,...t){return qc(e,...t)}function _T(e,t,n){const r=Object.assign(Object.assign({},yT()),{[t]:n});return new _n("auth","Firebase",r).create(t,{appName:e.name})}function qc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return up.create(e,...t)}function Y(e,t,...n){if(!e)throw qc(t,...n)}function jt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ls(t),new Error(t)}function Gt(e,t){e||jt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function wT(){return rf()==="http:"||rf()==="https:"}function rf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wT()||np()||"connection"in navigator)?navigator.onLine:!0}function bT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,n){this.shortDelay=t,this.longDelay=n,Gt(n>t,"Short delay should be less than long delay!"),this.isMobile=XE()||YE()}get(){return ET()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(e,t){Gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=new Si(3e4,6e4);function hp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pi(e,t,n,r,i={}){return dp(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ki(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),fp.fetch()(pp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function dp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},TT),t);try{const i=new CT(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw es(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw es(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw es(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _T(e,u,l);zt(e,u)}}catch(i){if(i instanceof It)throw i;zt(e,"network-request-failed",{message:String(i)})}}async function AT(e,t,n,r,i={}){const s=await Pi(e,t,n,r,i);return"mfaPendingCredential"in s&&zt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function pp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?zc(e.config,i):`${e.config.apiScheme}://${i}`}class CT{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),IT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(e,t){return Pi(e,"POST","/v1/accounts:delete",t)}async function kT(e,t){return Pi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ST(e,t=!1){const n=At(e),r=await n.getIdToken(t),i=Gc(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yr(Xo(i.auth_time)),issuedAtTime:Yr(Xo(i.iat)),expirationTime:Yr(Xo(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xo(e){return Number(e)*1e3}function Gc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qd(n);return i?JSON.parse(i):(ls("Failed to decode base64 JWT payload"),null)}catch(i){return ls("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function PT(e){const t=Gc(e);return Y(t,"internal-error"),Y(typeof t.exp<"u","internal-error"),Y(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof It&&OT(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function OT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yr(this.lastLoginAt),this.creationTime=Yr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(e){var t;const n=e.auth,r=await e.getIdToken(),i=await li(e,kT(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?LT(s.providerUserInfo):[],a=MT(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function NT(e){const t=At(e);await Ps(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function MT(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function LT(e){return e.map(t=>{var{providerId:n}=t,r=Vc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(e,t){const n=await dp(e,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=pp(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Y(t.idToken,"internal-error"),Y(typeof t.idToken<"u","internal-error"),Y(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):PT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Y(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xT(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ui;return r&&(Y(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){Y(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class xn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Vc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await li(this,this.stsTokenManager.getToken(this.auth,t));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ST(this,t)}reload(){return NT(this)}_assign(t){this!==t&&(Y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new xn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await li(this,RT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:w,isAnonymous:A,providerData:N,stsTokenManager:F}=n;Y(v&&F,t,"internal-error");const S=ui.fromJSON(this.name,F);Y(typeof v=="string",t,"internal-error"),rn(f,t.name),rn(h,t.name),Y(typeof w=="boolean",t,"internal-error"),Y(typeof A=="boolean",t,"internal-error"),rn(p,t.name),rn(y,t.name),rn(I,t.name),rn(b,t.name),rn(_,t.name),rn(g,t.name);const K=new xn({uid:v,auth:t,email:h,emailVerified:w,displayName:f,isAnonymous:A,photoURL:y,phoneNumber:p,tenantId:I,stsTokenManager:S,createdAt:_,lastLoginAt:g});return N&&Array.isArray(N)&&(K.providerData=N.map(B=>Object.assign({},B))),b&&(K._redirectEventId=b),K}static async _fromIdTokenResponse(t,n,r=!1){const i=new ui;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ps(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new Map;function Bt(e){Gt(e instanceof Function,"Expected a class definition");let t=sf.get(e);return t?(Gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sf.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mp.type="NONE";const of=mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(e,t,n){return`firebase:${e}:${t}:${n}`}class fr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=us(this.userKey,i.apiKey,s),this.fullPersistenceKey=us("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?xn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new fr(Bt(of),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Bt(of);const o=us(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=xn._fromJSON(t,u);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new fr(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new fr(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_p(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ep(t))return"Blackberry";if(bp(t))return"Webos";if(Jc(t))return"Safari";if((t.includes("chrome/")||vp(t))&&!t.includes("edge/"))return"Chrome";if(wp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yp(e=Be()){return/firefox\//i.test(e)}function Jc(e=Be()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vp(e=Be()){return/crios\//i.test(e)}function _p(e=Be()){return/iemobile/i.test(e)}function wp(e=Be()){return/android/i.test(e)}function Ep(e=Be()){return/blackberry/i.test(e)}function bp(e=Be()){return/webos/i.test(e)}function oo(e=Be()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function $T(e=Be()){var t;return oo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function UT(){return QE()&&document.documentMode===10}function Tp(e=Be()){return oo(e)||wp(e)||bp(e)||Ep(e)||/windows phone/i.test(e)||_p(e)}function FT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(e,t=[]){let n;switch(e){case"Browser":n=af(Be());break;case"Worker":n=`${af(Be())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}async function Ap(e,t){return Pi(e,"GET","/v2/recaptchaConfig",hp(e,t))}function cf(e){return e!==void 0&&e.enterprise!==void 0}class Cp{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Rp(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HT().appendChild(r)})}function jT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const BT="https://www.google.com/recaptcha/enterprise.js?render=",KT="recaptcha-enterprise",WT="NO_RECAPTCHA";class VT{constructor(t){this.type=KT,this.auth=ao(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ap(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Cp(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;cf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{o(l)}).catch(()=>{o(WT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&cf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rp(BT+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new qT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=up,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await fr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ps(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=bT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?At(t):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(t))})}async initializeRecaptchaConfig(){const t=await Ap(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Cp(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new VT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new _n("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Bt(t)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await fr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ip(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&vT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ao(e){return At(e)}class lf{constructor(t){this.auth=t,this.observer=null,this.addObserver=rb(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(e,t){const n=wn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ai(s,t??{}))return i;zt(i,"already-initialized")}return n.initialize({options:t})}function JT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function XT(e,t,n){const r=ao(e);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kp(t),{host:o,port:a}=YT(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QT()}function kp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function YT(e){const t=kp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uf(o)}}}function uf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function QT(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(t){return jt("not implemented")}_linkToIdToken(t,n){return jt("not implemented")}_getReauthenticationResolver(t){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e,t){return AT(e,"POST","/v1/accounts:signInWithIdp",hp(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="http://localhost";class jn extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new jn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Vc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new jn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return hr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,hr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,hr(t,n)}buildRequest(){const t={requestUri:ZT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ki(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Pp{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Oi{constructor(){super("facebook.com")}static credential(t){return jn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return an.credentialFromTaggedObject(t)}static credentialFromError(t){return an.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return an.credential(t.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return jn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Oi{constructor(){super("github.com")}static credential(t){return jn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ln.credential(t.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Oi{constructor(){super("twitter.com")}static credential(t,n){return jn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await xn._fromIdTokenResponse(t,r,i),o=ff(r);return new wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ff(r);return new wr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ff(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends It{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Os(t,n,r,i)}}function Op(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(e,s,t,r):s})}async function eI(e,t,n=!1){const r=await li(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await li(e,Op(r,i,t,e),n);Y(s.idToken,r,"internal-error");const o=Gc(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(e.uid===a,r,"user-mismatch"),wr._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(e,t,n=!1){const r="signIn",i=await Op(e,r,t),s=await wr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function rI(e,t,n,r){return At(e).onIdTokenChanged(t,n,r)}function iI(e,t,n){return At(e).beforeAuthStateChanged(t,n)}const Ds="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){const e=Be();return Jc(e)||oo(e)}const oI=1e3,aI=10;class Np extends Dp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sI()&&FT(),this.fallbackToPolling=Tp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);UT()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,aI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},oI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Np.type="LOCAL";const cI=Np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Mp.type="SESSION";const Lp=Mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new co(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await lI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}co.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Xc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function fI(e){Nt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function hI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function pI(){return xp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="firebaseLocalStorageDb",gI=1,Ns="firebaseLocalStorage",Up="fbase_key";class Di{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lo(e,t){return e.transaction([Ns],t?"readwrite":"readonly").objectStore(Ns)}function mI(){const e=indexedDB.deleteDatabase($p);return new Di(e).toPromise()}function Va(){const e=indexedDB.open($p,gI);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ns,{keyPath:Up})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ns)?t(r):(r.close(),await mI(),t(await Va()))})})}async function hf(e,t,n){const r=lo(e,!0).put({[Up]:t,value:n});return new Di(r).toPromise()}async function yI(e,t){const n=lo(e,!1).get(t),r=await new Di(n).toPromise();return r===void 0?null:r.value}function df(e,t){const n=lo(e,!0).delete(t);return new Di(n).toPromise()}const vI=800,_I=3;class Fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>_I)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=co._getInstance(pI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await hI(),!this.activeServiceWorker)return;this.sender=new uI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Va();return await hf(t,Ds,"1"),await df(t,Ds),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>yI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>df(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=lo(i,!1).getAll();return new Di(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fp.type="LOCAL";const wI=Fp;new Si(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(e,t){return t?Bt(t):(Y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Sp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return hr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return hr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function bI(e){return nI(e.auth,new Yc(e),e.bypassAuthState)}function TI(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),tI(n,new Yc(e),e.bypassAuthState)}async function II(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),eI(n,new Yc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bI;case"linkViaPopup":case"linkViaRedirect":return II;case"reauthViaPopup":case"reauthViaRedirect":return TI;default:zt(this.auth,"internal-error")}}resolve(t){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Si(2e3,1e4);class tr extends Hp{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Y(t,this.auth,"internal-error"),t}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const t=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,AI.get())};t()}}tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="pendingRedirect",fs=new Map;class RI extends Hp{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=fs.get(this.auth._key());if(!t){try{const r=await kI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}fs.set(this.auth._key(),t)}return this.bypassAuthState||fs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kI(e,t){const n=OI(t),r=PI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SI(e,t){fs.set(e._key(),t)}function PI(e){return Bt(e._redirectPersistence)}function OI(e){return us(CI,e.config.apiKey,e.name)}async function DI(e,t,n=!1){const r=ao(e),i=EI(r,t),o=await new RI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=10*60*1e3;class MI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!LI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!jp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NI&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(t))}saveEventToCache(t){this.cachedEventUids.add(pf(t)),this.lastProcessedEventTime=Date.now()}}function pf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function jp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function LI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(e,t={}){return Pi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UI=/^https?/;async function FI(e){if(e.config.emulator)return;const{authorizedDomains:t}=await xI(e);for(const n of t)try{if(HI(n))return}catch{}zt(e,"unauthorized-domain")}function HI(e){const t=Wa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UI.test(n))return!1;if($I.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=new Si(3e4,6e4);function gf(){const e=Nt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function BI(e){return new Promise((t,n)=>{var r,i,s;function o(){gf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gf(),n(Dt(e,"network-request-failed"))},timeout:jI.get()})}if(!((i=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Nt().gapi)===null||s===void 0)&&s.load)o();else{const a=jT("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(Dt(e,"network-request-failed"))},Rp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw hs=null,t})}let hs=null;function KI(e){return hs=hs||BI(e),hs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new Si(5e3,15e3),VI="__/auth/iframe",qI="emulator/auth/iframe",zI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JI(e){const t=e.config;Y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zc(t,qI):`https://${e.config.authDomain}/${VI}`,r={apiKey:t.apiKey,appName:e.name,v:kr},i=GI.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ki(r).slice(1)}`}async function XI(e){const t=await KI(e),n=Nt().gapi;return Y(n,e,"internal-error"),t.open({where:document.body,url:JI(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zI,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(e,"network-request-failed"),a=Nt().setTimeout(()=>{s(o)},WI.get());function c(){Nt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QI=500,ZI=600,eA="_blank",tA="http://localhost";class mf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nA(e,t,n,r=QI,i=ZI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},YI),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Be().toLowerCase();n&&(a=vp(l)?eA:n),yp(l)&&(t=t||tA,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if($T(l)&&a!=="_self")return rA(t||"",a),new mf(null);const f=window.open(t||"",a,u);Y(f,e,"popup-blocked");try{f.focus()}catch{}return new mf(f)}function rA(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="__/auth/handler",sA="emulator/auth/handler",oA=encodeURIComponent("fac");async function yf(e,t,n,r,i,s){Y(e.config.authDomain,e,"auth-domain-config-required"),Y(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:kr,eventId:i};if(t instanceof Pp){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",nb(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))o[u]=f}if(t instanceof Oi){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${oA}=${encodeURIComponent(c)}`:"";return`${aA(e)}?${ki(a).slice(1)}${l}`}function aA({config:e}){return e.emulator?zc(e,sA):`https://${e.authDomain}/${iA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="webStorageSupport";class cA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lp,this._completeRedirectFn=DI,this._overrideRedirectResult=SI}async _openPopup(t,n,r,i){var s;Gt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yf(t,n,r,Wa(),i);return nA(t,o,Xc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await yf(t,n,r,Wa(),i);return fI(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await XI(t),r=new MI(t);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Yo,{type:Yo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yo];o!==void 0&&n(!!o),zt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tp()||Jc()||oo()}}const lA=cA;var vf="@firebase/auth",_f="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hA(e){pt(new ot("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ip(e)},l=new zT(r,i,s,c);return JT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),pt(new ot("auth-internal",t=>{const n=ao(t.getProvider("auth").getImmediate());return(r=>new uA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(vf,_f,fA(e)),Ge(vf,_f,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=5*60,pA=tp("authIdTokenMaxAge")||dA;let wf=null;const gA=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pA)return;const i=n==null?void 0:n.token;wf!==i&&(wf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mA(e=so()){const t=wn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=GT(e,{popupRedirectResolver:lA,persistence:[wI,cI,Lp]}),r=tp("authTokenSyncURL");if(r){const s=gA(r);iI(n,s,()=>s(n.currentUser)),rI(n,o=>s(o))}const i=Zd("auth");return i&&XT(n,`http://${i}`),n}hA("Browser");var yA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Qc=Qc||{},J=yA||self;function uo(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ni(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function vA(e){return Object.prototype.hasOwnProperty.call(e,Qo)&&e[Qo]||(e[Qo]=++_A)}var Qo="closure_uid_"+(1e9*Math.random()>>>0),_A=0;function wA(e,t,n){return e.call.apply(e.bind,arguments)}function EA(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Fe(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Fe=wA:Fe=EA,Fe.apply(null,arguments)}function ts(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ke(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function En(){this.s=this.s,this.o=this.o}var bA=0;En.prototype.s=!1;En.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),bA!=0)&&vA(this)};En.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bp=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Zc(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ef(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(uo(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function He(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var TA=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{J.addEventListener("test",()=>{},t),J.removeEventListener("test",()=>{},t)}catch{}return e}();function fi(e){return/^[\s\xa0]*$/.test(e)}function fo(){var e=J.navigator;return e&&(e=e.userAgent)?e:""}function St(e){return fo().indexOf(e)!=-1}function el(e){return el[" "](e),e}el[" "]=function(){};function IA(e,t){var n=yC;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var AA=St("Opera"),hi=St("Trident")||St("MSIE"),Kp=St("Edge"),qa=Kp||hi,Wp=St("Gecko")&&!(fo().toLowerCase().indexOf("webkit")!=-1&&!St("Edge"))&&!(St("Trident")||St("MSIE"))&&!St("Edge"),CA=fo().toLowerCase().indexOf("webkit")!=-1&&!St("Edge");function Vp(){var e=J.document;return e?e.documentMode:void 0}e:{var bf="",Zo=function(){var e=fo();if(Wp)return/rv:([^\);]+)(\)|;)/.exec(e);if(Kp)return/Edge\/([\d\.]+)/.exec(e);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(CA)return/WebKit\/(\S+)/.exec(e);if(AA)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Zo&&(bf=Zo?Zo[1]:""),hi){var Tf=Vp();if(Tf!=null&&Tf>parseFloat(bf))break e}}J.document&&hi&&Vp();function di(e,t){if(He.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Wp){e:{try{el(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:RA[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&di.$.h.call(this)}}ke(di,He);var RA={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Mi="closure_listenable_"+(1e6*Math.random()|0),kA=0;function SA(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++kA,this.fa=this.ia=!1}function ho(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function PA(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function qp(e){const t={};for(const n in e)t[n]=e[n];return t}const If="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zp(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<If.length;s++)n=If[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function po(e){this.src=e,this.g={},this.h=0}po.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Ga(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new SA(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function za(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Bp(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ho(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ga(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var nl="closure_lm_"+(1e6*Math.random()|0),ea={};function Gp(e,t,n,r,i){if(r&&r.once)return Xp(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Gp(e,t[s],n,r,i);return null}return n=sl(n),e&&e[Mi]?e.O(t,n,Ni(r)?!!r.capture:!!r,i):Jp(e,t,n,!1,r,i)}function Jp(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ni(i)?!!i.capture:!!i,a=il(e);if(a||(e[nl]=a=new po(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=OA(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)TA||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Qp(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OA(){function e(n){return t.call(e.src,e.listener,n)}const t=DA;return e}function Xp(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Xp(e,t[s],n,r,i);return null}return n=sl(n),e&&e[Mi]?e.P(t,n,Ni(r)?!!r.capture:!!r,i):Jp(e,t,n,!0,r,i)}function Yp(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Yp(e,t[s],n,r,i);else r=Ni(r)?!!r.capture:!!r,n=sl(n),e&&e[Mi]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Ga(s,n,r,i),-1<n&&(ho(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=il(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ga(t,n,r,i)),(n=-1<e?t[e]:null)&&rl(n))}function rl(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Mi])za(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Qp(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=il(t))?(za(n,e),n.h==0&&(n.src=null,t[nl]=null)):ho(e)}}}function Qp(e){return e in ea?ea[e]:ea[e]="on"+e}function DA(e,t){if(e.fa)e=!0;else{t=new di(t,this);var n=e.listener,r=e.la||e.src;e.ia&&rl(e),e=n.call(r,t)}return e}function il(e){return e=e[nl],e instanceof po?e:null}var ta="__closure_events_fn_"+(1e9*Math.random()>>>0);function sl(e){return typeof e=="function"?e:(e[ta]||(e[ta]=function(t){return e.handleEvent(t)}),e[ta])}function Re(){En.call(this),this.i=new po(this),this.S=this,this.J=null}ke(Re,En);Re.prototype[Mi]=!0;Re.prototype.removeEventListener=function(e,t,n,r){Yp(this,e,t,n,r)};function De(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new He(t,e);else if(t instanceof He)t.target=t.target||e;else{var i=t;t=new He(r,e),zp(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ns(o,r,!0,t)&&i}if(o=t.g=e,i=ns(o,r,!0,t)&&i,i=ns(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ns(o,r,!1,t)&&i}Re.prototype.N=function(){if(Re.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ho(n[r]);delete e.g[t],e.h--}}this.J=null};Re.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Re.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ns(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&za(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var ol=J.JSON.stringify;class NA{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function MA(){var e=al;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class LA{constructor(){this.h=this.g=null}add(t,n){const r=Zp.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Zp=new NA(()=>new xA,e=>e.reset());class xA{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $A(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function UA(e){J.setTimeout(()=>{throw e},0)}let pi,gi=!1,al=new LA,eg=()=>{const e=J.Promise.resolve(void 0);pi=()=>{e.then(FA)}};var FA=()=>{for(var e;e=MA();){try{e.h.call(e.g)}catch(n){UA(n)}var t=Zp;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}gi=!1};function go(e,t){Re.call(this),this.h=e||1,this.g=t||J,this.j=Fe(this.qb,this),this.l=Date.now()}ke(go,Re);M=go.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),De(this,"tick"),this.ga&&(cl(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cl(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}M.N=function(){go.$.N.call(this),cl(this),delete this.g};function ll(e,t,n){if(typeof e=="function")n&&(e=Fe(e,n));else if(e&&typeof e.handleEvent=="function")e=Fe(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:J.setTimeout(e,t||0)}function tg(e){e.g=ll(()=>{e.g=null,e.i&&(e.i=!1,tg(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class HA extends En{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:tg(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(e){En.call(this),this.h=e,this.g={}}ke(mi,En);var Af=[];function ng(e,t,n,r){Array.isArray(n)||(n&&(Af[0]=n.toString()),n=Af);for(var i=0;i<n.length;i++){var s=Gp(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function rg(e){tl(e.g,function(t,n){this.g.hasOwnProperty(n)&&rl(t)},e),e.g={}}mi.prototype.N=function(){mi.$.N.call(this),rg(this)};mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mo(){this.g=!0}mo.prototype.Ea=function(){this.g=!1};function jA(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function BA(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function nr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+WA(e,n)+(r?" "+r:"")})}function KA(e,t){e.info(function(){return"TIMEOUT: "+t})}mo.prototype.info=function(){};function WA(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ol(n)}catch{return t}}var Sr={},Cf=null;function ul(){return Cf=Cf||new Re}Sr.Ta="serverreachability";function ig(e){He.call(this,Sr.Ta,e)}ke(ig,He);function yi(e){const t=ul();De(t,new ig(t))}Sr.STAT_EVENT="statevent";function sg(e,t){He.call(this,Sr.STAT_EVENT,e),this.stat=t}ke(sg,He);function We(e){const t=ul();De(t,new sg(t,e))}Sr.Ua="timingevent";function og(e,t){He.call(this,Sr.Ua,e),this.size=t}ke(og,He);function Li(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){e()},t)}var fl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},VA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hl(){}hl.prototype.h=null;function Rf(e){return e.h||(e.h=e.i())}function qA(){}var xi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dl(){He.call(this,"d")}ke(dl,He);function pl(){He.call(this,"c")}ke(pl,He);var Ja;function yo(){}ke(yo,hl);yo.prototype.g=function(){return new XMLHttpRequest};yo.prototype.i=function(){return{}};Ja=new yo;function $i(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new mi(this),this.P=zA,e=qa?125:void 0,this.V=new go(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ag}function ag(){this.i=null,this.g="",this.h=!1}var zA=45e3,Xa={},Ms={};M=$i.prototype;M.setTimeout=function(e){this.P=e};function Ya(e,t,n){e.L=1,e.v=_o(Jt(t)),e.s=n,e.S=!0,cg(e,null)}function cg(e,t){e.G=Date.now(),Ui(e),e.A=Jt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),mg(n.i,"t",r),e.C=0,n=e.l.J,e.h=new ag,e.g=$g(e.l,n?t:null,!e.s),0<e.O&&(e.M=new HA(Fe(e.Pa,e,e.g),e.O)),ng(e.U,e.g,"readystatechange",e.nb),t=e.I?qp(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),yi(),jA(e.j,e.u,e.A,e.m,e.W,e.s)}M.nb=function(e){e=e.target;const t=this.M;t&&Pt(e)==3?t.l():this.Pa(e)};M.Pa=function(e){try{if(e==this.g)e:{const u=Pt(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>u)&&(u!=3||qa||this.g&&(this.h.h||this.g.ja()||Of(this.g)))){this.J||u!=4||t==7||(t==8||0>=f?yi(3):yi(2)),vo(this);var n=this.g.da();this.ca=n;t:if(lg(this)){var r=Of(this.g);e="";var i=r.length,s=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Qr(this);var o="";break t}this.h.i=new J.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,BA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fi(a)){var l=a;break t}}l=null}if(n=l)nr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qa(this,n);else{this.i=!1,this.o=3,We(12),Dn(this),Qr(this);break e}}this.S?(ug(this,u,o),qa&&this.i&&u==3&&(ng(this.U,this.V,"tick",this.mb),this.V.start())):(nr(this.j,this.m,o,null),Qa(this,o)),u==4&&Dn(this),this.i&&!this.J&&(u==4?Ng(this.l,this):(this.i=!1,Ui(this)))}else pC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),Dn(this),Qr(this)}}}catch{}finally{}};function lg(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function ug(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=GA(e,n),i==Ms){t==4&&(e.o=4,We(14),r=!1),nr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Xa){e.o=4,We(15),nr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else nr(e.j,e.m,i,null),Qa(e,i);lg(e)&&i!=Ms&&i!=Xa&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,We(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wl(t),t.M=!0,We(11))):(nr(e.j,e.m,n,"[Invalid Chunked Response]"),Dn(e),Qr(e))}M.mb=function(){if(this.g){var e=Pt(this.g),t=this.g.ja();this.C<t.length&&(vo(this),ug(this,e,t),this.i&&e!=4&&Ui(this))}};function GA(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Ms:(n=Number(t.substring(n,r)),isNaN(n)?Xa:(r+=1,r+n>t.length?Ms:(t=t.slice(r,r+n),e.C=r+n,t)))}M.cancel=function(){this.J=!0,Dn(this)};function Ui(e){e.Y=Date.now()+e.P,fg(e,e.P)}function fg(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Li(Fe(e.lb,e),t)}function vo(e){e.B&&(J.clearTimeout(e.B),e.B=null)}M.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(KA(this.j,this.A),this.L!=2&&(yi(),We(17)),Dn(this),this.o=2,Qr(this)):fg(this,this.Y-e)};function Qr(e){e.l.H==0||e.J||Ng(e.l,e)}function Dn(e){vo(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,cl(e.V),rg(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Qa(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Za(n.i,e))){if(!e.K&&Za(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)$s(n),To(n);else break e;_l(n),We(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Li(Fe(n.ib,n),6e3));if(1>=_g(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nn(n,11)}else if((e.K||n.g==e)&&$s(n),!fi(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const f=l[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(gl(s,s.h),s.h=null))}if(r.F){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,pe(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=xg(r,r.J?r.pa:null,r.Y),o.K){wg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(vo(a),Ui(a)),r.g=o}else Og(r);0<n.j.length&&Io(n)}else l[0]!="stop"&&l[0]!="close"||Nn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Nn(n,7):vl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}yi(4)}catch{}}function JA(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(uo(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function XA(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(uo(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function hg(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(uo(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=XA(e),r=JA(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YA(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $n(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $n){this.h=e.h,Ls(this,e.j),this.s=e.s,this.g=e.g,xs(this,e.m),this.l=e.l;var t=e.i,n=new vi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),kf(this,n),this.o=e.o}else e&&(t=String(e).match(dg))?(this.h=!1,Ls(this,t[1]||"",!0),this.s=jr(t[2]||""),this.g=jr(t[3]||"",!0),xs(this,t[4]),this.l=jr(t[5]||"",!0),kf(this,t[6]||"",!0),this.o=jr(t[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}$n.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Br(t,Sf,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Br(t,Sf,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Br(n,n.charAt(0)=="/"?eC:ZA,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Br(n,nC)),e.join("")};function Jt(e){return new $n(e)}function Ls(e,t,n){e.j=n?jr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function xs(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function kf(e,t,n){t instanceof vi?(e.i=t,rC(e.i,e.h)):(n||(t=Br(t,tC)),e.i=new vi(t,e.h))}function pe(e,t,n){e.i.set(t,n)}function _o(e){return pe(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function jr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Br(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,QA),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function QA(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Sf=/[#\/\?@]/g,ZA=/[#\?:]/g,eC=/[#\?]/g,tC=/[#\?@]/g,nC=/#/g;function vi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bn(e){e.g||(e.g=new Map,e.h=0,e.i&&YA(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}M=vi.prototype;M.add=function(e,t){bn(this),this.i=null,e=Pr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function pg(e,t){bn(e),t=Pr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function gg(e,t){return bn(e),t=Pr(e,t),e.g.has(t)}M.forEach=function(e,t){bn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};M.ta=function(){bn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};M.Z=function(e){bn(this);let t=[];if(typeof e=="string")gg(this,e)&&(t=t.concat(this.g.get(Pr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};M.set=function(e,t){return bn(this),this.i=null,e=Pr(this,e),gg(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};M.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function mg(e,t,n){pg(e,t),0<n.length&&(e.i=null,e.g.set(Pr(e,t),Zc(n)),e.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Pr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function rC(e,t){t&&!e.j&&(bn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(pg(this,r),mg(this,i,n))},e)),e.j=t}var iC=class{constructor(e,t){this.g=e,this.map=t}};function yg(e){this.l=e||sC,J.PerformanceNavigationTiming?(e=J.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sC=10;function vg(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function _g(e){return e.h?1:e.g?e.g.size:0}function Za(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function gl(e,t){e.g?e.g.add(t):e.h=t}function wg(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}yg.prototype.cancel=function(){if(this.i=Eg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Eg(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Zc(e.i)}var oC=class{stringify(e){return J.JSON.stringify(e,void 0)}parse(e){return J.JSON.parse(e,void 0)}};function aC(){this.g=new oC}function cC(e,t,n){const r=n||"";try{hg(e,function(i,s){let o=i;Ni(i)&&(o=ol(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function lC(e,t){const n=new mo;if(J.Image){const r=new Image;r.onload=ts(rs,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ts(rs,n,r,"TestLoadImage: error",!1,t),r.onabort=ts(rs,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ts(rs,n,r,"TestLoadImage: timeout",!1,t),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function rs(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function wo(e){this.l=e.fc||null,this.j=e.ob||!1}ke(wo,hl);wo.prototype.g=function(){return new Eo(this.l,this.j)};wo.prototype.i=function(e){return function(){return e}}({});function Eo(e,t){Re.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ml,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ke(Eo,Re);var ml=0;M=Eo.prototype;M.open=function(e,t){if(this.readyState!=ml)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,_i(this)};M.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||J).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=ml};M.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bg(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function bg(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}M.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fi(this):_i(this),this.readyState==3&&bg(this)}};M.Za=function(e){this.g&&(this.response=this.responseText=e,Fi(this))};M.Ya=function(e){this.g&&(this.response=e,Fi(this))};M.ka=function(){this.g&&Fi(this)};function Fi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,_i(e)}M.setRequestHeader=function(e,t){this.v.append(e,t)};M.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function _i(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Eo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var uC=J.JSON.parse;function be(e){Re.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tg,this.L=this.M=!1}ke(be,Re);var Tg="",fC=/^https?$/i,hC=["POST","PUT"];M=be.prototype;M.Oa=function(e){this.M=e};M.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ja.g(),this.C=this.u?Rf(this.u):Rf(Ja),this.g.onreadystatechange=Fe(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Pf(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=J.FormData&&e instanceof J.FormData,!(0<=Bp(hC,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Cg(this),0<this.B&&((this.L=dC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fe(this.ua,this)):this.A=ll(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Pf(this,s)}};function dC(e){return hi&&typeof e.timeout=="number"&&e.ontimeout!==void 0}M.ua=function(){typeof Qc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Pf(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ig(e),bo(e)}function Ig(e){e.F||(e.F=!0,De(e,"complete"),De(e,"error"))}M.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,De(this,"complete"),De(this,"abort"),bo(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bo(this,!0)),be.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?Ag(this):this.kb())};M.kb=function(){Ag(this)};function Ag(e){if(e.h&&typeof Qc<"u"&&(!e.C[1]||Pt(e)!=4||e.da()!=2)){if(e.v&&Pt(e)==4)ll(e.La,0,e);else if(De(e,"readystatechange"),Pt(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(dg)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),r=!fC.test(i?i.toLowerCase():"")}n=r}if(n)De(e,"complete"),De(e,"success");else{e.m=6;try{var s=2<Pt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ig(e)}}finally{bo(e)}}}}function bo(e,t){if(e.g){Cg(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||De(e,"ready");try{n.onreadystatechange=r}catch{}}}function Cg(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(J.clearTimeout(e.A),e.A=null)}M.isActive=function(){return!!this.g};function Pt(e){return e.g?e.g.readyState:0}M.da=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),uC(t)}};function Of(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Tg:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function pC(e){const t={};e=(e.g&&2<=Pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(fi(e[r]))continue;var n=$A(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}PA(t,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rg(e){let t="";return tl(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function yl(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Rg(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):pe(e,t,n))}function Lr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function kg(e){this.Ga=0,this.j=[],this.l=new mo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Lr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Lr("baseRetryDelayMs",5e3,e),this.hb=Lr("retryDelaySeedMs",1e4,e),this.eb=Lr("forwardChannelMaxRetries",2,e),this.xa=Lr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new yg(e&&e.concurrentRequestLimit),this.Ja=new aC,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=kg.prototype;M.ra=8;M.H=1;function vl(e){if(Sg(e),e.H==3){var t=e.W++,n=Jt(e.I);if(pe(n,"SID",e.K),pe(n,"RID",t),pe(n,"TYPE","terminate"),Hi(e,n),t=new $i(e,e.l,t),t.L=2,t.v=_o(Jt(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=t.v,n=!0),n||(t.g=$g(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ui(t)}Lg(e)}function To(e){e.g&&(wl(e),e.g.cancel(),e.g=null)}function Sg(e){To(e),e.u&&(J.clearTimeout(e.u),e.u=null),$s(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&J.clearTimeout(e.m),e.m=null)}function Io(e){if(!vg(e.i)&&!e.m){e.m=!0;var t=e.Na;pi||eg(),gi||(pi(),gi=!0),al.add(t,e),e.C=0}}function gC(e,t){return _g(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Li(Fe(e.Na,e,t),Mg(e,e.C)),e.C++,!0)}M.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new $i(this,this.l,e);let s=this.s;if(this.U&&(s?(s=qp(s),zp(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Pg(this,i,t),n=Jt(this.I),pe(n,"RID",e),pe(n,"CVER",22),this.F&&pe(n,"X-HTTP-Session-Id",this.F),Hi(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Rg(s)))+"&"+t:this.o&&yl(n,this.o,s)),gl(this.i,i),this.bb&&pe(n,"TYPE","init"),this.P?(pe(n,"$req",t),pe(n,"SID","null"),i.aa=!0,Ya(i,n,null)):Ya(i,n,t),this.H=2}}else this.H==3&&(e?Df(this,e):this.j.length==0||vg(this.i)||Df(this))};function Df(e,t){var n;t?n=t.m:n=e.W++;const r=Jt(e.I);pe(r,"SID",e.K),pe(r,"RID",n),pe(r,"AID",e.V),Hi(e,r),e.o&&e.s&&yl(r,e.o,e.s),n=new $i(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Pg(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),gl(e.i,n),Ya(n,r,t)}function Hi(e,t){e.na&&tl(e.na,function(n,r){pe(t,r,n)}),e.h&&hg({},function(n,r){pe(t,r,n)})}function Pg(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Fe(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{cC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Og(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;pi||eg(),gi||(pi(),gi=!0),al.add(t,e),e.A=0}}function _l(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Li(Fe(e.Ma,e),Mg(e,e.A)),e.A++,!0)}M.Ma=function(){if(this.u=null,Dg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Li(Fe(this.jb,this),e)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,We(10),To(this),Dg(this))};function wl(e){e.B!=null&&(J.clearTimeout(e.B),e.B=null)}function Dg(e){e.g=new $i(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Jt(e.wa);pe(t,"RID","rpc"),pe(t,"SID",e.K),pe(t,"AID",e.V),pe(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&pe(t,"TO",e.qa),pe(t,"TYPE","xmlhttp"),Hi(e,t),e.o&&e.s&&yl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=_o(Jt(t)),n.s=null,n.S=!0,cg(n,e)}M.ib=function(){this.v!=null&&(this.v=null,To(this),_l(this),We(19))};function $s(e){e.v!=null&&(J.clearTimeout(e.v),e.v=null)}function Ng(e,t){var n=null;if(e.g==t){$s(e),wl(e),e.g=null;var r=2}else if(Za(e.i,t))n=t.F,wg(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=ul(),De(r,new og(r,n)),Io(e)}else Og(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&gC(e,t)||r==2&&_l(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Nn(e,5);break;case 4:Nn(e,10);break;case 3:Nn(e,6);break;default:Nn(e,2)}}}function Mg(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Nn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Fe(e.pb,e);n||(n=new $n("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Ls(n,"https"),_o(n)),lC(n.toString(),r)}else We(2);e.H=0,e.h&&e.h.za(t),Lg(e),Sg(e)}M.pb=function(e){e?(this.l.info("Successfully pinged google.com"),We(2)):(this.l.info("Failed to ping google.com"),We(1))};function Lg(e){if(e.H=0,e.ma=[],e.h){const t=Eg(e.i);(t.length!=0||e.j.length!=0)&&(Ef(e.ma,t),Ef(e.ma,e.j),e.i.i.length=0,Zc(e.j),e.j.length=0),e.h.ya()}}function xg(e,t,n){var r=n instanceof $n?Jt(n):new $n(n);if(r.g!="")t&&(r.g=t+"."+r.g),xs(r,r.m);else{var i=J.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new $n(null);r&&Ls(s,r),t&&(s.g=t),i&&xs(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&pe(r,n,t),pe(r,"VER",e.ra),Hi(e,r),r}function $g(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new be(new wo({ob:!0})):new be(e.va),t.Oa(e.J),t}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ug(){}M=Ug.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function gt(e,t){Re.call(this),this.g=new kg(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!fi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!fi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Or(this)}ke(gt,Re);gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;We(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=xg(e,null,e.Y),Io(e)};gt.prototype.close=function(){vl(this.g)};gt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ol(e),e=n);t.j.push(new iC(t.fb++,e)),t.H==3&&Io(t)};gt.prototype.N=function(){this.g.h=null,delete this.j,vl(this.g),delete this.g,gt.$.N.call(this)};function Fg(e){dl.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ke(Fg,dl);function Hg(){pl.call(this),this.status=1}ke(Hg,pl);function Or(e){this.g=e}ke(Or,Ug);Or.prototype.Ba=function(){De(this.g,"a")};Or.prototype.Aa=function(e){De(this.g,new Fg(e))};Or.prototype.za=function(e){De(this.g,new Hg)};Or.prototype.ya=function(){De(this.g,"b")};function mC(){this.blockSize=-1}function xt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ke(xt,mC);xt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function na(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}xt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)na(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){na(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){na(this,r),i=0;break}}this.h=i,this.i+=t};xt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function le(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var yC={};function El(e){return-128<=e&&128>e?IA(e,function(t){return new le([t|0],0>t?-1:0)}):new le([e|0],0>e?-1:0)}function Ot(e){if(isNaN(e)||!isFinite(e))return dr;if(0>e)return Oe(Ot(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ec;return new le(t,0)}function jg(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Oe(jg(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ot(Math.pow(t,8)),r=dr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ot(Math.pow(t,s)),r=r.R(s).add(Ot(o))):(r=r.R(n),r=r.add(Ot(o)))}return r}var ec=4294967296,dr=El(0),tc=El(1),Nf=El(16777216);M=le.prototype;M.ea=function(){if(ut(this))return-Oe(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ec+r)*t,t*=ec}return e};M.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Kt(this))return"0";if(ut(this))return"-"+Oe(this).toString(e);for(var t=Ot(Math.pow(e,6)),n=this,r="";;){var i=Fs(n,t).g;n=Us(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Kt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};M.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Kt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ut(e){return e.h==-1}M.X=function(e){return e=Us(this,e),ut(e)?-1:Kt(e)?0:1};function Oe(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new le(n,~e.h).add(tc)}M.abs=function(){return ut(this)?Oe(this):this};M.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new le(n,n[n.length-1]&-2147483648?-1:0)};function Us(e,t){return e.add(Oe(t))}M.R=function(e){if(Kt(this)||Kt(e))return dr;if(ut(this))return ut(e)?Oe(this).R(Oe(e)):Oe(Oe(this).R(e));if(ut(e))return Oe(this.R(Oe(e)));if(0>this.X(Nf)&&0>e.X(Nf))return Ot(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,is(n,2*r+2*i),n[2*r+2*i+1]+=s*c,is(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,is(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,is(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new le(n,0)};function is(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function xr(e,t){this.g=e,this.h=t}function Fs(e,t){if(Kt(t))throw Error("division by zero");if(Kt(e))return new xr(dr,dr);if(ut(e))return t=Fs(Oe(e),t),new xr(Oe(t.g),Oe(t.h));if(ut(t))return t=Fs(e,Oe(t)),new xr(Oe(t.g),t.h);if(30<e.g.length){if(ut(e)||ut(t))throw Error("slowDivide_ only works with positive integers.");for(var n=tc,r=t;0>=r.X(e);)n=Mf(n),r=Mf(r);var i=Jn(n,1),s=Jn(r,1);for(r=Jn(r,2),n=Jn(n,2);!Kt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Jn(r,1),n=Jn(n,1)}return t=Us(e,i.R(t)),new xr(i,t)}for(i=dr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ot(n),o=s.R(t);ut(o)||0<o.X(e);)n-=r,s=Ot(n),o=s.R(t);Kt(s)&&(s=tc),i=i.add(s),e=Us(e,o)}return new xr(i,e)}M.gb=function(e){return Fs(this,e).h};M.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new le(n,this.h&e.h)};M.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new le(n,this.h|e.h)};M.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new le(n,this.h^e.h)};function Mf(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new le(n,e.h)}function Jn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new le(i,e.h)}gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;fl.NO_ERROR=0;fl.TIMEOUT=8;fl.HTTP_ERROR=6;VA.COMPLETE="complete";qA.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";Re.prototype.listen=Re.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;xt.prototype.digest=xt.prototype.l;xt.prototype.reset=xt.prototype.reset;xt.prototype.update=xt.prototype.j;le.prototype.add=le.prototype.add;le.prototype.multiply=le.prototype.R;le.prototype.modulo=le.prototype.gb;le.prototype.compare=le.prototype.X;le.prototype.toNumber=le.prototype.ea;le.prototype.toString=le.prototype.toString;le.prototype.getBits=le.prototype.D;le.fromNumber=Ot;le.fromString=jg;var vC=le;const Lf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="9.22.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new io("@firebase/firestore");function nt(e,...t){if(Er.logLevel<=ae.DEBUG){const n=t.map(Tl);Er.debug(`Firestore (${ji}): ${e}`,...n)}}function bl(e,...t){if(Er.logLevel<=ae.ERROR){const n=t.map(Tl);Er.error(`Firestore (${ji}): ${e}`,...n)}}function _C(e,...t){if(Er.logLevel<=ae.WARN){const n=t.map(Tl);Er.warn(`Firestore (${ji}): ${e}`,...n)}}function Tl(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e="Unexpected state"){const t=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: `+e;throw bl(t),new Error(t)}function nc(e,t){e||Il()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ue extends It{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class EC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bC{constructor(t){this.t=t,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nc(typeof r.accessToken=="string"),new Bg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return nc(t===null||typeof t=="string"),new Le(t)}}class TC{constructor(t,n,r){this.h=t,this.l=n,this.m=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class IC{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new TC(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AC{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CC{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const r=s=>{s.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,nt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(nc(typeof n.token=="string"),this.T=n.token,new AC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=RC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Kg(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(t,n,r,i,s,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Hs{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Hs&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xf,ne;(ne=xf||(xf={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new vC([4294967295,4294967295],0);function ra(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&nt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Al(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ue($e.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function OC(e,t){if(bl("AsyncQueue",`${t}: ${e}`),Kg(e))return new Ue($e.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=kC.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{nt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(nt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ue($e.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=OC(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;function NC(e,t,n,r){if(t===!0&&r===!0)throw new Ue($e.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function MC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Il()}function LC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ue($e.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=MC(e);throw new Ue($e.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ue($e.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ue($e.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}NC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Ue($e.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Ue($e.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Ue($e.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=t.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,r}}class Vg{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ue($e.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ue($e.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uf(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wC;switch(n.type){case"firstParty":return new IC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ue($e.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=$f.get(t);n&&(nt("ComponentProvider","Removing Datastore"),$f.delete(t),n.terminate())}(this),Promise.resolve()}}function xC(e,t,n,r={}){var i;const s=(e=LC(e,Vg))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_C("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Le.MOCK_USER;else{a=JE(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Ue($e.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Le(l)}e._authCredentials=new EC(new Bg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new PC(this,"async_queue_retry"),this.Xc=()=>{const n=ra();n&&nt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const t=ra();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const n=ra();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new pr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Kg(t))throw t;nt("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){const n=this.Gc.then(()=>(this.Hc=!0,t().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw bl("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(t,n,r){this.Zc(),this.Yc.indexOf(t)>-1&&(n=0);const i=Al.createAndSchedule(this,t,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&Il()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(const n of this.zc)if(n.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){const n=this.zc.indexOf(t);this.zc.splice(n,1)}}class UC extends Vg{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new $C,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||HC(this),this._firestoreClient.terminate()}}function FC(e,t){const n=typeof e=="object"?e:so(),r=typeof e=="string"?e:t||"(default)",i=wn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zE("firestore");s&&xC(i,...s)}return i}function HC(e){var t,n,r;const i=e._freezeSettings(),s=function(o,a,c,l){return new SC(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Wg(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new DC(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}(function(e,t=!0){(function(n){ji=n})(kr),pt(new ot("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new UC(new bC(n.getProvider("auth-internal")),new CC(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ue($e.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ge(Lf,"3.12.2",e),Ge(Lf,"3.12.2","esm2017")})();const jC=(e,t)=>t.some(n=>e instanceof n);let Ff,Hf;function BC(){return Ff||(Ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KC(){return Hf||(Hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qg=new WeakMap,rc=new WeakMap,zg=new WeakMap,ia=new WeakMap,Cl=new WeakMap;function WC(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Wt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&qg.set(n,e)}).catch(()=>{}),Cl.set(t,e),t}function VC(e){if(rc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});rc.set(e,t)}let ic={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return rc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||zg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qC(e){ic=e(ic)}function zC(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(sa(this),t,...n);return zg.set(r,t.sort?t.sort():[t]),Wt(r)}:KC().includes(e)?function(...t){return e.apply(sa(this),t),Wt(qg.get(this))}:function(...t){return Wt(e.apply(sa(this),t))}}function GC(e){return typeof e=="function"?zC(e):(e instanceof IDBTransaction&&VC(e),jC(e,BC())?new Proxy(e,ic):e)}function Wt(e){if(e instanceof IDBRequest)return WC(e);if(ia.has(e))return ia.get(e);const t=GC(e);return t!==e&&(ia.set(e,t),Cl.set(t,e)),t}const sa=e=>Cl.get(e);function Rl(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wt(o.result),c.oldVersion,c.newVersion,Wt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function oa(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),Wt(n).then(()=>{})}const JC=["get","getKey","getAll","getAllKeys","count"],XC=["put","add","delete","clear"],aa=new Map;function jf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(aa.get(t))return aa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=XC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JC.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return aa.set(t,s),s}qC(e=>({...e,get:(t,n,r)=>jf(t,n)||e.get(t,n,r),has:(t,n)=>!!jf(t,n)||e.has(t,n)}));const Gg="@firebase/installations",kl="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=1e4,Xg=`w:${kl}`,Yg="FIS_v2",YC="https://firebaseinstallations.googleapis.com/v1",QC=60*60*1e3,ZC="installations",eR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Bn=new _n(ZC,eR,tR);function Qg(e){return e instanceof It&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg({projectId:e}){return`${YC}/projects/${e}/installations`}function em(e){return{token:e.token,requestStatus:2,expiresIn:rR(e.expiresIn),creationTime:Date.now()}}async function tm(e,t){const r=(await t.json()).error;return Bn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function nR(e,{refreshToken:t}){const n=nm(e);return n.append("Authorization",iR(t)),n}async function rm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function rR(e){return Number(e.replace("s","000"))}function iR(e){return`${Yg} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Zg(e),i=nm(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Yg,appId:e.appId,sdkVersion:Xg},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rm(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:em(l.authToken)}}else throw await tm("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^[cdef][\w-]{21}$/,sc="";function cR(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lR(e);return aR.test(n)?n:sc}catch{return sc}}function lR(e){return oR(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=new Map;function om(e,t){const n=Ao(e);am(n,t),uR(n,t)}function am(e,t){const n=sm.get(e);if(n)for(const r of n)r(t)}function uR(e,t){const n=fR();n&&n.postMessage({key:e,fid:t}),hR()}let Mn=null;function fR(){return!Mn&&"BroadcastChannel"in self&&(Mn=new BroadcastChannel("[Firebase] FID Change"),Mn.onmessage=e=>{am(e.data.key,e.data.fid)}),Mn}function hR(){sm.size===0&&Mn&&(Mn.close(),Mn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR="firebase-installations-database",pR=1,Kn="firebase-installations-store";let ca=null;function Sl(){return ca||(ca=Rl(dR,pR,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Kn)}}})),ca}async function js(e,t){const n=Ao(e),i=(await Sl()).transaction(Kn,"readwrite"),s=i.objectStore(Kn),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&om(e,t.fid),t}async function cm(e){const t=Ao(e),r=(await Sl()).transaction(Kn,"readwrite");await r.objectStore(Kn).delete(t),await r.done}async function Co(e,t){const n=Ao(e),i=(await Sl()).transaction(Kn,"readwrite"),s=i.objectStore(Kn),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&om(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(e){let t;const n=await Co(e.appConfig,r=>{const i=gR(r),s=mR(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===sc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function gR(e){const t=e||{fid:cR(),registrationStatus:0};return lm(t)}function mR(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Bn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=yR(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:vR(e)}:{installationEntry:t}}async function yR(e,t){try{const n=await sR(e,t);return js(e.appConfig,n)}catch(n){throw Qg(n)&&n.customData.serverCode===409?await cm(e.appConfig):await js(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function vR(e){let t=await Bf(e.appConfig);for(;t.registrationStatus===1;)await im(100),t=await Bf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Pl(e);return r||n}return t}function Bf(e){return Co(e,t=>{if(!t)throw Bn.create("installation-not-found");return lm(t)})}function lm(e){return _R(e)?{fid:e.fid,registrationStatus:0}:e}function _R(e){return e.registrationStatus===1&&e.registrationTime+Jg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR({appConfig:e,heartbeatServiceProvider:t},n){const r=ER(e,n),i=nR(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Xg,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await rm(()=>fetch(r,a));if(c.ok){const l=await c.json();return em(l)}else throw await tm("Generate Auth Token",c)}function ER(e,{fid:t}){return`${Zg(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(e,t=!1){let n;const r=await Co(e.appConfig,s=>{if(!um(s))throw Bn.create("not-registered");const o=s.authToken;if(!t&&IR(o))return s;if(o.requestStatus===1)return n=bR(e,t),s;{if(!navigator.onLine)throw Bn.create("app-offline");const a=CR(s);return n=TR(e,a),a}});return n?await n:r.authToken}async function bR(e,t){let n=await Kf(e.appConfig);for(;n.authToken.requestStatus===1;)await im(100),n=await Kf(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ol(e,t):r}function Kf(e){return Co(e,t=>{if(!um(t))throw Bn.create("not-registered");const n=t.authToken;return RR(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function TR(e,t){try{const n=await wR(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await js(e.appConfig,r),n}catch(n){if(Qg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await js(e.appConfig,r)}throw n}}function um(e){return e!==void 0&&e.registrationStatus===2}function IR(e){return e.requestStatus===2&&!AR(e)}function AR(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+QC}function CR(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function RR(e){return e.requestStatus===1&&e.requestTime+Jg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(e){const t=e,{installationEntry:n,registrationPromise:r}=await Pl(t);return r?r.catch(console.error):Ol(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(e,t=!1){const n=e;return await PR(n),(await Ol(n,t)).token}async function PR(e){const{registrationPromise:t}=await Pl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(e){if(!e||!e.options)throw la("App Configuration");if(!e.name)throw la("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw la(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function la(e){return Bn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="installations",DR="installations-internal",NR=e=>{const t=e.getProvider("app").getImmediate(),n=OR(t),r=wn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},MR=e=>{const t=e.getProvider("app").getImmediate(),n=wn(t,fm).getImmediate();return{getId:()=>kR(n),getToken:i=>SR(n,i)}};function LR(){pt(new ot(fm,NR,"PUBLIC")),pt(new ot(DR,MR,"PRIVATE"))}LR();Ge(Gg,kl);Ge(Gg,kl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="analytics",xR="firebase_id",$R="origin",UR=60*1e3,FR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new io("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new _n("analytics","Analytics",HR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(e){if(!e.startsWith(Dl)){const t=st.create("invalid-gtag-resource",{gtagURL:e});return Je.warn(t.message),""}return e}function hm(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function BR(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function KR(e,t){const n=BR("firebase-js-sdk-policy",{createScriptURL:jR}),r=document.createElement("script"),i=`${Dl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function WR(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function VR(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const c=(await hm(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){Je.error(a)}e("config",i,s)}async function qR(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await hm(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Je.error(s)}}function zR(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await qR(e,t,n,a,c)}else if(s==="config"){const[a,c]=o;await VR(e,t,n,r,a,c)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){Je.error(a)}}return i}function GR(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=zR(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function JR(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Dl)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=30,YR=1e3;class QR{constructor(t={},n=YR){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const dm=new QR;function ZR(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ek(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:ZR(r)},s=FR.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function tk(e,t=dm,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw st.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw st.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ik;return setTimeout(async()=>{a.abort()},n!==void 0?n:UR),pm({appId:r,apiKey:i,measurementId:s},o,a,t)}async function pm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=dm){var s;const{appId:o,measurementId:a}=e;try{await nk(r,t)}catch(c){if(a)return Je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await ek(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!rk(l)){if(i.deleteThrottleMetadata(o),a)return Je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ju(n,i.intervalMillis,XR):Ju(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,f),Je.debug(`Calling attemptFetch again in ${u} millis`),pm(e,f,r,i)}}function nk(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(st.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function rk(e){if(!(e instanceof It)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ik{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function sk(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(){if(Bc())try{await Kc()}catch(e){return Je.warn(st.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Je.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ak(e,t,n,r,i,s,o){var a;const c=tk(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&Je.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Je.error(p)),t.push(c);const l=ok().then(p=>{if(p)return r.getId()}),[u,f]=await Promise.all([c,l]);JR(s)||KR(s,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[$R]="firebase",h.update=!0,f!=null&&(h[xR]=f),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(t){this.app=t}_delete(){return delete Zr[this.app.options.appId],Promise.resolve()}}let Zr={},Wf=[];const Vf={};let ua="dataLayer",lk="gtag",qf,gm,zf=!1;function uk(){const e=[];if(np()&&e.push("This is a browser extension environment."),rp()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=st.create("invalid-analytics-context",{errorInfo:t});Je.warn(n.message)}}function fk(e,t,n){uk();const r=e.options.appId;if(!r)throw st.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Zr[r]!=null)throw st.create("already-exists",{id:r});if(!zf){WR(ua);const{wrappedGtag:s,gtagCore:o}=GR(Zr,Wf,Vf,ua,lk);gm=s,qf=o,zf=!0}return Zr[r]=ak(e,Wf,Vf,t,qf,ua,n),new ck(e)}function hk(e=so()){e=At(e);const t=wn(e,Bs);return t.isInitialized()?t.getImmediate():dk(e)}function dk(e,t={}){const n=wn(e,Bs);if(n.isInitialized()){const i=n.getImmediate();if(ai(t,n.getOptions()))return i;throw st.create("already-initialized")}return n.initialize({options:t})}function pk(e,t,n,r){e=At(e),sk(gm,Zr[e.app.options.appId],t,n,r).catch(i=>Je.error(i))}const Gf="@firebase/analytics",Jf="0.10.0";function gk(){pt(new ot(Bs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return fk(r,i,n)},"PUBLIC")),pt(new ot("analytics-internal",e,"PRIVATE")),Ge(Gf,Jf),Ge(Gf,Jf,"esm2017");function e(t){try{const n=t.getProvider(Bs).getImmediate();return{logEvent:(r,i,s)=>pk(n,r,i,s)}}catch(n){throw st.create("interop-component-reg-failed",{reason:n})}}}gk();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="/firebase-messaging-sw.js",yk="/firebase-cloud-messaging-push-scope",mm="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",vk="https://fcmregistrations.googleapis.com/v1",ym="google.c.a.c_id",_k="google.c.a.c_l",wk="google.c.a.ts",Ek="google.c.a.e";var Xf;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xf||(Xf={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var wi;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(wi||(wi={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function bk(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="fcm_token_details_db",Tk=5,Yf="fcm_token_object_Store";async function Ik(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(fa))return null;let t=null;return(await Rl(fa,Tk,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(Yf))return;const c=o.objectStore(Yf),l=await c.index("fcmSenderId").get(e);if(await c.clear(),!!l){if(i===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;t={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Ht(u.vapidKey)}}}else if(i===3){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ht(u.auth),p256dh:Ht(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ht(u.vapidKey)}}}else if(i===4){const u=l;t={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ht(u.auth),p256dh:Ht(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ht(u.vapidKey)}}}}}})).close(),await oa(fa),await oa("fcm_vapid_details_db"),await oa("undefined"),Ak(t)?t:null}function Ak(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="firebase-messaging-database",Rk=1,Wn="firebase-messaging-store";let ha=null;function Nl(){return ha||(ha=Rl(Ck,Rk,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Wn)}}})),ha}async function vm(e){const t=Ll(e),r=await(await Nl()).transaction(Wn).objectStore(Wn).get(t);if(r)return r;{const i=await Ik(e.appConfig.senderId);if(i)return await Ml(e,i),i}}async function Ml(e,t){const n=Ll(e),i=(await Nl()).transaction(Wn,"readwrite");return await i.objectStore(Wn).put(t,n),await i.done,t}async function kk(e){const t=Ll(e),r=(await Nl()).transaction(Wn,"readwrite");await r.objectStore(Wn).delete(t),await r.done}function Ll({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},je=new _n("messaging","Messaging",Sk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(e,t){const n=await $l(e),r=wm(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(xl(e.appConfig),i)).json()}catch(o){throw je.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw je.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw je.create("token-subscribe-no-token");return s.token}async function Ok(e,t){const n=await $l(e),r=wm(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${xl(e.appConfig)}/${t.token}`,i)).json()}catch(o){throw je.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw je.create("token-update-failed",{errorInfo:o})}if(!s.token)throw je.create("token-update-no-token");return s.token}async function _m(e,t){const r={method:"DELETE",headers:await $l(e)};try{const s=await(await fetch(`${xl(e.appConfig)}/${t}`,r)).json();if(s.error){const o=s.error.message;throw je.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw je.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function xl({projectId:e}){return`${vk}/projects/${e}/registrations`}async function $l({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function wm({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==mm&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=7*24*60*60*1e3;async function Nk(e){const t=await xk(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Ht(t.getKey("auth")),p256dh:Ht(t.getKey("p256dh"))},r=await vm(e.firebaseDependencies);if(r){if($k(r.subscriptionOptions,n))return Date.now()>=r.createTime+Dk?Lk(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await _m(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Qf(e.firebaseDependencies,n)}else return Qf(e.firebaseDependencies,n)}async function Mk(e){const t=await vm(e.firebaseDependencies);t&&(await _m(e.firebaseDependencies,t.token),await kk(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Lk(e,t){try{const n=await Ok(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Ml(e.firebaseDependencies,r),n}catch(n){throw await Mk(e),n}}async function Qf(e,t){const r={token:await Pk(e,t),createTime:Date.now(),subscriptionOptions:t};return await Ml(e,r),r.token}async function xk(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:bk(t)})}function $k(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Uk(t,e),Fk(t,e),Hk(t,e),t}function Uk(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const s=t.notification.icon;s&&(e.notification.icon=s)}function Fk(e,t){t.data&&(e.data=t.data)}function Hk(e,t){var n,r,i,s,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const a=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=t.notification)===null||s===void 0?void 0:s.click_action;a&&(e.fcmOptions.link=a);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(e){return typeof e=="object"&&!!e&&ym in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Em("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Em("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Em(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(e){if(!e||!e.options)throw da("App Configuration Object");if(!e.name)throw da("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw da(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function da(e){return je.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Bk(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(e){try{e.swRegistration=await navigator.serviceWorker.register(mk,{scope:yk}),e.swRegistration.update().catch(()=>{})}catch(t){throw je.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(e,t){if(!t&&!e.swRegistration&&await Wk(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw je.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=mm)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(e,t){if(!navigator)throw je.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw je.create("permission-blocked");return await qk(e,t==null?void 0:t.vapidKey),await Vk(e,t==null?void 0:t.serviceWorkerRegistration),Nk(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(e,t,n){const r=Gk(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[ym],message_name:n[_k],message_time:n[wk],message_device_time:Math.floor(Date.now()/1e3)})}function Gk(e){switch(e){case wi.NOTIFICATION_CLICKED:return"notification_open";case wi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===wi.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Zf(n)):e.onMessageHandler.next(Zf(n)));const r=n.data;jk(r)&&r[Ek]==="1"&&await zk(e,n.messageType,r)}const eh="@firebase/messaging",th="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=e=>{const t=new Kk(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Jk(t,n)),t},Yk=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>bm(t,r)}};function Qk(){pt(new ot("messaging",Xk,"PUBLIC")),pt(new ot("messaging-internal",Yk,"PRIVATE")),Ge(eh,th),Ge(eh,th,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(){try{await Kc()}catch{return!1}return typeof window<"u"&&Bc()&&rp()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e,t){if(!navigator)throw je.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(e=so()){return Zk().then(t=>{if(!t)throw je.create("unsupported-browser")},t=>{throw je.create("indexed-db-unsupported")}),wn(At(e),"messaging").getImmediate()}async function RS(e,t){return e=At(e),bm(e,t)}function kS(e,t){return e=At(e),eS(e,t)}Qk();const nS=Rr(e=>{const n=Fn().firebaseConfig,r=op(n);hk(r);const i=mA(r),s=FC(r),o=tS(r);e.vueApp.provide("auth",i),e.provide("auth",i),e.vueApp.provide("firestore",s),e.provide("firestore",s),e.vueApp.provide("messaging",o),e.provide("messaging",o)}),rS=[d0,v0,kE,SE,FE,nS],iS=(e,t)=>t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=e.params[n.slice(1)])==null?void 0:r.toString())||""}),sS=(e,t)=>{const n=e.route.matched.find(i=>{var s;return((s=i.components)==null?void 0:s.default)===e.Component.type}),r=t??(n==null?void 0:n.meta.key)??(n&&iS(e.route,n));return typeof r=="function"?r(e.route):r},oS=(e,t)=>({default:()=>e?it(Hy,e===!0?{}:e,t):t}),aS=Xt({name:"FragmentWrapper",setup(e,{slots:t}){return()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),oc=(e,t,n)=>({default:()=>t?it(e,t===!0?{}:t,n):it(aS,{},n)}),cS=Xt({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:t}){const n=ye();return()=>it(Vd,{name:e.name,route:e.route,...t},{default:r=>{if(!r.Component)return;const i=sS(r,e.pageKey),s=n.deferHydration(),o=!!(e.transition??r.route.meta.pageTransition??La),a=o&&uS([e.transition,r.route.meta.pageTransition,La,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return oc(eo,o&&a,oS(e.keepalive??r.route.meta.keepalive??m0,it(Mh,{onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{Cr(()=>n.callHook("page:finish",r.Component).finally(s))}},{default:()=>it(fS,{key:i,routeProps:r,pageKey:i,hasTransition:o})}))).default()}})}});function lS(e){return Array.isArray(e)?e:e?[e]:[]}function uS(e){const t=e.map(n=>({...n,onAfterLeave:lS(n.onAfterLeave)}));return Nd(...t)}const fS=Xt({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const t=e.pageKey,n=e.routeProps.route,r={};for(const i in e.routeProps.route)r[i]=Ce(()=>t===e.pageKey?e.routeProps.route[i]:n[i]);return cr("_route",Lt(r)),()=>it(e.routeProps.Component)}}),hS=Xt({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(e,t){const n=await er[e.name]().then(r=>r.default||r);return()=>it(n,t.attrs,t.slots)}}),dS=Xt({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(e,t){const n=rt("_route"),r=n===bd()?EE():n,i=Ce(()=>Pe(e.name)??r.meta.layout??"default");return()=>{const s=i.value&&i.value in er,o=r.meta.layoutTransition??g0;return oc(eo,s&&o,{default:()=>oc(hS,s&&{key:i.value,name:i.value,...t.attrs},t.slots).default()}).default()}}}),pS=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},gS={};function mS(e,t){const n=cS,r=dS;return On(),Qn(r,null,{default:Ec(()=>[we(n)]),_:1})}const yS=pS(gS,[["render",mS]]),nh={__name:"nuxt-root",setup(e){const t=Uy(()=>Zn(()=>import("./error-component.dcceeb29.js"),[],import.meta.url).then(a=>a.default||a)),n=()=>null,r=ye(),i=r.deferHydration();cr("_route",bd()),r.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const s=to();Vh((a,c,l)=>{r.hooks.callHook("vue:error",a,c,l).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),ow(a)&&(a.fatal||a.unhandled)&&Ae(r,Fr,[a])});const{islandContext:o}=!1;return(a,c)=>(On(),Qn(Mh,{onResolve:Pe(i)},{default:Ec(()=>[Pe(s)?(On(),Qn(Pe(t),{key:0,error:Pe(s)},null,8,["error"])):Pe(o)?(On(),Qn(Pe(n),{key:1,context:Pe(o)},null,8,["context"])):(On(),Qn(Pe(yS),{key:2}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=j_.create({baseURL:K_()}));let rh;const vS=rw(rS);rh=async function(){var i;const n=Boolean((i=window.__NUXT__)==null?void 0:i.serverRendered)?Qv(nh):Yv(nh),r=ew({vueApp:n});try{await nw(r,vS)}catch(s){await r.callHook("app:error",s),r.payload.error=r.payload.error||s}try{await r.hooks.callHook("app:created",n),await r.hooks.callHook("app:beforeMount",n),n.mount("#"+y0),await r.hooks.callHook("app:mounted",n),await Cr()}catch(s){await r.callHook("app:error",s),r.payload.error=r.payload.error||s}},rh().catch(e=>{console.error("Error while mounting app:",e)});export{Zn as _,pS as a,TS as b,Qn as c,Uy as d,sd as e,we as f,gv as g,od as h,CS as i,Xt as j,Fn as k,ye as l,RS as m,_S as n,On as o,kS as p,Jd as q,hn as r,AS as s,wS as t,Pe as u,IS as v,Ec as w,ES as x,bS as y,cS as z};
