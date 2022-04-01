import React from "react";

export const Baseline = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 20h16'/>
          <path  d='M6 16l6-12 6 12'/>
          <path  d='M8 12h8'/>
        </svg>
    );
  }
);