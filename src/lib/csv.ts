import { parse } from "web-csv-toolbox";

const csv = `name,age
alice,30
bob,40`;

// Test
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
  it("should parse csv", async () => {
    const rows = [];
    const data = parse(csv);
    for await (const row of data) {
      rows.push(row);
    }
    expect(rows).toEqual([
      { name: "alice", age: "30" },
      { name: "bob", age: "40" },
    ]);
  });
}
