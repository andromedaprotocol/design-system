import React from "react";

export const ShoppingBag = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z'/>
          <line  x1='3' y1='6' x2='21' y2='6'/>
          <path  d='M16 10a4 4 0 01-8 0'/>
        </svg>
    );
  }
);