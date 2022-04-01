import React from "react";

export const Loader2 = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 12a9 9 0 11-6.219-8.56'/>
        </svg>
    );
  }
);