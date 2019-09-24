(window["webpackJsonpmyreads-book-app"]=window["webpackJsonpmyreads-book-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),c=a.n(r),l=a(5),s=a(6),i=a(8),u=a(7),h=a(9),b=a(20);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:d},y=function(e,t){return fetch("".concat(p,"/books/").concat(e.id),{method:"PUT",headers:m({},k,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},v=function(e){return fetch("".concat(p,"/search"),{method:"POST",headers:m({},k,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},g=(a(28),a(10)),E=a(11),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).updateShelf=function(e){return a.props.changeShelf(a.props.book,e.target.value)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.book,a=e.books,n=null!==t.title?t.title:"No title",r="none",c=!0,l=!1,s=void 0;try{for(var i,u=a[Symbol.iterator]();!(c=(i=u.next()).done);c=!0){var h=i.value;if(h.id===t.id){r=h.shelf;break}}}catch(b){l=!0,s=b}finally{try{c||null==u.return||u.return()}finally{if(l)throw s}}return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:this.updateShelf,defaultValue:r},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},n),o.a.createElement("div",{className:"book-authors",key:!0},t.authors)))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",booksReturned:[]},a.searchedBooks=function(e){var t=e.target.value;t?(a.setState({query:t}),v(t.trim(),30).then((function(e){return a.setState({booksReturned:e})}))):a.setState({booksReturned:[]})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.booksReturned,t=this.props,a=t.books,n=t.changeShelf,r=e.length>0;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(E.b,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:this.searchedBooks}))),o.a.createElement("div",{className:"search-books-results"},r&&o.a.createElement("div",null,o.a.createElement("h3",null,"Search returned ",e.length," Books"),o.a.createElement("ol",{className:"books-grid"},e.map((function(e,t){return o.a.createElement(O,{book:e,books:a,changeShelf:n,key:t})}))))))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.shelf,a=e.books,n=e.changeShelf;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},t.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},a.filter((function(e){return e.shelf===t.type})).map((function(e,t){return o.a.createElement(O,{book:e,books:a,changeShelf:n,key:t})})))))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.changeShelf;return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},[{type:"currentlyReading",title:"Currently Reading"},{type:"wantToRead",title:"Want to Read"},{type:"read",title:"Read"}].map((function(e,n){return o.a.createElement(S,{shelf:e,books:t,changeShelf:a,key:n})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(E.b,{className:"button-link",to:"/search"},"Add a book")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.changeShelf=function(e,t){y(e,t).then((function(n){e.shelf=t,a.setState((function(t){return{books:t.books.filter((function(t){return t.id!==e.id})).concat(e)}}))}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(p,"/books"),{headers:k}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(t){e.setState({books:t})}))}},{key:"render",value:function(){var e=this,t=this.state.books;return o.a.createElement("div",{className:"app"},o.a.createElement(g.a,{path:"/search",render:function(){return o.a.createElement(j,{books:t,changeShelf:e.changeShelf})}}),o.a.createElement(g.a,{exact:!0,path:"/",render:function(){return o.a.createElement(N,{books:t,changeShelf:e.changeShelf})}}))}}]),t}(o.a.Component);a(34);c.a.render(o.a.createElement(E.a,null,o.a.createElement(w,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3da9093f.chunk.js.map