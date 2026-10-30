// `smartass/prefer-specific-assertions` allows an assertion that is already specific.
import { assertArrayLength } from "@kensio/smartass";

const values = [1, 2];

assertArrayLength(values, 2);
