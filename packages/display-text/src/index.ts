import * as React from "react";

import {
  DisplayText as InternalDisplayText, DisplayTextProps
} from "./display-text";

interface DisplayText
  extends React.ForwardRefExoticComponent<
    DisplayTextProps & React.RefAttributes<HTMLElement>
  > {
}

const DisplayText = InternalDisplayText as DisplayText;

export type {
  DisplayTextProps,
};

export {
  DisplayText
};
