import React from "react";

export const GitCommit = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='12' r='3'/>
          <line  x1='3' y1='12' x2='9' y2='12'/>
          <line  x1='15' y1='12' x2='21' y2='12'/>
        </svg>
    );
  }
);