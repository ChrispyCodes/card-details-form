import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <footer className="attribution">
        <p>
          Made with ♥️ by{" "}
          <a
            href="https://github.com/chrispycodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
