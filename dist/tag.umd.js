!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).tinyHtmlBuilder={})}(this,function(e){var t=Array.isArray;e.event=function(e,n,r){return(r=t(r)?r:[r]).filter(function(e){return e instanceof HTMLElement}).forEach(function(t){return t.addEventListener(e,n)}),r},e.tag=function(e,n,r){void 0===n&&(n="");var i=document.createElement(e);return n&&(n.includes(":")?i.setAttribute("style",n):i.className=n),i.append.apply(i,(t(r)?r:[r]).filter(function(e){return null!=e})),i}});
//# sourceMappingURL=tag.umd.js.map