(this["webpackJsonppractice-2021"]=this["webpackJsonppractice-2021"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),i=n.n(r),o=n(5),s=n(4),u=n(0),j=function(e){var t=e.title,n=e.image,c=e.price,r=e.url;return Object(u.jsxs)("section",{children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("h4",{children:t}),Object(u.jsx)("h5",{children:c}),Object(u.jsx)("a",{href:r,target:"_blank",children:"Buy"})]})},a=function(){var e="https://api.itbook.store/1.0/",t=Object(c.useState)([]),n=Object(s.a)(t,2),r=n[0],i=n[1];Object(c.useEffect)((function(){fetch(e+"new").then((function(e){return e.json()})).then((function(e){return i(e.books)}))}),[]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{children:"BookNerd.IT"}),Object(u.jsx)("form",{onSubmit:function(t){return function(t){t.preventDefault();var n=t.target.querySelector("input").value;fetch("".concat(e,"search/").concat(n)).then((function(e){return e.json()})).then((function(e){return i(e.books)}))}(t)},children:Object(u.jsx)("input",{type:"text",placeholder:"Search..."})})]}),Object(u.jsx)("main",{children:r.map((function(e,t){return Object(u.jsx)(j,Object(o.a)({},e),t)}))})]})};n(11);i.a.render(Object(u.jsx)(a,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2c8c3905.chunk.js.map