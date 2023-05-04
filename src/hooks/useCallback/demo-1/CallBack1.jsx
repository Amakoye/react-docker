import Title from "antd/lib/typography/Title";
import { useState } from "react";
import CallBackBtn1 from "./CallBack1Btn";

const CallBack1 = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "1em",
      }}
    >
      <Title level={4}>Component without useCallback</Title>
      <div>count:{count}</div>
      <CallBackBtn1 incrementCount={() => setCount(count + 1)} />
    </div>
  );
};

export default CallBack1;
