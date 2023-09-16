import React from 'react';
import { Grid, Paper, Typography, Card } from '@mui/material';

export function Avilablepro({ properties }) {
  // Check if properties is undefined or null
  if (!properties || properties.length === 0) {
    return null; 
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {properties.map((oneproperty) => (
        <Property key={oneproperty.id} oneproperty={oneproperty} />
      ))}
    </div>
  );
}

export function Property({ oneproperty }) {

  const type = oneproperty.type || '';
  const description = oneproperty.description || '';
  const price = oneproperty.price || '';
  const location = oneproperty.location || '';

  return (
    <Card style={{ margin: 10, width: 300, minHeight: 200, padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>
            <Typography textAlign={'center'} variant="h5">
              {type}
            </Typography>
            <Typography textAlign={'center'} variant="h5">
              {description}
            </Typography>
            <Typography textAlign={'center'} variant="h5">
              {price}
            </Typography>
            <Typography textAlign={'center'} variant="h5">
              {location}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Card>
  );
}
