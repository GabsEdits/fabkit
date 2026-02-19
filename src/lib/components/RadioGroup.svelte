<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    value = $bindable(""),
    options = [],
    name = "",
    disabled = false,
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

  function select(optValue) {
    if (disabled) return;
    value = optValue;
  }
</script>

<Skeleton
  class="RadioGroup {className}"
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
  {#each options as option}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="RadioGroup-item"
      class:RadioGroup-item--disabled={disabled}
      onclick={() => select(option.value)}
    >
      <div
        class="RadioGroup-circle"
        class:RadioGroup-circle--selected={value === option.value}
      >
        {#if value === option.value}
          <div class="RadioGroup-dot"></div>
        {/if}
      </div>
      <span class="RadioGroup-label">{option.label}</span>
    </div>
  {/each}
</Skeleton>

<style>
  :global(.RadioGroup) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .RadioGroup-item {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
  }

  .RadioGroup-item--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .RadioGroup-circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--border-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: border-color 0.15s ease;
  }

  .RadioGroup-circle--selected {
    border-color: var(--action-suggested);
  }

  .RadioGroup-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--action-suggested);
  }

  .RadioGroup-label {
    color: var(--text-primary);
    font-size: 0.95rem;
  }
</style>
