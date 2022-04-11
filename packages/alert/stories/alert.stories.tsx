import { Alert } from "../src";
import { Badge } from "@andromedaprotocol/badge";
import { BadgeGroup } from "@andromedaprotocol/badge";

export default {
  title: "Alert",
  component: Alert,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const variant = () => (
  <div className="flex flex-col space-y-4">
    <Alert color="success" variant="solid">Flash message goes here.</Alert>
    <Alert color="success" variant="subtle">Flash message goes here.</Alert>
    <Alert color="success" variant="left-accent">Flash message goes here.</Alert>
  </div>
);

export const colored = () => (
  <div className="flex flex-col space-y-4">
    <Alert color="success" variant="left-accent">
      Flash message goes here.
    </Alert>
    <Alert color="primary" variant="solid">
      Flash message goes here.
    </Alert>

    <Alert color="error" variant="subtle">
      Flash message goes here.
    </Alert>

    <Alert color="warning" variant="left-accent">
      Flash message goes here.
    </Alert>
  </div>
);



export const mark = () => (
  <div className="flex flex-col space-y-4">
    <Alert color="success" variant="left-accent">
      Flash message goes here.
    </Alert>
    <Alert color="primary" variant="solid">
      <BadgeGroup variant="solid" color="primary">
        <Badge color="primary" variant="solid">Success</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <label>
        Flash message goes here.
      </label>
    </Alert>

    <Alert color="error" variant="subtle">
      Flash message goes here.
    </Alert>

    <Alert color="warning" variant="left-accent" more>
      <BadgeGroup variant="solid" color="warning">
        <Badge color="warning" variant="solid">warning</Badge>
        <label>We’ve just released a new feature</label>
      </BadgeGroup>
      <label>
        Flash message goes here.
      </label>
    </Alert>
  </div>
);

export const icon = () => (
  <div className="flex flex-col space-y-4">
    <Alert color="success" variant="left-accent">
      Flash message goes here.
    </Alert>
    <Alert color="primary" variant="solid">
      Flash message goes here.
    </Alert>

    <Alert color="error" variant="subtle">
      Flash message goes here.
    </Alert>

    <Alert color="warning" variant="left-accent" more link="https://localhost:3000">
      Flash message goes here.
    </Alert>
  </div>
);


export const closeable = () => (
  <div className="flex flex-col space-y-4">
    <Alert variant="solid" className="alert-yellow">
      Flash message goes here.
      <Alert.CloseButton className="alert-close-button-yellow" />
    </Alert>

    <Alert variant="subtle">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>

    <Alert variant="left-accent">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>

    <Alert color="primary" variant="solid" className="alert-yellow">
      Flash message goes here.
      <Alert.CloseButton className="alert-close-button-yellow" />
    </Alert>

    <Alert color="error" variant="subtle">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>

    <Alert color="warning" variant="left-accent">
      Flash message goes here.
      <Alert.CloseButton />
    </Alert>
  </div>
);
