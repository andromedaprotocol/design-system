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
    <Card className="w-auto p-5 border-[1px] shadow-md rounded-lg border-grey-200">
      <p>Card</p>
    </Card>
  </div>
);
