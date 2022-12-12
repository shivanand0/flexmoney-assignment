import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import { AppState } from '../../Context/AppContext';

const Login = ({ handleCloseAuthModal }) => {
  const { setAlert } = AppState()
  const handleSubmit = async () => {
    // if (!email || !password) {
    //   setAlert({
    //     open: true,
    //     message: "Please fill all the Fields",
    //     type: "error",
    //   });
    //   return;
    // }
    // try {
    //   const result = await signInWithEmailAndPassword(auth, email, password);
    //   setAlert({
    //     open: true,
    //     message: `Login Successful. Welcome ${result.user.email}`,
    //     type: "success",
    //   });

    //   handleClose();
    // } catch (error) {
    //   setAlert({
    //     open: true,
    //     message: error.message,
    //     type: "error",
    //   });
    //   return;
    // }
    setAlert({
      open: true,
      message: "Alert!",
      type: "error",
    });
  };

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
        label="Enter Email"
        color="secondary"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        color="secondary"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        sx={{ backgroundColor: "#0F1B4C" }}
      >
        Login
      </Button>
    </Box>
  )
}

export default Login