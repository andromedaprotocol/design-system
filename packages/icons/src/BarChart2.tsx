import React from "react";

export const BarChart2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='18' y1='20' x2='18' y2='10'/>
          <line  x1='12' y1='20' x2='12' y2='4'/>
          <line  x1='6' y1='20' x2='6' y2='14'/>
        </svg>
    );
  }
);