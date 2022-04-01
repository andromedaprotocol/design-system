import React from "react";

export const ChevronsLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='11 17 6 12 11 7'/>
          <polyline  points='18 17 13 12 18 7'/>
        </svg>
    );
  }
);