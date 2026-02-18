<script>
  /**
   * @typedef {Object} SlideOverContentProps
   * @property {import('svelte').Snippet} [children] - Main content
   * @property {number} [step] - Optional current step for multi-step flows
   * @property {string} [align="center"] - Content alignment
   */
  let { children, step, align = "center" } = $props();
</script>

<div
  class="SlideOverContent"
  style="
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: {align};
		justify-content: flex-start;
		padding: 0 0 12px 0;
	"
>
  {@render children?.()}
</div>
