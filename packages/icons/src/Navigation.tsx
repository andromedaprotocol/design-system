import React from "react";

export const Navigation = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='3 11 22 2 13 21 11 13 3 11'/>
        </svg>
    );
  }
);