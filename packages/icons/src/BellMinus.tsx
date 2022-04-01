import React from "react";

export const BellMinus = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M13.73 21a2 2 0 01-3.46 0'/>
          <path  d='M21 5h-6'/>
          <path  d='M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 017-5.916'/>
        </svg>
    );
  }
);