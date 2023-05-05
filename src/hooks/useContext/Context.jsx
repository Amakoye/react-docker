import ChildComponent from "./ChildComponent";
import { ThemeProvider } from "./ThemeContext";

const Context = () => {
  return (
    <ThemeProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          width: 500,
          margin: "1em",
        }}
      >
        <ChildComponent />
      </div>
    </ThemeProvider>
  );
};

export default Context;
