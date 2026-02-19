<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<line x1="32" y1="56" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<line x1="32" y1="56" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M40,56V200a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0ZM224,80H72A16,16,0,0,0,56,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80Z"/>`,
    light: `<line x1="32" y1="56" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<line x1="32" y1="56" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<line x1="32" y1="56" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
