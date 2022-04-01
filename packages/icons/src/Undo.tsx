import React from "react";

export const Undo = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 7v6h6'/>
          <path  d='M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'/>
        </svg>
    );
  }
);