import React from "react";

export const CornerLeftDown = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='14 15 9 20 4 15'/>
          <path  d='M20 4h-7a4 4 0 00-4 4v12'/>
        </svg>
    );
  }
);