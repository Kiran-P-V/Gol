import React from "react";
import { Box, IconButton, InputAdornment, TextField, Typography, useMediaQuery } from "@mui/material";
import { Container, Stack } from "@mui/system";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

export const FlightSelection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");

  return (
    <>
      <Container
        sx={{
          marginTop: 14,
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          marginLeft: !isSmallScreen && "173px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Where are you flying?</Typography>
      </Container>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 3, sm: 2, md: 4 }}
        >
          <TextField
            sx={{ width: 400 }}
            id="outlined-basic"
            label="From - To"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SyncAltIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField id="outlined-basic" label="Trip" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Depart - Return"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Passenger - Class"
            variant="outlined"
          />
        </Stack>
      </Box>
    </>
  );
};
