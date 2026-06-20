import type { StrictConstructor, Self, Methods } from "../lib.ts";
import type { Trait } from "./trait.ts";

// see <https://doc.rust-lang.org/std/clone/trait.Clone.html>

// ```rust
// pub trait Clone: Sized {
// 	// Required method
// 	fn clone(&self) -> Self;
//
// 	// Provided method
// 	fn clone_from(&mut self, source: &Self) { ... }
// }
// ```

export interface Clone {
	clone: (this: Self) => Self;
	clone_from: (this: Self, source: Self) => void;
}

export const Clone = (): Trait<Clone> => 0;

export type fn_clone<T extends StrictConstructor> = Methods<T, Clone>["clone"];
export type fn_clone_from<T extends StrictConstructor> = Methods<T, Clone>["clone_from"];
