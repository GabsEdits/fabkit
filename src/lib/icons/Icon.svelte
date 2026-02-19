<script>
  /**
   * Base Phosphor icon renderer.
   * @prop {'regular'|'bold'|'fill'|'light'|'duotone'|'thin'} weight
   * @prop {number|string} size - Width/height in px (default: 24)
   * @prop {string} color - CSS color (default: currentColor)
   * @prop {string} class - Extra CSS classes
   * @prop {boolean} mirrored - Flip horizontally
   * @prop {Record<string, string>} paths - SVG inner paths per weight (injected by icon components)
   */
  let {
    weight = 'regular',
    size = 24,
    color = 'currentColor',
    class: className = '',
    mirrored = false,
    paths = {}
  } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 256 256"
  width={size}
  height={size}
  fill={color}
  class={className}
  style={mirrored ? 'transform: scaleX(-1)' : undefined}
  aria-hidden="true"
>
  {@html paths[weight] ?? paths['regular'] ?? ''}
</svg>
