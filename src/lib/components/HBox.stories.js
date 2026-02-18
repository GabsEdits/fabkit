import HBox from "./HBox.svelte";
import Button from "./Button.svelte";

const meta = {
  title: "Components/HBox",
  component: HBox,
  tags: ["autodocs"],
  argTypes: {
    margin: { control: "number" },
    spacing: { control: "number" },
    align: {
      control: { type: "select" },
      options: ["center", "start", "end", "fill"],
    },
  },
};

export default meta;

export const Default = {
  args: {
    spacing: 10,
  },
  render: (args) => ({
    Component: HBox,
    props: args,
    // children: SnippetButton
  }),
};

/*
{#snippet SnippetButton()}
	<Button label="Button 1" />
	<Button label="Button 2" />
	<Button label="Button 3" />
{/snippet}
*/
