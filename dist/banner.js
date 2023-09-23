"use strict";var s=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var m=(t,e)=>{for(var n in e)s(t,n,{get:e[n],enumerable:!0})},d=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of p(e))!l.call(t,i)&&i!==n&&s(t,i,{get:()=>e[i],enumerable:!(r=o(e,i))||r.enumerable});return t};var u=t=>d(s({},"__esModule",{value:!0}),t);var y={};m(y,{default:()=>f});module.exports=u(y);var a="0.1.0";var g=require("figlet"),v=`
${g.textSync(`Helper v${a}`,{font:"Standard",horizontalLayout:"fitted",verticalLayout:"fitted"})}
A CLI tool for generating a sample env(.env.sample) file from a .env file
`,f=v;
