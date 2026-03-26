import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const configPath = path.join(cwd, "config.json");
const outputPath = path.join(cwd, ".dev.vars");

if (!fs.existsSync(configPath)) {
  console.error("config.json not found");
  process.exit(1);
}

const raw = fs.readFileSync(configPath, "utf8");
const config = JSON.parse(raw);

const lines = [
  `AI_API_KEY=${String(config.OPENAI_API_KEY || "").trim()}`,
  `AI_BASE_URL=${String(config.AI_BASE_URL || "https://api.deepseek.com/v1").trim()}`,
  `AI_MODEL=${String(config.AI_MODEL || "deepseek-chat").trim()}`,
  "",
];

fs.writeFileSync(outputPath, lines.join("\n"), "utf8");
console.log("Created .dev.vars from config.json");
