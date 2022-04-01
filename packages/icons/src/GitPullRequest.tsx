import React from "react";

export const GitPullRequest = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='18' cy='18' r='3'/>
          <circle  cx='6' cy='6' r='3'/>
          <path  d='M13 6h3a2 2 0 012 2v7'/>
          <line  x1='6' y1='9' x2='6' y2='21'/>
        </svg>
    );
  }
);