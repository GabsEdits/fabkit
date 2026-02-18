import SideLayout from "./SideLayout.svelte";

const meta = {
  title: "Components/SideLayout",
  component: SideLayout,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "object" },
    context: { control: "text" },
  },
};

export default meta;

export const Default = {
  args: {
    size: { left: 30, right: 70 },
  },
  render: (args) => ({
    Component: SideLayout,
    props: args,
    // sidebar: SidebarSnippet,
    // content: ContentSnippet
  }),
};

/*
{#snippet SidebarSnippet()}
	<div>Sidebar Content</div>
	<ul>
		<li>Menu 1</li>
		<li>Menu 2</li>
	</ul>
{/snippet}

{#snippet ContentSnippet()}
	<h1>Main Content</h1>
	<p>This is the main content area.</p>
{/snippet}
*/
