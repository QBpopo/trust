import { impl, Clone, Default } from "../src/lib.ts";
import type { fn_clone, fn_clone_from, fn_default } from "../src/lib.ts";

type PositionFields = {
	x: number;
	y: number;
};

class Position {
	x: number;
	y: number;

	constructor(pos: PositionFields) {
		this.x = pos.x;
		this.y = pos.y;
	}

	declare clone: fn_clone<typeof Position>;
	declare clone_from: fn_clone_from<typeof Position>;
	declare static default: fn_default<typeof Position>;
}

impl(Clone()).for_self(Position, {
	clone() {
		return new Position(this);
	},
	clone_from(source) {
		this.x = source.x;
		this.y = source.y;
	},
});

impl(Default).for(Position, {
	default: () => new Position({ x: 0, y: 0 }),
});

const a = new Position({ x: 1, y: 1 });
console.log(a);

const b = Position.default();
console.log(b);

const c = a.clone();
console.log(c);

c.clone_from(b);
console.log(c);
