import React from "react";

export const AlarmClock = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <circle  cx='12' cy='13' r='8'/>
          <path  d='M12 9v4l2 2'/>
          <path  d='M5 3L2 6'/>
          <path  d='M22 6l-3-3'/>
          <path  d='M6 19l-2 2'/>
          <path  d='M18 19l2 2'/>
        </svg>
    );
  }
);