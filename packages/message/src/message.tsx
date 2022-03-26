import {
  Icon,
  InfoIcon,
  XCricleIcon,
  CheckCircleIcon,
  ExclamationIcon,
} from "@andromedaprotocol/icon";
import { createToast, useToastOptions } from "@andromedaprotocol/toast";
import { cx as clsx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

const statuses = {
  info: {
    icon: 'Info',
    cx: "message-icon-info",
    label: "info",
  },
  success: {
    icon: 'CheckCircle',
    cx: "message-icon-success",
    label: "check-circle",
  },
  error: {
    icon: 'XCricle',
    cx: "message-icon-error",
    label: "x-circle",
  },
  warning: {
    icon: 'Exclamation',
    cx: "message-icon-warning",
    label: "exclamationIcon",
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
              name={icon}
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
