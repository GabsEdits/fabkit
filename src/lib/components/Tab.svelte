<script>
  import Skeleton from "./Skeleton.svelte";
  import { onMount, getContext } from "svelte";

  let {
    label,
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

  const registerTab = getContext("STN_NOTEBOOK_REGISTER");
  const activeTabId = getContext("STN_NOTEBOOK_ACTIVE_ID");

  let id = $state(Math.random().toString(36).substring(2, 9));

  onMount(() => {
    if (registerTab) {
      return registerTab({ id, label });
    }
  });

  let isActive = $derived($activeTabId === id);
</script>

{#if isActive}
  <Skeleton
    class="TabContent {className}"
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
    {@render children?.()}
  </Skeleton>
{/if}

<style>
  :global(.TabContent) {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }
</style>
