import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import { AppState } from '../../Context/AppContext';


const MuiAlert = () => {
    const { alert, setAlert } = AppState()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setAlert({ open: false });
    };
    const vertical = 'bottom'
    const horizontal = 'center'
    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Collapse in={alert.open}>
                    <Alert
                        elevation={10}
                        variant="filled"
                        severity={alert.type}
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={handleClose}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        {alert.message}
                    </Alert>
                </Collapse>
            </Snackbar>
        </>
    )
}

export default MuiAlert