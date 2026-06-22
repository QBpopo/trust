export type * from "./replace/replace.ts";

/* oxlint-disable no-wrapper-object-types */
type Unwrap<T> = T extends Number ? number
	: T extends String ? string
	: T extends Boolean ? boolean
	: T extends Symbol ? symbol
	: T extends BigInt ? bigint
	: T;
/* oxlint-enable no-wrapper-object-types */

export type StrictFunction<This = unknown, R = unknown> = (this: This, ...args: never) => R;

export type StrictConstructor<T = unknown> = new (...args: never) => T;

export type Instance<T extends StrictConstructor> = Unwrap<InstanceType<T>>;

export type Fields<T> = T extends StrictConstructor ?
	{ [K in keyof T as K extends "prototype" ? never : K]: T[K]; }
	: { [K in keyof T]: T[K]; };
