// src/main.js
import foo from "./foo.js";
import foo1 from "./foo1.ts"
import bar from "./bar.js"
import { sum } from "lodash-es";

export default function () {
  console.log(foo1)
  console.log(bar)
  console.log(sum(1, 2))
  console.log(foo);
  return foo1 + bar + sum(1, 2) + foo
}
