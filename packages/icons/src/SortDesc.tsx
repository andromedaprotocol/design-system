import React from "react";

export const SortDesc = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M11 5h10'/>
          <path  d='M11 9h7'/>
          <path  d='M11 13h4'/>
          <path  d='M3 17l3 3 3-3'/>
          <path  d='M6 18V4'/>
        </svg>
    );
  }
);