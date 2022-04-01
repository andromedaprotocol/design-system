import React from "react";

export const ChevronsUp = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='17 11 12 6 7 11'/>
          <polyline  points='17 18 12 13 7 18'/>
        </svg>
    );
  }
);