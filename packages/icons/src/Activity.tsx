import React from "react";

export const Activity = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='22 12 18 12 15 21 9 3 6 12 2 12'/>
        </svg>
    );
  }
);