import React from "react";

export const Pencil = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='18' y1='2' x2='22' y2='6'/>
          <path  d='M7.5 20.5L19 9l-4-4L3.5 16.5 2 22z'/>
        </svg>
    );
  }
);