import Menu from "./Menu.svelte";

const meta = {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {
    items: { control: "object" },
  },
};

export default meta;

export const Default = {
  args: {
    items: [
      { label: "Item 1", action: () => alert("Item 1 clicked") },
      { label: "Item 2", action: () => alert("Item 2 clicked") },
      { label: "Item 3", action: () => alert("Item 3 clicked") },
    ],
  },
};
