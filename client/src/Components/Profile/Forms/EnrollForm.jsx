import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AppState } from '../../../Context/AppContext';
const EnrollForm = ({ handleCloseEnrollModal }) => {
    const { setAlert } = AppState()
    const handleSubmit = async () => {
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
                type="text"
                label="text"
                color="secondary"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            <TextField
                variant="outlined"
                type="text"
                label="text"
                color="secondary"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                sx={{ backgroundColor: "#0F1B4C" }}
            >
                Submit
            </Button>
        </Box>
    )
}

export default EnrollForm