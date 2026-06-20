# Motivation

有一天，我突然想在 TypeScript 里使用 Rust 的语法

One day, I suddenly wanted to use Rust’s syntax in TypeScript.

例如，我可以在 Rust 这样写：

For example, in Rust I can write this:

```rust
struct Position {
	pub x: f64,
	pub y: f64,
}

impl Clone for Position {
	fn clone(&self) -> Self {
		todo!()
	}

	fn clone_from(&mut self, source: &Self) {
		todo!()
	}
}

impl<const N: usize> From<[f64; N]> for Position {
	fn from(value: [f64; N]) -> Self {
		todo!()
	}
}

fn syntax() {
	let pos = Position { x: 0.0, y: 0.0 };
	let pos_clone = pos.clone();
	let pos_from = Position::from([1.0, 2.0]);
}
```

没错，`impl<P1..=Pn> Trait<T1..=Tn> for T0`，Rust 的 (Generic) Trait Implementation 语法

Yeah, that’s the (Generic) Trait Implementation syntax in Rust: `impl<P1..=Pn> Trait<T1..=Tn> for T0`.

当我在 TypeScript 照猫画虎时：

So when I tried to imitate it in TypeScript:

```typescript
class Position {
	// ...
}

impl(Clone).for(Position, {
	clone(this: Position) {
		// ...
	},

	clone_from(this: Position, source: Position) {
		// ...
	},
});

impl(From(Array<number>)).for(Position, {
	from(value: Array<number>) {
		// ...
	},
});

const syntax = () => {
	const pos = new Position({ x: 0.0, y: 0.0 });
	const pos_clone = pos.clone();
	const pos_from = Position.from([1.0, 2.0]);
};
```

我便立刻意识到，我将要解决这些问题：

I immediately realized that I would have to address these questions:

- What is the `Position` (`struct`) like?
- What is the `impl`, `for` like?
- What is the `Clone`, `From` (`Trait`) like?

或许在 JavaScript 层面实现起来并不困难——但这里是 TypeScript

Maybe it wouldn't be that hard to pull off in plain JavaScript, however, this is TypeScript after all.

唉，如果早知道——我早该知道这是个类型体操项目……

F**K! if only I’d known from the start — I should have realized this would be a type‑gymnastics project...

**To be continued...**
