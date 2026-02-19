<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    multiple = false,
    open = $bindable([]),
    children,
    // Skeleton pass-through
    margin = [0, 0, 0, 0],
    padding = [0, 0, 0, 0],
    bg = "transparent",
    bgHover,
    bgFocus,
    bgActive,
    borderWidth = [0, 0, 0, 0],
    borderColor = "transparent",
    borderStyle = "solid",
    borderRadius = [0, 0, 0, 0],
    shadow = "none",
    zIndex = 0,
    ref = $bindable(),
    class: className = "",
    ...rest
  } = $props();
</script>

<Skeleton
  class="Accordion {className}"
  bind:ref
  {margin}
  {padding}
  {bg}
  {bgHover}
  {bgFocus}
  {bgActive}
  {borderWidth}
  {borderColor}
  {borderStyle}
  {borderRadius}
  {shadow}
  {zIndex}
  {...rest}
>
  {#if children}
    {@render children()}
  {/if}
</Skeleton>

<style>
  :global(.Accordion) {
    border-top: 1px solid var(--border-primary);
    width: 100%;
  }
</style>
