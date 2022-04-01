import React from "react";

export const Zap = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'/>
        </svg>
    );
  }
);