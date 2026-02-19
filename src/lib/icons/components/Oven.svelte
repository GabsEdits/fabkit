<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="84" cy="80" r="16"/><circle cx="128" cy="80" r="16"/><circle cx="172" cy="80" r="16"/>`,
    duotone: `<circle cx="84" cy="76" r="12"/><circle cx="128" cy="76" r="12"/><circle cx="172" cy="76" r="12"/>`,
    fill: `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM172,56a12,12,0,1,1-12,12A12,12,0,0,1,172,56Zm-44,0a12,12,0,1,1-12,12A12,12,0,0,1,128,56ZM84,56A12,12,0,1,1,72,68,12,12,0,0,1,84,56ZM192,192H64V104H192Z"/>`,
    light: `<circle cx="84" cy="76" r="10"/><circle cx="128" cy="76" r="10"/><circle cx="172" cy="76" r="10"/>`,
    regular: `<circle cx="84" cy="76" r="12"/><circle cx="128" cy="76" r="12"/><circle cx="172" cy="76" r="12"/>`,
    thin: `<circle cx="84" cy="76" r="8"/><circle cx="128" cy="76" r="8"/><circle cx="172" cy="76" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
