<script>
  import Skeleton from "./Skeleton.svelte";
  let {
    label,
    action,
    children,
    class: className = "",
    // Skeleton Props Pass-through
    margin = [0, 0, 0, 0],
    padding,
    bg = "transparent",
    bgHover,
    bgFocus,
    bgActive,
    borderWidth = [0, 0, 0, 0],
    borderWidthHover,
    borderWidthFocus,
    borderWidthActive,
    borderColor = "transparent",
    borderStyle = "solid",
    borderRadius,
    shadow = "none",
    zIndex = 0,
    href,
    target,
    ref = $bindable(),
    ...rest
  } = $props();

  const element = $derived(href ? "a" : "div");

  function handleClick() {
    if (action) action();
  }

  const finalPadding = $derived(
    padding !== undefined ? padding : [10, 16, 10, 16],
  );
  const finalBgHover = $derived(
    bgHover !== undefined ? bgHover : "var(--background-elevated-2-hover)",
  );
  const finalBgActive = $derived(
    bgActive !== undefined ? bgActive : "var(--background-top)",
  );
  const finalBorderRadius = $derived(
    borderRadius !== undefined
      ? borderRadius
      : "var(--snt-border-radius, 12px)",
  );
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<Skeleton
  class="Menu-item {className}"
  bind:ref
  {element}
  {href}
  {target}
  onclick={handleClick}
  style="text-decoration: none;"
  {margin}
  padding={finalPadding}
  {bg}
  bgHover={finalBgHover}
  {bgFocus}
  bgActive={finalBgActive}
  {borderWidth}
  {borderWidthHover}
  {borderWidthFocus}
  {borderWidthActive}
  {borderColor}
  {borderStyle}
  borderRadius={finalBorderRadius}
  {shadow}
  {zIndex}
  {...rest}
>
  {#if children}
    {@render children()}
  {:else}
    <span class="Menu-item-label">{label}</span>
  {/if}
</Skeleton>

<style>
  :global(.Menu-item) {
    align-items: center;
    display: flex;
    gap: 8px;
    cursor: pointer;
  }

  .Menu-item-label {
    flex-grow: 1;
    color: var(--text-primary);
  }
</style>
