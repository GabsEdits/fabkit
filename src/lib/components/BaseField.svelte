<script>
  import Skeleton from "./Skeleton.svelte";
  let {
    value = $bindable(""),
    label = "",
    placeholder = "",
    type = "text",
    icon = "",
    iconPosition = "right",
    readOnly = false,
    flat = false,
    contained = false,
    /** @type {((event: Event) => void) | undefined} */
    oninput,
    class: className = "",
    // Skeleton Props Pass-through
    margin = [0, 0, 0, 0],
    padding,
    bg,
    bgHover,
    bgFocus,
    bgActive,
    borderWidth,
    borderWidthHover,
    borderWidthFocus,
    borderWidthActive,
    borderColor,
    borderColorHover,
    borderColorFocus,
    borderColorActive,
    borderStyle = "solid",
    borderRadius,
    shadow = "none",
    shadowSecondary,
    zIndex = 0,
    ref = $bindable(),
    ...rest
  } = $props();

  let isActive = $state(false);
  let hasContent = $derived(value.toString().length > 0);
  let inputElement = $state();

  function focusInput() {
    inputElement?.focus();
  }

  /**
   * @param {Event} event
   */
  function handleInput(event) {
    /** @type {HTMLInputElement} */
    const target = event.target;
    value = target.value;
    if (oninput) oninput(event);
  }

  function handleBlur() {
    isActive = hasContent;
  }

  function handleFocus() {
    isActive = true;
  }

  const finalPadding = $derived(
    padding !== undefined
      ? padding
      : contained
        ? [2, 10, 2, 10]
        : iconPosition === "left" && !isActive && !hasContent
          ? [8, 0, 8, 34]
          : [8, 0, 8, 0],
  );

  const finalBg = $derived(
    bg !== undefined
      ? bg
      : contained
        ? "var(--background-elevated)"
        : "transparent",
  );

  const finalBorderRadius = $derived(
    borderRadius !== undefined
      ? borderRadius
      : contained
        ? "var(--snt-border-radius, 12px)"
        : [0, 0, 0, 0],
  );

  const finalBorderColor = $derived(
    borderColor !== undefined ? borderColor : "transparent",
  );
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<Skeleton
  class="BaseField {className}"
  bind:ref
  onclick={focusInput}
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
  borderColor={finalBorderColor}
  {borderColorHover}
  {borderColorFocus}
  {borderColorActive}
  {borderStyle}
  borderRadius={finalBorderRadius}
  {shadow}
  {shadowSecondary}
  {zIndex}
  {...rest}
>
  {#if label}
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label
      class="BaseField-label"
      class:BaseField-label--active={isActive || hasContent}
    >
      {label}
    </label>
  {/if}
  <input
    {type}
    placeholder={label ? (isActive ? placeholder : "") : placeholder}
    {value}
    oninput={handleInput}
    onfocus={handleFocus}
    onblur={handleBlur}
    onkeydown={rest.onkeydown}
    class="BaseField-input"
    style:border-bottom-width={flat || contained ? "0" : "1px"}
    readonly={readOnly}
    bind:this={inputElement}
  />
  {#if icon}
    <span
      class="BaseField-icon"
      class:BaseField-icon--left={iconPosition === "left"}
      class:BaseField-icon--right={iconPosition === "right"}
      class:BaseField-icon--active={isActive || hasContent}
    >
      <svelte:component this={icon} size={18} />
    </span>
  {/if}
</Skeleton>

<style>
  :global(.BaseField) {
    position: relative;
  }

  .BaseField-input {
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--border-tertiary);
    font-size: 100%;
    padding: 8px 0;
    background: transparent;
    color: var(--text-primary);
    outline: none;
    line-height: normal;
  }

  .BaseField-input:focus {
    border-bottom: 2px solid var(--action-suggested);
  }

  .BaseField-label {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--text-secondary);
    pointer-events: none;
    transition:
      all 0.2s ease-out,
      color 0.2s ease-out,
      top 0.2s ease-out;
    transform: translateY(10px);
  }

  .BaseField-label--active {
    transform: translateY(-15px);
    font-size: 0.85rem;
  }

  .BaseField-icon {
    position: absolute;
    top: 59%;
    transform: translateY(-67%);
  }

  .BaseField-icon--active {
    color: var(--action-suggested);
  }

  .BaseField-icon--left {
    left: 0;
  }

  .BaseField-icon--right {
    right: 0;
  }
</style>
