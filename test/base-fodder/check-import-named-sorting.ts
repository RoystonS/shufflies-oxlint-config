// We should be complaining about the unsorted imports here
// oxlint-disable-next-line eslint/sort-imports
import { readFile, appendFile } from "node:fs";

export const named = { appendFile, readFile };
