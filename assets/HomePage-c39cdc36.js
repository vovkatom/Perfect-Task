import{j as t,I as _,a as I,r as i,f as ve,o as H,u as L,h as Ne,b as ce,L as F,i as ye,k as re,n as U,m as Ce,p as Ie,e as Be,q as Se,t as we,v as ke,w as ie}from"./index-6fc7ada6.js";import{c as le,a as q,u as ue,o as me,b as A,d as de}from"./userBoard-selectors-e94535ac.js";import{I as W,P as Te}from"./InputError-a3d2ea27.js";import{C as V,S as Pe}from"./ScreensPage-8cdfb098.js";const Le="_burgerButton_1l6xo_1",Me="_burgerIcon_1l6xo_15",G={burgerButton:Le,burgerIcon:Me},Ee=({onClick:e})=>t.jsx(t.Fragment,{children:t.jsx("button",{className:G.burgerButton,type:"button",onClick:e,children:t.jsx(_,{id:"icon-menu",className:G.burgerIcon,width:"24",height:"24"})})}),Oe="_headerMainContainer_gaapz_1",$e="_headerContainer_gaapz_26",Re="_customBox_gaapz_51",qe="_user_gaapz_58",Ue="_userName_gaapz_66",Fe="_avatar_gaapz_84",De="_avatarImg_gaapz_98",y={headerMainContainer:Oe,headerContainer:$e,customBox:Re,user:qe,userName:Ue,avatar:Fe,avatarImg:De},He="_profileForm_1ltih_1",Ae="_avatarBox_1ltih_10",We="_avatarImage_1ltih_17",Qe="_buttonIconProfile_1ltih_23",ze="_plusIcon_1ltih_45",Ve="_inputClassName_1ltih_52",Ye="_buttonSend_1ltih_76",Ke="_authControl_1ltih_93",x={profileForm:He,avatarBox:Ae,avatarImage:We,buttonIconProfile:Qe,plusIcon:ze,inputClassName:Ve,buttonSend:Ye,authControl:Ke},Ge=le().shape({email:q().email().required(),password:q().required(),name:q().required()}),Xe=({user:e,onCloseModal:s})=>{var p,v,B;const n=I(),[o,a]=i.useState(null),{register:c,handleSubmit:r,formState:{errors:m}}=ue({defaultValues:e,resolver:me(Ge)}),d=f=>{const g=f.target.files[0];a(g)},l=async f=>{const g=new FormData;g.append("avatarURL",o),g.append("name",f.name),g.append("email",f.email),g.append("password",f.password),n(ve(g)),s()};return t.jsxs("form",{className:x.profileForm,onSubmit:r(l),children:[t.jsxs("div",{className:x.avatarBox,children:[t.jsx("img",{className:x.avatarImage,src:o?URL.createObjectURL(o):e&&e.avatarURL,alt:"avatar"}),t.jsxs("div",{className:x.buttonIconProfile,children:[t.jsx("label",{htmlFor:"avatarInput",children:t.jsx(_,{id:"icon-plus",className:x.plusIcon,width:"10",height:"10"})}),t.jsx("input",{id:"avatarInput",type:"file",accept:"image/*",onChange:d,style:{display:"none"}})]})]}),t.jsx("input",{className:x.inputClassName,...c("name")}),t.jsx(W,{message:(p=m.name)==null?void 0:p.message}),t.jsx("input",{className:x.inputClassName,...c("email")}),t.jsx(W,{message:(v=m.email)==null?void 0:v.message}),t.jsx(Te,{className:x.inputClassName,register:c,placeholder:"Current password"}),t.jsx(W,{message:(B=m.password)==null?void 0:B.message}),t.jsx("button",{className:x.buttonSend,type:"submit",children:"Send"})]})},Ze="_background_2ne2y_1",Je="_popUpBox_2ne2y_17",et="_themeList_2ne2y_38",tt="_popUpBtn_2ne2y_44",M={background:Ze,popUpBox:Je,themeList:et,popUpBtn:tt},st="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let nt=(e=21)=>{let s="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;)s+=st[n[e]&63];return s};const ot=({children:e,onClick:s,listClassName:n,itemClassName:o})=>t.jsx("div",{className:M.background,children:t.jsx("div",{className:M.popUpBox,children:t.jsx("ul",{className:`${M.themeList} ${n}`,children:e==null?void 0:e.map((a,c)=>t.jsx("li",{id:nt(),className:o,children:t.jsx("button",{className:M.popUpBtn,onClick:()=>s(a),children:a})},c))})})}),at="_currentThema_bdvxw_1",ct={currentThema:at},rt=({onClick:e})=>{const[s,n]=i.useState(null);i.useEffect(()=>{const a=localStorage.getItem("theme");a?(n(a),H()):(n("Light"),H(),localStorage.setItem("theme","Light"))},[]);const o=a=>{n(a),H(),localStorage.setItem("theme",a)};return t.jsx(ot,{onClick:e,listClassName:"themeChangeList",itemClassName:"themeChangeItem",children:["Light","Dark","Violet"].map((a,c)=>t.jsx("div",{className:`themeChangeItem ${s===a?ct.currentThema:""}`,onClick:()=>o(a),children:a},c))})},it="_themeBtn_1njqs_1",lt="_themeIcon_1njqs_31",X={themeBtn:it,themeIcon:lt},ut=({onClick:e})=>t.jsx(t.Fragment,{children:t.jsxs("button",{className:X.themeBtn,type:"button",onClick:e,children:["Theme",t.jsx(_,{id:"chevron-down",className:X.themeIcon,width:"10",height:"7"})]})}),mt=({toggleSidebar:e})=>{const s=L(Ne),n=L(ce),[o,a]=i.useState(!1),[c,r]=i.useState(!1),m=()=>{a(!0)},d=()=>{a(!1)},l=()=>{r(!c)};return t.jsxs("div",{className:y.headerMainContainer,children:[t.jsxs("header",{className:y.headerContainer,children:[t.jsx(Ee,{onClick:e}),t.jsxs("div",{className:y.customBox,children:[t.jsx(ut,{onClick:l}),t.jsxs("div",{className:y.user,onClick:m,children:[t.jsx("p",{className:y.userName,children:s==null?void 0:s.name}),t.jsx("div",{className:y.avatar,children:n?t.jsx(F,{}):t.jsx("img",{className:y.avatarImg,src:`${s==null?void 0:s.avatarURL}`,alt:"User avatar"})})]})]})]}),c&&t.jsx(rt,{onClick:l}),t.jsx(V,{isOpen:o,onClose:d,title:"Edit profile",children:t.jsx(Xe,{user:s,onCloseModal:d})})]})},dt="_background_1tj33_1",pt="_noBackground_1tj33_12",ht="_container_1tj33_22",_t="_upperPart_1tj33_43",gt="_myBoardsTitle_1tj33_59",ft="_bottomPart_1tj33_66",C={background:dt,noBackground:pt,container:ht,upperPart:_t,myBoardsTitle:gt,bottomPart:ft},xt="_logo_1qnvq_1",bt="_logoIcon_1qnvq_14",jt="_logoTitle_1qnvq_28",Q={logo:xt,logoIcon:bt,logoTitle:jt},vt=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:Q.logo,children:[t.jsx(_,{className:Q.logoIcon,id:"icon-logo2",width:"32",height:"32"}),t.jsx("p",{className:Q.logoTitle,children:"Perfect Task"})]})}),Nt="_button_c0cga_1",yt="_buttonTitle_c0cga_21",Ct="_buttonPlus_c0cga_29",It="_iconPlus_c0cga_46",E={button:Nt,buttonTitle:yt,buttonPlus:Ct,iconPlus:It},Bt="_list_1lu76_1",St="_bgItem_1lu76_9",wt="_image_1lu76_19",kt="_imageSelected_1lu76_26",O={list:Bt,bgItem:St,image:wt,imageSelected:kt},Tt=({bgImages:e,updateBg:s})=>{const[n,o]=i.useState(null),a=r=>{o(r),s(r)},c=Object.entries(e).map(([r,m])=>t.jsx("li",{className:O.bgItem,onClick:()=>a(r),children:t.jsx("img",{className:n===r?O.imageSelected:O.image,src:m,alt:m})},r));return t.jsx("ul",{className:O.list,children:c})},Pt="_buttonCreate_eah0a_1",Lt="_buttonPlus_eah0a_29",Mt="_iconPlus_eah0a_39",Et="_icon_eah0a_22",Ot="_textButton_eah0a_53",$={buttonCreate:Pt,buttonPlus:Lt,iconPlus:Mt,icon:Et,textButton:Ot},$t=()=>t.jsxs("button",{type:"submit",className:$.buttonCreate,children:[t.jsx("div",{className:$.buttonPlus,children:t.jsx(_,{id:"icon-plus",className:$.iconPlus,width:"14",height:"14"})}),t.jsx("p",{className:$.textButton,children:"Create"})]}),Rt="_iconSet_1yolm_1",qt="_icon_1yolm_1",Ut="_iconSelected_1yolm_26",R={iconSet:Rt,icon:qt,iconSelected:Ut},Ft=({updateIcon:e})=>{const[s,n]=i.useState(null);i.useEffect(()=>{e(s)},[s,e]);const o=r=>{n(r)},c=["icon-Project","icon-star-04","icon-loading-03","icon-puzzle-piece-02","icon-container","icon-lightning-02","icon-colors","icon-hexagon-01"].map(r=>t.jsx("li",{className:R.iconContainer,onClick:()=>o(r),children:t.jsx(_,{className:s===r?R.iconSelected:R.icon,id:r,width:"18",height:"18"})},r));return t.jsx(t.Fragment,{children:t.jsx("ul",{className:R.iconSet,children:c})})},Dt="_form_1qku4_1",Ht="_input_1qku4_6",At="_categoryName_1qku4_31",P={form:Dt,input:Ht,categoryName:At},Wt=le().shape({title:q().required()}),Qt=({closeModal:e})=>{const[s,n]=i.useState([]),[o,a]=i.useState(!1),[c,r]=i.useState(null),[m,d]=i.useState(null),[l,p]=i.useState(null),v=I(),{register:B,handleSubmit:f}=ue({resolver:me(Wt)}),g=b=>{d(b)},T=b=>{p(b)},S=async b=>{const N={title:b.title,icon:l,background:m},D=await v(ye(N));if(e(),D.type==="boards/addBoard/fulfilled")return v(re(D.payload.currentBoard)),U.Notify.success("You've successfully created a board! Congrats)");if(D.error)return U.Notify.failure("Something went wrong. Please try again.")};return i.useEffect(()=>{(async()=>{try{a(!0);const N=await Ce();n(N)}catch(N){r(N.message)}finally{a(!1)}})()},[]),t.jsxs("form",{noValidate:!0,autoComplete:"off",onSubmit:f(S),className:P.form,children:[t.jsx("input",{className:P.input,type:"text",placeholder:"Title",...B("title")}),t.jsx("p",{className:P.categoryName,children:"Icons"}),t.jsx(Ft,{updateIcon:T}),t.jsx("p",{className:P.categoryName,children:"Background"}),c&&t.jsx("p",{className:P.error,children:c}),o&&t.jsx(F,{}),t.jsx(Tt,{bgImages:s,updateBg:g}),t.jsx($t,{})]})},zt=()=>{const[e,s]=i.useState(!1),n=()=>{s(!0)},o=()=>{s(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:E.button,type:"button",onClick:n,children:[t.jsx("p",{className:E.buttonTitle,children:"Create a new board"}),t.jsx("div",{className:E.buttonPlus,children:t.jsx(_,{id:"icon-plus",className:E.iconPlus,width:"20",height:"20"})})]}),t.jsx(V,{isOpen:e,onClose:o,title:"New board",children:t.jsx(Qt,{closeModal:o})})]})},Vt="_modalInput_1632w_8",Yt="_modalControl_1632w_20",Kt="_modalControlText_1632w_27",Gt="_modalButton_1632w_34",w={modalInput:Vt,modalControl:Yt,modalControlText:Kt,modalButton:Gt},Z={email:"",message:""},Xt=({closeModal:e})=>{const[s,n]=i.useState({...Z}),o=I(),a=L(ce),c=T=>{const{name:S,value:b}=T.target;n(N=>({...N,[S]:b}))},r=async T=>{T.preventDefault();const S=await o(Ie(s));S.type==="user/support/fulfilled"&&U.Notify.success("You've successfully sent your message to our support. You will get the answer on your email during 48 hours"),S.error&&U.Notify.failure("Oops, something went wrong. Try again, please"),m(),e()},m=()=>{n({...Z})},d=i.useId(),l=i.useId(),{email:p,message:v}=s,B=A(w.modalInput,w.modalControl),f=A(w.modalInput,w.modalControlText),g=A(w.modalButton,w.modalControl);return t.jsx("div",{children:t.jsxs("form",{onSubmit:r,children:[t.jsx("div",{children:t.jsx("input",{className:B,type:"email",id:d,name:"email",value:p,onChange:c,placeholder:"Email address",required:!0})}),t.jsx("div",{children:t.jsx("textarea",{className:f,id:l,name:"message",value:v,onChange:c,rows:"4",placeholder:"Comment",required:!0})}),t.jsx("button",{className:g,type:"submit",children:a?t.jsx(F,{}):"Send"})]})})},Zt="_container_129jp_1",Jt="_image_129jp_18",es="_infoText_129jp_26",ts="_perfectTask_129jp_42",ss="_question_129jp_46",ns="_needHelpLink_129jp_53",os="_iconHelp_129jp_63",k={container:Zt,image:Jt,infoText:es,perfectTask:ts,question:ss,needHelpLink:ns,iconHelp:os},as=()=>{const[e,s]=i.useState(!1),n=()=>{s(!0)},o=()=>{s(!1)};return t.jsxs("div",{className:k.container,children:[t.jsx("svg",{className:k.image}),t.jsxs("p",{className:k.infoText,children:["If you need help with ",t.jsx("br",{}),t.jsx("span",{className:k.perfectTask,children:"Perfect Task"}),", check out our support resources or reach out to our customer support team."]}),t.jsxs(Be,{className:k.needHelpLink,onClick:n,children:[t.jsx(_,{id:"icon-help-circle",className:k.iconHelp,width:"20",height:"20"}),"Need help?"]}),t.jsx(V,{isOpen:e,onClose:o,title:"Need help",children:t.jsx(Xt,{closeModal:o})})]})},cs="_btn_logout_18dqq_1",rs={btn_logout:cs},is=()=>{const e=I(),s=()=>e(Se());return t.jsx("div",{children:t.jsxs("button",{className:rs.btn_logout,onClick:s,type:"button",children:[t.jsx(_,{id:"logout",width:"32",height:"32",className:""}),"Log Out"]})})},ls="_buttonsMainContainer_qmte6_6",us="_boardButtonsList_qmte6_23",J={buttonsMainContainer:ls,boardButtonsList:us},ms="_buttonBox_1atpx_1",ds="_mainButton_1atpx_22",ps="_icon_1atpx_56",hs="_helperButton_1atpx_80",j={buttonBox:ms,mainButton:ds,icon:ps,helperButton:hs},_s=({id:e,title:s,icon:n,handleBoardClick:o})=>{const a=I(),c={id:e,title:s};return t.jsxs("div",{className:j.buttonBox,children:[t.jsxs("button",{className:j.mainButton,onClick:()=>o(c),children:[t.jsx(_,{className:j.icon,id:n,width:"18",height:"18"}),s]}),t.jsxs("div",{className:j.helperButton,children:[t.jsx("button",{type:"button",className:j.updateButton,children:t.jsx(_,{className:j.icon,id:"icon-pencil-01",width:"16",height:"16"})}),t.jsx("button",{type:"button",className:j.deleteButton,onClick:()=>a(we(e)),children:t.jsx(_,{className:j.icon,id:"icon-trash-04",width:"16",height:"16"})})]})]})},gs=()=>{const e=L(de),s=I(),n=o=>{s(re(o))};return t.jsx("div",{className:J.buttonsMainContainer,children:!!e.length&&t.jsx("ul",{className:J.boardButtonsList,children:e.map(({title:o,icon:a,_id:c})=>t.jsx(_s,{id:c,title:o,icon:a,handleBoardClick:n},o))})})},fs=({viewPortWidth:e,isOpen:s})=>{const n=i.useRef(),o=L(de),{items:a,isLoading:c,error:r}=o,m=I();return i.useEffect(()=>{m(ke())},[m,s]),i.useEffect(()=>{const d=l=>{n.current.contains(l.target)||s(!1)};return s&&!e?document.addEventListener("mousedown",d):document.removeEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[s,e]),t.jsx("div",{className:`${e?C.noBackground:C.background}`,children:t.jsxs("div",{ref:n,className:`${C.container} ${C.sidebar}`,children:[t.jsxs("div",{className:C.upperPart,children:[t.jsx(vt,{}),t.jsx("h3",{className:C.myBoardsTitle,children:"My boards"}),t.jsx(zt,{}),r&&t.jsx("p",{children:r}),c&&t.jsx(F,{}),(a==null?void 0:a.length)===0?"":t.jsx(gs,{})]}),t.jsxs("div",{className:C.bottomPart,children:[t.jsx(as,{}),t.jsx(is,{})]})]})})};var pe={exports:{}},xs="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bs=xs,js=bs;function he(){}function _e(){}_e.resetWarningCache=he;var vs=function(){function e(o,a,c,r,m,d){if(d!==js){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function s(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:_e,resetWarningCache:he};return n.PropTypes=n,n};pe.exports=vs();var Ns=pe.exports;const u=ie(Ns),ys="_background_m8c3b_1",Cs="_screenPageContainer_m8c3b_44",ee={background:ys,screenPageContainer:Cs};var Y={};Y.match=Ts;Y.parse=ge;var Is=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,Bs=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,Ss=/^(?:(min|max)-)?(.+)/,ws=/(em|rem|px|cm|mm|in|pt|pc)?$/,ks=/(dpi|dpcm|dppx)?$/;function Ts(e,s){return ge(e).some(function(n){var o=n.inverse,a=n.type==="all"||s.type===n.type;if(a&&o||!(a||o))return!1;var c=n.expressions.every(function(r){var m=r.feature,d=r.modifier,l=r.value,p=s[m];if(!p)return!1;switch(m){case"orientation":case"scan":return p.toLowerCase()===l.toLowerCase();case"width":case"height":case"device-width":case"device-height":l=ne(l),p=ne(p);break;case"resolution":l=se(l),p=se(p);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":l=te(l),p=te(p);break;case"grid":case"color":case"color-index":case"monochrome":l=parseInt(l,10)||1,p=parseInt(p,10)||0;break}switch(d){case"min":return p>=l;case"max":return p<=l;default:return p===l}});return c&&!o||!c&&o})}function ge(e){return e.split(",").map(function(s){s=s.trim();var n=s.match(Is),o=n[1],a=n[2],c=n[3]||"",r={};return r.inverse=!!o&&o.toLowerCase()==="not",r.type=a?a.toLowerCase():"all",c=c.match(/\([^\)]+\)/g)||[],r.expressions=c.map(function(m){var d=m.match(Bs),l=d[1].toLowerCase().match(Ss);return{modifier:l[1],feature:l[2],value:d[2]}}),r})}function te(e){var s=Number(e),n;return s||(n=e.match(/^(\d+)\s*\/\s*(\d+)$/),s=n[1]/n[2]),s}function se(e){var s=parseFloat(e),n=String(e).match(ks)[1];switch(n){case"dpcm":return s/2.54;case"dppx":return s*96;default:return s}}function ne(e){var s=parseFloat(e),n=String(e).match(ws)[1];switch(n){case"em":return s*16;case"rem":return s*16;case"cm":return s*96/2.54;case"mm":return s*96/2.54/10;case"in":return s*96;case"pt":return s*72;case"pc":return s*72/12;default:return s}}var Ps=Y.match,oe=typeof window<"u"?window.matchMedia:null;function Ls(e,s,n){var o=this,a;oe&&!n&&(a=oe.call(window,e)),a?(this.matches=a.matches,this.media=a.media,a.addListener(m)):(this.matches=Ps(e,s),this.media=e),this.addListener=c,this.removeListener=r,this.dispose=d;function c(l){a&&a.addListener(l)}function r(l){a&&a.removeListener(l)}function m(l){o.matches=l.matches,o.media=l.media}function d(){a&&a.removeListener(m)}}function Ms(e,s,n){return new Ls(e,s,n)}var Es=Ms;const Os=ie(Es);var $s=/[A-Z]/g,Rs=/^ms-/,z={};function qs(e){return"-"+e.toLowerCase()}function fe(e){if(z.hasOwnProperty(e))return z[e];var s=e.replace($s,qs);return z[e]=Rs.test(s)?"-"+s:s}function Us(e,s){if(e===s)return!0;if(!e||!s)return!1;const n=Object.keys(e),o=Object.keys(s),a=n.length;if(o.length!==a)return!1;for(let c=0;c<a;c++){const r=n[c];if(e[r]!==s[r]||!Object.prototype.hasOwnProperty.call(s,r))return!1}return!0}const h=u.oneOfType([u.string,u.number]),K={all:u.bool,grid:u.bool,aural:u.bool,braille:u.bool,handheld:u.bool,print:u.bool,projection:u.bool,screen:u.bool,tty:u.bool,tv:u.bool,embossed:u.bool},xe={orientation:u.oneOf(["portrait","landscape"]),scan:u.oneOf(["progressive","interlace"]),aspectRatio:u.string,deviceAspectRatio:u.string,height:h,deviceHeight:h,width:h,deviceWidth:h,color:u.bool,colorIndex:u.bool,monochrome:u.bool,resolution:h,type:Object.keys(K)},{type:on,...Fs}=xe,be={minAspectRatio:u.string,maxAspectRatio:u.string,minDeviceAspectRatio:u.string,maxDeviceAspectRatio:u.string,minHeight:h,maxHeight:h,minDeviceHeight:h,maxDeviceHeight:h,minWidth:h,maxWidth:h,minDeviceWidth:h,maxDeviceWidth:h,minColor:u.number,maxColor:u.number,minColorIndex:u.number,maxColorIndex:u.number,minMonochrome:u.number,maxMonochrome:u.number,minResolution:h,maxResolution:h,...Fs},Ds={...K,...be};var Hs={all:Ds,types:K,matchers:xe,features:be};const As=e=>`not ${e}`,Ws=(e,s)=>{const n=fe(e);return typeof s=="number"&&(s=`${s}px`),s===!0?n:s===!1?As(n):`(${n}: ${s})`},Qs=e=>e.join(" and "),zs=e=>{const s=[];return Object.keys(Hs.all).forEach(n=>{const o=e[n];o!=null&&s.push(Ws(n,o))}),Qs(s)},Vs=i.createContext(void 0),Ys=e=>e.query||zs(e),ae=e=>e?Object.keys(e).reduce((n,o)=>(n[fe(o)]=e[o],n),{}):void 0,je=()=>{const e=i.useRef(!1);return i.useEffect(()=>{e.current=!0},[]),e.current},Ks=e=>{const s=i.useContext(Vs),n=()=>ae(e)||ae(s),[o,a]=i.useState(n);return i.useEffect(()=>{const c=n();Us(o,c)||a(c)},[e,s]),o},Gs=e=>{const s=()=>Ys(e),[n,o]=i.useState(s);return i.useEffect(()=>{const a=s();n!==a&&o(a)},[e]),n},Xs=(e,s)=>{const n=()=>Os(e,s||{},!!s),[o,a]=i.useState(n),c=je();return i.useEffect(()=>{if(c){const r=n();return a(r),()=>{r&&r.dispose()}}},[e,s]),o},Zs=e=>{const[s,n]=i.useState(e.matches);return i.useEffect(()=>{const o=a=>{n(a.matches)};return e.addListener(o),n(e.matches),()=>{e.removeListener(o)}},[e]),s},Js=(e,s,n)=>{const o=Ks(s),a=Gs(e);if(!a)throw new Error("Invalid or missing MediaQuery!");const c=Xs(a,o),r=Zs(c),m=je();return i.useEffect(()=>{m&&n&&n(r)},[r]),i.useEffect(()=>()=>{c&&c.dispose()},[]),r},an=()=>{const[e,s]=i.useState(!1),n=Js({minWidth:1440});i.useEffect(()=>{s(n)},[n]);const o=()=>{s(!e)};return t.jsxs(t.Fragment,{children:[t.jsx(mt,{toggleSidebar:o}),e&&t.jsx(fs,{viewPortWidth:n,isOpen:o}),t.jsx("div",{className:ee.background,children:t.jsx("div",{className:ee.screenPageContainer,children:t.jsx(Pe,{})})})]})};export{an as default};
