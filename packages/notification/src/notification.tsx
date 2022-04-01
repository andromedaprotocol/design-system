import { Button } from "@andromedaprotocol/button";
import { Icon } from "@andromedaprotocol/icon";
import { createToast, useToastOptions } from "@andromedaprotocol/toast";
import { cx as clsx, __DEV__ } from "@andromedaprotocol/utils";
import * as React from "react";

const statuses = {
  info: {
    icon: "info",
    cx: "notification-icon-info",
    label: "info",
  },
  success: {
    icon: "check-circle-2",
    cx: "notification-icon-success",
    label: "check-circle",
  },
  error: {
    icon: "alert-circle",
    cx: "notification-icon-error",
    label: "alert-circle",
  },
  warning: {
    icon: "alert-triangle",
    cx: "notification-icon-warning",
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
          <span className={clsx("notification-icon", cx)}>
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
        </div>
        <div className="notification-action">
          {onUndo && (
            <Button
              variant="link"
              color="primary"
              className="notification-action-undo"
              onClick={() => {
                onUndo();
              }}
            >
              {undoText}
            </Button>
          )}

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
