"use client";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Rating,
  Grid,
} from "@mui/material";

const testimonials = [
  {
    name: "Emily & Josh",
    role: "Newlyweds, NYC",
    avatar: "/image1.png",
    text: "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike I’ll never forget — every detail felt like it was made for us. I didn’t worry once. It was honestly the best week of our lives.",
  },
  {
    name: "Lena Ray",
    role: "Solo Traveler, Berlin",
    avatar: "/image2.png",
    text: "I booked a few day trips to get out of Canggu and wow… life-changing. I saw a sunrise from the top of a volcano, had lunch with a local family, and worked from a bamboo treehouse with the best WiFi I’ve had in months. Totally inspired.",
  },
  {
    name: "Thomas",
    role: "First-Time Visitor, London",
    avatar: "/image3.png",
    text: "Flora’s guide made everything so easy. It’s like your well-traveled best friend whispering in your ear: ‘Skip that, go here, trust me.’ I downloaded it the night before my flight and felt totally ready. Worth 10x the price.",
  },
];

export default function Testimonials() {
  return (
    <Box component="section" sx={{ backgroundColor: "#fdf6eb" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 14 } }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "left", mb: 10 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#274230",
              lineHeight: 1.3,
              fontfamily: "Open Sauce Sans",
            }}
          >
            What our escapees say about us
          </Typography>
          <Typography
            sx={{
              fontfamily: "Open Sauce Sans",
              textAlign: "left",
              color: "#274230",
              fontSize: 18,
              maxWidth: 985,
              mb: 6,
            }}
          >
            See how escapees from around the world experienced the real Bali —
            curated with care, heart, and local soul.
          </Typography>
        </Box>

        {/* Testimonials Cards */}
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((t, index) => (
            <Grid size={{ xs: 12, md: 4, sm: 6 }} key={index}>
              <Box
                sx={{
                  fontfamily: "Open Sauce Sans",
                  textAlign: "left",
                  width: "100%",
                  maxWidth: 416,
                  height: 436.89,
                  p: "42px 24px",
                  gap: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "30px",
                  border: "4px solid #3E2B2B1A",
                  backgroundColor: "#ffffff",
                  opacity: 1,
                  boxSizing: "border-box",
                }}
              >
                {/* Rating */}
                <Rating value={5} readOnly size="small" />

                {/* Testimonial Text */}
                <Typography
                  sx={{
                    textAlign: "left",
                    flexGrow: 1,
                    fontSize: 14,
                    color: "#333333",
                    lineHeight: 1.6,
                    fontfamily: "Open Sauce Sans",
                  }}
                >
                  {t.text}
                </Typography>

                {/* Author */}
                <Box
                  sx={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 0.5,
                    fontfamily: "Open Sauce Sans",
                  }}
                >
                  <Avatar
                    src={t.avatar}
                    alt={t.name}
                    sx={{ width: 56, height: 56, border: "2px solid #274230" }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#274230",
                      mt: 1,
                    }}
                  >
                    {t.name}
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: "#666666" }}>
                    {t.role}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
