<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="104" cy="104" r="16"/><circle cx="152" cy="152" r="16"/>`,
    duotone: `<circle cx="108" cy="108" r="12"/><circle cx="148" cy="148" r="12"/>`,
    fill: `<path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm-84,88a12,12,0,1,1,12-12A12,12,0,0,1,108,120Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,148,160Z"/>`,
    light: `<circle cx="108" cy="108" r="10"/><circle cx="148" cy="148" r="10"/>`,
    regular: `<circle cx="108" cy="108" r="12"/><circle cx="148" cy="148" r="12"/>`,
    thin: `<circle cx="108" cy="108" r="8"/><circle cx="148" cy="148" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
