// src/lib/components/Carousel.stories.js
import Carousel from "./Carousel.svelte";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const Default = {
  render: () => ({
    Component: Carousel,
    props: {},
    children: [
      '<div style="background-color: lightblue; padding: 20px;"><h2>Slide 1</h2></div>',
      '<div style="background-color: lightgreen; padding: 20px;"><h2>Slide 2</h2></div>',
      '<div style="background-color: lightcoral; padding: 20px;"><h2>Slide 3</h2></div>',
    ],
  }),
};
