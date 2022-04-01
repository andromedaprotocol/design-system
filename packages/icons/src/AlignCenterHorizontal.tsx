import React from "react";

export const AlignCenterHorizontal = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 12h20'/>
          <path  d='M10 16v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4'/>
          <path  d='M10 8V4a2 2 0 00-2-2H6a2 2 0 00-2 2v4'/>
          <path  d='M20 16v1a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1'/>
          <path  d='M14 8V7c0-1.1.9-2 2-2h2a2 2 0 012 2v1'/>
        </svg>
    );
  }
);