(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[5],{89:function(e,t,c){e.exports={auth:"AuthForm_auth__3NmlO",control:"AuthForm_control__EwTT4",actions:"AuthForm_actions__3Yw66",toggle:"AuthForm_toggle__3g7Cb"}},95:function(e,t,c){"use strict";c.r(t);var n=c(9),o=c(1),s=c.n(o),i=c(89),r=c.n(i),a=c(2),l=c(4),u=c(8),j=c(0),h=function(){var e=Object(o.useRef)(),t=Object(o.useRef)(),c=Object(o.useContext)(u.b),i=Object(a.g)(),h=Object(o.useState)(!0),d=Object(n.a)(h,2),b=d[0],O=d[1],x=Object(o.useState)(!1),g=Object(n.a)(x,2),m=g[0],p=g[1];return Object(j.jsxs)(s.a.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsxs)("ul",{className:"header",children:[Object(j.jsx)(l.c,{className:"a",to:"/auth",children:Object(j.jsx)("button",{children:" Login "})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/home",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.c,{to:"/Contactus",children:"Contact us"})})]})}),Object(j.jsxs)("section",{className:r.a.auth,children:[Object(j.jsx)("h1",{children:b?"Login":"Sign Up"}),Object(j.jsxs)("form",{onSubmit:function(n){n.preventDefault();var o,s=e.current.value,r=t.current.value;p(!0),o=b?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAeu0fr6VeKS0nbxCqGxxis7mzJiLNuWGg":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAeu0fr6VeKS0nbxCqGxxis7mzJiLNuWGg",fetch(o,{method:"POST",body:JSON.stringify({email:s,password:r,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return p(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Authentication failed!!!!")}))})).then((function(e){c.login(e.idToken,e.email),console.log(e.idToken,e.email),i.replace("/store"),console.log(c.isLoggedIn)})).catch((function(e){alert(e.errorMessage)}))},children:[Object(j.jsxs)("div",{className:r.a.control,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(j.jsx)("input",{type:"email",id:"email",required:!0,ref:e})]}),Object(j.jsxs)("div",{className:r.a.control,children:[Object(j.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(j.jsx)("input",{type:"password",id:"password",required:!0,ref:t})]}),Object(j.jsxs)("div",{className:r.a.actions,children:[!m&&Object(j.jsx)("button",{children:b?"Login":"Create Account"}),m&&Object(j.jsx)("p",{children:"Sending request..."}),Object(j.jsx)("button",{type:"button",className:r.a.toggle,onClick:function(){O((function(e){return!e}))},children:b?"Create new account":"Login with existing account"})]})]})]})]})};t.default=function(){return Object(j.jsx)(h,{})}}}]);
//# sourceMappingURL=5.763c1355.chunk.js.map