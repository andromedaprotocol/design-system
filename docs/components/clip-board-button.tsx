import { IconButton, Icon, IconButtonProps } from "@andromedaprotocol/react";
import * as React from "react";
import useClipboard from "react-use-clipboard";

interface ClipBoardButtonProps extends IconButtonProps {
  value?: string;
}

export function ClipBoardButton({
  value = "",
  ...props
}: ClipBoardButtonProps) {
  const [isCopied, setCopied] = useClipboard(value, {
    successDuration: 1000,
  });

  return (
    <IconButton variant="solid" onClick={setCopied} {...props}>
      {isCopied ? (
        <Icon name="check" className="w-5 h-5 text-primary-200" label="check" />
      ) : (
        <Icon name="copy" className="w-5 h-5" label="duplicate" />
      )}
    </IconButton>
  );
}
