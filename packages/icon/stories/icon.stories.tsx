import { Icon, InfoIcon, XCricleIcon, CheckCircleIcon, ExclamationIcon } from "../src";

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    <Icon label="Vector" className="w-6 h-6 text-blue-500" name='Vector'/>
    <Icon label="Globe" className="w-6 h-6 text-blue-500" name='Globe'/>
    <Icon label="Vector" className="w-6 h-6 text-red-500" name='others'/>
  </div>
);
