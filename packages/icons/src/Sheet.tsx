import React from "react";

export const Sheet = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <line  x1='3' y1='9' x2='21' y2='9'/>
          <line  x1='3' y1='15' x2='21' y2='15'/>
          <line  x1='9' y1='9' x2='9' y2='21'/>
          <line  x1='15' y1='9' x2='15' y2='21'/>
        </svg>
    );
  }
);