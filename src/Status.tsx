import { useEffect } from "react";

export const Status = ({ isHoldingScreen }: { isHoldingScreen: boolean }) => {
  useEffect(() => {
    document.title = isHoldingScreen ? "" : "Notes";
  }, [isHoldingScreen]);

  return <div />;
};
