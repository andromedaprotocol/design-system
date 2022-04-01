import React from "react";

export const BellOff = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M13.73 21a2 2 0 01-3.46 0'/>
          <path  d='M18.63 13A17.888 17.888 0 0118 8'/>
          <path  d='M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14'/>
          <path  d='M18 8a6 6 0 00-9.33-5'/>
          <path  d='M2 2l20 20'/>
        </svg>
    );
  }
);