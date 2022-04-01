import React from "react";

export const Wallet = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4'/>
          <path  d='M4 6v12c0 1.1.9 2 2 2h14v-4'/>
          <path  d='M18 12a2 2 0 00-2 2c0 1.1.9 2 2 2h4v-4h-4z'/>
        </svg>
    );
  }
);