(this["webpackJsonphorizon-admin-portal"]=this["webpackJsonphorizon-admin-portal"]||[]).push([[21],{623:function(e,t,a){"use strict";var s=a(624),c=a(1),i=a(622);a(629);i.a.initializeApp({apiKey:"AIzaSyCY6qtpw2i46AkPKvTeDy5iAVyaxJhoLoI",authDomain:"horizon-28ad8.firebaseapp.com",projectId:"horizon-28ad8",storageBucket:"horizon-28ad8.appspot.com",messagingSenderId:"533324209164",appId:"1:533324209164:web:39aadbbdd96501a872a229",measurementId:"G-GLCDCLKPEN"});var n=i.a.storage(),r=a(618),o=a(619),d=a.n(o),l=a(620),b=a.n(l),j=a(621),h=a(24);t.a=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(""),l=Object(s.a)(o,2),_=l[0],p=l[1],g=Object(c.useState)(0),u=Object(s.a)(g,2),O=u[0],m=u[1],x=Object(c.useState)("false"),y=Object(s.a)(x,2),f=y[0],v=y[1],C=Object(c.useState)(!0),k=Object(s.a)(C,2),S=k[0],w=k[1],D=Object(c.useState)("false"),I=Object(s.a)(D,2),U=I[0],L=I[1],T=Object(c.useState)(!1),J=Object(s.a)(T,2),N=J[0],z=J[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(r.f,{className:"btn-primary",onClick:function(){z(!N)},children:"Upload Image"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(r.q,{show:N,children:Object(h.jsx)(r.i,{className:"mt-3",children:Object(h.jsxs)(r.j,{children:[Object(h.jsxs)(r.i,{style:{width:"50vw"},children:["true"===f?Object(h.jsxs)("div",{children:[Object(h.jsxs)(r.a,{width:"1",color:"success",children:[Object(h.jsx)("strong",{children:"Uploaded"})," Successfully..."]}),Object(h.jsx)(b.a,{duration:3e3,children:"Uploaded Successfully..."})]}):Object(h.jsx)("p",{}),Object(h.jsxs)(r.j,{children:[Object(h.jsx)(r.o,{children:"Upload Image"}),Object(h.jsxs)(r.Q,{children:[Object(h.jsx)(r.W,{className:"mb-3",children:Object(h.jsx)(r.X,{value:O})}),Object(h.jsx)("progress",{value:O,max:"100"})]}),Object(h.jsxs)(r.Q,{children:[Object(h.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&(i(e.target.files[0]),w(!1))}}),Object(h.jsx)(r.f,{color:"secondary",onClick:function(){var e=new Date,t=e.getDate(),s=e.getMonth()+1,c=e.getFullYear(),i=(new Date).getTime();"".concat(t).concat(s).concat(c,"T").concat(i);v("false"),n.ref("images/".concat(a.name)).put(a).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);m(t)}),(function(e){console.log(e)}),(function(){n.ref("images").child(a.name).getDownloadURL().then((function(e){p(e),console.log("image: ",a),console.log("URL: "+e);var t={url:e};d.a.post("".concat(j.a,"/api/postImgToGallery"),t).then((function(e){return console.log(e)})),v("true"),w(!0)}))}))},disabled:S,children:"Upload"}),Object(h.jsxs)(r.n,{children:[Object(h.jsx)("strong",{children:" Image URL: "}),_]})]}),Object(h.jsxs)(r.Q,{children:["true"===U?Object(h.jsx)("div",{children:Object(h.jsx)(b.a,{duration:2e3,children:"Copied To Clipboard..."})}):Object(h.jsx)("p",{}),Object(h.jsx)(r.f,{color:"secondary",onClick:function(){L("false"),navigator.clipboard.writeText(_),console.log(_),L("true")},children:"Copy Image URL to Clipboard"})]})]})]}),Object(h.jsx)("img",{className:"uploadedImg",src:_||"http://via.placeholder.com/300",alt:"firebase-image"})]})})})]})}},803:function(e,t,a){"use strict";a.r(t);var s=a(162),c=a(157),i=a(158),n=a(161),r=a(160),o=a(159),d=a(1),l=a(618),b=a(623),j=a(619),h=a.n(j),_=a(620),p=a.n(_),g=a(621),u=a(24),O=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={visible:!1,activeKey:0,edited:!1,submitClass:"disabled",submitDisable:!0,image:"...",url:"...",progress:"...",ld1_section_display:!0,name:"...",prog_card_1_img:"...",prog_card_1_link:"...",prog_card_1_type:"...",prog_card_1_header:"..."},s.onChange=s.onChange.bind(Object(n.a)(s)),s.toggleCheckbox=s.toggleCheckbox.bind(Object(n.a)(s)),s.onSubmit=s.onSubmit.bind(Object(n.a)(s)),s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("".concat(g.a,"/api/getLensDesigns1")).then((function(t){var a=t.data,s=a.ld1_section_display,c=a.name,i=a.prog_card_1_img,n=a.prog_card_1_link,r=a.prog_card_1_type,o=a.prog_card_1_header;e.setState({ld1_section_display:s,name:c,prog_card_1_img:i,prog_card_1_link:n,prog_card_1_type:r,prog_card_1_header:o})})).catch((function(e){console.log(e)}))}},{key:"onChange",value:function(e){var t,a=e.target,c=a.name,i=a.value;this.setState((t={},Object(s.a)(t,c,i),Object(s.a)(t,"submitClass","primary"),Object(s.a)(t,"submitDisable",!1),Object(s.a)(t,"edited",!1),t))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.name,ld1_section_display:this.state.ld1_section_display,prog_card_1_img:this.state.prog_card_1_img,prog_card_1_link:this.state.prog_card_1_link,prog_card_1_type:this.state.prog_card_1_type,prog_card_1_header:this.state.prog_card_1_header};console.log(t),h.a.post("".concat(g.a,"/api/postLensDesigns1"),t).then((function(e){return console.log(e)})),this.setState({edited:!0,submitClass:"disabled",submitDisable:!0})}},{key:"toggleCheckbox",value:function(e){e.preventDefault(),this.setState({ld1_section_display:!this.state.ld1_section_display,submitClass:"primary",submitDisable:!1,edited:!1})}},{key:"render",value:function(){return Object(u.jsxs)(l.Y,{children:[!0===this.state.edited?Object(u.jsxs)("div",{children:[Object(u.jsx)(p.a,{duration:3e3}),Object(u.jsx)(l.kb,{children:Object(u.jsx)(l.jb,{show:!0,autohide:1e3,fade:!0,header:"CToast fixed component",children:Object(u.jsxs)(l.a,{width:"1",color:"success",dismissible:"".concat(!0),children:[Object(u.jsx)("strong",{children:"Updated"})," Successfully..."]})},this.state.fixedToasts)})]}):Object(u.jsx)("p",{}),Object(u.jsx)(l.p,{xs:"12",children:Object(u.jsxs)(l.A,{onSubmit:this.onSubmit,children:[Object(u.jsxs)(l.B,{children:[Object(u.jsx)("h4",{children:this.state.ld1_section_display?"Show":"hide"}),Object(u.jsxs)("a",{href:"#",role:"button",onClick:this.toggleCheckbox,children:[Object(u.jsx)("input",{type:"checkbox",title:"ld1_section_display",name:"ld1_section_display",checked:this.state.ld1_section_display,readOnly:!0}),"_Show Section"]})]}),Object(u.jsxs)(l.B,{children:[Object(u.jsx)("h6",{children:this.state.name}),Object(u.jsxs)(l.K,{className:"mb-3",children:[Object(u.jsx)(l.N,{id:"basic-addon3",children:"Paste Image URL"}),Object(u.jsx)(l.J,{type:"text",id:"prog_card_1_img",name:"prog_card_1_img",placeholder:"prog_card_1_img",value:this.state.prog_card_1_img,onChange:this.onChange})]}),Object(u.jsx)("br",{}),Object(u.jsx)(l.J,{type:"text",id:"prog_card_1_link",name:"prog_card_1_link",placeholder:"prog_card_1_link",value:this.state.prog_card_1_link,onChange:this.onChange}),Object(u.jsx)("br",{}),Object(u.jsx)(l.J,{type:"text",id:"prog_card_1_type",name:"prog_card_1_type",placeholder:"prog_card_1_type",value:this.state.prog_card_1_type,onChange:this.onChange}),Object(u.jsx)("br",{}),Object(u.jsx)(l.J,{type:"text",id:"prog_card_1_header",name:"prog_card_1_header",placeholder:"prog_card_1_header",value:this.state.prog_card_1_header,onChange:this.onChange})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)(l.B,{children:Object(u.jsx)(l.J,{type:"submit",id:"submit",name:"submit",placeholder:"submit",className:"bg-".concat(this.state.submitClass," text-white bold"),value:"SUBMIT",disabled:this.state.submitDisable})})]})}),Object(u.jsx)(b.a,{})]})}}]),a}(d.Component);t.default=O}}]);
//# sourceMappingURL=21.18fa7ecd.chunk.js.map