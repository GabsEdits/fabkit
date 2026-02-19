# SideLayout

A two-panel layout with a fixed sidebar and a flexible content area. Not resizable (use [Paned](./paned.md) for resizable splits).

---

## Import

```js
import { SideLayout } from 'fabkit';
```

---

## Basic Usage

```svelte
<SideLayout>
  {#snippet sidebar()}
    <MenuSwitcher context="nav" items={navItems} />
  {/snippet}

  {#snippet content()}
    <StaticNotebook context="nav">
      <div>Page 1</div>
      <div>Page 2</div>
    </StaticNotebook>
  {/snippet}
</SideLayout>
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebar` | `Snippet` | — | Left panel content |
| `content` | `Snippet` | — | Right panel content |
| `size` | `{ left: number, right: number }` | `{ left: 30, right: 70 }` | Percentage widths of each panel |
| `context` | `string` | — | Named context for integration with `MenuSwitcher` slide-out behavior |
| `ref` | `bindable` | — | DOM element reference |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md).

---

## Notes

- `context` enables the sidebar to be hidden/restored programmatically via the `Engine` event bus (`{context}-close` / `{context}-open` events).
- To trigger a slide-out: `window.dispatchEvent(new CustomEvent('mainLayout-close'))`.

---

## Example

```svelte
<!-- Full-app layout -->
<Window>
  {#snippet top()}
    <TitleBar>{#snippet area()}{/snippet}</TitleBar>
  {/snippet}
  {#snippet content()}
    <SideLayout context="main" size={{ left: 25, right: 75 }}>
      {#snippet sidebar()}
        <MenuSwitcher context="main" items={pages} />
      {/snippet}
      {#snippet content()}
        <StaticNotebook context="main">
          {#each pages as page}
            <div>{page.label}</div>
          {/each}
        </StaticNotebook>
      {/snippet}
    </SideLayout>
  {/snippet}
</Window>
```
