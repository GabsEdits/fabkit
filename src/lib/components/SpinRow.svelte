<script>
  import ActionRow from "./ActionRow.svelte";
  import NumberField from "./NumberField.svelte";

  let {
    title = "",
    subtitle = "",
    value = $bindable(0),
    min = undefined,
    max = undefined,
    step = 1,
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
</script>

<ActionRow
  {title}
  {subtitle}
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
  bind:ref
  class="SpinRow {className}"
  {...rest}
>
  {#snippet widget()}
    <NumberField bind:value {min} {max} {step} />
  {/snippet}
</ActionRow>

<style>
  :global(.SpinRow .NumberField) {
    min-width: 120px;
  }
</style>
