import React from "react";

export const CloudRainWind = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9'/>
          <path  d='M9.2 22l3-7'/>
          <path  d='M9 13l-3 7'/>
          <path  d='M17 13l-3 7'/>
        </svg>
    );
  }
);