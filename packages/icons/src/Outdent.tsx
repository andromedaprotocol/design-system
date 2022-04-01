import React from "react";

export const Outdent = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='7 8 3 12 7 16'/>
          <line  x1='21' y1='12' x2='11' y2='12'/>
          <line  x1='21' y1='6' x2='11' y2='6'/>
          <line  x1='21' y1='18' x2='11' y2='18'/>
        </svg>
    );
  }
);