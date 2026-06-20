
# Instantiating Structs

## Field Struct Expression

在 **Safe** Rust 中归根结底只有一种实例化结构体的语法，那就是 *field struct expression*

In **Safe** Rust, there is ultimately only one syntax for instantiating a struct: the **field struct expression**.

```rust
struct Position {
	pub x: f64,
	pub y: f64,
}

let pos = Position {
	x: 0.0,
	y: 0.0,
};
```

在 TypeScript 中，我们可以这样做：

In TypeScript, we can do it this way:

```typescript
type Position = {
	x: number;
	y: number;
};

const p: Position = {
	x: 0,
	y: 0,
};
```

也可以这样做：

Or we can do it this way:

```typescript
class Position {
	x: number;
	y: number;

	constructor(pos: Fields<Position>) {
		this.x = pos.x;
		this.y = pos.y;
	}
}

const pos = new Position({
	x: 0,
	y: 0,
});
```

我们应该选择哪种做法？为何选择这种做法？此处暂时按下不表，但在未来的日子里，我们就会渐渐明白，答案是使用 `class` 的版本

Which approach should we choose? Why prefer one over the other? We will leave this question unanswered for now, but as time goes on, it will gradually become clear that the answer lies in using the `class` version.

## Type System Difference

Rust 采用*名义类型系统*，所以 `Position` 与 `Velocity` 不是同一个类型：

Rust adopts a *nominal type system*, meaning `Position` and `Velocity` are treated as distinct types:

```rust
struct Position { pub x: f64, pub y: f64, }

struct Velocity { pub x: f64, pub y: f64, }
```

TypeScript 采用*结构化类型系统*，所以 `Position` 和 `Velocity` 其实是完全等价的类型

TypeScript, on the other hand, utilizes a *structural type system*, which makes `Position` and `Velocity` entirely equivalent types:

```typescript
type Position = { x: number; y: number };

type Velocity = { x: number; y: number };
```

即使是用 `class`，只要存在结构兼容：

Even when using a class, as long as they are structurally compatible:

```typescript
class Foo { }

class Bar { }

const a: Foo = new Bar();
```

不过，此时我们已经可以进行两者的比较 `Foo === Bar`，且其结果为 `false`

However, at this point, we can already perform a runtime comparison like `Foo === Bar`, the result of which is `false`.

但一旦两者具有私有字段，即使该私有字段的名称一模一样，无论是 TypeScript 的 `private` 修饰符，还是 JavaScript 原生的私有字段语法，都会报错：

But once both classes have private fields, whether using TypeScript's `private` modifier or JavaScript's native private field syntax, even if the private fields have exactly the same name, an error will occur:

```typescript
class Foo { private val = 0; }

class Bar { private val = 0; }

const a: Foo = new Bar(); // error: Type 'Bar' is not assignable to type 'Foo'.
```

```typescript
class Foo { #val = 0; }

class Bar { #val = 0; }

const a: Foo = new Bar(); // error: Type 'Bar' is not assignable to type 'Foo'.
```
