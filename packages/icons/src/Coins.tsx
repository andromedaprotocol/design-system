import React from "react";

export const Coins = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='8' cy='8' r='7'/>
          <path  d='M19.5 9.94a7 7 0 11-9.56 9.56'/>
          <path  d='M7 6h1v4'/>
          <path  d='M17.3 14.3l.7.7-2.8 2.8'/>
        </svg>
    );
  }
);