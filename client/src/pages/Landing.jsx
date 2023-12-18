import { Avilablepro } from "../components/Avilablepro"
import { Button } from "@mui/material"
import './Landing.css';
import { Navigate, useNavigate } from "react-router-dom"
import BannerBackground from "../assets/Group 1881.png";

export const Landing = () => {
    const navigate = useNavigate();
    
    return ( <div className="home-container">
        <Avilablepro/>
        
            <div className="landing-banner-container">
                <div className="landing-banner-container">
                    <img className="landingpage-img" src = {BannerBackground} alt="" />
                </div>
            
                <div className="home-text-section">
                    <h1 className="primary-heading">
                    The most affortable place to <br />stay in the san franciso bay 
                    </h1>
                </div> 
            </div>

    </div> )
}