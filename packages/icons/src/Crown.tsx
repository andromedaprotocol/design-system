import React from "react";

export const Crown = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14'/>
        </svg>
    );
  }
);