<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="128" cy="128" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<circle cx="128" cy="128" r="24" opacity="0.2"/><circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/>`,
    fill: `<path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z"/>`,
    light: `<circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/>`,
    thin: `<circle cx="128" cy="128" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
