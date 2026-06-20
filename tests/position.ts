import type { Fields } from "../src/types.ts";

class Position {
	x: number;
	y: number;

	constructor(pos: Fields<Position>) {
		this.x = pos.x;
		this.y = pos.y;
	}
}
