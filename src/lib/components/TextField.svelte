<script>
  import BaseField from "./BaseField.svelte";

  let {
    value = $bindable(""),
    label = "",
    placeholder = "",
    type = "text",
    icon = "",
    iconPosition = "right",
    readOnly = false,
    flat = false,
    ref = $bindable(),
    ...rest
  } = $props();
</script>

<BaseField
  bind:value
  {label}
  {placeholder}
  {type}
  {icon}
  {iconPosition}
  {readOnly}
  {flat}
  bind:ref
  {...rest}
/>
