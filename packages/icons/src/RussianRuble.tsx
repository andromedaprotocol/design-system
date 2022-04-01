import React from "react";

export const RussianRuble = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14 11c5.333 0 5.333-8 0-8'/>
          <path  d='M6 11h8'/>
          <path  d='M6 15h8'/>
          <path  d='M9 21V3'/>
          <path  d='M9 3h5'/>
        </svg>
    );
  }
);