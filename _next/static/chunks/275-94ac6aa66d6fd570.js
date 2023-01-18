"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{3599:function(e,n,t){e.exports=t(5904)},5904:function(e,n,t){var r=t(8416),o=t(917),i=t(7294),a=t(7154),c=t(4895);t(215);var s=t(5944);t(7424);var d=t(7928);t(2936);var l=t(5910);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach(function(n){r(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}t(4873),t(9401);var x="data-agds-card-link";function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach(function(n){r(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var g={shadow:"0 2px 4px rgba(0, 0, 0, 0.3)",hoverShadow:"0 1px 1px rgba(0, 0, 0, 0.3)"};n.Card=function(e){var n,t=e.as,l=e.background,u=e.children,h=e.className,b=e.shadow,f=e.clickable,v=i.useRef();return s.jsx(c.Box,{as:t,onMouseDown:function(){v.current=new Date().getTime()},onMouseUp:function(e){if(f&&v.current){var n=e.currentTarget.querySelector("[".concat(x,"]"));n&&new Date().getTime()-v.current<200&&n.click()}},display:"block",border:!0,borderColor:"muted",background:void 0===l?"body":l,rounded:!0,className:h,css:o.css(p(p({position:"relative",overflow:"hidden"},f&&(r(n={cursor:"pointer"},"&:hover [".concat(x,"]"),a.linkStyles["&:hover"]),r(n,"&:focus-within",d.packs.outline),n)),b&&{boxShadow:g.shadow,"&:hover":f?{boxShadow:g.hoverShadow}:void 0}),"",""),children:u})},n.CardInner=function(e){var n=e.children;return s.jsx(c.Box,{padding:1.5,children:n})},n.CardLink=function(e){var n=l.useLinkComponent();return s.jsx(n,h(h({css:[a.linkStyles,"display:flex;justify-content:space-between;&:focus{outline:none;}","","",""]},r({},x,"")),e))}},2661:function(e,n,t){e.exports=t(9708)},9708:function(e,n,t){t(7154),t(8416),t(7424),t(215);var r=t(917);t(7294);var o=t(5944),i=t(7928);t(2936);var a=t(6902),c=t(2938),s=t(5056),d=t(4895),l=t(2244),u=t(9381);t(9401),t(4873);var h={body:"backgroundBody",bodyAlt:"backgroundBodyAlt"},x=function(e){var n=e.children,t=h[e.background];return o.jsx(d.Box,{display:["none","none","block"],width:"40%",css:r.css({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(i.boxPalette[t]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:n})},b={name:"1739oy8",styles:"z-index:1"},p=function(e){var n=e.children,t=e.image,r=e.background;return o.jsx(s.Content,{children:o.jsxs(a.Flex,{children:[o.jsx(c.Stack,{gap:2,width:["100%","100%",t?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:b,children:n}),t?o.jsx(x,{background:r,children:t}):null]})})},g={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},f=function(e){var n=e.children;return o.jsx(d.Box,{display:{xs:"block",md:"none"},css:g,children:n})},v={name:"vabva8",styles:"position:relative;overflow:hidden"},j=function(e){var n=e.children,t=e.background;return o.jsx(d.Box,{as:"section",background:t,css:v,children:n})},m=function(e){var n=e.children,t=h[e.background];return o.jsx(d.Box,{display:["none","none","block"],width:"40%",css:r.css({position:"absolute",top:0,right:0,bottom:0,"&:after":{content:'""',pointerEvents:"none",position:"absolute",inset:0,background:"linear-gradient(90deg, ".concat(i.boxPalette[t]," 0px, rgba(255, 255, 255, 0.0) 360px)")},img:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}},"",""),children:n})},k={name:"1739oy8",styles:"z-index:1"},y=function(e){var n=e.children,t=e.image,r=e.background;return o.jsx(s.Content,{children:o.jsxs(a.Flex,{children:[o.jsx(c.Stack,{gap:1.5,width:["100%","100%",t?"60%":"100%"],paddingTop:{xs:2,md:4},paddingBottom:{xs:3,md:4},css:k,children:n}),t?o.jsx(m,{background:r,children:t}):null]})})},w={name:"1fi2a6b",styles:"position:relative;overflow:hidden;padding-top:40%;& img{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);max-width:100%;}"},O=function(e){var n=e.children;return o.jsx(d.Box,{display:{xs:"block",md:"none"},css:w,children:n})},S={name:"vabva8",styles:"position:relative;overflow:hidden"},P=function(e){var n=e.children,t=e.background;return o.jsx(d.Box,{as:"section",background:t,css:S,children:n})};n.HeroBanner=function(e){var n=e.image,t=e.background,r=void 0===t?"bodyAlt":t,i=e.children;return o.jsxs(j,{background:r,children:[n?o.jsx(f,{children:n}):null,o.jsx(p,{background:r,image:n,children:i})]})},n.HeroBannerSubtitle=function(e){var n=e.children;return o.jsx(u.Text,{as:"p",fontSize:"md",maxWidth:i.tokens.maxWidth.bodyText,children:n})},n.HeroBannerTitle=function(e){var n=e.children;return o.jsx(l.Heading,{type:"h1",fontSize:"xxxl",children:n})},n.HeroCategoryBanner=function(e){var n=e.children,t=e.image,r=e.background,i=void 0===r?"bodyAlt":r;return o.jsxs(P,{background:i,children:[t?o.jsx(O,{children:t}):null,o.jsx(y,{background:i,image:t,children:n})]})},n.HeroCategoryBannerSubtitle=function(e){var n=e.children;return o.jsx(u.Text,{as:"p",fontSize:"md",maxWidth:i.tokens.maxWidth.bodyText,children:n})},n.HeroCategoryBannerTitle=function(e){var n=e.children;return o.jsx(l.Heading,{type:"h1",fontSize:"xxl",children:n})}},9332:function(e,n,t){t.d(n,{L:function(){return f}});var r=t(7294),o=t(4185),i=t(7329),a=t(1163),c=t(6501),s=t(2160),d=t(9744),l=t(5944),u=function(e){var n=e.navItems,t=(0,a.useRouter)().asPath;return(0,l.jsxs)(o.Stack,{palette:"dark",children:[(0,l.jsx)(s.Header,{background:"bodyAlt",logo:(0,l.jsx)(c.Logo,{}),heading:"Taking Farmers to Markets",subline:"Service Delivery Handbook"}),(0,l.jsx)(d.MainNav,{id:"main-nav",activePath:t,items:n})]})},h=t(8007),x=t(3455),b=t(2225),p=t(4021),g=function(e){var n=e.navItems,t=(0,r.useMemo)(function(){return new Date().getFullYear()},[]);return(0,l.jsx)(o.Box,{palette:"dark",children:(0,l.jsxs)(h.Footer,{background:"bodyAlt",children:[(0,l.jsx)("nav",{"aria-label":"footer",children:(0,l.jsx)(x.LinkList,{links:n,horizontal:!0})}),(0,l.jsx)(h.FooterDivider,{}),(0,l.jsx)(b.Text,{fontSize:"xs",maxWidth:p.tokens.maxWidth.bodyText,children:"We acknowledge the traditional owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging."}),(0,l.jsxs)(b.Text,{fontSize:"xs",maxWidth:p.tokens.maxWidth.bodyText,children:["\xa9 ",t," Department of Agriculture, Fisheries and Forestry"]})]})})},f=function(e){var n=e.children,t=e.navItems;return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(i.SkipLinks,{links:[{href:"#main-content",label:"Skip to main content"},{href:"#main-nav",label:"Skip to main navigation"}]}),(0,l.jsxs)(o.Flex,{flexDirection:"column",fontFamily:"body",minHeight:"100vh",children:[(0,l.jsx)(u,{navItems:t}),(0,l.jsx)(o.Box,{flexGrow:1,children:n}),(0,l.jsx)(g,{navItems:t})]})]})}},5855:function(e,n,t){t.d(n,{$:function(){return a}});var r=t(9008),o=t.n(r),i=t(5944),a=function(e){var n=e.title;return(0,i.jsx)(o(),{children:(0,i.jsx)("title",{children:[n,"Service Delivery Handbook"].filter(Boolean).join(" | ")})})}},9180:function(e,n,t){t.d(n,{e:function(){return i}});var r=t(3447),o=t(5944);function i(e){var n=e.path;return(0,o.jsx)(r.TextLink,{href:"https://github.com/".concat("steelthreads","/").concat("digital-trade-handbook","/edit/").concat("main").concat(void 0===n?"":n),children:"Edit this page"})}}}]);