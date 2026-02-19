<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<path d="M184,120H44a28,28,0,0,0,0,56H192a48,48,0,0,0,0-96H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M192,80H80v32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96Z" opacity="0.2"/><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144H72a24,24,0,0,1,0-48h96a8,8,0,0,1,0,16H72a8,8,0,0,0,0,16h96a24,24,0,0,0,0-48H96a8,8,0,0,1,0-16h72a40,40,0,0,1,0,80Z"/>`,
    light: `<path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
