import React from "react";

export const ChevronsDown = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='7 13 12 18 17 13'/>
          <polyline  points='7 6 12 11 17 6'/>
        </svg>
    );
  }
);