import React from "react";

export const TextCursor = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17 22h-1a4 4 0 01-4-4V6a4 4 0 014-4h1'/>
          <path  d='M7 22h1a4 4 0 004-4v-1'/>
          <path  d='M7 2h1a4 4 0 014 4v1'/>
        </svg>
    );
  }
);