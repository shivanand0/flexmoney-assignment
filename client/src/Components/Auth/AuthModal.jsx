import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';

import CustomButton from '../Button/CustomButton';
import Login from './Login';
import Signup from './Signup';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  minWidth: 300,
  bgcolor: 'background.paper',
  border: '2px solid #0F1B4C',
  borderRadius: '10px',
  boxShadow: 24,
  p: 0,
};

const AuthModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpenAuthModal = () => setOpen(true);
  const handleCloseAuthModal = () => setOpen(false);

  // login-signup tab
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="Login"
        onClick={handleOpenAuthModal}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseAuthModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AppBar
              position='static'
              sx={{ backgroundColor: "transparent", color: "#fff" }}
            >
              <Tabs value={value} onChange={handleChange} variant="fullWidth" sx={{ borderRadius: 10 }} aria-label="Auth tabs" textColor="secondary" indicatorColor="secondary">
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            { value === 0 && <Login handleCloseAuthModal={handleCloseAuthModal} /> }
            { value === 1 && <Signup handleCloseAuthModal={handleCloseAuthModal} /> }
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default AuthModal