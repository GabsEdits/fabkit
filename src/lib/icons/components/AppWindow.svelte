<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="76" cy="92" r="16"/><circle cx="124" cy="92" r="16"/>`,
    duotone: `<circle cx="68" cy="84" r="12"/><circle cx="108" cy="84" r="12"/>`,
    fill: `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM68,96A12,12,0,1,1,80,84,12,12,0,0,1,68,96Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96Z"/>`,
    light: `<circle cx="68" cy="84" r="10"/><circle cx="108" cy="84" r="10"/>`,
    regular: `<circle cx="68" cy="84" r="12"/><circle cx="108" cy="84" r="12"/>`,
    thin: `<circle cx="68" cy="84" r="8"/><circle cx="108" cy="84" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
