import { Text } from "../src";

export default {
  title: "Text",
  component: Text,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <>
    <Text size="xl">Text xl</Text>
    <Text size="lg">Text lg</Text>
    <Text size="md">Text md</Text>
    <Text size="sm">Text sm</Text>
    <Text size="xs">Text xs</Text>
  </>
);
