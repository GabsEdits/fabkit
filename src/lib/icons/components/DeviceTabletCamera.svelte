<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<circle cx="128" cy="76" r="16"/>`,
    duotone: `<circle cx="128" cy="68" r="12"/>`,
    fill: `<path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z"/>`,
    light: `<circle cx="128" cy="68" r="10"/>`,
    regular: `<circle cx="128" cy="68" r="12"/>`,
    thin: `<circle cx="128" cy="68" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
