import React from "react";

export const SignalZero = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 20h.01'/>
          <path  d='M7 20v-4'/>
        </svg>
    );
  }
);