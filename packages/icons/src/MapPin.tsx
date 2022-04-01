import React from "react";

export const MapPin = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z'/>
          <circle  cx='12' cy='10' r='3'/>
        </svg>
    );
  }
);