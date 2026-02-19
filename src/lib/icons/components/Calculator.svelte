<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<line x1="92" y1="76" x2="164" y2="76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="104" cy="128" r="16"/><circle cx="152" cy="128" r="16"/><circle cx="104" cy="176" r="16"/><circle cx="152" cy="176" r="16"/>`,
    duotone: `<circle cx="88" cy="148" r="12"/><circle cx="128" cy="148" r="12"/><circle cx="168" cy="148" r="12"/><circle cx="88" cy="188" r="12"/><circle cx="128" cy="188" r="12"/><circle cx="168" cy="188" r="12"/>`,
    fill: `<path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM88,200a12,12,0,1,1,12-12A12,12,0,0,1,88,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,88,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,128,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,160Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,168,200Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,168,160Zm16-56a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"/>`,
    light: `<circle cx="88" cy="148" r="10"/><circle cx="128" cy="148" r="10"/><circle cx="168" cy="148" r="10"/><circle cx="88" cy="188" r="10"/><circle cx="128" cy="188" r="10"/><circle cx="168" cy="188" r="10"/>`,
    regular: `<circle cx="88" cy="148" r="12"/><circle cx="128" cy="148" r="12"/><circle cx="168" cy="148" r="12"/><circle cx="88" cy="188" r="12"/><circle cx="128" cy="188" r="12"/><circle cx="168" cy="188" r="12"/>`,
    thin: `<circle cx="88" cy="148" r="8"/><circle cx="128" cy="148" r="8"/><circle cx="168" cy="148" r="8"/><circle cx="88" cy="188" r="8"/><circle cx="128" cy="188" r="8"/><circle cx="168" cy="188" r="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
