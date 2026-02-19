<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="180" cy="128" r="16"/>`,
    duotone: `<circle cx="188" cy="128" r="12"/>`,
    fill: `<path d="M224,64H32A16,16,0,0,0,16,80v96a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64Zm-36,76a12,12,0,1,1,12-12A12,12,0,0,1,188,140Z"/>`,
    light: `<circle cx="188" cy="128" r="10"/>`,
    regular: `<circle cx="188" cy="128" r="12"/>`,
    thin: `<circle cx="188" cy="128" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
