import React from "react";

export const ChevronLast = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='7 18 13 12 7 6'/>
          <path  d='M17 6v12'/>
        </svg>
    );
  }
);