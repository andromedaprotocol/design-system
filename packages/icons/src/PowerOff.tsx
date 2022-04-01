import React from "react";

export const PowerOff = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M18.36 6.64A9 9 0 0120.77 15M5.63 6.64A9 9 0 1018.706 19'/>
          <path  d='M12 2v4'/>
          <path  d='M2 2l20 20'/>
        </svg>
    );
  }
);