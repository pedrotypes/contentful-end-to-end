webpackJsonp([1],{103:function(t,e,n){var a=n(10)(n(62),n(109),null,null);t.exports=a.exports},104:function(t,e,n){var a=n(10)(n(63),n(108),null,null);t.exports=a.exports},105:function(t,e,n){var a=n(10)(n(64),n(106),null,null);t.exports=a.exports},106:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Please select a space")]),t._v(" "),n("ul",t._l(t.spaces,function(e){return n("li",[n("router-link",{attrs:{to:{path:"/spaces/"+e.sys.id}}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)}))])},staticRenderFns:[]}},107:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h1",[t._v("\n        Contentful end to end\n      ")]),t._v(" "),n("p",{staticClass:"lead"},[t._v("\n        Support materials for the training session, because no one likes to type in URLs by hand.\n      ")]),t._v(" "),t.cmaToken?t._e():n("div",[n("p",[t._v("\n          Please login with your Contentful account.\n        ")]),t._v(" "),n("a",{staticClass:"btn btn-default",attrs:{href:t.oauth_url}},[t._v("Login")])]),t._v(" "),t.cmaToken&&!t.user?n("div",[t._v("Retrieving user information...")]):t._e(),t._v(" "),t.token?n("div",[n("p",[n("img",{staticClass:"avatar",attrs:{src:t.user.avatarUrl}}),t._v("\n          "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+"\n          "),n("button",{staticClass:"btn btn-default",on:{click:t.logout}},[t._v("Logout")])]),t._v(" "),t.user?n("router-view"):t._e()],1):t._e()])])])},staticRenderFns:[]}},108:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[n("router-link",{attrs:{to:{path:"/"}}},[t._v("\n        Home\n      ")]),t._v(" /\n      "),t.space?n("span",[t._v(t._s(t.space.name)+" (#"+t._s(t.space.sys.id)+")")]):t._e()],1),t._v(" "),t.loading?n("div",[t._v("\n      Loading...\n    ")]):t.product?t.product?n("div",[n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Your first Delivery API call")])]),t._v(" "),n("div",{staticClass:"panel-body"},[n("a",{attrs:{href:t.url_first_cda_call,target:"_blank"}},[t._v("\n            "+t._s(t.url_first_cda_call)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Let's find yourself on the preview API")])]),t._v(" "),n("div",{staticClass:"panel-body"},[n("a",{attrs:{href:t.url_find_yourself_cpa,target:"_blank"}},[t._v("\n            "+t._s(t.url_find_yourself_cpa)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Single page application")])]),t._v(" "),n("div",{staticClass:"panel-body"},[n("a",{attrs:{href:"http://contentful-labs.github.io/product-catalogue-web.ts",target:"_blank"}},[t._v("\n            http://contentful-labs.github.io/product-catalogue-web.ts\n          ")])])]),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Setup webhook")])]),t._v(" "),n("div",{staticClass:"panel-body"},[n("dl",[n("dt",[t._v("NAME:")]),t._v(" "),n("dd",[n("code",[t._v("Your nice name")])]),t._v(" "),n("dt",[t._v("URL:")]),t._v(" "),n("dd",[n("code",[t._v("https://6ajny5opo2.execute-api.us-east-1.amazonaws.com/production/logging")])]),t._v(" "),n("dt",[t._v("HEADER-KEY:")]),t._v(" "),n("dd",[n("code",[t._v("x-api-key")])]),t._v(" "),n("dt",[t._v("HEADER-VALUE:")]),t._v(" "),n("dd",[n("code",[t._v("hiYmkFjFOV8DuuycYfb6b9TOhmjPjcdGaO7BYJy8")])])])])]),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Hello Insomnia")])]),t._v(" "),n("div",{staticClass:"panel-body"},[t._v("\n          Download from here:\n          "),n("a",{attrs:{href:"https://insomnia.rest/",target:"_blank"}},[t._v("\n            https://insomnia.rest/\n          ")])])]),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Download Insomnia configuration")])]),t._v(" "),n("div",{staticClass:"panel-body"},[n("a",{attrs:{href:"https://drive.google.com/open?id=0B35vixJzhTxlLUNxSUt2X3hFWm8",target:"_blank"}},[t._v("\n            https://drive.google.com/open?id=0B35vixJzhTxlLUNxSUt2X3hFWm8\n          ")])])]),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[n("h3",{staticClass:"panel-title"},[t._v("Import Insomnia environment")])]),t._v(" "),n("div",{staticClass:"panel-body"},[n("pre",[t._v('\n{\n    "space_id": "'+t._s(t.space.sys.id)+'",\n    "cda_key": "'+t._s(t.spaceTokens.cda)+'",\n    "cpa_key": "'+t._s(t.spaceTokens.cpa)+'",\n    "cma_key": "'+t._s(t.cmaToken)+'",\n    "cda_url": "https://cdn.contentful.com/spaces/",\n    "cpa_url": "https://preview.contentful.com/spaces/",\n    "cma_url": "https://api.contentful.com/spaces/",\n    "content_type": "application/vnd.contentful.management.v1+json"\n}\n          ')])])])]):t._e():n("div",{staticClass:"alert alert-danger"},[n("p",{staticClass:"lead"},[n("strong",[t._v('\n          No "Product" content type detected in this space.\n        ')])]),t._v(" "),n("p",[t._v('\n        Have you created this space as a "Product catalogue" example space?\n      ')])])])},staticRenderFns:[]}},109:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hr"),t._v(" "),n("button",{on:{click:t.setToken}},[t._v("set token")]),t._v(" "),n("button",{on:{click:t.clearToken}},[t._v("clear token")]),t._v(" "),n("button",{on:{click:t.setUser}},[t._v("set user")]),t._v(" "),n("button",{on:{click:t.clearUser}},[t._v("clear user")]),t._v(" "),t.cmaToken?n("p",[t._v("\n    "+t._s(t.cmaToken)+"\n  ")]):t._e(),t._v(" "),t.user?n("p",[t._v("\n    "+t._s(t.user)+"\n  ")]):t._e()])},staticRenderFns:[]}},39:function(t,e,n){"use strict";var a=n(11),s=n(110),o=n(105),c=n.n(o),i=n(104),r=n.n(i);a.a.use(s.a);var l=new s.a({mode:"history",routes:[{path:"/",component:c.a},{path:"/spaces/:spaceId",component:r.a,props:!0}]});e.a=l},40:function(t,e,n){"use strict";var a=n(11),s=n(4),o=n(42),c=n.n(o);a.a.use(s.b);var i=new s.b.Store({state:{cmaToken:null,token:null,user:null,organizations:[],spaces:[],space:null,contentTypes:null,spaceTokens:{}},actions:{LOAD_USER:function(t){c.a.get("token").then(function(e){t.commit("SET_TOKEN",e.data),t.commit("SET_USER",e.data.includes.User[0]),t.commit("SET_ORGANIZATIONS",e.data.includes.Organization),t.commit("SET_SPACES",e.data.includes.Space)}).catch(function(){t.commit("LOGOUT")})},LOAD_CONTENT_TYPES:function(t,e){t.commit("SET_CONTENT_TYPES",[]),c.a.get("spaces/"+e.sys.id+"/content_types").then(function(e){t.commit("SET_CONTENT_TYPES",e.data.items)})},LOAD_SPACE_TOKENS:function(t,e){t.commit("SET_SPACE_TOKENS",{name:null,cda:null,cpa:null}),c.a.get("spaces/"+e.sys.id+"/api_keys").then(function(n){var a=n.data.items[0].sys.id;c.a.get("spaces/"+e.sys.id+"/api_keys/"+a).then(function(n){var a=n.data.preview_api_key.sys.id,s=n.data.accessToken;c.a.get("spaces/"+e.sys.id+"/preview_api_keys/"+a).then(function(e){t.commit("SET_SPACE_TOKENS",{cda:s,cpa:e.data.accessToken})})})})}},mutations:{SET_CMA_TOKEN:function(t,e){t.cmaToken=e,c.a.defaults.baseURL="https://api.contentful.com/",c.a.defaults.headers.common.Authorization="Bearer "+e,c.a.defaults.headers.common["Content-Type"]="application/vnd.contentful.management.v1+json"},SET_TOKEN:function(t,e){t.token=e},LOGOUT:function(t){t.cmaToken=null,t.token=null,t.user=null},SET_USER:function(t,e){t.user=e},SET_ORGANIZATIONS:function(t,e){t.organizations=e},SET_SPACES:function(t,e){t.spaces=e},SET_SPACE:function(t,e){t.space=e},SET_CONTENT_TYPES:function(t,e){t.contentTypes=e},SET_SPACE_TOKENS:function(t,e){t.spaceTokens=e}},getters:{}});e.a=i},41:function(t,e,n){n(99);var a=n(10)(n(61),n(107),null,null);t.exports=a.exports},60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(11),s=n(41),o=n.n(s),c=n(39),i=n(40);a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,template:"<App/>",store:i.a,components:{App:o.a}})},61:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),s=n(103),o=n.n(s);e.default={name:"app",data:function(){return{oauth_url:"https://be.contentful.com/oauth/authorize?response_type=token&client_id=385bc6ca3775ee9f48bdd159eb3c68179f11fc02dfadc64f6ae1a896cc3ec287&redirect_uri=https://contentful-end-to-end.surge.sh/oauth/contentful_redirect&scope=content_management_manage"}},computed:n.i(a.a)(["cmaToken","user","token"]),mounted:function(){var t,e;if("/oauth/contentful_redirect"===this.$router.currentRoute.path){t=this.$router.currentRoute.hash.match(/access_token=(\w*)/).pop(),localStorage.setItem("cmaToken",t),e=localStorage.getItem("previousRoute"),e=e?JSON.parse(e).path:"/",localStorage.removeItem("previousRoute"),window.location=e}else t=localStorage.getItem("cmaToken");t&&!this.user&&(this.$store.commit("SET_CMA_TOKEN",t),this.$store.dispatch("LOAD_USER"))},methods:{logout:function(){localStorage.clear(),this.$store.commit("LOGOUT")}},components:{Debug:o.a}}},62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(4);e.default={name:"Debug",computed:n.i(a.a)(["cmaToken","user"]),methods:{setToken:function(){this.$store.commit("SET_CMA_TOKEN","cma_token")},clearToken:function(){this.$store.commit("SET_CMA_TOKEN",null)},setUser:function(){this.$store.commit("SET_USER",{id:"user_id",name:"Jon Snow"})},clearUser:function(){this.$store.commit("SET_USER",null)}}}},63:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(65),s=n.n(a),o=n(25),c=n.n(o),i=n(4);e.default={name:"space",computed:c()({},n.i(i.a)(["spaces","space","user","cmaToken","contentTypes","spaceTokens"]),{loading:function(){return 0===this.contentTypes.length||null===this.spaceTokens.name},product:function(){var t=!0,e=!1,n=void 0;try{for(var a,o=s()(this.contentTypes);!(t=(a=o.next()).done);t=!0){var c=a.value;if("Product"===c.name)return c}}catch(t){e=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw n}}return null},cdaUrl:function(){return"https://cdn.contentful.com/spaces/"+this.space.sys.id},cpaUrl:function(){return"https://preview.contentful.com/spaces/"+this.space.sys.id},url_first_cda_call:function(){return this.cdaUrl+"/entries?access_token="+this.spaceTokens.cda},url_find_yourself_cpa:function(){return this.cpaUrl+"/entries?access_token="+this.spaceTokens.cpa+"&content_type="+this.product.sys.id+"&fields.productName%5Bmatch%5D="+this.user.firstName+"&select=fields&include=0"}}),props:["spaceId"],methods:c()({},n.i(i.c)(["SET_SPACE","SET_SPACE_TOKENS"]),n.i(i.d)(["LOAD_CONTENT_TYPES","LOAD_SPACE_TOKENS"])),created:function(){var t=!0,e=!1,n=void 0;try{for(var a,o=s()(this.spaces);!(t=(a=o.next()).done);t=!0){var c=a.value;c.sys.id===this.spaceId&&(this.SET_SPACE(c),this.LOAD_CONTENT_TYPES(c),this.LOAD_SPACE_TOKENS(c))}}catch(t){e=!0,n=t}finally{try{!t&&o.return&&o.return()}finally{if(e)throw n}}}}},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(25),s=n.n(a),o=n(4);e.default={name:"spacesList",computed:s()({},n.i(o.a)(["spaces"]))}},99:function(t,e){}},[60]);
//# sourceMappingURL=app.8454ea6765f4a3777203.js.map