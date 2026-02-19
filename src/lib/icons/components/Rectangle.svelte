<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: ``,
    duotone: ``,
    fill: ``,
    light: ``,
    regular: ``,
    thin: ``
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
