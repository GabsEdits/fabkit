# StaticNotebook

A page container driven by a `context` string. Displays one child at a time — the active page is controlled by [MenuSwitcher](./menu-switcher.md) or any other component that dispatches `changePage` on the shared context.

---

## Import

```js
import { StaticNotebook } from 'fabkit';
```

---

## Basic Usage

```svelte
<MenuSwitcher context="myMenu" items={navItems} />

<StaticNotebook context="myMenu">
  <div>Page 0 content</div>
  <div>Page 1 content</div>
  <div>Page 2 content</div>
</StaticNotebook>
```

Children are indexed positionally — the first child is page 0, the second is page 1, etc. The `pageId` in `MenuSwitcher` items maps to these indices.

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `context` | `string` | — | **Required.** Matches a `MenuSwitcher` context to receive page change events |
| `children` | `Snippet` | — | Page contents — each direct child is one page |
| `ref` | `bindable` | — | DOM element reference |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md).

---

## Notes

- Pages are **not** destroyed when switching — they remain mounted but hidden (`display: none`).
- This means component state is preserved across page switches.
- For a fully dynamic tab system, use [Notebook](./notebook.md) + [TabsSwitcher](./tabs-switcher.md) instead.
