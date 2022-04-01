import React from "react";

export const ChevronsRight = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='13 17 18 12 13 7'/>
          <polyline  points='6 17 11 12 6 7'/>
        </svg>
    );
  }
);