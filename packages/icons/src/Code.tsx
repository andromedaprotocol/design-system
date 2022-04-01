import React from "react";

export const Code = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='16 18 22 12 16 6'/>
          <polyline  points='8 6 2 12 8 18'/>
        </svg>
    );
  }
);