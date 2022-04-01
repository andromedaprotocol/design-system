import React from "react";

export const Search = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='11' cy='11' r='8'/>
          <line  x1='21' y1='21' x2='16.65' y2='16.65'/>
        </svg>
    );
  }
);