<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="92" cy="80" r="16"/><circle cx="92" cy="176" r="16"/><circle cx="92" cy="128" r="16"/>`,
    duotone: `<circle cx="84" cy="80" r="12"/><circle cx="84" cy="176" r="12"/><circle cx="84" cy="128" r="12"/>`,
    fill: `<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM76,188a12,12,0,1,1,12-12A12,12,0,0,1,76,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-48A12,12,0,1,1,88,80,12,12,0,0,1,76,92Z"/>`,
    light: `<circle cx="84" cy="80" r="10"/><circle cx="84" cy="176" r="10"/><circle cx="84" cy="128" r="10"/>`,
    regular: `<circle cx="84" cy="76" r="12"/><circle cx="84" cy="180" r="12"/><circle cx="84" cy="128" r="12"/>`,
    thin: `<circle cx="84" cy="80" r="8"/><circle cx="84" cy="176" r="8"/><circle cx="84" cy="128" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
