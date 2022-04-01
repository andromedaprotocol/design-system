import React from "react";

export const Tent = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M19 20L10 4'/>
          <path  d='M5 20l9-16'/>
          <path  d='M3 20h18'/>
          <path  d='M12 15l-3 5'/>
          <path  d='M12 15l3 5'/>
        </svg>
    );
  }
);