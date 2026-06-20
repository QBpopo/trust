import type { ReplaceFuncs } from "./funcs.ts";
export * from "./funcs.ts";
import type { ReplaceCtors } from "./ctors.ts";
export * from "./ctors.ts";

export type Replace<T, Old, New>
	= T extends Old ? New
	: T extends Function ? ReplaceFn<T, Old, New>
	: T extends object ? ReplaceKV<T, Old, New>
	: T;

export type ReplaceKV<T, Old, New> = T extends object ?
	{ [K in keyof T]: Replace<T[K], Old, New> }
	: T;

type ReplaceParameters<Args, Old, New> = Extract<Replace<Args, Old, New>, unknown[]>;

export type ReplaceFunc<T, Old, New> = T extends (this: infer This, ...args: infer Args) => infer R ?
	unknown extends This ? (...args: ReplaceParameters<Args, Old, New>) => Replace<R, Old, New>
	: (this: Replace<This, Old, New>, ...args: ReplaceParameters<Args, Old, New>) => Replace<R, Old, New>
	: unknown;

export type ReplaceCtor<T, Old, New> = T extends new (...args: infer Args) => infer R ?
	new (...args: ReplaceParameters<Args, Old, New>) => Replace<R, Old, New>
	: unknown;

export type ReplaceFn<T, Old, New>
	= & ReplaceFuncs<T, Old, New>
		& ReplaceCtors<T, Old, New>
		& Omit<ReplaceKV<T, Old, New>, keyof Function>;
