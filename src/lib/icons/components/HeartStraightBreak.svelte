<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L128,80,109.36,62.64a50,50,0,0,0-70.72,70.72Z" opacity="0.2"/><path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M113.29,55.31A58,58,0,0,0,32.93,139l89.37,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0-82-82.1h0l-24.4,23L143,106.32a8,8,0,0,1,0,11.32l-20.69,20.69A8,8,0,1,1,111,127l15-15L99.5,85.42a8,8,0,0,1,.22-11.53l13.55-12.78a4,4,0,0,0,0-5.8Z"/>`,
    light: `<path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<path d="M128,80.6l-18.64-18a50,50,0,0,0-70.72,70.72L128,224l89.36-90.64a50,50,0,1,0-70.72-70.72L112,96l32,32-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
