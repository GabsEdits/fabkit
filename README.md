# fabkit

A lightweight UI toolkit and component library.

Install
- npm: `npm install github:fabricatorsltd/fabkit#main`
- pnpm: `pnpm add github:fabricatorsltd/fabkit#main`

Entrypoint & Theme
```js
// Import from the package entrypoint
import { initTheme, defaultTheme, Button, Skeleton } from 'fabkit';

// Initialize a theme (merge with defaults)
initTheme({
  fonts: { primary: "'Inter', sans-serif" },
  dimensions: { borderRadius: 12, spacing: 8, fontSize: 15 },
  colors: { primary: '#6366f1', secondary: '#22c55e' }
});

// Access the default theme if needed
// import { defaultTheme } from 'fabkit';
```

Skeleton Component (fine-tuning)
```svelte
<script>
  import { Skeleton, Button } from 'fabkit';
</script>

<!-- Use Skeleton to fine-tune spacing, borders, shadows, states -->
<Skeleton
  margin={[8, 12, 8, 12]}
  padding={[12, 16, 12, 16]}
  borderWidth={[1, 1, 1, 1]}
  borderColor={["#e5e7eb", "#e5e7eb", "#e5e7eb", "#e5e7eb"]}
  borderRadius={[12, 12, 12, 12]}
  bg="white"
  bgHover="#f9fafb"
  shadow="0 1px 2px rgba(0,0,0,0.08)"
>
  <Button>Click me</Button>
</Skeleton>
```

Development
- Install deps: `pnpm install`
- Build: `pnpm build`
- Test: `pnpm test`
