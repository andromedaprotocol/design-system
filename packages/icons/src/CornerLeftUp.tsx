import React from "react";

export const CornerLeftUp = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='14 9 9 4 4 9'/>
          <path  d='M20 20h-7a4 4 0 01-4-4V4'/>
        </svg>
    );
  }
);