_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2mvg":function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),s=t("TSYQ"),i=t.n(s),r=t("q1tI"),c=t.n(r),o=t("17x9"),u=t.n(o),d=t("vUet"),m=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,r=e.fluid,o=e.rounded,u=e.roundedCircle,m=e.thumbnail,f=Object(l.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(d.a)(t,"img");var g=i()(r&&t+"-fluid",o&&"rounded",u&&"rounded-circle",m&&t+"-thumbnail");return c.a.createElement("img",Object(n.a)({ref:a},f,{className:i()(s,g)}))})));m.displayName="Image",m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},a.a=m},UHfq:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),s=t("tXcZ"),i=t("MbLX"),r=t("o0o1"),c=t.n(r),o=t("HaE+"),u=t("vDqi"),d=t.n(u),m=t("7vrA"),f=t("3Z9Z"),g=t("cWnB"),b=t("T/rR"),p=t("JI6e"),h=t("QojX"),v=t("2mvg"),w=t("cb0F"),N=l.a.createElement,j=function(){d.a.defaults.headers.post["Content-Type"]="multipart/form-data",d.a.defaults.headers.post.Accept="application/json";var e=Object(n.useState)(""),a=e[0],t=e[1],s=Object(n.useState)("Please select an image"),i=s[0],r=s[1],u=Object(n.useState)(!1),j=u[0],x=u[1],y=Object(n.useState)(0),_=(y[0],y[1]),O=Object(n.useState)({}),F=O[0],k=O[1],A=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),(t=new FormData).append("file",a),e.next=6,d.a.post("".concat(w.c),t,{crossDomain:!0});case 6:n=e.sent,k(n.data),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),k({}),alert(JSON.stringify(e.t0));case 14:x(!1),setTimeout((function(){_(0)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return N(l.a.Fragment,null,N(m.a,null,N("h1",{style:{textAlign:"center"}},"Face Alignment"),N("br",null),N("div",{style:{textAlign:"center"}},N("p",null,N("strong",null,"Face alignment is the task of identifying the geometric structure of faces in digital images, and attempting to obtain a canonical alignment of the face based on translation, scale, and rotation."))),N("br",null),N(f.a,{className:"justify-content-md-center"},N(g.a,{variant:"dark",className:"mt-5",hidden:!j,disabled:!0,block:!0},N(b.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," ","Loading...")),N("br",null),N(f.a,{className:"justify-content-md-center"},N(p.a,{xs:6},N(h.a,null,N(h.a.Group,{as:f.a},N(h.a.Label,null,N("h5",null,N("strong",null,"Select Image"))),N(h.a.File,{custom:!0},N(h.a.File.Input,{onChange:function(e){e.target.files.length>=1?(t(e.target.files[0]),r(e.target.files[0].name)):r("Please select an Image")},accept:".jpg,.png,.jpeg"}),N(h.a.File.Label,{"data-browse":"Browse"},i))),N(f.a,null,N(p.a,{md:6,className:"mx-auto",style:{textAlign:"center"}},a.name&&N(v.a,{src:URL.createObjectURL(a),style:{width:"100%"},className:"mx-auto mt-5",rounded:!0,fluid:!0})),N(p.a,{md:6,className:"mx-auto",style:{textAlign:"center"}},F.ImageBytes&&N("img",{src:"data:image/jpeg;base64,".concat(F.ImageBytes),style:{width:"100%"},className:"mx-auto mt-5",rounded:!0,fluid:!0}))),N("br",null),N(f.a,null,N(g.a,{variant:"dark",className:"mx-auto shadow-lg",size:"lg",onClick:function(){return A()},disabled:void 0===a.name},"Align Face!")))))))},x=l.a.createElement;a.default=function(){return x("div",null,x(s.a,{title:"FaceAlign"}),x(i.a,{active:"face"}),x(j,null))}},y1XL:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/face_align",function(){return t("UHfq")}])}},[["y1XL",0,2,1,3,4]]]);