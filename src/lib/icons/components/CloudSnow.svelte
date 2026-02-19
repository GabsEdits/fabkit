<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="168" cy="208" r="16"/><circle cx="120" cy="208" r="16"/><circle cx="72" cy="208" r="16"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M156,24A68.16,68.16,0,0,0,90.19,74.45v-.11A44,44,0,1,0,76,160h80a68,68,0,0,0,0-136Z" opacity="0.2"/><circle cx="76" cy="196" r="12"/><circle cx="116" cy="212" r="12"/><circle cx="164" cy="196" r="12"/><circle cx="68" cy="236" r="12"/><circle cx="156" cy="236" r="12"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M88,196a12,12,0,1,1-12-12A12,12,0,0,1,88,196Zm28,4a12,12,0,1,0,12,12A12,12,0,0,0,116,200Zm48-16a12,12,0,1,0,12,12A12,12,0,0,0,164,184ZM68,224a12,12,0,1,0,12,12A12,12,0,0,0,68,224Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,156,224ZM231.87,87.55a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,96l-.6,0A8.14,8.14,0,0,1,64,87.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,116.36C24.2,145.07,48.12,168,76.84,168H156A76.08,76.08,0,0,0,231.87,87.55Z"/>`,
    light: `<circle cx="76" cy="196" r="10"/><circle cx="116" cy="212" r="10"/><circle cx="164" cy="196" r="10"/><circle cx="68" cy="236" r="10"/><circle cx="156" cy="236" r="10"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<circle cx="76" cy="196" r="12"/><circle cx="116" cy="212" r="12"/><circle cx="164" cy="196" r="12"/><circle cx="68" cy="236" r="12"/><circle cx="156" cy="236" r="12"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<circle cx="76" cy="196" r="8"/><circle cx="116" cy="212" r="8"/><circle cx="164" cy="196" r="8"/><circle cx="68" cy="236" r="8"/><circle cx="156" cy="236" r="8"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
