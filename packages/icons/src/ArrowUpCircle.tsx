import React from "react";

export const ArrowUpCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <polyline  points='16 12 12 8 8 12'/>
          <line  x1='12' y1='16' x2='12' y2='8'/>
        </svg>
    );
  }
);