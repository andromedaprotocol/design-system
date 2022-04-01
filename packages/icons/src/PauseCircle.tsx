import React from "react";

export const PauseCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='10' y1='15' x2='10' y2='9'/>
          <line  x1='14' y1='15' x2='14' y2='9'/>
        </svg>
    );
  }
);