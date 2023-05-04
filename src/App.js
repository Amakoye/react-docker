import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { cloneElement, useRef } from "react";
import WithLayout from "./components/layout/WithLayout";
import PostModal from "./components/posts/PostModal";
import CallBack1 from "./hooks/useCallback/demo-1/CallBack1";
import CallBack2 from "./hooks/useCallback/demo-2/CallBack2";
import Users from "./hooks/useReducer/Users";

function App() {
  // const [count, setCounter] = useState(0);
  const ref = useRef(null);

  return (
    <WithLayout pageTitle={"Dashboard"}>
      <Title
        style={{
          fontSize: "1.2rem",
        }}
        level={4}
      >
        Posts
      </Title>
      <Button onClick={() => ref.current?.open()}>Add</Button>

      {/* useCallback */}
      <div style={{ display: "flex", gap: "1em", justifyContent: "center" }}>
        <CallBack1 />
        <CallBack2 />
      </div>

      {/* useReducer */}
      <Users />

      {/*  <Posts /> */}
      {cloneElement(<PostModal ref={ref} />)}
    </WithLayout>
  );
}

export default App;
