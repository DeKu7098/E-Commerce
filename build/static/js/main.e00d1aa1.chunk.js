(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{14:function(e,t,c){e.exports={header:"header_header__XFezL",section:"header_section__BaVDk",main:"header_main__3uy9E",main2:"header_main2__Xe-v_",music:"header_music__1c5S7",musich3:"header_musich3__3ovGB"}},17:function(e,t,c){e.exports={header:"ExtraHeader_header__3Vhf8",section:"ExtraHeader_section__PbiXn",main:"ExtraHeader_main__31S8h",main2:"ExtraHeader_main2__VcT1G",music:"ExtraHeader_music__1BEzy",musich3:"ExtraHeader_musich3__3TqN5",html:"ExtraHeader_html__MzaAS"}},26:function(e,t,c){e.exports={spinner:"Spinner_spinner__1fdbb"}},35:function(e,t,c){},36:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(22),a=c.n(i),r=c(4),o=(c(35),c(9)),l=c(2),h=(c(36),c(20)),j=c(23),d=c(14),b=c.n(d),u=c(8),m=c(0),x=function(e){var t=Object(l.g)(),c=Object(n.useContext)(u.b),s=c.isLoggedIn,i=function(){var e=Object(j.a)(Object(h.a)().mark((function e(){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.logout(),console.log(c.isLoggedIn),console.log("xyz"),t.replace("/auth");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("header",{children:[Object(m.jsx)("section",{className:b.a.header,children:Object(m.jsxs)("span",{className:b.a.main,children:[Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:Object(m.jsx)(r.c,{to:"/home",children:"Home"})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:s&&Object(m.jsx)(r.c,{to:"/store",children:"Store"})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:Object(m.jsx)(r.c,{to:"/about",children:"About"})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:s&&Object(m.jsx)(r.c,{to:"/profile",children:"Profile"})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:Object(m.jsx)(r.c,{to:"/Contactus",children:"Contact us"})})}),Object(m.jsx)("h3",{children:Object(m.jsxs)("li",{children:[" ",s&&Object(m.jsx)("button",{onClick:i,children:"LOGOUT"})]})}),Object(m.jsx)("button",{onClick:e.onClick,children:"Cart"})]})}),Object(m.jsx)("section",{className:b.a.section,children:Object(m.jsx)("h1",{children:"The Generic"})})]})},O=s.a.createContext({items:[],total:0,addItem:function(e){},removeItem:function(e){}}),p=(c(45),c(46),function(e){var t=Object(n.useContext)(O);return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("span",{children:e.title}),Object(m.jsx)("img",{src:e.imageUrl,alt:"products",className:"i"})]}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("span",{children:"Rs ".concat(e.price)})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("span",{children:e.quantity})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("button",{onClick:function(){console.log(e.id),t.removeItem(e.id)},children:"Remove"})})]})})}),f=function(e){var t=0,c=Object(n.useContext)(O).items.map((function(e){return Object(m.jsx)(p,{id:e.id,title:e.title,imageUrl:e.imageUrl,price:e.price,quantity:e.quantity})}));return Object(n.useContext)(O).items.forEach((function(e){var c;c=e.quantity*e.price,t+=c})),Object(m.jsxs)("div",{className:"cart",children:[Object(m.jsxs)("h3",{className:"cartName",children:["Cart",Object(m.jsx)("button",{className:"btn btn-primary X",onClick:e.onClick,children:"X"})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row Header",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("span",{children:"Item"})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("span",{children:"Price"})}),Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("span",{children:"Quantity"})}),Object(m.jsx)("div",{className:"col",children:"Total"})]})}),c,Object(m.jsxs)("div",{className:"Total",children:["TOTAL AMOUNT = ",t]})]})},g=c(15),v=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],a={items:s,addItem:function(e){console.log(e);var t=Object(g.a)(s),c=!1;t.forEach((function(n,s){e.id===n.id&&(c=!0,t[s].quantity=Number(t[s].quantity)+Number(e.quantity))})),i(!0===c?t:[].concat(Object(g.a)(s),[e]))},removeItem:function(e){var t=Object(g.a)(s);t.forEach((function(c,n){e===c.id&&t.splice(n,1)})),i(t)}};return Object(m.jsx)(O.Provider,{value:a,children:e.children})},y=c(21),_=(c(47),function(e){var t=Object(n.useContext)(O);return console.log(e),Object(m.jsx)("section",{className:"productContainer",children:Object(m.jsxs)("div",{className:"products",children:[Object(m.jsxs)(r.b,{to:"/store/".concat(e.id),children:[Object(m.jsx)("span",{children:e.title}),Object(m.jsx)("img",{src:e.imageUrl,alt:"product"}),Object(m.jsx)("span",{children:"Rs ".concat(e.price)})]}),Object(m.jsx)("button",{onClick:function(){t.addItem(Object(y.a)(Object(y.a)({},e),{},{quantity:1}))},children:"Add To Cart"})]})})}),w=[{id:"p1",title:"Colors",price:100,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",quantity:1},{id:"p2",title:"Black and white Colors",price:50,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%202.png",quantity:1},{id:"p3",title:"Yellow and Black Colors",price:70,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%203.png",quantity:1},{id:"p4",title:"Blue Color",price:100,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%204.png",quantity:1}],N=function(){var e=w.map((function(e){return Object(m.jsx)(_,{id:e.id,title:e.title,imageUrl:e.imageUrl,price:e.price,quantity:e.quantity})}));return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("h3",{style:{textAlign:"center"},children:"Music"}),Object(m.jsx)("ul",{children:e})]})},C=(c(48),function(){return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"footer",children:["The Generic",Object(m.jsxs)("li",{className:"footer-icons",children:[Object(m.jsx)("a",{href:"https://www.youtube.com",children:Object(m.jsx)("img",{src:"https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg",alt:"youtube",className:"photo"})}),Object(m.jsx)("span",{className:"footer-icons",children:Object(m.jsx)("a",{href:"https://accounts.spotify.com/en/login",children:Object(m.jsx)("img",{src:"https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png",alt:"spotify",className:"photo"})})}),Object(m.jsx)("span",{className:"footer-icons",children:Object(m.jsx)("a",{href:"https://www.facebook.com/",children:Object(m.jsx)("img",{src:"https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png",alt:"yfacebook",className:"photo"})})})]})]})})}),k=c(17),I=c.n(k),q=(c(49),function(){var e=Object(n.useContext)(u.b);return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("header",{children:Object(m.jsxs)("section",{className:I.a.header,children:[Object(m.jsxs)("span",{className:I.a.main,children:[Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:Object(m.jsx)(r.c,{to:"/home",children:"Home"})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:e.isLoggedIn&&Object(m.jsx)(r.c,{to:"/store",children:"Store"})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:Object(m.jsx)(r.c,{to:"/about",children:"About"})})}),Object(m.jsx)("h3",{children:Object(m.jsx)("li",{children:Object(m.jsx)(r.c,{to:"/Contactus",children:"Contact us"})})})]}),Object(m.jsx)("h1",{children:"The Generic"})]})}),Object(m.jsxs)("section",{className:"about",children:[Object(m.jsx)("h2",{children:"About"}),Object(m.jsx)("img",{src:"https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png",alt:"band",className:"photo1"}),Object(m.jsx)("div",{children:Object(m.jsx)("section",{className:"html",children:Object(m.jsx)("p",{children:"Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow. Lorem ipsum dolor, sit amet consectetur rebates The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns."})})})]})]})}),S=c(26),E=c.n(S),T=function(){return Object(m.jsx)("div",{className:E.a.spinner})},L=s.a.lazy((function(){return c.e(7).then(c.bind(null,92))})),A=s.a.lazy((function(){return Promise.all([c.e(3),c.e(6)]).then(c.bind(null,93))})),U=s.a.lazy((function(){return c.e(8).then(c.bind(null,94))})),H=s.a.lazy((function(){return c.e(5).then(c.bind(null,95))})),z=s.a.lazy((function(){return c.e(4).then(c.bind(null,96))}));var B=function(){var e=Object(n.useContext)(u.b),t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(m.jsx)(n.Suspense,{fallback:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(T,{})}),children:Object(m.jsxs)(v,{children:[Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/auth",children:Object(m.jsx)(H,{})}),Object(m.jsx)(l.b,{path:"/store/:productId",exact:!0,children:Object(m.jsx)(U,{})}),Object(m.jsxs)(l.b,{path:"/store",children:[Object(m.jsx)(x,{onClick:function(){i(!0)}}),s&&Object(m.jsx)(f,{onClick:function(){i(!1)}}),e.isLoggedIn&&Object(m.jsx)(l.b,{path:"/store",exact:!0,children:Object(m.jsx)("ul",{children:Object(m.jsx)(N,{})})})]}),Object(m.jsx)(l.b,{path:"/about",children:Object(m.jsx)(q,{})}),Object(m.jsx)(l.b,{path:"/home",children:Object(m.jsx)(L,{})}),Object(m.jsx)(l.b,{path:"/contactus",children:Object(m.jsx)(A,{})}),Object(m.jsx)(l.b,{path:"/profile",children:Object(m.jsx)(z,{})}),Object(m.jsx)(l.b,{path:"*",children:Object(m.jsx)(l.a,{to:"/home"})})]}),Object(m.jsx)(C,{})]})})};a.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(u.a,{children:Object(m.jsx)(r.a,{children:Object(m.jsx)(B,{})})}))},8:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(9),s=c(1),i=c.n(s),a=c(0),r=i.a.createContext({token:"",isLoggedIn:!1,login:function(e,t){},logout:function(){}}),o=function(e){var t=localStorage.getItem("token"),c=Object(s.useState)(t),i=Object(n.a)(c,2),o=i[0],l=i[1],h=Object(s.useState)(""),j=Object(n.a)(h,2),d=j[0],b=j[1],u=!!o,m={token:o,email:d,isLoggedIn:u,login:function(e,t){console.log(u),l(e),b(t),localStorage.setItem("token",e),localStorage.setItem("Email",t)},logout:function(){l(null),b(null),localStorage.removeItem("token"),localStorage.removeItem("Email")}};return Object(a.jsx)(r.Provider,{value:m,children:e.children})};t.b=r}},[[50,1,2]]]);
//# sourceMappingURL=main.e00d1aa1.chunk.js.map