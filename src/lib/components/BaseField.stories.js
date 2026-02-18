import BaseField from "./BaseField.svelte";

const meta = {
  title: "Components/BaseField",
  component: BaseField,
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
    contained: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const WithIcon = {
  args: {
    label: "Search",
    icon: "magnify",
    iconPosition: "left",
  },
};

export const Contained = {
  args: {
    label: "Username",
    contained: true,
  },
};
