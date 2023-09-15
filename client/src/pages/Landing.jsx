import { Avilablepro } from "../components/Avilablepro"
import { Button } from "@mui/material"
import { Navigate, useNavigate } from "react-router-dom"

export const Landing = () => {
    const navigate = useNavigate();
    
    return ( <>
        <Avilablepro/>
        This is landing page

    </> )
}