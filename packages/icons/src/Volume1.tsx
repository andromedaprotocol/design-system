import React from "react";

export const Volume1 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='11 5 6 9 2 9 2 15 6 15 11 19 11 5'/>
          <path  d='M15.54 8.46a5 5 0 010 7.07'/>
        </svg>
    );
  }
);