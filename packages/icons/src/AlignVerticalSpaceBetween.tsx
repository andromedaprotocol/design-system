import React from "react";

export const AlignVerticalSpaceBetween = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='15' width='14' height='6' rx='2'/>
          <rect  x='7' y='3' width='10' height='6' rx='2'/>
          <path  d='M2 21h20'/>
          <path  d='M2 3h20'/>
        </svg>
    );
  }
);