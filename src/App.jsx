import React from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Lab1 from "./pages/lab1";
import Lab2 from "./pages/lab2";
import Lab3 from "./pages/lab3";
import Lab4 from "./pages/lab4";
import Lab5 from "./pages/lab5";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
          <Route path="/lab5" element={<Lab5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
