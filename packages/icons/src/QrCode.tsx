import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const QrCode = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props} 
        ref={ref}
      >
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