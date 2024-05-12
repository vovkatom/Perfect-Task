import{j as e,c as R,a as B,u as T,r as c,b as A,o as V,I as L,P as K,d as Y,n as $,e as G,s as J,f as S,g as Q,L as W,l as X,h as Z}from"./index-611124b2.js";import{C as z}from"./Container-e411b79f.js";import{I as g,s as ee}from"./Icon-ad03354b.js";import{C as H,a as se,S as te}from"./ScreensPage-d9bd13d8.js";const oe="_burgerButton_1ff8g_1",ne="_burgerIcon_1ff8g_15",U={burgerButton:oe,burgerIcon:ne},ae=({onClick:s})=>e.jsx(e.Fragment,{children:e.jsx("button",{className:U.burgerButton,type:"button",onClick:s,children:e.jsx(g,{id:"icon-menu",className:U.burgerIcon,width:"24",height:"24"})})}),le="_headerMainContainer_1nuvp_1",re="_headerContainer_1nuvp_26",ce="_customBox_1nuvp_51",ie="_user_1nuvp_58",de="_userName_1nuvp_66",me="_avatar_1nuvp_81",_={headerMainContainer:le,headerContainer:re,customBox:ce,user:ie,userName:de,avatar:me},ue="_background_17xf8_1",pe="_modalPageBox_17xf8_15",_e="_close_17xf8_27",he="_editProfileTitle_17xf8_36",xe="_errorText_17xf8_124",j={background:ue,modalPageBox:pe,close:_e,editProfileTitle:he,errorText:xe},ge=({isOpen:s,onClose:t,title:o,children:n})=>s?e.jsx("div",{className:j.background,children:e.jsxs("div",{className:j.modalPageBox,children:[e.jsx("span",{className:j.close,onClick:t,children:"×"}),e.jsx("h2",{className:j.editProfileTitle,children:o}),e.jsx("div",{className:j.content,children:n})]})}):null,je="_inputClassName_1l4tr_2",be="_plusIcon_1l4tr_25",fe="_buttonSend_1l4tr_32",Ne="_authControl_1l4tr_138",Ce="_profileForm_1l4tr_143",ve="_avatar_1l4tr_150",Ie="_buttonIconProfile_1l4tr_159",ke="_buttonPlusProfile_1l4tr_172",m={inputClassName:je,plusIcon:be,buttonSend:fe,authControl:Ne,profileForm:Ce,avatar:ve,buttonIconProfile:Ie,buttonPlusProfile:ke},Pe=R().shape({email:B().email().required(),password:B().required(),name:B().required()}),Te=({user:s,onCloseModal:t})=>{var C,v,I;const o=T(),[n,a]=c.useState(null),{register:r,handleSubmit:u,formState:{errors:d}}=A({defaultValues:s,resolver:V(Pe)}),p=i=>{const l=i.target.files[0];a(l)},w=async i=>{try{const l=new FormData;l.append("avatarURL",n),l.append("name",i.name),l.append("email",i.email),l.append("password",i.password),t(),await o(Y(l)),$.Notify.success("Profile updated successfully")}catch{return $.Notify.failure("Server error. Please try again.")}};return e.jsxs("form",{className:m.profileForm,onSubmit:u(w),children:[e.jsxs("div",{className:m.avatar,children:[e.jsx("img",{src:n?URL.createObjectURL(n):s.avatarURL,alt:"avatar"}),e.jsxs("div",{className:m.buttonIconProfile,children:[e.jsx("label",{htmlFor:"avatarInput",children:e.jsx("svg",{width:"24",height:"24",className:m.plusIcon,children:e.jsx("use",{xlinkHref:`${ee}#icon-plus`})})}),e.jsx("input",{id:"avatarInput",type:"file",accept:"image/*",onChange:p,style:{display:"none"}})]})]}),e.jsx("input",{className:m.inputClassName,...r("name")}),e.jsx(L,{message:(C=d.name)==null?void 0:C.message}),e.jsx("input",{className:m.inputClassName,...r("email")}),e.jsx(L,{message:(v=d.email)==null?void 0:v.message}),e.jsx(K,{className:m.inputClassName,register:r,placeholder:"Current password"}),e.jsx(L,{message:(I=d.password)==null?void 0:I.message}),e.jsx("button",{className:m.buttonSend,type:"submit",children:"Send"})]})},we="_background_1qqs1_1",Be="_popUpBox_1qqs1_17",Le="_themeList_1qqs1_38",Se="_popUpBtn_1qqs1_44",k={background:we,popUpBox:Be,themeList:Le,popUpBtn:Se},ye="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let qe=(s=21)=>{let t="",o=crypto.getRandomValues(new Uint8Array(s));for(;s--;)t+=ye[o[s]&63];return t};const Me=({children:s,onClick:t,listClassName:o,itemClassName:n})=>e.jsx("div",{className:k.background,children:e.jsx("div",{className:k.popUpBox,children:e.jsx("ul",{className:`${k.themeList} ${o} `,children:s==null?void 0:s.map((a,r)=>e.jsx("li",{id:qe(),className:n,children:e.jsx("button",{className:k.popUpBtn,onClick:()=>t(a),children:a})},r))})})}),y="theme",b="light",f="dark",N="violet",$e=()=>{const s=document.querySelector("body");document.querySelector(".themeChangeList").addEventListener("click",o=>{o.preventDefault();const{textContent:n}=o.target,a=n.trim().toLowerCase();switch(console.log(a),console.log(s),a){case b:localStorage.setItem(y,b),s.classList.add(b),s.classList.remove(f),s.classList.remove(N);break;case f:localStorage.setItem(y,f),s.classList.add(f),s.classList.remove(b),s.classList.remove(N);break;case N:localStorage.setItem(y,N),s.classList.add(N),s.classList.remove(b),s.classList.remove(f);break}})},Ue=({onClick:s})=>(c.useEffect(()=>{$e()},[]),e.jsx(Me,{onClick:s,listClassName:"themeChangeList",itemClassName:"themeChangeItem",children:["Light","Dark","Violet"]})),Oe="_themeBtn_ik5it_1",Fe="_themeIcon_ik5it_30",O={themeBtn:Oe,themeIcon:Fe},He=({onClick:s})=>e.jsx(e.Fragment,{children:e.jsxs("button",{className:O.themeBtn,type:"button",onClick:s,children:["Theme",e.jsx(g,{id:"chevron-down",className:O.themeIcon,width:"10",height:"7"})]})}),Ee=({toggleSidebar:s})=>{const t=G(J),[o,n]=c.useState(!1),[a,r]=c.useState(!1),u=()=>{n(!0)},d=()=>{n(!1)},p=()=>{r(!a)};return e.jsxs("div",{className:_.headerMainContainer,children:[e.jsxs("header",{className:_.headerContainer,children:[e.jsx(ae,{onClick:s}),e.jsxs("div",{className:_.customBox,children:[e.jsx(He,{onClick:p}),e.jsxs("div",{className:_.user,onClick:u,children:[e.jsx("p",{className:_.userName,children:t==null?void 0:t.name}),e.jsx("div",{className:_.avatar,children:e.jsx("img",{src:`${t==null?void 0:t.avatarURL}`,alt:"User avatar"})})]})]})]}),e.jsx(Ue,{onClick:p}),e.jsxs(ge,{isOpen:o,onClose:d,title:"Edit profile",children:[e.jsx(Te,{user:t,onCloseModal:d})," "]})]})},De="_container_151v0_1",Re="_sidebar_151v0_11",Ae="_myBoardsTitle_151v0_30",q={container:De,sidebar:Re,myBoardsTitle:Ae},Ve="_logo_1u7oy_1",Ke="_logoIcon_1u7oy_8",Ye="_logoTitle_1u7oy_22",M={logo:Ve,logoIcon:Ke,logoTitle:Ye},Ge=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:M.logo,children:[e.jsx(g,{className:M.logoIcon,id:"icon-logo2",width:"32",height:"32"}),e.jsx("p",{className:M.logoTitle,children:"Perfect Task"})]})}),Je="_button_rp9xq_1",Qe="_buttonTitle_rp9xq_21",We="_buttonPlus_rp9xq_29",Xe="_iconPlus_rp9xq_39",P={button:Je,buttonTitle:Qe,buttonPlus:We,iconPlus:Xe},Ze=()=>{const[s,t]=c.useState(!1),o=()=>{t(!0)},n=()=>{t(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:P.button,type:"button",onClick:o,children:[e.jsx("p",{className:P.buttonTitle,children:"Create a new board"}),e.jsx("div",{className:P.buttonPlus,children:e.jsx(g,{id:"icon-plus",className:P.iconPlus,width:"20",height:"20"})})]}),e.jsx(H,{isOpen:s,onClose:n,children:e.jsx(se,{})})]})},ze="_modalInput_9fd9x_8",es="_modalControl_9fd9x_20",ss="_modalControlText_9fd9x_27",ts="_modalButton_9fd9x_34",h={modalInput:ze,modalControl:es,modalControlText:ss,modalButton:ts},F={email:"",message:""},os=()=>{const[s,t]=c.useState({...F}),o=T(),n=i=>{const{name:l,value:E}=i.target;t(D=>({...D,[l]:E}))},a=i=>{i.preventDefault();try{o(Q(s)),r()}catch(l){console.log(l.response.data.message)}},r=()=>{t({...F})},u=c.useId(),d=c.useId(),{email:p,message:w}=s,C=S(h.modalInput,h.modalControl),v=S(h.modalInput,h.modalControlText),I=S(h.modalButton,h.modalControl);return e.jsx("div",{children:e.jsxs("form",{onSubmit:a,children:[e.jsx("div",{children:e.jsx("input",{className:C,type:"email",id:u,name:"email",value:p,onChange:n,placeholder:"Email address",required:!0})}),e.jsx("div",{children:e.jsx("textarea",{className:v,id:d,name:"message",value:w,onChange:n,rows:"4",placeholder:"Comment",required:!0})}),e.jsx("button",{className:I,type:"submit",children:"Send"})]})})},ns="_container_79wtw_1",as="_image_79wtw_15",ls="_infoText_79wtw_23",rs="_perfectTask_79wtw_32",cs="_question_79wtw_36",is="_needHelpLink_79wtw_43",ds="_iconHelp_79wtw_53",x={container:ns,image:as,infoText:ls,perfectTask:rs,question:cs,needHelpLink:is,iconHelp:ds},ms=()=>{const[s,t]=c.useState(!1),o=()=>{t(!0)},n=()=>{t(!1)};return e.jsxs("div",{className:x.container,children:[e.jsx("svg",{className:x.image}),e.jsxs("p",{className:x.infoText,children:["If you need help with"," ",e.jsx("span",{className:x.perfectTask,children:"Perfect Task"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(W,{className:x.needHelpLink,onClick:o,children:[e.jsx(g,{id:"icon-help-circle",className:x.iconHelp,width:"20",height:"20"}),"Need help?"]}),e.jsx(H,{isOpen:s,onClose:n,title:"Need help",children:e.jsx(os,{})})]})},us="_btn_logout_18dqq_1",ps={btn_logout:us},_s=()=>{const s=T(),t=()=>s(X());return e.jsx("div",{children:e.jsxs("button",{className:ps.btn_logout,onClick:t,type:"button",children:[e.jsx(g,{id:"logout",width:"32",height:"32",className:""}),"Log Out"]})})},hs=()=>e.jsxs("div",{className:`${q.container} ${q.sidebar}`,children:[e.jsx(Ge,{}),e.jsx("h3",{className:q.myBoardsTitle,children:"My boards"}),e.jsx(Ze,{}),e.jsx(ms,{}),e.jsx(_s,{})]}),xs="_background_stxq7_1",gs={background:xs},Cs=()=>{const[s,t]=c.useState(!1),o=window.location.search,a=new URLSearchParams(o).get("token"),r=T();a&&r(Z(a));const u=()=>{t(!s)};return e.jsxs(e.Fragment,{children:[e.jsx(Ee,{toggleSidebar:u}),e.jsxs("div",{className:gs.background,children:[s&&e.jsx(hs,{}),e.jsx(z,{className:"home-page",children:e.jsx(te,{})})]})]})};export{Cs as default};