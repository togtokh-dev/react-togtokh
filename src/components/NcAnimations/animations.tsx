import React from "react";
import { useRive } from "@rive-app/react-canvas";
export const LoadingRiv = () => {
  const { RiveComponent } = useRive({
    src: "https://upload-web.toki.mn/uploads/media/application/octet-stream/64cca5c90c0c249b27045e66.riv",
    stateMachines: "State Machine",
    autoplay: true,
  });
  return (
    <>
      <RiveComponent className="react-togtokh-dev w-full h-full mx-auto" />
    </>
  );
};
