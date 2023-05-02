import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import CheckList from "./pages/checklist";
import Notes from "./pages/notes";
import History from "./pages/history";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
