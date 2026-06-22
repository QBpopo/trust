import type { Self, Methods } from "@";
import type { StrictConstructor } from "@/types";
import type { Trait } from "@/trait";

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

export type FnClone<T extends StrictConstructor> = Methods<T, Clone>["clone"];
export type FnCloneFrom<T extends StrictConstructor> = Methods<T, Clone>["clone_from"];
