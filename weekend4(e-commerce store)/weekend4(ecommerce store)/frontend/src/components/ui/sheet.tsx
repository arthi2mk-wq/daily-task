import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetHeader = ({ className="", ...p }: React.HTMLAttributes<HTMLDivElement>) => <div className={`mb-4 ${className}`} {...p}/>;
export const SheetTitle = Dialog.Title;
export const SheetContent = React.forwardRef<React.ElementRef<typeof Dialog.Content>, React.ComponentPropsWithoutRef<typeof Dialog.Content>>(
  ({ className="", children, ...props }, ref) =>
    <Dialog.Portal><Dialog.Overlay className="fixed inset-0 bg-black/40"/><Dialog.Content ref={ref} className={`fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-xl ${className}`} {...props}>
      {children}<Dialog.Close className="absolute right-4 top-4"><X className="h-5 w-5"/></Dialog.Close>
    </Dialog.Content></Dialog.Portal>
);
SheetContent.displayName = "SheetContent";
