(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[132],{2497:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customers/[patientName]/lightbuzz",function(){return r(7089)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(t=(a=c.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(l){o=!0,i=l}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},a=r(6273),c=r(387),l=r(7190);var u={};function s(e,n,r,t){if(e&&a.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=t(a.resolveHref(o,e.href,!0),2),r=n[0],i=n[1];return{href:r,as:e.as?a.resolveHref(o,e.as):i||r}}),[o,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(n=i.default.Children.only(v))&&"object"===typeof n&&n.ref,x=t(l.useIntersection({rootMargin:"200px"}),2),N=x[0],j=x[1],k=i.default.useCallback((function(e){N(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,N]);i.default.useEffect((function(){var e=j&&r&&a.isLocalURL(d),n="undefined"!==typeof g?g:o&&o.locale,t=u[d+"%"+h+(n?"%"+n:"")];e&&!t&&s(o,d,h,{locale:n})}),[h,d,j,g,r,o]);var w={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](r,t,{shallow:i,locale:l,scroll:c}))}(e,o,d,h,p,m,y,g)},onMouseEnter:function(e){a.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof g?g:o&&o.locale,E=o&&o.isLocaleDomain&&a.getDomainLocale(h,C,o&&o.locales,o&&o.domainLocales);w.href=E||a.addBasePath(a.addLocale(h,C,o&&o.defaultLocale))}return i.default.cloneElement(n,w)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(t=(a=c.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(l){o=!0,i=l}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!a,l=o.useRef(),u=t(o.useState(!1),2),s=u[0],f=u[1],d=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||s||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,i=t.observer,a=t.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,s]);return o.useEffect((function(){if(!a&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=r(7294),i=r(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},1041:function(e,n,r){"use strict";var t=r(5893),o=r(7294);n.Z=function(e){var n=(0,o.useState)(!1),r=n[0],i=n[1],a=(0,o.useRef)(),c=e.color;return(0,t.jsxs)("div",{className:"collapsible",children:[(0,t.jsx)("button",{className:"toggle",style:{backgroundColor:c},onClick:function(){return i(!r)},children:e.label}),(0,t.jsx)("div",{className:"content-parent",ref:a,style:r?{height:a.current.scrollHeight+"px"}:{height:"0px"},children:(0,t.jsx)("div",{className:"content",children:e.children})})]})}},7849:function(e,n,r){"use strict";var t=r(5893),o=(r(7294),r(1664),r(1163));n.Z=function(e){e.firstName,e.firstName,e.firstName,e.firstName,e.firstName;var n=e.firstName+" "+e.lastName;console.log(n);var r=(0,o.useRouter)(),i=function(n){var t="/customers/"+e.firstName+"/"+n;r.push({pathname:t,query:{firstname:e.firstName,lastname:e.lastName}},t)};return(0,t.jsxs)("nav",{className:"nav",children:[(0,t.jsxs)("h1",{className:"title",children:[" ",n," "]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{onClick:function(){return i("")},children:"General"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{onClick:function(){return i("lightbuzz")},children:"LightBuzz"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{onClick:function(){return i("foodrx")},children:"RXFood"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{onClick:function(){return i("garmin")},children:"Garmin"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{onClick:function(){return i("survey")},children:"Survey"})})]})]})}},7089:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var t=r(5893),o=(r(7294),r(7849),r(1041),function(){return(0,t.jsx)("div",{children:"lightbuzz"})})},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return n=2497,e(e.s=n);var n}));var n=e.O();_N_E=n}]);