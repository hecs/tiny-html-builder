exports.event=function(t,e,n){var r=[n].flat();return r.filter(function(t){return t instanceof HTMLElement}).forEach(function(n){return n.addEventListener(t,e)}),r},exports.tag=function(t,e,n){var r;void 0===e&&(e="");var u=document.createElement(t);return(null==(r=e)?void 0:r.includes(":"))?u.setAttribute("style",e):u.className=e,u.append.apply(u,[n].flat().filter(function(t){return null!=t})),u};
//# sourceMappingURL=tag.js.map
