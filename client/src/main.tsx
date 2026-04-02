import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

try {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (e) {
  const root = document.getElementById("root");
  if (root) {
    root.innerHTML = `<pre style="padding:2rem;color:red;font-size:14px;white-space:pre-wrap;">React failed to mount:\n${e instanceof Error ? e.message + '\n' + e.stack : String(e)}</pre>`;
  }
  console.error("React mount error:", e);
}
