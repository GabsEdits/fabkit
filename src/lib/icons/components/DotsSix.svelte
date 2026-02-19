<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="60" cy="92" r="16"/><circle cx="128" cy="92" r="16"/><circle cx="196" cy="92" r="16"/><circle cx="60" cy="164" r="16"/><circle cx="128" cy="164" r="16"/><circle cx="196" cy="164" r="16"/>`,
    duotone: `<circle cx="60" cy="92" r="12"/><circle cx="128" cy="92" r="12"/><circle cx="196" cy="92" r="12"/><circle cx="60" cy="164" r="12"/><circle cx="128" cy="164" r="12"/><circle cx="196" cy="164" r="12"/>`,
    fill: `<path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z"/>`,
    light: `<circle cx="60" cy="92" r="10"/><circle cx="128" cy="92" r="10"/><circle cx="196" cy="92" r="10"/><circle cx="60" cy="164" r="10"/><circle cx="128" cy="164" r="10"/><circle cx="196" cy="164" r="10"/>`,
    regular: `<circle cx="60" cy="92" r="12"/><circle cx="128" cy="92" r="12"/><circle cx="196" cy="92" r="12"/><circle cx="60" cy="164" r="12"/><circle cx="128" cy="164" r="12"/><circle cx="196" cy="164" r="12"/>`,
    thin: `<circle cx="60" cy="92" r="8"/><circle cx="128" cy="92" r="8"/><circle cx="196" cy="92" r="8"/><circle cx="60" cy="164" r="8"/><circle cx="128" cy="164" r="8"/><circle cx="196" cy="164" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
