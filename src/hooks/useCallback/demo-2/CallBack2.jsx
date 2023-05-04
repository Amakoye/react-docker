import Title from "antd/lib/typography/Title";
import { useCallback, useState } from "react";
import CallBackBtn2 from "./CallBackBtn2";

const CallBack2 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    //setCount(count + 1);
    setCount((prev) => prev + 1);
  }, [setCount]); // the function never changes and so the child component never re-renders

  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "1em",
      }}
    >
      <Title level={4}>Component with useCallback</Title>
      <div>count:{count}</div>
      <CallBackBtn2 incrementCount={increment} />
    </div>
  );
};

export default CallBack2;
