# TextRich

A container that applies typographic styles to raw HTML content (headings, paragraphs, lists, tables, blockquotes, code blocks).

---

## Import

```js
import { TextRich } from 'fabkit';
```

---

## Basic Usage

```svelte
<TextRich>
  <h1>Title</h1>
  <p>Paragraph with <b>bold</b>, <i>italic</i>, and <code>code</code>.</p>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
  </ul>
</TextRich>
```

---

## Component Props

TextRich has no component-specific props — it is a styled Skeleton wrapper.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `Snippet` | — | Any HTML content |
| `ref` | `bindable` | — | DOM element reference |

---

## Skeleton Pass-through Props

Accepts all [Skeleton props](./skeleton.md).

---

## Styled elements

TextRich applies styles to all direct and nested:

- `h1`–`h6` — heading hierarchy
- `p` — paragraph spacing
- `b`, `strong` — bold
- `i`, `em` — italic
- `u` — underline
- `s`, `del` — strikethrough
- `code` — inline code
- `pre > code` — code block
- `ul`, `ol`, `li` — lists
- `table`, `thead`, `tbody`, `tr`, `th`, `td` — tables
- `blockquote` — quotes
- `a` — links
