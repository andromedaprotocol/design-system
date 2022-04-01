import React from "react";

export const Volume2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='11 5 6 9 2 9 2 15 6 15 11 19 11 5'/>
          <path  d='M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'/>
        </svg>
    );
  }
);