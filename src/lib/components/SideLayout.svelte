<script>
  import Skeleton from "./Skeleton.svelte";
  import Paned from "./Paned.svelte";

  let {
    context,
    size = { left: 30, right: 70 },
    sidebar,
    content,
    class: className = "",
    // Skeleton Props Pass-through
    margin = [0, 0, 0, 0],
    padding = [0, 0, 0, 0],
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
    borderRadius = [0, 0, 0, 0],
    shadow = "none",
    zIndex = 0,
    ref = $bindable(),
    ...rest
  } = $props();
</script>

<Skeleton
  class="SideLayout {className}"
  bind:ref
  {margin}
  {padding}
  {bg}
  {bgHover}
  {bgFocus}
  {bgActive}
  {borderWidth}
  {borderWidthHover}
  {borderWidthFocus}
  {borderWidthActive}
  {borderColor}
  {borderStyle}
  {borderRadius}
  {shadow}
  {zIndex}
  {...rest}
>
  <Paned {size} minLeft={265} leftTrigger={600} {context}>
    {#snippet left()}
      <div class="SideLayout-sidebar">
        {@render sidebar?.()}
      </div>
    {/snippet}
    {#snippet right()}
      <div class="SideLayout-content">
        {@render content?.()}
      </div>
    {/snippet}
  </Paned>
</Skeleton>

<style>
  :global(.SideLayout) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .SideLayout-sidebar {
    overflow: auto;
    background-color: var(--background-elevated);
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .SideLayout-content {
    padding: 10px;
  }
</style>
