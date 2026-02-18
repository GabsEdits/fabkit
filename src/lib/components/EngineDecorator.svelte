<script>
  import { provideEngine } from "../EngineContext";
  import BrowserEngine from "../engines/Browser";

  provideEngine(new BrowserEngine());

  let { children } = $props();
</script>

{@render children?.()}
