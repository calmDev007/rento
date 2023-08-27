import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[username , setUsername] = useState("");
    const[profilePhoto , setProfilePhoto] = useState("");
    const navigate = useNavigate();

    return <div>
    <div style={{
        paddingTop: 150,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center"
    }}>
        <Typography variant={"h6"}>
        Welcome to Rento Sign up below
        </Typography>
    </div>
<div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{width: 400, padding: 20}}>
        <TextField
            onChange={(evant11) => {
                let elemt = evant11.target;
                setEmail(elemt.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
        />
        <br/><br/>
        <TextField
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
        />
        <br/><br/>
        <TextField
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            fullWidth={true}
            label="username"
            variant="outlined"
            type={"username"}
        />
        <br/><br/>

        <TextField
            onChange={(e) => {
                setProfilePhoto(e.target.value);
            }}
            fullWidth={true}
            label="profile photo"
            variant="outlined"
        />
        <br/><br/>

        <Button
            size={"large"}
            variant="contained"
            onClick={async() => {

                const response = await axios.post("http://localhost:8000/auth/signup" , {
                    username : email,
                    password : password,
                    profilePhoto : profilePhoto,
                    email : email,
                })
                console.log(response.data);
                let data = response.data;
                localStorage.setItem("token" , data.token);
                navigate('/login');
            }}

        > Signup </Button>
    </Card>
    </div>
</div>
}