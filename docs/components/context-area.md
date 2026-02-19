# ContextArea

Wraps content with a right-click context menu.

---

## Import

```js
import { ContextArea } from 'fabkit';
```

---

## Basic Usage

```svelte
<script>
  import { PhCopy, PhTrash, PhPencil } from 'fabkit';

  const items = [
    { id: 1, text: 'Copy', shortcut: 'Ctrl+C', icon: PhCopy, action: copy, submenu: [] },
    { id: 2, text: 'Rename', shortcut: 'F2', icon: PhPencil, action: rename, submenu: [] },
    { id: 3, text: 'Delete', shortcut: 'Del', icon: PhTrash, action: deleteItem, submenu: [] },
  ];
</script>

<ContextArea items={items}>
  {#snippet area()}
    <div class="file-list">
      <!-- right-clickable content -->
    </div>
  {/snippet}
</ContextArea>
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ContextMenuItem[]` | `[]` | Menu items shown on right-click |
| `area` | `Snippet` | — | The content area that triggers the context menu |
| `ref` | `bindable` | — | DOM element reference |

### ContextMenuItem shape

| Field | Type | Description |
|-------|------|-------------|
| `id` | `number` | Unique identifier |
| `text` | `string` | Display label |
| `shortcut` | `string` | Keyboard shortcut hint (display only) |
| `icon` | `SvelteComponent \| null` | Phosphor icon component |
| `action` | `() => void` | Called on click |
| `submenu` | `ContextMenuItem[]` | Nested items (reserved for future use) |

---

## Notes

- `icon` must be a Svelte component (e.g. `PhCopy`), not a string.
- The menu auto-positions to stay within viewport bounds.
- Clicking outside or pressing Escape closes the menu.
