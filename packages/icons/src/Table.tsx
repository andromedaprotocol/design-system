import React from "react";

export const Table = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <line  x1='3' y1='9' x2='21' y2='9'/>
          <line  x1='3' y1='15' x2='21' y2='15'/>
          <line  x1='12' y1='3' x2='12' y2='21'/>
        </svg>
    );
  }
);