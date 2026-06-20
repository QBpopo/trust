import type { StrictFunction, StrictConstructor, Instance, Replace } from "./types/types.ts";

export type GenParam = StrictConstructor;

declare const self: unique symbol;
export type Self = { readonly [self]: never };
declare const struct: unique symbol;
export type Struct = { readonly [struct]: never };

type PickThisParameterType<T, This> = {
	[K in keyof T as T[K] extends StrictFunction<This> ? K : never]: T[K];
};

type Rebind<T, NewThis, NewSelf> = {
	[K in keyof T]: T[K] extends (...args: infer A) => infer R ?
		(this: NewThis, ...args: Replace<A, Self, NewSelf>) => Replace<R, Self, NewSelf>
		: T[K]
};

export type Methods<S extends StrictConstructor, T> = Rebind<PickThisParameterType<T, Self>, Instance<S>, Instance<S>>;

export type Associations<S extends StrictConstructor, T> = Rebind<PickThisParameterType<T, Struct>, S, Instance<S>>;

export type Impl = <T>(trait: Trait<T>) => {
	for: <S extends StrictConstructor>(struct: S, associations: Associations<S, T>) => void;
	for_self: <S extends StrictConstructor>(struct: S, methods: Methods<S, T>) => void;
};

export type Trait<_T> = {};

export const impl: Impl = trait => ({
	for(struct, associations) {
		Object.assign(struct, associations);
	},
	for_self(struct, methods) {
		Object.assign(struct.prototype, methods);
	},
});
