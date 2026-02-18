<script>
  import Skeleton from "./Skeleton.svelte";
  import { onMount, createEventDispatcher } from "svelte";
  import EventBus from "../EventBus.js";

  /**
   * @typedef {object} MenuItem
   * @property {string} label
   * @property {number} pageId
   * @property {boolean} isActive
   */

  let {
    context,
    items = $bindable([]),
    class: className = "",
    // Skeleton Props Pass-through
    margin = [0, 0, 0, 0],
    padding,
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

  const dispatch = createEventDispatcher();

  /**
   * @param {number} pageId
   */
  function changePage(pageId) {
    items = items.map((item) => {
      return { ...item, isActive: item.pageId === pageId };
    });

    EventBus.emit(`${context}-changePage`, pageId);
    dispatch("changePage", pageId);
  }

  onMount(() => {
    console.debug("MenuSwitcher mounted");
    if (items.length > 0 && !items.some((i) => i.isActive)) {
      items = items.map((item, index) => {
        return { ...item, isActive: index === 0 };
      });
    }
  });

  const finalPadding = $derived(padding !== undefined ? padding : [2, 2, 2, 2]);
</script>

<Skeleton
  class="MenuSwitcher {className}"
  bind:ref
  {margin}
  padding={finalPadding}
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
  <div class="MenuSwitcher-items">
    {#each items as item (item.pageId)}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="MenuSwitcher-items-item"
        onclick={() => changePage(item.pageId)}
        class:MenuSwitcher-items-item--active={item.isActive}
      >
        <span class="MenuSwitcher-items-item-label">{item.label}</span>
      </div>
    {/each}
  </div>
</Skeleton>

<style>
  :global(.MenuSwitcher) {
  }

  .MenuSwitcher-items {
    display: flex;
    flex-direction: column;
    min-width: 160px;
  }

  .MenuSwitcher-items-item {
    align-items: center;
    display: flex;
    gap: 8px;
    padding: 10px 16px;
    transition: background-color 0.2s;
    background-color: transparent;
    color: var(--text-primary);
    border-radius: var(--snt-border-radius, 12px);
    text-align: left;
  }

  .MenuSwitcher-items-item:hover {
    background-color: var(--background-elevated-2-hover);
  }

  .MenuSwitcher-items-item:active {
    background-color: var(--background-top);
  }

  .MenuSwitcher-items-item.MenuSwitcher-items-item--active {
    background-color: var(--background-top);
  }

  .MenuSwitcher-items-item-label {
    flex-grow: 1;
  }
</style>
