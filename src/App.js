import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import { cloneElement, useRef } from "react";
import WithLayout from "./components/layout/WithLayout";
import PostModal from "./components/posts/PostModal";
import Posts from "./components/posts/Posts";

function App() {
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
      <Posts />
      {cloneElement(<PostModal ref={ref} />)}
    </WithLayout>
  );
}

export default App;
