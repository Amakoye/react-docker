import { Button } from "antd";
import { useMode } from "./ThemeContext";

const ChildComponent = () => {
  //const mode = useContext(ThemeContext);
  const [theme, toggleTheme] = useMode();

  /*   const theme = {
    backgroundColor: mode === "dark" ? "#333" : "#ccc",
    color: mode === "dark" ? "#ccc" : "#333",
    padding: "2em",
  }; */

  return (
    <div style={theme}>
      <Button onClick={toggleTheme}>Toggle mode</Button>
      <div>useContext Demo</div>
    </div>
  );
};

export default ChildComponent;
