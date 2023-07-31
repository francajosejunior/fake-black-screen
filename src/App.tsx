import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { useEffect, useState } from "react";
import ReactNoSleep from "react-no-sleep";
import "./App.css";

function App() {
  const handle = useFullScreenHandle();
  const [isFull, setIsFull] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);

  return (
    <ReactNoSleep>
      {({ isOn, enable }) => (
        <FullScreen
          handle={handle}
          onChange={(state: boolean) => setIsFull(state)}
        >
          <div className="container">
            <div
              className={`lock-image ${isOn && isFull && "no-cursor"}`}
              onDoubleClick={() => {
                handle.enter();
                enable();
              }}
            />
          </div>
        </FullScreen>
      )}
    </ReactNoSleep>
  );
}

export default App;
