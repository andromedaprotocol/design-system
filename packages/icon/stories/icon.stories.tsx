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
    <Icon label="info" className="w-6 h-6 text-blue-500" name='Info' />
    <Icon label="info" className="w-6 h-6 text-blue-500" name='CheckCircle'/>
    <Icon label="info" className="w-6 h-6 text-blue-500" name='Gift'/>
    <Icon label="info" className="w-6 h-6 text-blue-500" name='Coins'/>
    <Icon label="info" className="w-6 h-6 text-blue-500" name='Copy'/>
  </div>
);
