<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<polygon points="192 48 64 48 128 128 64 208 192 208 192 48" opacity="0.2"/><polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM184,88a8,8,0,0,1-16,0V72H96l38.4,51.2a8,8,0,0,1,0,9.6L96,184h72V168a8,8,0,0,1,16,0v24a8,8,0,0,1-8,8H80a8,8,0,0,1-6.4-12.8L118,128,73.6,68.8A8,8,0,0,1,80,56h96a8,8,0,0,1,8,8Z"/>`,
    light: `<polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<polyline points="192 72 192 48 64 48 128 128 64 208 192 208 192 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
