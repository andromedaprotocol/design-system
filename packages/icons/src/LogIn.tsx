import React from "react";

export const LogIn = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4'/>
          <polyline  points='10 17 15 12 10 7'/>
          <line  x1='15' y1='12' x2='3' y2='12'/>
        </svg>
    );
  }
);