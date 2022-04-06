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
  <div className="grid grid-cols-3 gap-6 text-center md:grid-cols-4 ">
    {iconKeys.map((iconKey) => {
      return (
        <span className="py-4 border">
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
