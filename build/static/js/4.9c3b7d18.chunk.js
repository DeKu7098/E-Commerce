(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[4],{90:function(e,t,c){e.exports={form:"ProfileForm_form__2ud4a",control:"ProfileForm_control__1rbUS",action:"ProfileForm_action__3mOtn"}},91:function(e,t,c){e.exports={profile:"UserProfile_profile__5dniX"}},96:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),o=c(90),s=c.n(o),i=c(2),a=c(8),l=c(0),j=function(){var e=Object(i.g)(),t=Object(n.useRef)(),c=Object(n.useContext)(a.b);return Object(l.jsxs)("form",{className:s.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAeu0fr6VeKS0nbxCqGxxis7mzJiLNuWGg",{method:"POST",body:JSON.stringify({idToken:c.token,password:r,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(t){e.replace("./")}))},children:[Object(l.jsxs)("div",{className:s.a.control,children:[Object(l.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(l.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:t})]}),Object(l.jsx)("div",{className:s.a.action,children:Object(l.jsx)("button",{children:"Change Password"})})]})},d=c(91),h=c.n(d),b=c(4);t.default=function(){return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsxs)("header",{children:[Object(l.jsxs)("ul",{className:"header",children:[Object(l.jsx)("li",{children:Object(l.jsx)(b.c,{to:"/home",children:"Home"})}),Object(l.jsx)(b.c,{to:"/store",children:"Store"}),Object(l.jsx)("li",{children:Object(l.jsx)(b.c,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(b.c,{to:"/Contactus",children:"Contact us"})})]}),Object(l.jsx)("h1",{children:"The Generic"})]}),Object(l.jsxs)("section",{className:h.a.profile,children:[Object(l.jsx)("h1",{children:"User Profile"}),Object(l.jsx)(j,{})]})]})}}}]);
//# sourceMappingURL=4.9c3b7d18.chunk.js.map