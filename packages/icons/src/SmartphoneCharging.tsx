import React from "react";

export const SmartphoneCharging = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='5' y='2' width='14' height='20' rx='2' ry='2'/>
          <path  d='M12.667 8L10 12h4l-2.667 4'/>
        </svg>
    );
  }
);