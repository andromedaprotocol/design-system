import React from "react";

export const ShoppingCart = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='9' cy='21' r='1'/>
          <circle  cx='20' cy='21' r='1'/>
          <path  d='M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6'/>
        </svg>
    );
  }
);