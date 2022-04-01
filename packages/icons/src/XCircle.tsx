import React from "react";

export const XCircle = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='10'/>
          <line  x1='15' y1='9' x2='9' y2='15'/>
          <line  x1='9' y1='9' x2='15' y2='15'/>
        </svg>
    );
  }
);