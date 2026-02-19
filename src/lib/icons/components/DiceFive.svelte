<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="88" cy="88" r="16"/><circle cx="128" cy="128" r="16"/><circle cx="168" cy="88" r="16"/><circle cx="88" cy="168" r="16"/><circle cx="168" cy="168" r="16"/>`,
    duotone: `<circle cx="92" cy="92" r="12"/><circle cx="164" cy="92" r="12"/><circle cx="92" cy="164" r="12"/><circle cx="128" cy="128" r="12"/><circle cx="164" cy="164" r="12"/>`,
    fill: `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM92,176a12,12,0,1,1,12-12A12,12,0,0,1,92,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,92,104Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,164,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,164,104Z"/>`,
    light: `<circle cx="92" cy="92" r="10"/><circle cx="128" cy="128" r="10"/><circle cx="164" cy="92" r="10"/><circle cx="92" cy="164" r="10"/><circle cx="164" cy="164" r="10"/>`,
    regular: `<circle cx="92" cy="92" r="12"/><circle cx="164" cy="92" r="12"/><circle cx="92" cy="164" r="12"/><circle cx="128" cy="128" r="12"/><circle cx="164" cy="164" r="12"/>`,
    thin: `<circle cx="92" cy="92" r="8"/><circle cx="128" cy="128" r="8"/><circle cx="164" cy="92" r="8"/><circle cx="92" cy="164" r="8"/><circle cx="164" cy="164" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
