<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="60" cy="60" r="16"/><circle cx="128" cy="60" r="16"/><circle cx="196" cy="60" r="16"/><circle cx="60" cy="128" r="16"/><circle cx="128" cy="128" r="16"/><circle cx="196" cy="128" r="16"/><circle cx="60" cy="196" r="16"/><circle cx="128" cy="196" r="16"/><circle cx="196" cy="196" r="16"/>`,
    duotone: `<circle cx="60" cy="60" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="196" cy="60" r="12"/><circle cx="60" cy="128" r="12"/><circle cx="128" cy="128" r="12"/><circle cx="196" cy="128" r="12"/><circle cx="60" cy="196" r="12"/><circle cx="128" cy="196" r="12"/><circle cx="196" cy="196" r="12"/>`,
    fill: `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-52A12,12,0,1,1,88,76,12,12,0,0,1,76,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,128,88Zm52,104a12,12,0,1,1,12-12A12,12,0,0,1,180,192Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,140Zm0-52a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"/>`,
    light: `<circle cx="60" cy="60" r="10"/><circle cx="128" cy="60" r="10"/><circle cx="196" cy="60" r="10"/><circle cx="60" cy="128" r="10"/><circle cx="128" cy="128" r="10"/><circle cx="196" cy="128" r="10"/><circle cx="60" cy="196" r="10"/><circle cx="128" cy="196" r="10"/><circle cx="196" cy="196" r="10"/>`,
    regular: `<circle cx="60" cy="60" r="12"/><circle cx="128" cy="60" r="12"/><circle cx="196" cy="60" r="12"/><circle cx="60" cy="128" r="12"/><circle cx="128" cy="128" r="12"/><circle cx="196" cy="128" r="12"/><circle cx="60" cy="196" r="12"/><circle cx="128" cy="196" r="12"/><circle cx="196" cy="196" r="12"/>`,
    thin: `<circle cx="60" cy="60" r="8"/><circle cx="128" cy="60" r="8"/><circle cx="196" cy="60" r="8"/><circle cx="60" cy="128" r="8"/><circle cx="128" cy="128" r="8"/><circle cx="196" cy="128" r="8"/><circle cx="60" cy="196" r="8"/><circle cx="128" cy="196" r="8"/><circle cx="196" cy="196" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
