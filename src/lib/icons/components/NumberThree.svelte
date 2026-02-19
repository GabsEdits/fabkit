<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM124,192a43.85,43.85,0,0,1-34.22-16.34,8,8,0,0,1,12.44-10.06A28,28,0,1,0,126,120.07a8,8,0,0,1-5.58-13.1l22.48-27H96a8,8,0,0,1,0-16h64a8,8,0,0,1,6.15,13.12l-25.23,30.27A44,44,0,0,1,124,192Z"/>`,
    light: `<path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<path d="M88,48h80l-48,64a48,48,0,1,1-32,83.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
