(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s=n(1),i=n.n(s),c=n(8),a=n.n(c),r=(n(14),n(2)),d=n(3),o=n(5),l=n(4),h=n(9),m=(n(7),n(0)),j=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).handleChange=function(t){s.setState(Object(h.a)({},t.target.id,t.target.value))},s.handelSubmit=function(t){var e=document.getElementById("name"),n=document.getElementById("desc");e.value.length>=3&&n.value.length>=5?(s.setState({id:"",name:"",desc:""}),s.props.addItem(s.state)):console.log("Attention msg")},s.state={id:"",name:"",desc:""},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"My Todos"}),Object(m.jsxs)("section",{id:"TodoInsert",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Name"}),Object(m.jsx)("input",{type:"text",id:"name",onChange:this.handleChange,value:this.state.name})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Description"}),Object(m.jsx)("input",{type:"text",id:"desc",onChange:this.handleChange,value:this.state.desc})]}),Object(m.jsx)("button",{type:"button",onClick:this.handelSubmit,children:"Add Todo"})]})]})}}]),n}(s.Component),u=(n(16),function(t){var e=t.items,n=function(t){var e=t.target;e.parentElement.firstChild.children[0].style.color="gray",e.parentElement.firstChild.children[0].style.textDecoration="line-through",e.parentElement.firstChild.children[1].style.color="gray",e.parentElement.firstChild.children[1].style.textDecoration="line-through",e.parentElement.removeChild(t.target)},s=function(t){var e=t.target;e.parentElement.parentElement.removeChild(e.parentElement)},i=e.map((function(t){return Object(m.jsxs)("section",{className:"TodoItems",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:t.name}),Object(m.jsx)("p",{children:t.desc})]}),Object(m.jsx)("button",{type:"button",className:"dlt",onClick:s}),Object(m.jsx)("button",{type:"button",className:"comp",onClick:n})]},t.id)}));return Object(m.jsxs)(m.Fragment,{children:[" ",i," "]})}),b=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).addItem=function(t){t.id=s.state.items.length+1;var e=s.state.items;e.push(t),s.setState({items:e})},s.state={items:[{id:1,name:"Task 1",desc:"this is my task one"},{id:2,name:"Task 2",desc:"this is my task two"},{id:3,name:"Task 3",desc:"this is my task three"}]},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{addItem:this.addItem}),Object(m.jsx)(u,{items:this.state.items})]})}}]),n}(s.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),s(t),i(t),c(t),a(t)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),p()},7:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.d1e5f8f3.chunk.js.map