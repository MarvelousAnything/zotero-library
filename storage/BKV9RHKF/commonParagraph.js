(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[55],{"./src/components/Content/utils/Paragraph.tsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react-jss/dist/react-jss.esm.js"),c=n("./src/style/mixins.ts"),s=n("./node_modules/react/index.js"),a=n("./src/components/Elements/InternalOrExternalLink/InternalOrExternalLink.tsx"),o=n("./src/services/StringUtils.ts"),l=n("./src/style/font-stacks.ts"),i=n("./src/style/colors.ts"),O=n("./src/services/html-parser.tsx"),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};const j=Object(r.c)(e=>Object.assign({},Object(c.n)("root",e,Object.assign(Object.assign({},Object(l.a)(18)),{lineHeight:Object(c.i)(27)}),Object.assign({},Object(c.f)({color:i.c,textDecoration:"none"},"& a")),Object.assign({background:i.k,color:i.l.h},Object(c.f)({color:i.b,textDecoration:"none"},"& a")))))(({classes:e,className:t,tag:n})=>{const[r,c]=s.useState(!1);return s.useEffect(()=>{c(!0)},[]),s.cloneElement(function e(t,n){if("text"===t.type){const r=Object(o.i)(Object(o.e)(t.data.replace("‘‘","“").replace("’’","”")));if("activate"===n){if(Object(o.c)(r)!==r)return s.createElement(s.Fragment,null,...Object(O.e)(Object(o.c)(r)).map(t=>e(t)))}return s.createElement(s.Fragment,null,r)}const r=t.children?t.children.map(t=>e(t,n)):[];if("a"===t.name.toLowerCase()){const e=Object(O.f)(t.attribs),{href:n}=e,c=b(e,["href"]);return s.createElement(a.a,Object.assign({to:n},c),...r)}return s.createElement(t.name,Object(O.f)(t.attribs),...r)}(n,r?"activate":void 0),{className:Object(o.d)(e.root,t)})});t.default=j}}]);