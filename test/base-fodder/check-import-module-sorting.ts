import { appendFile, readFile } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { VALUE1 } from "./importable-module";

export const modules = { appendFile, fileURLToPath, path, readFile, VALUE1 };
