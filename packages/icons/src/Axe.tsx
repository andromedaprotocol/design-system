import React from "react";

export const Axe = React.forwardRef<SVGSVGElement, React.ComponentPropsWithRef<"svg">>(
  ({ color = "currentColor", ...props }, ref) => {
    return (
        <svg fill="currentcolor" stroke={color} {...props} ref={ref}>
          <path  d='M14 12l-8.501 8.501a2.12 2.12 0 01-2.998 0h-.002a2.12 2.12 0 010-2.998L11 9.002'/>
          <path  d='M9 7l4-4 6 6h3l-.13.648a7.648 7.648 0 01-5.081 5.756L15 16v-3z'/>
        </svg>
    );
  }
);