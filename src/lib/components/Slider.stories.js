import Slider from "./Slider.svelte";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    points: { control: "object" },
    labels: { control: "object" },
  },
};

export default meta;

export const Default = {
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};

export const WithLabels = {
  args: {
    min: 0,
    max: 100,
    value: 20,
    points: [0, 50, 100],
    labels: ["Low", "Medium", "High"],
  },
};
