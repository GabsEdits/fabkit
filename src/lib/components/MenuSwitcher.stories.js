// src/lib/components/MenuSwitcher.stories.js
import MenuSwitcher from "./MenuSwitcher.svelte";

const meta = {
  title: "Components/MenuSwitcher",
  component: MenuSwitcher,
  tags: ["autodocs"],
  argTypes: {
    context: { control: "text" },
    items: { control: "object" },
    changePage: { action: "changePage" },
  },
};

export default meta;

export const Default = {
  args: {
    context: "default",
    items: [
      { label: "Page 1", pageId: 1, isActive: true },
      { label: "Page 2", pageId: 2, isActive: false },
      { label: "Page 3", pageId: 3, isActive: false },
    ],
  },
};
