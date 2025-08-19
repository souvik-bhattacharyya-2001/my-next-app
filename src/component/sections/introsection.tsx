"use client";
import React from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import Image from "next/image";

export default function ExperienceDetails() {
  return (
    <Box component="section" sx={{ bgcolor: "#fff" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Open Sauce Sans', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "24px", md: "32px" },
          lineHeight: "120%",
          color: "#384B40",
          mb: 2,
        }}
      >
        Experience a Day with a Balinese Family
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Open Sauce Sans', sans-serif",
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "150%",
          color: "#000",
          mb: 2,
        }}
      >
        Slow down. Watch the light move across the rice fields. Learn how to
        make coconut oil the way it’s been done for generations. This is Bali
        with soul — the part you don’t find in guidebooks.
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Open Sauce Sans', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "150%",
          color: "#384B40",
          mb: 2,
        }}
      >
        How can I connect with locals without it feeling forced or touristy?
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Open Sauce Sans', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "150%",
          color: "#000",
          mb: 3,
        }}
      >
        You spend a day with Tiwi and her family. You help make offerings, walk
        their land, cook lunch together, and share stories. No performance. Just
        presence.
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Open Sauce Sans', sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "120%",
          color: "#384B40",
          mb: 2,
        }}
      >
        What’s included?
      </Typography>

      {/* List */}
      <Box component="ul" sx={{ pl: 0, mb: 3, listStyle: "none" }}>
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mb: "12px",
            fontSize: "18px",
            lineHeight: "150%",
            fontFamily: "'Open Sauce Sans', sans-serif",
            color: "#000",
          }}
        >
          <Image src="/diamond.png" alt="Rice field" width={24} height={24} />
          Walk through the rice fields with Tiwi
        </Box>
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mb: "12px",
            fontSize: "18px",
            lineHeight: "150%",
            fontFamily: "'Open Sauce Sans', sans-serif",
            color: "#000",
          }}
        >
          <Image src="/leaf.png" alt="Diamond" width={24} height={24} />
          Learn how to make offerings & coconut oil
        </Box>
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mb: "12px",
            fontSize: "18px",
            lineHeight: "150%",
            fontFamily: "'Open Sauce Sans', sans-serif",
            color: "#000",
          }}
        >
          <Image src="/love.png" alt="Love" width={24} height={24} />
          Cook & enjoy an authentic Balinese lunch
        </Box>
        <Box
          component="li"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mb: "12px",
            fontSize: "18px",
            lineHeight: "150%",
            fontFamily: "'Open Sauce Sans', sans-serif",
            color: "#000",
          }}
        >
          <Image src="/explor.png" alt="Explore" width={24} height={24} />
          Option to stay overnight in the family home
        </Box>
      </Box>

      {/* Tags */}
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Chip
          icon={
            <Image src="/locationWhite.svg" alt="time" width={16} height={16} />
          }
          label="Village near Ubud"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#ffffff",
            bgcolor: "#384B40",
            height: "30px",
            borderRadius: "16px",
            px: "12px",
            py: "6px",
            gap: "8px",
            fontFamily: "'Open Sauce Sans', sans-serif",
            "& .MuiChip-icon": {
              marginLeft: 0,
              marginRight: "2px",
              color: "inherit",
            },
          }}
        />
        <Chip
          icon={
            <Image src="/timeWhite.svg" alt="time" width={16} height={16} />
          }
          label="9am - 12pm"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#ffffff",
            bgcolor: "#384B40",
            height: "30px",
            borderRadius: "16px",
            px: "12px",
            py: "6px",
            gap: "8px",
            fontFamily: "'Open Sauce Sans', sans-serif",
            "& .MuiChip-icon": {
              marginLeft: 0,
              marginRight: "2px",
              color: "inherit",
            },
          }}
        />
        <Chip
          icon={
            <Image src="/tripWhite.svg" alt="time" width={16} height={16} />
          }
          label="Photo"
          sx={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#ffffff",
            bgcolor: "#384B40",
            height: "30px",
            borderRadius: "16px",
            px: "12px",
            py: "6px",
            gap: "8px",
            fontFamily: "'Open Sauce Sans', sans-serif",
            "& .MuiChip-icon": {
              marginLeft: 0,
              marginRight: "2px",
              color: "inherit",
            },
          }}
        />
      </Stack>
    </Box>
  );
}
