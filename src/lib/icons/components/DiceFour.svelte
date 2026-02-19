<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="96" cy="96" r="16"/><circle cx="160" cy="96" r="16"/><circle cx="96" cy="160" r="16"/><circle cx="160" cy="160" r="16"/>`,
    duotone: `<circle cx="100" cy="100" r="12"/><circle cx="156" cy="100" r="12"/><circle cx="100" cy="156" r="12"/><circle cx="156" cy="156" r="12"/>`,
    fill: `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM100,168a12,12,0,1,1,12-12A12,12,0,0,1,100,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,100,112Zm56,56a12,12,0,1,1,12-12A12,12,0,0,1,156,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,156,112Z"/>`,
    light: `<circle cx="100" cy="100" r="10"/><circle cx="156" cy="100" r="10"/><circle cx="100" cy="156" r="10"/><circle cx="156" cy="156" r="10"/>`,
    regular: `<circle cx="100" cy="100" r="12"/><circle cx="156" cy="100" r="12"/><circle cx="100" cy="156" r="12"/><circle cx="156" cy="156" r="12"/>`,
    thin: `<circle cx="100" cy="100" r="8"/><circle cx="156" cy="100" r="8"/><circle cx="100" cy="156" r="8"/><circle cx="156" cy="156" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
