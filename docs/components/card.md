# Card

A bordered container for grouping related content.

---

## Import

```js
import { Card } from 'fabkit';
```

---

## Basic Usage

```svelte
<Card>
  <p>Content inside the card.</p>
</Card>
```

---

## Component Props

Card has no component-specific props. It is a pre-styled Skeleton with sensible defaults for a card surface.

---

## Skeleton Pass-through Props

Card accepts all [Skeleton props](./skeleton.md). Its defaults:

| Prop | Card default |
|------|-------------|
| `borderWidth` | `[1,1,1,1]` |
| `borderColor` | `var(--border-primary)` |
| `borderStyle` | `"solid"` |
| `borderRadius` | `[0,0,0,0]` |
| `bg` | `transparent` |
| `margin` | `[0,0,0,0]` |
| `shadow` | `none` |
| `zIndex` | `0` |

---

## Examples

```svelte
<!-- Card with padding and rounded corners -->
<Card
  padding={[16, 20, 16, 20]}
  borderRadius={[12,12,12,12]}
  bg="var(--background-elevated)"
  shadow="var(--shadow-elevated)"
>
  <h3>Title</h3>
  <p>Body text.</p>
</Card>

<!-- Card with hover effect -->
<Card
  padding={[16, 20, 16, 20]}
  borderRadius={[8,8,8,8]}
  bgHover="var(--background-elevated)"
  transformHover="translateY(-2px)"
  shadowSecondary="var(--shadow-elevated)"
  cursor="pointer"
>
  Hoverable card
</Card>
```
