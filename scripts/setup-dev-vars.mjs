import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const templatePath = path.join(cwd, ".dev.vars.example");
const outputPath = path.join(cwd, ".dev.vars");

if (!fs.existsSync(templatePath)) {
  console.error(".dev.vars.example not found");
  process.exit(1);
}

if (fs.existsSync(outputPath)) {
  console.error(".dev.vars already exists");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf8");
fs.writeFileSync(outputPath, template, "utf8");
console.log("Created .dev.vars from .dev.vars.example");
