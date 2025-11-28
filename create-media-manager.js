#!/usr/bin/env node
import fs from "fs";
import path from "path";

const root = "media-manager";

const structure = {
  "README.md": "",
  "package.json": "",
  docs: {
    "architecture-diagram.md": "",
  },
  src: {
    atoms: {
      "AttachmentDTO.ts": "",
      "AttachmentFileDTO.ts": "",
      "AttachmentLinkDTO.ts": "",
      "Attachment.ts": "",
      "attachment-item.ts": "",
    },
    molecules: {
      "attachment-service.ts": "",
      "attachment-picker.ts": "",
      "attachment-viewer.ts": "",
      "attachment-editor.ts": "",
    },
    organisms: {
      "attachment-table.ts": "",
      "attachment-manager.ts": "",
    },
    templates: {
      "media-manager-template.ts": "",
    },
    pages: {
      "media-manager-page.ts": "",
    },
  },
};

function createTree(base, obj) {
  for (const key in obj) {
    const value = obj[key];
    const target = path.join(base, key);

    if (typeof value === "string") {
      // It's a file
      if (!fs.existsSync(target)) fs.writeFileSync(target, value);
    } else {
      // It's a directory
      if (!fs.existsSync(target)) fs.mkdirSync(target, { recursive: true });
      createTree(target, value);
    }
  }
}

if (!fs.existsSync(root)) fs.mkdirSync(root);
createTree(root, structure);

console.log("✔ media-manager module generated!");