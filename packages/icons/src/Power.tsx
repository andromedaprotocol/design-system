import React from "react";

export const Power = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18.36 6.64a9 9 0 11-12.73 0'/>
          <line  x1='12' y1='2' x2='12' y2='12'/>
        </svg>
    );
  }
);