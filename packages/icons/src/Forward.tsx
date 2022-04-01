import React from "react";

export const Forward = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='15 17 20 12 15 7'/>
          <path  d='M4 18v-2a4 4 0 014-4h12'/>
        </svg>
    );
  }
);