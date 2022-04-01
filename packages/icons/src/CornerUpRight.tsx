import React from "react";

export const CornerUpRight = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='15 14 20 9 15 4'/>
          <path  d='M4 20v-7a4 4 0 014-4h12'/>
        </svg>
    );
  }
);