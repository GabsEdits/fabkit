# SlideOver

A bottom sheet (or modal) that slides up from the bottom of the screen. Used for contextual detail panels on mobile-like layouts.

---

## Import

```js
import { SlideOver, SlideOverContent } from 'fabkit';
```

---

## Basic Usage

```svelte
<SlideOver title="Details" description="Item details" close={closePanel} enter>
  <SlideOverContent>
    <p>Content inside the slide-over panel.</p>
  </SlideOverContent>
</SlideOver>
```

Control visibility with `{#if showPanel}`:

```svelte
{#if showPanel}
  <SlideOver title="Details" close={() => showPanel = false} enter>
    <SlideOverContent>
      <p>Details here</p>
    </SlideOverContent>
  </SlideOver>
{/if}
```

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Panel title |
| `description` | `string` | — | Optional subtitle |
| `close` | `() => void` | — | Called to close the panel (cancel button, backdrop click, swipe down) |
| `enter` | `boolean` | `false` | Triggers the enter animation when mounted |
| `enterFunction` | `() => void` | — | Called after the enter animation completes |
| `height` | `number` | `50` | Initial height as a percentage of the viewport |
| `closeLabel` | `string` | `"Chiudi"` | Label for the cancel/close button |
| `disabled` | `boolean` | `false` | Disables dragging |
| `hideCancel` | `boolean` | `false` | Hides the cancel button |
| `modal` | `boolean` | `false` | Renders as a centered modal instead of a bottom sheet |
| `allowOverflow` | `boolean` | `false` | Allows content to overflow the panel bounds |
| `children` | `Snippet` | — | Panel content |

---

## SlideOverContent

`SlideOverContent` is the inner scroll container. Wrap your content with it:

```svelte
<SlideOver title="Options" close={close}>
  <SlideOverContent>
    <VBox spacing={16} padding={[0,0,16,0]}>
      <SelectField label="Sort by" bind:value={sortBy} options={sortOptions} />
      <Switcher bind:model={showHidden} />
    </VBox>
  </SlideOverContent>
</SlideOver>
```

---

## Notes

- The panel is draggable — users can resize it by dragging the handle at the top.
- `modal={true}` disables dragging and centers the panel with a backdrop.
- `height` is the initial height percentage, clamped between a sensible min and 90% viewport.
