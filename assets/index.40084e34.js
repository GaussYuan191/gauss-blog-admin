var k=Object.defineProperty,w=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))I.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))v.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>w(e,j(t));import{j as i,a as C,r as a}from"./index.1e18674b.js";import{P}from"./page-layout.ad34ff44.js";import{B as h,G as _,H as E}from"./api.17a0994e.js";import{D as F,T as D}from"./Table.991498cd.js";import{ag as S}from"./index.aef76a23.js";import"./index.d09e3fac.js";import"./index.ac3dbe7f.js";import"./styleChecker.0a04cfc8.js";import"./index.f3179481.js";import"./index.800a318d.js";import"./index.7904e80b.js";import"./index.dd62996c.js";import"./Overflow.d99eac34.js";import"./index.0958ac02.js";import"./Dropdown.51364922.js";import"./index.057e14fb.js";const B=[{title:"#",width:50,key:"tindex",render:(e,t,r)=>i("span",{children:r+1})},{title:"\u6807\u9898",dataIndex:"title",width:150,key:"title",render:(e,t)=>i("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",children:e})},{title:"icon\u56FE\u6807",key:"icon",dataIndex:"icon",width:200},{title:"\u9884\u89C8\u5730\u5740",key:"view",dataIndex:"view"},{title:"github\u5730\u5740",key:"github",dataIndex:"github"},{title:"\u7F16\u8F91",key:"operation",dataIndex:"operation",width:120}];function T(e){const{record:t}=e;return C("div",{className:"btnbox",children:[i(h,{type:"link",onClick:()=>e.edit(t._id),children:"\u7F16\u8F91"}),i(F,{type:"vertical"}),i(h,{type:"link",onClick:()=>e.del(t._id),children:"\u5220\u9664"})]})}function z(e){const{children:t,col:r}=e;return i("td",{children:r&&r.dataIndex==="operation"?i(T,s({},e)):t})}const Z=e=>{const[t,r]=a.exports.useState([]),[u,f]=a.exports.useState(1),[d,c]=a.exports.useState({current:1,total:0});a.exports.useEffect(()=>{(async()=>{const{data:n}=await _({current_page:d.current});r(n.result.list||[]),c({current:n.result.pagination.current_page,total:n.result.pagination.total})})()},[u]);function x(n){e.history.push(`/project-add?id=${n}`)}async function g(n){const{data:o}=await E(n);f(u+1),c({current:1,total:0}),S.success(o.message)}const y=B.map(n=>n.dataIndex==="operation"?m(s({},n),{onCell:(o,b)=>({col:n,record:o,edit:x,del:g,rowIndex:b})}):n);return i(P,{title:"\u9879\u76EE\u7BA1\u7406",children:i(D,{components:{body:{cell:z}},columns:y,dataSource:t,bordered:!0,size:"middle",rowKey:"_id",pagination:d})})};export{Z as default};