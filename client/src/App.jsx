import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/landing'
import { TopBar } from './components/TopBar';
import { Profile } from './pages/Profile';
import { Views } from './pages/Views';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
        <div style={{width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"}}
        >
                <Router>
                    <TopBar />
                    <Routes>
                        <Route path={"/"} element={<Landing />} />
                        <Route path={"/profile"} element={<Profile />} />
                        <Route path={"/views"} element={<Views />} />
                        <Route path={"/login"} element={<Login />} />
                        <Route path={"/signup"} element={<Signup />} />
                        <Route path='/user/:activepage' element={<Profile/>} />
                    </Routes>
                </Router>
        </div>
);
}

export default App;
