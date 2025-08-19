"use client";
import React from "react";
import { Box, Grid, Container } from "@mui/material";
import ExperienceDetails from "./introsection";
import BookingForm from "./bookingForm";
import ExperienceHighlights from "./experienceHighlights";
import DiscoverCulture from "./discoverCulture";
import Calender from "./calender";
import AdditionalAccordian from "./additionalAccordian";

export default function ExperienceLayout() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <Container fixed maxWidth="lg" sx={{ py: { xs: 6, md: 14 } }}>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#ffffff",
            maxWidth: "1312px",
            mx: "auto",
          }}
        >
          <Grid container spacing={10} alignItems="flex-start">
            {/* Left Panel */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <ExperienceDetails />
                <ExperienceHighlights />
                <DiscoverCulture />
                <Calender />
                <AdditionalAccordian />
              </Box>
            </Grid>

            {/* Right Panel */}
            <Grid size={{ xs: 12, md: 5 }}>
              <BookingForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
