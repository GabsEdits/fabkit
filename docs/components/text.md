# Text

An inline text element with utility style props.

---

## Import

```js
import { Text } from 'fabkit';
```

---

## Basic Usage

```svelte
<Text bold>Important</Text>
<Text dimmed>Secondary information</Text>
<Text element="span" italic>Emphasized</Text>
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `element` | `string` | `"span"` | HTML tag to render (`span`, `p`, `label`, etc.) |
| `bold` | `boolean` | `false` | `font-weight: 700` |
| `italic` | `boolean` | `false` | `font-style: italic` |
| `dimmed` | `boolean` | `false` | Reduces opacity to create secondary text appearance |
| `children` | `Snippet` | — | Text content |

---

## Notes

- `Text` is intended for small inline styling needs.
- For larger blocks of prose, use [TextRich](./text-rich.md).
- For layout-level text sizing and color, use [Skeleton props](./skeleton.md) directly on any component.
