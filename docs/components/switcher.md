# Switcher

A toggle switch input, equivalent to a styled checkbox.

---

## Import

```js
import { Switcher } from 'fabkit';
```

---

## Basic Usage

```svelte
<script>
  let enabled = $state(false);
</script>

<Switcher model={enabled} on:change={(e) => enabled = e.detail} />
<p>Enabled: {enabled}</p>
```

Or with two-way binding:

```svelte
<Switcher bind:model={enabled} />
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `model` | `boolean` | `false` | Current on/off state — **bindable** |
| `ref` | `bindable` | — | DOM element reference |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `change` | `boolean` | Fires when the state changes. `e.detail` is the new value |

---

## Skeleton Pass-through Props

| Prop | Switcher default |
|------|-----------------|
| `margin` | `[0,0,0,0]` |
| `zIndex` | `0` |

---

## Notes

- Supports click to toggle and drag to slide.
- The knob position is animated. A small drag detection window prevents accidental toggles on slow drags.
