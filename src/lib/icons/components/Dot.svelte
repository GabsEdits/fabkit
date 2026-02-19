<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="128" cy="128" r="16"/>`,
    duotone: `<circle cx="128" cy="128" r="48" opacity="0.2"/><circle cx="128" cy="128" r="12"/>`,
    fill: `<path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z"/>`,
    light: `<circle cx="128" cy="128" r="10"/>`,
    regular: `<circle cx="128" cy="128" r="12"/>`,
    thin: `<circle cx="128" cy="128" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
