import React from "react";

export const MinusCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='8' y1='12' x2='16' y2='12'/>
        </svg>
    );
  }
);