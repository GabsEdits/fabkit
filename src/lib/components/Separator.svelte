<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    orientation = "horizontal",
    label = "",
    color,
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

  const lineColor = $derived(color || "var(--border-primary)");
</script>

<Skeleton
  class="Separator Separator--{orientation} {className}"
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
  {#if orientation === "horizontal"}
    {#if label}
      <div class="Separator-row" style:--sep-color={lineColor}>
        <div class="Separator-line"></div>
        <span class="Separator-label">{label}</span>
        <div class="Separator-line"></div>
      </div>
    {:else}
      <hr class="Separator-hr" style:border-color={lineColor} />
    {/if}
  {:else}
    <div class="Separator-vline" style:background={lineColor}></div>
  {/if}
</Skeleton>

<style>
  :global(.Separator) {
    display: flex;
    align-items: center;
  }

  :global(.Separator--vertical) {
    align-self: stretch;
  }

  .Separator-hr {
    border: none;
    border-top: 1px solid;
    margin: 0;
    width: 100%;
  }

  .Separator-row {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .Separator-line {
    flex: 1;
    height: 1px;
    background: var(--sep-color);
  }

  .Separator-label {
    color: var(--text-secondary);
    font-size: 0.82rem;
    white-space: nowrap;
  }

  .Separator-vline {
    width: 1px;
    height: 100%;
    align-self: stretch;
  }
</style>
