<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<path d="M64,208h72a80,80,0,0,0,0-160H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M64,208h72a80,80,0,0,0,0-160H64Z" opacity="0.2"/><path d="M64,208h72a80,80,0,0,0,0-160H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,192H80a8,8,0,0,1,0-16h48a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h48a64,64,0,0,1,0,128Z"/>`,
    light: `<path d="M64,208h72a80,80,0,0,0,0-160H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<path d="M64,208h72a80,80,0,0,0,0-160H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<path d="M64,208h72a80,80,0,0,0,0-160H64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
