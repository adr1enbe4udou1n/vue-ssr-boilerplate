!function(t){function e(e){for(var i,s,r=e[0],l=e[1],u=e[2],m=0,p=[];m<r.length;m++)s=r[m],o[s]&&p.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);for(c&&c(e);p.length;)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},o={0:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;n.push([348,1]),a()}({138:function(t,e,a){},348:function(t,e,a){"use strict";a.r(e);a(138),a(141);var i=a(11),o=a(133),n=a.n(o);i.a.use(n.a);var s=a(94),r=a(95),l=(a(346),a(347),a(134));s.library.add(r.a,r.b),i.a.component("font-awesome-icon",l.FontAwesomeIcon);var u=a(34),c=a.n(u),m=a(135),p=a.n(m);function d(t){t.title;var e=t.message,a=t.type;t.timeout,t.cb;return a===c.a.types.warn&&(a="warning"),new p.a({layout:"topRight",theme:"bootstrap-v4",timeout:2e3,text:e,type:a}).show()}var v={success:d,error:d,info:d,warn:d};i.a.use(c.a,v);var f={name:"App",metaInfo:{titleTemplate:"%s | Vue SSR Boilerplate",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}]},data:function(){return{slide:0,sliding:null,message:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},b=a(33),h=Object(b.a)(f,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[a("b-container",[a("div",{staticClass:"d-flex justify-content-between"},[a("h3",{staticClass:"text-muted"},[t._v("vue-ssr-boilerplate")]),t._v(" "),a("b-nav",{staticClass:"nav-pills float-right"},[a("b-nav-item",{attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),a("b-nav-item",{attrs:{to:"about"}},[t._v("About")]),t._v(" "),a("b-nav-item",{attrs:{to:"contact"}},[t._v("Contact")])],1)],1)])],1),t._v(" "),a("div",{staticClass:"container"},["home"===t.$route.name?a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:4e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),a("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[a("h1",[t._v("Hello world!")])]),t._v(" "),a("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),a("b-carousel-slide",[a("img",{staticClass:"d-block img-fluid w-100",attrs:{slot:"img",width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"},slot:"img"})]),t._v(" "),a("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[a("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque\n          ut lacus vel interdum.\n        ")])])],1):t._e(),t._v(" "),t.message?a("b-alert",{attrs:{variant:""+t.message.type}},[t._v("\n      "+t._s(t.message.body)+"\n    ")]):t._e(),t._v(" "),a("router-view")],1),t._v(" "),a("div",{staticClass:"footer"},[a("b-container",[a("p",[a("font-awesome-icon",{attrs:{icon:"code"}}),t._v(" with "),a("font-awesome-icon",{attrs:{icon:"heart"}}),t._v(" by mycompany.com")],1)])],1)])},[],!1,null,null,null);h.options.__file="App.vue";var _=h.exports,g=a(96),w=a(136),y=a.n(w),x=a(137),S=a.n(x),C={name:"Home",metaInfo:{title:"Home",meta:[{name:"description",content:"Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta."}]},notifications:{showSuccessMsg:{type:c.a.types.success,title:"Hello there",message:"That's the success!"},showInfoMsg:{type:c.a.types.info,title:"Hey you",message:"Here is some info for you"},showWarnMsg:{type:c.a.types.warn,title:"Wow, man",message:"That's the kind of warning"},showErrorMsg:{type:c.a.types.error,title:"Wow-wow",message:"That's the error"}},methods:{openSwal:function(){S()({title:"Yo!",text:"Yeaaah!",type:"success",confirmButtonText:"Cool"})}}},k=Object(b.a)(C,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row marketing"},[a("h4",[t._v("HTML5 Boilerplate")]),t._v(" "),a("p",[t._v("HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.")]),t._v(" "),a("h4",[t._v("Sass")]),t._v(" "),a("p",[t._v("Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.")]),t._v(" "),a("h4",[t._v("Bootstrap")]),t._v(" "),a("p",[t._v("Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.")]),t._v(" "),a("b-btn",{staticClass:"mr-1",on:{click:t.openSwal}},[t._v("Sweet !")]),t._v(" "),a("b-btn",{staticClass:"mr-1",attrs:{variant:"success"},on:{click:function(e){t.showSuccessMsg()}}},[t._v("Noty !")]),t._v(" "),a("b-btn",{staticClass:"mr-1",attrs:{variant:"info"},on:{click:function(e){t.showInfoMsg()}}},[t._v("Noty !")]),t._v(" "),a("b-btn",{staticClass:"mr-1",attrs:{variant:"warning"},on:{click:function(e){t.showWarnMsg()}}},[t._v("Noty !")]),t._v(" "),a("b-btn",{staticClass:"mr-1",attrs:{variant:"danger"},on:{click:function(e){t.showErrorMsg()}}},[t._v("Noty !")])],1)},[],!1,null,null,null);k.options.__file="Home.vue";var q=k.exports,I={name:"About",metaInfo:{title:"About",meta:[{name:"description",content:"Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat."}]}},T=Object(b.a)(I,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"mb-4"},[t._v(t._s(t.$t("about.title")))]),t._v(" "),a("p",[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t._v(" "),a("p",[t._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")]),t._v(" "),a("b-container",[a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{staticClass:"mb-4",attrs:{md:"8"}},[a("b-card",{attrs:{header:"Title"}},[a("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])])],1)],1)],1)],1)},[],!1,null,null,null);T.options.__file="About.vue";var E=T.exports,O={name:"Contact",metaInfo:{title:"Contact",meta:[{name:"description",content:"Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim."}]},data:function(){return{form:{email:"",name:"",food:null,checked:!1,secret:"S3CR3T"},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"]}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))}}},j=Object(b.a)(O,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"mb-4"},[t._v(t._s(t.$t("contact.title")))]),t._v(" "),a("b-form",{staticClass:"mb-4",on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Email address:","label-for":"exampleInput1",description:"We'll never share your email with anyone else."}},[a("b-form-input",{attrs:{id:"exampleInput1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),a("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Your Name:","label-for":"exampleInput2"}},[a("b-form-input",{attrs:{id:"exampleInput2",type:"text",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("b-form-group",{attrs:{id:"exampleInputGroup3",label:"Food:","label-for":"exampleInput3"}},[a("b-form-select",{attrs:{id:"exampleInput3",options:t.foods,required:""},model:{value:t.form.food,callback:function(e){t.$set(t.form,"food",e)},expression:"form.food"}})],1),t._v(" "),a("b-form-group",{attrs:{id:"exampleGroup4"}},[a("b-form-checkbox",{attrs:{id:"exampleInput4"},model:{value:t.form.checked,callback:function(e){t.$set(t.form,"checked",e)},expression:"form.checked"}},[t._v("\n        Check me out\n      ")])],1),t._v(" "),a("b-btn",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),t._v(" "),a("b-btn",{attrs:{type:"reset",variant:"secondary"}},[t._v("Reset")])],1)],1)},[],!1,null,null,null);j.options.__file="Contact.vue";var M=j.exports;i.a.use(g.a),i.a.use(y.a);var A=a(97);i.a.use(A.a);var $=a(98),H={about:{title:"About"},contact:{title:"Contact"}},N={about:{title:"Qui-sommes-nous"},contact:{title:"Contactez-nous"}};i.a.use($.a);var B=function(){var t=new g.a({linkActiveClass:"open active",mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:E},{path:"/contact",name:"contact",component:M}]}),e=new A.a.Store({state:{}}),a=new $.a({locale:"en",messages:{en:H,fr:N}});return{app:new i.a({router:t,store:e,i18n:a,render:function(t){return t(_)}}),router:t,store:e}}(),L=B.app,P=B.router,D=B.store;window.__INITIAL_STATE__&&D.replaceState(window.__INITIAL_STATE__),P.onReady(function(){L.$mount("#app")})}});
//# sourceMappingURL=app.1b14159b442c4ddc841c.js.map