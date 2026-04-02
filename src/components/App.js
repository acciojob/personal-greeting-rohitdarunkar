import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter your name:</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name..."
        style={{ padding: "8px", fontSize: "16px" }}
      />

      {/* Show greeting only if input is not empty */}
      {name.trim() !== "" && (
        <h3 style={{ marginTop: "20px" }}>
          Hello, {name}!
        </h3>
      )}
    </div>
  );
};

export default App;