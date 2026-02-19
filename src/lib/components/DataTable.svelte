<script>
  import Skeleton from "./Skeleton.svelte";
  import Checkbox from "./Checkbox.svelte";
  import PhCaretUp from "../icons/components/CaretUp.svelte";
  import PhCaretDown from "../icons/components/CaretDown.svelte";

  let {
    columns = [],
    rows = [],
    selectable = false,
    selectedRows = $bindable([]),
    onRowClick,
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

  let sortKey = $state(null);
  let sortDir = $state("asc");

  const sortedRows = $derived.by(() => {
    if (!sortKey) return rows;
    return [...rows].sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (va === vb) return 0;
      const cmp = va < vb ? -1 : 1;
      return sortDir === "asc" ? cmp : -cmp;
    });
  });

  function sortBy(col) {
    if (!col.sortable) return;
    if (sortKey === col.key) {
      sortDir = sortDir === "asc" ? "desc" : "asc";
    } else {
      sortKey = col.key;
      sortDir = "asc";
    }
  }

  const allSelected = $derived(
    rows.length > 0 && selectedRows.length === rows.length
  );

  function toggleAll(checked) {
    selectedRows = checked ? [...rows] : [];
  }

  function toggleRow(row, checked) {
    if (checked) {
      selectedRows = [...selectedRows, row];
    } else {
      selectedRows = selectedRows.filter((r) => r !== row);
    }
  }

  function isSelected(row) {
    return selectedRows.includes(row);
  }
</script>

<Skeleton
  class="DataTable {className}"
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
  <div class="DataTable-scroll">
    <table class="DataTable-table">
      <thead class="DataTable-head">
        <tr>
          {#if selectable}
            <th class="DataTable-th DataTable-th--check">
              <Checkbox
                checked={allSelected}
                onchange={(v) => toggleAll(v)}
              />
            </th>
          {/if}
          {#each columns as col}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <th
              class="DataTable-th"
              class:DataTable-th--sortable={col.sortable}
              style:width={col.width}
              onclick={() => sortBy(col)}
            >
              <span class="DataTable-th-inner">
                {col.label}
                {#if col.sortable}
                  <span class="DataTable-sort-icon">
                    {#if sortKey === col.key && sortDir === "asc"}
                      <PhCaretUp size={12} />
                    {:else if sortKey === col.key && sortDir === "desc"}
                      <PhCaretDown size={12} />
                    {:else}
                      <PhCaretDown size={12} />
                    {/if}
                  </span>
                {/if}
              </span>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each sortedRows as row, i}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <tr
            class="DataTable-row"
            class:DataTable-row--odd={i % 2 !== 0}
            class:DataTable-row--selected={isSelected(row)}
            onclick={() => onRowClick && onRowClick(row)}
          >
            {#if selectable}
              <td class="DataTable-td DataTable-td--check">
                <Checkbox
                  checked={isSelected(row)}
                  onchange={(v) => toggleRow(row, v)}
                />
              </td>
            {/if}
            {#each columns as col}
              <td class="DataTable-td">{row[col.key] ?? ""}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</Skeleton>

<style>
  :global(.DataTable) {
    overflow: hidden;
  }

  .DataTable-scroll {
    overflow-x: auto;
    width: 100%;
  }

  .DataTable-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.92rem;
    color: var(--text-primary);
  }

  .DataTable-head {
    position: sticky;
    top: 0;
    background: var(--background-elevated);
    z-index: 1;
  }

  .DataTable-th {
    text-align: left;
    padding: 10px 12px;
    border-bottom: 2px solid var(--border-secondary);
    font-weight: 600;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  .DataTable-th--sortable {
    cursor: pointer;
    user-select: none;
  }

  .DataTable-th--sortable:hover {
    color: var(--text-primary);
  }

  .DataTable-th-inner {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .DataTable-sort-icon {
    display: flex;
    align-items: center;
    opacity: 0.6;
  }

  .DataTable-th--check,
  .DataTable-td--check {
    width: 40px;
    padding: 10px 8px;
  }

  .DataTable-td {
    padding: 10px 12px;
    border-bottom: 1px solid var(--border-primary);
  }

  .DataTable-row:hover .DataTable-td {
    background: var(--background-elevated);
  }

  .DataTable-row--odd .DataTable-td {
    background: var(--background-elevated-2);
  }

  .DataTable-row--selected .DataTable-td {
    background: color-mix(in srgb, var(--action-suggested) 12%, transparent);
  }
</style>
