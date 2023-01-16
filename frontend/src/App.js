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
import Register from "./pages/Auth/Register";
import ProfileClient from "./pages/Client/ProfileClient"
import Releve from "./pages/Client/Releve";
import { ToastContainer } from 'react-toastify';

function App() {
  const token=localStorage.getItem('token')
  return (
    <>
      <Navbar />
      {/* <Home /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
      {/* nested route admin  */}
          <Route path="/admin" element={<Dashboard />}>
            
            <Route path="/admin/getclient" element={<GetClinet />} />
          </Route> 

          
          <Route path="/register" element={<Register />} />
          
          <Route path="/profileclient" element={<ProfileClient />} />
          <Route path="/releve" element={<Releve />} />
        </Routes>
      </Router>

<ToastContainer/>
   
    </>
  );
}

export default App;
