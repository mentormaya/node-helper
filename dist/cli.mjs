#!/usr/bin/env node
import{a as o}from"./chunk-VZATVPYO.mjs";var{Command:s}=o("commander"),n=new s;n.name("Math-util").description("A CLI tool for performing simple math functions").version("1.0.0");n.command("add").description("Add two numbers").argument("<firstNumber>","first number").argument("<secondNumber>","second number").action((r,e)=>{console.log(parseInt(r)+parseInt(e))});n.parse();
