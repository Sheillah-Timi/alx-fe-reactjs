import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        margin: "20px",
        border: "1px solid gray",
        borderRadius: "8px",
      }}
    >
      <h2>Simple Counter</h2>

      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Current Count: {count}
      </p>

      <div>
        <button
          style={{ margin: "5px", padding: "10px 15px" }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={{ margin: "5px", padding: "10px 15px" }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          style={{ margin: "5px", padding: "10px 15px" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
