# NODE HELPER

This is the `helper` utility tool for the projects for developer. This tool is aimed to help `developers` with many small things like setup, generate boilerplate code, generating sample.env file and many more.

**NODE HELPER** helps with ....

- [x] sample.env file generator
- [ ] boilerplate code generator
  - [ ] Static Website
  - [ ] Next.js
  - [ ] React App
- [ ] init ESLint
- [ ] init test with jest

## Installation

It can be install with below command using npm

```bash
npm i -D @mentormaya/helper
```

It can be install with below command using yarn

```bash
yard add -D @mentormaya/helper
```

It can be install with below command using pnpm

```bash
pnpm add -D @mentormaya/helper
```

## Basic Syntax

```bash
Usage: helper [options] [command]
```

where options are:

```bash
Options:
  -V, --version      output the version number
  -h, --help         display help for command
```

and commands are:

```bash
Commands:
  gen-env [options]  Generate Sample ENV(.env.sample) from .env file.
  help [command]     display help for command
```

## Usage

simply run the following command in the terminal of your choice.

>Note: This is the Node CLI tool, thats why you need to have nodejs pre installed in your operating system for this tool to work.

```bash
helper
```

will show about the app and usage.

![basic usage of helper](/images/helper.png "helper command preview")

### for help

```bash
helper --help
```

will show the help for the `helper`:

![help with options](/images/help-option.png "help option preview")

or

```bash
help [command]
```

will show the help for the `helper` or for the selected command if command provided:

![help with options](/images/help-command.png "help option preview")

Also we can know about the version information of the command with

```bash
help -V
```

or

```bash
help --version
```

will show the version for the `helper`:

![help with options](/images/version.png "help option preview")

### for generating a sample.env from project .env file

```bash
helper gen-env
```

This will prompt you for the values required to generate the sample.env file such as your .env file name, your sample.env filename, the value template etc.
