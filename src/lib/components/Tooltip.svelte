<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    text = "",
    position = "top",
    delay = 300,
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

  let visible = $state(false);
  let timer = $state(null);

  function show() {
    timer = setTimeout(() => (visible = true), delay);
  }

  function hide() {
    clearTimeout(timer);
    visible = false;
  }
</script>

<Skeleton
  class="Tooltip-wrapper {className}"
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
  onmouseenter={show}
  onmouseleave={hide}
  {...rest}
>
  {#if children}
    {@render children()}
  {/if}
  {#if visible && text}
    <div class="Tooltip-bubble Tooltip-bubble--{position}">
      {text}
    </div>
  {/if}
</Skeleton>

<style>
  :global(.Tooltip-wrapper) {
    position: relative;
    display: inline-flex;
  }

  .Tooltip-bubble {
    position: absolute;
    background: var(--background-top);
    color: var(--text-primary);
    border: 1px solid var(--border-secondary);
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 0.82rem;
    white-space: nowrap;
    pointer-events: none;
    z-index: 9999;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .Tooltip-bubble--top {
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }

  .Tooltip-bubble--bottom {
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }

  .Tooltip-bubble--left {
    right: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }

  .Tooltip-bubble--right {
    left: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }
</style>
