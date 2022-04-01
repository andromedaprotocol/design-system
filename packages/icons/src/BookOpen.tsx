import React from "react";

export const BookOpen = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z'/>
          <path  d='M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z'/>
        </svg>
    );
  }
);