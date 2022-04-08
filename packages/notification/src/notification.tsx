import { Icon } from "@andromedaprotocol/icon";
import { createToast, useToastOptions } from "@andromedaprotocol/toast";
import { cx as clsx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

const statuses = {
  info: {
    icon: "info",
    cx: "notification-icon-info bg-primary-100",
    label: "info",
  },
  success: {
    icon: "check-circle",
    cx: "notification-icon-success bg-green-100",
    label: "check-circle",
  },
  error: {
    icon: "alert-circle",
    cx: "notification-icon-error bg-pink-100",
    label: "alert-circle",
  },
  warning: {
    icon: "alert-triangle",
    cx: "notification-icon-warning bg-yellow-100",
    label: "alert-triangle",
  },
};

type OmittedTypes = "message";

export interface NotificationProps
  extends Omit<useToastOptions, OmittedTypes> {}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (props, ref) => {
    const {
      title,
      description,
      className,
      status = "",
      onClose,
      icon: customIcon,
      closeIcon: customCloseIcon,
      closeable = true,
      onUndo,
      undoText = "Undo",
    } = props;
    const { icon, cx, label } = statuses[status] || {};

    return (
      <div ref={ref} className={clsx("notification", className)}>
        {((icon && cx) || customIcon) && (
          <span
            className={clsx(
              "notification-icon rounded-full w-10 h-10 text-center flex flex-row justify-center items-center",
              cx
            )}
          >
            {customIcon ? (
              customIcon
            ) : (
              <Icon
                label={label}
                name={`${customIcon || icon}`}
                className="w-5 h-5"
              />
            )}
          </span>
        )}
        <div className="notification-content">
          <span className="notification-content-title">{title}</span>
          <span className="notification-content-description">
            {description}
          </span>
          {onUndo && (
            <a className="mt-2 font-normal cursor-pointer" onClick={onUndo}>
              {undoText}
            </a>
          )}
        </div>
        <div className="notification-action">
          {closeable && (
            <button
              onClick={onClose}
              className="notification-action-close-button"
            >
              {customCloseIcon ? (
                customCloseIcon
              ) : (
                <Icon
                  name="x"
                  label="x"
                  className="text-current align-text-bottom h-3.5 w-3.5"
                />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

if (__DEV__) {
  Notification.displayName = "Notification";
}

export const useNotification = createToast(Notification);
