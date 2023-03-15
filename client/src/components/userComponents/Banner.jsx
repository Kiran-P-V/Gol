import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Stack } from "@mui/system";
import BannerImage from "../../../src/assets/images/bannerImage.jpg";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import bannerCardImage from "../../assets/images/bannerCardImage.jpg";
import bannerCardImage2 from "../../assets/images/bannerCardImage2.png";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import TramRoundedIcon from "@mui/icons-material/TramRounded";

export const Banner = () => {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  const styles = {
    avatar: {
      height: 400,
      width: 400,
      marginTop: !isSmallScreen ? 14 : 2,
      backgroundColor: "white",
    },
    button1: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    button2: {
      position: "absolute",
      bottom: 10,
      left: 10,
    },
  };

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
        <Grid sx={{ position: "relative" }} item xs={12} md={6}>
          <Avatar sx={styles.avatar}>
            <Box sx={styles.card}></Box>
            <Box component="img" src={BannerImage} />
          </Avatar>
          <Button
            startIcon={
              <FlightRoundedIcon
                sx={{
                  color: "#42A7C3",
                  transform: "rotate(90deg)",
                  ":hover": {
                    color: "red",
                  },
                }}
              />
            }
            sx={{
              display: isSmallScreen && "none",
              width: 180,
              height: 55,
              position: "absolute",
              top: "30%",
              right: "40%",
              boxShadow: 5,
              borderRadius: 9,
              backgroundColor: "white",
              color: "black",
            }}
            variant="contained"
          >
            Jakarta - Bali
          </Button>
          <Button
            startIcon={
              <TramRoundedIcon
                sx={{
                  color: "#42A7C3",
                  height: "35px",
                  width: "60px",
                  marginLeft: 1.2,
                }}
              />
            }
            sx={{
              display: isSmallScreen && "none",
              width: 55,
              height: 65,
              position: "absolute",
              top: "50%",
              right: "45%",
              boxShadow: 5,
              borderRadius: 9,
              backgroundColor: "white",
            }}
            variant="contained"
          ></Button>
          <Card
            sx={{
              display: isSmallScreen && "none",
              width: 150,
              height: 130,
              position: "absolute",
              top: "70%",
              right: "90%",
              boxShadow: 5,
              borderRadius: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  height: "91px",
                  marginRight: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
                component="img"
                height="140"
                image={bannerCardImage}
                alt="green iguana"
              />
              <Stack direction="row">
                <h4>Explore laboun </h4>
              </Stack>
              <Stack direction="row">
                <LocationOnRoundedIcon
                  sx={{ color: "#42A7C3", width: "20px" }}
                />
                <Typography variant="body2" color="text.secondary">
                  .NTT , indonesua
                </Typography>
              </Stack>

              <CardContent></CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              display: isSmallScreen && "none",
              width: 100,
              height: 100,
              position: "absolute",
              top: "70%",
              right: "50%",
              boxShadow: 5,
              borderRadius: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  height: "62px",
                  marginRight: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
                component="img"
                height="140"
                image={bannerCardImage2}
                alt="green iguana"
              />
              <Stack direction="row">
                <h4>Explore laboun </h4>
              </Stack>
              <Stack direction="row">
                <LocationOnRoundedIcon
                  sx={{ color: "#42A7C3", width: "15px", height: "13px" }}
                />
                <Typography
                  sx={{ fontSize: 10 }}
                  variant="body2"
                  color="text.secondary"
                >
                  .NTT , indonesua
                </Typography>
              </Stack>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
