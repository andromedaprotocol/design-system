import React from "react";

export const ArrowDownCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <polyline  points='8 12 12 16 16 12'/>
          <line  x1='12' y1='8' x2='12' y2='16'/>
        </svg>
    );
  }
);