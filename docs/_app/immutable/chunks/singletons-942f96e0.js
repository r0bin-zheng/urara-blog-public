import{A as i}from"./index-1d9b3b72.js";let u="",d="";function h(n){u=n.base,d=n.assets||u}function g(n){let e=n.baseURI;if(!e){const t=n.getElementsByTagName("base");e=t.length?t[0].href:n.URL}return e}function m(){return{x:pageXOffset,y:pageYOffset}}function _(n){let e;const t={noscroll:null,prefetch:null,reload:null};for(const s of n.composedPath())s instanceof Element&&(!e&&s.nodeName.toUpperCase()==="A"&&(e=s),t.noscroll===null&&(t.noscroll=s.getAttribute("data-sveltekit-noscroll")),t.prefetch===null&&(t.prefetch=s.getAttribute("data-sveltekit-prefetch")),t.reload===null&&(t.reload=s.getAttribute("data-sveltekit-reload")));const o=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:o,options:t}}function f(n){const e=i(n);let t=!0;function o(){t=!0,e.update(a=>a)}function s(a){t=!1,e.set(a)}function r(a){let l;return e.subscribe(c=>{(l===void 0||t&&c!==l)&&a(l=c)})}return{notify:o,set:s,subscribe:r}}function b(){const{set:n,subscribe:e}=i(!1);let t;async function o(){clearTimeout(t);const s=await fetch(`${d}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const{version:r}=await s.json(),a=r!=="1662633935795";return a&&(n(!0),clearTimeout(t)),a}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:o}}function k(n){n.client}const v={url:f({}),page:f({}),navigating:i(null),updated:b()};export{m as a,h as b,_ as f,g,k as i,v as s};
