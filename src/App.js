import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { cloneElement, useRef } from "react";
import WithLayout from "./components/layout/WithLayout";
import PostModal from "./components/posts/PostModal";
import Memo from "./hooks/useMemo/Memo";
import Memo2 from "./hooks/useMemo/Memo2";

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
      {/*  <div style={{ display: "flex", gap: "1em", justifyContent: "center" }}>
        <CallBack1 />
        <CallBack2 />
      </div> */}

      {/* useReducer */}
      {/* <Users /> */}

      {/* useContext */}
      {/*   <Context /> */}

      {/* useMemo */}
      <div style={{ display: "flex", gap: "1em", justifyContent: "center" }}>
        <Memo />
        <Memo2 />
      </div>

      {/* <Posts /> */}
      {cloneElement(<PostModal ref={ref} />)}
    </WithLayout>
  );
}

export default App;
