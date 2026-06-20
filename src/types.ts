export type StrictConstructor<T = unknown> = abstract new (...args: never) => T;

export type Fields<T> = T extends StrictConstructor ?
	{ [K in keyof T as K extends "prototype" ? never : K]: T[K]; }
	: { [K in keyof T]: T[K]; };
