<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    title = "",
    description = "",
    children,
    // Skeleton pass-through
    margin = [0, 0, 0, 0],
    padding = [24, 24, 24, 24],
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
  class="PreferencesPage {className}"
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
  <div class="PreferencesPage-inner">
    {#if title}
      <div class="PreferencesPage-header">
        <h1 class="PreferencesPage-title">{title}</h1>
        {#if description}
          <p class="PreferencesPage-description">{description}</p>
        {/if}
      </div>
    {/if}
    <div class="PreferencesPage-content">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
</Skeleton>

<style>
  :global(.PreferencesPage) {
    overflow-y: auto;
  }

  .PreferencesPage-inner {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
  }

  .PreferencesPage-header {
    margin-bottom: 24px;
  }

  .PreferencesPage-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 6px;
  }

  .PreferencesPage-description {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0;
  }

  .PreferencesPage-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
