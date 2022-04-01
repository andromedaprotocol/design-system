import React from "react";

export const Reply = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='9 17 4 12 9 7'/>
          <path  d='M20 18v-2a4 4 0 00-4-4H4'/>
        </svg>
    );
  }
);