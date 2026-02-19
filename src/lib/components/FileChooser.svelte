<script>
  import Skeleton from "./Skeleton.svelte";
  import PhUpload from "../icons/components/Upload.svelte";
  import PhX from "../icons/components/X.svelte";

  let {
    files = $bindable([]),
    accept = "",
    multiple = false,
    label = "Drop files or click to browse",
    maxSize = undefined,
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

  let dragging = $state(false);
  let inputEl = $state();

  function formatSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  function addFiles(newFiles) {
    const arr = Array.from(newFiles).filter((f) => {
      if (maxSize !== undefined && f.size > maxSize) return false;
      return true;
    });
    if (multiple) {
      const existing = files.map((f) => f.name);
      files = [...files, ...arr.filter((f) => !existing.includes(f.name))];
    } else {
      files = arr.slice(0, 1);
    }
  }

  function removeFile(index) {
    files = files.filter((_, i) => i !== index);
  }

  function handleDrop(event) {
    event.preventDefault();
    dragging = false;
    addFiles(event.dataTransfer.files);
  }

  function handleDragOver(event) {
    event.preventDefault();
    dragging = true;
  }

  function handleDragLeave() {
    dragging = false;
  }

  function handleChange(event) {
    addFiles(event.target.files);
    event.target.value = "";
  }

  function openPicker() {
    inputEl?.click();
  }
</script>

<Skeleton
  class="FileChooser {className}"
  bind:ref
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
  {...rest}
>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="FileChooser-zone"
    class:FileChooser-zone--dragging={dragging}
    ondrop={handleDrop}
    ondragover={handleDragOver}
    ondragleave={handleDragLeave}
    onclick={openPicker}
  >
    <PhUpload size={28} />
    <span class="FileChooser-zone-label">{label}</span>
    <input
      type="file"
      class="FileChooser-native"
      {accept}
      {multiple}
      onchange={handleChange}
      bind:this={inputEl}
    />
  </div>
  {#if files.length > 0}
    <ul class="FileChooser-list">
      {#each files as file, i}
        <li class="FileChooser-item">
          <span class="FileChooser-name">{file.name}</span>
          <span class="FileChooser-size">{formatSize(file.size)}</span>
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button class="FileChooser-remove" onclick={() => removeFile(i)} type="button">
            <PhX size={14} />
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</Skeleton>

<style>
  .FileChooser-zone {
    border: 2px dashed var(--border-secondary);
    border-radius: var(--snt-border-radius, 10px);
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    color: var(--text-secondary);
    transition: background-color 0.2s, border-color 0.2s;
  }

  .FileChooser-zone:hover {
    background: var(--background-elevated);
    border-color: var(--action-suggested);
  }

  .FileChooser-zone--dragging {
    background: var(--background-elevated-2);
    border-color: var(--action-suggested);
    color: var(--action-suggested);
  }

  .FileChooser-zone-label {
    font-size: 0.9rem;
  }

  .FileChooser-native {
    display: none;
  }

  .FileChooser-list {
    list-style: none;
    padding: 0;
    margin: 8px 0 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .FileChooser-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    background: var(--background-elevated);
    border-radius: 6px;
    font-size: 0.88rem;
  }

  .FileChooser-name {
    flex: 1;
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .FileChooser-size {
    color: var(--text-secondary);
    white-space: nowrap;
  }

  .FileChooser-remove {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    padding: 2px;
    flex-shrink: 0;
  }

  .FileChooser-remove:hover {
    color: var(--action-destructive);
  }
</style>
