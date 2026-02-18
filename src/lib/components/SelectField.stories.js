import SelectField from "./SelectField.svelte";

const meta = {
  title: "Components/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    label: { control: "text" },
    options: { control: "object" },
    icon: { control: "text" },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
};

export default meta;

export const Default = {
  args: {
    label: "Select Option",
    options: [
      { value: "1", text: "Option 1" },
      { value: "2", text: "Option 2" },
      { value: "3", text: "Option 3" },
    ],
  },
};
