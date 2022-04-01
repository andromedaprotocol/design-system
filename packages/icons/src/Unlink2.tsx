import React from "react";

export const Unlink2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15 7h2a5 5 0 010 10h-2m-6 0H7A5 5 0 017 7h2'/>
        </svg>
    );
  }
);