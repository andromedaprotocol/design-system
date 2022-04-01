import React from "react";

export const Gem = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='6 3 18 3 22 9 12 22 2 9'/>
          <path  d='M12 22l4-13-3-6'/>
          <path  d='M12 22L8 9l3-6'/>
          <path  d='M2 9h20'/>
        </svg>
    );
  }
);