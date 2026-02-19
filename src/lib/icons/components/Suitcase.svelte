<script>
  import Icon from '../Icon.svelte';
  let { weight = 'regular', size = 24, color = 'currentColor', class: className = '', mirrored = false } = $props();
  const paths = {
    bold: `<path d="M168,204V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V204" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>`,
    duotone: `<path d="M88,64V208H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8Z" opacity="0.2"/><path d="M168,64V208h48a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8Z" opacity="0.2"/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    fill: `<path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,72h64V200H96Zm0-24a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Z"/>`,
    light: `<path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/>`,
    regular: `<path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>`,
    thin: `<path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>`
  };
</script>
<Icon {weight} {size} {color} class={className} {mirrored} {paths} />
