import React from "react";

export const MousePointer = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'/>
          <path  d='M13 13l6 6'/>
        </svg>
    );
  }
);