import React from "react";

export const Image = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <circle  cx='8.5' cy='8.5' r='1.5'/>
          <polyline  points='21 15 16 10 5 21'/>
        </svg>
    );
  }
);