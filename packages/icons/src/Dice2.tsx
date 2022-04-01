import React from "react";

export const Dice2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <path  d='M15 9h.01'/>
          <path  d='M9 15h.01'/>
        </svg>
    );
  }
);