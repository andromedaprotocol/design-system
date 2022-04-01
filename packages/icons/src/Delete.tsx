import React from "react";

export const Delete = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z'/>
          <line  x1='18' y1='9' x2='12' y2='15'/>
          <line  x1='12' y1='9' x2='18' y2='15'/>
        </svg>
    );
  }
);