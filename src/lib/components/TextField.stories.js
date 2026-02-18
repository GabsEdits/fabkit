import TextField from "./TextField.svelte";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["text", "number", "email", "password"],
    },
    icon: { control: "text" },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    readOnly: { control: "boolean" },
    flat: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Text Field",
    placeholder: "Enter text",
  },
};
