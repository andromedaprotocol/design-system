import React from "react";

export const Drumstick = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z'/>
          <path  d='M11.25 15.6l-2.16 2.16a2.5 2.5 0 11-4.56 1.73 2.49 2.49 0 01-1.41-4.24 2.5 2.5 0 013.14-.32l2.16-2.16'/>
        </svg>
    );
  }
);