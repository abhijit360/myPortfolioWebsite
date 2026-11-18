// Records when the site was last edited (date of the latest git commit),
// so the page can show "days since last edit". Runs before start/build.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

let lastEdit;
try {
	lastEdit = execSync("git log -1 --format=%cI", {
		stdio: ["ignore", "pipe", "ignore"],
	})
		.toString()
		.trim();
} catch {}

if (!lastEdit) lastEdit = new Date().toISOString();

fs.writeFileSync(
	path.join(__dirname, "..", "src", "data", "lastEdit.json"),
	JSON.stringify({ lastEdit }) + "\n"
);
