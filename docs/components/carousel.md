# Carousel

A horizontal slideshow with navigation arrows and dot indicators.

---

## Import

```js
import { Carousel } from 'fabkit';
```

---

## Basic Usage

```svelte
<Carousel>
  <VBox align="center" padding={[40,40,40,40]}>
    <h2>Slide 1</h2>
  </VBox>
  <VBox align="center" padding={[40,40,40,40]}>
    <h2>Slide 2</h2>
  </VBox>
  <VBox align="center" padding={[40,40,40,40]}>
    <h2>Slide 3</h2>
  </VBox>
</Carousel>
```

Each direct child is one slide.

---

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `Snippet` | — | Slides — each direct child is one slide |
| `ref` | `bindable` | — | DOM element reference |

The Carousel automatically detects the number of slides from the DOM.

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md).

---

## Notes

- Navigation arrows use Phosphor `PhCaretLeft` / `PhCaretRight` icons.
- Dot indicators show the current slide position.
- Swiping is not currently supported.
