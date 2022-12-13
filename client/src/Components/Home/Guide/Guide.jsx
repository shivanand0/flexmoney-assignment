import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { CustomBox, GuidesBox, GuideBox } from "./Styles/Styles";
import TodayIcon from '@mui/icons-material/Today';
import Groups3Icon from '@mui/icons-material/Groups3';
import PaymentIcon from '@mui/icons-material/Payment';
import CustomButton from "../../Button/CustomButton";

const Guide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
      id="section1"
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
        How it works?
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
          Everything you need to know!
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <TodayIcon fontSize="large" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Enroll for a month
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

          </Box>
        </GuideBox>

        <GuideBox>
          <Groups3Icon fontSize="large" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Select your batch
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          </Box>
        </GuideBox>

        <GuideBox>
          <PaymentIcon fontSize="large" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Pay the fees
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

          </Box>
        </GuideBox>
      </GuidesBox>

      {/* open login popup for logged out users, else go to profile page */}
      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="Get Started"
        guideBtn={true}
      />
    </Box>
  );
};

export default Guide;
