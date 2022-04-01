import React from "react";

export const Layers = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='12 2 2 7 12 12 22 7 12 2'/>
          <polyline  points='2 17 12 22 22 17'/>
          <polyline  points='2 12 12 17 22 12'/>
        </svg>
    );
  }
);