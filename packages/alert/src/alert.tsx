import { cx, __DEV__ } from "@andromedaprotocol/utils";
import { Icon } from "@andromedaprotocol/icon";
import { DefaultProps } from "@andromedaprotocol/theme";
import { Badge } from "@andromedaprotocol/badge";
import { BadgeGroup } from "@andromedaprotocol/badge";

import * as React from "react";

import {
  useAlertClass,
  useAlertCloseButton,
  useAlertIconClass,
} from "./styles";

interface AlertContext {
  color?: string;
}

const AlertContext = React.createContext<AlertContext>({});

const useAlertContext = () => {
  const context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error(
      "useAlertContext must be used within a AlertContextProvider"
    );
  }
  return context;
};

interface IAlertCloseButtonProps extends DefaultProps {}

export interface AlertCloseButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    IAlertCloseButtonProps {}

export const AlertCloseButton = React.forwardRef<
  HTMLButtonElement,
  AlertCloseButtonProps
>(({ className }, ref) => {
  const { color } = useAlertContext();
  const classes = useAlertCloseButton();

  return (
    <button
      ref={ref}
      data-color={color ? color : undefined}
      className={cx(classes, className)}
    >
      <Icon
        name="x"
        label="x"
        className="inline-block w-4 h-4 text-current align-text-bottom fill-current"
      />
    </button>
  );
});

if (__DEV__) {
  AlertCloseButton.displayName = "AlertCloseButton";
}

interface IAlertProps extends DefaultProps {
  /* The color of the alert. */
  color?: "gray" | "primary" | "success" | "warning" | "error" | string;
  /** Controls alert appearance */
  variant?: "subtle" | "solid" | "left-accent";
  more?:boolean;
  children?: React.ReactNode;
  detail?:() => {};
  link?:string;
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    IAlertProps {}

const statuses = {
  gray: {
    icon: "info",
    styles: "alert-icon-info",
    label: "info",
    new_styles: "text-white bg-gray-700 px-2.5 py-0.5",
    new_back: "bg-gray-200",
    new_title: "",
  },
  primary: {
    icon: "info",
    styles: "alert-icon-info",
    label: "info",
    new_styles: "text-white bg-primary-700 px-2.5 py-0.5",
    new_back: "bg-primary-200 p-1",
    new_title: "",
  },
  success: {
    icon: "check-circle",
    styles: "alert-icon-success",
    label: "check-circle",
    new_styles: "text-white bg-green-700 px-2.5 py-0.5",
    new_back: "bg-green-200 p-1",
    new_title: "",
  },
  error: {
    icon: "alert-circle",
    styles: "alert-icon-error",
    label: "alert-circle",
    new_styles: "text-white bg-pink-700 px-2.5 py-0.5",
    new_back: "bg-pink-200",
    new_title: "",
  },
  warning: {
    icon: "alert-triangle",
    styles: "alert-icon-warning",
    label: "alert-triangle",
    new_styles: "text-white bg-yellow-700 px-2.5 py-0.5",
    new_back: "bg-yellow-200",
    new_title: "",
  },
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const { color = "primary", variant = "subtle", className, children, more,link,detail, ...rest } = props;
    const classes = useAlertClass({
      variant,
      color,
    });

    const iconClasses = useAlertIconClass({
      variant,
      color,
    });

    const context = { color };
    const { icon, styles, label, new_styles, new_back, new_title } =
      statuses[color] || {};

    return (
      <AlertContext.Provider value={context}>
        <div
          role="alert"
          ref={ref}
          className={cx(classes, className, styles)}
          {...rest}
        >
          {/* { mark && (
            <BadgeGroup variant="solid" color="primary" position="right">
              <label>We’ve just released a new feature</label>
              <Badge color="primary" variant="light">Success</Badge>
            </BadgeGroup>
          )

          }
          { mark === 'string' && (
              <div className={cx("flex flex-row p-1 mr-3 rounded-full justify-center text-center", new_back)}>
                  <div className={cx("rounded-full flex justify-center items-center", new_styles)}>{badge}</div>
                  <div className={cx("ml-3 mr-2", new_title)}>{title}</div>
              </div>
              <div className={cx("ml-3 mr-2", new_title)}>{title}</div>
            </div>
          )}
          {mark === "icon" && (
            <div
              className={cx(
                "flex flex-row p-1 mr-2 rounded-full justify-center text-center",
                iconClasses
              )}
            >
              <div className="flex w-4 h-4 m-auto">
                <Icon name={icon} label="" />
              </div>
            )
          } */}
          <div className={cx('flex flex-row space-x-4 items-center','')}>
            {children}
          </div>
          {/** TODO */
          more && (
            <div className="mt-3 ml-0 cursor-pointer md:m-auto md:mr-0">
              <span className="md:ml-3" onClick={detail}>
                Learn more
              </span>
              <span className="ml-3">View changes</span>
              <a className="no-underline" href={link ? link : ""}>
                <span className="ml-1">
                  <Icon className="w-3 h-3" name="arrow-right" label={""} />
                </span>
              </a>
            </div>
          )}
        </div>
      </AlertContext.Provider>
    );
  }
);

if (__DEV__) {
  Alert.displayName = "Alert";
}
