import { IconNameMapper } from "@andromedaprotocol/icons";

import { Icon } from "../src";

const iconKeys = Object.keys(IconNameMapper);

export default {
  title: "Icon",
  component: Icon,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-6">
    {iconKeys.map((iconKey) => {
      return (
        <>
          <Icon
            key={iconKey}
            name={iconKey}
            label={iconKey}
            className="w-6 h-6 text-blue-500"
          />
          <div>{iconKey}</div>
        </>
      );
    })}
  </div>
);
