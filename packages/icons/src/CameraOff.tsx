import React from "react";

export const CameraOff = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='2' y1='2' x2='22' y2='22'/>
          <path  d='M9.5 4h5L17 7h3a2 2 0 012 2v7.5M7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16'/>
          <path  d='M14.121 15.121A3 3 0 119.88 10.88'/>
        </svg>
    );
  }
);