import React from "react";

export const ChevronFirst = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='17 18 11 12 17 6'/>
          <path  d='M7 6v12'/>
        </svg>
    );
  }
);