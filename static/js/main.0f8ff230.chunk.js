(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{165:function(e,t,n){},166:function(e,t,n){},303:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(72),c=n.n(i),a=(n(165),n(9)),o=(n(166),n(12)),u=n.n(o),j=n(19),p=n(2);var v=function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:["Submitted ZIP: ",e.zip]})})};var h=function(e){var t=Object(r.useState)(""),n=Object(a.a)(t,2),s=n[0],i=n[1],c=e.setZip;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(s),i("")},children:[Object(p.jsx)("input",{type:"text",placeholder:"Enter zip here",value:s,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]})})})};var b=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("section",{className:"head",children:"Environmental racism"})," is the term is used to describe the disproportionate environmental injustice that occurs within neighborhoods that are composed by a significant number of minority groups and people of lower socio-economic status"]})},l=n(305),O=n(309),d=n(153),f=n(154),m=n(63),x=n(60),E=n(156);var S=function(e){function t(){return n.apply(this,arguments)}function n(){return(n=Object(j.a)(u.a.mark((function t(){var n,r,s,i,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/",n=e.zip,r="https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/"+n+"/JSON",s=0,t.next=6,fetch(r);case 6:return i=t.sent,t.next=9,i.json();case 9:return c=t.sent,a=0,c.map((function(e){var t=e.CO2E_EMISSION;a+=t})),s=a,t.abrupt("return",s);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(){return i.apply(this,arguments)}function i(){return(i=Object(j.a)(u.a.mark((function t(){var n,r,s,i,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/",n=e.zip,r="https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/"+n+"/JSON",s=0,t.next=6,fetch(r);case 6:return i=t.sent,t.next=9,i.json();case 9:return c=t.sent,a=0,c.map((function(e){if("Methane"==e.GAS_NAME){var t=e.CO2E_EMISSION;a+=t}})),s=a,t.abrupt("return",s);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return o.apply(this,arguments)}function o(){return(o=Object(j.a)(u.a.mark((function t(){var n,r,s,i,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/",n=e.zip,r="https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/"+n+"/JSON",s=0,t.next=6,fetch(r);case 6:return i=t.sent,t.next=9,i.json();case 9:return c=t.sent,a=0,c.map((function(e){if("Biogenic CO2"==e.GAS_NAME){var t=e.CO2E_EMISSION;a+=t}})),s=a,t.abrupt("return",s);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=Object(j.a)(u.a.mark((function t(){var n,r,s,i,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/",n=e.zip,r="https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/"+n+"/JSON",s=0,t.next=6,fetch(r);case 6:return i=t.sent,t.next=9,i.json();case 9:return c=t.sent,a=0,c.map((function(e){if("Carbon Dioxide"==e.GAS_NAME){var t=e.CO2E_EMISSION;a+=t}})),s=a,t.abrupt("return",s);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(u.a.mark((function t(){var n,r,s,i,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/",n=e.zip,r="https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/"+n+"/JSON",s=0,t.next=6,fetch(r);case 6:return i=t.sent,t.next=9,i.json();case 9:return c=t.sent,a=0,c.map((function(e){if("Nitrous Oxide"==e.GAS_NAME){var t=e.CO2E_EMISSION;a+=t}})),s=a,t.abrupt("return",s);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _=Object(r.useState)(),G=Object(a.a)(_,2),I=G[0],A=G[1],N=Object(r.useState)(),g=Object(a.a)(N,2),y=g[0],w=g[1],R=Object(r.useState)(),M=Object(a.a)(R,2),T=M[0],C=M[1],Z=Object(r.useState)(),P=Object(a.a)(Z,2),z=P[0],k=P[1],H=Object(r.useState)(),V=Object(a.a)(H,2),Y=V[0],J=V[1];Object(r.useEffect)(Object(j.a)(u.a.mark((function e(){var n,r,i,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return n=e.sent,e.next=5,s();case 5:return r=e.sent,e.next=8,c();case 8:return i=e.sent,e.next=11,v();case 11:return a=e.sent,e.next=14,b();case 14:o=e.sent,A(n),w(r),C(i),k(a),J(o);case 20:case"end":return e.stop()}}),e)}))));var B=[{name:"All Emissions in their CO2 Equivalent",emissions:I},{name:"Methane",emissions:y},{name:"Biogenic CO2",emissions:T},{name:"CO2",emissions:z},{name:"Nitrous Oxide",emissions:Y}];return Object(p.jsxs)(l.a,{width:500,height:300,data:B,margin:{top:5,right:30,left:20,bottom:5},children:[Object(p.jsx)(O.a,{strokeDasharray:"3 3"}),Object(p.jsx)(d.a,{dataKey:"name"}),Object(p.jsx)(f.a,{}),Object(p.jsx)(m.a,{}),Object(p.jsx)(x.a,{}),Object(p.jsx)(E.a,{dataKey:"emissions",fill:"#8884d8"})]})};var _=function(e){var t=e.zip;return Object(p.jsx)("div",{children:Object(p.jsx)(S,{zip:t})})};var G=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("section",{className:"head",children:"Learn more about what you can do."}),Object(p.jsxs)("div",{className:"bullet",children:[Object(p.jsx)("li",{children:"Increase awareness by letting your fellow community members know"}),Object(p.jsx)("li",{children:"Research your local communities issue more in depth so that you can take precautions against the possible environmental side effects"}),Object(p.jsx)("li",{children:"Contact your local government representatives"})]})]})};var I=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("section",{className:"head",children:"Environmental Racism in Communities"}),"Enter a zip-code to see information about environmental racism in that community:"]})};var A=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{class:"flex-container1",children:Object(p.jsx)("div",{className:"EnvRac",children:Object(p.jsx)(b,{})})}),Object(p.jsxs)("div",{className:"flex-container2",children:[Object(p.jsxs)("div",{className:"inner-container1",children:[Object(p.jsx)("div",{className:"EnvCom",children:Object(p.jsx)(I,{})}),Object(p.jsxs)("div",{className:"Zip",children:[Object(p.jsx)(h,{setZip:s}),Object(p.jsx)(v,{zip:n})]})]}),Object(p.jsx)("div",{className:"inner-container2",children:Object(p.jsx)("div",{className:"Graph",children:Object(p.jsx)(_,{zip:n})})})]}),Object(p.jsx)("div",{className:"flex-container4",children:Object(p.jsx)("div",{className:"Learn",children:Object(p.jsx)(G,{})})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,311)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root")),N()}},[[303,1,2]]]);
//# sourceMappingURL=main.0f8ff230.chunk.js.map