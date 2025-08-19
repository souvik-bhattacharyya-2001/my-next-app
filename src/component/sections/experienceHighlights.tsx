"use client";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const highlights = [
  { img: "/slideOne.png", title: "Balinese Day with local family" },
  { img: "/bannerThird.png", title: "Visit local temples" },
  { img: "/slideOne.png", title: "Balinese Day with local family Demo1" },
  { img: "/bannerThird.png", title: "Visit local temples  Demo1" },
  { img: "/slideOne.png", title: "Balinese Day with local family  Demo2" },
  { img: "/bannerThird.png", title: "Visit local temples  Demo2" },
  { img: "/slideOne.png", title: "Balinese Day with local family  Demo3" },
  { img: "/bannerThird.png", title: "Visit local temples  Demo3" },
];

const ExperienceHighlights = () => (
  <Box sx={{ mt: 8, width: "100%", maxWidth: "657px" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Typography
        fontWeight={600}
        sx={{
          fontFamily: "'Open Sauce Sans', sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "120%",
          letterSpacing: "0px",
          color: "#384B40",
          width: "350px",
          height: "38px",
        }}
      >
        Experience Highlights
      </Typography>

      <Box sx={{ display: "flex", gap: 3 }}>
        <IconButton
          className="swiper-button-prev"
          sx={{ bgcolor: "transparent" }}
        >
          <Image src="/leftArrow.png" height={32} width={32} alt="left arrow" />
        </IconButton>
        <IconButton
          className="swiper-button-next"
          sx={{ bgcolor: "transparent" }}
        >
          <Image
            src="/rightArrow.png"
            height={32}
            width={32}
            alt="right arrow"
          />
        </IconButton>
      </Box>
    </Box>

    {/* Swiper Slider */}
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={1.2}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      grid={{ rows: 2, fill: "row" }}
      breakpoints={{
        600: { slidesPerView: 2, grid: { rows: 2 } },
        900: { slidesPerView: 2, grid: { rows: 2 } },
      }}
      style={{ paddingBottom: "32px" }}
    >
      {highlights.map((item, index) => (
        <SwiperSlide key={index}>
          <Card
            sx={{
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={item.img}
              alt={item.title}
              sx={{
                width: "318px",
                height: "380px",
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ p: 2 }}>
              <Typography
                sx={{
                  fontFamily: "'Open Sauce Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#000",
                }}
              >
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
);

export default ExperienceHighlights;
