webpackJsonp([33],{207:function(t,i,e){function n(t){e(641)}var a=e(0)(e(439),e(740),n,null,null);t.exports=a.exports},439:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{drawer:null,items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],mini:!1,right:null}}}},596:function(t,i,e){i=t.exports=e(127)(void 0),i.push([t.i,"#example-8 .card{background:#424242}",""])},641:function(t,i,e){var n=e(596);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(128)("663a3f1e",n,!0)},740:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",{attrs:{id:"example-8",dark:""}},[e("v-navigation-drawer",{attrs:{temporary:"","mini-variant":t.mini,dark:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list",{staticClass:"pa-0"},[t.mini?e("v-list-item",[e("v-list-tile",{nativeOn:{click:function(i){i.stopPropagation(),t.mini=!t.mini}}},[e("v-list-tile-action",[e("v-icon",{attrs:{light:""}},[t._v("chevron_right")])],1)],1)],1):t._e(),e("v-list-item",[e("v-list-tile",{attrs:{avatar:"",tag:"div"}},[e("v-list-tile-avatar",[e("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),e("v-list-tile-content",[e("v-list-tile-title",[t._v("John Leider")])],1),e("v-list-tile-action",[e("v-btn",{attrs:{icon:"",light:""},nativeOn:{click:function(i){i.stopPropagation(),t.mini=!t.mini}}},[e("v-icon",[t._v("chevron_left")])],1)],1)],1)],1)],1),e("v-list",{staticClass:"pt-0",attrs:{dense:""}},[e("v-divider",{attrs:{light:""}}),t._l(t.items,function(i){return e("v-list-item",{key:i},[e("v-list-tile",[e("v-list-tile-action",[e("v-icon",{attrs:{light:""}},[t._v(t._s(i.icon))])],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(i.title))])],1)],1)],1)})],2)],1),e("v-toolbar",{attrs:{fixed:"",light:""}},[e("v-toolbar-side-icon",{attrs:{light:""},nativeOn:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v("Toolbar")])],1),e("main",[e("v-container",{attrs:{fluid:""}},[e("v-card",{attrs:{height:"200px"}})],1)],1)],1)},staticRenderFns:[]}}});