import React from "react";

export const Filter = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'/>
        </svg>
    );
  }
);