import type { StrictConstructor, Struct, Self, Associations } from "../lib.ts";
import type { Trait } from "./trait.ts";

// see <https://doc.rust-lang.org/std/default/trait.Default.html>

// ```rust
// pub trait Default: Sized {
// 	// Required method
// 	fn default() -> Self;
// }
// ```

export interface Default {
	default: (this: Struct) => Self;
}

export const Default = (): Trait<Default> => 0;

export type fn_default<T extends StrictConstructor> = Associations<T, Default>["default"];
