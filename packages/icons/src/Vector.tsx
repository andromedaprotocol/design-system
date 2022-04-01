import React from "react";
import { IconProps } from "@andromedaprotocol/icon";

export const Vector = React.forwardRef<SVGSVGElement, IconProps>(
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
          <path  d='M7.71378 0.447632H9.91169C11.1255 0.447632 12.6132 1.29295 13.2347 2.33571L15.955 6.90102H20.9011C21.508 6.90102 22 7.39301 22 7.99996C22 8.6069 21.508 9.09889 20.9011 9.09889H15.8505L13.13 13.6642C12.5087 14.707 11.021 15.5523 9.80707 15.5523H7.60924L11.4547 9.09889H3.77429L2.19787 11.7945H0L2.21909 7.99996V7.96369L0.0212205 4.20546H2.21909L3.79552 6.90102H11.5592L7.71378 0.447632Z' fill='#111827'/>
        </svg>
    );
  }
);