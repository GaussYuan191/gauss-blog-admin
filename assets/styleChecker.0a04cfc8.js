import{b as v,E as h}from"./index.aef76a23.js";import{_ as u}from"./index.1e18674b.js";var E=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},t=new Map,l=-1,d={},f={matchHandlers:{},dispatch:function(e){return d=e,t.forEach(function(n){return n(d)}),t.size>=1},subscribe:function(e){return t.size||this.register(),l+=1,t.set(l,e),e(d),l},unsubscribe:function(e){t.delete(e),t.size||this.unregister()},unregister:function(){var e=this;Object.keys(a).forEach(function(n){var s=a[n],r=e.matchHandlers[s];r==null||r.mql.removeListener(r==null?void 0:r.listener)}),t.clear()},register:function(){var e=this;Object.keys(a).forEach(function(n){var s=a[n],r=function(m){var p=m.matches;e.dispatch(u(u({},d),v({},n,p)))},o=window.matchMedia(s);o.addListener(r),e.matchHandlers[s]={mql:o,listener:r},r(o)})}},g=f,x=function(){return h()&&window.document.documentElement},c,M=function(){if(!x())return!1;if(c!==void 0)return c;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),c=e.scrollHeight===1,document.body.removeChild(e),c};export{g as R,x as c,M as d,E as r};