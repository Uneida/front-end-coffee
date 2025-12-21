import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import Methods from "./pages/Methods.tsx";
import Coffee from "./pages/Coffee.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/methods" element={<Methods />} />
        <Route path="/methods/:id" element={<Methods />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/coffee/:id" element={<Coffee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
