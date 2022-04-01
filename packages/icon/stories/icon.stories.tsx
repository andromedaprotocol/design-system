import { Icon } from "../src";

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Icon name="vector" label="info" className="w-6 h-6 text-blue-500" />
  </div>
);
