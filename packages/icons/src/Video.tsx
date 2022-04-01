import React from "react";

export const Video = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polygon  points='23 7 16 12 23 17 23 7'/>
          <rect  x='1' y='5' width='15' height='14' rx='2' ry='2'/>
        </svg>
    );
  }
);