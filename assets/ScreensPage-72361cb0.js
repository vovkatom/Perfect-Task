import{j as e,r as h,u as m,d as x,h as _}from"./index-4ac4620b.js";import{I as t}from"./Icon-7856d56e.js";const g="_list_1o8su_1",j={list:g},p=()=>e.jsx("ul",{className:j.list,children:e.jsx("li",{})}),C="_buttonCreate_14a45_1",N="_icon_14a45_13",S="_textButton_14a45_17",l={buttonCreate:C,icon:N,textButton:S},b=()=>e.jsxs("button",{type:"submit",className:l.buttonCreate,children:[e.jsx(t,{className:l.icon,id:"icon-plus",width:"28",height:"28"}),e.jsx("p",{className:l.textButton,children:"Create"})]}),f="_iconSet_1df2w_1",w="_iconContainer_1df2w_7",k="_icon_1df2w_1",B="_iconSelected_1df2w_22",n={iconSet:f,iconContainer:w,icon:k,iconSelected:B},v=()=>{const[c,s]=h.useState(null),o=i=>{s(i)};return e.jsxs("ul",{className:n.iconSet,children:[e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-Project"),children:e.jsx(t,{className:c==="icon-Project"?n.iconSelected:n.icon,id:"icon-Project",width:"18",height:"18"})}),e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-star-04"),children:e.jsx(t,{className:c==="icon-star-04"?n.iconSelected:n.icon,id:"icon-star-04",width:"18",height:"18"})}),e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-loading-03"),children:e.jsx(t,{className:c==="icon-loading-03"?n.iconSelected:n.icon,id:"icon-loading-03",width:"18",height:"18"})}),e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-puzzle-piece-02"),children:e.jsx(t,{className:c==="icon-puzzle-piece-02"?n.iconSelected:n.icon,id:"icon-puzzle-piece-02",width:"18",height:"18"})}),e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-container"),children:e.jsx(t,{className:c==="icon-container"?n.iconSelected:n.icon,id:"icon-container",width:"18",height:"18"})}),e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-lightning-02"),children:e.jsx(t,{className:c==="icon-lightning-02"?n.iconSelected:n.icon,id:"icon-lightning-02",width:"18",height:"18"})}),e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-colors"),children:e.jsx(t,{className:c==="icon-colors"?n.iconSelected:n.icon,id:"icon-colors",width:"18",height:"18"})}),e.jsx("li",{className:n.iconContainer,onClick:()=>o("icon-hexagon-01"),children:e.jsx(t,{className:c==="icon-hexagon-01"?n.iconSelected:n.icon,id:"icon-hexagon-01",width:"18",height:"18"})})]})},P="_form_1h34o_1",z="_newBoard_1h34o_5",I="_input_1h34o_14",r={form:P,newBoard:z,input:I},y=()=>{const{register:c,handleSubmit:s}=m({values:{title:""}}),o=i=>{console.log(i)};return e.jsxs("form",{noValidate:!0,autoComplete:"off",onSubmit:s(o),className:r.form,children:[e.jsx("svg",{width:"18",height:"18",children:"icon close"}),e.jsx("p",{className:r.newBoard,children:"New board"}),e.jsx("input",{className:r.input,type:"text",placeholder:"Title",...c("title")}),e.jsx("p",{children:"Icons"}),e.jsx(v,{}),e.jsx("p",{children:"Background"}),e.jsx(p,{}),e.jsx(b,{})]})},$="_background_g9uhm_1",M="_modalPageBox_g9uhm_14",O="_close_g9uhm_27",T="_errorText_g9uhm_53",a={background:$,modalPageBox:M,close:O,errorText:T},F=({isOpen:c,onClose:s,title:o,children:i})=>c?e.jsx("div",{className:a.background,children:e.jsxs("div",{className:a.modalPageBox,children:[e.jsx("span",{className:a.close,onClick:s,children:"×"}),e.jsx("h2",{children:o}),e.jsx("div",{className:a.content,children:i})]})}):null,E="_container_um494_1",L="_button_create_um494_30",d={container:E,button_create:L},R=()=>{const c=x(_),[s,o]=h.useState(!1),i=()=>{o(!s)},u=()=>{o(!1)};return e.jsx(e.Fragment,{children:c&&e.jsxs("div",{className:d.container,children:["Before starting your project, it is essential"," ",e.jsxs("button",{type:"button",className:d.button_create,onClick:i,children:[" ","to create a board"," "]})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.",e.jsx(e.Fragment,{children:e.jsx(F,{isOpen:s,onClose:u,children:e.jsx(y,{})})})]})})},A=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{F as C,R as S,y as a,A as b};
