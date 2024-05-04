import{j as e,r as h,c as m,L as v}from"./index-6dca3e87.js";import{C as T}from"./Container-fd859285.js";import B from"./ScreensPage-af9e337d.js";const C="_headerContainer_nogbr_1",f="_burgerButton_nogbr_11",k="_burgerIcon_nogbr_16",I="_customBox_nogbr_20",w="_themeBox_nogbr_26",P="_label_nogbr_33",y="_select_nogbr_41",q="_user_nogbr_46",$="_userName_nogbr_53",H="_avatar_nogbr_62",o={headerContainer:C,burgerButton:f,burgerIcon:k,customBox:I,themeBox:w,label:P,select:y,user:q,userName:$,avatar:H},M=()=>e.jsxs("header",{className:o.headerContainer,children:[e.jsx("button",{className:o.burgerButton,type:"button",children:e.jsx("svg",{className:o.burgerIcon,width:"24",height:"24",children:e.jsx("use",{href:""})})}),e.jsxs("div",{className:o.customBox,children:[e.jsxs("div",{className:o.themeBox,children:[e.jsx("label",{htmlFor:"theme",className:o.label,children:"Theme"}),e.jsxs("select",{className:o.select,id:"theme",type:"select",children:[e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"violet",children:"Violet"})]})]}),e.jsxs("div",{className:o.user,children:[e.jsx("p",{className:o.userName,children:"Ivetta"}),e.jsx("div",{className:o.avatar})]})]})]}),S="_container_865dp_1",D="_myBoardsTitle_865dp_20",_={container:S,myBoardsTitle:D},L="_logo_l5hvm_1",O="_logoIcon_l5hvm_8",E="_logoTitle_l5hvm_16",u={logo:L,logoIcon:O,logoTitle:E},F=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:u.logo,children:[e.jsx("svg",{className:u.logoIcon,viewBox:"0 0 32 32",children:e.jsx("path",{d:"M13.331 23.027c0.244-1.272 0.453-2.61 0.747-3.949 0.145-0.701-0.032-0.999-0.815-0.946s-1.657 0.027-2.49 0c-0.833-0.027-0.982-0.446-0.502-1.044 2.363-2.918 4.753-5.8 7.134-8.674 0.267-0.326 0.575-0.558 1.014-0.312s0.349 0.549 0.276 0.915c-0.263 1.339-0.48 2.677-0.77 3.989-0.149 0.678 0.045 0.919 0.751 0.892 0.709-0.036 1.419-0.036 2.127 0 0.403 0 0.932-0.21 1.141 0.339s-0.231 0.781-0.453 1.107c-0.905 1.115-1.823 2.229-2.752 3.342-1.361 1.624-2.711 3.242-4.051 4.854-0.263 0.317-0.557 0.571-1.005 0.41s-0.353-0.54-0.353-0.924z"})}),e.jsx("p",{className:u.logoTitle,children:"Perfect Task"})]})}),z="_button_13ooa_1",R="_buttonTitle_13ooa_21",V="_buttonIcon_13ooa_27",A="_buttonPlus_13ooa_38",r={button:z,buttonTitle:R,buttonIcon:V,buttonPlus:A},G=()=>e.jsxs("button",{className:r.button,type:"button",children:[e.jsx("p",{className:r.buttonTitle,children:"Create a new board"}),e.jsx("div",{className:r.buttonIcon,children:e.jsx("p",{className:r.buttonPlus,children:"+"})})]}),J="_modalInput_4rl0h_8",K="_modalControl_4rl0h_20",Q="_modalControlText_4rl0h_27",U="_modalButton_4rl0h_34",a={modalInput:J,modalControl:K,modalControlText:Q,modalButton:U},W=()=>{const[s,t]=h.useState({email:"",comments:""}),n=i=>{const{name:b,value:j}=i.target;t(N=>({...N,[b]:j}))},l=i=>{i.preventDefault()},x=m(a.modalInput,a.modalControl),g=m(a.modalInput,a.modalControlText),p=m(a.modalButton,a.modalControl);return e.jsx("div",{children:e.jsxs("form",{onSubmit:l,children:[e.jsx("div",{children:e.jsx("input",{className:x,type:"email",id:"email",name:"email",value:s.email,onChange:n,placeholder:"Email address",required:!0})}),e.jsx("div",{children:e.jsx("textarea",{className:g,id:"comments",name:"comments",value:s.comments,onChange:n,rows:"4",placeholder:"Comment",required:!0})}),e.jsx("button",{className:p,type:"submit",children:"Send"})]})})},X="_container_1w4lc_1",Y="_image_1w4lc_9",Z="_infoText_1w4lc_17",ee="_perfectTask_1w4lc_26",oe="_question_1w4lc_30",se="_needHelp_1w4lc_37",c={container:X,image:Y,infoText:Z,perfectTask:ee,question:oe,needHelp:se},te="_background_13uqp_1",ne="_modalPageBox_13uqp_14",ae="_close_13uqp_27",le="_errorText_13uqp_62",d={background:te,modalPageBox:ne,close:ae,errorText:le},ce=({isOpen:s,onClose:t,title:n,children:l})=>s?e.jsx("div",{className:d.background,children:e.jsxs("div",{className:d.modalPageBox,children:[e.jsx("span",{className:d.close,onClick:t,children:"×"}),e.jsx("h2",{children:n}),e.jsx("div",{className:d.content,children:l})]})}):null,re=()=>{const[s,t]=h.useState(!1),n=()=>{t(!0)},l=()=>{t(!1)};return e.jsxs("div",{className:c.container,children:[e.jsx("svg",{className:c.image}),e.jsxs("p",{className:c.infoText,children:["If you need help with"," ",e.jsx("span",{className:c.perfectTask,children:"Perfect Task"}),", check out our support resources or reach out to our customer support team."]}),e.jsxs("p",{className:c.needHelp,children:[e.jsx("svg",{viewBox:"0 0 32 32",width:"20",height:"20"}),e.jsx(v,{onClick:n,children:"Need help?"})]}),e.jsx(ce,{isOpen:s,onClose:l,title:"Need help",children:e.jsx(W,{})})]})},de=()=>e.jsxs("div",{className:_.container,children:[e.jsx(F,{}),e.jsx("h3",{className:_.myBoardsTitle,children:"My boards"}),e.jsx(G,{}),e.jsx(re,{})]}),ie="_background_stxq7_1",me={background:ie},xe=()=>e.jsxs("div",{className:me.background,children:[e.jsx(M,{}),e.jsx(de,{}),e.jsx(T,{className:"home-page",children:e.jsx(B,{})})]});export{xe as default};
