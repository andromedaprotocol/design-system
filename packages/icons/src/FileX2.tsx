import React from "react";

export const FileX2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M4 22h14a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v4'/>
          <path  d='M14 2v6h6'/>
          <path  d='M3 12.5l5 5'/>
          <path  d='M8 12.5l-5 5'/>
        </svg>
    );
  }
);