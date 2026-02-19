<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    value = 0,
    max = 1,
    segments = 0,
    color,
    lowThreshold = 0.25,
    highThreshold = 0.75,
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

  const ratio = $derived(Math.min(Math.max(value / max, 0), 1));

  const autoColor = $derived(() => {
    if (color) return color;
    if (ratio <= lowThreshold) return "var(--action-destructive)";
    if (ratio >= highThreshold) return "#4CAF50";
    return "var(--action-suggested)";
  });

  const segmentArray = $derived(
    segments > 0 ? Array.from({ length: segments }, (_, i) => i) : null
  );
</script>

<Skeleton
  class="LevelBar {className}"
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
  <div class="LevelBar-track">
    {#if segmentArray}
      {#each segmentArray as seg}
        {@const segRatio = (seg + 1) / segments}
        <div
          class="LevelBar-segment"
          class:LevelBar-segment--filled={ratio >= seg / segments}
          style:background={ratio >= seg / segments ? autoColor() : undefined}
        ></div>
      {/each}
    {:else}
      <div
        class="LevelBar-fill"
        style:width="{ratio * 100}%"
        style:background={autoColor()}
      ></div>
    {/if}
  </div>
</Skeleton>

<style>
  .LevelBar-track {
    width: 100%;
    height: 8px;
    background: var(--background-elevated-2);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    gap: 2px;
  }

  .LevelBar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease, background 0.3s ease;
  }

  .LevelBar-segment {
    flex: 1;
    height: 100%;
    background: var(--background-elevated-2);
    border-radius: 2px;
    transition: background 0.3s ease;
  }

  .LevelBar-segment--filled {
    background: var(--action-suggested);
  }
</style>
