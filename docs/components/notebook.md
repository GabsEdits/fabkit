# Notebook

A dynamic tabbed content area. Tabs can be created and closed at runtime. Works together with [TabsSwitcher](./tabs-switcher.md) and is driven by the `context` prop.

---

## Import

```js
import { Notebook } from 'fabkit';
```

---

## Basic Usage

```svelte
<TabsSwitcher allowNewTabs context="myTabs" />
<Notebook newPageContent={newPage} context="myTabs" />
```

```js
function newPage() {
  return {
    component: MyPageComponent,
    props: { /* passed to component */ }
  };
}
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `context` | `string` | — | **Required.** Links this Notebook to a `TabsSwitcher` with the same context |
| `newPageContent` | `() => { component: SvelteComponent, props: object }` | — | Factory called when a new tab is created. Return the component and its props |
| `ref` | `bindable` | — | DOM element reference |

### Notebook.Tab (declarative usage)

You can add static tabs declaratively by using `Notebook.Tab` as a child:

```svelte
<Notebook context="myTabs">
  <Notebook.Tab title="First Tab">
    <p>First tab content</p>
  </Notebook.Tab>
  <Notebook.Tab title="Second Tab">
    <p>Second tab content</p>
  </Notebook.Tab>
</Notebook>
```

`Notebook.Tab` props:

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Tab label shown in TabsSwitcher |
| `children` | `Snippet` | Tab content |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md). Defaults:

| Prop | Default |
|------|---------|
| `borderWidth` | `[1,1,1,1]` |
| `borderColor` | `var(--border-primary)` |
| `borderRadius` | `[8,8,8,8]` |

---

## Notes

- `context` must be a unique string shared between `TabsSwitcher` and `Notebook`.
- Multiple Notebook+TabsSwitcher pairs can exist on the same page using different context strings.
- Dynamic tabs use the component returned by `newPageContent`. The component is mounted with `svelte:component`.
