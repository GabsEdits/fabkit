<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: ``,
    duotone: ``,
    fill: `<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z"/>`,
    light: ``,
    regular: ``,
    thin: ``
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
