import React from "react";

export const Repeat = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17 2l4 4-4 4'/>
          <path  d='M3 11v-1a4 4 0 014-4h14'/>
          <path  d='M7 22l-4-4 4-4'/>
          <path  d='M21 13v1a4 4 0 01-4 4H3'/>
        </svg>
    );
  }
);