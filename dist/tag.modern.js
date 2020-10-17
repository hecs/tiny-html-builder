const e=(e,t="",n)=>{const l=document.createElement(e);return(null==t?void 0:t.includes(":"))?l.setAttribute("style",t):l.className=t,l.append(...[n].flat().filter(e=>null!=e)),l},t=(e,t,n)=>{const l=[n].flat();return l.filter(e=>e instanceof HTMLElement).forEach(n=>n.addEventListener(e,t)),l};export{t as event,e as tag};
//# sourceMappingURL=tag.modern.js.map
