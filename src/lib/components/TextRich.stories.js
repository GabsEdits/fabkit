// src/lib/components/TextRich.stories.js
import TextRich from "./TextRich.svelte";

const meta = {
  title: "Components/TextRich",
  component: TextRich,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

export const Default = {
  render: () => ({
    Component: TextRich,
    props: {},
    slots: {
      default: `
                <h1>Heading 1</h1>
                <p>This is a <b>bold</b> and <i>italic</i> text with <a href="#">a link</a>.</p>
                <ul>
                    <li>List item 1</li>
                    <li>List item 2</li>
                </ul>
                <pre><code>console.log('Hello, world!');</code></pre>
                <blockquote>This is a blockquote.</blockquote>
            `,
    },
  }),
};
