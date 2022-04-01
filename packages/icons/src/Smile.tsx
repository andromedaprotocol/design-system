import React from "react";

export const Smile = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <path  d='M8 14s1.5 2 4 2 4-2 4-2'/>
          <line  x1='9' y1='9' x2='9.01' y2='9'/>
          <line  x1='15' y1='9' x2='15.01' y2='9'/>
        </svg>
    );
  }
);