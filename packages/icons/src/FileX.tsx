import React from "react";

export const FileX = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z'/>
          <polyline  points='14 2 14 8 20 8'/>
          <line  x1='9.5' y1='12.5' x2='14.5' y2='17.5'/>
          <line  x1='14.5' y1='12.5' x2='9.5' y2='17.5'/>
        </svg>
    );
  }
);