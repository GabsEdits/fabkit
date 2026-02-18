// src/lib/components/Switcher.stories.js
import Switcher from "./Switcher.svelte";

const meta = {
  title: "Components/Switcher",
  component: Switcher,
  tags: ["autodocs"],
  argTypes: {
    model: { control: "boolean" },
  },
};

export default meta;

export const Default = {
  args: {
    model: false,
  },
};

export const Activated = {
  args: {
    model: true,
  },
};
