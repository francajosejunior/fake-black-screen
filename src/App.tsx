import { useEffect, useState } from "react";
import ReactNoSleep from "react-no-sleep";
import "./App.css";
import { Status } from "./Status";

function App() {
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);

  useEffect(() => {
    const handleWindowBlur = () => {
      setFocus(false);
    };

    const handleWindowFocus = () => {
      setFocus(true);
    };

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, []);

  return (
    <ReactNoSleep>
      {({ isOn, enable, disable }) => (
        <div className="container">
          <Status isHoldingScreen={focus && isOn} />
          <div
            className={`lock-image`}
            onDoubleClick={() => {
              if (isOn) disable();
              else enable();
            }}
          />
        </div>
      )}
    </ReactNoSleep>
  );
}

export default App;
