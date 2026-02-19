<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<polygon points="232 56 40 56 88 104 40 152 186.29 152 232 56" opacity="0.2"/><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M239.22,59.44l-45.63,95.82a3.54,3.54,0,0,1-.16.34l-34.21,71.84a8,8,0,1,1-14.44-6.88L173.62,160H40a8,8,0,0,1-5.66-13.66L76.69,104,34.34,61.66A8,8,0,0,1,40,48H232a8,8,0,0,1,7.22,11.44Z"/>`,
    light: `<polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
