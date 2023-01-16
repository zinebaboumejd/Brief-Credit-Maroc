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
      {/* protecte route si tocken egal admin  exest dashboard et tocken =client  profil sinon redaircete veir page 404 */}
          {/* <Route path="/dashboard" element={token ? <Dashboard /> : <Page404 />} />
          <Route path="/getclient" element={token ? <GetClinet /> : <Page404 />} />
          <Route path="/profileclient" element={token ? <ProfileClient /> : <Page404 />} />
          <Route path="/releve" element={token ? <Releve /> : <Page404 />} />
          <Route path="*" element={<Page404 />} /> */}
          {
            token && token==='admin' ? 
            <>
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/getclient" element={<GetClinet />} />
            </>
            : 
            <>
            <Route path="/dashboard" element={<Login />} />
            <Route path="/getclient" element={<Login />} />
            </>
         }
          {
            token && token==='client' ?
            <>
            <Route path="/profileclient" element={<ProfileClient />} />
            <Route path="/releve" element={<Releve />} />
            </>
            :
            <>
            <Route path="/profileclient" element={<Login />} />
            <Route path="/releve" element={<Login />} />
            </>
          }
          <Route path="*" element={<Page404 />} />
          
        </Routes>
      </Router>

<ToastContainer/>
   
    </>
  );
}

export default App;
