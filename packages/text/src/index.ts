import * as React from "react";

import {
  Text as InternalText, TextProps
} from "./text";

interface Text
  extends React.ForwardRefExoticComponent<
    TextProps & React.RefAttributes<HTMLElement>
  > {
}

const Text = InternalText as Text;

export type {
  TextProps,
};

export {
  Text
};
