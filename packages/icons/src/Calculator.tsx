import React from "react";

export const Calculator = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='4' y='2' width='16' height='20' rx='2'/>
          <line  x1='8' x2='16' y1='6' y2='6'/>
          <line  x1='16' x2='16' y1='14' y2='18'/>
          <path  d='M16 10h.01'/>
          <path  d='M12 10h.01'/>
          <path  d='M8 10h.01'/>
          <path  d='M12 14h.01'/>
          <path  d='M8 14h.01'/>
          <path  d='M12 18h.01'/>
          <path  d='M8 18h.01'/>
        </svg>
    );
  }
);