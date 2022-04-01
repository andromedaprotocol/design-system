import React from "react";

export const LogOut = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4'/>
          <polyline  points='16 17 21 12 16 7'/>
          <line  x1='21' y1='12' x2='9' y2='12'/>
        </svg>
    );
  }
);