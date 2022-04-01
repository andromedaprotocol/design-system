import React from "react";

export const Trash2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='3 6 5 6 21 6'/>
          <path  d='M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2'/>
          <line  x1='10' y1='11' x2='10' y2='17'/>
          <line  x1='14' y1='11' x2='14' y2='17'/>
        </svg>
    );
  }
);