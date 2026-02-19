# Slider

A range input with optional snap points and axis labels.

---

## Import

```js
import { Slider } from 'fabkit';
```

---

## Basic Usage

```svelte
<script>
  let volume = $state(50);
</script>

<Slider bind:value={volume} min={0} max={100} />
<p>Volume: {volume}</p>
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Current value — **bindable** |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `points` | `number[]` | `[]` | Snap points — value snaps to nearest point when dragging |
| `labels` | `string[]` | `[]` | Labels displayed below the track (evenly spaced) |
| `ref` | `bindable` | — | DOM element reference |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md). Defaults:

| Prop | Default |
|------|---------|
| `borderWidth` | `[1,1,1,1]` |
| `borderColor` | `var(--border-primary)` |
| `borderRadius` | `var(--snt-border-radius, 100px)` |

---

## Examples

```svelte
<!-- With snap points and labels -->
<Slider
  bind:value={speed}
  min={0}
  max={3}
  points={[0, 1, 2, 3]}
  labels={['Off', 'Slow', 'Fast', 'Turbo']}
/>

<!-- Fine-grained decimal slider -->
<Slider bind:value={opacity} min={0} max={1} />
```
