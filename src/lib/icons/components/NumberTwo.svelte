<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2"/><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM160,176a8,8,0,0,1,0,16H96a8,8,0,0,1-5.79-13.52L145.9,120a24,24,0,0,0-35.73-32A23.33,23.33,0,0,0,107,92.38a8,8,0,0,1-14-7.77,40.22,40.22,0,0,1,5.28-7.38,40,40,0,0,1,59.45,53.54l-.16.16L114.66,176Z"/>`,
    light: `<path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
