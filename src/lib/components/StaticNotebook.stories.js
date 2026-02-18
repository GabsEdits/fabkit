// src/lib/components/StaticNotebook.stories.js
import StaticNotebook from "./StaticNotebook.svelte";

const meta = {
  title: "Components/StaticNotebook",
  component: StaticNotebook,
  tags: ["autodocs"],
  argTypes: {
    context: { control: "text" },
  },
};

export default meta;

export const Default = {
  args: {
    context: "static-notebook-example",
  },
  render: (args) => ({
    Component: StaticNotebook,
    props: args,
    slots: {
      default: `
                <div style="background-color: lightblue; padding: 20px;"><h2>Static Page 0</h2></div>
                <div style="background-color: lightgreen; padding: 20px;"><h2>Static Page 1</h2></div>
                <div style="background-color: lightcoral; padding: 20px;"><h2>Static Page 2</h2></div>
            `,
    },
  }),
};
