(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},4821:function(t,e,r){"use strict";var a=r("ed64"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("8c4f"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Navbar"),t.error?r("error",{attrs:{msg:t.error}}):t._e(),t.success?r("success",{attrs:{msg:t.success}}):t._e(),r("router-view")],1)},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg red navbar-light bg-light mb-3"},[r("div",{staticClass:"container"},[r("router-link",{staticClass:"navbar-brand",attrs:{tag:"a",to:{name:"home"}}},[t._v("\r\n            Shopping Cart")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[r("ul",{staticClass:"navbar-nav  ml-auto"},[t._l(t.categories,(function(e){return r("li",{key:e._id,staticClass:"nav-item active"},[r("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"category",params:{category:e.title}}}},[t._v(t._s(e.title)+"\r\n                     ")])],1)})),t.isLoggedIn?t._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"register"}}},[t._v("register\r\n                     ")])],1),t.isLoggedIn?t._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"Login"}}},[t._v("login\r\n                     ")])],1),t.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"profile"}}},[t._v("profile\r\n                     ")])],1):t._e(),t.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"details"}}},[t._v("details\r\n                     ")])],1):t._e(),t.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",on:{click:function(e){return e.preventDefault(),t.logoutuser(e)}}},[t._v("\r\nlogout\r\n                        ")])]):t._e(),r("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"checkout"}}},[t._v("Cart(\r\n                     "),r("span",{staticClass:"badge badge-light"},[t._v("\r\n                         "+t._s(t.cart.length)+"\r\n                         ")]),t._v(")\r\n                 ")])],2)])],1)])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],l=r("bc3a"),p=r.n(l),d=function(){return p.a.create({baseURL:"http://localhost:3000"})},m=r("2f62");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={data:function(){return{auth:"",user:"",categories:[]}},methods:v({},Object(m["b"])(["logout"]),{logoutuser:function(){this.logout()}}),created:function(){var t=this;d().get("/categories").then((function(e){t.categories=e.data}))},mounted:function(){},computed:v({},Object(m["c"])(["isLoggedIn"]),{cart:function(){return this.$store.getters.getCart}})},h=g,b=r("2877"),_=Object(b["a"])(h,c,u,!1,null,null,null),y=_.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-danger"},[t._v("\n    "+t._s(t.msg)+"\n")])},C=[],w={props:["msg"]},j=w,P=(r("e730"),Object(b["a"])(j,O,C,!1,null,"5cf687b7",null)),k=P.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-success"})},S=[],E={props:["msg"]},$=E,N=(r("4821"),Object(b["a"])($,x,S,!1,null,"0d8457df",null)),D=N.exports;function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q={name:"app",components:{error:k,success:D,Navbar:y},computed:A({},Object(m["c"])(["error"]))},U=q,L=Object(b["a"])(U,s,o,!1,null,null,null),R=L.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Cards",{attrs:{products:t.products}}),r("p",{staticClass:"text-center mb-0"},[t._v(t._s(t.currentPage+1)+" / "+t._s(t.pages))]),r("ul",{staticClass:"pagination justify-content-center"},[r("li",{staticClass:"page-item",class:{disabled:""===t.prevUrl}},[r("button",{staticClass:"page-link",on:{click:function(e){return t.checkPage(t.prevUrl)}}},[t._v("Previous")])]),r("li",{staticClass:"page-item",class:{disabled:""===t.nextUrl}},[r("button",{staticClass:"page-link",on:{click:function(e){return t.checkPage(t.nextUrl)}}},[t._v("Next")])])])],1)},J=[],B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},t._l(t.products,(function(t){return r("div",{key:t._id,staticClass:"col-md-4 mb-3"},[r("Card",{attrs:{product:t}})],1)})),0)])},M=[],F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",{staticClass:"card",staticStyle:{width:"100%",height:"100%"}},[r("div",{staticClass:"card-body"},[r("router-link",{attrs:{tag:"a",to:{name:"product",params:{id:t.product._id}}}},[r("img",{staticClass:"card-img-top",attrs:{src:t.product.image,alt:t.product.name}})]),r("h5",{staticClass:"card-title text-info"},[t._v(t._s(t.product.name))]),r("p",[r("span",{staticClass:"font-weight-bold"},[t._v("Category")]),t._v(": "+t._s(t.product.category))]),r("p",{staticClass:"card-text"},[t._v(t._s(t.product.description.substring(0,50)))]),r("p",{staticClass:"card-text text-danger"},[t._v("$"+t._s(t.product.price))]),r("router-link",{staticClass:"btn btn-outline-primary mr-2",attrs:{tag:"a",to:{name:"product",params:{id:t.product._id}}}},[t._v("Desciption")]),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Buy Now")]),r("router-link",[t._v("\\")])],1)]):t._e()},G=[],Q=(r("7514"),r("7f7f"),{methods:{addToCart:function(t){var e=JSON.parse(localStorage.getItem("cart"))||[];if(0===e.length){var r={id:t._id,name:t.name,price:t.price,subtotal:1*t.price,qty:1};e.push(r),this.$store.commit("setCart",r),localStorage.setItem("cart",JSON.stringify(e))}else{var a=e.find((function(e){return e.id===t._id}));if(a)a.qty++,a.subtotal=a.price*a.qty,this.$store.commit("setQuantity",a),this.$store.commit("setPrice",a),localStorage.setItem("cart",JSON.stringify(e));else{var n={id:t._id,name:t.name,price:t.price,subtotal:1*t.price,qty:1};e.push(n),this.$store.commit("setCart",n),localStorage.setItem("cart",JSON.stringify(e))}}}}}),Y={props:["product"],mixins:[Q]},K=Y,z=(r("b9b2"),Object(b["a"])(K,F,G,!1,null,"a3d9677a",null)),H=z.exports,W={props:["products"],components:{Card:H}},V=W,X=Object(b["a"])(V,B,M,!1,null,"04747742",null),Z=X.exports,tt={components:{Cards:Z},data:function(){return{products:[],currentPage:"",pages:"",prevUrl:"",nextUrl:""}},created:function(){var t=this;d().get("/products").then((function(e){t.products=e.data.products,t.currentPage=e.data.currentPage,t.pages=e.data.pages,t.nextUrl=e.data.nextUrl,t.prevUrl=e.data.prevUrl}))},methods:{checkPage:function(t){var e=this;d().get(t).then((function(t){e.products=t.data.products,e.currentPage=t.data.currentPage,e.pages=t.data.pages,e.nextUrl=t.data.nextUrl,e.prevUrl=t.data.prevUrl}))}}},et=tt,rt=Object(b["a"])(et,T,J,!1,null,"3bd07e67",null),at=rt.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"}),r("div",{staticClass:"col-md-8"},[r("img",{staticClass:"img-fluid",attrs:{src:t.product.image,alt:t.product.name}}),r("h5",[t._v(t._s(t.product.name))]),r("p",[r("span",{staticClass:"font-weight-bold"},[t._v("Category")]),t._v(": "+t._s(t.product.category))]),r("p",{staticClass:"text-danger font-weight-bold"},[t._v("$"+t._s(t.product.price))]),r("p",[t._v("\n        "+t._s(t.product.description)+"\n      ")]),r("button",{staticClass:"btn btn-outline-primary mb-5",on:{click:function(e){return t.addToCart(t.product)}}},[t._v("Buy Now")])])])])},st=[],ot={props:["id"],mixins:[Q],data:function(){return{product:{}}},created:function(){var t=this;d().get("/products/".concat(this.id)).then((function(e){t.product=e.data}))},methods:{checkout:function(t){t.preventDefault(),this.$router.push({name:"checkout"}),console.log(t)}}},it=ot,ct=Object(b["a"])(it,nt,st,!1,null,null,null),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Cards",{attrs:{products:t.products}})},pt=[],dt={props:["category"],data:function(){return{products:[]}},components:{Cards:Z},created:function(){this.fetch()},watch:{$route:function(t,e){e.params.category!==t.params.category&&this.fetch()}},methods:{fetch:function(){var t=this;d().get("/categories/".concat(this.category)).then((function(e){t.products=e.data}))}}},mt=dt,ft=Object(b["a"])(mt,lt,pt,!1,null,"0b9d1591",null),vt=ft.exports,gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[0==t.cart.length?r("div",[r("h3",{staticClass:"text-center text-danger"},[t._v("Your Cart is Empty !")])]):r("div",[r("table",{staticClass:"table stripped "},[t._m(0),r("tbody",t._l(t.cart,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.name))]),r("td",[t._v("$"+t._s(e.price))]),r("td",[t._v(t._s(e.qty))]),r("td",[t._v("$"+t._s(e.subtotal))]),r("td",[r("button",{staticClass:"btn btn-sm btn-info mr-1",on:{click:function(r){return t.action("min",e)}}},[t._v("-")]),r("button",{staticClass:"btn btn-sm btn-danger mr-1",on:{click:function(r){return t.action("clear",e)}}},[t._v("Clear")]),r("button",{staticClass:"btn btn-sm btn-info mr-1",on:{click:function(r){return t.action("add",e)}}},[t._v("+")])])])})),0)]),r("h4",[t._v("Total: $"+t._s(t.total))]),r("button",{staticClass:"btn btn-outline-primary",attrs:{id:"checkout"},on:{click:t.checkout}},[t._v("Checkout")])])])])])},ht=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Product")]),r("th",{attrs:{scope:"col"}},[t._v("Price")]),r("th",{attrs:{scope:"col"}},[t._v("Quantity")]),r("th",{attrs:{scope:"col"}},[t._v("SubTotat")]),r("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],bt={PUBLISHABLE_KEY:"pk_test_lJdbCvJNKqmvme8ThPD54LKS"},_t={mounted:function(){var t=this,e=this.total;this.handler=StripeCheckout.configure({key:bt.PUBLISHABLE_KEY,image:"https://stripe.com/img/documentation/checkout/marketplace.png",locale:"auto",token:function(r){d().post("/charge",{stripeToken:r,total:e}).then((function(e){var r=e.data;t.$store.commit("setCharge",r),t.$router.push({name:"thankyou"}),console.log(r),localStorage.clear(),t.$store.state.cart=[]}))}})},computed:{cart:function(){return this.$store.getters.getCart},total:function(){var t=0;return this.cart.map((function(e){t+=e.subtotal})),t}},methods:{checkout:function(){this.handler.open({name:"Shopping Cart",description:"Web site for Shopping Cart",amount:100*this.total})},action:function(t,e){switch(t){case"add":e.qty++,e.subtotal=e.price*e.qty,this.$store.commit("setQuantity",e),this.$store.commit("setPrice",e),localStorage.setItem("cart",JSON.stringify(this.cart));break;case"min":e.qty--,e.subtotal=e.price*e.qty,this.$store.commit("setQuantity",e),this.$store.commit("setPrice",e),localStorage.setItem("cart",JSON.stringify(this.cart)),0===e.qty&&this.clearFromCart(e);break;case"clear":this.clearFromCart(e);break;default:break}},clearFromCart:function(t){var e=this.cart.find((function(e){return e.id===t.id})),r=this.cart.indexOf(e);this.cart.splice(r,1),localStorage.setItem("cart",JSON.stringify(this.cart))}}},yt=_t,Ot=Object(b["a"])(yt,gt,ht,!1,null,null,null),Ct=Ot.exports,wt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("p",{staticClass:"text-danger mt-5"},[t._v("You will recieve an Email on "+t._s(t.email)+" soon, Thank you !")]),r("router-link",{staticClass:"btn btn-outline-primary",attrs:{tag:"a",to:{name:"home"}}},[t._v("Back to Web site")])],1)},jt=[],Pt={computed:{email:function(){return this.$store.getters.getCharge.email}}},kt=Pt,xt=Object(b["a"])(kt,wt,jt,!1,null,null,null),St=xt.exports,Et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"jumbotron mt-5"},[t._m(0),t.user?r("div",{staticClass:"card"},[r("ul",{staticClass:"list-group"},[r("li",{staticClass:"list-group-item"},[t._v("NAME: "+t._s(t.user.userName))]),r("li",{staticClass:"list-group-item"},[t._v("EMAIL: "+t._s(t.user.email))]),r("li",{staticClass:"list-group-item"},[t._v("COUNTRY: "+t._s(t.user.country)+" ")]),r("li",{staticClass:"list-group-item"},[t._v("PHONE NUMBER: "+t._s(t.user.number)+" ")]),r("li",{staticClass:"list-group-item"},[t._v("ADDRESS: "+t._s(t.user.address))]),r("li",{staticClass:"list-group-item"},[t._v("postal_code: "+t._s(t.user.postal_code))]),t.isLoggedIn?r("router-link",{staticClass:"nav-link",attrs:{tag:"a",to:{name:"details"}}},[t._v("Update your details\n                 ")]):t._e()],1)]):t._e()])])},$t=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-8 mx-auto"},[r("h1",{staticClass:"text-center"},[t._v("PROFILE")])])}];function Nt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function Dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Nt(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Nt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var It={computed:Dt({},Object(m["c"])(["user","isLoggedIn"])),methods:Dt({},Object(m["b"])(["getProfile"])),created:function(){this.getProfile()}},At=It,qt=Object(b["a"])(At,Et,$t,!1,null,null,null),Ut=qt.exports,Lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mx-auto"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.registeruser(e)}}},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("please register")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"userName"}},[t._v("userName")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"conpassword"}},[t._v("conpassword")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.conpassword,expression:"conpassword"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.conpassword},on:{input:function(e){e.target.composing||(t.conpassword=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary btn-block"},[t._v("register")]),r("router-link",{attrs:{to:"/login"}},[t._v("Already have an account?")])],1)])])])},Rt=[];function Tt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function Jt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Tt(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Tt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Bt={data:function(){return{email:"",password:"",name:"",userName:"",conpassword:""}},methods:Jt({},Object(m["b"])(["register"]),{registeruser:function(){var t={email:this.email,password:this.password,conpassword:this.conpassword,userName:this.userName,name:this.name};this.register(t).then((function(t){t.data.success&&je.push("/login")}))}})},Mt=Bt,Ft=Object(b["a"])(Mt,Lt,Rt,!1,null,null,null),Gt=Ft.exports,Qt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mx-auto"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("please sign in")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[t._v("password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"sign in"}}),r("router-link",{attrs:{to:"/register"}},[t._v("need an account?")])],1)])])])},Yt=[];function Kt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function zt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Kt(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Kt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ht={data:function(){return{name:"",password:""}},methods:zt({},Object(m["b"])(["login"]),{loginUser:function(){var t={name:this.name,password:this.password};this.login(t).then((function(t){t.data.success&&je.push("/profile")})).catch((function(t){console.log(t)}))}})},Wt=Ht,Vt=Object(b["a"])(Wt,Qt,Yt,!1,null,null,null),Xt=Vt.exports,Zt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t.user?r("div",{staticClass:"col-md-6 mx-auto"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Add your detaials below")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"country"}},[t._v("country")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.country=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"CANADA"}},[t._v("CANADA")]),r("option",{attrs:{value:"USA"}},[t._v("USA")]),r("option",{attrs:{value:"NIGERIA"}},[t._v("NIGERIA")])])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"number"}},[t._v("number")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"postal_code"}},[t._v("postal_code")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.postal_code,expression:"postal_code"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.postal_code},on:{input:function(e){e.target.composing||(t.postal_code=e.target.value)}}})]),r("div"),r("button",{staticClass:"btn btn-lg btn-primary btn-block"},[t._v("UPDATE DETAILS")])])]):t._e()])])},te=[];function ee(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function re(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ee(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ee(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ae={data:function(){return{number:"",country:"USA",postal_code:"",address:""}},computed:re({},Object(m["c"])(["user"])),methods:re({},Object(m["b"])(["getProfile"]),{submit:function(){var t={number:this.number,country:this.country,postal_code:this.postal_code,address:this.address};d().put("/api/addDetail/".concat(this.user._id),t).then((function(t){t.data&&je.push("/profile")}))}}),created:function(){this.getProfile(),this.country=this.user.country,this.postal_code=this.user.postal_code,this.number=this.user.number,this.address=this.user.address}},ne=ae,se=Object(b["a"])(ne,Zt,te,!1,null,null,null),oe=se.exports,ie=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),r("div",{on:{click:t.showfile}},[t._v("fgr")]),t._v(t._s(t.message)+"\n   "),r("form",{attrs:{form:"",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.put(e)}}},[r("div",{staticClass:"field"},[r("label",{attrs:{for:"file"}},[t._v("\n             uploads\n         ")]),r("input",{ref:"file",attrs:{type:"file"},on:{change:t.selectfile}})]),r("button",{staticClass:"btn grey waves-effect"},[t._v("send")])])])},ce=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 mx-auto"})])}],ue=(r("96cf"),r("3b8d"));function le(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function pe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?le(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):le(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var de={data:function(){return{name:"",description:"",category:"Electronics",amount:"",file:"",message:"",error:!1}},methods:pe({put:function(){var t=Object(ue["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("file",this.file),t.prev=2,t.next=5,p.a.post("http://localhost:3000/api/upload",e);case 5:this.file="",this.error=!1,this.message="file has been uploaded",t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),this.message=t.t0.res.data,this.error=!0;case 14:case"end":return t.stop()}}),t,this,[[2,10]])})));function e(){return t.apply(this,arguments)}return e}(),selectfile:function(){this.file=this.$refs.file.files[0]},showfile:function(){this.file,console.log(this.$refs.file.files[0])}},Object(m["b"])(["add"]),{addItem:function(){var t=this,e={name:this.name,description:this.description,category:this.category,price:this.amount};this.add(e).then((function(e){e.data.success&&t.$router.push({name:"home"})}))}})},me=de,fe=Object(b["a"])(me,ie,ce,!1,null,"db5edf9e",null),ve=fe.exports;a["a"].use(m["a"]);var ge={token:localStorage.getItem("token")||"",user:{},status:"",error:null},he={isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status},user:function(t){return t.user},error:function(t){return t.error}},be={login:function(){var t=Object(ue["a"])(regeneratorRuntime.mark((function t(e,r){var a,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,a("auth_request"),t.prev=2,t.next=5,d().post("/api/login",r);case 5:return n=t.sent,n.data.success&&(s=n.data.token,o=n.data.user,localStorage.setItem("token",s),p.a.defaults.headers.common["Authorization"]=s,a("auth_success",s,o)),t.abrupt("return",n);case 10:t.prev=10,t.t0=t["catch"](2),a("auth_error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));function e(e,r){return t.apply(this,arguments)}return e}(),add:function(){var t=Object(ue["a"])(regeneratorRuntime.mark((function t(e,r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,d().post("/api/postItems",r);case 4:return n=t.sent,1==n.data.success&&a("item_success"),t.abrupt("return",n);case 9:t.prev=9,t.t0=t["catch"](1),a("item_error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(ue["a"])(regeneratorRuntime.mark((function t(e,r){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,a("register_request"),t.next=5,d().post("/api/register",r);case 5:return n=t.sent,void 0!==n.data.success&&a("register_success"),t.abrupt("return",n);case 10:t.prev=10,t.t0=t["catch"](1),a("register_error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));function e(e,r){return t.apply(this,arguments)}return e}(),getProfile:function(){var t=Object(ue["a"])(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,d().get("/api/profile");case 4:return a=t.sent,r("user_profile",a.data.user),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(ue["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete p.a.defaults.headers.common["Authorization"],je.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},_e={auth_request:function(t){t.status="loading",t.error=null},auth_success:function(t,e,r){t.token=e,t.user=r,t.error=null,t.status="success"},register_success:function(t){t.error=null,t.status="success"},register_request:function(t){t.error=null,t.status="loading"},logout:function(t){t.error=null,t.status="",t.token="",t.user=""},user_profile:function(t,e){t.user=e},profile_request:function(t){t.status="loading"},register_error:function(t,e){t.error=e.response.data.msg},auth_error:function(t,e){t.error=e.response.data.msg},item_error:function(t,e){t.error=e.response.data.msg},item_success:function(t){t.error=null,t.status="success"},details_profile:function(t){t.error=null,t.status="loading"},details_request:function(t){t.error=null,t.status="success"}},ye={state:ge,mutations:_e,getters:he,actions:be};a["a"].use(m["a"]);var Oe=new m["a"].Store({modules:{Auth:ye},state:{cart:JSON.parse(localStorage.getItem("cart"))||[],charge:{}},mutations:{setCart:function(t,e){t.cart.push(e)},setQuantity:function(t,e){var r=t.cart.find((function(t){return t.id===e.id}));r.qty=e.qty},setPrice:function(t,e){var r=t.cart.find((function(t){return t.id===e.id}));r.subtotal=e.subtotal},setCharge:function(t,e){t.charge=e}},getters:{getCart:function(t){return t.cart},getCharge:function(t){return t.charge}}}),Ce=[{path:"/",name:"home",component:at},{path:"/product/:id",name:"product",component:ut,props:!0},{path:"/category/:category",name:"category",component:vt,props:!0},{path:"/checkout",name:"checkout",component:Ct,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:Ut,meta:{requiresAuth:!0}},{path:"/add",name:"add",component:ve,meta:{requiresAuth:!0}},{path:"/details",name:"details",component:oe,meta:{requiresAuth:!0}},{path:"/thankyou",name:"thankyou",component:St,meta:{requiresAuth:!0}},{path:"/register",name:"register",component:Gt,meta:{requiresGuest:!0}},{path:"/login",name:"Login",component:Xt,meta:{requiresGuest:!0}}],we=new n["a"]({routes:Ce,mode:"history"});we.beforeEach((function(t,e,r){t.matched.some((function(t){return t.meta.requiresAuth}))?Oe.getters.isLoggedIn?r():r("/login"):t.matched.some((function(t){return t.meta.requiresGuest}))&&Oe.getters.isLoggedIn?r("/profile"):r()}));var je=we;a["a"].config.productionTip=!1,a["a"].use(n["a"]),a["a"].prototype.$http=p.a;var Pe=localStorage.getItem("token");Pe&&(a["a"].prototype.$http.defaults.headers.common["Authorization"]=Pe),new a["a"]({store:Oe,router:je,render:function(t){return t(R)}}).$mount("#app")},"773d":function(t,e,r){},"85bf":function(t,e,r){},b9b2:function(t,e,r){"use strict";var a=r("85bf"),n=r.n(a);n.a},e730:function(t,e,r){"use strict";var a=r("773d"),n=r.n(a);n.a},ed64:function(t,e,r){}});
//# sourceMappingURL=app.a506ce47.js.map