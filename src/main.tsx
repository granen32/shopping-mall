import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./index.css";
import { RecoilRoot } from "recoil";

const modalRoot = document.createElement("div");
modalRoot.id = "modal-root";
document.body.appendChild(modalRoot);
const container = document.getElementById("root");
const root = createRoot(container!);
async function enableMocking() {
  if (!import.meta.env.DEV) {
    return;
  }
  const { worker } = await import("./mock/browser");
  return worker.start();
}
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  );
});
