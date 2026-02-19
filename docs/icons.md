# Icons

Fabkit includes **1514 Phosphor icons** as individual Svelte components. All icons are exported from the `fabkit` package with the `Ph` prefix.

---

## Import

```js
import { PhHouse, PhArrowRight, PhMagnifyingGlass } from 'fabkit';

// Or import the base component for dynamic rendering
import { PhIcon } from 'fabkit';
```

---

## Basic Usage

```svelte
<PhHouse size={24} />
<PhArrowRight size={16} color="var(--text-secondary)" />
<PhMagnifyingGlass size={20} weight="bold" />
```

---

## PhIcon — Base Component Props

Every `Ph*` icon shares the same props via the `PhIcon` base:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Width and height in px (or any CSS unit as string) |
| `color` | `string` | `"currentColor"` | Fill color — defaults to inheriting text color |
| `weight` | `"thin" \| "light" \| "regular" \| "bold" \| "fill" \| "duotone"` | `"regular"` | Icon weight/style variant |
| `mirrored` | `boolean` | `false` | Horizontally flips the icon (for RTL) |
| `class` | `string` | `""` | Additional CSS classes |

---

## Icon Weights

All 1514 icons are available in 6 weights:

| Weight | Description |
|--------|-------------|
| `regular` | Default — balanced stroke |
| `thin` | Lightest stroke |
| `light` | Light stroke |
| `bold` | Heavy stroke |
| `fill` | Solid filled variant |
| `duotone` | Two-tone with opacity |

```svelte
<PhHeart size={32} weight="thin" />
<PhHeart size={32} weight="regular" />
<PhHeart size={32} weight="bold" />
<PhHeart size={32} weight="fill" />
<PhHeart size={32} weight="duotone" />
```

---

## Dynamic Rendering

Use `svelte:component` to render an icon stored in a variable:

```svelte
<script>
  import { PhHouse } from 'fabkit';

  let icon = PhHouse; // can be any Ph* component
</script>

<svelte:component this={icon} size={24} />
```

This is how `ContextArea`, `BaseField`, `SelectField`, and other components accept icon props.

---

## Naming Convention

Icon names follow `Ph` + PascalCase version of the Phosphor icon name:

| Phosphor name | Fabkit export |
|---------------|---------------|
| `arrow-right` | `PhArrowRight` |
| `magnifying-glass` | `PhMagnifyingGlass` |
| `dots-three-vertical` | `PhDotsThreeVertical` |
| `address-book-tabs` | `PhAddressBookTabs` |

---

## Icon Browser

A searchable icon browser is available at `/icons` in fabkit-examples. Click any icon to copy its import name.

---

## Full Export

All icons are exported from `fabkit` — no separate import path needed:

```js
import * as Icons from 'fabkit';

// Filter to only icon components
const allIcons = Object.entries(Icons)
  .filter(([name]) => name.startsWith('Ph'))
  .map(([name, component]) => ({ name, component }));
```
