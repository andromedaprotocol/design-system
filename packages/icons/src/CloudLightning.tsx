import React from "react";

export const CloudLightning = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M17.5 17a4.5 4.5 0 100-9h-1.8a7 7 0 10-10.3 8'/>
          <path  d='M12 12l-3 5h5l-3 5'/>
        </svg>
    );
  }
);