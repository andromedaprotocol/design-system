import React from "react";

export const Save = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z'/>
          <polyline  points='17 21 17 13 7 13 7 21'/>
          <polyline  points='7 3 7 8 15 8'/>
        </svg>
    );
  }
);