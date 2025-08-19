"use client";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const infoItems = [
  { icon: "location.svg", label: "Location", value: "Kaleki" },
  { icon: "time.svg", label: "Duration", value: "Morning 9-12" },
  { icon: "people.svg", label: "Escapees", value: "8" },
  { icon: "bag.svg", label: "Type of trip", value: "Private" },
  { icon: "globe.svg", label: "Category", value: "Full day trip" },
];

export default function InfoSection() {
  return (
    <Grid container justifyContent="center">
      <Box
        sx={{
          width: "100%",
          p: "10px 27px",
          borderRadius: "32px",
          border: "2px solid #e0dcd1",
          backgroundColor: "transparent",
          mt: 4,
          textAlign: "center",
        }}
      >
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          {infoItems.map((item, index) => (
            <Grid
              key={index}
              size={{ lg: 2.4, md: 4, xs: 12, sm: 6 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: 243,
                  height: 110,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  p: "10px",
                  backgroundColor: "transparent",
                  borderRight:
                    index !== infoItems.length - 1
                      ? "2px solid #e0dcd1"
                      : "none",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: "'Open Sauce Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "120%",
                      letterSpacing: 0,
                      color: "#333",
                      textAlign: "left",
                    }}
                  >
                    {item.label}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'Open Sauce Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "23px",
                      lineHeight: "120%",
                      letterSpacing: 0,
                      color: "#555",
                      textAlign: "left",
                    }}
                  >
                    {item.value}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
}
