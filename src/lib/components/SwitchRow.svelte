<script>
  import ActionRow from "./ActionRow.svelte";
  import Switcher from "./Switcher.svelte";

  let {
    title = "",
    subtitle = "",
    model = $bindable(false),
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

  function toggle() {
    model = !model;
  }
</script>

<ActionRow
  {title}
  {subtitle}
  {margin}
  {padding}
  {bg}
  bgHover={bgHover !== undefined ? bgHover : "var(--background-elevated)"}
  {bgFocus}
  {bgActive}
  {borderWidth}
  {borderColor}
  {borderStyle}
  {borderRadius}
  {shadow}
  {zIndex}
  bind:ref
  class="SwitchRow {className}"
  activatable={true}
  onclick={toggle}
  {...rest}
>
  {#snippet widget()}
    <Switcher bind:model />
  {/snippet}
</ActionRow>
