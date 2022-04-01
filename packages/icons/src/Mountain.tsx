import React from "react";

export const Mountain = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M8 3l4 8 5-5 5 15H2L8 3z'/>
        </svg>
    );
  }
);