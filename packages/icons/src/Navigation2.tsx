import React from "react";

export const Navigation2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='12 2 19 21 12 17 5 21 12 2'/>
        </svg>
    );
  }
);