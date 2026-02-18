// src/lib/components/ContextArea.stories.js
import ContextArea from "./ContextArea.svelte";

const meta = {
  title: "Components/ContextArea",
  component: ContextArea,
  tags: ["autodocs"],
  argTypes: {
    items: { control: "object" },
  },
};

export default meta;

export const Default = {
  args: {
    items: [
      {
        id: 1,
        text: "Option 1",
        shortcut: "Ctrl+O",
        icon: "folder_open",
        action: () => alert("Option 1 clicked"),
      },
      {
        id: 2,
        text: "Option 2",
        shortcut: "Ctrl+S",
        icon: "save",
        action: () => alert("Option 2 clicked"),
      },
      {
        id: 3,
        text: "Option 3",
        shortcut: "",
        icon: "delete",
        action: () => alert("Option 3 clicked"),
      },
    ],
  },
  render: (args) => ({
    Component: ContextArea,
    props: args,
    slots: {
      area: '<div style="width: 200px; height: 100px; background-color: #eee; display: flex; align-items: center; justify-content: center;">Right-click here</div>',
    },
  }),
};
