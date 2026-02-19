# TabsSwitcher

A draggable, closeable tab bar. Linked to a [Notebook](./notebook.md) via `context`.

---

## Import

```js
import { TabsSwitcher } from 'fabkit';
```

---

## Basic Usage

```svelte
<TabsSwitcher context="myTabs" allowNewTabs />
<Notebook newPageContent={newPage} context="myTabs" />
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `context` | `string` | — | **Required.** Links to a `Notebook` with the same context |
| `allowNewTabs` | `boolean` | `false` | Shows a "+" button to create new tabs |
| `ref` | `bindable` | — | DOM element reference |

### Tab data shape

Tabs are managed internally. Each tab object has:

| Field | Type | Description |
|-------|------|-------------|
| `id` | `number` | Unique tab identifier |
| `order` | `number` | Display order (drag to reorder) |
| `title` | `string` | Tab label |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md).

---

## Notes

- Tabs are draggable to reorder.
- Clicking the × on a tab closes it. The Notebook updates automatically.
- When `allowNewTabs` is true, new tabs are created by calling the `newPageContent` function on the linked Notebook.
- Context is the binding mechanism — `TabsSwitcher` and `Notebook` must share the same context string.
