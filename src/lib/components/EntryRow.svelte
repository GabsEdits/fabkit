<script>
  import ActionRow from "./ActionRow.svelte";
  import BaseField from "./BaseField.svelte";

  let {
    title = "",
    subtitle = "",
    value = $bindable(""),
    placeholder = "",
    type = "text",
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
  class="EntryRow {className}"
  {...rest}
>
  {#snippet widget()}
    <BaseField
      bind:value
      {placeholder}
      {type}
      flat={true}
      padding={[4, 0, 4, 0]}
    />
  {/snippet}
</ActionRow>

<style>
  :global(.EntryRow .BaseField) {
    min-width: 140px;
    max-width: 200px;
  }
</style>
