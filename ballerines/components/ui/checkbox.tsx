import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border data-[state=checked]:bg-primary accent-current",
          className
        )}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";


