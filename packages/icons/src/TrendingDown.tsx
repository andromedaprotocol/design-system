import React from "react";

export const TrendingDown = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <polyline  points='23 18 13.5 8.5 8.5 13.5 1 6'/>
          <polyline  points='17 18 23 18 23 12'/>
        </svg>
    );
  }
);