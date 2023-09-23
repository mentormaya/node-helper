var figlet = require("figlet");
import * as packageJson from "../package.json";

let banner = `
${figlet.textSync(`Helper v${packageJson.version}`, {
  font: "Standard",
  horizontalLayout: "fitted",
  verticalLayout: "fitted",
})}
A CLI tool for generating a sample env(.env.sample) file from a .env file.
By: Ajay Singh [@mentormaya] <admin@ajaysingh.com.np>
`;

export default banner;
