(function(e,_){typeof exports=="object"&&typeof module<"u"?module.exports=_(require("vue"),require("../injectionKeys.ts")):typeof define=="function"&&define.amd?define(["vue","../injectionKeys.ts"],_):(e=typeof globalThis<"u"?globalThis:e||self,e.StreamsyncCustomComponentTemplates=_(e.vue,e.injectionKeys))})(this,function(e,_){"use strict";var o=(s=>(s.Text="Text",s.KeyValue="Key-Value",s.Color="Color",s.Shadow="Shadow",s.Number="Number",s.Object="Object",s.IdKey="Identifying Key",s.Width="Width",s.HAlign="Align (H)",s.VAlign="Align (V)",s.Padding="Padding",s))(o||{}),b=(s=>(s.General="General",s.Style="Style",s))(b||{}),z=(s=>(s.Text="Text",s.Textarea="Textarea",s))(z||{});const J=s=>(e.pushScopeId("data-v-c47a5383"),s=s(),e.popScopeId(),s),R={class:"BubbleMessage"},q=J(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),W={class:"message"},G={streamsync:{name:"Bubble Message",description:"Shows a message in the shape of a speech bubble.",category:"Content",fields:{text:{name:"Text",type:o.Text}},previewField:"text"}},Q=e.defineComponent({...G,__name:"BubbleMessage",setup(s){const n=e.inject(_.evaluatedFields);return(r,d)=>(e.openBlock(),e.createElementBlock("div",R,[q,e.createElementVNode("div",W,e.toDisplayString(e.unref(n).text.value),1)]))}}),st="",x=(s,n)=>{const r=s.__vccOpts||s;for(const[d,h]of n)r[d]=h;return r},X=x(Q,[["__scopeId","data-v-c47a5383"]]),j={name:"Accent",type:o.Color,category:b.Style,applyStyleVariable:!0},B={name:"Primary text",type:o.Color,category:b.Style,applyStyleVariable:!0},k={name:"Secondary text",type:o.Color,category:b.Style,applyStyleVariable:!0};o.Color,b.Style;const D={name:"Container background",type:o.Color,category:b.Style,applyStyleVariable:!0},F={name:"Container shadow",type:o.Shadow,category:b.Style,applyStyleVariable:!0},V={name:"Separator",type:o.Color,category:b.Style,applyStyleVariable:!0},$={name:"Button",type:o.Color,category:b.Style,applyStyleVariable:!0},A={name:"Button text",type:o.Color,category:b.Style,applyStyleVariable:!0},P={name:"Button shadow",type:o.Shadow,category:b.Style,applyStyleVariable:!0};o.Color,b.Style;const N={name:"Custom CSS classes",type:o.Text,category:b.Style,desc:"CSS classes, separated by spaces. You can define classes in custom stylesheets."};o.Width,b.Style;const Z={name:"Content alignment (H)",type:o.HAlign,default:"unset",category:b.Style};o.VAlign,b.Style;const K={name:"Padding",type:o.Padding,default:"0",category:b.Style},M=s=>(e.pushScopeId("data-v-026368bf"),s=s(),e.popScopeId(),s),ee=M(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),te={class:"message"},ne={class:"text"},ae=[M(()=>e.createElementVNode("i",{class:"ri-pushpin-line"},null,-1))],oe=[M(()=>e.createElementVNode("i",{class:"ri-flag-line"},null,-1))],se=`This documentation will show in the collapsible mini-docs feature embedded in Builder.
You _can_ use **markdown**.`,le=`
def handle_flag(state, payload):
	state["flagged_message_id"] = payload`,ce=`
def handle_pin(state, payload):
	state["pinned_message_id"] = payload`,re={streamsync:{name:"Bubble Message (Advanced)",description:"Shows a message in the shape of a speech bubble.",docs:se,category:"Content",fields:{messageId:{name:"Message id",desc:"Unique id to identify the message when generating events.",init:"a1",type:o.Text},text:{name:"Text",desc:"The message to be displayed.",default:"(Empty message)",type:o.Text,control:z.Textarea},orientation:{name:"Orientation",category:b.Style,type:o.Text,options:{left:"Pointing left",right:"Pointing right"}},bubbleColor:{name:"Bubble",default:"#CFEFF3",category:b.Style,type:o.Color,applyStyleVariable:!0},primaryTextColor:B,separatorColor:V,containerBackgroundColor:D,cssClasses:N},events:{"pin-message":{desc:"Emitted when the pin button is clicked.",stub:ce},"flag-message":{desc:"Emitted when the flag button is clicked.",stub:le}},previewField:"text"}},ie=e.defineComponent({...re,__name:"BubbleMessageAdvanced",setup(s){const n=e.ref(null),r=e.inject(_.evaluatedFields),d=e.computed(()=>r.messageId.value);function h(){const p=d.value,g=new CustomEvent("flag-message",{detail:{payload:p}});n.value.dispatchEvent(g)}function y(){const p=d.value,g=new CustomEvent("pin-message",{detail:{payload:p}});n.value.dispatchEvent(g)}return(p,g)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["BubbleMessage",{rightOriented:e.unref(r).orientation.value=="right"}]),ref_key:"rootEl",ref:n},[ee,e.createElementVNode("div",te,[e.createElementVNode("div",ne,e.toDisplayString(e.unref(r).text.value),1),e.createElementVNode("div",{class:"actions"},[e.createElementVNode("div",{class:"action",onClick:y},ae),e.createElementVNode("div",{class:"action",onClick:h},oe)])])],2))}}),it="",de=x(ie,[["__scopeId","data-v-026368bf"]]),ue={key:0},pe={streamsync:{name:"Section",description:"A container component that divides the layout into sections, with an optional title.",category:"Layout",allowedChildrenTypes:["*"],fields:{title:{name:"Title",init:"Section Title",desc:"Leave blank to hide.",type:o.Text},accentColor:j,primaryTextColor:B,secondaryTextColor:k,containerBackgroundColor:D,containerShadow:F,separatorColor:V,buttonColor:$,buttonTextColor:A,buttonShadow:P,snapMode:{name:"Snap mode",type:o.Text,options:{no:"No",yes:"Yes"},default:"no",init:"no",category:b.Style,desc:"Use as much space as possible without altering the size of the container."},cssClasses:N},previewField:"title"}},me=e.defineComponent({...pe,__name:"CustomCoreSection",setup(s){const n=e.inject(_.core),r=e.inject(_.instancePath);function d(a){const t=a.closest(".CoreTab");if(t==null)return null;var c=n.getComponentById(t.dataset.streamsyncId),f=c.content.customId;return f}function h(a){const t=a.target.closest("[data-streamsync-id]");var c=n.getComponentById(t.dataset.streamsyncId),f=c.content.customId,m=d(t);return{parentComponentId:m,targetComponentId:f}}function y(a,t){const c=a.target.nodeName;return t.includes(c)}function p(a){const t=a.target,c=t.closest("[data-streamsync-id]");var f=n.getComponentById(c.dataset.streamsyncId);const m=f.type.includes("tab"),l=t.nodeName=="BUTTON";return m&&l}function g(a){return a.target.attributes["aria-disabled"].value=="true"}function S(a){if(p(a)||(a.stopPropagation(),!y(a,["BUTTON"]))||g(a))return;const{parentComponentId:t,targetComponentId:c}=h(a),f=t+"_"+c,m=new CustomEvent("click",{detail:{payload:{id:f,tab:t,control:c}}});n.forwardEvent(m,r,!0)}function u(a){if(console.log("captureChange: "),console.log(a),a.stopPropagation(),!y(a,["SELECT","INPUT"]))return;const{parentComponentId:t,targetComponentId:c}=h(a),f=t+"_"+c,m=a.target.value,l=new CustomEvent("change",{detail:{payload:{id:f,tab:t,control:c,value:m}}});n.forwardEvent(l,r,!0)}const i=e.inject(_.evaluatedFields);return(a,t)=>(e.openBlock(),e.createElementBlock("section",{class:e.normalizeClass(["CoreSection",{snapMode:e.unref(i).snapMode.value=="yes"}]),ref:"rootEl",onClickCapture:S},[e.unref(i).title.value?(e.openBlock(),e.createElementBlock("h2",ue,e.toDisplayString(e.unref(i).title.value)+" CUSTOM SECTION",1)):e.createCommentVNode("",!0),e.createElementVNode("div",{"data-streamsync-container":"",onInputCapture:t[0]||(t[0]=(...c)=>a.captureInput&&a.captureInput(...c)),onChangeCapture:u},[e.renderSlot(a.$slots,"default",{},void 0,!0)],32)],34))}}),ut="",fe=x(me,[["__scopeId","data-v-885b1a7a"]]);function _e(s){const n={ctrlKey:s.ctrlKey,shiftKey:s.shiftKey,metaKey:s.metaKey};return new CustomEvent("ss-click",{detail:{payload:n}})}const ye=["aria-disabled"],ge={streamsync:{name:"Button",description:"A standalone button component that can be linked to a click event handler.",docs:"\nStreamsync uses the library RemixIcon to display icons. To include an icon, check remixicon.com, find the icon's id (such as `arrow-up`) and it to your _Button_.\n",category:"Other",events:{"ss-click":{desc:"Capture single clicks.",stub:`
def handle_button_click(state):

	# Increment counter when the button is clicked

	state["counter"] += 1`.trim()}},fields:{text:{name:"Text",init:"Button Text",type:o.Text},customId:{name:"CustomId",init:"Button CustomId",type:o.Text},isDisabled:{name:"Disabled",default:"no",type:o.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},buttonColor:$,buttonTextColor:A,icon:{name:"Icon",type:o.Text,desc:'A RemixIcon id, such as "arrow-up".',category:b.Style},buttonShadow:P,separatorColor:V,cssClasses:N},previewField:"text"}},be=e.defineComponent({...ge,__name:"CustomCoreButton",setup(s){const n=e.ref(null),r=e.inject(_.evaluatedFields),d=e.inject(_.isDisabled);e.watch(r.isDisabled,y=>{d.value=y=="yes"},{immediate:!0});function h(y){const p=_e(y);n.value.dispatchEvent(p)}return(y,p)=>(e.openBlock(),e.createElementBlock("button",{class:"CoreButton","aria-disabled":e.unref(d),ref_key:"rootEl",ref:n,onClick:h},[e.unref(r).icon.value?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass([`ri-${e.unref(r).icon.value}-line`,`ri-${e.unref(r).icon.value}`])},null,2)):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(e.unref(r).text.value),1)],8,ye))}}),_t="",he=x(be,[["__scopeId","data-v-f19c8c2f"]]);function L(s){const n=/[\\]?@{([^}]*)}/g;function r(u,i){var f;let a=[],t="",c=0;for(let m=0;m<u.length;m++){const l=u.charAt(m);l=="."?c==0?(a.push(t),t=""):t+=l:l=="["?(c==0?(a.push(t),t=""):t+=l,c++):l=="]"?(c--,c==0?t=(f=d(t,i))==null?void 0:f.toString():t+=l):t+=l}return t&&a.push(t),a}function d(u,i){let t=i?h(i):void 0,c=s.getUserState(),f=r(u,i);for(let m=0;m<f.length;m++)t=t==null?void 0:t[f[m]],c=c==null?void 0:c[f[m]];return t??c}function h(u){var a,t;const i={};for(let c=0;c<u.length-1;c++){const f=u[c],{componentId:m}=f,{type:l}=s.getComponentById(m);if(l!=="repeater"||c+1>=u.length)continue;const C=u.slice(0,c+1),I=u.slice(0,c+2),{instanceNumber:v}=I.at(-1),T=g(C,"repeaterObject");if(!T)continue;const E=Object.entries(T),at=g(C,"keyVariable"),ot=g(C,"valueVariable");i[at]=(a=E[v])==null?void 0:a[0],i[ot]=(t=E[v])==null?void 0:t[1]}return i}function y(u,i){return u==null?"":u.replace(n,(t,c)=>{if(t.charAt(0)=="\\")return t.substring(1);const f=c.trim();if(!f)return"";const m=d(f,i);return typeof m>"u"?"":typeof m=="object"?JSON.stringify(m):m.toString()})}function p(u){const{componentId:i}=u.at(-1),a=s.getComponentById(i);if(!a)return;const t={},{fields:c}=s.getComponentDefinition(a.type);if(c)return Object.keys(c).forEach(f=>{t[f]=e.computed(()=>g(u,f))}),t}function g(u,i){var v;const{componentId:a}=u.at(-1),t=s.getComponentById(a);if(!t)return;const{fields:c}=s.getComponentDefinition(t.type),f=(v=t.content)==null?void 0:v[i],m=c[i].default,l=y(f,u),C=c[i].type,I=typeof l>"u"||l===null||l==="";if(C==o.Object||C==o.KeyValue){if(!l)return JSON.parse(m)??null;if(typeof l!="string")return l;let T;try{T=JSON.parse(l)}catch{return JSON.parse(m)??null}return T}else if(C==o.Number){const T=m===null?null:parseFloat(m);if(I)return T??null;const E=parseFloat(l);return typeof E===void 0||Number.isNaN(E)?T??null:E}else return C==o.IdKey?f:I?m??"":l}function S(u,i){const a=s.getComponentById(u);return a?typeof a.visible>"u"||a.visible===!0?!0:a.visible===!1?!1:!!d(a.visible,i):void 0}return{getEvaluatedFields:p,isComponentVisible:S,evaluateExpression:d}}function O(s,n,r){const d=e.ref(),h=e.ref(!1),y=e.ref(null),p=n.at(-1).componentId,g=e.computed(()=>s.getComponentById(p)),{evaluateExpression:S}=L(s);function u(){var t;const a=s.getComponentById(p);if((t=a==null?void 0:a.binding)!=null&&t.stateRef)return S(a.binding.stateRef,n)}function i(a,t,c){var I,v;d.value=a;const f=(I=g.value.handlers)==null?void 0:I[t],m=((v=g.value.binding)==null?void 0:v.eventType)==t;if(!f&&!m)return;if(h.value){y.value={eventValue:a,emitEventType:t};return}h.value=!0;const l=()=>{h.value=!1,y.value&&(i(y.value.eventValue,y.value.emitEventType),y.value=null),c==null||c()},C=new CustomEvent(t,{detail:{payload:a,callback:l}});r.value.dispatchEvent(C)}return e.watch(()=>u(),a=>{h.value||(d.value=a)},{immediate:!0}),e.watch(d,a=>{typeof a>"u"&&(d.value="")},{immediate:!0}),{formValue:d,handleInput:i}}const Ce={class:"mainLabel"},Ie={class:"selectContainer"},Se=["value","disabled"],ve=["value"],xe="A user input component that allows users to select a single value from a list of options using a dropdown menu.",Te={a:"Option A",b:"Option B"},Ne=`
def onchange_handler(state, payload):

	# Set the state variable "selected" to the selected option

	state["selected"] = payload`,Ee={streamsync:{name:"Dropdown Input",description:xe,category:"Input",fields:{label:{name:"Label",init:"Input Label",type:o.Text},customId:{name:"CustomId",init:"Dropdown CustomId",type:o.Text},options:{name:"Options",desc:"Key-value object with options. Must be a JSON string or a state reference to a dictionary.",type:o.KeyValue,default:JSON.stringify(Te,null,2)},isDisabled:{name:"Disabled",default:"no",type:o.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},cssClasses:N},events:{"ss-option-change":{desc:"Sent when the selected option changes.",stub:Ne.trim(),bindable:!0}}}},Be=e.defineComponent({...Ee,__name:"CoreDropdownInput",setup(s){const n=e.inject(_.evaluatedFields),r=e.ref(null),d=e.inject(_.core),h=e.inject(_.instancePath),y=e.inject(_.isDisabled),{formValue:p,handleInput:g}=O(d,h,r);return e.watch(n.isDisabled,S=>{y.value=S=="yes"},{immediate:!0}),(S,u)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreDropdownInput",ref_key:"rootEl",ref:r},[e.createElementVNode("label",Ce,e.toDisplayString(e.unref(n).label.value),1),e.createElementVNode("div",Ie,[e.createElementVNode("select",{value:e.unref(p),onInput:u[0]||(u[0]=i=>e.unref(g)(i.target.value,"ss-option-change")),disabled:e.unref(y)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(n).options.value,(i,a)=>(e.openBlock(),e.createElementBlock("option",{key:a,value:a},e.toDisplayString(i),9,ve))),128))],40,Se)])],512))}}),yt="",Ve=x(Be,[["__scopeId","data-v-f4c9f859"]]),we=["type","value","placeholder","disabled"],ke="A user input component that allows users to enter single-line text values.",U=`
def onchange_handler(state, payload):

	# Set the state variable "new_val" to the new value

	state["new_val"] = payload`,De={streamsync:{name:"Text Input",description:ke,category:"Input",fields:{label:{name:"Label",init:"Text Input",type:o.Text},placeholder:{name:"Placeholder",type:o.Text},passwordMode:{name:"Password mode",default:"no",type:o.Text,options:{no:"No",yes:"Yes"},category:b.Style},customId:{name:"CustomId",init:"Input CustomId",type:o.Text},isDisabled:{name:"Disabled",default:"no",type:o.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},cssClasses:N},events:{"ss-change":{desc:"Capture changes as they happen.",stub:U,bindable:!0},"ss-change-finish":{desc:"Capture changes once this control has lost focus.",stub:U}}}},$e=e.defineComponent({...De,__name:"CoreTextInput",setup(s){const n=e.inject(_.evaluatedFields),r=e.ref(null),d=e.inject(_.core),h=e.inject(_.instancePath),y=e.inject(_.isDisabled),{formValue:p,handleInput:g}=O(d,h,r);return e.watch(n.isDisabled,S=>{y.value=S=="yes"},{immediate:!0}),(S,u)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreTextInput",ref_key:"rootEl",ref:r},[e.createElementVNode("label",null,e.toDisplayString(e.unref(n).label.value),1),e.createElementVNode("input",{type:e.unref(n).passwordMode.value=="yes"?"password":"text",value:e.unref(p),onInput:u[0]||(u[0]=i=>e.unref(g)(i.target.value,"ss-change")),onChange:u[1]||(u[1]=i=>e.unref(g)(i.target.value,"ss-change-finish")),placeholder:e.unref(n).placeholder.value,"aria-autocomplete":"none",disabled:e.unref(y)},null,40,we)],512))}}),gt="",Ae=x($e,[["__scopeId","data-v-6b23200c"]]),Pe=["value","placeholder","min","max","step","disabled"],Me="A user input component that allows users to enter numeric values.",Y=`
def onchange_handler(state, payload):

	# Set the state variable "new_val" to the new value

	state["new_val"] = payload`,Oe={streamsync:{name:"Number Input",description:Me,category:"Input",fields:{label:{name:"Label",init:"Number Input",type:o.Text},placeholder:{name:"Placeholder",type:o.Text},minValue:{name:"Minimum value",type:o.Number,default:null},maxValue:{name:"Max value",type:o.Number,default:null},customId:{name:"CustomId",init:"Input CustomId",type:o.Text},valueStep:{name:"Step",type:o.Number,default:"1"},isDisabled:{name:"Disabled",default:"no",type:o.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},cssClasses:N},events:{"ss-number-change":{desc:"Capture changes as they happen.",stub:Y,bindable:!0},"ss-number-change-finish":{desc:"Capture changes once this control has lost focus.",stub:Y}}}},He=e.defineComponent({...Oe,__name:"CustomNumberInput",setup(s){const n=e.inject(_.evaluatedFields),r=e.ref(null),d=e.ref(null),h=e.inject(_.core),y=e.inject(_.instancePath),p=e.inject(_.isDisabled),{formValue:g,handleInput:S}=O(h,y,r);e.watch(n.isDisabled,t=>{p.value=t=="yes"},{immediate:!0});function u(){if(d.value.value=="")return null;let t=parseFloat(d.value.value);return isNaN(t)||(n.minValue.value!==null&&t<n.minValue.value&&(t=n.minValue.value,d.value.value=t),n.maxValue.value!==null&&t>n.maxValue.value&&(t=n.maxValue.value,d.value.value=t)),t}function i(){const t=u();isNaN(t)||S(t,"ss-number-change")}function a(){const t=u();isNaN(t)||S(t,"ss-number-change-finish")}return(t,c)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreNumberInput",ref_key:"rootEl",ref:r},[e.createElementVNode("label",null,e.toDisplayString(e.unref(n).label.value),1),e.createElementVNode("input",{type:"number",ref_key:"inputEl",ref:d,onInput:i,onChange:a,value:e.unref(g),placeholder:e.unref(n).placeholder.value,min:e.unref(n).minValue.value!==null?e.unref(n).minValue.value:void 0,max:e.unref(n).maxValue.value!==null?e.unref(n).maxValue.value:void 0,step:e.unref(n).valueStep.value!==null?e.unref(n).valueStep.value:void 0,disabled:e.unref(p)},null,40,Pe)],512))}}),bt="",ze=x(He,[["__scopeId","data-v-d94a0e08"]]),je={class:"CoreTabs"},Fe={class:"tabSelector horizontal","data-streamsync-cage":"","data-streamsync-container":""},Le={class:"container"},Ue={streamsync:{name:"Tab Container",description:"A container component for organising and displaying Tab components in a tabbed interface.",category:"Layout",allowedChildrenTypes:["custom_customtab","repeater"],fields:{accentColor:j,primaryTextColor:B,secondaryTextColor:k,containerBackgroundColor:D,containerShadow:F,separatorColor:V,buttonColor:$,buttonTextColor:A,buttonShadow:P,cssClasses:N}}},Ye=e.defineComponent({...Ue,__name:"CustomTabs",setup(s){const n=e.inject(_.instanceData);return n.at(-1).value={activeTab:void 0},(r,d)=>(e.openBlock(),e.createElementBlock("div",je,[e.createElementVNode("nav",Fe,[e.renderSlot(r.$slots,"default",{instanceNumber:0},void 0,!0)]),e.createElementVNode("div",Le,[e.renderSlot(r.$slots,"default",{instanceNumber:1},void 0,!0)])]))}}),Ct="",Je=x(Ye,[["__scopeId","data-v-f9331129"]]),Re=e.defineComponent({__name:"BaseContainer",props:{contentHAlign:{},contentVAlign:{},contentPadding:{},isHorizontal:{type:Boolean}},setup(s){const n=s,r=e.computed(()=>{const d={padding:n.contentPadding};return n.isHorizontal?{...d,justifyContent:n.contentHAlign,alignItems:n.contentVAlign}:{...d,alignItems:n.contentHAlign,justifyContent:n.contentVAlign}});return(d,h)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["BaseContainer",{horizontal:n.isHorizontal}]),style:e.normalizeStyle(r.value),"data-streamsync-container":""},[e.renderSlot(d.$slots,"default",{},void 0,!0)],6))}}),It="",qe=x(Re,[["__scopeId","data-v-4d8e1bc8"]]),We={class:"CoreTab"},w=0,H=1,Ge={streamsync:{name:"Tab",description:"A container component that displays its child components as a tab inside a Tab Container.",allowedParentTypes:["custom_customtabs","repeater"],allowedChildrenTypes:["*"],category:"Layout",fields:{name:{name:"Name",default:"(No name)",init:"Tab Name",type:o.Text},customId:{name:"CustomId",init:"Tab CustomId",type:o.Text},contentPadding:{...K,default:"16px"},contentHAlign:Z,cssClasses:N},previewField:"name"}},Qe=e.defineComponent({...Ge,__name:"CustomTab",setup(s){const n=e.inject(_.evaluatedFields),r=e.inject(_.instancePath),d=e.inject(_.instanceData),h=e.inject(_.core),y=e.inject(_.builderManager),p=e.inject(_.componentId),{isComponentVisible:g}=L(h),S=e.computed(()=>y==null?void 0:y.getSelectedId()),u=()=>{for(let l=-2;l>-1*r.length;l--){const C=r.at(l),{type:I}=h.getComponentById(C.componentId);if(I==="custom_customtabs")return l+1}},i=e.computed(()=>{const l=u();return r.at(l)}),a=()=>{for(let l=-1;l>-1*r.length;l--){const C=r.at(l),{type:I}=h.getComponentById(C.componentId);if(I==="custom_customtabs")return d.at(l)}},t=()=>{const l=u(),C=r.slice(0,l),I=l+1<0?r.slice(l+1):[];return[...C,{componentId:r.at(l).componentId,instanceNumber:H},...I]},c=()=>{const l=a();l.value={activeTab:t()}},f=l=>{const C=h.getComponentById(l);return!C||C.type=="root"?!1:C.parentId==p?!0:f(C.parentId)};e.watch(S,l=>{l&&f(l)&&c()});const m=e.computed(()=>{var v;let l;(i==null?void 0:i.value.instanceNumber)==w?l=t():l=r;const I=(v=a().value)==null?void 0:v.activeTab;return JSON.stringify(I)==JSON.stringify(l)});return e.onBeforeMount(()=>{var I;if((i==null?void 0:i.value.instanceNumber)==w)return;const l=a();(I=l.value)!=null&&I.activeTab||g(p,r)&&(l.value={activeTab:r})}),(l,C)=>{var I,v,T,E;return e.withDirectives((e.openBlock(),e.createElementBlock("div",We,[((I=i.value)==null?void 0:I.instanceNumber)==w?(e.openBlock(),e.createElementBlock("button",{key:0,class:e.normalizeClass(["bit",{active:m.value}]),onClick:c,tabindex:"0"},e.toDisplayString(e.unref(n).name.value),3)):e.createCommentVNode("",!0),((v=i.value)==null?void 0:v.instanceNumber)==H?e.withDirectives((e.openBlock(),e.createBlock(qe,{key:1,class:"container",contentHAlign:e.unref(n).contentHAlign.value,contentPadding:e.unref(n).contentPadding.value},{default:e.withCtx(()=>[e.renderSlot(l.$slots,"default",{},void 0,!0)]),_:3},8,["contentHAlign","contentPadding"])),[[e.vShow,m.value]]):e.createCommentVNode("",!0)],512)),[[e.vShow,((T=i.value)==null?void 0:T.instanceNumber)==w||((E=i.value)==null?void 0:E.instanceNumber)==H&&m.value]])}}}),vt="",Xe=x(Qe,[["__scopeId","data-v-bb0034eb"]]),Ze={class:"name"},Ke={class:"icon"},et={class:"note"},tt={streamsync:{name:"Metric",description:"A component that prominently displays a metric value and associated information.",category:"Content",fields:{name:{name:"Name",default:"Metric",type:o.Text},metricvalue:{name:"Value",init:"+Pass",type:o.Text,desc:"Prefix with '+' for a positive message, with '-' for a negative message."},size:{name:"Icon size",type:o.Number,desc:"Icon size in px",category:b.Style,default:20},color:{name:"Icon color",type:o.Color,category:b.Style},primaryTextColor:B,secondaryTextColor:k,positiveColor:{name:"Positive",default:"#00B800",type:o.Color,category:b.Style},neutralColor:{name:"Neutral",default:"var(--secondaryTextColor)",type:o.Color,category:b.Style},negativeColor:{name:"Negative",default:"#FB0000",type:o.Color,category:b.Style},positiveIcon:{name:"Positive Icon",default:"check",type:o.Text,category:b.Style},negativeIcon:{name:"Negative Icon",default:"close",type:o.Text,category:b.Style},cssClasses:N},previewField:"name"}},nt=e.defineComponent({...tt,__name:"CustomMetric",setup(s){const n=e.inject(_.evaluatedFields),r=e.computed(()=>{const p=n.metricvalue.value;if(!p)return"neutral";const g=p.charAt(0);return g=="+"?"positive":g=="-"?"negative":"neutral"}),d=e.computed(()=>r.value=="positive"?["ri-"+n.positiveIcon.value+"-line"]:["ri-"+n.negativeIcon.value+"-line"]),h=e.computed(()=>{const p=n.metricvalue.value;if(!p)return;const g=p.charAt(0);return g=="+"||g=="-"?p.substring(1):p}),y=e.computed(()=>({"--messageActiveSentimentColor":{positive:n.positiveColor.value,neutral:n.neutralColor.value,negative:n.negativeColor.value}[r.value]}));return(p,g)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreMetric",style:e.normalizeStyle(y.value)},[e.createElementVNode("div",Ze,e.toDisplayString(e.unref(n).name.value),1),e.createElementVNode("div",Ke,[r.value!="neutral"?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(["ColorIcon",d.value]),style:e.normalizeStyle({fontSize:`${e.unref(n).size.value}px`,color:e.unref(n).color.value})},null,6)):e.createCommentVNode("",!0)]),e.createElementVNode("div",et,e.toDisplayString(h.value),1)],4))}}),Tt="";return{bubblemessage:X,bubblemessageadvanced:de,customsection:fe,custombutton:he,customdropdown:Ve,customtextinput:Ae,customnumberinput:ze,customtabs:Je,customtab:Xe,custommetric:x(nt,[["__scopeId","data-v-a6b2c61d"]])}});
