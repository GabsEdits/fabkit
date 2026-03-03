<script>
  import PopOver from "./PopOver.svelte";
  import Button from "./Button.svelte";

  let { children, ref = $bindable(), ...props } = $props();

  let buttonElement = $state();
  let showPopover = $state(false);

  function togglePopover() {
    showPopover = !showPopover;
  }
</script>

<div class="PopOverWrapper" bind:this={ref}>
  <slot name="trigger">
    <Button label="Click me" onclick={togglePopover} bind:ref={buttonElement} />
  </slot>

  {#if showPopover && buttonElement}
    <PopOver
      attachTo={buttonElement}
      onclose={() => (showPopover = false)}
      {...props}
    >
      <slot>
        {@render children?.()}
      </slot>
    </PopOver>
  {/if}
</div>

<style>
  .PopOverWrapper {
    position: relative;
    display: inline-block;
  }
</style>
