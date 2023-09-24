# NODE HELPER

This is the `helper` utility tool for the projects for developer. This tool is aimed to help `developers` 🧑‍💻 with many small things like setup, generate boilerplate code, generating sample.env file and many more.

**NODE HELPER** helps with ....

- [x] sample.env file generator 🗂️
- [ ] boilerplate code generator 🗂
  - [ ] Static Website 🌍
  - [ ] Next.js 🌍
  - [ ] React App 🌍
- [ ] init ESLint 🖥️
- [ ] init test with jest 🧪

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

>Warning: Be aware that this command will replace you existing .env.sample or any name for sample you provided if already exist in the root of your project.

```bash
helper gen-env
```

This will prompt you for the values required to generate the sample.env file such as your .env file name, your sample.env filename, the value template etc.

![sample env generator](/images/gen-env.png "gen-env preview")

Also you can generate the output to only the screen and not actually write it to file.

```bash
helper gen-env -d
```

or 

```bash
helper gen-env --dry-run
```

or simply select `true` or say `Yes` while prompting if you use

```bash
helper gen-env
```

![sample env generator](/images/gen-env-console.png "gen-env preview")

This way you can verify the content before writting it to the file.

Great 🥳

Lot's of noise right 👉

Let's do it silently without any interaction. Incase you have to include it in the `precommit` of your git repository to automatically generate sample.nv file each time you make a commit.

```bash
helper gen-env -s
```

or 

```bash
helper gen-env --silent
```

This will do the job silently with default values and ofcourse, you can supply your own values with the options as below:

```bash
helper gen-env -s -n .my-env -N .sample-env
```

or

```bash
helper gen-env --silent --name .my-env --sample .sample-env
```

Yahoooo!!!! 🎉🎉🎉

Let's Rock and Roll now without any tension to forget to update the sample.env file anymore.
