(this["webpackJsonpe-meet"]=this["webpackJsonpe-meet"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),a=s.n(n),c=s(16),l=s.n(c),i=(s(30),s(17)),o=s(18),u=s(19),d=s(24),j=s(23),h=(s(31),s(20)),m=s.n(h),f=function(){return m.a.get("https://randomuser.me/api/?results=200&nat=us")};s(50);var b=function(e){console.log(e);var t=e.sortedResults;return Object(r.jsx)("div",{className:"wrapper",children:t?t.map((function(e,t){return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("img",{alt:"1",className:"result-row employee-pic col-2",src:e.picture.large}),Object(r.jsxs)("div",{className:"result-row col-2",children:[e.name.first," ",e.name.last]}),Object(r.jsx)("div",{className:"result-row col-2",children:e.phone}),Object(r.jsx)("div",{className:"result-row col-3",children:e.email}),Object(r.jsx)("div",{className:"result-row col-2",children:e.dob.date.slice(0,10)})]},t)})):"No results found"})},p=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={allUsers:[],filteredUsers:[],searchInput:"",sortOptions:""},e.handleInputChange=function(t){console.log(t.target);var s=t.target,r=s.name,n=s.value;e.setState(Object(i.a)({},r,n),(function(){var t=e.state.allUsers.filter((function(t){return t.name.first.toLowerCase().startsWith(e.state.searchInput.toLocaleLowerCase())}));e.setState({filteredUsers:t})}))},e.HandleSortResult=function(t){if(t.preventDefault(),"ascending"!==e.state.sortOptions){console.log("sorting...!");var s=e.state.allUsers.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));e.setState({filteredUsers:s,sortOptions:"ascending"})}else{var r=e.state.allUsers.sort((function(e,t){return t.name.first.localeCompare(e.name.first)}));e.setState({filteredUsers:r,sortOptions:"descending"})}},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){e.setState({allUsers:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"Result wrapper",children:[Object(r.jsxs)("form",{className:"search-block",children:[Object(r.jsx)("input",{className:"search-form",name:"searchInput",type:"text","aria-label":"Search",onChange:this.handleInputChange,value:this.state.searchInput,placeholder:"Enter Name Here"}),Object(r.jsx)("button",{className:"btn-light sort",onClick:this.HandleSortResult,children:"Sort by name"})]}),Object(r.jsxs)("div",{className:"wrapper result-container",children:[Object(r.jsxs)("div",{className:"row title-row",children:[Object(r.jsx)("div",{className:"title col-2"}),Object(r.jsx)("div",{className:"title click col-2",onClick:this.HandleSortResult,children:"Name:"}),Object(r.jsx)("div",{className:"title col-2",children:"Phone:"}),Object(r.jsx)("div",{className:"title col-3",children:"Email:"}),Object(r.jsx)("div",{className:"title col-2",children:"Birthday:"})]}),Object(r.jsx)(b,{sortedResults:this.state.filteredUsers})]})]})}}]),s}(a.a.Component),O=(s(51),s(21)),v=s(22);s(52);var x=function(){return Object(r.jsx)(O.a,{fluid:!0,children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)("h1",{children:"E-Meet Network"}),Object(r.jsx)("p",{children:"A place to get to know fellow coworkers"})]})})};s(53);var g=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)(x,{})}),Object(r.jsx)(p,{})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),N()}},[[54,1,2]]]);
//# sourceMappingURL=main.242c906a.chunk.js.map