webpackJsonp([1],{"0V3H":function(t,e){},"1/aY":function(t,e){},"9OuE":function(t,e){},DAvX:function(t,e,s){t.exports=s.p+"static/img/ab_story_bg.987f070.png"},EXrj:function(t,e){},EaW6:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"logo",on:{click:function(e){return t.$router.push("/")}}},[a("img",{staticClass:"whirligig",attrs:{src:s("DAvX"),alt:""}})]),t._v(" "),a("span",{staticClass:"title"},[t._v("Document")]),t._v(" "),a("nav",[a("router-link",{attrs:{to:{name:"components"}}},[t._v("组件")])],1)])},staticRenderFns:[]},i={name:"App",components:{oHeader:s("VU/8")({},n,!1,null,null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("o-header"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},r=s("VU/8")(i,c,!1,null,null,null).exports,o=s("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var d=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Component"}}},l,!1,function(t){s("j98m")},"data-v-9e58997c",null).exports,p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"component"},[s("div",{staticClass:"sidebar"},[s("div",{staticClass:"oo-menu"},[s("p",{staticClass:"oo-menu-title"},[s("router-link",{attrs:{to:{name:"components"}}},[t._v("Component "),s("span",[t._v("组件")])])],1),t._v(" "),s("input",{staticClass:"oo-ck",attrs:{type:"checkbox",id:"ck_general"}}),t._v(" "),s("p",{staticClass:"oo-menu-group"},[t._m(0),t._v(" "),s("ul",{staticClass:"oo-menu-item-list"},[s("li",{staticClass:"oo-menu-item"},[s("router-link",{attrs:{to:{name:"icon"}}},[t._v("Icon "),s("span",[t._v("图标")])])],1),t._v(" "),s("li",{staticClass:"oo-menu-item"},[s("router-link",{attrs:{to:{name:"button"}}},[t._v("Button "),s("span",[t._v("按钮")])])],1)])]),t._v(" "),s("input",{staticClass:"oo-ck",attrs:{type:"checkbox",id:"ck_customized"}}),t._v(" "),s("p",{staticClass:"oo-menu-group"},[t._m(1),t._v(" "),s("ul",{staticClass:"oo-menu-item-list"},[s("li",{staticClass:"oo-menu-item"},[s("router-link",{attrs:{to:{name:"transfer"}}},[t._v("Transfer "),s("span",[t._v("选择器")])])],1)])]),t._v(" "),s("input",{staticClass:"oo-ck",attrs:{type:"checkbox",id:"ck_other"}}),t._v(" "),s("p",{staticClass:"oo-menu-group"},[t._m(2),t._v(" "),s("ul",{staticClass:"oo-menu-item-list"},[s("li",{staticClass:"oo-menu-item"},[s("router-link",{attrs:{to:{name:"mask"}}},[t._v("Mask "),s("span",[t._v("蒙版")])])],1)])])])]),t._v(" "),s("router-view",{staticClass:"content"}),t._v(" "),s("div",{staticClass:"clear-box"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"oo-menu-group-title",attrs:{for:"ck_general"}},[e("div",[this._v("General")]),this._v(" "),e("span",{staticClass:"oo-arrow"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"oo-menu-group-title",attrs:{for:"ck_customized"}},[e("div",[this._v("Customized")]),this._v(" "),e("span",{staticClass:"oo-arrow"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"oo-menu-group-title",attrs:{for:"ck_other"}},[e("div",[this._v("Other")]),this._v(" "),e("span",{staticClass:"oo-arrow"})])}]};var u=s("VU/8")({},p,!1,function(t){s("EXrj")},null,null).exports,v=s("4DoD"),_=s.n(v);function h(t){var e=t.loaded,s=t.total,a=Math.floor(100*e/s);console.log(a)}function m(t){return console.error(t),!1}_.a.config.timeout=1e4,_.a.engine=function(){var t=new XMLHttpRequest;return t.upload.addEventListener("progress",h,!1),t};var f={delete:function(t,e,s){"[object Function]"===Object.prototype.toString.call(e)&&(s=e,e={}),_.a.request(t,e,{method:"delete"}).then(function(t){var e;try{e=JSON.parse(t.data)}catch(s){e=t.data}s(e)}).catch(function(t){s(m(t))})},get:function(t,e,s){"[object Function]"===Object.prototype.toString.call(e)&&(s=e,e={}),_.a.get(t,e).then(function(t){var e;try{e=JSON.parse(t.data)}catch(s){e=t.data}s(e)}).catch(function(t){s(m(t))})},post:function(t,e,s){"[object Function]"===Object.prototype.toString.call(e)&&(s=e,e={});var a=new FormData;for(var n in e)a.append(n,e[n]);_.a.post(t,a).then(function(t){var e;try{e=JSON.parse(t.data)}catch(s){e=t.data}s(e)}).catch(function(t){s(m(t))})}},b="https://easy-mock.com/mock/5ce21a974546ce6ad9bd3aca/",x={isAll:!1,depts:[{id:1,pid:0,name:"叶刚"},{id:2,pid:0,name:"熊桂英"},{id:3,pid:0,name:"贾刚"},{id:4,pid:1,name:"方明"},{id:5,pid:1,name:"贾艳"},{id:6,pid:1,name:"蒋霞"},{id:7,pid:0,name:"钱平"},{id:8,pid:0,name:"余勇"},{id:9,pid:1,name:"李秀兰"},{id:10,name:"郭桂英"},{id:11,pid:20,name:"邵秀兰"},{id:12,name:"杜秀兰"},{id:13,pid:20,name:"贾勇"},{id:14,pid:4,name:"雷艳"},{id:15,pid:14,name:"蔡霞"},{id:16,pid:4,name:"戴强"},{id:17,name:"林刚"},{id:18,pid:20,name:"方洋"},{id:19,pid:14,name:"江娟"},{id:20,pid:14,name:"卢超"},{id:21,pid:20,name:"苏勇"}],dutys:[{id:1,name:"徐秀兰",depts:[{id:1,name:"梁丽",tid:"Perez"},{id:2,name:"王明",tid:"Wilson"},{id:3,name:"丁杰",tid:"Perez"}]},{id:2,name:"石强",depts:[{id:1,name:"潘丽",tid:"Lee"},{id:2,name:"叶娜",tid:"Thompson"},{id:3,name:"文霞",tid:"White"}]},{id:3,name:"于芳",depts:[{id:1,name:"于秀英",tid:"Lee"},{id:2,name:"韩涛",tid:"Garcia"},{id:3,name:"夏桂英",tid:"Hall"},{id:4,name:"雷秀兰",tid:"Robinson"},{id:5,name:"戴艳",tid:"Wilson"},{id:6,name:"孙涛",tid:"Young"},{id:7,name:"孔杰",tid:"Martinez"},{id:8,name:"尹磊",tid:"Robinson"},{id:9,name:"陈磊",tid:"Rodriguez"}]},{id:4,name:"范芳",depts:[]}],groups:[{id:1,name:"范桂英",users:[{id:1,name:"张三"},{id:2,name:"赵四"},{id:3,name:"王五"},{id:4,name:"王雨"}]},{id:2,name:"叶杰",users:[{id:1,name:"张三"},{id:2,name:"赵四"},{id:4,name:"王雨"}]}],users:[{id:1,name:"张三"},{id:2,name:"赵四"},{id:3,name:"王五"}],display:{depts:!0,dutys:!0,groups:!0,users:!0}},y={data:function(){return{testData:{isAll:!1,depts:[],dutys:[],groups:[],users:[]},value:{depts:[{id:5,name:"陈杰"}],dutys:[{id:1,name:"邵秀兰",depts:[{id:2,name:"熊秀兰",tid:"Jones"}]},{id:2,name:"范涛",depts:[{id:1,name:"赵芳",tid:"Williams"},{id:2,name:"邱强",tid:"Walker"},{id:3,name:"石娟",tid:"Moore"}]},{id:3,name:"黄军",depts:[{id:3,name:"贺涛",tid:"Harris"}]}],users:[{id:1,name:"张三"},{id:2,name:"赵四"},{id:3,name:"王五"},{id:6,name:"尼古拉斯"}],display:{depts:!0,dutys:!0,groups:!0,users:!0}},testValue:null,disablesearch:!1,disabled:!1,html:'\x3c!-- ref: 自定义组件名称 可使用[this.$refs.名称.Value]获取选中的数据项(this.$refs.transfer.Value) --\x3e\n<xc-transfer ref="transfer" @search="search" @follow="follow" @change="change"\n             :data="testData" :value="value" :disabled="disabled" :disableadd="disablesearch" :size="[300, 400]">\n  \x3c!-- 标签内的内容会被添加到两个列表框之间,可以用来添加这样的箭头图标 --\x3e\n  <svg class="icon-arrow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32">\n    <path d="M512 512m-460.8 0a460.8 460.8 0 1 0 921.6 0 460.8 460.8 0 1 0-921.6 0Z" fill="#416b41"></path>\n    <path d="M677.888 584.3968L460.8 801.5872l-72.192-72.3968L605.696 512 388.608 294.7584 460.8 222.3616l289.792 289.5872z" fill="#FFFFFF"></path>\n  </svg>\n</xc-transfer>',ck1:!0,data1:"{}",data2:"{}",doc:[{property:"data",description:"选择项数据,格式参考mock",type:"Object",default:""},{property:"value",description:"默认选中项",type:"Object",default:""},{property:"disabled",description:"是否禁用",type:"Boolean",default:"false"},{property:"disableadd",description:"是否禁用搜索",type:"Boolean",default:"false"},{property:"size",description:"单个窗体的宽高值(不能小于默认值)",type:"Array",default:"[240, 100]"}],eventsDoc:[{eventName:"search",description:"搜索事件,回调函数参数格式参考mock",callbackParamet:"String: 关键字, callback: 回调函数"},{eventName:"follow",description:"关注/取关事件(设置常用联系人)",callbackParamet:"Object: {id, name, follow}, callback: 回调函数"},{eventName:"change",description:"选择项变化时",callbackParamet:"Object: 已选中的数据项"}]}},methods:{search:function(t,e){f.get(b+"cms-rest/manager/search",{name:t},e)},follow:function(t,e){f.get(b+"cms-rest/manager/follow",t,e)},change:function(){this.getValue()},getValue:function(){this.testValue=this.$refs.transfer.Value}},mounted:function(){this.testData=x}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"transfer-view"},[t._m(0),t._v(" "),s("p",[t._v("高度定制组件。")]),t._v(" "),s("div",{staticClass:"preview clearfix"},[s("div",{staticClass:"control"},[s("xc-button",{attrs:{type:"info"},on:{click:function(e){t.disabled=!t.disabled}}},[s("span",{domProps:{textContent:t._s(t.disabled?"取消":"禁用")}})]),t._v(" "),s("xc-button",{attrs:{type:"info"},on:{click:function(e){t.disablesearch=!t.disablesearch}}},[s("span",{domProps:{textContent:t._s(t.disablesearch?"启用搜索":"禁用搜索")}})])],1),t._v(" "),s("xc-transfer",{ref:"transfer",attrs:{data:t.testData,value:t.value,disabled:t.disabled,disableadd:t.disablesearch,size:[300,400]},on:{search:t.search,follow:t.follow,change:t.change}},[s("svg",{staticClass:"icon-arrow",attrs:{t:"1563357596999",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4012",width:"32",height:"32"}},[s("path",{attrs:{d:"M512 512m-460.8 0a460.8 460.8 0 1 0 921.6 0 460.8 460.8 0 1 0-921.6 0Z",fill:"#416b41","p-id":"4013"}}),s("path",{attrs:{d:"M677.888 584.3968L460.8 801.5872l-72.192-72.3968L605.696 512 388.608 294.7584 460.8 222.3616l289.792 289.5872z",fill:"#FFFFFF","p-id":"4014"}})])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"code-wrapper clearfix"},[s("input",{staticClass:"kakushi code-control-ck",attrs:{type:"checkbox",id:"code_transfer",checked:""}}),t._v(" "),s("div",{staticClass:"code-html full"},[s("p",{staticClass:"code-head vue"},[s("xc-icon",{attrs:{type:"vue"}}),t._v(" "),t._m(1)],1),t._v(" "),s("xc-code",{attrs:{lang:"html",code:t.html,line:"13"}})],1)])],1),t._v(" "),t._m(2),t._v(" "),s("xc-doc",{attrs:{list:t.doc}}),t._v(" "),t._m(3),t._v(" "),s("xc-doc",{attrs:{list:t.eventsDoc,type:"event"}}),t._v(" "),s("div",{staticClass:"data-view"},[s("div",{staticClass:"code-wrapper clearfix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ck1,expression:"ck1"}],staticClass:"kakushi code-control-ck",attrs:{type:"checkbox",id:"code_transfer_data1"},domProps:{checked:Array.isArray(t.ck1)?t._i(t.ck1,null)>-1:t.ck1},on:{change:function(e){var s=t.ck1,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.ck1=s.concat([null])):i>-1&&(t.ck1=s.slice(0,i).concat(s.slice(i+1)))}else t.ck1=n}}}),t._v(" "),s("div",{staticClass:"code-json"},[s("p",{staticClass:"code-head json"},[s("xc-icon",{attrs:{type:"json"}}),t._v(" "),t._m(4)],1),t._v(" "),s("xc-code",{attrs:{lang:"json",code:t.data1,line:"10"}})],1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.ck1,expression:"ck1"}],staticClass:"kakushi code-control-ck",attrs:{type:"checkbox",id:"code_transfer_data2"},domProps:{checked:Array.isArray(t.ck1)?t._i(t.ck1,null)>-1:t.ck1},on:{change:function(e){var s=t.ck1,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.ck1=s.concat([null])):i>-1&&(t.ck1=s.slice(0,i).concat(s.slice(i+1)))}else t.ck1=n}}}),t._v(" "),s("div",{staticClass:"code-json"},[s("p",{staticClass:"code-head json"},[s("xc-icon",{attrs:{type:"json"}}),t._v(" "),t._m(5)],1),t._v(" "),s("xc-code",{attrs:{lang:"json",code:t.data2,line:"10"}})],1)])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",[this._v("Transfer")]),this._v(" "),e("span",{staticClass:"chinese"},[this._v("基于穿梭框的权限选择器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"code-control",attrs:{for:"code_transfer"}},[this._v("<"),e("span",[this._v("/")]),this._v(">")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",[this._v("Attributes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",[this._v("Events")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"code-control",attrs:{for:"code_transfer_data1"}},[this._v("<"),e("span",[this._v("/")]),this._v(">")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"code-control",attrs:{for:"code_transfer_data2"}},[this._v("<"),e("span",[this._v("/")]),this._v(">")])}]};var k=s("VU/8")(y,g,!1,function(t){s("0V3H")},null,null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"icon"},[t._m(0),t._v(" "),s("p",[t._v("常用?的图标集合.")]),t._v(" "),s("p",{staticClass:"tip"},[t._v("还在增减中,还不建议使用.")]),t._v(" "),s("div",{staticClass:"preview clearfix"},[s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"pic"}}),t._v(" "),s("span",[t._v("pic")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"del"}}),t._v(" "),s("span",[t._v("del")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"txt"}}),t._v(" "),s("span",[t._v("txt")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"ok"}}),t._v(" "),s("span",[t._v("ok")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"warn"}}),t._v(" "),s("span",[t._v("warn")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"error"}}),t._v(" "),s("span",[t._v("error")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"bar"}}),t._v(" "),s("span",[t._v("bar")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"plus"}}),t._v(" "),s("span",[t._v("plus")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"bilibili"}}),t._v(" "),s("span",[t._v("bilibili")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"github"}}),t._v(" "),s("span",[t._v("github")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"trash"}}),t._v(" "),s("span",[t._v("trash")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"copy"}}),t._v(" "),s("span",[t._v("copy")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"html",colors:["#e54d14"]}}),t._v(" "),s("span",[t._v("html")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"sass"}}),t._v(" "),s("span",[t._v("sass")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"json"}}),t._v(" "),s("span",[t._v("json")])],1),t._v(" "),s("div",{staticClass:"item"},[s("xc-icon",{attrs:{type:"vue"}}),t._v(" "),s("span",[t._v("vue")])],1),t._v(" "),s("br")]),t._v(" "),t._m(1),t._v(" "),s("xc-doc",{attrs:{list:t.doc}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",[this._v("Icon")]),this._v(" "),e("span",{staticClass:"chinese"},[this._v("图标")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",[this._v("Attributes")])])}]};var w=s("VU/8")({data:function(){return{list:["pic","del","txt","ok","warn","error","bar","plus","bilibili","github","trash","copy","html","sass","json","vue"],doc:[{property:"type",description:"指定使用内置图标的代号(优先级低)",type:"String",default:""},{property:"colors",description:"图标颜色(高优先级属性,用于多色图标和修改图标默认颜色)",type:"Array",default:"[]"},{property:"path",description:"图标轨迹",type:"Array",default:""},{property:"view",description:"viewBox",type:"String",default:"0 0 1024 1024"}]}},methods:{}},C,!1,function(t){s("1/aY")},null,null).exports,E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button"},[t._m(0),t._v(" "),s("p",[t._v("基础的操作按钮,只监听了点击事件,其它事件需使用.native来监听或自行添加.")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"preview clearfix"},[s("p",[t._v("外观类型.")]),t._v(" "),s("div",{staticClass:"clearfix"},[s("xc-button",[t._v("Default")]),t._v(" "),s("xc-button",{attrs:{type:"dashed"}},[t._v("Dashed")]),t._v(" "),s("xc-button",{attrs:{type:"dotted"}},[t._v("Dotted")]),t._v(" "),s("xc-button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),s("xc-button",{attrs:{type:"info"}},[t._v("Info")]),t._v(" "),s("xc-button",{attrs:{type:"warning"}},[t._v("Warning")]),t._v(" "),s("xc-button",{attrs:{type:"error"}},[t._v("Error")]),t._v(" "),s("xc-button",{attrs:{type:"success"}},[t._v("Success")])],1),t._v(" "),s("p",[t._v("禁用状态.")]),t._v(" "),s("div",{staticClass:"clearfix"},[s("xc-button",{attrs:{disabled:!0}},[t._v("Default")]),t._v(" "),s("xc-button",{attrs:{disabled:!0,type:"dashed"}},[t._v("Dashed")]),t._v(" "),s("xc-button",{attrs:{disabled:!0,type:"dotted"}},[t._v("Dotted")]),t._v(" "),s("xc-button",{attrs:{disabled:!0,type:"primary"}},[t._v("Primary")]),t._v(" "),s("xc-button",{attrs:{disabled:!0,type:"info"}},[t._v("Info")]),t._v(" "),s("xc-button",{attrs:{disabled:!0,type:"warning"}},[t._v("Warning")]),t._v(" "),s("xc-button",{attrs:{disabled:!0,type:"error"}},[t._v("Error")]),t._v(" "),s("xc-button",{attrs:{disabled:!0,type:"success"}},[t._v("Success")])],1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"code-wrapper clearfix"},[s("input",{staticClass:"kakushi code-control-ck",attrs:{type:"checkbox",id:"code_button1",checked:""}}),t._v(" "),s("div",{staticClass:"code-html full"},[s("p",{staticClass:"code-head"},[s("xc-icon",{attrs:{type:"vue"}}),t._v(" "),t._m(2)],1),t._v(" "),s("xc-code",{attrs:{lang:"html",code:t.html1,line:"28"}})],1)])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"preview clearfix"},[s("p",[t._v("最小宽度和大小.")]),t._v(" "),s("div",{staticClass:"clearfix"},[s("xc-button",{attrs:{type:"info",width:"4em"}},[t._v("4em")]),t._v(" "),s("xc-button",{attrs:{type:"info",width:"4em"}},[t._v("4em (文字过长不会换行)")]),t._v(" "),s("xc-button",{attrs:{type:"info",width:"100px"}},[t._v("100px")]),t._v(" "),s("xc-button",{attrs:{type:"success",size:"12px"}},[t._v("font-size: 12px")]),t._v(" "),s("xc-button",{attrs:{type:"success",size:"16px"}},[t._v("font-size: 16px")]),t._v(" "),s("xc-button",{attrs:{type:"success",size:"20px"}},[t._v("font-size: 20px")])],1),t._v(" "),s("p",[t._v("边框形状.")]),t._v(" "),s("div",{staticClass:"clearfix"},[s("xc-button",{attrs:{type:"info"}},[t._v("default")]),t._v(" "),s("xc-button",{attrs:{shape:"rectangle",type:"info"}},[t._v("Rectangle")]),t._v(" "),s("xc-button",{attrs:{shape:"circle"}},[s("xc-icon",{attrs:{type:"github"}})],1)],1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"code-wrapper clearfix"},[s("input",{staticClass:"kakushi code-control-ck",attrs:{type:"checkbox",id:"code_button2",checked:""}}),t._v(" "),s("div",{staticClass:"code-html full"},[s("p",{staticClass:"code-head vue"},[s("xc-icon",{attrs:{type:"vue"}}),t._v(" "),t._m(3)],1),t._v(" "),s("xc-code",{attrs:{lang:"html",code:t.html2,line:"20"}})],1)])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"preview clearfix"},[s("p",[t._v("点击动画.")]),t._v(" "),s("div",{staticClass:"clearfix"},[s("xc-button",{attrs:{effect:"spread",type:"dashed"},on:{click:function(e){return t.message("click")}}},[t._v("Spread")]),t._v(" "),s("xc-button",{attrs:{effect:"spread",type:"info"},on:{click:function(e){return t.message("click")}}},[t._v("Spread")]),t._v(" "),s("xc-button",{attrs:{effect:"spread",type:"error"},on:{click:function(e){return t.message("click")}}},[t._v("Spread")])],1),t._v(" "),s("p",[t._v("loading状态.")]),t._v(" "),s("div",{staticClass:"clearfix"},[s("xc-button",{attrs:{effect:"spread",loading:!0},on:{click:function(e){return t.message("click")}}},[t._v("loading状态下")]),t._v(" "),s("xc-button",{attrs:{effect:"spread",type:"info",loading:!0},on:{click:function(e){return t.message("click")}}},[t._v("不会触发")]),t._v(" "),s("xc-button",{attrs:{effect:"spread",type:"warning",loading:!1},on:{click:function(e){return t.message("click")}}},[t._v("click事件")])],1),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"code-wrapper clearfix"},[s("input",{staticClass:"kakushi code-control-ck",attrs:{type:"checkbox",id:"code_button3",checked:""}}),t._v(" "),s("div",{staticClass:"code-html full"},[s("p",{staticClass:"code-head vue"},[s("xc-icon",{attrs:{type:"vue"}}),t._v(" "),t._m(4)],1),t._v(" "),s("xc-code",{attrs:{lang:"html",code:t.html3,line:"17"}})],1)])]),t._v(" "),t._m(5),t._v(" "),s("xc-doc",{attrs:{list:t.doc}}),t._v(" "),t._m(6),t._v(" "),s("xc-doc",{attrs:{list:t.eventsDoc,type:"event"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",[this._v("Button")]),this._v(" "),e("span",{staticClass:"chinese"},[this._v("按钮")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"tip"},[this._v("动画与disabled的样式需浏览器对 "),e("a",{staticClass:"keyword",attrs:{href:"https://caniuse.com/#search=filter",target:"blank"}},[this._v("filter")]),this._v(" 的支持.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"code-control",attrs:{for:"code_button1"}},[this._v("<"),e("span",[this._v("/")]),this._v(">")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"code-control",attrs:{for:"code_button2"}},[this._v("<"),e("span",[this._v("/")]),this._v(">")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"code-control",attrs:{for:"code_button3"}},[this._v("<"),e("span",[this._v("/")]),this._v(">")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",[this._v("Attributes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",[this._v("Events")])])}]};var $=s("VU/8")({data:function(){return{baseDisabled:!1,loading:!1,doc:[{property:"type",description:"情景色: primary/info/success/warning/error; 边框类型: dashed/dotted 多个时优先级递增",type:"String",default:""},{property:"disabled",description:"是否禁用,禁用后会变成黑白模式同时鼠标hover时会有禁用样式, 屏蔽事件",type:"Boolean",default:"false"},{property:"width",description:"设定按钮最小宽度,支持auto/inherit以及px、em、rem等单位的数值",type:"Length",default:"auto"},{property:"size",description:"设定按钮文字字号,支持inherit、px、em、rem等单位的数值",type:"Length",default:"inherit"},{property:"effect",description:"附加动画效果, spread: 波纹扩散",type:"String",default:""},{property:"shape",description:"形状,可能的值: circle/rectangle, circle需要与icon搭配使用来制作图标按钮",type:"String",default:""},{property:"for",description:"外壳使用的label能直接继承for属性",type:"String",default:""},{property:"loading",description:"加载状态, 添加loading icon 如已有icon属性生成的图标会替换掉原有图标, 同disabled一样会屏蔽事件",type:"Boolean",default:"false"}],eventsDoc:[{eventName:"click",description:"点击事件的回调",callbackParamet:""}],html1:'<p>外观类型.</p>\n<div class="clearfix">\n  <xc-button>Default</xc-button>\n  <xc-button type="dashed">Dashed</xc-button>\n  <xc-button type="dotted">Dotted</xc-button>\n  <xc-button type="primary">Primary</xc-button>\n  <xc-button type="info">Info</xc-button>\n  <xc-button type="warning">Warning</xc-button>\n  <xc-button type="error">Error</xc-button>\n  <xc-button type="success">Success</xc-button>\n</div>\n<p>禁用状态.</p>\n<div class="clearfix">\n  <xc-button :disabled="true">Default</xc-button>\n  <xc-button :disabled="true" type="dashed">Dashed</xc-button>\n  <xc-button :disabled="true" type="dotted">Dotted</xc-button>\n  <xc-button :disabled="true" type="primary">Primary</xc-button>\n  <xc-button :disabled="true" type="info">Info</xc-button>\n  <xc-button :disabled="true" type="warning">Warning</xc-button>\n  <xc-button :disabled="true" type="error">Error</xc-button>\n  <xc-button :disabled="true" type="success">Success</xc-button>\n</div>',html2:'<p>最小宽度和大小.</p>\n<div class="clearfix">\n  <xc-button type="info" width="4em">4em</xc-button>\n  <xc-button type="info" width="4em">4em (文字过长不会换行)</xc-button>\n  <xc-button type="info" width="100px">100px</xc-button>\n  <xc-button type="success" size="12px">font-size: 12px</xc-button>\n  <xc-button type="success" size="16px">font-size: 16px</xc-button>\n  <xc-button type="success" size="20px">font-size: 20px</xc-button>\n</div>\n<p>边框形状.</p>\n<div class="clearfix">\n  <xc-button type="info">default</xc-button>\n  <xc-button shape="rectangle" type="info">Rectangle</xc-button>\n  <xc-button shape="circle"><xc-icon type="github"></xc-icon></xc-button>\n</div>',html3:'<p>点击动画.</p>\n<div class="clearfix">\n  <xc-button effect="spread" type="dashed" @click="message(\'click\')">Spread</xc-button>\n  <xc-button effect="spread" type="info" @click="message(\'click\')">Spread</xc-button>\n  <xc-button effect="spread" type="error" @click="message(\'click\')">Spread</xc-button>\n</div>\n<p>loading状态.</p>\n<div class="clearfix">\n  <xc-button effect="spread" :loading="true" @click="message(\'click\')">loading状态下</xc-button>\n  <xc-button effect="spread" type="info" :loading="true" @click="message(\'click\')">不会触发</xc-button>\n  <xc-button effect="spread" type="warning" :loading="false" @click="message(\'click\')">click事件</xc-button>\n</div>'}},methods:{message:function(t){this.$msg(t)}}},E,!1,function(t){s("NTOC")},null,null).exports,D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"font-mask"},[t._m(0),t._v(" "),s("p",[t._v("利用蒙版制作文字镂空效果.")]),t._v(" "),s("p",[s("span",{staticClass:"demo"},[s("xc-mask",{attrs:{text:"Mask",color:"#ffffff",h:70,scale:1.4,opacity:[70,20]}})],1)]),t._v(" "),t._m(1),t._v(" "),s("xc-doc",{attrs:{list:t.doc}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",[e("span",[this._v("Mask")]),this._v(" "),e("span",{staticClass:"chinese"},[this._v("蒙版")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[e("span",[this._v("Attributes")])])}]};var j=s("VU/8")({data:function(){return{doc:[{property:"text",description:"显示的文字",type:"String",default:""},{property:"color",description:"蒙版层颜色,合法的颜色值都可以(未设置转换,传入的就是最终使用的颜色值)",type:"Color",default:"#d3d3d3"},{property:"h",description:"显示文字的区域高度上的占比(0-100)",type:"Number",default:"70"},{property:"fz",description:"不设置时根据当前实际显示区域自动调整字体大小,可以传值设定成固定字体大小(需附带单位)",type:"String",default:"auto"},{property:"scale",description:"文字的缩放,只在未设置 fz 时生效,在自适应的字体大小上添加额外的缩放比例调整实际字体大小",type:"Number",default:"1"},{property:"opacity",description:"蒙版的透明度设置,可以单设中间部分蒙版的不透明度,分别为中间与上下的不透明度",type:"Array / Number",default:"[80, 60]"}]}},methods:{},mounted:function(){}},D,!1,function(t){s("EaW6")},null,null).exports;a.a.use(o.a);var z=new o.a({routes:[{path:"/",name:"HelloWorld",component:d},{path:"/components",component:u,children:[{path:"",name:"components",component:d},{path:"transfer",name:"transfer",component:k},{path:"icon",name:"icon",component:w},{path:"button",name:"button",component:$},{path:"mask",name:"mask",component:j}]},{path:"*",redirect:"/"}]}),F=s("pce6"),S=s.n(F),A=(s("9OuE"),s("xnyV"),s("tx0o"),s("V8mf")),V=s.n(A),P={props:["lang","code","line"],watch:{code:function(){var t=this;this.$nextTick(function(){V.a.highlightBlock(t.$refs.code)})}},mounted:function(){var t=this;this.$nextTick(function(){V.a.highlightBlock(t.$refs.code)})}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{style:{height:this.line+"em"}},[e("code",{ref:"code",class:this.lang,domProps:{textContent:this._s(this.code)}})])},staticRenderFns:[]},O=s("VU/8")(P,N,!1,null,null,null).exports,R={props:{list:null,type:{type:String,default:"doc"}},components:{oTd:{render:function(t){var e=["String","Boolean","Length","false","true","auto","disabled","Object","Integer","Function","Array","Color","Number","placeholder","base","class","value","input","single"],s=this.value;return e.forEach(function(t){s=s.replace(new RegExp(t,"g"),"ø"+t+"ø")}),s=s.split("ø").map(function(s){return e.some(function(t){return t==s})?t("span",{class:"code"},s):s}),t("td",s)},props:["value"]}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"o-doc"},[s("thead",["doc"===t.type?s("tr",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]):t._e(),t._v(" "),"event"===t.type?s("tr",[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)]):t._e()]),t._v(" "),"doc"===t.type?s("tbody",t._l(t.list,function(e){return s("tr",{key:e.property},[s("td",{domProps:{innerHTML:t._s(e.property)}}),t._v(" "),s("o-td",{tag:"td",attrs:{value:e.description}}),t._v(" "),s("o-td",{tag:"td",attrs:{value:e.type}}),t._v(" "),s("o-td",{tag:"td",attrs:{value:e.default||"—"}})],1)}),0):t._e(),t._v(" "),"event"===t.type?s("tbody",t._l(t.list,function(e){return s("tr",{key:e.eventName},[s("td",{domProps:{innerHTML:t._s(e.eventName)}}),t._v(" "),s("o-td",{tag:"td",attrs:{value:e.description}}),t._v(" "),s("o-td",{tag:"td",attrs:{value:e.callbackParamet||"—"}})],1)}),0):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("Property "),e("span",{staticClass:"cn"},[this._v("属性")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("Description "),e("span",{staticClass:"cn"},[this._v("说明")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("Type "),e("span",{staticClass:"cn"},[this._v("类型")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("Default "),e("span",{staticClass:"cn"},[this._v("默认值")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("EventName "),e("span",{staticClass:"cn"},[this._v("事件名称")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("Description "),e("span",{staticClass:"cn"},[this._v("说明")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[this._v("CallbackParamet "),e("span",{staticClass:"cn"},[this._v("回调参数")])])}]};var W=s("VU/8")(R,M,!1,function(t){s("Z9Zp")},null,null).exports,L={install:function(t){t.component("xcCode",O),t.component("xcDoc",W)}};a.a.use(S.a),a.a.use(L),a.a.config.productionTip=!1,new a.a({el:"#app",router:z,components:{App:r},template:"<App/>"})},NTOC:function(t,e){},Z9Zp:function(t,e){},j98m:function(t,e){},tx0o:function(t,e){},xnyV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.43f2f0adf5e7c111b0f2.js.map