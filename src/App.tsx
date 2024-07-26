import { useState } from "react";
import avatar from "/avatar.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={avatar} className="logo" alt="avatar" />
        </a>
      </div>
      <h1>
        <code>kopp</code>'s Github Pages page
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
