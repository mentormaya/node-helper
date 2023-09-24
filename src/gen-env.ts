import fs from "fs";
import path from "path";
import { CARRIAGE_RETURN, NEW_LINE } from "./constants";

const safeValue = (env: string, values: string): string => {
  const [variable, value] = env.split("=");
  if (values === "YOUR_FIELD_VALUE") {
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

export const genEnv = ({
  name,
  sample,
  values,
  silent,
  dryRun,
}: {
  name: string;
  sample: string;
  values: string;
  silent: boolean;
  dryRun: boolean;
}) => {
  if (!silent) {
    console.log("prompting here:");
  }
  const envs = getEnv(name, sample, values);
  if (!envs) return;
  dryRun ? console.log(envs) : writtingSampleEnv(envs, sample);
  !dryRun && console.log("Sample ENV file written successfully!");
};
