<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    title = "",
    description = "",
    children,
    // Skeleton pass-through
    margin = [0, 0, 32, 0],
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
  class="PreferencesGroup {className}"
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
  {#if title}
    <div class="PreferencesGroup-header">
      <h3 class="PreferencesGroup-title">{title}</h3>
      {#if description}
        <p class="PreferencesGroup-description">{description}</p>
      {/if}
    </div>
  {/if}
  <div class="PreferencesGroup-rows">
    {#if children}
      {@render children()}
    {/if}
  </div>
</Skeleton>

<style>
  :global(.PreferencesGroup) {
    width: 100%;
  }

  .PreferencesGroup-header {
    margin-bottom: 6px;
  }

  .PreferencesGroup-title {
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--action-suggested);
    margin: 0 0 2px 4px;
  }

  .PreferencesGroup-description {
    font-size: 0.82rem;
    color: var(--text-secondary);
    margin: 0 0 4px 4px;
  }

  .PreferencesGroup-rows {
    border: 1px solid var(--border-primary);
    border-radius: var(--snt-border-radius, 12px);
    overflow: hidden;
    background: var(--background-elevated);
  }

  :global(.PreferencesGroup-rows > :not(:last-child)) {
    border-bottom: 1px solid var(--border-primary);
  }
</style>
