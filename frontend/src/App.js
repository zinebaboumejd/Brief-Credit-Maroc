import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Admin/Dashboard";
import GetClinet from "./pages/Admin/GetClinet"
import Register from "./pages/Auth/Register"
function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/getclient" element={<GetClinet />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>


   
    </>
  );
}

export default App;