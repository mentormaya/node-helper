import fs from "fs";
import path from "path";

const inquirer = require("inquirer");

import { CARRIAGE_RETURN, NEW_LINE, VALUE_TEMPLATE_CHOICES } from "./constants";

interface optionProps {
  name: string;
  sample: string;
  values: string;
  silent: boolean;
  dryRun: boolean;
}

const safeValue = (env: string, values: string): string => {
  const [variable, value] = env.split("=");
  if (values === VALUE_TEMPLATE_CHOICES[0]) {
    return `${variable}="YOUR_${variable}_VALUE"`;
  }
  return "";
};

const parseEnv = (envFile: string, values: string): string => {
  let envs = envFile.split(`${CARRIAGE_RETURN}${NEW_LINE}`);
  return envs
    .map((line) => {
      if (line.trim() === "") return line;
      if (line.startsWith("#")) return line;
      if (line.includes("#")) {
        const [env, comment] = line.split(/#+/);
        return `${safeValue(env, values)}   #${comment}`;
      }
      return `${safeValue(line, values)}`;
    })
    .join(`${CARRIAGE_RETURN}${NEW_LINE}`);
};

const getEnv = (
  name: string,
  sample: string,
  values: string
): false | string => {
  try {
    const envPath = path.join(process.cwd(), name ?? ".env");
    console.log(`reading sample env(${name})`);
    const envFile = fs.readFileSync(envPath, { encoding: "utf8", flag: "r" });
    return parseEnv(envFile, values);
  } catch (err: any) {
    console.log(`No .env file Found!`);
    return false;
  }
};

const writtingSampleEnv = (env: string, sample: string) => {
  const sampleEnvPath = path.join(process.cwd(), sample ?? ".env");
  try {
    fs.writeFileSync(sampleEnvPath, env, { encoding: "utf8", flag: "w" });
  } catch (err: any) {
    console.log(`Couldnot write ${sample} file.`);
  }
};

const runCommand = ({
  name,
  sample,
  values,
  dryRun,
}: Omit<optionProps, "silent">) => {
  const envs = getEnv(name, sample, values);
  if (!envs) return;
  dryRun ? console.log(envs) : writtingSampleEnv(envs, sample);
  !dryRun && console.log("Sample ENV file written successfully!");
};

export const genEnv = ({
  name,
  sample,
  values,
  silent,
  dryRun,
}: optionProps) => {
  if (!silent) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of your env file?",
          default: ".env",
        },
        {
          type: "input",
          name: "sample",
          message: "What do you want your sample env file name to be?",
          default: ".sample.env",
        },
        {
          type: "list",
          name: "values",
          message: "Placeholder format for your values?",
          choices: VALUE_TEMPLATE_CHOICES,
        },
        {
          type: "confirm",
          name: "dryRun",
          message:
            "Want the output in the console instead of generating a file?",
          default: false,
        },
      ])
      .then(({ name, sample, values, dryRun }: Omit<optionProps, "silent">) => {
        runCommand({ name, sample, values, dryRun });
      })
      .catch((error: any) => {
        if (error.isTtyError) {
          console.log(`Couldnot render prompt under this environment!`);
          console.log(error);
        } else {
          console.log(`Something went Wrong: ${error}`);
        }
      });
  } else runCommand({ name, sample, values, dryRun });
};
