import { Alert } from "../src";

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
    <Alert color="success" variant="left-accent" mark='string' title='There was a problem with that action'>
      Flash message goes here.
    </Alert>
    <Alert color="primary" variant="solid" mark='string' title='There was a problem with that action'>
      Flash message goes here.
    </Alert>

    <Alert color="error" variant="subtle" mark='string' badge="Error" title='There was a problem with that action'>
      Flash message goes here.
    </Alert>

    <Alert color="warning" variant="left-accent" badge="Warning" mark='string' title='You’ve updated your profile' more>
      Flash message goes here.
    </Alert>
  </div>
);

export const icon = () => (
  <div className="flex flex-col space-y-4">
    <Alert color="success" variant="left-accent" mark='icon' title='There was a problem with that action'>
      Flash message goes here.
    </Alert>
    <Alert color="primary" variant="solid" mark='icon' title='There was a problem with that action'>
      Flash message goes here.
    </Alert>

    <Alert color="error" variant="subtle" mark='icon' title='There was a problem with that action'>
      Flash message goes here.
    </Alert>

    <Alert color="warning" variant="left-accent" mark='icon' title='You’ve updated your profile' more link="https://localhost:3000">
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
