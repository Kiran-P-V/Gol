import React, { useState } from "react";

import {
  Typography,
  AppBar,
  Toolbar,
  Avatar,
  useMediaQuery,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  Container,
  Button,
} from "@mui/material";
import Logo from "../../../assets/images/golLogo.png";
import { Stack } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
export const NavBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        // className="navBarMain"
        component="div"
        position="fixed"
        sx={{
          bgcolor: "white",
          height: "80px",
          marginBottom: 2,
          borderRadius: 2,
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: matches && "flex",
            justifyContent: !matches && "space-between",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              width: 100,
              height: 100,
              bgcolor: "white",
            }}
          >
            <img
              alt="logo"
              style={{
                width: "90px",
                height: "50px",
                backgroundColor: "white",
              }}
              src={Logo}
            />
          </Avatar>
          {matches ? (
            <Container>
              <Stack
                spacing={{ xs: 0, sm: 2, md: 6, lg: 8 }}
                direction={"row"}
                sx={{
                  marginLeft: "50px",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  Find Reservations
                </Typography>
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  Packages
                </Typography>
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  About Lakshadweep
                </Typography>
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  Gol
                </Typography>{" "}
                <Typography
                  sx={{
                    "&:hover": { color: "grey" },
                    textDecoration: "none",
                    color: "black",
                  }}
                  variant="body1"
                  component="a"
                  href="#text-buttons"
                >
                  Support
                </Typography>
              </Stack>
            </Container>
          ) : (
            <Box>
              <Box>
                <IconButton onClick={() => setIsDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={handleCloseDrawer}
                PaperProps={{ sx: { backgroundColor: "white" } }}
              >
                <List
                  sx={{
                    width: { xs: 210, sm: 250, md: 300, lg: 400, xl: 500 },
                  }}
                >
                  <ListItem button onClick={handleCloseDrawer}>
                    <BookOnlineRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "info.dark" }}
                      primary="Find Reservations"
                    />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <Inventory2RoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "info.dark" }}
                      primary="Packages"
                    />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <MenuBookRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "info.dark" }}
                      primary="About Lakshadweep"
                    />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <RssFeedRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "info.dark" }}
                      primary="About Us"
                    />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <MenuBookRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText sx={{ color: "info.dark" }} primary="Gol" />
                  </ListItem>
                  <ListItem button onClick={handleCloseDrawer}>
                    <SupportAgentRoundedIcon
                      sx={{ color: "info.dark", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "info.dark" }}
                      primary="Support"
                    />
                  </ListItem>
                  <Divider variant="middle" />
                  <ListItem button onClick={handleCloseDrawer}>
                    <LogoutRoundedIcon
                      sx={{ color: "warning.main", padding: 2 }}
                    />
                    <ListItemText
                      sx={{ color: "warning.main" }}
                      primary="Logout"
                    />
                  </ListItem>
                </List>
              </Drawer>
            </Box>
          )}
          {matches && (
            <Box sx={{ display: "flex" }}>
              <Button variant="text">Login</Button>
              <Button
                sx={{ borderRadius: 7, height: 45, backgroundColor: "#3282AD" }}
                variant="contained"
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
