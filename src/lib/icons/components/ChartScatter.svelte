<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="132" cy="148" r="16"/><circle cx="108" cy="92" r="16"/><circle cx="76" cy="164" r="16"/><circle cx="172" cy="116" r="16"/><circle cx="196" cy="76" r="16"/><circle cx="188" cy="164" r="16"/>`,
    duotone: `<path d="M32,208V48H208a16,16,0,0,1,16,16V208Z" opacity="0.2"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="132" cy="148" r="12"/><circle cx="108" cy="92" r="12"/><circle cx="76" cy="164" r="12"/><circle cx="172" cy="116" r="12"/><circle cx="196" cy="76" r="12"/><circle cx="188" cy="164" r="12"/>`,
    fill: `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM188,72a12,12,0,1,1-12,12A12,12,0,0,1,188,72Zm0,56a12,12,0,1,1-12,12A12,12,0,0,1,188,128Zm-40-16a12,12,0,1,1-12,12A12,12,0,0,1,148,112ZM124,72a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm-24,56a12,12,0,1,1-12,12A12,12,0,0,1,100,128Zm100,64H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z"/>`,
    light: `<polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="132" cy="148" r="10"/><circle cx="108" cy="92" r="10"/><circle cx="76" cy="164" r="10"/><circle cx="172" cy="116" r="10"/><circle cx="196" cy="76" r="10"/><circle cx="188" cy="164" r="10"/>`,
    regular: `<polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="132" cy="148" r="12"/><circle cx="108" cy="92" r="12"/><circle cx="76" cy="164" r="12"/><circle cx="172" cy="116" r="12"/><circle cx="196" cy="76" r="12"/><circle cx="188" cy="164" r="12"/>`,
    thin: `<polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="132" cy="148" r="8"/><circle cx="108" cy="92" r="8"/><circle cx="76" cy="164" r="8"/><circle cx="172" cy="116" r="8"/><circle cx="196" cy="76" r="8"/><circle cx="188" cy="164" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
