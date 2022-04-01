import { Icon } from "@andromedaprotocol/icon";
import { createToast, useToastOptions } from "@andromedaprotocol/toast";
import { cx as clsx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

const statuses = {
  info: {
    icon: "info",
    cx: "message-icon-info",
    label: "info",
  },
  success: {
    icon: "check-circle-2",
    cx: "message-icon-success",
    label: "check-circle",
  },
  error: {
    icon: "alert-circle",
    cx: "message-icon-error",
    label: "alert-circle",
  },
  warning: {
    icon: "alert-triangle",
    cx: "message-icon-warning",
    label: "alert-triangle",
  },
};

type OmittedTypes =
  | "title"
  | "closeable"
  | "closeIcon"
  | "onUndo"
  | "undoText"
  | "description";

export interface MessageProps extends Omit<useToastOptions, OmittedTypes> {}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ message, className, icon: customIcon, status = "" }, ref) => {
    const { icon, cx, label } = statuses[status] || {};
    return (
      <div className={clsx("message", className)} ref={ref}>
        {((icon && cx) || customIcon) &&
          (customIcon ? (
            customIcon
          ) : (
            <Icon
              name={`${customIcon || icon}`}
              label={label}
              className={clsx("message-icon w-5 h-5", cx)}
            />
          ))}
        <span>{message}</span>
      </div>
    );
  }
);

if (__DEV__) {
  Message.displayName = "Message";
}

export const useMessage = createToast(Message);
