# Paned

A horizontally split two-panel view with a draggable divider.

---

## Import

```js
import { Paned } from 'fabkit';
```

---

## Basic Usage

```svelte
<Paned>
  {#snippet left()}
    <p>Left panel content</p>
  {/snippet}
  {#snippet right()}
    <p>Right panel content</p>
  {/snippet}
</Paned>
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `left` | `Snippet` | — | Left panel content |
| `right` | `Snippet` | — | Right panel content |
| `size` | `{ left: number, right: number }` | `{ left: 50, right: 50 }` | Initial percentage widths |
| `minLeft` | `number` | `0` | Minimum left panel width in px |
| `leftTrigger` | `number` | `0` | Viewport width (px) below which the left panel is automatically collapsed |
| `ref` | `bindable` | — | DOM element reference |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md).

---

## Notes

- The divider is draggable. User can resize panels at runtime.
- `leftTrigger` is useful for responsive behavior: set it to e.g. `768` to auto-collapse the left panel on mobile.
- The left panel can be toggled programmatically via an internal overlay button that appears when collapsed.

---

## Example

```svelte
<Paned size={{ left: 30, right: 70 }} minLeft={150} leftTrigger={600}>
  {#snippet left()}
    <VBox padding={[16,16,16,16]} spacing={8}>
      <h3>Files</h3>
      <Menu items={fileItems} />
    </VBox>
  {/snippet}
  {#snippet right()}
    <VBox padding={[16,16,16,16]}>
      <TextRich>
        <p>Editor area</p>
      </TextRich>
    </VBox>
  {/snippet}
</Paned>
```
