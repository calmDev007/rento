import React, { useEffect, useState } from 'react';
import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./accountsetting.css";

const AccountSetting = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/auth/me", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Card style={{
      margin: 10,
      width: 300,
      minHeight: 200,
      padding: 20
    }}>
      <Typography textAlign={"center"} variant="h5">{user.username}</Typography>
      <Typography textAlign={"center"} variant="subtitle1">{user.email}</Typography>
      {user.profilephoto && (
        <img src={user.profilephoto} alt="Profile" style={{ width: 300 }} />
      )}
    </Card>
  );
}

export default AccountSetting;
