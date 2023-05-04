import React from 'react';
import { Paper, BottomNavigation, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, color: 'black', height: 0.06 }} elevation={3}>
      <BottomNavigation
        showLabels>
        <Typography sx={{ p: 1, fontSize: 12 }}> 2023 KEEP FIT - Made by Joanna Philips</Typography>
      </BottomNavigation>
    </Paper>
  )
}
