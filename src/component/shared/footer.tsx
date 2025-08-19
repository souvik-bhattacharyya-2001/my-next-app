"use client";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        color: "#fff",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(56, 75, 64, 0.4)",
          zIndex: 1,
        },
        backgroundImage: "url('/footer1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Logo centered */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Box
            component="img"
            src="/logoFooter.png"
            alt="Bali With Flow Logo"
            sx={{ height: 50 }}
          />
        </Box>

        {/* Navigation Links centered under logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
            mb: 3,
          }}
        >
          <Link href="#" underline="none" color="inherit">
            Home
          </Link>
          <Link href="#" underline="none" color="inherit">
            Experiences
          </Link>
          <Link href="#" underline="none" color="inherit">
            Guide
          </Link>
          <Link href="#" underline="none" color="inherit">
            Itineraries
          </Link>
          <Link href="#" underline="none" color="inherit">
            FAQ
          </Link>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            my: 3,
          }}
        />

        {/* Bottom Section: Copyright + Policies */}
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: "center", mb: { xs: 1, md: 0 } }}
          >
            <Typography sx={{ fontSize: 14 }}>
              © 2024 Bali With Flow. All rights reserved.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{ fontSize: 14 }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{ fontSize: 14 }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                sx={{ fontSize: 14 }}
              >
                Cookies Settings
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
