<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-76,80a44,44,0,1,1-34.22,71.66,8,8,0,0,1,12.44-10.06,28,28,0,1,0,.35-35.62,8,8,0,0,1-14-6.29l7.55-52.82A8,8,0,0,1,104,64h56a8,8,0,0,1,0,16H110.94L107,107.4A44,44,0,0,1,124,104Z"/>`,
    light: `<path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<path d="M88,195.78a48,48,0,1,0,.92-72.36L104,48h64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
