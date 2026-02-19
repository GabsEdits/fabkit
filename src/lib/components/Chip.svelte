<script>
  import Skeleton from "./Skeleton.svelte";
  import PhX from "../icons/components/X.svelte";

  let {
    label = "",
    removable = false,
    onRemove,
    icon = undefined,
    color,
    textColor,
    // Skeleton pass-through
    margin = [0, 0, 0, 0],
    padding = [2, 10, 2, 10],
    bg,
    bgHover,
    bgFocus,
    bgActive,
    borderWidth = [0, 0, 0, 0],
    borderColor = "transparent",
    borderStyle = "solid",
    borderRadius = "20px",
    shadow = "none",
    zIndex = 0,
    ref = $bindable(),
    class: className = "",
    ...rest
  } = $props();

  const finalBg = $derived(bg !== undefined ? bg : color || "var(--background-elevated)");
</script>

<Skeleton
  class="Chip {className}"
  bind:ref
  {margin}
  {padding}
  bg={finalBg}
  {bgHover}
  {bgFocus}
  {bgActive}
  {borderWidth}
  {borderColor}
  {borderStyle}
  {borderRadius}
  {shadow}
  {zIndex}
  color={textColor}
  {...rest}
>
  {#if icon}
    <span class="Chip-icon">
      <svelte:component this={icon} size={14} />
    </span>
  {/if}
  {#if label}
    <span class="Chip-label">{label}</span>
  {/if}
  {#if removable}
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      class="Chip-remove"
      onclick={onRemove}
      type="button"
    >
      <PhX size={12} />
    </button>
  {/if}
</Skeleton>

<style>
  :global(.Chip) {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.85rem;
    color: var(--text-primary);
  }

  .Chip-icon {
    display: flex;
    align-items: center;
    color: inherit;
  }

  .Chip-label {
    white-space: nowrap;
  }

  .Chip-remove {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: inherit;
    opacity: 0.7;
    padding: 0;
  }

  .Chip-remove:hover {
    opacity: 1;
  }
</style>
