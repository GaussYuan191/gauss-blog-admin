var C=Object.defineProperty;var w=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(a,t,r)=>t in a?C(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,b=(a,t)=>{for(var r in t||(t={}))N.call(t,r)&&x(a,r,t[r]);if(w)for(var r of w(t))k.call(t,r)&&x(a,r,t[r]);return a};import{r as v,j as n,a as V}from"./index.1e18674b.js";import{u as L,a as _}from"./useRequest.bbe0d0ea.js";import{u as A}from"./index.0c3edb1e.js";import{i as y,a as U,u as E}from"./index.32603921.js";import{I as F,B as M,s as $,l as j}from"./api.17a0994e.js";import{F as f}from"./index.1b24225f.js";import{C as D}from"./index.33f87458.js";import{A as z,_ as p}from"./index.aef76a23.js";import{C as J}from"./index.f3179481.js";import"./index.ac3dbe7f.js";import"./styleChecker.0a04cfc8.js";import"./col.c122cecb.js";import"./index.dd62996c.js";import"./Overflow.d99eac34.js";import"./Dropdown.51364922.js";import"./index.800a318d.js";var R=!!(typeof window!="undefined"&&window.document&&window.document.createElement),T=R,q=globalThis&&globalThis.__read||function(a,t){var r=typeof Symbol=="function"&&a[Symbol.iterator];if(!r)return a;var e=r.call(a),i,s=[],l;try{for(;(t===void 0||t-- >0)&&!(i=e.next()).done;)s.push(i.value)}catch(d){l={error:d}}finally{try{i&&!i.done&&(r=e.return)&&r.call(e)}finally{if(l)throw l.error}}return s};function H(a){function t(r,e){var i;try{i=a()}catch(c){console.error(c)}var s=function(u){return e!=null&&e.serializer?e==null?void 0:e.serializer(u):JSON.stringify(u)},l=function(u){return e!=null&&e.deserializer?e==null?void 0:e.deserializer(u):JSON.parse(u)};function d(){try{var c=i==null?void 0:i.getItem(r);if(c)return l(c)}catch(u){console.error(u)}return y(e==null?void 0:e.defaultValue)?e==null?void 0:e.defaultValue():e==null?void 0:e.defaultValue}var o=q(v.exports.useState(function(){return d()}),2),g=o[0],h=o[1];A(function(){h(d())},[r]);var m=function(u){var S=y(u)?u(g):u;if(h(S),U(S))i==null||i.removeItem(r);else try{i==null||i.setItem(r,s(S))}catch(I){console.error(I)}};return[g,L(m)]}return t}var P=H(function(){return T?localStorage:void 0}),G=P,K={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},Q=K,O=function(t,r){return v.exports.createElement(z,p(p({},t),{},{ref:r,icon:Q}))};O.displayName="LockOutlined";var W=v.exports.forwardRef(O),X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},Y=X,B=function(t,r){return v.exports.createElement(z,p(p({},t),{},{ref:r,icon:Y}))};B.displayName="UserOutlined";var Z=v.exports.forwardRef(B);const pe=a=>{const[t,r]=G("remember",{defaultValue:!1}),[e]=f.useForm(),i=o=>new Promise(async(g,h)=>{const{data:m}=await j(o);m.code&&m.code==1?g(m.result):h(m)}),{run:s}=_(i,{manual:!0,onSuccess:o=>{$(o),a.history.push("/home")},onError:o=>{console.log(o.message)}}),l=o=>{t&&window.localStorage.setItem("userInfo",JSON.stringify(o)),s(o)},d=o=>{r(o.target.checked)};return E(()=>{if(t){const o=JSON.parse(window.localStorage.getItem("userInfo")||"{}");e.setFieldsValue(b({},o))}}),n("div",{id:"login",children:n("div",{className:"content",children:n(D,{className:"login-card",hoverable:!0,title:"\u535A\u5BA2\u7BA1\u7406\u7CFB\u7EDF\u540E\u7AEF",headStyle:{textAlign:"center",fontSize:18},children:V(f,{form:e,className:"login-form",initialValues:{remember:t},onFinish:l,children:[n(f.Item,{name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}],children:n(F,{prefix:n(Z,{className:"site-form-item-icon"}),allowClear:!0,placeholder:"\u7528\u6237\u540D"})}),n(f.Item,{name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],children:n(F,{prefix:n(W,{className:"site-form-item-icon"}),type:"password",allowClear:!0,placeholder:"\u5BC6\u7801"})}),n(f.Item,{children:n(J,{onChange:d,checked:t,children:"\u4FDD\u6301\u767B\u5F55"})}),n(f.Item,{children:n(M,{type:"primary",htmlType:"submit",className:"login-form-button",children:"\u767B\u5F55"})})]})})})})};export{pe as default};
