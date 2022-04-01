import React from "react";

export const Underline = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6 4v6a6 6 0 0012 0V4'/>
          <line  x1='4' y1='20' x2='20' y2='20'/>
        </svg>
    );
  }
);