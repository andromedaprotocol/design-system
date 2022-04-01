import React from "react";

export const CornerDownLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='9 10 4 15 9 20'/>
          <path  d='M20 4v7a4 4 0 01-4 4H4'/>
        </svg>
    );
  }
);