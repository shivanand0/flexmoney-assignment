import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Signup = ({handleCloseAuthModal}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px"
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Email"
        color="secondary"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Phone Number"
        type="password"
        color="secondary"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Password"
        type="number"
        color="secondary"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        // onClick={handleSubmit}
        sx={{ backgroundColor: "#0F1B4C" }}
      >
        Register
      </Button>
    </Box>
  )
}

export default Signup