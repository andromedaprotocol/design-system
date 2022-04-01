import React from "react";

export const CornerDownRight = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='15 10 20 15 15 20'/>
          <path  d='M4 4v7a4 4 0 004 4h12'/>
        </svg>
    );
  }
);