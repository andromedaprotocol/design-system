import React from "react";

export const ClipboardCopy = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M16 4h2a2 2 0 012 2v4M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-2'/>
          <rect  x='8' y='2' width='8' height='4' rx='1' ry='1'/>
          <path  d='M21 14H11'/>
          <path  d='M15 10l-4 4 4 4'/>
        </svg>
    );
  }
);