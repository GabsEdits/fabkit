<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="128" cy="60" r="16"/><circle cx="128" cy="128" r="16"/><circle cx="128" cy="196" r="16"/>`,
    duotone: `<circle cx="128" cy="128" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="128" cy="196" r="12"/>`,
    fill: `<path d="M160,16H96A16,16,0,0,0,80,32V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V32A16,16,0,0,0,160,16ZM128,208a12,12,0,1,1,12-12A12,12,0,0,1,128,208Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z"/>`,
    light: `<circle cx="128" cy="60" r="10"/><circle cx="128" cy="128" r="10"/><circle cx="128" cy="196" r="10"/>`,
    regular: `<circle cx="128" cy="128" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="128" cy="196" r="12"/>`,
    thin: `<circle cx="128" cy="60" r="8"/><circle cx="128" cy="128" r="8"/><circle cx="128" cy="196" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
