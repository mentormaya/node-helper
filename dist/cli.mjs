#!/usr/bin/env node
import{a as n}from"./chunk-5OA6XCSK.mjs";import{Command as r}from"commander";var i="0.1.0";var e=new r;e.name("Sample ENV Generator (.env.sample)").description("A CLI tool for generating a sample env(.env.sample) file from a .env file").version(i);e.command("gen-env").description("Generate Sample ENV(.env.sample) from .env file.").option("-n, --name <name>","Name for the sample env file",".env.sample").option("-v, --values <placeholder>","Default Placeholder Value","YOUR_FIELD_VALUE").action(n);e.parse();
