import { Card } from "../src";

export default {
  title: "Card",
  component: Card,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex flex-col space-y-2">
    <Card>
      <p>Card</p>
    </Card>
  </div>
);
