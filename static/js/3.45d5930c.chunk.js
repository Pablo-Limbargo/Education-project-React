(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[3],{301:function(e,s,t){e.exports={dialogs:"Dialogs_dialogs__3Mw_G",dialogItems:"Dialogs_dialogItems__Al_2_",messages:"Dialogs_messages__1M4hR"}},302:function(e,s,t){e.exports={dialog:"DialogItem_dialog__318DV",activeLink:"DialogItem_activeLink__7Ot_s"}},303:function(e,s,t){e.exports={message:"Message_message__G9VU_"}},308:function(e,s,t){"use strict";t.r(s);var a=t(1),n=t.n(a),i=t(128),c=t(301),o=t.n(c),r=t(302),d=t.n(r),j=t(12),l=t(0),g=function(e){var s="/dialogs/"+e.id;return Object(l.jsx)("div",{className:d.a.dialog+" "+d.a.active,children:Object(l.jsxs)(j.b,{to:s,activeClassName:d.a.activeLink,children:[Object(l.jsx)("img",{alt:"avatar-img",src:e.avatar}),e.name]})})},u=t(303),b=t.n(u),m=function(e){return Object(l.jsx)("div",{className:b.a.message,children:e.text})},O=t(11),x=t(90),h=t(129),v=t(46),_=t(33),f=Object(v.a)(50),p=Object(h.a)({form:"dialogsAddMessageForm"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)("div",{children:Object(l.jsx)(x.a,{component:_.b,placeholder:"Enter your message",name:"newMessageBody",validate:[v.b,f]})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Send"})})]})})),M=function(e){var s=e.dialogs.map((function(e){return Object(l.jsx)(g,{id:e.id,name:e.name,avatar:e.avatar},e.id)})),t=e.messages.map((function(e){return Object(l.jsx)(m,{id:e.id,text:e.text},e.id)}));return e.isAuth?Object(l.jsxs)("div",{className:o.a.dialogs,children:[Object(l.jsx)("div",{className:o.a.dialogItems,children:s}),Object(l.jsxs)("div",{className:o.a.messages,children:[Object(l.jsx)("div",{children:t}),Object(l.jsx)(p,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]}):Object(l.jsx)(O.a,{to:"/login"})},w=t(16),k=t(3),A=t(34),D=t(35),N=t(38),y=t(37),I=function(e){return{isAuth:e.auth.isAuth}},S=t(9);s.default=Object(S.d)(Object(w.b)((function(e){return{messages:e.messagesPage.messages,newMessageText:e.messagesPage.newMessageText,dialogs:e.messagesPage.dialogs}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),(function(e){var s=function(s){Object(N.a)(a,s);var t=Object(y.a)(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(k.a)({},this.props)):Object(l.jsx)(O.a,{to:"/login"})}}]),a}(n.a.Component);return Object(w.b)(I)(s)}))(M)}}]);
//# sourceMappingURL=3.45d5930c.chunk.js.map