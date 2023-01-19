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
import Page404 from "./pages/Page404";
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
 <Route path="/register" element={<Register />} />
      {/* protecte route si tocken egal admin  exest dashboard et tocken =client  profil sinon redaircete veir page 404  */}
          <Route path="/dashboard" element={token ? <Dashboard /> : <Login />} />
          <Route path="/getclient" element={token ? <GetClinet /> : <Login />} />
          <Route path="/profileclient" element={token ? <ProfileClient /> : <Login />} />
          <Route path="/releve" element={token ? <Releve /> : <Login />} />
          <Route path="*" element={<Page404 />} />
  
        </Routes>
      </Router>

<ToastContainer/>
   
    </>
  );
}

export default App;
