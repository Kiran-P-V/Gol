import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import BannerImage from "../../../src/assets/images/bannerImage.jpg";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";

export const Banner = () => {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  return (
    <>
      <Grid
        sx={{ width: "100%" }}
        container
        direction={isSmallScreen ? "column" : "row"}
      >
        <Grid item xs={12} md={6}>
          <Button
            endIcon={<ExploreRoundedIcon sx={{ color: "#3282AD" }} />}
            sx={{
              borderRadius: 7,
              height: 45,
              marginTop: isSmallScreen ? 13 : 22,
              marginLeft: 4,
              width: 120,
              backgroundColor: "#D2F4FF",
              color: "black",
            }}
            variant="contained"
          >
            Visit
          </Button>
          <Stack sx={{ marginTop: 3 }}>
            <Typography variant={"h3"} sx={{ marginLeft: 4, fontWeight: 700 }}>
              The Exotic
            </Typography>
            <Typography
              variant={"h3"}
              sx={{ marginLeft: 4, fontWeight: 700, color: "#3282AD" }}
            >
              Lakshadweep
            </Typography>
            <Typography variant={"h3"} sx={{ marginLeft: 4, fontWeight: 700 }}>
              Islands
            </Typography>
            <Button
              sx={{
                height: 45,
                marginTop: 5,
                marginLeft: 4,
                width: 170,
                color: "#3282AD",
              }}
              variant="outlined"
            >
              Doscover Now
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Avatar
            sx={{
              height: 400,
              width: 400,
              marginTop: isSmallScreen ? 3 : 14,
              backgroundColor: "white",
            }}
          >
            <Box component="img" src={BannerImage} />
          </Avatar>
        </Grid>
      </Grid>
    </>
  );
};
