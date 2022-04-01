import React from "react";

export const UserX = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'/>
          <circle  cx='8.5' cy='7' r='4'/>
          <line  x1='18' y1='8' x2='23' y2='13'/>
          <line  x1='23' y1='8' x2='18' y2='13'/>
        </svg>
    );
  }
);