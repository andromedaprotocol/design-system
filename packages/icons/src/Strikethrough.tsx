import React from "react";

export const Strikethrough = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 4H9a3 3 0 00-2.83 4'/>
          <path  d='M14 12a4 4 0 010 8H6'/>
          <line  x1='4' y1='12' x2='20' y2='12'/>
        </svg>
    );
  }
);