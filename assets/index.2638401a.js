var E=Object.defineProperty,A=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(t,e,i)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,h=(t,e)=>{for(var i in e||(e={}))j.call(e,i)&&w(t,i,e[i]);if(b)for(var i of b(e))S.call(e,i)&&w(t,i,e[i]);return t},p=(t,e)=>A(t,F(e));import{j as a,a as B,F as g,r as y}from"./index.1e18674b.js";import{P as T}from"./page-layout.ad34ff44.js";import{B as x,y as H,z as K,A as P,I as _}from"./api.17a0994e.js";import{D as C,T as z}from"./Table.991498cd.js";import{ag as I}from"./index.aef76a23.js";import"./index.d09e3fac.js";import"./index.ac3dbe7f.js";import"./styleChecker.0a04cfc8.js";import"./index.f3179481.js";import"./index.800a318d.js";import"./index.7904e80b.js";import"./index.dd62996c.js";import"./Overflow.d99eac34.js";import"./index.0958ac02.js";import"./Dropdown.51364922.js";import"./index.057e14fb.js";const N=[{title:"#",width:50,key:"tindex",render:(t,e,i)=>a("span",{children:i})},{title:"\u7559\u8A00\u5185\u5BB9",dataIndex:"content",width:300,key:"content"},{title:"ip\u5730\u5740",key:"ip",dataIndex:"ip",width:200},{title:"\u7559\u8A00\u90AE\u7BB1",key:"author.email",dataIndex:"author.email",width:200,render:(t,e)=>a("span",{children:e.author.email})},{title:"web\u5730\u5740",key:"author.site",dataIndex:"author.site",width:300,render:(t,e)=>a("span",{children:e.author.site})},{title:"\u72B6\u6001",key:"state",dataIndex:"state",editable:!0,width:100},{title:"\u7F16\u8F91",key:"operation",dataIndex:"operation",width:100}];function L(t){const{editing:e,rowIndex:i,record:r}=t;return a("div",{className:"btnbox",children:e?B(g,{children:[a(x,{type:"link",onClick:()=>t.cancel(),children:"\u53D6\u6D88"}),a(C,{type:"vertical"}),a(x,{type:"link",onClick:()=>t.save(r),children:"\u4FDD\u5B58"})]}):B(g,{children:[a(x,{type:"link",onClick:()=>t.edit(i),children:"\u4FEE\u6539"}),a(C,{type:"vertical"}),a(x,{type:"link",onClick:()=>t.del(r),children:"\u5220\u9664"})]})})}const c={};function O(t){const{editing:e,children:i,col:r,rowIndex:d,record:o}=t;let l=null;if(r&&r.editable&&r.editable){const f=m=>{c[r.key]=m.currentTarget.value,c.index=d};l=e?a(_,{defaultValue:o[r.key],onChange:f}):a("div",{children:o[r.key]})}else l=r&&r.dataIndex==="operation"?a(L,p(h({},t),{editing:e})):i;return a("td",{children:l})}const re=()=>{const[t,e]=y.exports.useState([]),[i,r]=y.exports.useState(-1),[d,o]=y.exports.useState(1);y.exports.useEffect(()=>{(async()=>{const{data:n}=await H();e(n.result.list||[]),m()})()},[d]);async function l(n){if(c.index===null)return;const{data:s}=await K(n._id,{state:c.state});o(d+1),I.success(s.message)}function f(n){c.index=null,r(n)}function m(){r(-1)}async function v(n){const{data:s}=await P(n._id);o(d+1),I.success(s.message)}function k(n){return n===i}const D=N.map(n=>n.editable?p(h({},n),{onCell:(s,u)=>({record:s,col:n,rowIndex:u,editing:k(u)})}):n.dataIndex==="operation"?p(h({},n),{onCell:(s,u)=>({col:n,record:s,save:l,edit:f,cancel:m,del:v,rowIndex:u,editing:k(u)})}):n);return a(g,{children:a(T,{title:"\u8BC4\u8BBA\u7BA1\u7406",children:a(z,{components:{body:{cell:O}},className:"messages",columns:D,dataSource:t,bordered:!0,size:"middle",rowKey:"_id"})})})};export{re as default};