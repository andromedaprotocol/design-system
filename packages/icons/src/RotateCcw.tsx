import React from "react";

export const RotateCcw = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 2v6h6'/>
          <path  d='M3 13a9 9 0 103-7.7L3 8'/>
        </svg>
    );
  }
);