import{k as x,l as h,m as v,p as y,j as k,q as S,r as M,s as o,b as p,u as d,h as T,t as w,v as C,x as B,y as I,e as n,o as u,a as N}from"./entry.159b5d64.js";function b(){const t=x(),{$messaging:e}=h();async function s(){return e&&v(e,{vapidKey:t.vapidKey})}function _(i){e&&y(e,i)}return{getToken:s,onMessage:_}}const c=t=>(B("data-v-85a776f0"),t=t(),I(),t),A={class:""},V=c(()=>n("h3",{class:"text-xl font-bold"},"BisaXirim Support",-1)),$=c(()=>n("p",{class:"text-sm"},"Available Soon",-1)),K={key:0},j=c(()=>n("span",null,"Message :",-1)),q=k({__name:"index",async setup(t){let e,s;const{data:_,status:i,getCsrfToken:g,getProviders:l}=S(),{getToken:f,onMessage:m,sendMessage:D}=b(),a=M("");return[e,s]=o(()=>l()),e=await e,s(),[e,s]=o(()=>g()),e=await e,s(),[e,s]=o(()=>f()),e=await e,s(),m(r=>a.value=r),(r,E)=>(u(),p("div",A,[V,$,d(a)?(u(),p("pre",K,[j,T(" "+w(d(a)),1)])):C("",!0)]))}});const P=N(q,[["__scopeId","data-v-85a776f0"]]);export{P as default};