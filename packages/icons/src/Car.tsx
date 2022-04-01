import React from "react";

export const Car = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a1 1 0 00-.8-.4H5.24a2 2 0 00-1.8 1.1l-.8 1.63A6 6 0 002 12.42V16h2'/>
          <circle  cx='6.5' cy='16.5' r='2.5'/>
          <circle  cx='16.5' cy='16.5' r='2.5'/>
        </svg>
    );
  }
);