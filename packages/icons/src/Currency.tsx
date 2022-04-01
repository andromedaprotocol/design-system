import React from "react";

export const Currency = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='8'/>
          <line  x1='3' y1='3' x2='6' y2='6'/>
          <line  x1='21' y1='3' x2='18' y2='6'/>
          <line  x1='3' y1='21' x2='6' y2='18'/>
          <line  x1='21' y1='21' x2='18' y2='18'/>
        </svg>
    );
  }
);