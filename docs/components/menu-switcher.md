# MenuSwitcher

A sidebar navigation list that controls a [StaticNotebook](./static-notebook.md) via a shared `context` string.

---

## Import

```js
import { MenuSwitcher } from 'fabkit';
```

---

## Basic Usage

```svelte
<script>
  const pages = [
    { label: 'Dashboard', pageId: 0 },
    { label: 'Settings', pageId: 1 },
    { label: 'Profile', pageId: 2 },
  ];
</script>

<MenuSwitcher context="main" items={pages} />
<StaticNotebook context="main">
  <div>Dashboard</div>
  <div>Settings</div>
  <div>Profile</div>
</StaticNotebook>
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `context` | `string` | — | **Required.** Matches a `StaticNotebook` context |
| `items` | `MenuItem[]` | `[]` | Navigation items — **bindable** |
| `ref` | `bindable` | — | DOM element reference |

### MenuItem shape

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Display text |
| `pageId` | `number` | Index of the page to activate in the linked StaticNotebook |
| `isActive` | `boolean` | Set internally — do not set manually |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md).

---

## Notes

- Clicking an item dispatches a `changePage` custom event consumed by the linked `StaticNotebook`.
- `items` is bindable — mutating the array from outside is reflected in the component.
- The active item is highlighted automatically.

---

## Example

```svelte
<SideLayout>
  {#snippet sidebar()}
    <MenuSwitcher context="app" items={navItems} />
  {/snippet}
  {#snippet content()}
    <StaticNotebook context="app">
      {#each navItems as item}
        <Showcase title={item.label}>
          <!-- page content -->
        </Showcase>
      {/each}
    </StaticNotebook>
  {/snippet}
</SideLayout>
```
