import React from "react";

export const HelpCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <path  d='M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3'/>
          <line  x1='12' y1='17' x2='12.01' y2='17'/>
        </svg>
    );
  }
);