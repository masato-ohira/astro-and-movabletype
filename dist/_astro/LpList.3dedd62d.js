import{r as i}from"./index.ed373d49.js";import{t as n,j as s,a as l}from"./axios.a5ec103b.js";const m=t=>{const e=n("grid grid-cols-3 gap-4",t.className);return s.jsx("div",{className:e,children:t.children})},h=()=>{const[t,e]=i.useState([]),r=t.length>0,c=async()=>{const{data:a}=await l.get("/api/lp.json",{params:{ts:Date.now()}});e(a.items)};return i.useEffect(()=>{c()},[]),r?s.jsx(m,{className:"grid-cols-2 gap-16",children:t.map(a=>s.jsx(o,{...a}))}):s.jsx(s.Fragment,{})},o=t=>{const e=t.assets[0].resizes.medium;return s.jsx("div",{children:s.jsxs("a",{href:`/lp/detail/${t.id}/`,className:"inline-block",children:[s.jsx("div",{children:s.jsx("img",{src:e,alt:""})}),s.jsx("div",{className:"pt-3 text-xl font-semibold",children:t.title})]})})};export{h as LpList};
