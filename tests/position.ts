import { impl } from "@";
import { Clone, type FnClone, type FnCloneFrom } from "@/trait/clone";
import { Default, type FnDefault } from "@/trait/default";

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

	declare clone: FnClone<typeof Position>;
	declare clone_from: FnCloneFrom<typeof Position>;
	declare static default: FnDefault<typeof Position>;
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
