import { describe, it } from "mocha";
import { assert } from "chai"

import sum from "../src/helloMocha";

it('adds 1 + 2 to equal 3', () => {
  assert.equal(sum(1,2), 3);
});
