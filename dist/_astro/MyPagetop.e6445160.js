import{r as s}from"./index.c6dae603.js";import{M as l}from"./MyIcon.4a22b211.js";import{j as r}from"./jsx-runtime.f924815b.js";import{t as c}from"./tw-merge.828c72ef.js";import"./get.ef040ab1.js";import"./isObject.3ffb01e0.js";const i=()=>{const[t,e]=s.useState(!1);return s.useEffect(()=>{const o=()=>{e(window.scrollY>80)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),{scrolled:t}},w=()=>{const{scrolled:t}=i(),e=c("fixed right-4 bottom-4 transition-all",t?"opacity-100 z-50":"opacity-0 -z-10"),o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return r.jsx("div",{className:e,children:r.jsx("div",{onClick:o,className:"w-12 h-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-90 cursor-pointer transition-all flex flex-wrap justify-center items-center",children:r.jsx("div",{className:"-mt-1",children:r.jsx(l,{name:"arrow_up",size:"32px",color:"#fff"})})})})};export{w as MyPagetop};