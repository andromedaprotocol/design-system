import React from "react";

export const Unlock = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='11' width='18' height='11' rx='2' ry='2'/>
          <path  d='M7 11V7a5 5 0 019.9-1'/>
        </svg>
    );
  }
);