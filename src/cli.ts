#!/usr/bin/env node

import { Command } from "commander";

import * as packageJson from "../package.json";
import { genEnv } from "./gen-env";

const program = new Command();

// creating tool
program
  .name("Sample ENV Generator (.env.sample)")
  .description(
    "A CLI tool for generating a sample env(.env.sample) file from a .env file"
  )
  .version(packageJson.version);

// adding command
program
  .command("gen-env")
  .description("Generate Sample ENV(.env.sample) from .env file.")
  .option("-n, --name <name>", "Name for the sample env file", ".env.sample")
  .option(
    "-v, --values <placeholder>",
    "Default Placeholder Value",
    "YOUR_FIELD_VALUE"
  )
  .action(genEnv);

program.parse();
