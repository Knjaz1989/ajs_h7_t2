import { changePhone } from "../src/js/utils.js";


test.each([
  ["8 (927) 000-00-00", "+79270000000"],
  ["+7 960 000 00 00", "+79600000000"],
  ["+86 000 000 0000", "+860000000000"],
])(
  "Test change phone %s", (phone, expected) => {
    expect(changePhone(phone)).toBe(expected);
  }
);