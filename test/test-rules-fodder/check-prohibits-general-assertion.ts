// `smartass/prefer-specific-assertions` still reports broad assertions when a specific assertion exists.
import { assertIdentical } from "@kensio/smartass";

const values = [1, 2];

// oxlint-disable-next-line smartass/prefer-specific-assertions
assertIdentical(values.length, 2); // This should be assertArrayLength()
