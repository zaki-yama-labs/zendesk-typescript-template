import { readFileSync, writeFileSync } from "fs";
import { copySync } from "fs-extra/esm";

function rewriteUrlInManifest() {
  const manifest = JSON.parse(readFileSync("./manifest.json", "utf8"));

  // Update the url property
  manifest.location.support.ticket_sidebar.url = "assets/index.html";

  // Write the updated manifest file
  writeFileSync("./dist/manifest.json", JSON.stringify(manifest, null, 2));
}

// copy all files in translations directory into dist/ dir
copySync("translations", "dist/translations");

rewriteUrlInManifest();
