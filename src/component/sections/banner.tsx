"use client";
import { Container, Grid, Box, Typography } from "@mui/material";
import InfoSection from "./infoItems";
import ExperienceDetails from "./experienceDetails";
import YouMayAlsoLike from "./youMayAlsoLike";
import Testimonials from "./testimonials";
import AboutHost from "./aboutHost";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <section
        style={{
          backgroundColor: "#fdf4e7",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        {/* Image grid */}
        <Container fixed>
          <Grid container spacing={2}>
            <Grid size={{ lg: 3, md: 6, xs: 12 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <Box className="banner_image_wrapper">
                    <Image
                      src="/bannerFirst.png"
                      alt="Balinese field"
                      width={500}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Box className="banner_image_wrapper">
                    <Image
                      src="/bannerSecond.png"
                      alt="Balinese field"
                      width={500}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ lg: 3, md: 6, xs: 12 }}>
              <Box className="banner_image_wrapper">
                <Image
                  src="/bannerthird.png"
                  alt="Temple"
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid size={{ lg: 3, md: 6, xs: 12 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <Box className="banner_image_wrapper">
                    <Image
                      src="/bannerFourth.png"
                      alt="Balinese field"
                      width={500}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Box className="banner_image_wrapper">
                    <Image
                      src="/bannerFifth.png"
                      alt="Balinese field"
                      width={500}
                      height={300}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ lg: 3, md: 6, xs: 12 }}>
              <Box className="banner_image_wrapper">
                <Image
                  src="/bannersix.png"
                  alt="Temple"
                  width={500}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Title & description */}
        <Box
          sx={{
            py: 4,
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Open Sauce Sans', sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: "52px",
              lineHeight: "120%",
              letterSpacing: 0,
              color: "#384B40",
            }}
          >
            Balinese Day with a Local Family
          </Typography>
        </Box>
        <Box
          sx={{
            width: 768,
            height: 81,
            opacity: 1,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            mb: 4,
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Open Sauce Sans', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: 0,
              color: "#000000",
            }}
          >
            Immerse yourself in the heart of Balinese culture by spending a day
            with a local family. This authentic experience offers a unique
            glimpse into daily life, traditions, and the warmth of Balinese
            hospitality.
          </Typography>
        </Box>
        {/* Info cards row */}
        <Container fixed>
          <InfoSection />
        </Container>
      </section>
      <ExperienceDetails />
      <AboutHost />
      <Testimonials />
      <YouMayAlsoLike />
    </>
  );
}
