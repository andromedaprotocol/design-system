import React from "react";

export const ArrowBigRight = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 12l-7-7v4H3v6h11v4z'/>
        </svg>
    );
  }
);