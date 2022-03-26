"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2943],{6163:function(e,t,n){n.d(t,{b:function(){return b}});var r=n(38944),o=n(20028),a=n(83870),i=n(64126),u=n(27378),l=n(414),c={subtle:"alert-subtle",solid:"alert-solid","left-accent":"alert-left-accent"},s=(0,l.F)((()=>(0,r.Z)("alert-close-button"))),d=(0,l.F)((e=>(0,r.Z)("alert",c[e.variant]))),f=["color","variant","className"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v=u.createContext({}),p=u.forwardRef(((e,t)=>{var{className:n}=e,{color:o}=(()=>{var e=u.useContext(v);if(void 0===e)throw new Error("useAlertContext must be used within a AlertContextProvider");return e})(),l=s();return u.createElement("button",{ref:t,"data-color":o||void 0,className:(0,r.Z)(l,n)},u.createElement(a.J,{as:i.b0,label:"x",className:"inline-block w-4 h-4 text-current align-text-bottom fill-current"}))}));o.Ts&&(p.displayName="AlertCloseButton");var h=u.forwardRef(((e,t)=>{var{color:n="primary",variant:o="subtle",className:a}=e,i=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,f),l=d({variant:o}),c={color:n};return u.createElement(v.Provider,{value:c},u.createElement("div",m({role:"alert",ref:t,"data-color":n||void 0,className:(0,r.Z)(l,a)},i)))}));o.Ts&&(h.displayName="Alert");var b=h;b.CloseButton=p},85687:function(e,t,n){n.d(t,{X:function(){return w}});var r=n(76061),o=n(2293),a=n(38944),i=n(20028),u=n(27378),l=n(414),c=(0,l.F)((e=>(0,a.Z)("form-checkbox-label",{sm:"form-checkbox-label-sm",md:"form-checkbox-label-md",lg:"form-checkbox-label-lg",xl:"form-checkbox-label-xl"}[e.size]))),s=(0,l.F)((e=>(0,a.Z)("form-checkbox",e.disabled&&"form-checkbox-disabled",{sm:"form-checkbox-sm",md:"form-checkbox-md",lg:"form-checkbox-lg",xl:"form-checkbox-xl"}[e.size]))),d=["id","name","value","aria-label","aria-labelledby","aria-describedby","color","defaultChecked","checked","size","onChange","indeterminate","children","className"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=u.forwardRef(((e,t)=>{var{id:n,name:i,value:l,"aria-label":m,"aria-labelledby":v,"aria-describedby":p,color:h="primary",defaultChecked:b,checked:g,size:w="md",onChange:y,indeterminate:x,children:E,className:k}=e,R=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,d),{disabled:C,invalid:I,readOnly:S}=(0,r.Y)(e),M=s({size:w,disabled:C}),T=c({size:w}),O=(0,u.useRef)(),D=(0,o.c)(O,t);return(0,u.useEffect)((()=>{D.current&&(D.current.indeterminate=Boolean(x))}),[x,D]),u.createElement("label",{className:(0,a.Z)("inline-flex align-top items-center cursor-base",C&&"cursor-not-allowed")},u.createElement("input",f({type:"checkbox","aria-label":m,"aria-labelledby":v,"aria-describedby":p,id:n,ref:D,name:i,value:l,onChange:S?void 0:y,defaultChecked:S?void 0:b,checked:S?Boolean(g):b?void 0:g,disabled:C,"aria-disabled":C,readOnly:S,"aria-readonly":S,"aria-invalid":I,"aria-checked":x?"mixed":g,"data-color":h||void 0,className:(0,a.Z)(M,S||C?"opacity-80":"opacity-100",k)},R)),E&&u.createElement("span",{className:(0,a.Z)(T,S||C?"opacity-40":"opacity-100")},E))}));i.Ts&&(m.displayName="Checkbox");var v=n(66239),p=n(82935),h=["onChange","name","color","size","defaultValue","inline","value","children"];function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=u.forwardRef(((e,t)=>{var{onChange:n,name:r,color:o,size:i,defaultValue:l,inline:c,value:s,children:d}=e,f=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,h),[m,g]=(0,u.useState)(l||[]),{current:w}=(0,u.useRef)(null!=s),y=w?s:m,x=e=>{var t,{checked:r,value:o}=e.target;t=r?[...y||[],o]:(y||[]).filter((e=>e!==o)),!w&&g(t),n&&n(t)},E="checkbox-"+(0,v.M)(),k=r||E,R=(0,p.W)(d).map(((e,t)=>u.createElement("div",{key:t,className:(0,a.Z)(c?"inline-block":"block",e.props.className)},(0,u.cloneElement)(e,{size:i,color:e.props.color||o,name:k+"-"+t,onChange:x,checked:(y||[]).includes(e.props.value)}))));return u.createElement("div",b({role:"group",ref:t},f),R)}));i.Ts&&(g.displayName="CheckboxGroup");var w=m;w.Group=g},95802:function(e,t,n){n.d(t,{Vp:function(){return y}});var r=n(83870),o=n(64126),a=n(38944),i=n(20028),u=n(27378),l=n(414),c={solid:"tag-solid",outline:"tag-outline",light:"tag-light"},s={sm:"tag-sm",md:"tag-md",lg:"tag-lg",xl:"tag-xl"},d=(0,l.F)((e=>(0,a.Z)("tag",s[e.size],c[e.variant]))),f=["disabled","className","iconClassName"],m=["className"],v=["variant","size","color","className"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var b=u.forwardRef(((e,t)=>{var{disabled:n,className:i,iconClassName:l}=e,c=h(e,f);return u.createElement("button",p({ref:t,className:(0,a.Z)("tag-close-button",i),disabled:n,"aria-disabled":n},c),u.createElement(r.J,{as:o.b0,label:"x",className:(0,a.Z)("w-3.5 h-3.5",l)}))}));i.Ts&&(b.displayName="TagCloseButton");var g=e=>{var{className:t}=e,n=h(e,m);return u.createElement("span",p({className:(0,a.Z)(t)},n))};i.Ts&&(g.displayName="TagLabel");var w=u.forwardRef(((e,t)=>{var{variant:n="outline",size:r="md",color:o="",className:i}=e,l=h(e,v),c=d({variant:n,size:r});return u.createElement("div",p({ref:t,"data-color":o||void 0,className:(0,a.Z)(c,i)},l))}));i.Ts&&(w.displayName="Tag");var y=w;y.CloseButton=b,y.Label=g},17046:function(e,t,n){n.d(t,{v:function(){return S}});var r,o,a,i=n(74696),u=n(27378),l=n(409),c=n(93787),s=n(79052),d=n(29806),f=n(3692),m=n(66404),v=n(92191),p=n(85784),h=n(76831),b=n(58540),g=n(3252),w=n(82052),y=n(1163),x=n(71086);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(o||(o={})),function(e){e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem"}(a||(a={}));var E=((r={})[a.CloseMenu]=function(e){return e.menuState===o.Closed?e:(0,i.gY)({},e,{activeItemIndex:null,menuState:o.Closed})},r[a.OpenMenu]=function(e){return e.menuState===o.Open?e:(0,i.gY)({},e,{menuState:o.Open})},r[a.GoToItem]=function(e,t){var n=(0,y.d)(t,{resolveItems:function(){return e.items},resolveActiveIndex:function(){return e.activeItemIndex},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.current.disabled}});return""===e.searchQuery&&e.activeItemIndex===n?e:(0,i.gY)({},e,{searchQuery:"",activeItemIndex:n})},r[a.Search]=function(e,t){var n=e.searchQuery+t.value.toLowerCase(),r=e.items.findIndex((function(e){var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled}));return-1===r||r===e.activeItemIndex?(0,i.gY)({},e,{searchQuery:n}):(0,i.gY)({},e,{searchQuery:n,activeItemIndex:r})},r[a.ClearSearch]=function(e){return""===e.searchQuery?e:(0,i.gY)({},e,{searchQuery:""})},r[a.RegisterItem]=function(e,t){return(0,i.gY)({},e,{items:[].concat(e.items,[{id:t.id,dataRef:t.dataRef}])})},r[a.UnregisterItem]=function(e,t){var n=e.items.slice(),r=null!==e.activeItemIndex?n[e.activeItemIndex]:null,o=n.findIndex((function(e){return e.id===t.id}));return-1!==o&&n.splice(o,1),(0,i.gY)({},e,{items:n,activeItemIndex:o===e.activeItemIndex||null===r?null:n.indexOf(r)})},r),k=(0,u.createContext)(null);function R(e){var t=(0,u.useContext)(k);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+S.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,R),n}return t}function C(e,t){return(0,l.E)(t.type,E,e,t)}k.displayName="MenuContext";var I=u.Fragment;function S(e){var t,n=(0,u.useReducer)(C,{menuState:o.Closed,buttonRef:(0,u.createRef)(),itemsRef:(0,u.createRef)(),items:[],searchQuery:"",activeItemIndex:null}),r=n[0],i=r.menuState,s=r.itemsRef,d=r.buttonRef,f=n[1];(0,h.s)("mousedown",(function(e){var t,n,r,u=e.target;i===o.Open&&((null==(t=d.current)?void 0:t.contains(u))||(null==(n=s.current)?void 0:n.contains(u))||(f({type:a.CloseMenu}),(0,p.sP)(u,p.tJ.Loose)||(e.preventDefault(),null==(r=d.current)||r.focus())))}));var m=(0,u.useMemo)((function(){return{open:i===o.Open}}),[i]);return u.createElement(k.Provider,{value:n},u.createElement(b.up,{value:(0,l.E)(i,(t={},t[o.Open]=b.ZM.Open,t[o.Closed]=b.ZM.Closed,t))},(0,c.sY)({props:e,slot:m,defaultTag:I,name:"Menu"})))}var M=(0,c.yV)((function e(t,n){var r,l=R([S.name,e.name].join(".")),m=l[0],p=l[1],h=(0,s.T)(m.buttonRef,n),b="headlessui-menu-button-"+(0,v.M)(),g=(0,w.G)(),x=(0,u.useCallback)((function(e){switch(e.key){case d.R.Space:case d.R.Enter:case d.R.ArrowDown:e.preventDefault(),e.stopPropagation(),p({type:a.OpenMenu}),g.nextFrame((function(){return p({type:a.GoToItem,focus:y.T.First})}));break;case d.R.ArrowUp:e.preventDefault(),e.stopPropagation(),p({type:a.OpenMenu}),g.nextFrame((function(){return p({type:a.GoToItem,focus:y.T.Last})}))}}),[p,g]),E=(0,u.useCallback)((function(e){switch(e.key){case d.R.Space:e.preventDefault()}}),[]),k=(0,u.useCallback)((function(e){if((0,f.P)(e.currentTarget))return e.preventDefault();t.disabled||(m.menuState===o.Open?(p({type:a.CloseMenu}),g.nextFrame((function(){var e;return null==(e=m.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(e.preventDefault(),e.stopPropagation(),p({type:a.OpenMenu})))}),[p,g,m,t.disabled]),C=(0,u.useMemo)((function(){return{open:m.menuState===o.Open}}),[m]),I=t,M={ref:h,id:b,type:"button","aria-haspopup":!0,"aria-controls":null==(r=m.itemsRef.current)?void 0:r.id,"aria-expanded":t.disabled?void 0:m.menuState===o.Open,onKeyDown:x,onKeyUp:E,onClick:k};return(0,c.sY)({props:(0,i.gY)({},I,M),slot:C,defaultTag:"button",name:"Menu.Button"})})),T=c.AN.RenderStrategy|c.AN.Static,O=(0,c.yV)((function e(t,n){var r,l,f=R([S.name,e.name].join(".")),m=f[0],p=f[1],h=(0,s.T)(m.itemsRef,n),E="headlessui-menu-items-"+(0,v.M)(),k=(0,w.G)(),C=(0,b.oJ)(),I=null!==C?C===b.ZM.Open:m.menuState===o.Open;(0,u.useEffect)((function(){var e=m.itemsRef.current;e&&m.menuState===o.Open&&e!==document.activeElement&&e.focus({preventScroll:!0})}),[m.menuState,m.itemsRef]),(0,x.B)({container:m.itemsRef.current,enabled:m.menuState===o.Open,accept:function(e){return"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var M=(0,u.useCallback)((function(e){switch(k.dispose(),e.key){case d.R.Space:if(""!==m.searchQuery)return e.preventDefault(),e.stopPropagation(),p({type:a.Search,value:e.key});case d.R.Enter:if(e.preventDefault(),e.stopPropagation(),p({type:a.CloseMenu}),null!==m.activeItemIndex){var t,n=m.items[m.activeItemIndex].id;null==(t=document.getElementById(n))||t.click()}(0,g.k)().nextFrame((function(){var e;return null==(e=m.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),p({type:a.GoToItem,focus:y.T.Next});case d.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),p({type:a.GoToItem,focus:y.T.Previous});case d.R.Home:case d.R.PageUp:return e.preventDefault(),e.stopPropagation(),p({type:a.GoToItem,focus:y.T.First});case d.R.End:case d.R.PageDown:return e.preventDefault(),e.stopPropagation(),p({type:a.GoToItem,focus:y.T.Last});case d.R.Escape:e.preventDefault(),e.stopPropagation(),p({type:a.CloseMenu}),(0,g.k)().nextFrame((function(){var e;return null==(e=m.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(p({type:a.Search,value:e.key}),k.setTimeout((function(){return p({type:a.ClearSearch})}),350))}}),[p,k,m]),O=(0,u.useCallback)((function(e){switch(e.key){case d.R.Space:e.preventDefault()}}),[]),D=(0,u.useMemo)((function(){return{open:m.menuState===o.Open}}),[m]),P={"aria-activedescendant":null===m.activeItemIndex||null==(r=m.items[m.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(l=m.buttonRef.current)?void 0:l.id,id:E,onKeyDown:M,onKeyUp:O,role:"menu",tabIndex:0,ref:h},N=t;return(0,c.sY)({props:(0,i.gY)({},N,P),slot:D,defaultTag:"div",features:T,visible:I,name:"Menu.Items"})})),D=u.Fragment;S.Button=M,S.Items=O,S.Item=function e(t){var n=t.disabled,r=void 0!==n&&n,l=t.onClick,s=(0,i.gK)(t,["disabled","onClick"]),d=R([S.name,e.name].join(".")),f=d[0],p=d[1],h="headlessui-menu-item-"+(0,v.M)(),b=null!==f.activeItemIndex&&f.items[f.activeItemIndex].id===h;(0,m.e)((function(){if(f.menuState===o.Open&&b){var e=(0,g.k)();return e.nextFrame((function(){var e;return null==(e=document.getElementById(h))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})})),e.dispose}}),[h,b,f.menuState]);var w=(0,u.useRef)({disabled:r});(0,m.e)((function(){w.current.disabled=r}),[w,r]),(0,m.e)((function(){var e,t;w.current.textValue=null==(e=document.getElementById(h))||null==(t=e.textContent)?void 0:t.toLowerCase()}),[w,h]),(0,m.e)((function(){return p({type:a.RegisterItem,id:h,dataRef:w}),function(){return p({type:a.UnregisterItem,id:h})}}),[w,h]);var x=(0,u.useCallback)((function(e){return r?e.preventDefault():(p({type:a.CloseMenu}),(0,g.k)().nextFrame((function(){var e;return null==(e=f.buttonRef.current)?void 0:e.focus({preventScroll:!0})})),l?l(e):void 0)}),[p,f.buttonRef,r,l]),E=(0,u.useCallback)((function(){if(r)return p({type:a.GoToItem,focus:y.T.Nothing});p({type:a.GoToItem,focus:y.T.Specific,id:h})}),[r,h,p]),k=(0,u.useCallback)((function(){r||b||p({type:a.GoToItem,focus:y.T.Specific,id:h})}),[r,b,h,p]),C=(0,u.useCallback)((function(){r||b&&p({type:a.GoToItem,focus:y.T.Nothing})}),[r,b,p]),I=(0,u.useMemo)((function(){return{active:b,disabled:r}}),[b,r]),M={id:h,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:x,onFocus:E,onPointerMove:k,onMouseMove:k,onPointerLeave:C,onMouseLeave:C};return(0,c.sY)({props:(0,i.gY)({},s,M),slot:I,defaultTag:D,name:"Menu.Item"})}},82052:function(e,t,n){n.d(t,{G:function(){return a}});var r=n(27378),o=n(3252);function a(){var e=(0,r.useState)(o.k)[0];return(0,r.useEffect)((function(){return function(){return e.dispose()}}),[e]),e}},1163:function(e,t,n){var r;function o(e,t){var n=t.resolveItems();if(n.length<=0)return null;var o=t.resolveActiveIndex(),a=null!=o?o:-1,i=function(){switch(e.focus){case r.First:return n.findIndex((function(e){return!t.resolveDisabled(e)}));case r.Previous:var o=n.slice().reverse().findIndex((function(e,n,r){return!(-1!==a&&r.length-n-1>=a)&&!t.resolveDisabled(e)}));return-1===o?o:n.length-1-o;case r.Next:return n.findIndex((function(e,n){return!(n<=a)&&!t.resolveDisabled(e)}));case r.Last:var i=n.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===i?i:n.length-1-i;case r.Specific:return n.findIndex((function(n){return t.resolveId(n)===e.id}));case r.Nothing:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===i?o:i}n.d(t,{T:function(){return r},d:function(){return o}}),function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(r||(r={}))},46718:function(e,t,n){function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return r}})},2386:function(e,t,n){n.d(t,{B:function(){return i}});var r=n(70409),o=n(9111),a=n(27378);function i(){const e=a.createContext({}),t=a.forwardRef(((t,n)=>{const{children:i}=t,u=a.useRef(null),l=(0,o.e)(n,u),c=a.useRef(new Map).current;return a.createElement(e.Provider,{value:a.useMemo((()=>({itemMap:c,collectionRef:u})),[c])},a.createElement(r.g7,{ref:l},i))})),n="data-radix-collection-item";return[t,a.forwardRef(((t,i)=>{const{children:u,...l}=t,c=a.useRef(null),s=(0,o.e)(i,c),d=a.useContext(e);return a.useEffect((()=>(d.itemMap.set(c,{ref:c,...l}),()=>{d.itemMap.delete(c)}))),a.createElement(r.g7,{[n]:"",ref:s},u)})),function(){const t=a.useContext(e);return{getItems(){const e=Array.from(t.collectionRef.current.querySelectorAll(`[${n}]`));return Array.from(t.itemMap.values()).sort(((t,n)=>e.indexOf(t.ref.current)-e.indexOf(n.ref.current)))}}}]}},9111:function(e,t,n){n.d(t,{F:function(){return o},e:function(){return a}});var r=n(27378);function o(...e){return t=>e.forEach((e=>function(e,t){"function"==typeof e?e(t):null!=e&&(e.current=t)}(e,t)))}function a(...e){return r.useCallback(o(...e),e)}},58560:function(e,t,n){n.d(t,{k:function(){return o}});var r=n(27378);function o(e){const t=r.createContext(null);function n(e){const{children:n,...o}=e,a=r.useMemo((()=>o),Object.values(o));return r.createElement(t.Provider,{value:a},n)}return n.displayName=e+"Provider",[n,function(n){const o=r.useContext(t);if(null===o)throw new Error(`\`${n}\` must be used within \`${e}\``);return o}]}},33919:function(e,t,n){n.d(t,{WV:function(){return i},rG:function(){return u}});var r=n(27378),o=n(25773);const a="div",i=r.forwardRef(((e,t)=>{const{as:n=a,...i}=e;return r.createElement(n,(0,o.Z)({},i,{ref:t}))}));function u(e,t){const n=r.forwardRef(((n,a)=>{const i=e,u={...t.defaultProps,...n};return r.createElement(i,(0,o.Z)({},u,{ref:a}))}));return n.displayName=t.displayName||"Extended"+e.displayName,n}},65296:function(e,t,n){n.d(t,{Sq:function(){return y},e5:function(){return k}});var r=n(25425),o=n(29064),a=n(33919),i=n(32420),u=n(58560),l=n(9111),c=n(2386),s=n(46718),d=n(27378),f=n(25773);const m={bubbles:!1,cancelable:!0},[v,p,h]=(0,c.B)(),b="span",[g,w]=(0,u.k)("RovingFocusGroup"),y=d.forwardRef(((e,t)=>d.createElement(v,null,d.createElement(x,(0,f.Z)({},e,{ref:t}))))),x=d.forwardRef(((e,t)=>{const{as:n=b,orientation:i,dir:u="ltr",loop:c=!1,currentTabStopId:v,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:w,onEntryFocus:y,...x}=e,E=d.useRef(null),k=(0,l.e)(t,E),[R=null,I]=(0,r.T)({prop:v,defaultProp:p,onChange:w}),[S,M]=d.useState(!1),T=(0,o.W)(y),{getItems:O}=h(),D=d.useRef(!1);return d.useEffect((()=>{const e=E.current;if(e)return e.addEventListener("rovingFocusGroup.onEntryFocus",T),()=>e.removeEventListener("rovingFocusGroup.onEntryFocus",T)}),[T]),d.createElement(g,{orientation:i,dir:u,loop:c,currentTabStopId:R,onItemFocus:d.useCallback((e=>I(e)),[I]),onItemShiftTab:d.useCallback((()=>M(!0)),[])},d.createElement(a.WV,(0,f.Z)({tabIndex:S?-1:0,"aria-orientation":i,"data-orientation":i},x,{as:n,ref:k,style:{outline:"none",...e.style},onMouseDown:(0,s.M)(e.onMouseDown,(()=>{D.current=!0})),onFocus:(0,s.M)(e.onFocus,(e=>{const t=!D.current;if(e.target===e.currentTarget&&t&&!S){const t=new Event("rovingFocusGroup.onEntryFocus",m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){const e=O().filter((e=>e.focusable));C([e.find((e=>e.active)),e.find((e=>e.id===R)),...e].filter(Boolean).map((e=>e.ref.current)))}}D.current=!1})),onBlur:(0,s.M)(e.onBlur,(()=>M(!1)))})))})),E="span",k=d.forwardRef(((e,t)=>{const{as:n=E,focusable:r=!0,active:o=!1,...u}=e,l=(0,i.M)(),c=w("RovingFocusItem"),m=c.currentTabStopId===l,{getItems:v}=h();return d.createElement(p,{id:l,focusable:r,active:o},d.createElement(a.WV,(0,f.Z)({tabIndex:m?0:-1,"data-orientation":c.orientation},u,{as:n,ref:t,onMouseDown:(0,s.M)(e.onMouseDown,(e=>{r?c.onItemFocus(l):e.preventDefault()})),onFocus:(0,s.M)(e.onFocus,(()=>c.onItemFocus(l))),onKeyDown:(0,s.M)(e.onKeyDown,(e=>{if("Tab"===e.key&&e.shiftKey)return void c.onItemShiftTab();if(e.target!==e.currentTarget)return;const t=function(e,t,n){const r=function(e,t){return"rtl"!==t?e:"ArrowLeft"===e?"ArrowRight":"ArrowRight"===e?"ArrowLeft":e}(e.key,n);return"vertical"===t&&["ArrowLeft","ArrowRight"].includes(r)||"horizontal"===t&&["ArrowUp","ArrowDown"].includes(r)?void 0:R[r]}(e,c.orientation,c.dir);if(void 0!==t){e.preventDefault();let o=v().filter((e=>e.focusable)).map((e=>e.ref.current));if("last"===t)o.reverse();else if("prev"===t||"next"===t){"prev"===t&&o.reverse();const a=o.indexOf(e.currentTarget);o=c.loop?(r=a+1,(n=o).map(((e,t)=>n[(r+t)%n.length]))):o.slice(a+1)}setTimeout((()=>C(o)))}var n,r}))})))})),R={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function C(e){const t=document.activeElement;for(const n of e){if(n===t)return;if(n.focus(),document.activeElement!==t)return}}},2931:function(e,t,n){n.r(t),n.d(t,{Range:function(){return B},Root:function(){return j},Slider:function(){return k},SliderRange:function(){return D},SliderThumb:function(){return N},SliderTrack:function(){return T},Thumb:function(){return V},Track:function(){return z}});var r=n(81307),o=n(33919),a=n(16937),i=n(43871),u=n(13443),l=n(25425),c=n(58560),s=n(9111),d=n(46718);var f=n(27378),m=n(25773);const v=["PageUp","PageDown"],p=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],h={ltr:["ArrowDown","Home","ArrowLeft","PageDown"],rtl:["ArrowDown","Home","ArrowRight","PageDown"]},[b,g]=function(e){const[t,n]=(0,c.k)(e+"CollectionItems");function o({children:e}){const[n,o]=f.useState([]),a=f.useRef(0),i=f.useCallback((e=>{o((t=>t.find((({ref:t})=>e.ref.current===t.current))?t:[...t,e]))}),[o]),u=f.useCallback((e=>{o((t=>t.filter((t=>e.current!==t.ref.current))))}),[o]);return(0,r.b)((()=>{o([])}),[e]),a.current=0,f.createElement(t,{items:n,onItemAdd:i,onItemRemove:u,ssrSyncUseCollectionItemCountRef:a},e)}return[function(t){function n(e){return f.createElement(o,null,f.createElement(t,e))}return n.displayName=e+"CollectionComponent",n},function(e){const t=f.useRef(null),{items:o,onItemAdd:a,onItemRemove:i,ssrSyncUseCollectionItemCountRef:u}=n("useCollectionItem"),l=o.findIndex((e=>t.current===e.ref.current)),c=-1!==l?l:u.current;return u.current=u.current+1,(0,r.b)((()=>{a({...e,ref:t})})),(0,r.b)((()=>()=>i(t)),[t,i]),{ref:t,index:c}},function(){return n("useCollectionItems").items}]}("Slider"),w=b((e=>f.createElement(f.Fragment,null,e.children))),y="span",[x,E]=(0,c.k)("Slider"),k=f.forwardRef(((e,t)=>{const{name:n,min:r=0,max:o=100,step:a=1,orientation:i="horizontal",disabled:u=!1,minStepsBetweenThumbs:c=0,defaultValue:d=[r],value:h,onValueChange:b=(()=>{}),...g}=e,[y,E]=f.useState(null),k=(0,s.e)(t,(e=>E(e))),R=f.useRef(new Set),S=f.useRef(0),M="horizontal"===i,T=!y||Boolean(y.closest("form")),O=M?C:I,[D=[],P]=(0,l.T)({prop:h,defaultProp:d,onChange:e=>{var t;null===(t=[...R.current][S.current])||void 0===t||t.focus(),b(e)}});function N(e,t){const n=function(e){return(String(e).split(".")[1]||"").length}(a),i=function(e,[t,n]){return Math.min(n,Math.max(t,e))}(function(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}(Math.round((e-r)/a)*a+r,n),[r,o]);P(((e=[])=>{const n=function(e=[],t,n){const r=[...e];return r[n]=t,r.sort(((e,t)=>e-t))}(e,i,t);return function(e,t){if(t>0){const n=function(e){return e.slice(0,-1).map(((t,n)=>e[n+1]-t))}(e);return Math.min(...n)>=t}return!0}(n,c*a)?(S.current=n.indexOf(i),String(n)===String(e)?e:n):e}))}return f.createElement(x,{disabled:u,min:r,max:o,valueIndexToChangeRef:S,thumbs:R.current,values:D,orientation:i},f.createElement(w,null,f.createElement(O,(0,m.Z)({"aria-disabled":u,"data-disabled":u?"":void 0},g,{ref:k,min:r,max:o,onSlideStart:u?void 0:function(e){N(e,function(e,t){if(1===e.length)return 0;const n=e.map((e=>Math.abs(e-t))),r=Math.min(...n);return n.indexOf(r)}(D,e))},onSlideMove:u?void 0:function(e){N(e,S.current)},onHomeKeyDown:()=>!u&&N(r,0),onEndKeyDown:()=>!u&&N(o,D.length-1),onStepKeyDown:({event:e,direction:t})=>{if(!u){const n=v.includes(e.key)||e.shiftKey&&p.includes(e.key)?10:1,r=S.current;N(D[r]+a*n*t,r)}}})),T&&D.map(((e,t)=>f.createElement(A,{key:t,name:n?n+(D.length>1?"[]":""):void 0,value:e})))))})),R=f.createContext({}),C=f.forwardRef(((e,t)=>{const{min:n,max:r,dir:o,onSlideStart:a,onSlideMove:i,onStepKeyDown:l,...c}=e,[d,v]=f.useState(null),p=(0,s.e)(t,(e=>v(e))),b=f.useRef(),g=(0,u.g)(d,o),w="ltr"===g;function y(e){const t=b.current||d.getBoundingClientRect(),o=Z([0,t.width],w?[n,r]:[r,n]);return b.current=t,o(e-t.left)}return f.createElement(R.Provider,{value:f.useMemo((()=>({startEdge:w?"left":"right",endEdge:w?"right":"left",direction:w?1:-1,size:"width"})),[w])},f.createElement(S,(0,m.Z)({"data-orientation":"horizontal"},c,{ref:p,style:{...c.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{const t=y(e.clientX);null==a||a(t)},onSlideMove:e=>{const t=y(e.clientX);null==i||i(t)},onSlideEnd:()=>b.current=void 0,onStepKeyDown:e=>{const t=h[g].includes(e.key);null==l||l({event:e,direction:t?-1:1})}})))})),I=f.forwardRef(((e,t)=>{const{min:n,max:r,onSlideStart:o,onSlideMove:a,onStepKeyDown:i,...u}=e,l=f.useRef(null),c=(0,s.e)(t,l),d=f.useRef();function v(e){const t=d.current||l.current.getBoundingClientRect(),o=Z([0,t.height],[r,n]);return d.current=t,o(e-t.top)}return f.createElement(R.Provider,{value:f.useMemo((()=>({startEdge:"bottom",endEdge:"top",size:"height",direction:1})),[])},f.createElement(S,(0,m.Z)({"data-orientation":"vertical"},u,{ref:c,style:{...u.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{const t=v(e.clientY);null==o||o(t)},onSlideMove:e=>{const t=v(e.clientY);null==a||a(t)},onSlideEnd:()=>d.current=void 0,onStepKeyDown:e=>{const t=h.ltr.includes(e.key);null==i||i({event:e,direction:t?-1:1})}})))})),S=f.forwardRef(((e,t)=>{const{as:n=y,onSlideStart:r,onSlideMove:a,onSlideEnd:i,onHomeKeyDown:u,onEndKeyDown:l,onStepKeyDown:c,...s}=e,h=E("Slider");return f.createElement(o.WV,(0,m.Z)({},s,{as:n,ref:t,onKeyDown:(0,d.M)(e.onKeyDown,(e=>{"Home"===e.key?u(e):"End"===e.key?l(e):v.concat(p).includes(e.key)&&(c(e),e.preventDefault())})),onPointerDown:(0,d.M)(e.onPointerDown,(e=>{const t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),h.thumbs.has(t)?t.focus():r(e)})),onPointerMove:(0,d.M)(e.onPointerMove,(e=>{e.target.hasPointerCapture(e.pointerId)&&a(e)})),onPointerUp:(0,d.M)(e.onPointerUp,(e=>{const t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),i(e))}))}))})),M="span",T=f.forwardRef(((e,t)=>{const{as:n=M,...r}=e,a=E("SliderTrack");return f.createElement(o.WV,(0,m.Z)({"data-disabled":a.disabled?"":void 0,"data-orientation":a.orientation},r,{as:n,ref:t}))})),O="span",D=f.forwardRef(((e,t)=>{const{as:n=O,...r}=e,a=E("SliderRange"),i=f.useContext(R),u=f.useRef(null),l=(0,s.e)(t,u),c=a.values.length,d=a.values.map((e=>L(e,a.min,a.max))),v=c>1?Math.min(...d):0,p=100-Math.max(...d);return f.createElement(o.WV,(0,m.Z)({"data-orientation":a.orientation,"data-disabled":a.disabled?"":void 0},r,{as:n,ref:l,style:{...e.style,[i.startEdge]:v+"%",[i.endEdge]:p+"%"}}))})),P="span",N=f.forwardRef(((e,t)=>{const{ref:n,index:r}=g(),o=(0,s.e)(t,n),a=E("SliderThumb").values[r];return void 0!==a?f.createElement(F,(0,m.Z)({},e,{ref:o,index:r,value:a})):null})),F=f.forwardRef(((e,t)=>{const{as:n=P,index:r,value:i,...u}=e,l=E("SliderThumb"),c=f.useContext(R),[v,p]=f.useState(null),h=(0,s.e)(t,(e=>p(e))),b=(0,a.t)(v),g=L(i,l.min,l.max),w=function(e,t){return t>2?`Value ${e+1} of ${t}`:2===t?["Minimum","Maximum"][e]:void 0}(r,l.values.length),y=null==b?void 0:b[c.size],x=y?function(e,t,n){const r=e/2;return(r-Z([0,50],[0,r])(t)*n)*n}(y,g,c.direction):0;return f.useEffect((()=>{if(v)return l.thumbs.add(v),()=>{l.thumbs.delete(v)}}),[v,l.thumbs]),f.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[c.startEdge]:`calc(${g}% + ${x}px)`}},f.createElement(o.WV,(0,m.Z)({role:"slider","aria-label":e["aria-label"]||w,"aria-valuemin":l.min,"aria-valuenow":i,"aria-valuemax":l.max,"aria-orientation":l.orientation,"data-orientation":l.orientation,"data-disabled":l.disabled?"":void 0,tabIndex:0},u,{as:n,ref:h,onFocus:(0,d.M)(e.onFocus,(()=>{l.valueIndexToChangeRef.current=r}))})))})),A=e=>{const{value:t,...n}=e,r=f.useRef(null),o=(0,i.D)(t);return f.useEffect((()=>{const e=r.current,n=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(n,"value").set;if(o!==t&&a){const n=new Event("input",{bubbles:!0});a.call(e,t),e.dispatchEvent(n)}}),[o,t]),f.createElement("input",(0,m.Z)({style:{display:"none"}},n,{ref:r,defaultValue:t}))};function L(e,t,n){return 100/(n-t)*(e-t)}function Z(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}const j=k,z=T,B=D,V=N},70409:function(e,t,n){n.d(t,{g7:function(){return i},A4:function(){return l}});var r=n(9111),o=n(27378),a=n(25773);const i=o.forwardRef(((e,t)=>{const{children:n,...r}=e;return 1===o.Children.count(n)?o.createElement(u,(0,a.Z)({},r,{ref:t}),n):o.createElement(o.Fragment,null,o.Children.map(n,(e=>o.isValidElement(e)&&e.type===l?o.createElement(u,(0,a.Z)({},r,{ref:t}),e.props.children):e)))}));i.displayName="Slot";const u=o.forwardRef(((e,t)=>{const{children:n,...a}=e,i=o.Children.only(n);return o.isValidElement(i)?o.cloneElement(i,{...c(a,i.props),ref:(0,r.F)(t,i.ref)}):null}));u.displayName="SlotClone";const l=({children:e})=>e;function c(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?n[r]=s(a,o):"style"===r&&(n[r]={...o,...a})}return{...e,...n}}function s(e,t){return function(...n){null==e||e(...n),n[0]instanceof Event&&n[0].defaultPrevented||null==t||t(...n)}}},47912:function(e,t,n){n.r(t),n.d(t,{Tabs:function(){return v},TabsList:function(){return h},TabsTrigger:function(){return g},TabsContent:function(){return w},Root:function(){return E},List:function(){return k},Trigger:function(){return R},Content:function(){return C}});var r=n(32420),o=n(65296),a=n(33919),i=n(25425),u=n(29064),l=n(58560),c=n(46718),s=n(27378),d=n(25773);const[f,m]=(0,l.k)("Tabs"),v=s.forwardRef(((e,t)=>{const{value:n,onValueChange:o,defaultValue:u,orientation:l="horizontal",dir:c="ltr",activationMode:m="automatic",...v}=e,[p,h]=(0,i.T)({prop:n,onChange:o,defaultProp:u});return s.createElement(f,{baseId:(0,r.M)(),value:p,onValueChange:h,orientation:l,dir:c,activationMode:m},s.createElement(a.WV,(0,d.Z)({"data-orientation":l},v,{ref:t})))})),p="div",h=s.forwardRef(((e,t)=>{const{as:n=p,loop:r=!0,...a}=e,i=m("TabsList");return s.createElement(o.Sq,(0,d.Z)({role:"tablist",orientation:i.orientation,dir:i.dir,loop:r},a,{as:n,ref:t}))})),b="div",g=s.forwardRef(((e,t)=>{const{as:n=b,value:r,disabled:a=!1,...i}=e,l=m("TabsTrigger"),f=y(l.baseId,r),v=x(l.baseId,r),p=r===l.value,h=(0,u.W)((()=>l.onValueChange(r)));return s.createElement(o.e5,(0,d.Z)({role:"tab","aria-selected":p,"aria-controls":v,"aria-disabled":a||void 0,"data-state":p?"active":"inactive","data-disabled":a?"":void 0,id:f},i,{focusable:!a,active:p,as:n,ref:t,onKeyDown:(0,c.M)(e.onKeyDown,(e=>{a||" "!==e.key&&"Enter"!==e.key||h()})),onMouseDown:(0,c.M)(e.onMouseDown,(e=>{a||0!==e.button||!1!==e.ctrlKey||h()})),onFocus:(0,c.M)(e.onFocus,(()=>{const e="manual"!==l.activationMode;p||a||!e||h()}))}))})),w=s.forwardRef(((e,t)=>{const{value:n,...r}=e,o=m("TabsContent"),i=y(o.baseId,n),u=x(o.baseId,n),l=n===o.value;return s.createElement(a.WV,(0,d.Z)({"data-state":l?"active":"inactive","data-orientation":o.orientation,role:"tabpanel","aria-labelledby":i,hidden:!l,id:u,tabIndex:0},r,{ref:t}))}));function y(e,t){return`${e}-trigger-${t}`}function x(e,t){return`${e}-content-${t}`}const E=v,k=h,R=g,C=w},29064:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(27378);function o(e){const t=r.useRef(e);return r.useEffect((()=>{t.current=e})),r.useCallback(((...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)}),[])}},25425:function(e,t,n){n.d(t,{T:function(){return a}});var r=n(29064),o=n(27378);function a({prop:e,defaultProp:t,onChange:n=(()=>{})}){const[a,i]=function({defaultProp:e,onChange:t}){const n=o.useState(e),[a]=n,i=o.useRef(a),u=(0,r.W)(t);return o.useEffect((()=>{i.current!==a&&(u(a),i.current=a)}),[a,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,l=u?e:a,c=(0,r.W)(n);return[l,o.useCallback((t=>{if(u){const n=t,r="function"==typeof t?n(e):t;r!==e&&c(r)}else i(t)}),[u,e,i,c])]}},13443:function(e,t,n){n.d(t,{g:function(){return o}});var r=n(27378);function o(e,t){const[n,o]=r.useState("ltr"),[a,i]=r.useState(),u=r.useRef(0);return r.useEffect((()=>{if(void 0===t&&null!=e&&e.parentElement){const t=getComputedStyle(e.parentElement);i(t)}}),[e,t]),r.useEffect((()=>(void 0===t&&function e(){u.current=requestAnimationFrame((()=>{const t=null==a?void 0:a.direction;t&&o(t),e()}))}(),()=>cancelAnimationFrame(u.current))),[a,t,o]),t||n}},81307:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(27378);const o=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},43871:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(27378);function o(e){const t=r.useRef(e);return r.useEffect((()=>{t.current=e}),[e]),t.current}},16937:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(27378);function o(e){const[t,n]=r.useState(void 0);return r.useEffect((()=>{if(e){const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let o,a;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,a=t.blockSize}else{const t=e.getBoundingClientRect();o=t.width,a=t.height}n({width:o,height:a})}));return t.observe(e,{box:"border-box"}),()=>{n(void 0),t.unobserve(e)}}}),[e]),t}},30763:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(27378);function o(e){var{src:t,srcSet:n,onLoad:o,onError:a,crossOrigin:i,sizes:u,ignoreFallback:l}=e,[c,s]=(0,r.useState)("pending");(0,r.useEffect)((()=>{s(t?"loading":"pending")}),[t]);var d=(0,r.useRef)(),f=(0,r.useCallback)((()=>{if(t){m();var e=new Image;e.src=t,i&&(e.crossOrigin=i),n&&(e.srcset=n),u&&(e.sizes=u),e.onload=e=>{m(),s("loaded"),null==o||o(e)},e.onerror=e=>{m(),s("failed"),null==a||a(e)},d.current=e}}),[t,i,n,u,o,a]),m=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,r.useEffect)((()=>{if(!l)return"loading"===c&&f(),()=>{m()}}),[c,f,l]),l?"loaded":c}},41353:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}))}));t.Z=o},29589:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}))}));t.Z=o},55972:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}))}));t.Z=o},51564:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"}))}));t.Z=o},69552:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))}));t.Z=o},9857:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}))}));t.Z=o},26340:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}))}));t.Z=o},18544:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}))}));t.Z=o},79961:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}))}));t.Z=o},24700:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))}));t.Z=o},64968:function(e,t,n){var r=n(27378);const o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));t.Z=o}}]);