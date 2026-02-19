<script>
  import Skeleton from "./Skeleton.svelte";

  /**
   * @typedef {'cover' | 'contain' | 'fill' | 'none' | 'scale-down'} ObjectFit
   * @typedef {'lazy' | 'eager'} LoadingStrategy
   * @typedef {'async' | 'sync' | 'auto'} DecodingStrategy
   * @typedef {'auto' | 'high' | 'low'} FetchPriority
   */

  let {
    // Image source — required (src or srcset)
    src = "",
    srcset = "",
    sizes = "",
    alt = "",

    // Sizing
    width,
    height,
    aspectRatio,

    // Object fit & position
    fit = "cover",
    position = "center",

    // Placeholder shown while loading
    placeholder = "",        // URL or data URI
    placeholderColor = "var(--background-elevated)",

    // Fallback shown on error
    fallback = "",           // URL or data URI
    fallbackColor = "var(--background-elevated-2)",

    // Loading behavior
    loading = "lazy",
    decoding = "async",
    fetchpriority = "auto",

    // Blur-up effect
    blur = false,            // animate blur removal on load
    blurAmount = 12,         // px

    // Rounded corners — pass directly or inherit from Skeleton
    borderRadius,

    // Overlay snippet rendered on top of the image
    overlay,

    // Aspect ratio helpers
    square = false,          // forces 1:1 aspect ratio
    portrait = false,        // forces 3:4 aspect ratio
    landscape = false,       // forces 16:9 aspect ratio

    // Accessibility
    role = "img",
    draggable = false,

    // Interaction events
    onclick,
    onload,
    onerror,

    // Skeleton pass-through
    class: className = "",
    margin,
    padding,
    bg,
    bgHover,
    bgFocus,
    bgActive,
    borderWidth,
    borderColor,
    borderStyle,
    shadow,
    shadowSecondary,
    zIndex,
    opacity,
    overflow = "hidden",
    transformHover,
    transformFocus,
    transformActive,
    ref = $bindable(),
    ...rest
  } = $props();

  let loaded = $state(false);
  let errored = $state(false);
  let imgElement = $state();

  // Resolve aspect ratio from boolean helpers or explicit prop
  const resolvedAspectRatio = $derived(
    square ? "1 / 1"
    : portrait ? "3 / 4"
    : landscape ? "16 / 9"
    : aspectRatio ?? undefined
  );

  // Effective src: fallback on error, placeholder while loading
  const effectiveSrc = $derived(
    errored
      ? (fallback || placeholder || src)
      : src
  );

  const placeholderVisible = $derived(!loaded && !errored && placeholder);
  const bgColor = $derived(
    errored ? fallbackColor : placeholderColor
  );

  function handleLoad() {
    loaded = true;
    onload?.();
  }

  function handleError() {
    errored = true;
    onerror?.();
  }

  const containerStyle = $derived.by(() => {
    const parts = [];
    if (resolvedAspectRatio) parts.push(`aspect-ratio: ${resolvedAspectRatio}`);
    if (width !== undefined) parts.push(`width: ${typeof width === 'number' ? width + 'px' : width}`);
    if (height !== undefined) parts.push(`height: ${typeof height === 'number' ? height + 'px' : height}`);
    return parts.join('; ');
  });

  const imgStyle = $derived.by(() => {
    const parts = [
      `object-fit: ${fit}`,
      `object-position: ${position}`,
      `width: 100%`,
      `height: 100%`,
      `display: block`,
    ];
    if (blur && !loaded) {
      parts.push(`filter: blur(${blurAmount}px)`);
      parts.push(`transform: scale(1.05)`);
    } else if (blur && loaded) {
      parts.push(`filter: none`);
      parts.push(`transform: scale(1)`);
    }
    if (!loaded && !errored) {
      parts.push(`opacity: 0`);
    }
    return parts.join('; ');
  });
</script>

<Skeleton
  bind:ref
  class="Image {onclick ? 'Image--clickable' : ''} {className}"
  bg={errored ? fallbackColor : (bg ?? (loaded ? 'transparent' : placeholderColor))}
  {bgHover}
  {bgFocus}
  {bgActive}
  {borderWidth}
  {borderColor}
  {borderStyle}
  borderRadius={borderRadius ?? [0,0,0,0]}
  {shadow}
  {shadowSecondary}
  {zIndex}
  {opacity}
  {overflow}
  {margin}
  {padding}
  {transformHover}
  {transformFocus}
  {transformActive}
  {onclick}
  position="relative"
  style={containerStyle}
  {role}
  {...rest}
>
  <!-- Placeholder background layer -->
  {#if placeholderVisible}
    <div class="Image-placeholder">
      {#if placeholder}
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          style="width:100%;height:100%;object-fit:{fit};object-position:{position};display:block;filter:blur(6px);transform:scale(1.05)"
          draggable={false}
        />
      {/if}
    </div>
  {/if}

  <!-- Main image -->
  {#if effectiveSrc}
    <img
      bind:this={imgElement}
      src={effectiveSrc}
      {srcset}
      {sizes}
      {alt}
      {loading}
      {decoding}
      fetchpriority={fetchpriority}
      draggable={draggable}
      onload={handleLoad}
      onerror={handleError}
      style={imgStyle}
      class="Image-img"
      class:Image-img--loaded={loaded}
      class:Image-img--blur={blur}
    />
  {:else}
    <!-- No src: show colored placeholder -->
    <div class="Image-empty" style="background:{fallbackColor}"></div>
  {/if}

  <!-- Overlay slot -->
  {#if overlay}
    <div class="Image-overlay">
      {@render overlay()}
    </div>
  {/if}
</Skeleton>

<style>
  :global(.Image) {
    position: relative;
    display: block;
    overflow: hidden;
  }

  :global(.Image--clickable) {
    cursor: pointer;
  }

  .Image-placeholder {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .Image-img {
    position: absolute;
    inset: 0;
    transition:
      opacity 0.3s ease,
      filter 0.4s ease,
      transform 0.4s ease;
    opacity: 0;
  }

  .Image-img--loaded {
    opacity: 1;
  }

  .Image-img--blur {
    transition:
      opacity 0.3s ease,
      filter 0.6s ease,
      transform 0.6s ease;
  }

  .Image-empty {
    position: absolute;
    inset: 0;
  }

  .Image-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  .Image-overlay > :global(*) {
    pointer-events: auto;
  }
</style>
