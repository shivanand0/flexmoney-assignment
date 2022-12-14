import React from 'react'
import { Box, Typography } from "@mui/material";
import { CustomBox } from '../../Home/Guide/Styles/Styles';
import Card from './CustomCard'
import Grid from '@mui/material/Unstable_Grid2';

const Enrollments = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                }}
            >
                <div
                    style={{
                        width: "5%",
                        height: "5px",
                        backgroundColor: "#000339",
                        margin: "0 auto",
                    }}
                ></div>

                <Typography
                    variant="h3"
                    sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
                >
                    Enrollments
                </Typography>

                <CustomBox>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "#5A6473",
                            textAlign: "center",
                        }}
                    >
                        Your current and past enrollments
                    </Typography>
                </CustomBox>
            </Box>
            <Box sx={{
                flexGrow: 1,
                marginLeft: '1rem',
                marginRight: '1rem'
            }}>
                <Grid container spacing={2}>
                    <Grid md={3}>
                        <Card 
                            enroll="Current"
                            date="00/00/0000"
                            desc="description"
                            payStatus={0}
                            payID={0}
                        />
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Enrollments