const t=t=>Array.isArray(t)?t.flat(Infinity):[t],e=(e,n={},r)=>{const s=document.createElement(e);return"string"==typeof n?null!=n&&n.includes(":")?s.setAttribute("style",n):s.className=n:Object.entries(n).forEach(([t,e])=>s.setAttribute(t,e)),s.append(...t(r).filter(t=>t)),s},n=(e,n,r)=>(t(r).forEach(t=>t instanceof HTMLElement&&t.addEventListener(e,n)),r);export{n as event,e as tag};
//# sourceMappingURL=tag.modern.js.map
