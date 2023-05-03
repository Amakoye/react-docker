import { Card, Pagination, Spin } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../store/slices/posts/postsSlice";
import { getPosts } from "../../store/thunks/posts/posts";

const Posts = () => {
  const dispatch = useDispatch();

  const { posts, loading, total } = useSelector((store) => store.posts);
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3>{user}</h3>
      <button onClick={() => dispatch(updateCount())}> click me</button>
      {loading && <Spin />}
      <div
        style={{
          width: "80%",
        }}
      >
        {posts.map((post) => (
          <Card
            title={post.title}
            style={{
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
            key={post.id}
          >
            <Paragraph style={{ textAlign: "justify", fontSize: "1.2rem" }}>
              {post.body}
            </Paragraph>
          </Card>
        ))}
      </div>
      <Pagination
        onChange={() => dispatch(getPosts())}
        defaultCurrent={1}
        defaultPageSize={5}
        total={total}
      />
    </div>
  );
};

export default Posts;
