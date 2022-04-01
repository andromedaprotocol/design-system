import React from "react";

export const Pause = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='6' y='4' width='4' height='16'/>
          <rect  x='14' y='4' width='4' height='16'/>
        </svg>
    );
  }
);