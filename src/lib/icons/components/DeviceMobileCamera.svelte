<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="128" cy="68" r="16"/>`,
    duotone: `<circle cx="128" cy="60" r="12"/>`,
    fill: `<path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM128,72a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z"/>`,
    light: `<circle cx="128" cy="60" r="10"/>`,
    regular: `<circle cx="128" cy="60" r="12"/>`,
    thin: `<circle cx="128" cy="60" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
