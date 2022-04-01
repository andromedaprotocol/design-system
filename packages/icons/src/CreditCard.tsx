import React from "react";

export const CreditCard = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='1' y='4' width='22' height='16' rx='2' ry='2'/>
          <line  x1='1' y1='10' x2='23' y2='10'/>
        </svg>
    );
  }
);