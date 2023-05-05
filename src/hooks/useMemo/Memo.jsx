import { useState } from "react";

const Memo = () => {
  const [num, setNum] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const doubledNumber = MultiplyBy2(num);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2em",
        width: 400,
        gap: "1em",
      }}
    >
      <h1>without useMemo</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <button onClick={() => setDarkMode((prev) => !prev)}>change bg</button>
      <div
        style={{
          backgroundColor: darkMode ? "black" : "white",
          padding: "0.5em",
        }}
      >
        <h1
          style={{
            color: darkMode ? "white" : "black",
            fontSize: 40,
            textAlign: "center",
          }}
        >
          {doubledNumber}
        </h1>
      </div>
    </div>
  );
};

const MultiplyBy2 = (num) => {
  for (let i = 0; i <= 1000000000; i++) {} //loops for long doing nothing; emulates what happens in slow long running complex func.
  return num * 2;
};

export default Memo;
