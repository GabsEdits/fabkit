// src/lib/components/TabsSwitcher.stories.js
import TabsSwitcher from "./TabsSwitcher.svelte";

const meta = {
  title: "Components/TabsSwitcher",
  component: TabsSwitcher,
  tags: ["autodocs"],
  argTypes: {
    context: { control: "text" },
    allowNewTabs: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    context: "tabs-example",
    allowNewTabs: true,
    tabs: [
      { id: 1, order: 1, title: "Tab 1" },
      { id: 2, order: 2, title: "Tab 2" },
      { id: 3, order: 3, title: "Tab 3" },
    ],
  },
};
