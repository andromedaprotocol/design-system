import React from "react";

export const BluetoothSearching = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M7 7l10 10-5 5V2l5 5L7 17'/>
          <path  d='M20.83 14.83a4 4 0 000-5.66'/>
          <path  d='M18 12h.01'/>
        </svg>
    );
  }
);