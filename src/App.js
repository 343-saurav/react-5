import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import DisplayUser from "./components/DisplayUser";
import LoginPage from "./components/LoginPage";
import Manager from "./components/Manager";
import HomeDashBoard from "./HomeDashBoard";
import { jwtDecode } from "jwt-decode";
import { useState,useEffect } from "react";
import Request from "./Pages/request/Request";
import Sidebar from "./Sidebar";

const Header = ({ svtokn }) => {
  return svtokn ? <Sidebar /> : null;
};

function App() {
  const [svtokn, seSvtokn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("role");
    seSvtokn(token || null);
  }, [svtokn]);
  return (
    <>
 <BrowserRouter>
 <HomeDashBoard/>
<div className="App" style={{display:'flex'}}>
  <Header svtokn={svtokn} />
 
  <Routes>
  
    <Route path="/" element={<LoginPage/>}/>
    
    {/* <Route path="/home" element={<HomeDashBoard />}/> */}
    <Route path="/admin" element={<AdminDashboard/>} /> 
    <Route path="/user/create" element={<AddUser/>} />
    <Route path="/user/edit/:id" element={<EditUser/>} />
    <Route path="/user/display/:id" element={<DisplayUser/>} />
    <Route path="/manager" element={<Manager/>} />
    <Route path="/request" element={<Request/>} />
  </Routes>
 
</div>
</BrowserRouter> 

    


    </>
  );
}
 
 
export default App;