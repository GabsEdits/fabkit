<script>
  import Skeleton from "./Skeleton.svelte";
  import { onMount, untrack } from "svelte";
  import EventBus from "../EventBus.js";

  let {
    context,
    children,
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

  let currentPageId = $state(-1);
  let _pages = $state([]);
  let pagesElement = $state();

  function changePage(pageId) {
    if (currentPageId === pageId) return;
    currentPageId = pageId;

    _pages.forEach((page) => {
      if (page) {
        page.style.display = "none";
      }
    });

    if (_pages[pageId]) {
      _pages[pageId].style.display = "block";
      EventBus.emit(`${context}-pageChanged`, pageId);
    }
  }

  onMount(() => {
    EventBus.on(`${context}-changePage`, changePage);

    $effect(() => {
      // track children
      children;

      untrack(() => {
        if (pagesElement) {
          _pages = Array.from(pagesElement.children);
          _pages.forEach((page, index) => {
            page.dataset.pageId = `${index}`;
          });

          // Force update of visibility without triggering state loop
          const targetId =
            currentPageId >= 0 && currentPageId < _pages.length
              ? currentPageId
              : 0;

          // Hide all
          _pages.forEach((page) => {
            if (page) page.style.display = "none";
          });
          // Show target
          if (_pages[targetId]) {
            _pages[targetId].style.display = "block";
          }

          // Only update state if we are defaulting to 0 and it wasn't 0
          if (targetId !== currentPageId) {
            currentPageId = targetId;
          }
        }
      });
    });

    return () => {
      EventBus.off(`${context}-changePage`, changePage);
    };
  });
</script>

<Skeleton
  class="StaticNotebook {className}"
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
  <div class="StaticNotebook-pages" bind:this={pagesElement}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</Skeleton>

<style>
  :global(.StaticNotebook) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .StaticNotebook-pages {
    flex: 1;
    flex-direction: column;
    height: 100%;
    position: relative;
  }
</style>
