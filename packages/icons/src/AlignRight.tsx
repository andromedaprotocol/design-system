import React from "react";

export const AlignRight = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <line  x1='21' y1='6' x2='3' y2='6'/>
          <line  x1='21' y1='12' x2='9' y2='12'/>
          <line  x1='21' y1='18' x2='7' y2='18'/>
        </svg>
    );
  }
);