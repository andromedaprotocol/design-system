import React from "react";

export const ArrowLeftCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <polyline  points='12 8 8 12 12 16'/>
          <line  x1='16' y1='12' x2='8' y2='12'/>
        </svg>
    );
  }
);