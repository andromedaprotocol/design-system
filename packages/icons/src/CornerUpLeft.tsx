import React from "react";

export const CornerUpLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='9 14 4 9 9 4'/>
          <path  d='M20 20v-7a4 4 0 00-4-4H4'/>
        </svg>
    );
  }
);