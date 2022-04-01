import React from "react";

export const ArrowBigUp = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M9 21V10H5l7-7 7 7h-4v11z'/>
        </svg>
    );
  }
);