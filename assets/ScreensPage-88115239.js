import{x as h,r as s,j as t,u as x,a as p}from"./index-ac6e1508.js";import{a as j,b as B}from"./userBoard-selectors-dc6920e1.js";import{I as b}from"./Icon-6d4a4854.js";const C=async e=>{const{data:o}=await h.get(`/boards/${e}`);return console.log(e),console.log(o),{data:o}},U=async()=>{const{data:e}=await h.get("/boards/bgall");return console.log(e),e},I="_background_1rngu_1",N="_modalPageBox_1rngu_14",v="_closeButton_1rngu_33",y="_closeIcon_1rngu_49",S="_errorText_1rngu_76",l={background:I,modalPageBox:N,closeButton:v,closeIcon:y,errorText:S},M=({isOpen:e,onClose:o,title:c,children:a})=>{const d=s.useRef(),[r,m]=s.useState(!1);return s.useEffect(()=>{m(e)},[e]),s.useEffect(()=>{const n=i=>{d.current.contains(i.target)||o()};return r?document.addEventListener("mousedown",n):document.removeEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[r,o]),r?t.jsx("div",{className:l.background,children:t.jsxs("div",{ref:d,className:l.modalPageBox,children:[t.jsx("button",{className:l.closeButton,onClick:o,children:t.jsx(b,{id:"icon-x-close",className:l.closeIcon,width:"18",height:"18"})}),t.jsx("h2",{children:c}),t.jsx("div",{className:l.content,children:a})]})}):null},w="_container_4snut_1",E="_mainContainer_4snut_17",T="_button_create_4snut_44",P={container:w,mainContainer:E,button_create:T},k="_boardTitle_1oui1_1",$={boardTitle:k},A=({currentBoard:e})=>(console.log(e.title),t.jsx(t.Fragment,{children:t.jsx("p",{className:$.boardTitle,children:e.title})})),L="_button_putni_1",O="_icon_putni_13",q="_title_putni_19",_={button:L,icon:O,title:q},f=({onClick:e,title:o,type:c})=>t.jsxs("button",{type:c,className:_.button,onClick:e,children:[t.jsx(b,{className:_.icon,id:"icon-plus",width:"28",height:"28"}),t.jsx("p",{className:_.title,children:o})]}),R="_input_11nh5_1",g={input:R},D=({closeModal:e})=>t.jsxs("form",{className:g.form,children:[t.jsx("input",{className:g.input,placeholder:"Title",required:"true"}),t.jsx(f,{className:g.submitButton,type:"submit",onClick:e,title:"Add"})]}),F=()=>{const[e,o]=s.useState(!1),c=()=>{o(!e)},a=()=>{o(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(f,{id:"icon-plus",type:"button",onClick:c,title:"Add another column"}),t.jsx(M,{isOpen:e,onClose:a,title:"Add column",children:t.jsx(D,{closeModal:a})})]})},z=()=>{const[e,o]=s.useState(!1),[c,a]=s.useState(null),[d,r]=s.useState(null),m=x(j);console.log(m);const n=x(B);console.log(n);const{id:i}=n;return s.useEffect(()=>{(async()=>{try{o(!0);const{data:u}=await C(i);console.log(u),a(u)}catch(u){r(u.message)}finally{o(!1)}})()},[i]),t.jsxs("div",{className:P.mainContainer,children:[e&&t.jsx(p,{}),t.jsx(A,{currentBoard:n}),t.jsx(F,{})]})},H=()=>t.jsx(z,{}),V=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{M as C,H as S,V as a,U as r};
