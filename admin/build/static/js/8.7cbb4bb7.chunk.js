(this["webpackJsonphorizon-admin-portal"]=this["webpackJsonphorizon-admin-portal"]||[]).push([[8],{621:function(e,n,a){"use strict";var t="http://localhost:5000";t="https://horizon-server.herokuapp.com",n.a=t},624:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(631);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],t=!0,i=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(t=(s=c.next()).done)&&(a.push(s.value),!n||a.length!==n);t=!0);}catch(l){i=!0,r=l}finally{try{t||null==c.return||c.return()}finally{if(i)throw r}}return a}}(e,n)||Object(t.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},631:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(632);function i(e,n){if(e){if("string"===typeof e)return Object(t.a)(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(t.a)(e,n):void 0}}},632:function(e,n,a){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}a.d(n,"a",(function(){return t}))},704:function(e,n,a){},812:function(e,n,a){"use strict";a.r(n);var t=a(1),i=a.n(t),r=a(50),s=a(19),c=a(618),l=i.a.lazy((function(){return Promise.all([a.e(3),a.e(25)]).then(a.bind(null,813))})),o=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(12)]).then(a.bind(null,794))})),d=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(20)]).then(a.bind(null,795))})),m=i.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,796))})),b=i.a.lazy((function(){return Promise.all([a.e(3),a.e(29)]).then(a.bind(null,797))})),u=i.a.lazy((function(){return Promise.all([a.e(3),a.e(17)]).then(a.bind(null,798))})),h=i.a.lazy((function(){return a.e(28).then(a.bind(null,799))})),j=i.a.lazy((function(){return a.e(27).then(a.bind(null,800))})),p=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(16)]).then(a.bind(null,801))})),v=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:l},{path:"/about",name:"About Us",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(7),a.e(18)]).then(a.bind(null,802))}))},{path:"/news",name:"Latest News",component:o},{path:"/landing/hero",name:"Hero",component:p},{path:"/landing/lens-designs-1",name:"Lens Designs 1",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(21)]).then(a.bind(null,803))}))},{path:"/landing/lens-info-1",name:"Lens Info 1",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(22)]).then(a.bind(null,804))}))},{path:"/landing/lens-designs-2",name:"Lens Designs 2",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(9)]).then(a.bind(null,805))}))},{path:"/landing/lens-info-2",name:"Lens Info 2",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(11)]).then(a.bind(null,806))}))},{path:"/landing/lens-designs-3",name:"Lens Designs 3",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(10)]).then(a.bind(null,807))}))},{path:"/landing/watch-video",name:"Watch Video",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(23)]).then(a.bind(null,808))}))},{path:"/landing/screen-shots",name:"Screen Shots",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(26)]).then(a.bind(null,809))}))},{path:"/landing/production-info",name:"Production Info",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(13)]).then(a.bind(null,810))}))},{path:"/landing/technical-info",name:"Technical Info",component:i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(14)]).then(a.bind(null,811))}))},{path:"/gallery",name:"Gallery",component:d},{path:"/mailing-list",exact:!0,name:"Mailing List",component:m},{path:"/charts",name:"Charts",component:b},{path:"/widgets",name:"Widgets",component:u},{path:"/users",exact:!0,name:"Users",component:h},{path:"/users/:id",exact:!0,name:"User Details",component:j}],g=a(24),f=Object(g.jsx)("div",{className:"pt-3 text-center",children:Object(g.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),N=function(){return Object(g.jsx)("main",{className:"c-main",children:Object(g.jsx)(c.r,{fluid:!0,children:Object(g.jsx)(t.Suspense,{fallback:f,children:Object(g.jsxs)(s.d,{children:[v.map((function(e,n){return e.component&&Object(g.jsx)(s.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(g.jsx)(c.y,{children:Object(g.jsx)(e.component,Object(r.a)({},n))})}},n)})),Object(g.jsx)(s.a,{from:"/",to:"/dashboard"})]})})})})},x=i.a.memo(N),S=function(){return Object(g.jsxs)(c.z,{fixed:!1,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:"Horizon"}),Object(g.jsx)("span",{className:"ml-1",children:"\xa9 2021."})]}),Object(g.jsxs)("div",{className:"mfs-auto",children:[Object(g.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(g.jsx)("a",{href:"https://ayk-mall.com",target:"_blank",rel:"noopener noreferrer",children:"Ayk"})]})]})},O=i.a.memo(S),C=a(624),y=a(166),_=a(625),w=a(621),D={horizon:'<iframe width="100%" height="500px" scrolling="yes" frameborder="yes" allow="autoplay" src=\''.concat(w.a,"'></iframe>")};function I(e){return Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})}var z=function(){return Object(g.jsx)(I,{iframe:D.horizon,allow:"autoplay"})},L=(a(704),function(){var e=Object(y.b)(),n=Object(y.c)((function(e){return e.sidebarShow})),a=Object(t.useState)(!1),i=Object(C.a)(a,2),r=i[0],s=i[1],l=function(){s(!r)};return Object(g.jsxs)(c.D,{withSubheader:!0,children:[Object(g.jsx)(c.lb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(n)||"responsive";e({type:"set",sidebarShow:a})}}),Object(g.jsx)(c.lb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(n)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(g.jsx)(c.E,{className:"mx-auto d-lg-none",to:"/",children:Object(g.jsx)(_.a,{name:"logo",height:"48",alt:"Logo"})}),Object(g.jsxs)(c.F,{className:"d-md-down-none mr-auto",children:[Object(g.jsx)(c.G,{className:"px-3",children:Object(g.jsx)(c.H,{to:"/dashboard",children:"Dashboard"})}),Object(g.jsx)(c.G,{className:"px-3",children:Object(g.jsx)(c.H,{to:"/users",children:"Users"})}),Object(g.jsx)(c.G,{className:"px-3",children:Object(g.jsx)(c.H,{to:"/mailing-list",children:"Mailing List"})})]}),Object(g.jsxs)(c.hb,{className:"px-3 justify-content-between",children:[Object(g.jsx)(c.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:v}),Object(g.jsxs)("div",{className:"d-md-down-none mfe-2 c-subheader-nav",children:[Object(g.jsx)(c.f,{color:"primary",onClick:l,className:"mr-1",children:"Preview"}),Object(g.jsxs)(c.R,{size:"xl",show:r,onClose:l,children:[Object(g.jsx)(c.U,{closeButton:!0,children:"Horizon Preview"}),Object(g.jsx)(c.S,{children:Object(g.jsx)(z,{})}),Object(g.jsx)(c.T,{children:Object(g.jsx)(c.f,{color:"secondary",onClick:l,children:"Cancel"})})]})]})]})]})}),P=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(g.jsx)(_.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavTitle",_children:["Landing Page Sections"]},{_tag:"CSidebarNavItem",name:"Hero Section",to:"/landing/hero",icon:"cil-drop"},{_tag:"CSidebarNavDivider",className:"m-0"},{_tag:"CSidebarNavItem",name:"Latest News",to:"/news",icon:"cil-notes"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"About Us",to:"/about",icon:"cil-people"},{_tag:"CSidebarNavDivider",className:"m-3"},{_tag:"CSidebarNavItem",name:"Lens Designs 1/3",to:"/landing/lens-designs-1",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Lens Info 1/3",to:"/landing/lens-info-1",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Lens Designs 2/3",to:"/landing/lens-designs-2",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Lens Info 2/3",to:"/landing/lens-info-2",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Lens Designs 3/3",to:"/landing/lens-designs-3",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-3"},{_tag:"CSidebarNavItem",name:"Watch Video",to:"/landing/watch-video",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Screen Shots",to:"/landing/screen-shots",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Production Info",to:"/landing/production-info",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Technical Info",to:"/landing/technical-info",icon:"cil-pencil"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Logos",icon:"cil-ban",addLinkClass:"c-disabled",disabled:!0},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Contact Us",icon:"cil-ban",addLinkClass:"c-disabled",disabled:!0},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Map",icon:"cil-ban",addLinkClass:"c-disabled",disabled:!0},{_tag:"CSidebarNavDivider",className:"m-3"},{_tag:"CSidebarNavItem",name:"Footer",icon:"cil-ban",addLinkClass:"c-disabled",disabled:!0},{_tag:"CSidebarNavDivider",className:"m-3"},{_tag:"CSidebarNavDivider"},{_tag:"CSidebarNavTitle",_children:["Extras"]},{_tag:"CSidebarNavItem",name:"Gallery",to:"/gallery",icon:"cil-chart-pie"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Blog",icon:"cil-ban",addLinkClass:"c-disabled",disabled:!0},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavTitle",_children:["Components for Dashboard"]},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_tag:"CSidebarNavDivider",className:"m-1"},{_tag:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator"}],k=function(){var e=Object(y.b)(),n=Object(y.c)((function(e){return e.sidebarShow}));return Object(g.jsxs)(c.Z,{show:n,onShowChange:function(n){return e({type:"set",sidebarShow:n})},children:[Object(g.jsxs)(c.ab,{className:"d-md-down-none",to:"/",children:[Object(g.jsx)("h2",{className:"c-sidebar-brand-full",children:"Horizon"}),Object(g.jsx)("h2",{className:"c-sidebar-brand-minimized",children:"H"})]}),Object(g.jsx)(c.cb,{children:Object(g.jsx)(c.s,{items:P,components:{CSidebarNavDivider:c.db,CSidebarNavDropdown:c.eb,CSidebarNavItem:c.fb,CSidebarNavTitle:c.gb}})}),Object(g.jsx)(c.bb,{className:"c-d-md-down-none"})]})},H=i.a.memo(k);n.default=function(){return Object(g.jsxs)("div",{className:"c-app c-default-layout",children:[Object(g.jsx)(H,{}),Object(g.jsxs)("div",{className:"c-wrapper",children:[Object(g.jsx)(L,{}),Object(g.jsx)("div",{className:"c-body",children:Object(g.jsx)(x,{})}),Object(g.jsx)(O,{})]})]})}}}]);
//# sourceMappingURL=8.7cbb4bb7.chunk.js.map