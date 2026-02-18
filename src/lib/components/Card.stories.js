import Card from "./Card.svelte";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  render: (args) => ({
    Component: Card,
    props: args,
    // children: SnippetContent
  }),
};

/*
{#snippet SnippetContent()}
	<h2>Card Title</h2>
	<p>This is a card.</p>
{/snippet}
*/
