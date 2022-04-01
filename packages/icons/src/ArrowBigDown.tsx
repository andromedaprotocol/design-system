import React from "react";

export const ArrowBigDown = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M9 3h6v11h4l-7 7-7-7h4z'/>
        </svg>
    );
  }
);