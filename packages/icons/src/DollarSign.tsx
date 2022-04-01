import React from "react";

export const DollarSign = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='12' y1='1' x2='12' y2='23'/>
          <path  d='M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6'/>
        </svg>
    );
  }
);