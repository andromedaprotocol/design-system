import React from "react";
import { SVGProps } from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const QrCode = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='2' y='2' width='8' height='8'/>
          <path  d='M6 6h.01'/>
          <rect  x='14' y='2' width='8' height='8'/>
          <path  d='M18 6h.01'/>
          <rect  x='2' y='14' width='8' height='8'/>
          <path  d='M6 18h.01'/>
          <path  d='M14 14h.01'/>
          <path  d='M18 18h.01'/>
          <path  d='M18 22h4v-4'/>
          <path  d='M14 18v4'/>
          <path  d='M22 14h-4'/>
        </svg>
    );
  }
);