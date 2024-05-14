import{j as e,b as w,u as S,f as ee,r,h as se,o as te,i as oe,c as G,a as D,k as ne,n as q,m as ae,L as ce,p as le,q as re,t as ie,v as de}from"./index-ac6e1508.js";import{C as ue}from"./Container-2d238dbb.js";import{I as u,s as me}from"./Icon-6d4a4854.js";import{c as W,a as U,u as J,I as E,P as _e,o as K,b as H}from"./InputError-fdfcd951.js";import{r as he,C as Q,S as pe}from"./ScreensPage-88115239.js";import{a as X}from"./userBoard-selectors-dc6920e1.js";const ge="_burgerButton_1l6xo_1",xe="_burgerIcon_1l6xo_15",A={burgerButton:ge,burgerIcon:xe},be=({onClick:t})=>e.jsx(e.Fragment,{children:e.jsx("button",{className:A.burgerButton,type:"button",onClick:t,children:e.jsx(u,{id:"icon-menu",className:A.burgerIcon,width:"24",height:"24"})})}),je="_headerMainContainer_gaapz_1",fe="_headerContainer_gaapz_26",Ne="_customBox_gaapz_51",Ce="_user_gaapz_58",Be="_userName_gaapz_66",Ie="_avatar_gaapz_84",ve="_avatarImg_gaapz_98",j={headerMainContainer:je,headerContainer:fe,customBox:Ne,user:Ce,userName:Be,avatar:Ie,avatarImg:ve},Se="_background_c2bk2_1",we="_modalPageBox_c2bk2_15",ye="_close_c2bk2_27",ke="_editProfileTitle_c2bk2_36",Pe="_errorText_c2bk2_124",k={background:Se,modalPageBox:we,close:ye,editProfileTitle:ke,errorText:Pe},Te=({isOpen:t,onClose:s,title:a,children:o})=>t?e.jsx("div",{className:k.background,children:e.jsxs("div",{className:k.modalPageBox,children:[e.jsx("span",{className:k.close,onClick:s,children:"×"}),e.jsx("h2",{className:k.editProfileTitle,children:a}),e.jsx("div",{className:k.content,children:o})]})}):null,Le="_inputClassName_1l4tr_2",$e="_plusIcon_1l4tr_25",Me="_buttonSend_1l4tr_32",Oe="_authControl_1l4tr_138",Ue="_profileForm_1l4tr_143",qe="_avatar_1l4tr_150",Fe="_buttonIconProfile_1l4tr_159",Ee="_buttonPlusProfile_1l4tr_172",x={inputClassName:Le,plusIcon:$e,buttonSend:Me,authControl:Oe,profileForm:Ue,avatar:qe,buttonIconProfile:Fe,buttonPlusProfile:Ee},He=W().shape({email:U().email().required(),password:U().required(),name:U().required()}),ze=({user:t,onCloseModal:s})=>{var f,N,C;const a=w();S(ee);const[o,c]=r.useState(null),{register:l,handleSubmit:n,formState:{errors:i}}=J({defaultValues:t,resolver:K(He)}),_=m=>{const d=m.target.files[0];c(d)},h=async m=>{const d=new FormData;d.append("avatarURL",o),d.append("name",m.name),d.append("email",m.email),d.append("password",m.password),a(se(d)),s()};return e.jsxs("form",{className:x.profileForm,onSubmit:n(h),children:[e.jsxs("div",{className:x.avatar,children:[e.jsx("img",{src:o?URL.createObjectURL(o):t&&t.avatarURL,alt:"avatar"}),e.jsxs("div",{className:x.buttonIconProfile,children:[e.jsx("label",{htmlFor:"avatarInput",children:e.jsx("svg",{width:"24",height:"24",className:x.plusIcon,children:e.jsx("use",{xlinkHref:`${me}#icon-plus`})})}),e.jsx("input",{id:"avatarInput",type:"file",accept:"image/*",onChange:_,style:{display:"none"}})]})]}),e.jsx("input",{className:x.inputClassName,...l("name")}),e.jsx(E,{message:(f=i.name)==null?void 0:f.message}),e.jsx("input",{className:x.inputClassName,...l("email")}),e.jsx(E,{message:(N=i.email)==null?void 0:N.message}),e.jsx(_e,{className:x.inputClassName,register:l,placeholder:"Current password"}),e.jsx(E,{message:(C=i.password)==null?void 0:C.message}),e.jsx("button",{className:x.buttonSend,type:"submit",children:"Send"})]})},Re="_background_2ne2y_1",De="_popUpBox_2ne2y_17",Ae="_themeList_2ne2y_38",Ve="_popUpBtn_2ne2y_44",T={background:Re,popUpBox:De,themeList:Ae,popUpBtn:Ve},Ye="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Ge=(t=21)=>{let s="",a=crypto.getRandomValues(new Uint8Array(t));for(;t--;)s+=Ye[a[t]&63];return s};const We=({children:t,onClick:s,listClassName:a,itemClassName:o})=>e.jsx("div",{className:T.background,children:e.jsx("div",{className:T.popUpBox,children:e.jsx("ul",{className:`${T.themeList} ${a}`,children:t==null?void 0:t.map((c,l)=>e.jsx("li",{id:Ge(),className:o,children:e.jsx("button",{className:T.popUpBtn,onClick:()=>s(c),children:c})},l))})})}),Je=({onClick:t})=>(r.useEffect(()=>{te()},[]),e.jsx(We,{onClick:t,listClassName:"themeChangeList",itemClassName:"themeChangeItem",children:["Light","Dark","Violet"]})),Ke="_themeBtn_1njqs_1",Qe="_themeIcon_1njqs_31",V={themeBtn:Ke,themeIcon:Qe},Xe=({onClick:t})=>e.jsx(e.Fragment,{children:e.jsxs("button",{className:V.themeBtn,type:"button",onClick:t,children:["Theme",e.jsx(u,{id:"chevron-down",className:V.themeIcon,width:"10",height:"7"})]})}),Ze=({toggleSidebar:t})=>{const s=S(oe),a=S(G),[o,c]=r.useState(!1),[l,n]=r.useState(!1),i=()=>{c(!0)},_=()=>{c(!1)},h=()=>{n(!l)};return e.jsxs("div",{className:j.headerMainContainer,children:[e.jsxs("header",{className:j.headerContainer,children:[e.jsx(be,{onClick:t}),e.jsxs("div",{className:j.customBox,children:[e.jsx(Xe,{onClick:h}),e.jsxs("div",{className:j.user,onClick:i,children:[e.jsx("p",{className:j.userName,children:s==null?void 0:s.name}),e.jsx("div",{className:j.avatar,children:a?e.jsx(D,{}):e.jsx("img",{className:j.avatarImg,src:`${s==null?void 0:s.avatarURL}`,alt:"User avatar"})})]})]})]}),l&&e.jsx(Je,{onClick:h}),e.jsx(Te,{isOpen:o,onClose:_,title:"Edit profile",children:e.jsx(ze,{user:s,onCloseModal:_})})]})},es="_container_1ocvb_1",ss="_sidebar_1ocvb_11",ts="_myBoardsTitle_1ocvb_40",z={container:es,sidebar:ss,myBoardsTitle:ts},os="_logo_1u7oy_1",ns="_logoIcon_1u7oy_8",as="_logoTitle_1u7oy_22",R={logo:os,logoIcon:ns,logoTitle:as},cs=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:R.logo,children:[e.jsx(u,{className:R.logoIcon,id:"icon-logo2",width:"32",height:"32"}),e.jsx("p",{className:R.logoTitle,children:"Perfect Task"})]})}),ls="_button_c0cga_1",rs="_buttonTitle_c0cga_21",is="_buttonPlus_c0cga_29",ds="_iconPlus_c0cga_46",L={button:ls,buttonTitle:rs,buttonPlus:is,iconPlus:ds},us="_list_19z0b_1",ms="_bgItem_19z0b_8",_s="_image_19z0b_19",hs="_imageSelected_19z0b_26",$={list:us,bgItem:ms,image:_s,imageSelected:hs},ps=({bgImages:t,updateBg:s})=>{const[a,o]=r.useState(null),c=n=>{o(n),console.log(n),s(n)},l=Object.entries(t).map(([n,i])=>e.jsx("li",{className:$.bgItem,onClick:()=>c(n),children:e.jsx("img",{className:a===n?$.imageSelected:$.image,src:i,alt:i})},n));return e.jsx("ul",{className:$.list,children:l})},gs="_buttonCreate_eah0a_1",xs="_buttonPlus_eah0a_29",bs="_iconPlus_eah0a_39",js="_icon_eah0a_22",fs="_textButton_eah0a_53",M={buttonCreate:gs,buttonPlus:xs,iconPlus:bs,icon:js,textButton:fs},Ns=()=>e.jsxs("button",{type:"submit",className:M.buttonCreate,children:[e.jsx("div",{className:M.buttonPlus,children:e.jsx(u,{id:"icon-plus",className:M.iconPlus,width:"14",height:"14"})}),e.jsx("p",{className:M.textButton,children:"Create"})]}),Cs="_iconSet_1yolm_1",Bs="_icon_1yolm_1",Is="_iconSelected_1yolm_26",O={iconSet:Cs,icon:Bs,iconSelected:Is},vs=({updateIcon:t})=>{const[s,a]=r.useState(null),o=n=>{a(n),console.log(s),t(s)},l=["icon-Project","icon-star-04","icon-loading-03","icon-puzzle-piece-02","icon-container","icon-lightning-02","icon-colors","icon-hexagon-01"].map(n=>e.jsx("li",{className:O.iconContainer,onClick:()=>o(n),children:e.jsx(u,{className:s===n?O.iconSelected:O.icon,id:n,width:"18",height:"18"})},n));return e.jsx(e.Fragment,{children:e.jsx("ul",{className:O.iconSet,children:l})})},Ss="_form_1qku4_1",ws="_input_1qku4_6",ys="_categoryName_1qku4_31",P={form:Ss,input:ws,categoryName:ys},ks=W().shape({title:U().required()}),Ps=({closeModal:t})=>{const[s,a]=r.useState([]),[o,c]=r.useState(!1),[l,n]=r.useState(null),[i,_]=r.useState(null),[h,f]=r.useState(null),N=w(),{register:C,handleSubmit:m}=J({resolver:K(ks)}),d=p=>{_(p)},y=p=>{f(p)},B=async p=>{const g={title:p.title,icon:h,background:i},F=await N(ne(g));if(t(),F.type==="boards/addBoard/fulfilled")return q.Notify.success("You've successfully created a board! Congrats)");if(F.error)return console.log(F.error.message),q.Notify.failure("Something went wrong. Please try again.")};return r.useEffect(()=>{(async()=>{try{c(!0);const g=await he();console.log(g),a(g)}catch(g){n(g.message)}finally{c(!1)}})()},[]),e.jsxs("form",{noValidate:!0,autoComplete:"off",onSubmit:m(B),className:P.form,children:[e.jsx("input",{className:P.input,type:"text",placeholder:"Title",...C("title")}),e.jsx("p",{className:P.categoryName,children:"Icons"}),e.jsx(vs,{updateIcon:y}),e.jsx("p",{className:P.categoryName,children:"Background"}),l&&e.jsx("p",{className:P.error,children:l}),o&&e.jsx("p",{children:"...Loading"}),e.jsx(ps,{bgImages:s,updateBg:d}),e.jsx(Ns,{})]})},Ts=()=>{const[t,s]=r.useState(!1),a=()=>{s(!0)},o=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:L.button,type:"button",onClick:a,children:[e.jsx("p",{className:L.buttonTitle,children:"Create a new board"}),e.jsx("div",{className:L.buttonPlus,children:e.jsx(u,{id:"icon-plus",className:L.iconPlus,width:"20",height:"20"})})]}),e.jsx(Q,{isOpen:t,onClose:o,title:"New board",children:e.jsx(Ps,{closeModal:o})})]})},Ls="_modalInput_1632w_8",$s="_modalControl_1632w_20",Ms="_modalControlText_1632w_27",Os="_modalButton_1632w_34",I={modalInput:Ls,modalControl:$s,modalControlText:Ms,modalButton:Os},Y={email:"",message:""},Us=({closeModal:t})=>{const[s,a]=r.useState({...Y}),o=w(),c=S(G),l=y=>{const{name:B,value:p}=y.target;a(g=>({...g,[B]:p}))},n=async y=>{y.preventDefault();const B=await o(ae(s));B.type==="user/support/fulfilled"&&q.Notify.success("You've successfully sent your message to our support. You will get the answer on your email during 48 hours"),B.error&&q.Notify.failure("Oops, something went wrong. Try again, please"),i(),t()},i=()=>{a({...Y})},_=r.useId(),h=r.useId(),{email:f,message:N}=s,C=H(I.modalInput,I.modalControl),m=H(I.modalInput,I.modalControlText),d=H(I.modalButton,I.modalControl);return e.jsx("div",{children:e.jsxs("form",{onSubmit:n,children:[e.jsx("div",{children:e.jsx("input",{className:C,type:"email",id:_,name:"email",value:f,onChange:l,placeholder:"Email address",required:!0})}),e.jsx("div",{children:e.jsx("textarea",{className:m,id:h,name:"message",value:N,onChange:l,rows:"4",placeholder:"Comment",required:!0})}),e.jsx("button",{className:d,type:"submit",children:c?e.jsx(D,{}):"Send"})]})})},qs="_container_79wtw_1",Fs="_image_79wtw_15",Es="_infoText_79wtw_23",Hs="_perfectTask_79wtw_32",zs="_question_79wtw_36",Rs="_needHelpLink_79wtw_43",Ds="_iconHelp_79wtw_53",v={container:qs,image:Fs,infoText:Es,perfectTask:Hs,question:zs,needHelpLink:Rs,iconHelp:Ds},As=()=>{const[t,s]=r.useState(!1),a=()=>{s(!0)},o=()=>{s(!1)};return e.jsxs("div",{className:v.container,children:[e.jsx("svg",{className:v.image}),e.jsxs("p",{className:v.infoText,children:["If you need help with"," ",e.jsx("span",{className:v.perfectTask,children:"Perfect Task"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs(ce,{className:v.needHelpLink,onClick:a,children:[e.jsx(u,{id:"icon-help-circle",className:v.iconHelp,width:"20",height:"20"}),"Need help?"]}),e.jsx(Q,{isOpen:t,onClose:o,title:"Need help",children:e.jsx(Us,{closeModal:o})})]})},Vs="_btn_logout_18dqq_1",Ys={btn_logout:Vs},Gs=()=>{const t=w(),s=()=>t(le());return e.jsx("div",{children:e.jsxs("button",{className:Ys.btn_logout,onClick:s,type:"button",children:[e.jsx(u,{id:"logout",width:"32",height:"32",className:""}),"Log Out"]})})},Ws="_boardContainer_1f2dp_1",Js="_box1_1f2dp_22",Ks="_box2_1f2dp_32",Qs="_icon_1f2dp_36",Xs="_ScrollBoardList_1f2dp_50",b={boardContainer:Ws,box1:Js,box2:Ks,icon:Qs,ScrollBoardList:Xs},Zs=()=>{const t=S(X),s=w(),a=c=>{s(ie(c))},o=t.map(({title:c,icon:l,_id:n})=>{const i={id:n,title:c};return e.jsxs("button",{className:b.boardContainer,onClick:()=>a(i),children:[e.jsxs("a",{className:b.box1,to:`home/${n}`,children:[e.jsx(u,{className:b.icon,id:l,width:"18",height:"18"}),e.jsx("p",{children:c})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",className:b.updateButton,children:e.jsx(u,{className:b.icon,id:"icon-pencil-01",width:"16",height:"16"})}),e.jsx("button",{type:"button",className:b.deleteButton,onClick:()=>s(re(n)),children:e.jsx(u,{className:b.icon,id:"icon-trash-04",width:"16",height:"16"})})]})]},c)});return e.jsx("ul",{className:b.ScrollBoardList,children:o})},Z=r.forwardRef((t,s)=>{const a=S(X),{items:o,isLoading:c,error:l}=a,n=w();return r.useEffect(()=>{n(de())},[n]),e.jsxs("div",{ref:s,className:`${z.container} ${z.sidebar}`,children:[e.jsxs("div",{children:[e.jsx(cs,{}),e.jsx("h3",{className:z.myBoardsTitle,children:"My boards"}),e.jsx(Ts,{}),l&&e.jsx("p",{children:l}),c&&e.jsx(D,{}),(o==null?void 0:o.length)===0?"":e.jsx(Zs,{})]}),e.jsxs("div",{children:[e.jsx(As,{}),e.jsx(Gs,{})]})]})});Z.displayName="SideBar";const et="_background_lg9e8_1",st={background:et},rt=()=>{const[t,s]=r.useState(!1),a=r.useRef(),o=()=>{s(!t)};return r.useEffect(()=>{const c=document.querySelector("body");if(console.dir(c),c.clientWidth>=1440){s(!0);return}const l=n=>{a.current.contains(n.target)||s(!1)};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:st.background,children:[e.jsx(Ze,{toggleSidebar:o}),t&&e.jsx(Z,{ref:a}),e.jsx(ue,{className:"home-page",children:e.jsx(pe,{})})]})})};export{rt as default};