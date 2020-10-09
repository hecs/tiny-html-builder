const{isArray:e}=Array,t=(t,n="",r)=>{const s=document.createElement(t);return n&&(n.includes(":")?s.setAttribute("style",n):s.className=n),s.append(...(e(r)?r:[r]).filter(e=>null!=e)),s},n=(t,n,r)=>((r=e(r)?r:[r]).filter(e=>e instanceof HTMLElement).forEach(e=>e.addEventListener(t,n)),r);export{n as event,t as tag};
//# sourceMappingURL=tag.modern.js.map
