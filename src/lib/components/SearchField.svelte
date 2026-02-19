<script>
  import Skeleton from "./Skeleton.svelte";
  import PhMagnifyingGlass from "../icons/components/MagnifyingGlass.svelte";
  import PhX from "../icons/components/X.svelte";

  let {
    value = $bindable(""),
    placeholder = "Search…",
    onSearch,
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

  let hasContent = $derived(value.toString().length > 0);

  function clear() {
    value = "";
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && onSearch) {
      onSearch(value);
    }
  }
</script>

<Skeleton
  class="SearchField {className}"
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
  <div class="SearchField-row">
    <span class="SearchField-icon-left">
      <PhMagnifyingGlass size={18} />
    </span>
    <input
      type="text"
      class="SearchField-input"
      bind:value
      {placeholder}
      onkeydown={handleKeyDown}
    />
    {#if hasContent}
      <!-- svelte-ignore a11y_consider_explicit_label -->
      <button class="SearchField-clear" onclick={clear} type="button">
        <PhX size={16} />
      </button>
    {/if}
  </div>
</Skeleton>

<style>
  .SearchField-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-tertiary);
    padding: 4px 0;
    gap: 6px;
  }

  .SearchField-row:focus-within {
    border-bottom: 2px solid var(--action-suggested);
  }

  .SearchField-icon-left {
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .SearchField-input {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--text-primary);
    font-size: 100%;
    outline: none;
    padding: 4px 0;
  }

  .SearchField-clear {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    padding: 2px;
    flex-shrink: 0;
  }

  .SearchField-clear:hover {
    color: var(--text-primary);
  }
</style>
