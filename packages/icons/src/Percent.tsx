import React from "react";

export const Percent = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='19' y1='5' x2='5' y2='19'/>
          <circle  cx='6.5' cy='6.5' r='2.5'/>
          <circle  cx='17.5' cy='17.5' r='2.5'/>
        </svg>
    );
  }
);