// src/lib/components/Notebook.stories.js
import Notebook from "./Notebook.svelte";
import Button from "./Button.svelte"; // Example component to use as content

const DummyContentComponent = {
  render: (props) => ({
    Component: Button,
    props: { label: `Content for Tab ${props.tabId || ""}` },
  }),
};

const meta = {
  title: "Components/Notebook",
  component: Notebook,
  tags: ["autodocs"],
  argTypes: {
    context: { control: "text" },
    newPageContent: { action: "newPageContent" },
  },
};

export default meta;

export const Default = {
  args: {
    context: "notebook-example",
    newPageContent: () => ({
      component: DummyContentComponent,
      props: { tabId: Math.random() },
    }),
  },
  // The Notebook expects event bus calls to create/manage pages.
  // For a static story, we can manually trigger actions or provide initial pages.
  // This story will need to be interactive or have controls to demonstrate functionality.
  // For now, it just shows the empty notebook.
};
