"use strict";var s=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var l=(t,e)=>{for(var i in e)s(t,i,{get:e[i],enumerable:!0})},d=(t,e,i,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of m(e))!p.call(t,n)&&n!==i&&s(t,n,{get:()=>e[n],enumerable:!(r=o(e,n))||r.enumerable});return t};var u=t=>d(s({},"__esModule",{value:!0}),t);var f={};l(f,{default:()=>v});module.exports=u(f);var a="0.1.0";var g=require("figlet"),y=`
${g.textSync(`Helper v${a}`,{font:"Standard",horizontalLayout:"fitted",verticalLayout:"fitted"})}
A CLI tool for generating a sample env(.env.sample) file from a .env file.
By: Ajay Singh [@mentormaya] <admin@ajaysingh.com.np>
`,v=y;
