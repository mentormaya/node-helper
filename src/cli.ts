#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

// creating tool
program
  .name("Math-util")
  .description("A CLI tool for performing simple math functions")
  .version("1.0.0");

// adding command
program
  .command("add")
  .description("Add two numbers")
  .argument("<firstNumber>", "first number")
  .argument("<secondNumber>", "second number")
  .action((a: string, b: string) => {
    console.log(parseInt(a) + parseInt(b));
  });

program.parse();
