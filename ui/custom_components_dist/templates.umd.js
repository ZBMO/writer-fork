(function(e,f){typeof exports=="object"&&typeof module<"u"?module.exports=f(require("vue"),require("../injectionKeys.ts")):typeof define=="function"&&define.amd?define(["vue","../injectionKeys.ts"],f):(e=typeof globalThis<"u"?globalThis:e||self,e.StreamsyncCustomComponentTemplates=f(e.vue,e.injectionKeys))})(this,function(e,f){"use strict";var s=(o=>(o.Text="Text",o.KeyValue="Key-Value",o.Color="Color",o.Shadow="Shadow",o.Number="Number",o.Object="Object",o.IdKey="Identifying Key",o.Width="Width",o.HAlign="Align (H)",o.VAlign="Align (V)",o.Padding="Padding",o))(s||{}),h=(o=>(o.General="General",o.Style="Style",o))(h||{}),z=(o=>(o.Text="Text",o.Textarea="Textarea",o))(z||{});const U=o=>(e.pushScopeId("data-v-c47a5383"),o=o(),e.popScopeId(),o),R={class:"BubbleMessage"},q=U(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),W={class:"message"},G={streamsync:{name:"Bubble Message",description:"Shows a message in the shape of a speech bubble.",category:"Content",fields:{text:{name:"Text",type:s.Text}},previewField:"text"}},Q=e.defineComponent({...G,__name:"BubbleMessage",setup(o){const n=e.inject(f.evaluatedFields);return(c,d)=>(e.openBlock(),e.createElementBlock("div",R,[q,e.createElementVNode("div",W,e.toDisplayString(e.unref(n).text.value),1)]))}}),ct="",v=(o,n)=>{const c=o.__vccOpts||o;for(const[d,b]of n)c[d]=b;return c},X=v(Q,[["__scopeId","data-v-c47a5383"]]),j={name:"Accent",type:s.Color,category:h.Style,applyStyleVariable:!0},B={name:"Primary text",type:s.Color,category:h.Style,applyStyleVariable:!0},k={name:"Secondary text",type:s.Color,category:h.Style,applyStyleVariable:!0};s.Color,h.Style;const $={name:"Container background",type:s.Color,category:h.Style,applyStyleVariable:!0},F={name:"Container shadow",type:s.Shadow,category:h.Style,applyStyleVariable:!0},V={name:"Separator",type:s.Color,category:h.Style,applyStyleVariable:!0},D={name:"Button",type:s.Color,category:h.Style,applyStyleVariable:!0},A={name:"Button text",type:s.Color,category:h.Style,applyStyleVariable:!0},P={name:"Button shadow",type:s.Shadow,category:h.Style,applyStyleVariable:!0};s.Color,h.Style;const N={name:"Custom CSS classes",type:s.Text,category:h.Style,desc:"CSS classes, separated by spaces. You can define classes in custom stylesheets."};s.Width,h.Style;const Z={name:"Content alignment (H)",type:s.HAlign,default:"unset",category:h.Style};s.VAlign,h.Style;const K={name:"Padding",type:s.Padding,default:"0",category:h.Style},M=o=>(e.pushScopeId("data-v-026368bf"),o=o(),e.popScopeId(),o),ee=M(()=>e.createElementVNode("div",{class:"triangle"},null,-1)),te={class:"message"},ne={class:"text"},ae=[M(()=>e.createElementVNode("i",{class:"ri-pushpin-line"},null,-1))],oe=[M(()=>e.createElementVNode("i",{class:"ri-flag-line"},null,-1))],se=`This documentation will show in the collapsible mini-docs feature embedded in Builder.
You _can_ use **markdown**.`,le=`
def handle_flag(state, payload):
	state["flagged_message_id"] = payload`,ce=`
def handle_pin(state, payload):
	state["pinned_message_id"] = payload`,re={streamsync:{name:"Bubble Message (Advanced)",description:"Shows a message in the shape of a speech bubble.",docs:se,category:"Content",fields:{messageId:{name:"Message id",desc:"Unique id to identify the message when generating events.",init:"a1",type:s.Text},text:{name:"Text",desc:"The message to be displayed.",default:"(Empty message)",type:s.Text,control:z.Textarea},orientation:{name:"Orientation",category:h.Style,type:s.Text,options:{left:"Pointing left",right:"Pointing right"}},bubbleColor:{name:"Bubble",default:"#CFEFF3",category:h.Style,type:s.Color,applyStyleVariable:!0},primaryTextColor:B,separatorColor:V,containerBackgroundColor:$,cssClasses:N},events:{"pin-message":{desc:"Emitted when the pin button is clicked.",stub:ce},"flag-message":{desc:"Emitted when the flag button is clicked.",stub:le}},previewField:"text"}},ie=e.defineComponent({...re,__name:"BubbleMessageAdvanced",setup(o){const n=e.ref(null),c=e.inject(f.evaluatedFields),d=e.computed(()=>c.messageId.value);function b(){const p=d.value,y=new CustomEvent("flag-message",{detail:{payload:p}});n.value.dispatchEvent(y)}function _(){const p=d.value,y=new CustomEvent("pin-message",{detail:{payload:p}});n.value.dispatchEvent(y)}return(p,y)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["BubbleMessage",{rightOriented:e.unref(c).orientation.value=="right"}]),ref_key:"rootEl",ref:n},[ee,e.createElementVNode("div",te,[e.createElementVNode("div",ne,e.toDisplayString(e.unref(c).text.value),1),e.createElementVNode("div",{class:"actions"},[e.createElementVNode("div",{class:"action",onClick:_},ae),e.createElementVNode("div",{class:"action",onClick:b},oe)])])],2))}}),ut="",de=v(ie,[["__scopeId","data-v-026368bf"]]),ue={key:0},pe={streamsync:{name:"Section",description:"A container component that divides the layout into sections, with an optional title.",category:"Layout",allowedChildrenTypes:["*"],fields:{title:{name:"Title",init:"Section Title",desc:"Leave blank to hide.",type:s.Text},accentColor:j,primaryTextColor:B,secondaryTextColor:k,containerBackgroundColor:$,containerShadow:F,separatorColor:V,buttonColor:D,buttonTextColor:A,buttonShadow:P,snapMode:{name:"Snap mode",type:s.Text,options:{no:"No",yes:"Yes"},default:"no",init:"no",category:h.Style,desc:"Use as much space as possible without altering the size of the container."},cssClasses:N},previewField:"title"}},me=e.defineComponent({...pe,__name:"CustomCoreSection",setup(o){const n=e.inject(f.core),c=e.inject(f.instancePath);function d(a){const t=a.closest(".CoreTab");if(t==null)return null;var r=n.getComponentById(t.dataset.streamsyncId),g=r.content.customId;return g}function b(a){const t=a.target.closest("[data-streamsync-id]");var r=n.getComponentById(t.dataset.streamsyncId),g=r.content.customId,m=d(t);return{parentComponentId:m,targetComponentId:g}}function _(a,t){const r=a.target.nodeName;return t.includes(r)}function p(a){const t=a.target.closest("[data-streamsync-id]");var r=n.getComponentById(t.dataset.streamsyncId);return r.type.includes("tab")}function y(a){if(p(a)||(a.stopPropagation(),!_(a,["BUTTON"])))return;const{parentComponentId:t,targetComponentId:r}=b(a),g=t+"_"+r,m=new CustomEvent("click",{detail:{payload:{id:g,tab:t,control:r}}});n.forwardEvent(m,c,!0)}function S(a){}function u(a){if(console.log("captureChange: "),console.log(a),a.stopPropagation(),!_(a,["SELECT","INPUT"]))return;const{parentComponentId:t,targetComponentId:r}=b(a),g=t+"_"+r,m=a.target.value,l=new CustomEvent("change",{detail:{payload:{id:g,tab:t,control:r,value:m}}});n.forwardEvent(l,c,!0)}const i=e.inject(f.evaluatedFields);return(a,t)=>(e.openBlock(),e.createElementBlock("section",{class:e.normalizeClass(["CoreSection",{snapMode:e.unref(i).snapMode.value=="yes"}]),ref:"rootEl",onClickCapture:y},[e.unref(i).title.value?(e.openBlock(),e.createElementBlock("h2",ue,e.toDisplayString(e.unref(i).title.value)+" CUSTOM SECTION",1)):e.createCommentVNode("",!0),e.createElementVNode("div",{"data-streamsync-container":"",onInputCapture:S,onChangeCapture:u},[e.renderSlot(a.$slots,"default",{},void 0,!0)],32)],34))}}),mt="",fe=v(me,[["__scopeId","data-v-9f75fd84"]]);function _e(o){const n={ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,metaKey:o.metaKey};return new CustomEvent("ss-click",{detail:{payload:n}})}const ye=["aria-disabled"],ge={streamsync:{name:"Button",description:"A standalone button component that can be linked to a click event handler.",docs:"\nStreamsync uses the library RemixIcon to display icons. To include an icon, check remixicon.com, find the icon's id (such as `arrow-up`) and it to your _Button_.\n",category:"Other",events:{"ss-click":{desc:"Capture single clicks.",stub:`
def handle_button_click(state):

	# Increment counter when the button is clicked

	state["counter"] += 1`.trim()}},fields:{text:{name:"Text",init:"Button Text",type:s.Text},customId:{name:"CustomId",init:"Button CustomId",type:s.Text},isDisabled:{name:"Disabled",default:"no",type:s.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},buttonColor:D,buttonTextColor:A,icon:{name:"Icon",type:s.Text,desc:'A RemixIcon id, such as "arrow-up".',category:h.Style},buttonShadow:P,separatorColor:V,cssClasses:N},previewField:"text"}},be=e.defineComponent({...ge,__name:"CustomCoreButton",setup(o){const n=e.ref(null),c=e.inject(f.evaluatedFields),d=e.inject(f.isDisabled);e.watch(c.isDisabled,_=>{d.value=_=="yes"},{immediate:!0});function b(_){const p=_e(_);n.value.dispatchEvent(p)}return(_,p)=>(e.openBlock(),e.createElementBlock("button",{class:"CoreButton","aria-disabled":e.unref(d),ref_key:"rootEl",ref:n,onClick:b},[e.unref(c).icon.value?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass([`ri-${e.unref(c).icon.value}-line`,`ri-${e.unref(c).icon.value}`])},null,2)):e.createCommentVNode("",!0),e.createTextVNode(" "+e.toDisplayString(e.unref(c).text.value),1)],8,ye))}}),gt="",he=v(be,[["__scopeId","data-v-f19c8c2f"]]);function L(o){const n=/[\\]?@{([^}]*)}/g;function c(u,i){var g;let a=[],t="",r=0;for(let m=0;m<u.length;m++){const l=u.charAt(m);l=="."?r==0?(a.push(t),t=""):t+=l:l=="["?(r==0?(a.push(t),t=""):t+=l,r++):l=="]"?(r--,r==0?t=(g=d(t,i))==null?void 0:g.toString():t+=l):t+=l}return t&&a.push(t),a}function d(u,i){let t=i?b(i):void 0,r=o.getUserState(),g=c(u,i);for(let m=0;m<g.length;m++)t=t==null?void 0:t[g[m]],r=r==null?void 0:r[g[m]];return t??r}function b(u){var a,t;const i={};for(let r=0;r<u.length-1;r++){const g=u[r],{componentId:m}=g,{type:l}=o.getComponentById(m);if(l!=="repeater"||r+1>=u.length)continue;const C=u.slice(0,r+1),I=u.slice(0,r+2),{instanceNumber:x}=I.at(-1),T=y(C,"repeaterObject");if(!T)continue;const E=Object.entries(T),st=y(C,"keyVariable"),lt=y(C,"valueVariable");i[st]=(a=E[x])==null?void 0:a[0],i[lt]=(t=E[x])==null?void 0:t[1]}return i}function _(u,i){return u==null?"":u.replace(n,(t,r)=>{if(t.charAt(0)=="\\")return t.substring(1);const g=r.trim();if(!g)return"";const m=d(g,i);return typeof m>"u"?"":typeof m=="object"?JSON.stringify(m):m.toString()})}function p(u){const{componentId:i}=u.at(-1),a=o.getComponentById(i);if(!a)return;const t={},{fields:r}=o.getComponentDefinition(a.type);if(r)return Object.keys(r).forEach(g=>{t[g]=e.computed(()=>y(u,g))}),t}function y(u,i){var x;const{componentId:a}=u.at(-1),t=o.getComponentById(a);if(!t)return;const{fields:r}=o.getComponentDefinition(t.type),g=(x=t.content)==null?void 0:x[i],m=r[i].default,l=_(g,u),C=r[i].type,I=typeof l>"u"||l===null||l==="";if(C==s.Object||C==s.KeyValue){if(!l)return JSON.parse(m)??null;if(typeof l!="string")return l;let T;try{T=JSON.parse(l)}catch{return JSON.parse(m)??null}return T}else if(C==s.Number){const T=m===null?null:parseFloat(m);if(I)return T??null;const E=parseFloat(l);return typeof E===void 0||Number.isNaN(E)?T??null:E}else return C==s.IdKey?g:I?m??"":l}function S(u,i){const a=o.getComponentById(u);return a?typeof a.visible>"u"||a.visible===!0?!0:a.visible===!1?!1:!!d(a.visible,i):void 0}return{getEvaluatedFields:p,isComponentVisible:S,evaluateExpression:d}}function O(o,n,c){const d=e.ref(),b=e.ref(!1),_=e.ref(null),p=n.at(-1).componentId,y=e.computed(()=>o.getComponentById(p)),{evaluateExpression:S}=L(o);function u(){var t;const a=o.getComponentById(p);if((t=a==null?void 0:a.binding)!=null&&t.stateRef)return S(a.binding.stateRef,n)}function i(a,t,r){var I,x;d.value=a;const g=(I=y.value.handlers)==null?void 0:I[t],m=((x=y.value.binding)==null?void 0:x.eventType)==t;if(!g&&!m)return;if(b.value){_.value={eventValue:a,emitEventType:t};return}b.value=!0;const l=()=>{b.value=!1,_.value&&(i(_.value.eventValue,_.value.emitEventType),_.value=null),r==null||r()},C=new CustomEvent(t,{detail:{payload:a,callback:l}});c.value.dispatchEvent(C)}return e.watch(()=>u(),a=>{b.value||(d.value=a)},{immediate:!0}),e.watch(d,a=>{typeof a>"u"&&(d.value="")},{immediate:!0}),{formValue:d,handleInput:i}}const Ce={class:"mainLabel"},Ie={class:"selectContainer"},Se=["value","disabled"],xe=["value"],ve="A user input component that allows users to select a single value from a list of options using a dropdown menu.",Te={a:"Option A",b:"Option B"},Ne=`
def onchange_handler(state, payload):

	# Set the state variable "selected" to the selected option

	state["selected"] = payload`,Ee={streamsync:{name:"Dropdown Input",description:ve,category:"Input",fields:{label:{name:"Label",init:"Input Label",type:s.Text},customId:{name:"CustomId",init:"Dropdown CustomId",type:s.Text},options:{name:"Options",desc:"Key-value object with options. Must be a JSON string or a state reference to a dictionary.",type:s.KeyValue,default:JSON.stringify(Te,null,2)},isDisabled:{name:"Disabled",default:"no",type:s.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},cssClasses:N},events:{"ss-option-change":{desc:"Sent when the selected option changes.",stub:Ne.trim(),bindable:!0}}}},Be=e.defineComponent({...Ee,__name:"CoreDropdownInput",setup(o){const n=e.inject(f.evaluatedFields),c=e.ref(null),d=e.inject(f.core),b=e.inject(f.instancePath),_=e.inject(f.isDisabled),{formValue:p,handleInput:y}=O(d,b,c);return e.watch(n.isDisabled,S=>{_.value=S=="yes"},{immediate:!0}),(S,u)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreDropdownInput",ref_key:"rootEl",ref:c},[e.createElementVNode("label",Ce,e.toDisplayString(e.unref(n).label.value),1),e.createElementVNode("div",Ie,[e.createElementVNode("select",{value:e.unref(p),onInput:u[0]||(u[0]=i=>e.unref(y)(i.target.value,"ss-option-change")),disabled:e.unref(_)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(n).options.value,(i,a)=>(e.openBlock(),e.createElementBlock("option",{key:a,value:a},e.toDisplayString(i),9,xe))),128))],40,Se)])],512))}}),bt="",Ve=v(Be,[["__scopeId","data-v-f4c9f859"]]),we=["type","value","placeholder","disabled"],ke="A user input component that allows users to enter single-line text values.",Y=`
def onchange_handler(state, payload):

	# Set the state variable "new_val" to the new value

	state["new_val"] = payload`,$e={streamsync:{name:"Text Input",description:ke,category:"Input",fields:{label:{name:"Label",init:"Text Input",type:s.Text},placeholder:{name:"Placeholder",type:s.Text},passwordMode:{name:"Password mode",default:"no",type:s.Text,options:{no:"No",yes:"Yes"},category:h.Style},customId:{name:"CustomId",init:"Input CustomId",type:s.Text},isDisabled:{name:"Disabled",default:"no",type:s.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},cssClasses:N},events:{"ss-change":{desc:"Capture changes as they happen.",stub:Y,bindable:!0},"ss-change-finish":{desc:"Capture changes once this control has lost focus.",stub:Y}}}},De=e.defineComponent({...$e,__name:"CoreTextInput",setup(o){const n=e.inject(f.evaluatedFields),c=e.ref(null),d=e.inject(f.core),b=e.inject(f.instancePath),_=e.inject(f.isDisabled),{formValue:p,handleInput:y}=O(d,b,c);return e.watch(n.isDisabled,S=>{_.value=S=="yes"},{immediate:!0}),(S,u)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreTextInput",ref_key:"rootEl",ref:c},[e.createElementVNode("label",null,e.toDisplayString(e.unref(n).label.value),1),e.createElementVNode("input",{type:e.unref(n).passwordMode.value=="yes"?"password":"text",value:e.unref(p),onInput:u[0]||(u[0]=i=>e.unref(y)(i.target.value,"ss-change")),onChange:u[1]||(u[1]=i=>e.unref(y)(i.target.value,"ss-change-finish")),placeholder:e.unref(n).placeholder.value,"aria-autocomplete":"none",disabled:e.unref(_)},null,40,we)],512))}}),ht="",Ae=v(De,[["__scopeId","data-v-6b23200c"]]),Pe=["value","placeholder","min","max","step","disabled"],Me="A user input component that allows users to enter numeric values.",J=`
def onchange_handler(state, payload):

	# Set the state variable "new_val" to the new value

	state["new_val"] = payload`,Oe={streamsync:{name:"Number Input",description:Me,category:"Input",fields:{label:{name:"Label",init:"Number Input",type:s.Text},placeholder:{name:"Placeholder",type:s.Text},minValue:{name:"Minimum value",type:s.Number,default:null},maxValue:{name:"Max value",type:s.Number,default:null},customId:{name:"CustomId",init:"Input CustomId",type:s.Text},valueStep:{name:"Step",type:s.Number,default:"1"},isDisabled:{name:"Disabled",default:"no",type:s.Text,options:{yes:"Yes",no:"No"},desc:"Disables all event handlers."},cssClasses:N},events:{"ss-number-change":{desc:"Capture changes as they happen.",stub:J,bindable:!0},"ss-number-change-finish":{desc:"Capture changes once this control has lost focus.",stub:J}}}},He=e.defineComponent({...Oe,__name:"CustomNumberInput",setup(o){const n=e.inject(f.evaluatedFields),c=e.ref(null),d=e.ref(null),b=e.inject(f.core),_=e.inject(f.instancePath),p=e.inject(f.isDisabled),{formValue:y,handleInput:S}=O(b,_,c);e.watch(n.isDisabled,t=>{p.value=t=="yes"},{immediate:!0});function u(){if(d.value.value=="")return null;let t=parseFloat(d.value.value);return isNaN(t)||(n.minValue.value!==null&&t<n.minValue.value&&(t=n.minValue.value,d.value.value=t),n.maxValue.value!==null&&t>n.maxValue.value&&(t=n.maxValue.value,d.value.value=t)),t}function i(){const t=u();isNaN(t)||S(t,"ss-number-change")}function a(){const t=u();isNaN(t)||S(t,"ss-number-change-finish")}return(t,r)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreNumberInput",ref_key:"rootEl",ref:c},[e.createElementVNode("label",null,e.toDisplayString(e.unref(n).label.value),1),e.createElementVNode("input",{type:"number",ref_key:"inputEl",ref:d,onInput:i,onChange:a,value:e.unref(y),placeholder:e.unref(n).placeholder.value,min:e.unref(n).minValue.value!==null?e.unref(n).minValue.value:void 0,max:e.unref(n).maxValue.value!==null?e.unref(n).maxValue.value:void 0,step:e.unref(n).valueStep.value!==null?e.unref(n).valueStep.value:void 0,disabled:e.unref(p)},null,40,Pe)],512))}}),Ct="",ze=v(He,[["__scopeId","data-v-d94a0e08"]]),je={class:"CoreTabs"},Fe={class:"tabSelector horizontal","data-streamsync-cage":"","data-streamsync-container":""},Le={class:"container"},Ye={streamsync:{name:"Tab Container",description:"A container component for organising and displaying Tab components in a tabbed interface.",category:"Layout",allowedChildrenTypes:["custom_customtab","repeater"],fields:{accentColor:j,primaryTextColor:B,secondaryTextColor:k,containerBackgroundColor:$,containerShadow:F,separatorColor:V,buttonColor:D,buttonTextColor:A,buttonShadow:P,cssClasses:N}}},Je=e.defineComponent({...Ye,__name:"CustomTabs",setup(o){const n=e.inject(f.instanceData);return n.at(-1).value={activeTab:void 0},(c,d)=>(e.openBlock(),e.createElementBlock("div",je,[e.createElementVNode("nav",Fe,[e.renderSlot(c.$slots,"default",{instanceNumber:0},void 0,!0)]),e.createElementVNode("div",Le,[e.renderSlot(c.$slots,"default",{instanceNumber:1},void 0,!0)])]))}}),St="",Ue=v(Je,[["__scopeId","data-v-f9331129"]]),Re=e.defineComponent({__name:"BaseContainer",props:{contentHAlign:{},contentVAlign:{},contentPadding:{},isHorizontal:{type:Boolean}},setup(o){const n=o,c=e.computed(()=>{const d={padding:n.contentPadding};return n.isHorizontal?{...d,justifyContent:n.contentHAlign,alignItems:n.contentVAlign}:{...d,alignItems:n.contentHAlign,justifyContent:n.contentVAlign}});return(d,b)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["BaseContainer",{horizontal:n.isHorizontal}]),style:e.normalizeStyle(c.value),"data-streamsync-container":""},[e.renderSlot(d.$slots,"default",{},void 0,!0)],6))}}),xt="",qe=v(Re,[["__scopeId","data-v-4d8e1bc8"]]),We={class:"CoreTab"},w=0,H=1,Ge={streamsync:{name:"Tab",description:"A container component that displays its child components as a tab inside a Tab Container.",allowedParentTypes:["custom_customtabs","repeater"],allowedChildrenTypes:["*"],category:"Layout",fields:{name:{name:"Name",default:"(No name)",init:"Tab Name",type:s.Text},customId:{name:"CustomId",init:"Tab CustomId",type:s.Text},contentPadding:{...K,default:"16px"},contentHAlign:Z,cssClasses:N},previewField:"name"}},Qe=e.defineComponent({...Ge,__name:"CustomTab",setup(o){const n=e.inject(f.evaluatedFields),c=e.inject(f.instancePath),d=e.inject(f.instanceData),b=e.inject(f.core),_=e.inject(f.builderManager),p=e.inject(f.componentId),{isComponentVisible:y}=L(b),S=e.computed(()=>_==null?void 0:_.getSelectedId()),u=()=>{for(let l=-2;l>-1*c.length;l--){const C=c.at(l),{type:I}=b.getComponentById(C.componentId);if(I==="custom_customtabs")return l+1}},i=e.computed(()=>{const l=u();return c.at(l)}),a=()=>{for(let l=-1;l>-1*c.length;l--){const C=c.at(l),{type:I}=b.getComponentById(C.componentId);if(I==="custom_customtabs")return d.at(l)}},t=()=>{const l=u(),C=c.slice(0,l),I=l+1<0?c.slice(l+1):[];return[...C,{componentId:c.at(l).componentId,instanceNumber:H},...I]},r=()=>{const l=a();l.value={activeTab:t()}},g=l=>{const C=b.getComponentById(l);return!C||C.type=="root"?!1:C.parentId==p?!0:g(C.parentId)};e.watch(S,l=>{l&&g(l)&&r()});const m=e.computed(()=>{var x;let l;(i==null?void 0:i.value.instanceNumber)==w?l=t():l=c;const I=(x=a().value)==null?void 0:x.activeTab;return JSON.stringify(I)==JSON.stringify(l)});return e.onBeforeMount(()=>{var I;if((i==null?void 0:i.value.instanceNumber)==w)return;const l=a();(I=l.value)!=null&&I.activeTab||y(p,c)&&(l.value={activeTab:c})}),(l,C)=>{var I,x,T,E;return e.withDirectives((e.openBlock(),e.createElementBlock("div",We,[((I=i.value)==null?void 0:I.instanceNumber)==w?(e.openBlock(),e.createElementBlock("button",{key:0,class:e.normalizeClass(["bit",{active:m.value}]),onClick:r,tabindex:"0"},e.toDisplayString(e.unref(n).name.value),3)):e.createCommentVNode("",!0),((x=i.value)==null?void 0:x.instanceNumber)==H?e.withDirectives((e.openBlock(),e.createBlock(qe,{key:1,class:"container",contentHAlign:e.unref(n).contentHAlign.value,contentPadding:e.unref(n).contentPadding.value},{default:e.withCtx(()=>[e.renderSlot(l.$slots,"default",{},void 0,!0)]),_:3},8,["contentHAlign","contentPadding"])),[[e.vShow,m.value]]):e.createCommentVNode("",!0)],512)),[[e.vShow,((T=i.value)==null?void 0:T.instanceNumber)==w||((E=i.value)==null?void 0:E.instanceNumber)==H&&m.value]])}}}),Tt="",Xe=v(Qe,[["__scopeId","data-v-bb0034eb"]]),Ze={class:"name"},Ke={class:"secondAndThirdColumns"},et={class:"statusAndIcon"},tt={class:"note"},nt={class:"icon"},at={streamsync:{name:"Metric",description:"A component that prominently displays a metric value and associated information.",category:"Content",fields:{name:{name:"Name",default:"Metric",type:s.Text},metricvalue:{name:"Value",init:"+Pass",type:s.Text,desc:"Prefix with '+' for a positive message, with '-' for a negative message."},size:{name:"Icon size",type:s.Number,desc:"Icon size in px",category:h.Style,default:20},color:{name:"Icon color",type:s.Color,category:h.Style},primaryTextColor:B,secondaryTextColor:k,positiveColor:{name:"Positive",default:"#00B800",type:s.Color,category:h.Style},neutralColor:{name:"Neutral",default:"var(--secondaryTextColor)",type:s.Color,category:h.Style},negativeColor:{name:"Negative",default:"#FB0000",type:s.Color,category:h.Style},cssClasses:N},previewField:"name"}},ot=e.defineComponent({...at,__name:"CustomMetric",setup(o){const n=e.inject(f.evaluatedFields),c=e.computed(()=>{const p=n.metricvalue.value;if(!p)return"neutral";const y=p.charAt(0);return y=="+"?"positive":y=="-"?"negative":"neutral"}),d=e.computed(()=>c.value=="positive"?["ri-check-line"]:["ri-close-line"]),b=e.computed(()=>{const p=n.metricvalue.value;if(!p)return;const y=p.charAt(0);return y=="+"||y=="-"?p.substring(1):p}),_=e.computed(()=>({"--messageActiveSentimentColor":{positive:n.positiveColor.value,neutral:n.neutralColor.value,negative:n.negativeColor.value}[c.value]}));return(p,y)=>(e.openBlock(),e.createElementBlock("div",{class:"CoreMetric",style:e.normalizeStyle(_.value)},[e.createElementVNode("div",Ze,e.toDisplayString(e.unref(n).name.value),1),e.createElementVNode("div",Ke,[e.createElementVNode("div",et,[e.createElementVNode("div",tt,e.toDisplayString(b.value),1),e.createElementVNode("div",nt,[c.value!="neutral"?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(["ColorIcon",d.value]),style:e.normalizeStyle({fontSize:`${e.unref(n).size.value}px`,color:e.unref(n).color.value})},null,6)):e.createCommentVNode("",!0)])])])],4))}}),Et="";return{bubblemessage:X,bubblemessageadvanced:de,customsection:fe,custombutton:he,customdropdown:Ve,customtextinput:Ae,customnumberinput:ze,customtabs:Ue,customtab:Xe,custommetric:v(ot,[["__scopeId","data-v-d7e913da"]])}});