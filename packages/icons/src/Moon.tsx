import React from "react";

export const Moon = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'/>
        </svg>
    );
  }
);