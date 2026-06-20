import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { EOL } from "node:os";

const eslint_disable = "/* eslint-disable */";
const import_type = (type: string) => `import type { ${type} } from "./replace.ts";`;
const def = (type: string) => `export type ${type}<T, Old, New> =`;
const start = "T extends {";
const colon = ":";
const infer = (num: number, hook = "") => `${hook}(...args: infer A${num}): infer R${num};`;
const end = "} ?";
const intersect = (inner_type: string, num: number, hook = "") => `& ${inner_type}<${hook}(...args: A${num}) => R${num}, Old, New>`;
const unknown = "unknown;";

const gen = (type: string, inner_type: string, max: number, hook = "") => {
	const lines: string[] = [];
	lines.push(eslint_disable);
	lines.push(import_type(inner_type));
	lines.push(def(type), start);

	for (let i = max; i >= 1; i--) {
		for (let j = 1; j <= i; j++) {
			lines.push(infer(j, hook));
		}
		lines.push(end);
		for (let j = 1; j <= i; j++) {
			lines.push(intersect(inner_type, j, hook));
		}
		lines.push(colon, i === 1 ? unknown : start);
	}

	return lines.join(EOL);
};

const MAX_FUNCS = 12;
const MAX_CTORS = 12;
const funcs = gen("ReplaceFuncs", "ReplaceFunc", MAX_FUNCS);
const ctors = gen("ReplaceCtors", "ReplaceCtor", MAX_CTORS, "new ");
const out_funcs = resolve(import.meta.dirname, "./funcs.ts");
const out_ctors = resolve(import.meta.dirname, "./ctors.ts");
await writeFile(out_funcs, funcs, "utf8");
await writeFile(out_ctors, ctors, "utf8");
