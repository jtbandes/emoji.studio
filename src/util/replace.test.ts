import replace from "./replace";
import simpleDeepFreeze from "simple-deep-freeze";

describe("replace", () => {
  it("clones with replacement", () => {
    const x = simpleDeepFreeze({ a: { b: { c: 1 }, bb: ["bb"] }, d: { e: 2 } });
    expect(replace(x, ["a"], "hello")).toEqual({ a: "hello", d: { e: 2 } });
    expect(replace(x, ["a"], "hello").d).toBe(x.d);
    expect(replace(x, ["a", "b"], "hello")).toEqual({ a: { b: "hello", bb: ["bb"] }, d: { e: 2 } });
    expect(replace(x, ["a", "b"], "hello").a.bb).toBe(x.a.bb);
    expect(replace(x, ["a", "b"], "hello").d).toBe(x.d);
  });

  it("adds missing keys", () => {
    const x = simpleDeepFreeze({});
    expect(replace(x, ["a"], "hello")).toEqual({ a: "hello" });
  });
});
