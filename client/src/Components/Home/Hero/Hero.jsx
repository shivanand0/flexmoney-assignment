import React from 'react'
import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { CustomBox, Title } from './Styles/Styles'
import CustomButton from '../../Button/CustomButton'
import img1 from '../../../assets/img/pose2.png'

const Hero = () => {
    return (
        <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 5,
                                mb: 5,
                            }}
                        >
                            Welcome to Yoga Classes
                        </Typography>
                        <Title variant="h1">
                            Discover a life where you'll love to live.
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, accusantium illo doloribus exercitationem et voluptatibus eos corporis odio in id! Placeat earum natus a aliquam ullam quaerat dolore molestiae assumenda!
                        </Typography>
                        <CustomButton
                            backgroundColor="#0F1B4C"
                            color="#fff"
                            buttonText="More About Us"
                            heroBtn={true}
                        />
                    </Box>

                    <Box sx={{ flex: "0.3" }}>
                        <img
                            src={img1}
                            alt="img1"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    )
}

export default Hero