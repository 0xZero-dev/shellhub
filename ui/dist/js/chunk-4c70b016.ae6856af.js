(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c70b016"],{"2a7f":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var i=s("71d9"),n=s("80d2");const a=Object(n["h"])("v-toolbar__title"),o=Object(n["h"])("v-toolbar__items");i["a"]},"326d":function(t,e,s){"use strict";var i=s("e449");e["a"]=i["a"]},"3a2f":function(t,e,s){"use strict";s("9734");var i=s("4ad4"),n=s("a9ad"),a=s("16b7"),o=s("b848"),r=s("75eb"),c=s("f573"),l=s("f2e7"),h=s("80d2"),u=s("d9bd"),d=s("58df");e["a"]=Object(d["a"])(n["a"],a["a"],o["a"],r["a"],c["a"],l["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,s=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?t.offsetLeft:t.left;let n=0;return this.top||this.bottom||s?n=i+t.width/2-e.width/2:(this.left||this.right)&&(n=i+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),this.calcXOverflow(n,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,s=!1!==this.attach?t.offsetTop:t.top;let i=0;return this.top||this.bottom?i=s+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=s+t.height/2-e.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),this.calcYOverflow(i+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(h["q"])(this,"activator",!0)&&Object(u["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=i["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===h["u"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"3a39f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ListSession")],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fragment",[s("div",{staticClass:"d-flex pa-0 align-center"},[s("h1",[t._v("Sessions")]),s("v-spacer"),s("v-spacer")],1),s("v-card",{staticClass:"mt-2"},[s("v-app-bar",{attrs:{flat:"",color:"transparent"}},[s("v-toolbar-title")],1),s("v-divider"),s("v-card-text",{staticClass:"pa-0"},[s("v-data-table",{attrs:{headers:t.headers,items:t.listSessions,"item-key":"uid","sort-by":["started_at"],"sort-desc":[!0],"items-per-page":10,"footer-props":{"items-per-page-options":[10,25,50,100]},"server-items-length":this.numberSessions,options:t.pagination,"disable-sort":!0},on:{"update:options":function(e){t.pagination=e}},scopedSlots:t._u([{key:"item.active",fn:function(e){var i=e.item;return[i.active?s("v-icon",{attrs:{color:"success"}},[t._v("check_circle")]):s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[s("v-icon",t._g({},i),[t._v("check_circle")])]}}],null,!0)},[s("span",[t._v("active "+t._s(t._f("moment")(i.last_seen,"from","now")))])])]}},{key:"item.device",fn:function(e){var i=e.item;return[s("router-link",{attrs:{to:{name:"detailsDevice",params:{id:i.device.uid}}}},[t._v(" "+t._s(i.device.name)+" ")])]}},{key:"item.username",fn:function(e){var i=e.item;return[i.authenticated?t._e():s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(t){t.on}}],null,!0)},[s("span",[t._v("Unauthorized")])]),t._v(" "+t._s(i.username)+" ")]}},{key:"item.authenticated",fn:function(e){var i=e.item;return[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i.authenticated?s("v-icon",t._g({attrs:{color:i.active?"success":"",size:""}},n),[t._v("mdi-shield-check")]):s("v-icon",t._g({attrs:{color:"error",size:""}},n),[t._v("mdi-shield-alert")])]}}],null,!0)},[i.authenticated?s("span",[t._v("User has been authenticated")]):s("span",[t._v("User has not been authenticated")])])]}},{key:"item.ip_address",fn:function(e){var i=e.item;return[s("code",[t._v(t._s(i.ip_address))])]}},{key:"item.started",fn:function(e){var s=e.item;return[t._v(" "+t._s(t._f("moment")(s.started_at,"ddd, MMM Do YY, h:mm:ss a"))+" ")]}},{key:"item.last_seen",fn:function(e){var s=e.item;return[t._v(" "+t._s(t._f("moment")(s.last_seen,"ddd, MMM Do YY, h:mm:ss a"))+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[s("v-icon",{staticClass:"icons",on:{click:function(e){return t.detailsSession(i)}}},[t._v(" info ")]),i.active?s("v-icon",{staticClass:"icons ml-1",on:{click:function(e){return t.closeSession(i)}}},[t._v(" mdi-close-circle ")]):t._e()]}}])})],1),s("v-snackbar",{attrs:{timeout:3e3},model:{value:t.sessionSnack,callback:function(e){t.sessionSnack=e},expression:"sessionSnack"}},[t._v("Session closed")])],1)],1)},o=[],r=(s("96cf"),s("1da1")),c={name:"SessionList",data:function(){return{sessionSnack:!1,numberSessions:0,listSessions:[],data:[],pagination:{},headers:[{text:"Active",value:"active",align:"center"},{text:"Device",value:"device",align:"center"},{text:"Username",value:"username",align:"center"},{text:"Authenticated",value:"authenticated",align:"center"},{text:"IP Address",value:"ip_address",align:"center"},{text:"Started",value:"started",align:"center"},{text:"Last Seen",value:"last_seen",align:"center"},{text:"Actions",value:"actions",align:"center"}]}},watch:{pagination:{handler:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.pagination.itemsPerPage,i=t.pagination.page,t.data=[{per_page:s,page:i}],e.next=5,t.$store.dispatch("sessions/fetch",t.data[0]);case 5:t.listSessions=t.$store.getters["sessions/list"],t.numberSessions=t.$store.getters["sessions/getNumberSessions"];case 7:case"end":return e.stop()}}),e)})))()},deep:!0}},methods:{detailsSession:function(t){this.$router.push("/session/"+t.uid)},closeSession:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!confirm("Are you sure?",t)){s.next=6;break}return e.$store.dispatch("sessions/close",t),e.sessionSnack=!0,s.next=5,e.$store.dispatch("sessions/fetch");case 5:e.listSessions=e.$store.getters["sessions/list"];case 6:case"end":return s.stop()}}),s)})))()}}},l=c,h=s("2877"),u=s("6544"),d=s.n(u),v=s("40dc"),p=s("b0af"),f=s("99d9"),m=s("8fea"),g=s("ce7e"),_=s("132d"),b=s("2db4"),S=s("2fa4"),k=s("2a7f"),y=s("3a2f"),x=Object(h["a"])(l,a,o,!1,null,null,null),w=x.exports;d()(x,{VAppBar:v["a"],VCard:p["a"],VCardText:f["b"],VDataTable:m["a"],VDivider:g["a"],VIcon:_["a"],VSnackbar:b["a"],VSpacer:S["a"],VToolbarTitle:k["a"],VTooltip:y["a"]});var A={name:"Sessions",components:{ListSession:w}},C=A,T=Object(h["a"])(C,i,n,!1,null,null,null);e["default"]=T.exports},9734:function(t,e,s){},afdd:function(t,e,s){"use strict";var i=s("8336");e["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-4c70b016.ae6856af.js.map