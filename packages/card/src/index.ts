import * as React from "react";

import {
  Card as InternalCard, CardProps
} from "./card";

interface Card
  extends React.ForwardRefExoticComponent<
    CardProps & React.RefAttributes<HTMLElement>
  > {
}

const Card = InternalCard as Card;

export type {
  CardProps,
};

export {
  Card
};
