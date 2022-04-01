import React from "react";

export const Divide = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='6' r='1'/>
          <line  x1='5' y1='12' x2='19' y2='12'/>
          <circle  cx='12' cy='18' r='1'/>
        </svg>
    );
  }
);