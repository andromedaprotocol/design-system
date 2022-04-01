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
  <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-center ">
    {iconKeys.map((iconKey) => {
      return (
        <span className="border py-4">
          <Icon
            key={iconKey}
            name={iconKey}
            label={iconKey}
            className="w-16 h-16 text-primary-500"
          />
          <div>
            <small>
              <strong>{iconKey}</strong>
            </small>
          </div>
        </span>
      );
    })}
  </div>
);
