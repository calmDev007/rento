     import  {React  , useState } from 'react';
     import Button from '@mui/material/Button';
     import TextField from "@mui/material/TextField";
     import Card from "@mui/material/Card";
     import Typography from "@mui/material/Typography";
     import axios from 'axios';
    import { useNavigate } from 'react-router-dom';

     export function Login() {
         const [email, setEmail] = useState('');
         const [password, setPassword] = useState('');
        const navigate = useNavigate();

         const handleLogin = async () => {
            try{
                const res = await axios.post("http://localhost:8000/auth/login", {
                    email: email,
                    password: password
                });
                const data = res.data;
                localStorage.setItem("token", data.token);
            }
            catch(err){
                console.log(err);
            }
                
            };   
    
     
         return (
             <div>
                 <div style={{
                     paddingTop: 150,
                     marginBottom: 10,
                     display: "flex",
                     justifyContent: "center"
                 }}>
                     <Typography variant={"h6"}>
                         Welcome back. Sign in below
                     </Typography>
                 </div>
                 <div style={{display: "flex", justifyContent: "center"}}>
                     <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                         <TextField
                             fullWidth={true}
                             label="email"
                             variant="outlined"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                         />
                         <br/><br/>
                         <TextField
                             fullWidth={true}
                             label="Password"
                             variant="outlined"
                             type="password"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                         />
                         <br/><br/>
     
                         <Button
                             size="large"
                             variant="contained"
                             onClick={handleLogin}
                         >
                             Sign in
                         </Button>
                     </Card>
                 </div>
             </div>
         );
     }
     
     
    