import React from "react";

export const Bluetooth = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 7l10 10-5 5V2l5 5L7 17'/>
        </svg>
    );
  }
);