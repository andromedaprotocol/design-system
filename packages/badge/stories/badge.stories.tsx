import { Badge } from "../src";
import { Icon } from "@andromedaprotocol/icon";

export default {
  title: "Badge",
  component: Badge,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex space-x-2">
    <Badge>1</Badge>
    <Badge variant="solid">1</Badge>
    <Badge color="primary">1</Badge>
    <Badge color="primary" variant="solid">1</Badge>
  </div>
);

export const size = () => (
  <div className="flex space-x-2">
    <Badge size="sm">Success</Badge>
    <Badge size="md" variant="solid">
      Success
    </Badge>
    <Badge size="lg" variant="solid">
      Success
    </Badge>
  </div>
);

export const colored = () => (
  <div className="flex space-x-2">
    <Badge color="gray">Label</Badge>
    <Badge color="primary" >Label</Badge>
    <Badge color="success" >Label</Badge>
    <Badge color="error" >Label</Badge>
    <Badge color="warning" >Label</Badge><br/>
    <Badge color="gray" variant="solid">Label</Badge>
    <Badge color="primary" variant="solid">Label</Badge>
    <Badge color="success" variant="solid">Label</Badge>
    <Badge color="error" variant="solid">Label</Badge>
    <Badge color="warning" variant="solid" >Label</Badge><br/>
    <Badge color="gray" variant="outline">Label</Badge>
    <Badge color="primary" variant="outline">Label</Badge>
    <Badge color="success" variant="outline">Label</Badge>
    <Badge color="error" variant="outline">Label</Badge>
    <Badge color="warning" variant="outline" >Label</Badge><br/>
  </div>
);

export const customize = () => (
  <div className="flex space-x-2">
    <Badge color="primary">
      <div className="flex flex-row items-center">
        Label
        <Icon className="w-4 h-4 ml-1" name="x" label={""}/>
      </div>
    </Badge>
    <Badge color="primary" variant="solid">
      Label
    </Badge>
  </div>
);