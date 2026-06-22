import type { Struct, Self, Associations } from "@";
import type { StrictConstructor } from "@/types";
import type { Trait } from "@/trait";

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

export type FnDefault<T extends StrictConstructor> = Associations<T, Default>["default"];
