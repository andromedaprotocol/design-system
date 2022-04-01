import React from "react";

export const Grab = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18 11.5V9a2 2 0 00-2-2v0a2 2 0 00-2 2v1.4'/>
          <path  d='M14 10V8a2 2 0 00-2-2v0a2 2 0 00-2 2v2'/>
          <path  d='M10 9.9V9a2 2 0 00-2-2v0a2 2 0 00-2 2v5'/>
          <path  d='M6 14v0a2 2 0 00-2-2v0a2 2 0 00-2 2v0'/>
          <path  d='M18 11v0a2 2 0 114 0v3a8 8 0 01-8 8h-4a8 8 0 01-8-8 2 2 0 114 0'/>
        </svg>
    );
  }
);