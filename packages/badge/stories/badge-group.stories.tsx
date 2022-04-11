import { BadgeGroup } from "../src";
import { Badge } from "../src";
import { Icon } from "@andromedaprotocol/icon";

export default {
  title: "BadgeGroup",
  component: BadgeGroup,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => (
  <div className="flex flex-col space-y-3">
    <div className="flex flex-row space-x-3">
      <BadgeGroup color="primary">
        <Badge color="primary" variant="white">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="primary" size="lg">
        <Badge color="primary" variant="white" size="lg">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="primary" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="white">Success</Badge>
      </BadgeGroup>
      <BadgeGroup color="primary" size="lg" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="white" size="lg">Success</Badge>
      </BadgeGroup>
    </div>    

    <div className="flex flex-row space-x-3">
      <BadgeGroup variant="solid" color="primary">
        <Badge color="primary" variant="light">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup variant="solid" color="primary" size="lg">
        <Badge color="primary" variant="light" size="lg">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup variant="solid" color="primary" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="light">Success</Badge>
      </BadgeGroup>
      <BadgeGroup variant="solid" color="primary" size="lg" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="light" size="lg">Success</Badge>
      </BadgeGroup>
    
    </div>

    <div className="flex flex-row space-x-3">
      <BadgeGroup variant="light" color="primary">
        <Badge color="primary" variant="solid">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup variant="light" color="primary" size="lg">
        <Badge color="primary" variant="solid" size="lg">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup variant="light" color="primary" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="solid">Success</Badge>
      </BadgeGroup>
      <BadgeGroup variant="light" color="primary" size="lg" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="solid" size="lg">Success</Badge>
      </BadgeGroup>
    </div>

  </div>
);

export const colored = () => (
  <div className="flex flex-col space-y-3">
    <div className="flex flex-row space-x-3">
      <BadgeGroup color="primary">
        <Badge color="primary" variant="solid">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="primary" size="lg">
        <Badge color="primary" variant="light" size="lg">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="primary" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="white">Success</Badge>
      </BadgeGroup>
      <BadgeGroup color="primary" size="lg" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="white" size="lg">Success</Badge>
      </BadgeGroup>
    </div>

    <div className="flex flex-row space-x-3">
      <BadgeGroup color="success">
        <Badge color="success" variant="solid">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="success" size="lg">
        <Badge color="success" variant="white" size="lg">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="success" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="success" variant="white">Success</Badge>
      </BadgeGroup>
      <BadgeGroup color="success" size="lg" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="success" variant="white" size="lg">Success</Badge>
      </BadgeGroup>
    </div>

    <div className="flex flex-row space-x-3">
      <BadgeGroup color="warning">
        <Badge color="warning" variant="solid">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="warning" size="lg">
        <Badge color="warning" variant="white" size="lg">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="warning" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="warning" variant="white">Success</Badge>
      </BadgeGroup>
      <BadgeGroup color="warning" size="lg" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="warning" variant="white" size="lg">Success</Badge>
      </BadgeGroup>
    </div>

    <div className="flex flex-row space-x-3">
      <BadgeGroup color="error">
        <Badge color="error" variant="solid">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="error" size="lg">
        <Badge color="error" variant="white" size="lg">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <BadgeGroup color="error" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="error" variant="white">Success</Badge>
      </BadgeGroup>
      <BadgeGroup color="error" size="lg" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="error" variant="white" size="lg">Success</Badge>
      </BadgeGroup>
    </div>    
  </div>
);


export const customized = () => (
  <div className="flex flex-col space-y-3">
    <div className="flex flex-row space-x-3">
      <BadgeGroup color="primary">
        <Badge color="primary" variant="white">Success</Badge>
        <label>We’ve just released a new feature</label>
        <Icon className="w-4 h-4" name="arrow-right" label={""}/>
      </BadgeGroup>
      <BadgeGroup color="primary" position="right">
        <label>We’ve just released a new feature</label>
        <Badge color="primary" variant="white">
          Success
          <Icon className="w-4 h-4 ml-1" name="arrow-right" label={""}/>
        </Badge>
      </BadgeGroup>
    </div>
  </div>
);