import React from "react";

export const Play = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='5 3 19 12 5 21 5 3'/>
        </svg>
    );
  }
);