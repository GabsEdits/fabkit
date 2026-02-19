<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="96" cy="84" r="16"/><circle cx="160" cy="84" r="16"/><circle cx="96" cy="128" r="16"/><circle cx="160" cy="128" r="16"/><circle cx="96" cy="172" r="16"/><circle cx="160" cy="172" r="16"/>`,
    duotone: `<circle cx="92" cy="84" r="12"/><circle cx="164" cy="84" r="12"/><circle cx="92" cy="128" r="12"/><circle cx="164" cy="128" r="12"/><circle cx="92" cy="172" r="12"/><circle cx="164" cy="172" r="12"/>`,
    fill: `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM92,184a12,12,0,1,1,12-12A12,12,0,0,1,92,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,96Zm72,88a12,12,0,1,1,12-12A12,12,0,0,1,164,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,96Z"/>`,
    light: `<circle cx="92" cy="84" r="10"/><circle cx="164" cy="84" r="10"/><circle cx="92" cy="128" r="10"/><circle cx="164" cy="128" r="10"/><circle cx="92" cy="172" r="10"/><circle cx="164" cy="172" r="10"/>`,
    regular: `<circle cx="92" cy="84" r="12"/><circle cx="164" cy="84" r="12"/><circle cx="92" cy="128" r="12"/><circle cx="164" cy="128" r="12"/><circle cx="92" cy="172" r="12"/><circle cx="164" cy="172" r="12"/>`,
    thin: `<circle cx="92" cy="84" r="8"/><circle cx="164" cy="84" r="8"/><circle cx="92" cy="128" r="8"/><circle cx="164" cy="128" r="8"/><circle cx="92" cy="172" r="8"/><circle cx="164" cy="172" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
