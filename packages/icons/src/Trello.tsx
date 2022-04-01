import React from "react";

export const Trello = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <rect  x='3' y='3' width='18' height='18' rx='2' ry='2'/>
          <rect  x='7' y='7' width='3' height='9'/>
          <rect  x='14' y='7' width='3' height='5'/>
        </svg>
    );
  }
);