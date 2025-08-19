"use client";
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Autocomplete,
} from "@mui/material";

export default function BookingForm() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "auto" },
        height: { xs: "auto", md: "auto" },
        background: "#FDF3E8",
        borderRadius: "18.4px",
        boxShadow: "3px 4px 0px 0px #E87A4E",
        p: "53.67px 30.67px",
        display: "flex",
        flexDirection: "column",
        gap: "24.53px",
        position: { md: "sticky" },
        top: 24,
      }}
    >
      {/* Rating */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ color: "#f5a623", fontSize: "20px" }}>
          ★★★★★
        </Typography>
        <Typography sx={{ ml: 1, color: "#444" }}>4.9 (120)</Typography>
      </Box>

      {/* Price */}
      <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#384B40" }}>
        From IDR 150,000.00 / Person
      </Typography>

      <Typography
        sx={{
          fontSize: "19px",
          color: "#9D9D9D",
          textDecoration: "underline",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        Show Prices
      </Typography>

      {/* Form */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24.53px",
          flex: 1,
        }}
      >
        {/* Guests */}
        <FormControl fullWidth>
          <Autocomplete
            disablePortal
            options={["1 Guest", "2 Guest", "3 Guest"]}
            renderInput={(params) => <TextField {...params} label="Guests" />}
          />
        </FormControl>

        {/* Date */}
        <TextField type="date" fullWidth InputLabelProps={{ shrink: true }} />

        {/* Add-ons */}
        <FormControl fullWidth>
          <Autocomplete
            disablePortal
            options={["Test", "Demo", "Testing"]}
            renderInput={(params) => (
              <TextField {...params} label="Select Add ons" />
            )}
          />
        </FormControl>

        {/* Reserve Button */}
        <Button
          variant="contained"
          sx={{
            width: "165.9px",
            height: "36.4px",
            padding: "9.2px 15.33px",
            borderRadius: "12.27px",
            border: "0.77px solid #384B40",
            backgroundColor: "#384B40",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            justifyContent: "flex-start",
            "&:hover": {
              backgroundColor: "#2e3d34",
            },
          }}
        >
          Reserve for free →
        </Button>
      </Box>
    </Box>
  );
}
