(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[4],{304:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__oQTNx"}},305:function(t,e,s){t.exports={postArea:"MyPosts_postArea__2FVZv",posts:"MyPosts_posts__am03l"}},306:function(t,e,s){t.exports={item:"Post_item__1qYIa"}},307:function(t,e,s){"use strict";s.r(e);var c=s(3),i=s(34),n=s(35),a=s(38),o=s(37),r=s(1),u=s.n(r),j=s(304),d=s.n(j),l=s(66),p=s(107),b=s(0),h=(u.a.Component,s(130)),O=function(t){var e=Object(r.useState)(!1),s=Object(h.a)(e,2),c=s[0],i=s[1],n=Object(r.useState)(t.status),a=Object(h.a)(n,2),o=a[0],u=a[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsxs)("div",{children:[!c&&Object(b.jsx)("div",{children:Object(b.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"-----"})}),c&&Object(b.jsx)("div",{children:Object(b.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(o)},value:o,onChange:function(t){u(t.currentTarget.value)}})})]})},f=function(t){var e=t.profile,s=t.status,c=t.updateStatus;return e?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsxs)("div",{className:d.a.descriptionBlock,children:[Object(b.jsx)("img",{alt:"photo_large",src:null!=e.photos.large?e.photos.large:p.a}),Object(b.jsx)(O,{status:s,updateStatus:c}),Object(b.jsxs)("h3",{children:["Full Name: ",e.fullName]}),Object(b.jsxs)("h3",{children:["About me: ",e.aboutMe]}),Object(b.jsxs)("div",{children:["VK: ",Object(b.jsx)("a",{href:"https://vk.com/dimych",children:e.contacts.vk})]}),Object(b.jsxs)("div",{children:["twitter: ",Object(b.jsx)("a",{href:"https://twitter.com/@sdf",children:e.contacts.twitter})]}),Object(b.jsxs)("div",{children:["instagram: ",Object(b.jsx)("a",{href:"https://instagram.com/sds",children:e.contacts.instagram})]}),Object(b.jsxs)("p",{children:["Job status: ",e.lookingForAJobDescription]})]})]}):Object(b.jsx)(l.a,{})},x=s(97),m=s(39),v=s(305),g=s.n(v),P=s(306),k=s.n(P),S=function(t){return Object(b.jsx)("div",{className:k.a.posts,children:Object(b.jsxs)("div",{className:k.a.item,children:[Object(b.jsx)("img",{alt:"avatar-img",src:"https://html5css.ru/w3images/avatar2.png"}),t.message,Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"Like"})," ",t.likeCount]})]})})},_=s(90),y=s(129),w=s(46),N=s(33),A=Object(w.a)(10),C=Object(y.a)({form:"addPosts"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(_.a,{placeholder:"Write your post",component:N.b,name:"newPostBody",validate:[w.b,A]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add post"})})]})})),B=u.a.memo((function(t){console.log("RENDER");var e=Object(m.a)(t.posts).reverse().map((function(t){return Object(b.jsx)(S,{message:t.message,id:t.id,likeCount:t.likeCount},t.id)}));return Object(b.jsxs)("div",{className:g.a.postArea,children:[Object(b.jsx)("h2",{children:"My posts"}),Object(b.jsx)("div",{children:Object(b.jsx)(C,{onSubmit:function(e){t.addPost(e.newPostBody)}})}),Object(b.jsx)("div",{className:g.a.posts,children:e})]})})),I=s(16),M=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(B),D=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(b.jsx)(M,{})]})},F=s(11),J=s(9),T=function(t){Object(a.a)(s,t);var e=Object(o.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(b.jsx)(D,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(J.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.e}),F.f)(T)}}]);
//# sourceMappingURL=4.fb1c6a51.chunk.js.map