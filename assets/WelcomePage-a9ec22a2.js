import{j as o,L as s,u as r,a as c}from"./index-ac6e1508.js";import{C as i}from"./Container-2d238dbb.js";import{I as a}from"./Icon-6d4a4854.js";import{s as g}from"./userBoard-selectors-dc6920e1.js";const l="_background_1w216_1",d="_mainBox_1w216_16",x="_logoBox_1w216_22",h="_logoAvatar_1w216_37",_="_logoIconBox_1w216_50",p="_logoIcon_1w216_50",m="_header_1w216_70",u="_paragraph_1w216_82",w="_buttonLink_1w216_99",B="_registrationBtn_1w216_109",k="_authBox_1w216_145",j="_loginBtn_1w216_152",b="_googleBtn_1w216_169",f="_googleIcon_1w216_181",t={background:l,mainBox:d,logoBox:x,logoAvatar:h,logoIconBox:_,logoIcon:p,header:m,paragraph:u,buttonLink:w,registrationBtn:B,authBox:k,loginBtn:j,googleBtn:b,googleIcon:f},e="/perfect-task/assets/start-user-124-c5d64226.png",I="/perfect-task/assets/start-user@2x-248-f8a21a8f.png",v="/perfect-task/assets/start-user_desktop-162-dcce2da2.png",N="/perfect-task/assets/start-user_desktop@2x-324-5ce49d09.png",L=()=>o.jsx(o.Fragment,{children:o.jsx("div",{className:t.background,children:o.jsx(i,{className:"welcome-page",children:o.jsxs("div",{className:t.mainBox,children:[o.jsx("img",{className:t.logoAvatar,srcSet:`
              ${e} 124w,
              ${I} 248w,
              ${v} 162w,
              ${N} 324w
              `,sizes:`
              (min-width: 1200px) 162px,
              (min-width: 768px) 162px,
              (min-width: 375px) 124px
              `,src:`${e}`,alt:"Task Pro avatar",width:"124",height:"124"}),o.jsxs("div",{className:t.logoIconBox,children:[o.jsx(a,{className:t.logoIcon,id:"icon-logo-welcome",width:"40",height:"40"}),o.jsx("h1",{className:t.header,children:"Perfect Task"})]}),o.jsx("p",{className:t.paragraph,children:"Supercharge your productivity and take control of your tasks with Perfect Task - Don't wait, start achieving your goals now!"}),o.jsx(s,{to:"/auth/register",className:t.buttonLink,children:o.jsx("button",{className:t.registrationBtn,type:"button",children:"Registration"})}),o.jsxs("div",{className:t.authBox,children:[o.jsx(s,{to:"/auth/login",children:o.jsx("button",{className:t.loginBtn,type:"button",children:"Log In"})}),o.jsx("a",{className:t.googleBtn,href:"https://perfect-task-back.onrender.com/api/users/google","aria-label":"Registration by using Google",children:o.jsx(a,{id:"google",className:t.googleIcon,width:"20",height:"20"})})]})]})})})}),U=()=>{const n=r(g);return o.jsxs(o.Fragment,{children:[n&&o.jsx(c,{}),o.jsx(L,{})]})};export{U as default};