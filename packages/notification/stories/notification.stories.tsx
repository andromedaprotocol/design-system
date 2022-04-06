import { Button } from "@andromedaprotocol/button";
import { useNotification } from "../src";

export default {
  title: "Notification",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export const basic = () => {
  const notification = useNotification();

  const handleMessage = (status?: any) => {
    notification({
      title: "Toast title",
      description: "Toast message goes here.",
      status: status,
      position: "top",
      undoText: "Under Action",
      onUndo: () => {},
    });
  };

  return (
    <>
      <div className="flex items-center w-full space-x-4">
        <Button onClick={() => handleMessage()}>Click me</Button>

        <Button onClick={() => handleMessage("info")}>Info</Button>

        <Button onClick={() => handleMessage("success")}>Success</Button>
        <Button onClick={() => handleMessage("error")}>Error</Button>
        <Button onClick={() => handleMessage("warning")}>Warning</Button>
      </div>
    </>
  );
};
