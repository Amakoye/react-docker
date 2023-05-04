import { Button } from "antd";
import React from "react";
import useRenderCount from "../useRenderCount";

const CallBackBtn2 = React.memo(({ incrementCount }) => {
  //const renders = useRef(0);
  const [rendersCount] = useRenderCount();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button onClick={incrementCount}>Click me</Button>
      <h3>renders:{rendersCount}</h3>
    </div>
  );
});

export default CallBackBtn2;
