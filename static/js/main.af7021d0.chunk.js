(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(19).concat([function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(10),s=n.n(a),l=(n(29),n(4)),r=n(2),o=n(7),d=(n(30),n(0)),j=function(e){return Object(d.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(d.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})},u=(n(32),function(e){return Object(d.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}),b=(n(33),function(e){return Object(d.jsx)("li",{className:"user-item",children:Object(d.jsx)(u,{className:"user-item__content",children:Object(d.jsxs)(o.b,{to:"/".concat(e.id,"/places"),children:[Object(d.jsx)("div",{className:"user-item__image",children:Object(d.jsx)(j,{image:e.image,alt:e.name})}),Object(d.jsxs)("div",{className:"user-item__info",children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})}),O=(n(39),function(e){return 0===e.items.length?Object(d.jsx)("div",{className:"center",children:Object(d.jsx)(u,{children:Object(d.jsx)("h2",{children:"No users found"})})}):Object(d.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return Object(d.jsx)(b,{id:e.id,image:e.image,name:e.name,placeCount:e.places},e.id)}))})}),h=function(){return Object(d.jsx)(O,{items:[{id:"u1",name:"Amin",image:"https://www.toureiffel.paris/sites/default/files/inline-images/Structure_0.jpg",places:2}]})},m=n(6),p=n(22),x="REQUIRE",f="MINLENGTH",v="MAXLENGTH",g="EMAIL",N=function(){return{type:x}},w=function(e){return{type:f,val:e}},C=function(e,t){var n,c=!0,i=Object(p.a)(t);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.type===x&&(c=c&&e.trim().length>0),a.type===f&&(c=c&&e.trim().length>=a.val),a.type===v&&(c=c&&e.trim().length<=a.val),"MIN"===a.type&&(c=c&&+e>=a.val),"MAX"===a.type&&(c=c&&+e<=a.val),a.type===g&&(c=c&&/^\S+@\S+\.\S+$/.test(e))}}catch(s){i.e(s)}finally{i.f()}return c},y=(n(40),function(e,t){switch(t.type){case"CHANGE":return Object(m.a)(Object(m.a)({},e),{},{value:t.val,isValid:C(t.val,t.validators)});case"TOUCH":return Object(m.a)(Object(m.a)({},e),{},{isTouched:!0});default:return e}}),_=function(e){var t=Object(c.useReducer)(y,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(l.a)(t,2),i=n[0],a=n[1],s=e.id,r=e.onInput,o=i.value,j=i.isValid;Object(c.useEffect)((function(){r(s,o,j)}),[s,o,j,r]);var u=function(t){a({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){a({type:"TOUCH"})},O="input"===e.element?Object(d.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,onBlur:b,value:i.value}):Object(d.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:u,onBlur:b,value:i.value});return Object(d.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[Object(d.jsx)("label",{htmlFor:e.id,children:e.label}),O,!i.isValid&&i.isTouched&&Object(d.jsx)("p",{children:e.errorText})]})},E=(n(41),function(e){return e.href?Object(d.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(d.jsx)(o.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(d.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}),T=n(13),I=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var c in e.inputs)e.inputs[c]&&(n=c===t.inputId?n&&t.isValid:n&&e.inputs[c].isValid);return Object(m.a)(Object(m.a)({},e),{},{inputs:Object(m.a)(Object(m.a)({},e.inputs),{},Object(T.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},V=function(e,t){var n=Object(c.useReducer)(I,{inputs:e,isValid:t}),i=Object(l.a)(n,2),a=i[0],s=i[1];return[a,Object(c.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},S=Object(c.createContext)({isLoggedIn:!1,login:function(){},logout:function(){}}),A=(n(42),function(){var e=Object(c.useContext)(S),t=Object(c.useState)(!0),n=Object(l.a)(t,2),i=n[0],a=n[1],s=V({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),r=Object(l.a)(s,3),o=r[0],j=r[1],b=r[2];return Object(d.jsxs)(u,{className:"authentication",children:[Object(d.jsx)("h2",{children:"Login Required"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.login(),console.log(o.inputs)},children:[!i&&Object(d.jsx)(_,{element:"input",id:"name",type:"text",label:"Your Name",validators:[N()],errorText:"Please enter a name",onInput:j}),Object(d.jsx)(_,{id:"email",element:"input",type:"email",label:"E-Mail",validators:[{type:g}],errorText:"Please enter a valid email address",onInput:j}),Object(d.jsx)(_,{id:"password",element:"input",type:"password",label:"Pasword",validators:[w(6)],errorText:"Please enter atleast 6 characters",onInput:j}),Object(d.jsx)(E,{type:"submit",disabled:!o.isValid,children:i?"LOGIN":"SIGNUP"})]}),i?Object(d.jsx)("p",{children:"Don't have an account?"}):Object(d.jsx)("p",{children:"Already have an account?"}),Object(d.jsx)(E,{inverse:!0,onClick:function(){i?b(Object(m.a)(Object(m.a)({},o.inputs),{},{name:{value:"",isValid:!1}}),!1):b(Object(m.a)(Object(m.a)({},o.inputs),{},{name:void 0}),o.inputs.email.isValid&&o.inputs.password.isValid),a((function(e){return!e}))},children:i?"SIGNUP":"LOGIN"})]})}),k=(n(19),function(){var e=V({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1}},!1),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("form",{className:"place-form",onSubmit:function(e){e.preventDefault(),console.log(n.inputs)},children:[Object(d.jsx)(_,{id:"title",element:"input",type:"text",label:"Title",validators:[N()],errorText:"Please enter a valid title",onInput:c}),Object(d.jsx)(_,{id:"description",element:"textarea",label:"Description",validators:[w(5)],errorText:"Please enter a valid description (at least 5 characters)",onInput:c}),Object(d.jsx)(_,{id:"address",element:"input",label:"Address",validators:[N()],errorText:"Please enter a valid address",onInput:c}),Object(d.jsx)(E,{type:"submit",disabled:!n.isValid,children:"ADD PLACE"})]})}),L=n(53),P=(n(43),function(e){return s.a.createPortal(Object(d.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),U=(n(44),function(e){var t=Object(d.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(d.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(d.jsx)("h2",{children:e.header})}),Object(d.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(d.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.a.createPortal(t,document.getElementById("modal-hook"))}),D=function(e){return Object(d.jsxs)(i.a.Fragment,{children:[e.show&&Object(d.jsx)(P,{onClick:e.onCancel}),Object(d.jsx)(L.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(d.jsx)(U,Object(m.a)({},e))})]})},M=(n(45),function(e){var t=Object(c.useRef)(),n=e.center,i=e.zoom;return Object(c.useEffect)((function(){new window.ol.Map({target:t.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([n.lng,n.lat]),zoom:i})})}),[n,i]),Object(d.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style,id:"map"})}),Y=(n(46),function(e){var t=Object(c.useContext)(S),n=Object(c.useState)(!1),a=Object(l.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),b=j[0],O=j[1],h=function(){return r(!1)},m=function(){O(!1)};return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(D,{show:s,onCancel:h,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:Object(d.jsx)(E,{onClick:h,children:"CLOSE"}),children:Object(d.jsx)("div",{className:"map-container",children:Object(d.jsx)(M,{center:e.coordinates,zoom:16})})}),Object(d.jsx)(D,{show:b,onCancel:m,header:"Are  you sure?",footerClass:"place-item__modal-actions",footer:Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(E,{inverse:!0,onClick:m,children:"CANCEL"}),Object(d.jsx)(E,{danger:!0,onClick:function(){O(!1),console.log("DELETING...")},children:"DELETE"})]}),children:Object(d.jsx)("p",{children:"Do you want to delete this place? this action can not be undone"})}),Object(d.jsx)("li",{className:"place-item",children:Object(d.jsxs)(u,{className:"place-item__content",children:[Object(d.jsx)("div",{className:"place-item__image",children:Object(d.jsx)("img",{src:e.image,alt:e.title})}),Object(d.jsxs)("div",{className:"place-item__info",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("h3",{children:e.address}),Object(d.jsx)("p",{children:e.description})]}),Object(d.jsxs)("div",{className:"place-item__actions",children:[Object(d.jsx)(E,{inverse:!0,onClick:function(){return r(!0)},children:"VIEW ON MAP"}),t.isLoggedIn&&Object(d.jsx)(E,{to:"/places/".concat(e.id),children:"EDIT"}),t.isLoggedIn&&Object(d.jsx)(E,{danger:!0,onClick:function(){O(!0)},children:"DELETE"})]})]})})]})}),G=(n(47),function(e){return 0===e.items.length?Object(d.jsx)("div",{className:"place-list center",children:Object(d.jsxs)(u,{children:[Object(d.jsx)("h2",{children:"No places found. Maybe create one?"}),Object(d.jsx)(E,{to:"/places/new",children:"Share Place"})]})}):Object(d.jsx)("ul",{className:"place-list",children:e.items.map((function(e){return Object(d.jsx)(Y,{id:e.id,image:e.imageUrl,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location},e.id)}))})}),z=[{id:"p1",title:"Emp. State Building",description:"Famous sky scraper",imageUrl:"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_686/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.webp",address:"20 W 34th St, New York, NY 10001, United States",location:{lat:40.7484405,lng:-73.9856644},creator:"u1"},{id:"p2",title:"Empire State Building",description:"Famous sky scraper",imageUrl:"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_686/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.webp",address:"20 W 34th St, New York, NY 10001, United States",location:{lat:40.7484405,lng:-73.9856644},creator:"u2"}],B=function(){var e=Object(r.g)().userId,t=z.filter((function(t){return t.creator===e}));return Object(d.jsx)(G,{items:t})},F=[{id:"p1",title:"Emp. State Building",description:"Famous sky scraper",imageUrl:"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_686/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.webp",address:"20 W 34th St, New York, NY 10001, United States",location:{lat:40.7484405,lng:-73.9856644},creator:"u1"},{id:"p2",title:"Empire State Building",description:"Famous sky scraper",imageUrl:"https://www.history.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_686/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.webp",address:"20 W 34th St, New York, NY 10001, United States",location:{lat:40.7484405,lng:-73.9856644},creator:"u2"}],H=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(r.g)().placeId,s=V({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),o=Object(l.a)(s,3),j=o[0],b=o[1],O=o[2],h=F.find((function(e){return e.id===a}));Object(c.useEffect)((function(){h&&O({title:{value:h.title,isValid:!0},description:{value:h.description,isValid:!0}},!0),i(!1)}),[O,h]);return h?n?Object(d.jsx)("div",{className:"center",children:Object(d.jsx)("h2",{children:"Loading..."})}):Object(d.jsxs)("form",{className:"place-form",onSubmit:function(e){e.preventDefault(),console.log(j.inputs)},children:[Object(d.jsx)(_,{id:"title",element:"input",type:"text",label:"Title",validators:[N()],errorText:"Please enter a valid title",onInput:b,initialValue:j.inputs.title.value,initialValid:j.inputs.title.isValid}),Object(d.jsx)(_,{id:"description",element:"textarea",label:"Description",validators:[w(5)],errorText:"Please enter a valid description (min. 5 characters)",onInput:b,initialValue:j.inputs.description.value,initialValid:j.inputs.description.isValid}),Object(d.jsx)(E,{type:"submit",disabled:!j.isValid,children:"UPDATE PLACE"})]}):Object(d.jsx)("div",{className:"center",children:Object(d.jsx)(u,{children:Object(d.jsx)("h2",{children:"Could not find place!"})})})},R=(n(48),function(e){return Object(d.jsx)("header",{className:"main-header",children:e.children})}),q=(n(49),function(e){var t=Object(c.useContext)(S);return Object(d.jsxs)("ul",{className:"nav-links",children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:"/",exact:!0,children:"ALL USERS"})}),t.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:"/u1/places",children:"MY PLACES"})}),t.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:"/places/new",children:"ADD PLACE"})}),t.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:t.logout,children:"LOGOUT"})}),!t.isLoggedIn&&Object(d.jsx)("li",{children:Object(d.jsx)(o.c,{to:"/authenticate",children:"AUTHENTICATE"})})]})}),W=(n(50),function(e){var t=Object(d.jsx)(L.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(d.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return s.a.createPortal(t,document.getElementById("drawer-hook"))}),J=(n(51),function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],r=function(){s(!1)};return Object(d.jsxs)(i.a.Fragment,{children:[a&&Object(d.jsx)(P,{onClick:r}),Object(d.jsx)(W,{show:a,onClick:r,children:Object(d.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(d.jsx)(q,{})})}),Object(d.jsxs)(R,{children:[Object(d.jsxs)("button",{className:"main-navigation__menu-btn",onClick:function(){s(!0)},children:[Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]}),Object(d.jsx)("h1",{className:"main-navigation__title",children:Object(d.jsx)(o.b,{to:"/",children:"PLACES APP"})}),Object(d.jsx)("nav",{className:"main-navigation__header-nav",children:Object(d.jsx)(q,{})})]})]})});var X=function(){var e,t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],a=n[1],s=Object(c.useCallback)((function(){a(!0)}),[]),j=Object(c.useCallback)((function(){a(!1)}),[]);return e=i?Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",exact:!0,children:Object(d.jsx)(h,{})}),Object(d.jsx)(r.b,{path:"/:userId/places",exact:!0,children:Object(d.jsx)(B,{})}),Object(d.jsx)(r.b,{path:"/places/new",exact:!0,children:Object(d.jsx)(k,{})}),Object(d.jsx)(r.b,{path:"/places/:placeId",children:Object(d.jsx)(H,{})}),Object(d.jsx)(r.a,{to:"/"})]}):Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",exact:!0,children:Object(d.jsx)(h,{})}),Object(d.jsx)(r.b,{path:"/:userId/places",exact:!0,children:Object(d.jsx)(B,{})}),Object(d.jsx)(r.b,{path:"/authenticate",exact:!0,children:Object(d.jsx)(A,{})}),Object(d.jsx)(r.a,{to:"/authenticate"})]}),Object(d.jsx)(S.Provider,{value:{isLoggedIn:i,login:s,logout:j},children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(J,{}),Object(d.jsx)("main",{children:e})]})})};s.a.render(Object(d.jsx)(X,{}),document.getElementById("root"))}]),[[52,1,2]]]);
//# sourceMappingURL=main.af7021d0.chunk.js.map