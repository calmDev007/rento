import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography, Card } from "@mui/material";
import axios from "axios";

export function Avilablepro() {
  const [property, setProperty] = useState([]);

  const preload = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user/getallposts", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProperty(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    preload();  
    console.log(property);
  }, [property]);

  return (
    <div>
        {property?.map((oneproperty) => (
        <Property key={oneproperty.id} oneproperty={oneproperty} />
        ))}
    </div>
  );
}

export function Property({ oneproperty }) {
  return (
    <Card style={{ margin: 10, width: 300, minHeight: 200, padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Typography textAlign={"center"} variant="h5">
              {oneproperty.type}
            </Typography>
            <Typography textAlign={"center"} variant="h5">
              {oneproperty.description}
            </Typography>
            <Typography textAlign={"center"} variant="h5">
              {oneproperty.price}
            </Typography>
            <Typography textAlign={"center"} variant="h5">
              {oneproperty.location}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
}
