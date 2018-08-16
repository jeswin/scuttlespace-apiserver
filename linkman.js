const path = require("path");
const argv = require("minimist")(process.argv.slice(2));

const config = require(argv.config ||
  path.join(process.cwd(), "linkman.config.json"));

const cmd = process.argv[2];
if (cmd === "update") {
  update();
} else {
  console.log("Unknown option. Valid options are:");
  console.log("   linkman update");
  console.log("       'npm link' all local dependencies.");
  console.log("   linkman package");
  console.log("       Add local dependencies to package.json.");
}

async function update() {
  for (const dep of config.dependencies) {
    console.log(dep)
  }
}
