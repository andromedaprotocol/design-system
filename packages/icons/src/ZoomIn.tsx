import React from "react";

export const ZoomIn = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='11' cy='11' r='8'/>
          <line  x1='21' y1='21' x2='16.65' y2='16.65'/>
          <line  x1='11' y1='8' x2='11' y2='14'/>
          <line  x1='8' y1='11' x2='14' y2='11'/>
        </svg>
    );
  }
);