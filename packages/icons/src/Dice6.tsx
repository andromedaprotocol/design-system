import React from "react";

export const Dice6 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <path  d='M16 8h.01'/>
          <path  d='M16 12h.01'/>
          <path  d='M16 16h.01'/>
          <path  d='M8 8h.01'/>
          <path  d='M8 12h.01'/>
          <path  d='M8 16h.01'/>
        </svg>
    );
  }
);