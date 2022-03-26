import { Icon } from "../src";
import { Globe } from "@andromedaprotocol/icons";

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Icon as={Globe} label="info" className="w-6 h-6 text-blue-500" />
  </div>
);
