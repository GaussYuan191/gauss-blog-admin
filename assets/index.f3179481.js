import{ad as ae,ae as ie,af as oe,v as K,C as U,a as F,o as se,c as M,b as E,d as z}from"./index.aef76a23.js";import{r as s,_ as L}from"./index.1e18674b.js";import{C as le}from"./index.800a318d.js";import{b as ue}from"./api.17a0994e.js";var ce=ae,fe=function(){return ce.Date.now()},de=fe,ve=/\s/;function me(e){for(var r=e.length;r--&&ve.test(e.charAt(r)););return r}var pe=me,xe=pe,be=/^\s+/;function ge(e){return e&&e.slice(0,xe(e)+1).replace(be,"")}var Ce=ge,he=ie,ye=oe,Oe="[object Symbol]";function ke(e){return typeof e=="symbol"||ye(e)&&he(e)==Oe}var Ie=ke,Ee=Ce,H=K,Te=Ie,X=0/0,_e=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,Ne=parseInt;function Pe(e){if(typeof e=="number")return e;if(Te(e))return X;if(H(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=H(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Ee(e);var o=$e.test(e);return o||Se.test(e)?Ne(e.slice(2),o?2:8):_e.test(e)?X:+e}var Ve=Pe,je=K,R=de,D=Ve,we="Expected a function",Ge=Math.max,Re=Math.min;function Me(e,r,o){var t,a,b,d,c,v,g=0,O=!1,f=!1,C=!0;if(typeof e!="function")throw new TypeError(we);r=D(r)||0,je(o)&&(O=!!o.leading,f="maxWait"in o,b=f?Ge(D(o.maxWait)||0,r):b,C="trailing"in o?!!o.trailing:C);function k(n){var l=t,y=a;return t=a=void 0,g=n,d=e.apply(y,l),d}function u(n){return g=n,c=setTimeout(x,r),O?k(n):d}function T(n){var l=n-v,y=n-g,$=r-l;return f?Re($,b-y):$}function I(n){var l=n-v,y=n-g;return v===void 0||l>=r||l<0||f&&y>=b}function x(){var n=R();if(I(n))return i(n);c=setTimeout(x,T(n))}function i(n){return c=void 0,C&&t?k(n):(t=a=void 0,d)}function P(){c!==void 0&&clearTimeout(c),g=0,t=v=a=c=void 0}function _(){return c===void 0?d:i(R())}function h(){var n=R(),l=I(n);if(t=arguments,a=this,v=n,l){if(c===void 0)return u(v);if(f)return clearTimeout(c),c=setTimeout(x,r),k(v)}return c===void 0&&(c=setTimeout(x,r)),d}return h.cancel=P,h.flush=_,h}var Ue=Me,Le=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o},q=s.exports.createContext(null),Ae=function(r,o){var t=r.defaultValue,a=r.children,b=r.options,d=b===void 0?[]:b,c=r.prefixCls,v=r.className,g=r.style,O=r.onChange,f=Le(r,["defaultValue","children","options","prefixCls","className","style","onChange"]),C=s.exports.useContext(U),k=C.getPrefixCls,u=C.direction,T=s.exports.useState(f.value||t||[]),I=F(T,2),x=I[0],i=I[1],P=s.exports.useState([]),_=F(P,2),h=_[0],n=_[1];s.exports.useEffect(function(){"value"in f&&i(f.value||[])},[f.value]);var l=function(){return d.map(function(p){return typeof p=="string"||typeof p=="number"?{label:p,value:p}:p})},y=function(p){n(function(S){return S.filter(function(N){return N!==p})})},$=function(p){n(function(S){return[].concat(z(S),[p])})},V=function(p){var S=x.indexOf(p.value),N=z(x);S===-1?N.push(p.value):N.splice(S,1),"value"in f||i(N);var B=l();O==null||O(N.filter(function(w){return h.indexOf(w)!==-1}).sort(function(w,re){var te=B.findIndex(function(G){return G.value===w}),ne=B.findIndex(function(G){return G.value===re});return te-ne}))},W=k("checkbox",c),j="".concat(W,"-group"),Y=se(f,["value","disabled"]);d&&d.length>0&&(a=l().map(function(m){return s.exports.createElement(Q,{prefixCls:W,key:m.value.toString(),disabled:"disabled"in m?m.disabled:f.disabled,value:m.value,checked:x.indexOf(m.value)!==-1,onChange:m.onChange,className:"".concat(j,"-item"),style:m.style},m.label)}));var Z={toggleOption:V,value:x,disabled:f.disabled,name:f.name,registerValue:$,cancelValue:y},ee=M(j,E({},"".concat(j,"-rtl"),u==="rtl"),v);return s.exports.createElement("div",L({className:ee,style:g},Y,{ref:o}),s.exports.createElement(q.Provider,{value:Z},a))},We=s.exports.forwardRef(Ae),Be=s.exports.memo(We),Fe=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o},ze=function(r,o){var t,a=r.prefixCls,b=r.className,d=r.children,c=r.indeterminate,v=c===void 0?!1:c,g=r.style,O=r.onMouseEnter,f=r.onMouseLeave,C=r.skipGroup,k=C===void 0?!1:C,u=Fe(r,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),T=s.exports.useContext(U),I=T.getPrefixCls,x=T.direction,i=s.exports.useContext(q),P=s.exports.useContext(ue),_=P.isFormItemInput,h=s.exports.useRef(u.value);s.exports.useEffect(function(){i==null||i.registerValue(u.value)},[]),s.exports.useEffect(function(){if(!k)return u.value!==h.current&&(i==null||i.cancelValue(h.current),i==null||i.registerValue(u.value),h.current=u.value),function(){return i==null?void 0:i.cancelValue(u.value)}},[u.value]);var n=I("checkbox",a),l=L({},u);i&&!k&&(l.onChange=function(){u.onChange&&u.onChange.apply(u,arguments),i.toggleOption&&i.toggleOption({label:d,value:u.value})},l.name=i.name,l.checked=i.value.indexOf(u.value)!==-1,l.disabled=u.disabled||i.disabled);var y=M((t={},E(t,"".concat(n,"-wrapper"),!0),E(t,"".concat(n,"-rtl"),x==="rtl"),E(t,"".concat(n,"-wrapper-checked"),l.checked),E(t,"".concat(n,"-wrapper-disabled"),l.disabled),E(t,"".concat(n,"-wrapper-in-form-item"),_),t),b),$=M(E({},"".concat(n,"-indeterminate"),v)),V=v?"mixed":void 0;return s.exports.createElement("label",{className:y,style:g,onMouseEnter:O,onMouseLeave:f},s.exports.createElement(le,L({"aria-checked":V},l,{prefixCls:n,className:$,ref:o})),d!==void 0&&s.exports.createElement("span",null,d))},J=s.exports.forwardRef(ze);J.displayName="Checkbox";var Q=J,A=Q;A.Group=Be;A.__ANT_CHECKBOX=!0;var qe=A;export{qe as C,Ue as d};
