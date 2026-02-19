<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    keys = [],
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
  class="Kbd {className}"
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
  {#if keys.length > 0}
    {#each keys as key, i}
      <kbd class="Kbd-key">{key}</kbd>
      {#if i < keys.length - 1}
        <span class="Kbd-sep">+</span>
      {/if}
    {/each}
  {:else if children}
    {@render children()}
  {/if}
</Skeleton>

<style>
  :global(.Kbd) {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 0.82rem;
  }

  .Kbd-key {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--background-elevated);
    border: 1px solid var(--border-secondary);
    border-bottom-width: 3px;
    border-radius: 5px;
    padding: 2px 7px;
    font-family: inherit;
    font-size: inherit;
    color: var(--text-primary);
    box-shadow: 0 1px 0 var(--border-tertiary);
    min-width: 22px;
  }

  .Kbd-sep {
    color: var(--text-secondary);
    font-size: 0.78rem;
  }
</style>
