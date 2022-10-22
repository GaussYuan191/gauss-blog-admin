import{A as Z,_ as A,c as w,o as q,C as W,a as X,b as $,d as Re,e as pe,f as fe,g as me,t as ke,h as ve,i as ze}from"./index.aef76a23.js";import{r as a,_ as f}from"./index.1e18674b.js";import{u as Be,S as Ae,M as We,D as He,a as xe,E as De,b as Fe}from"./index.dd62996c.js";import{i as F,c as K,T as Ve,a as Ge}from"./index.ac3dbe7f.js";var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},Qe=Je,he=function(l,n){return a.exports.createElement(Z,A(A({},l),{},{ref:n,icon:Qe}))};he.displayName="RightOutlined";var se=a.exports.forwardRef(he),Ue=a.exports.createContext(null),ce=Ue,Xe=a.exports.createContext({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),V=Xe;function ge(e){var l,n=e.popupClassName,t=e.icon,r=e.title,o=e.theme,s=a.exports.useContext(V),i=s.prefixCls,c=s.inlineCollapsed,d=s.antdMenuTheme,p=Be(),m;if(!t)m=c&&!p.length&&r&&typeof r=="string"?a.exports.createElement("div",{className:"".concat(i,"-inline-collapsed-noicon")},r.charAt(0)):a.exports.createElement("span",{className:"".concat(i,"-title-content")},r);else{var x=F(r)&&r.type==="span";m=a.exports.createElement(a.exports.Fragment,null,K(t,{className:w(F(t)?(l=t.props)===null||l===void 0?void 0:l.className:"","".concat(i,"-item-icon"))}),x?r:a.exports.createElement("span",{className:"".concat(i,"-title-content")},r))}var y=a.exports.useMemo(function(){return f(f({},s),{firstLevel:!1})},[s]);return a.exports.createElement(V.Provider,{value:y},a.exports.createElement(Ae,f({},q(e,["icon"]),{title:m,popupClassName:w(i,"".concat(i,"-").concat(o||d),n)})))}var Ye={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},Ze=Ye,Ce=function(l,n){return a.exports.createElement(Z,A(A({},l),{},{ref:n,icon:Ze}))};Ce.displayName="BarsOutlined";var qe=a.exports.forwardRef(Ce),Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},et=Ke,ye=function(l,n){return a.exports.createElement(Z,A(A({},l),{},{ref:n,icon:et}))};ye.displayName="LeftOutlined";var de=a.exports.forwardRef(ye),be=globalThis&&globalThis.__rest||function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},Ne=a.exports.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function G(e){var l=e.suffixCls,n=e.tagName,t=e.displayName;return function(r){var o=a.exports.forwardRef(function(s,i){var c=a.exports.useContext(W),d=c.getPrefixCls,p=s.prefixCls,m=d(l,p);return a.exports.createElement(r,f({ref:i,prefixCls:m,tagName:n},s))});return o.displayName=t,o}}var ee=a.exports.forwardRef(function(e,l){var n=e.prefixCls,t=e.className,r=e.children,o=e.tagName,s=be(e,["prefixCls","className","children","tagName"]),i=w(n,t);return a.exports.createElement(o,f(f({className:i},s),{ref:l}),r)}),tt=a.exports.forwardRef(function(e,l){var n,t=a.exports.useContext(W),r=t.direction,o=a.exports.useState([]),s=X(o,2),i=s[0],c=s[1],d=e.prefixCls,p=e.className,m=e.children,x=e.hasSider,y=e.tagName,O=be(e,["prefixCls","className","children","hasSider","tagName"]),S=w(d,(n={},$(n,"".concat(d,"-has-sider"),typeof x=="boolean"?x:i.length>0),$(n,"".concat(d,"-rtl"),r==="rtl"),n),p),N=a.exports.useMemo(function(){return{siderHook:{addSider:function(h){c(function(g){return[].concat(Re(g),[h])})},removeSider:function(h){c(function(g){return g.filter(function(_){return _!==h})})}}}},[]);return a.exports.createElement(Ne.Provider,{value:N},a.exports.createElement(y,f({ref:l,className:S},O),m))}),rt=G({suffixCls:"layout",tagName:"section",displayName:"Layout"})(tt),Ct=G({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(ee),yt=G({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(ee),bt=G({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(ee),Nt=rt,at=function(l){return!isNaN(parseFloat(l))&&isFinite(l)},nt=at,lt=globalThis&&globalThis.__rest||function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},ue={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},te=a.exports.createContext({}),ot=function(){var e=0;return function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,"".concat(l).concat(e)}}(),it=a.exports.forwardRef(function(e,l){var n=e.prefixCls,t=e.className,r=e.trigger,o=e.children,s=e.defaultCollapsed,i=s===void 0?!1:s,c=e.theme,d=c===void 0?"dark":c,p=e.style,m=p===void 0?{}:p,x=e.collapsible,y=x===void 0?!1:x,O=e.reverseArrow,S=O===void 0?!1:O,N=e.width,E=N===void 0?200:N,h=e.collapsedWidth,g=h===void 0?80:h,_=e.zeroWidthTriggerStyle,j=e.breakpoint,P=e.onCollapse,M=e.onBreakpoint,b=lt(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),L=a.exports.useContext(Ne),k=L.siderHook,J=a.exports.useState("collapsed"in b?b.collapsed:i),I=X(J,2),T=I[0],z=I[1],Q=a.exports.useState(!1),ae=X(Q,2),ne=ae[0],Se=ae[1];a.exports.useEffect(function(){"collapsed"in b&&z(b.collapsed)},[b.collapsed]);var le=function(u,C){"collapsed"in b||z(u),P==null||P(u,C)},oe=a.exports.useRef();oe.current=function(v){Se(v.matches),M==null||M(v.matches),T!==v.matches&&le(v.matches,"responsive")},a.exports.useEffect(function(){function v(R){return oe.current(R)}var u;if(typeof window!="undefined"){var C=window,D=C.matchMedia;if(D&&j&&j in ue){u=D("(max-width: ".concat(ue[j],")"));try{u.addEventListener("change",v)}catch{u.addListener(v)}v(u)}}return function(){try{u==null||u.removeEventListener("change",v)}catch{u==null||u.removeListener(v)}}},[j]),a.exports.useEffect(function(){var v=ot("ant-sider-");return k.addSider(v),function(){return k.removeSider(v)}},[]);var ie=function(){le(!T,"clickTrigger")},Ee=a.exports.useContext(W),we=Ee.getPrefixCls,_e=function(){var u,C=we("layout-sider",n),D=q(b,["collapsed"]),R=T?g:E,B=nt(R)?"".concat(R,"px"):String(R),U=parseFloat(String(g||0))===0?a.exports.createElement("span",{onClick:ie,className:w("".concat(C,"-zero-width-trigger"),"".concat(C,"-zero-width-trigger-").concat(S?"right":"left")),style:_},r||a.exports.createElement(qe,null)):null,Me={expanded:S?a.exports.createElement(se,null):a.exports.createElement(de,null),collapsed:S?a.exports.createElement(de,null):a.exports.createElement(se,null)},Ie=T?"collapsed":"expanded",Te=Me[Ie],$e=r!==null?U||a.exports.createElement("div",{className:"".concat(C,"-trigger"),onClick:ie,style:{width:B}},r||Te):null,je=f(f({},m),{flex:"0 0 ".concat(B),maxWidth:B,minWidth:B,width:B}),Le=w(C,"".concat(C,"-").concat(d),(u={},$(u,"".concat(C,"-collapsed"),!!T),$(u,"".concat(C,"-has-trigger"),y&&r!==null&&!U),$(u,"".concat(C,"-below"),!!ne),$(u,"".concat(C,"-zero-width"),parseFloat(B)===0),u),t);return a.exports.createElement("aside",f({className:Le},D,{style:je,ref:l}),a.exports.createElement("div",{className:"".concat(C,"-children")},o),y||ne&&U?$e:null)},Pe=a.exports.useMemo(function(){return{siderCollapsed:T}},[T]);return a.exports.createElement(te.Provider,{value:Pe},_e())});it.displayName="Sider";var st=globalThis&&globalThis.__rest||function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},re=function(e){pe(n,e);var l=fe(n);function n(){var t;return me(this,n),t=l.apply(this,arguments),t.renderItem=function(r){var o,s=r.siderCollapsed,i,c=t.context,d=c.prefixCls,p=c.firstLevel,m=c.inlineCollapsed,x=c.direction,y=c.disableMenuItemTitleTooltip,O=t.props,S=O.className,N=O.children,E=t.props,h=E.title,g=E.icon,_=E.danger,j=st(E,["title","icon","danger"]),P=h;typeof h=="undefined"?P=p?N:"":h===!1&&(P="");var M={title:P};!s&&!m&&(M.title=null,M.visible=!1);var b=ke(N).length,L=a.exports.createElement(We,f({},j,{className:w((o={},$(o,"".concat(d,"-item-danger"),_),$(o,"".concat(d,"-item-only-child"),(g?b+1:b)===1),o),S),title:typeof h=="string"?h:void 0}),K(g,{className:w(F(g)?(i=g.props)===null||i===void 0?void 0:i.className:"","".concat(d,"-item-icon"))}),t.renderItemChildren(m));return y||(L=a.exports.createElement(Ve,f({},M,{placement:x==="rtl"?"left":"right",overlayClassName:"".concat(d,"-inline-collapsed-tooltip")}),L)),L},t}return ve(n,[{key:"renderItemChildren",value:function(r){var o=this.context,s=o.prefixCls,i=o.firstLevel,c=this.props,d=c.icon,p=c.children,m=a.exports.createElement("span",{className:"".concat(s,"-title-content")},p);return(!d||F(p)&&p.type==="span")&&p&&r&&i&&typeof p=="string"?a.exports.createElement("div",{className:"".concat(s,"-inline-collapsed-noicon")},p.charAt(0)):m}},{key:"render",value:function(){return a.exports.createElement(te.Consumer,null,this.renderItem)}}]),n}(a.exports.Component);re.contextType=V;var ct=globalThis&&globalThis.__rest||function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},dt=function(l){var n=l.prefixCls,t=l.className,r=l.dashed,o=ct(l,["prefixCls","className","dashed"]),s=a.exports.useContext(W),i=s.getPrefixCls,c=i("menu",n),d=w($({},"".concat(c,"-item-divider-dashed"),!!r),t);return a.exports.createElement(He,f({className:d},o))},Oe=dt,ut=globalThis&&globalThis.__rest||function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};function Y(e){return(e||[]).map(function(l,n){if(l&&ze(l)==="object"){var t=l,r=t.label,o=t.children,s=t.key,i=t.type,c=ut(t,["label","children","key","type"]),d=s!=null?s:"tmp-".concat(n);return o||i==="group"?i==="group"?a.exports.createElement(xe,f({key:d},c,{title:r}),Y(o)):a.exports.createElement(ge,f({key:d},c,{title:r}),Y(o)):i==="divider"?a.exports.createElement(Oe,f({key:d},c)):a.exports.createElement(re,f({key:d},c),r)}return null}).filter(function(l){return l})}function pt(e){return a.exports.useMemo(function(){return e&&Y(e)},[e])}var ft=globalThis&&globalThis.__rest||function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)l.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n},mt=a.exports.forwardRef(function(e,l){var n,t=a.exports.useContext(ce)||{},r=a.exports.useContext(W),o=r.getPrefixCls,s=r.getPopupContainer,i=r.direction,c=o(),d=e.prefixCls,p=e.className,m=e.theme,x=m===void 0?"light":m,y=e.expandIcon,O=e._internalDisableMenuItemTitleTooltip,S=e.inlineCollapsed,N=e.siderCollapsed,E=e.items,h=e.children,g=e.mode,_=e.selectable,j=ft(e,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","mode","selectable"]),P=q(j,["collapsedWidth"]),M=pt(E)||h;(n=t.validator)===null||n===void 0||n.call(t,{mode:g});var b=t.mode||g,L=_!=null?_:t.selectable,k=a.exports.useMemo(function(){return N!==void 0?N:S},[S,N]),J={horizontal:{motionName:"".concat(c,"-slide-up")},inline:Ge,other:{motionName:"".concat(c,"-zoom-big")}},I=o("menu",d||t.prefixCls),T=w("".concat(I,"-").concat(x),p),z;typeof y=="function"?z=y:z=K(y||t.expandIcon,{className:"".concat(I,"-submenu-expand-icon")});var Q=a.exports.useMemo(function(){return{prefixCls:I,inlineCollapsed:k||!1,antdMenuTheme:x,direction:i,firstLevel:!0,disableMenuItemTitleTooltip:O}},[I,k,x,i,O]);return a.exports.createElement(ce.Provider,{value:null},a.exports.createElement(V.Provider,{value:Q},a.exports.createElement(De,f({getPopupContainer:s,overflowedIndicator:a.exports.createElement(Fe,null),overflowedIndicatorPopupClassName:"".concat(I,"-").concat(x),mode:b,selectable:L},P,{inlineCollapsed:k,className:T,prefixCls:I,direction:i,defaultMotions:J,expandIcon:z,ref:l}),M)))}),H=function(e){pe(n,e);var l=fe(n);function n(){var t;return me(this,n),t=l.apply(this,arguments),t.focus=function(r){var o;(o=t.menu)===null||o===void 0||o.focus(r)},t}return ve(n,[{key:"render",value:function(){var r=this;return a.exports.createElement(te.Consumer,null,function(o){return a.exports.createElement(mt,f({ref:function(i){r.menu=i}},r.props,o))})}}]),n}(a.exports.Component);H.Divider=Oe;H.Item=re;H.SubMenu=ge;H.ItemGroup=xe;var Ot=H;export{bt as C,yt as F,Ct as H,Nt as I,de as L,Ot as M,ce as O,se as R,it as S};