var e=Array.isArray;exports.event=function(t,n,r){return(r=e(r)?r:[r]).filter(function(e){return e instanceof HTMLElement}).forEach(function(e){return e.addEventListener(t,n)}),r},exports.tag=function(t,n,r){void 0===n&&(n="");var u=document.createElement(t);return n&&(n.includes(":")?u.setAttribute("style",n):u.className=n),u.append.apply(u,(e(r)?r:[r]).filter(function(e){return null!=e})),u};
//# sourceMappingURL=tag.js.map
