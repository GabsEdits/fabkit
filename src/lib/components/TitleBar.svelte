<script>
  import Skeleton from "./Skeleton.svelte";
  import { getEngine } from "../EngineContext.js";
  import PhMinus from "../icons/components/Minus.svelte";
  import PhSquare from "../icons/components/Square.svelte";
  import PhX from "../icons/components/X.svelte";

  const engineInstance = getEngine();

  let {
    area,
    class: className = "",
    // Skeleton Props Pass-through
    margin = [0, 0, 0, 0],
    padding,
    bg,
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

  function minimizeWindow() {
    engineInstance?.minimize();
  }

  async function maximizeWindow() {
    if (await engineInstance?.isMaximized()) {
      engineInstance?.unmaximize();
      return;
    }
    engineInstance?.maximize();
  }

  function closeWindow() {
    engineInstance?.close();
  }

  const finalPadding = $derived(
    padding !== undefined ? padding : [0, 10, 0, 10],
  );
  const finalBg = $derived(bg !== undefined ? bg : "var(--background-base)");
</script>

<Skeleton
  class="TitleBar {className} {area ? 'TitleBar--flat' : ''}"
  bind:ref
  {margin}
  padding={finalPadding}
  bg={finalBg}
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
  <div class="TitleBar-area" data-tauri-drag-region>
    {@render area?.()}
  </div>
  <div class="TitleBar-controls">
    <button class="TitleBar-controls-item" onclick={minimizeWindow}>
      <PhMinus size={16} />
    </button>
    <button class="TitleBar-controls-item" onclick={maximizeWindow}>
      <PhSquare size={16} />
    </button>
    <button class="TitleBar-controls-item" onclick={closeWindow}>
      <PhX size={16} />
    </button>
  </div>
</Skeleton>

<style>
  :global(.TitleBar) {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 48px;
    color: var(--text-primary-alt);
    user-select: none;
  }

  :global(.TitleBar.TitleBar--flat) {
    height: 32px;
  }

  .TitleBar-area {
    display: flex;
    align-items: center;
    flex-grow: 1;
    /* These Wails/Electron specific styles might not be needed in a pure SvelteKit app */
    /* --wails-draggable: drag; */
    /* -webkit-app-region: drag; */
  }

  .TitleBar-controls {
    display: flex;
    align-items: center;
  }

  .TitleBar-controls-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: var(--text-primary);
    border: none;
    background-color: transparent;
    border-radius: var(--snt-border-radius, 12px);
  }

  .TitleBar-controls-item:hover {
    background-color: var(--background-elevated-2-hover);
  }

  .TitleBar-controls-item:active {
    background-color: var(--background-top);
  }

  .TitleBar-controls-item:focus {
    outline: none;
  }
</style>
