import React from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word/:word" element={<Result />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
