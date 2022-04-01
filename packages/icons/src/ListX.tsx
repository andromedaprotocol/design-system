import React from "react";

export const ListX = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M11 12H3'/>
          <path  d='M16 6H3'/>
          <path  d='M16 18H3'/>
          <path  d='M19 10l-4 4'/>
          <path  d='M15 10l4 4'/>
        </svg>
    );
  }
);