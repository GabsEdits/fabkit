import Paned from "./Paned.svelte";

const meta = {
  title: "Components/Paned",
  component: Paned,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "object" },
    minLeft: { control: "number" },
    leftTrigger: { control: "number" },
    context: { control: "text" },
  },
};

export default meta;

export const Default = {
  args: {
    size: { left: 30, right: 70 },
    minLeft: 100,
  },
  render: (args) => ({
    Component: Paned,
    props: args,
    // left: LeftSnippet,
    // right: RightSnippet
  }),
};

/*
{#snippet LeftSnippet()}
	<div style="background: #eee; height: 100%; padding: 20px;">Left Pane</div>
{/snippet}

{#snippet RightSnippet()}
	<div style="background: #ddd; height: 100%; padding: 20px;">Right Pane</div>
{/snippet}
*/
