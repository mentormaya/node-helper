#!/usr/bin/env node
"use strict";var s=require("commander");var e="0.1.0";var i=o=>{console.log(o)};var m=require("figlet"),p=`
${m.textSync(`Helper v${e}`,{font:"Standard",horizontalLayout:"fitted",verticalLayout:"fitted"})}
A CLI tool for generating a sample env(.env.sample) file from a .env file
`,r=p;var n=new s.Command;n.name("helper").description(r).version(e);n.command("gen-env").description("Generate Sample ENV(.env.sample) from .env file.").option("-n, --name <name>","Name for the sample env file",".env.sample").option("-v, --values <placeholder>","Default Placeholder Value","YOUR_FIELD_VALUE").action(i);n.parse();
