# Window

The top-level application shell. Fills the viewport and provides slots for a title bar and scrollable content.

---

## Import

```js
import { Window } from 'fabkit';
```

---

## Basic Usage

```svelte
<Window>
  {#snippet top()}
    <TitleBar>
      {#snippet area()}{/snippet}
    </TitleBar>
  {/snippet}

  {#snippet content()}
    <p>App content here</p>
  {/snippet}
</Window>
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `top` | `Snippet` | — | Top area — typically a `TitleBar` |
| `content` | `Snippet` | — | Main scrollable content area |
| `ref` | `bindable` | — | DOM element reference |

Window integrates with the `Engine` to detect fullscreen/maximize state and window resize events.

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md). Defaults:

| Prop | Default |
|------|---------|
| `borderWidth` | `[1,1,1,1]` |
| `borderColor` | `var(--border-secondary)` |
| `borderStyle` | `"solid"` |
| `padding` | `[0,0,0,0]` |
| `zIndex` | `0` |

---

## Notes

- Window observes resize to track maximized state internally.
- Wrap your entire app in a single `Window` at the layout level.
