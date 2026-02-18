<script>
  import Skeleton from "./Skeleton.svelte";
  let {
    children,
    class: className = "",
    // Skeleton Props Pass-through
    margin = [0, 0, 0, 0],
    padding,
    bg,
    bgHover,
    bgFocus,
    bgActive,
    borderWidth = [1, 1, 1, 1],
    borderWidthHover,
    borderWidthFocus,
    borderWidthActive,
    borderColor = "var(--border-primary)",
    borderStyle = "solid",
    borderRadius,
    shadow,
    zIndex = 0,
    ref = $bindable(),
    ...rest
  } = $props();

  const finalPadding = $derived(
    padding !== undefined ? padding : [16, 16, 16, 16],
  );
  const finalBg = $derived(
    bg !== undefined ? bg : "var(--background-elevated)",
  );
  const finalBorderRadius = $derived(
    borderRadius !== undefined
      ? borderRadius
      : "var(--snt-border-radius, 12px)",
  );
  const finalShadow = $derived(
    shadow !== undefined ? shadow : "var(--shadow-elevated-2)",
  );
</script>

<Skeleton
  class="Card {className}"
  bind:ref
  {margin}
  padding={finalPadding}
  bg={finalBg}
  {bgHover}
  {bgFocus}
  {bgActive}
  {borderWidth}
  {borderWidthHover}
  {borderWidthFocus}
  {borderWidthActive}
  {borderColor}
  {borderStyle}
  borderRadius={finalBorderRadius}
  shadow={finalShadow}
  {zIndex}
  {...rest}
>
  {@render children?.()}
</Skeleton>

<style>
  :global(.Card) {
    text-align: left;
  }
</style>
