var e=require("react"),t=require("react-dom");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/r(e),u=function e(t){if("string"==typeof t||"number"==typeof t)return[""+t];if(Array.isArray(t)){for(var r=[],n=0;n<t.length;n++)for(var u=e(t[n]),o=0;o<u.length;o++)r.push(u[o]);return r}var a=[];for(var c in t)t[c]&&a.push(c.trim());return a},o=function(){},a="DOMContentLoaded",c="doScroll"in document.documentElement,i=!!document.readyState.match(c?/^loaded|^c/:/^loaded|^i|^c/);i||document.addEventListener(a,function e(){i=!0,document.removeEventListener(a,e)});var d=function(e){if(i)return window.setTimeout(function(){return e(void 0)},0),o;var t=function(t){document.removeEventListener("eventName",e),e(t)};return document.addEventListener(a,t),function(){document.removeEventListener(a,t)}},f=function(e){var t="";for((!e||e<=0)&&(e=6);t.length<e;)t+=Math.random().toString(16).slice(2);return t.slice(0,e)},s=0;function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}exports.classNames=function(){for(var e=[].slice.call(arguments),t=[],r=0;r<e.length;r++)if(e[r])for(var n=u(e[r]),o=0;o<n.length;o++){var a=n[o];a&&(a=a.trim(),t.includes(a)||t.push(a))}return t.join(" ")},exports.createContext=function(e){var t=n.default.createContext(void 0);return[function(){var e=n.default.useContext(t);if(!e)throw new Error("context used outside provide");return e},function(r){var u=r.children,o=e();return n.default.createElement(t.Provider,{value:o,children:u})},t]},exports.domReady=d,exports.fakeUuid=function(){var e=f(32);return e.slice(0,8)+"-"+e.slice(8,12)+"-"+e.slice(12,16)+"-"+e.slice(16,20)+"-"+e.slice(20,32)},exports.mountReact=function(r,n){return d(function(){var u=document.createElement("div");n&&(u.className=n),document.body.appendChild(u),t.render(e.createElement(r),u)})},exports.nextId=function(){return(s++).toString(16)},exports.noop=o,exports.randomId=f,exports.useState=function(e){var t=n.default.useState(e),r=t[0],u=t[1];return n.default.useMemo(function(){return{value:r,set:u}},[r,u])},exports.useTextChangeHandler=function(e){return n.default.useCallback(function(t){return e(t.currentTarget.value)},[e])},exports.useToggle=function(e){return n.default.useCallback(function(){return e(function(e){return!e})},[e])},exports.useUpdatedValues=function(e,t){void 0===t&&(t="");var r=n.default.useRef({});n.default.useEffect(function(){if(r.current){for(var n={},u=0,o=Object.entries(l({},r.current,e));u<o.length;u++){var a=o[u],c=a[0],i=a[1];r.current[c]!==i&&(n[c]=[r.current[c],i])}Object.keys(n).length&&console.log("[updated values] "+t,n)}r.current=e})};
//# sourceMappingURL=twb.js.map
