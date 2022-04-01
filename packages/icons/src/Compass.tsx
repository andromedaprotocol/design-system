import React from "react";

export const Compass = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <polygon  points='16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76'/>
        </svg>
    );
  }
);