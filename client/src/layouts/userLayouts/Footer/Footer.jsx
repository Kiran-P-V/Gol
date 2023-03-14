import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery, Divider, Box } from "@mui/material";
import { Stack } from "@mui/system";
import FooterImage from "../../../assets/images/FooterImage.jpg";
import FooterLogo from "../../../assets/images/FooterLogo.png";

export const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      component="div"
      position="static"
      sx={{
        backgroundImage: `url(${FooterImage})`,
        bgcolor: "#161b22",
        width: "100%",
        marginTop: 20,
      }}
    >
      <Stack
        sx={{ display: "flex", justifyContent: "space-around", padding: 7 }}
        direction={matches ? "row" : "column"}
        spacing={2}
      >
        <Typography
          sx={{ color: "white", fontWeight: "bold" }}
          variant="h6"
          component="h6"
        >
          GOL
          <Box
            sx={{ backgroundImage: `url(${FooterLogo})` }}
            component="div"
          ></Box>
          <Stack>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              ProMatch, the leading home services market network, connects
              <br />
              homeowners with quality home improvement, repair and maintenance
              <br />
              professionals to take care of all your home service needs.
            </Typography>
          </Stack>
        </Typography>
        <Typography
          sx={{ color: "white", fontWeight: "bold" }}
          variant="h6"
          component="h6"
        >
          Need Help?
          <Stack>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Contact Us
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              About Us
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Careers
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Terms of Use
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Privacy Policy
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Refund Policy
            </Typography>
          </Stack>
        </Typography>
        <Typography
          sx={{ color: "white", fontWeight: "bold" }}
          variant="h6"
          component="h6"
        >
          Learn More
          <Stack>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Designs
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Reviews
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>Blogs</Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Articles
            </Typography>
            <Typography sx={{ fontSize: 14, color: "white" }}>
              Professionals
            </Typography>
          </Stack>
        </Typography>
      </Stack>
      <Divider variant="middle" />
      <Stack
        sx={{ display: "flex", justifyContent: "space-around", padding: 1 }}
        direction={matches ? "row" : "column"}
        spacing={2}
      >
        <Stack>
          <Typography sx={{ fontSize: 14, color: "white" }}>
            Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
