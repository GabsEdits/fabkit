<script>
  import Skeleton from "./Skeleton.svelte";

  let {
    element = "span",
    children,
    bold = false,
    italic = false,
    dimmed = false,
    size,
    weight,
    color,
    align,
    transform,
    wrapping, // whiteSpace
    ...rest
  } = $props();

  let finalColor = $derived.by(() => {
    if (color) return color;
    if (dimmed) return "var(--text-secondary)";
    return "var(--text-primary)";
  });

  let finalWeight = $derived.by(() => {
    if (weight) return weight;
    if (bold) return "700";
    return "400";
  });

  let finalStyle = $derived(italic ? "italic" : "normal");
</script>

<Skeleton
  {element}
  color={finalColor}
  fontWeight={finalWeight}
  fontSize={size}
  textTransform={transform}
  textAlign={align}
  whiteSpace={wrapping}
  style={`font-style: ${finalStyle}`}
  {...rest}
>
  {@render children?.()}
</Skeleton>
