import Window from "./Window.svelte";
import TitleBar from "./TitleBar.svelte";
import Button from "./Button.svelte";
import EngineDecorator from "./EngineDecorator.svelte";

const meta = {
  title: "Components/Window",
  component: Window,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [() => EngineDecorator],
};

export default meta;

export const Default = {
  render: () => ({
    Component: Window,
    slots: {
      top: {
        Component: TitleBar,
        slots: {
          area: '<div style="margin-left: 10px; color: var(--text-primary);">My Window</div>',
        },
      },
      content: {
        Component: Button,
        props: {
          label: "Click Me",
        },
      },
    },
  }),
};

export const Maximized = {
  args: {
    maximized: true,
  },
  render: () => ({
    Component: Window,
    props: {
      maximized: true,
    },
    slots: {
      top: {
        Component: TitleBar,
        slots: {
          area: '<div style="margin-left: 10px; color: var(--text-primary);">Maximized Window</div>',
        },
      },
      content: {
        Component: Button,
        props: {
          label: "Maximized Content",
        },
      },
    },
  }),
};
