import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './components/landing'
import { Topbar } from './components/Topbar'
import { Profile } from './components/profile'
import { Views } from './components/Views'
import { Login } from './components/login'
import { Signup } from './components/signup'

function App() {
  return (
        <div style={{width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"}}
        >
                <Router>
                    <Topbar />
                    <Routes>
                        <Route path={"/"} element={<Landing />} />
                        <Route path={"/profile"} element={<Profile />} />
                        <Route path={"/views"} element={<Views />} />
                        <Route path={"/login"} element={<Login />} />
                        <Route path={"/signup"} element={<Signup />} />
                    </Routes>
                </Router>
        </div>
);
}

export default App;
