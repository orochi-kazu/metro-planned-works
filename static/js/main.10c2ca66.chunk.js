(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){},,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5901d734.svg"},,,,function(e,t,n){e.exports=n(29)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),s=n.n(l),i=(n(20),n(7)),c=n(8),o=n(12),u=n(9),d=n(13),m=(n(5),function(){return r.a.createElement("header",null,r.a.createElement("span",{className:"title"},r.a.createElement("span",{className:"icon"},"\u26a0")," Legible Works"))}),f=(n(21),function(e){var t=e.count,n=e.type;return r.a.createElement("span",{className:"alert ".concat(n)},t||"?")}),p=function(e){var t=e.alerts;return r.a.createElement("div",null,r.a.createElement(f,{count:t.total,type:"total"})," alert details (",r.a.createElement(f,{count:t.ingested,type:"ingested"})," ingested,"," ",r.a.createElement(f,{count:t.pending,type:"pending"})," pending)")},E=(n(22),function(e){var t=e.lastUpdate;return r.a.createElement("div",null,"Last updated: ",r.a.createElement("span",{className:"updated"},t))}),h=(n(23),function(){return r.a.createElement("div",null,"Licensed under AGPL 3+. Source at ",r.a.createElement("a",{href:"https://github.com/orochi-kazu/metro-planned-works",target:"_blank",rel:"noopener"},"GitHub"))}),g=function(e){var t=e.alerts,n=e.lastUpdate;return r.a.createElement("footer",null,r.a.createElement(p,{alerts:t}),r.a.createElement(E,{lastUpdate:n}),r.a.createElement(h,null))},v=n(10),b=n.n(v),k=(n(24),function(){return r.a.createElement("div",{className:"empty-content"},r.a.createElement("img",{className:"logo",src:b.a,alt:"App logo: a caution sign"}))}),A=(n(25),function(){return r.a.createElement("div",{className:"outage uningested bordered"},"Pending")}),w=function(e){var t=e.area,n=e.from,a=e.to;return r.a.createElement("div",{className:"outage bordered"},r.a.createElement("div",null,t),r.a.createElement("div",null,"Starts: ",n.iso),r.a.createElement("div",null,"Ends: ",a.iso))},_=function(e){var t=e.id,n=e.outages,a=e.link;return r.a.createElement("div",{className:"detail bordered"},r.a.createElement("div",{className:"alert-title"},r.a.createElement("span",null,t),r.a.createElement("span",null,r.a.createElement("a",{href:a,target:"_blank",rel:"noopener"},"Metro"))),r.a.createElement("div",null,n?n.map(function(e,t){return r.a.createElement(w,Object.assign({},e,{key:t}))}):r.a.createElement(A,null)))},j=(n(26),function(e){var t=e.id,n=(e.alerts,e.line),a=e.plannedWorks,l=void 0===a?[]:a,s=function(e){return function(t){var n=e(t);return n?r.a.createElement(_,Object.assign({},n,{key:t})):null}}(e.getAlertDetails);return r.a.createElement("div",{className:"alert-summary bordered"},r.a.createElement("div",{className:"alert-summary-title"},r.a.createElement("span",{className:"alert-summary-title"},n||"Unnamed line"),n?"":r.a.createElement("span",null,"\xa0(",t,")")),l.map(function(e){return s(e.id)}))}),y=function(e){var t=e.results,n=e.getAlertDetails;return t.map(function(e){return r.a.createElement(j,Object.assign({},e,{getAlertDetails:n,key:e.id}))})},D=(n(27),n(1)),O=n.n(D),U=n(2),C=function(e){return{fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return fetch(e).then(function(e){return e.json()})})}},N=[],L={alerts:{},fetchDate:"",releaseDate:""},P={save:function(e){var t=e.healthboardAlerts,n=e.alertDetails;N=t,L=n},alerts:function(){return N},alertCounts:function(){return function(){var e=Object.keys(L.alerts),t=e.length,n=e.map(function(e){return L.alerts[e]}).filter(function(e){return e.outages}).length;return{total:t,ingested:n,pending:t-n}}()},alertDetails:function(e){return L.alerts[e]},lastUpdated:function(){return L.releaseDate}},R=n(11),S=n(3),T=function(e){return Object.keys(e).map(function(t){return Object(S.a)({},e[t],{id:t})})},x=function(e){return{id:e.id,alerts:e.alerts,line:e.line_name,plannedWorks:e.planned_works_list}},W=function(){var e=Object(U.a)(O.a.mark(function e(t){var n,a,r,l,s,i,c,o,u;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.healthboardClient,a=t.detailsClient,r=t.store,e.next=3,Promise.all([n.fetch(),a.fetch()]);case 3:return l=e.sent,s=Object(R.a)(l,2),i=s[0],c=s[1],o=T(i).map(x),u=Object(S.a)({},c,{alerts:(d=c.alerts,Object.fromEntries(d.map(function(e){return[e.id,e]})))}),r.save({healthboardAlerts:o,alertDetails:u}),e.abrupt("return",{alerts:function(){return r.alerts()},alertCounts:function(){return r.alertCounts()},alertDetails:function(e){return r.alertDetails(e)},lastUpdated:function(){return r.lastUpdated()}});case 11:case"end":return e.stop()}var d},e)}));return function(t){return e.apply(this,arguments)}}(),B=function(e){return Object({NODE_ENV:"production",PUBLIC_URL:"/metro-planned-works",REACT_APP_ALERT_DETAILS_URL:"https://orochi-kazu.github.io/metro-planned-works/alert_details.json",REACT_APP_HEALTHBOARD_ALERTS_URL:"https://orochi-kazu.github.io/metro-planned-works/healthboard_alers.json"})["REACT_APP_".concat(e.toUpperCase(),"_URL")]},z=B("healthboard_alerts"),H=B("alert_details"),I=function(){var e=Object(U.a)(O.a.mark(function e(){var t,n,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=C(z),n=C(H),e.next=4,W({healthboardClient:t,detailsClient:n,store:P});case 4:return a=e.sent,e.abrupt("return",{domain:{alerts:a}});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),G=null,J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={alertCounts:{},lastUpdated:"Unknown",alerts:[],getAlertDetails:function(){return null}},I().then(function(e){G=e.domain.alerts,n.setState({lastUpdated:G.lastUpdated(),alertCounts:G.alertCounts(),alerts:G.alerts(),getAlertDetails:G.alertDetails})}),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement("div",{className:"content"},(this.state.alerts||[]).length>0?r.a.createElement(y,{results:this.state.alerts,getAlertDetails:this.state.getAlertDetails}):r.a.createElement(k,null)),r.a.createElement(g,{alerts:this.state.alertCounts,lastUpdate:this.state.lastUpdated}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.10c2ca66.chunk.js.map