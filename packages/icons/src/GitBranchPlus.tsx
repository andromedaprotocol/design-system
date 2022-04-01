import React from "react";

export const GitBranchPlus = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M6 3v12'/>
          <path  d='M18 9a3 3 0 100-6 3 3 0 000 6z'/>
          <path  d='M6 21a3 3 0 100-6 3 3 0 000 6z'/>
          <path  d='M15 6a9 9 0 00-9 9'/>
          <path  d='M18 15v6'/>
          <path  d='M21 18h-6'/>
        </svg>
    );
  }
);