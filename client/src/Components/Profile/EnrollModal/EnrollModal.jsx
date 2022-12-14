import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import CustomButton from '../../Button/CustomButton';
import EnrollForm from '../Forms/EnrollForm';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 300, sm: 300, md: 400, lg: 500, xl: 600 },
    bgcolor: 'background.paper',
    border: '2px solid #0F1B4C',
    borderRadius: '10px',
    boxShadow: 24,
    p: 0,
};

const EnrollModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpenEnrollModal = () => setOpen(true);
    const handleCloseEnrollModal = () => setOpen(false);
    return (
        <div>
            <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Enroll Now"
                onClick={handleOpenEnrollModal}
            // getStartedBtn={true}
            />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleCloseEnrollModal}
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
                            <Tabs variant="fullWidth" sx={{ borderRadius: 10 }} aria-label="Auth tabs" textColor="secondary" indicatorColor="secondary">
                                <Tab value={0} label="Enrollment Form" />
                            </Tabs>
                        </AppBar>
                        <EnrollForm />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default EnrollModal