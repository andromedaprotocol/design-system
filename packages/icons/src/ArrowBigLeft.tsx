import React from "react";

export const ArrowBigLeft = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M3 12l7-7v4h11v6H10v4z'/>
        </svg>
    );
  }
);