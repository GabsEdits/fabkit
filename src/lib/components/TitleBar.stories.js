// src/lib/components/TitleBar.stories.js
import TitleBar from "./TitleBar.svelte";

const meta = {
  title: "Components/TitleBar",
  component: TitleBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const Default = {
  render: () => ({
    Component: TitleBar,
    slots: {
      area: '<div style="margin-left: 10px;">My Application Title</div>',
    },
  }),
};

export const Flat = {
  render: () => ({
    Component: TitleBar,
    props: {
      // TitleBar--flat is based on whether the 'area' slot has content.
      // If the slot is empty, it should be flat.
      // Storybook doesn't let us easily simulate an empty slot,
      // so we'll leave it as default which implies a non-flat appearance
      // unless the component's internal logic handles it without slot content.
      // The Svelte component's logic: class:TitleBar--flat={!$slots.area} correctly handles this.
    },
  }),
};
