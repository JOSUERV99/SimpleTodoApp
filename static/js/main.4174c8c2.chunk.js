(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{42:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(17),s=c.n(o),a=c(6),r=c(18),i=c.n(r),l=c(3),d=c(7),u=c(0),b=function(e){var t=e.deleteTodo,c=e.completeTodo,n=e.todoItem;return Object(u.jsxs)("div",{className:"card my-3",value:n,children:[Object(u.jsx)("div",{className:"card-header",children:n.title.replace(/^\w/,(function(e){return e.toUpperCase()}))}),Object(u.jsxs)("div",{className:"card-footer",children:[Object(u.jsx)("button",{type:"button",className:n.completed?"btn btn-info mx-2":"btn btn-warning mx-2",onClick:c,value:JSON.stringify(n),children:n.completed?Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"fa fa-check","aria-hidden":"true"}),"Done"]}):Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:"fa fa-minus-circle","aria-hidden":"true"}),"Missing"]})}),Object(u.jsxs)("button",{className:"btn btn-danger mx-2",type:"button",onClick:t,value:JSON.stringify(n),children:[Object(u.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})," Delete"]})]})]},n.id)},j=function(e){var t=e.todos,c=e.setTodos,n=function(e){var n=JSON.parse(e.target.closest("button").value);c(t.filter((function(e){return e.id!==n.id})))},o=function(e){var n=JSON.parse(e.target.closest("button").value);n.completed||c([Object(l.a)(Object(l.a)({},n),{},{completed:!0})].concat(Object(d.a)(t.filter((function(e){return e.id!==n.id})))).sort((function(e,t){return e.completed-t.completed})))};return Object(u.jsx)("div",{className:"container",children:0===t.length?Object(u.jsx)("div",{className:"card my-3 btn-outline-dark",children:Object(u.jsx)("h1",{className:"text-center",children:"No todo's yet!"})}):t.map((function(e){return Object(u.jsx)(b,{deleteTodo:n,completeTodo:o,todoItem:e},e.id)}))})},m=c.p+"static/media/logo.e6aba036.svg",p=function(e){var t=e.todos,c=e.setTodos,o=Object(n.useState)(null),s=Object(a.a)(o,2),r=s[0],i=s[1];return Object(u.jsx)("header",{className:"card-header bg-warning d-block",children:Object(u.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),r&&(c([].concat(Object(d.a)(t),[r])),i(null),e.target.reset(),e.target.getElementsByTagName("input")[0].focus())},children:Object(u.jsxs)("div",{className:"form-group row px-4",children:[Object(u.jsx)("img",{src:m,alt:"page-icon",width:"50"}),Object(u.jsx)("span",{className:"title text-dark d-flex justify-content-center text-capitalize mx-4",style:{fontSize:"24px"},children:"SimpleTodoApp!"}),Object(u.jsx)("input",{className:"form-control col-4",type:"text",placeholder:"Describe your todo here!",onChange:function(e){return i({title:e.target.value,completed:!1,id:t.length+1})},autoFocus:!0}),Object(u.jsx)("button",{className:"btn btn-outline-success mx-2",type:"submit",children:"Add"}),Object(u.jsx)("button",{className:"btn btn-danger mx-1",type:"button",onClick:function(e){return c([])},children:"Delete All"}),Object(u.jsx)("button",{className:"btn btn-info mx-1",type:"button",onClick:function(e){return c(t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{completed:!0})})))},children:"Completed All"})]})})})},f=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){i.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){var t=e.data;return o(t.splice(0,8).sort((function(e,t){return e.completed-t.completed})))}))}),[o]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{setTodos:o,todos:c}),Object(u.jsx)(j,{setTodos:o,todos:c})]})};s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4174c8c2.chunk.js.map