(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(16),n=c.n(r),a=(c(22),c(3)),i=(c(23),c(0)),j=function(e){var t=e.title,c=e.directions;return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)("h6",{children:c})]})};j.defaultProps={title:"Employee Directory",directions:"Click A-Z to Sort First Names Alphabetically. You Can also use the open box to search a first or last name."};var o=j,l=function(e){return Object(i.jsx)("main",{className:"wrapper",children:e.children})},b=c(7),d=function(e){var t=e.users,c=Object(s.useState)([]),r=Object(a.a)(c,2),n=r[0],j=r[1];return Object(s.useEffect)((function(){return j(t)}),[t]),Object(i.jsxs)("table",{className:"allTable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"tableRow",children:[Object(i.jsx)("th",{scope:"col",children:"Picture"}),Object(i.jsxs)("th",{scope:"col",onClick:function(){var e=Object(b.a)(t).sort((function(e,t){var c=e.name.first,s=t.name.first;return c<s?-1:c>s?1:0}));j(e)},children:["First Name ",Object(i.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){console.log("clicked");var e=t.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0}));j(Object(b.a)(e))},children:"A-Z"})]}),Object(i.jsx)("th",{scope:"col",children:"Last Name"}),Object(i.jsx)("th",{scope:"col",children:"Email"}),Object(i.jsx)("th",{scope:"col",children:"City"}),Object(i.jsx)("th",{scope:"col",children:"State"}),Object(i.jsx)("th",{scope:"col",children:"Phone Number"}),Object(i.jsx)("th",{scope:"col",children:"Date of Birth"})]})}),Object(i.jsx)("tbody",{className:"tbody",children:n.map((function(e){var t=e.picture.large,c=e.name,s=c.first,r=c.last,n=e.email,a=e.location,j=a.city,o=a.state,l=e.phone,b=e.dob;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:t})}),Object(i.jsx)("th",{children:s}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:j}),Object(i.jsx)("td",{children:o}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:b.date}),Object(i.jsx)("td",{})]})}))})]})},u=function(e){var t=e.users,c=e.updateUsers,r=Object(s.useState)(""),n=Object(a.a)(r,2),j=n[0],o=n[1];return Object(s.useEffect)((function(){var e=""===j?t:t.filter((function(e){var t=e.name,c=t.first,s=t.last;return c.toLowerCase().indexOf(j.toLowerCase())>=0||s.toLowerCase().indexOf(j.toLowerCase())>=0}));c(e)}),[j,t]),Object(i.jsx)("div",{className:"filterinput",children:Object(i.jsx)("input",{value:j,onChange:function(e){return o(e.target.value)}})})},h=c(17),O=c.n(h);var f=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)([]),j=Object(a.a)(n,2),b=j[0],h=j[1];return Object(s.useEffect)((function(){O.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){var t=e.data.results;return r(t)}))}),[]),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(l,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(u,{users:c,updateUsers:h}),Object(i.jsx)(d,{users:b})]})})};n.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8f23707d.chunk.js.map