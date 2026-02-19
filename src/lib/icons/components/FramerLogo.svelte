<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" opacity="0.2"/><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M200,112H149l56.27,50A8,8,0,0,1,200,176H136v64a8,8,0,0,1-13.66,5.66l-72-72A8,8,0,0,1,48,168V104a8,8,0,0,1,8-8h51L50.69,46A8,8,0,0,1,56,32H200a8,8,0,0,1,8,8v64A8,8,0,0,1,200,112Z"/>`,
    light: `<polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
