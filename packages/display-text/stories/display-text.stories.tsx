import { DisplayText } from "../src";

export default {
  title: "DisplayText",
  component: DisplayText,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <>
    <DisplayText size="2xl" as="h1">
      Heading 2xl
    </DisplayText>
    <DisplayText size="xl" as="h2">
      Heading xl
    </DisplayText>
    <DisplayText size="lg" as="h3">
      Heading lg
    </DisplayText>
    <DisplayText size="md">Heading md</DisplayText>
    <DisplayText size="sm">Heading sm</DisplayText>
    <DisplayText size="xs">Heading xs</DisplayText>
  </>
);
