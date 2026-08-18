import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import * as React from "react";

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;
export const SelectTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(
  ({ className="", children, ...props }, ref) =>
    <SelectPrimitive.Trigger ref={ref} className={`flex h-10 w-full items-center justify-between rounded-md border bg-white px-3 text-sm ${className}`} {...props}>
      {children}<ChevronDown className="h-4 w-4"/>
    </SelectPrimitive.Trigger>
);
SelectTrigger.displayName = "SelectTrigger";
export const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(
  ({ className="", children, ...props }, ref) =>
    <SelectPrimitive.Portal><SelectPrimitive.Content ref={ref} className={`z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg ${className}`} position="popper" {...props}>
      <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content></SelectPrimitive.Portal>
);
SelectContent.displayName = "SelectContent";
export const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(
  ({ className="", children, ...props }, ref) =>
    <SelectPrimitive.Item ref={ref} className={`relative flex cursor-pointer select-none items-center rounded px-2 py-2 text-sm outline-none hover:bg-gray-100 ${className}`} {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText><SelectPrimitive.ItemIndicator className="ml-auto"><Check className="h-4 w-4"/></SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
);
SelectItem.displayName = "SelectItem";
