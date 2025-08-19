"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const DiscoverCulture = () => {
  const listItems = [
    { icon: "/diamond.png", text: "Walk through the rice fields with Tiwi" },
    { icon: "/leaf.png", text: "Learn how to make offerings & coconut oil" },
    { icon: "/love.png", text: "Cook & enjoy an authentic Balinese lunch" },
    {
      icon: "/explor.png",
      text: "Option to stay overnight in the family home",
    },
    { icon: "/explor.png", text: "The host speaks French and English" },
  ];

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          paddingTop: "40px",
          fontFamily: "'Open Sauce Sans', sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          color: "#384B40",
          mb: 0,
        }}
      >
        Discover Local Culture with a Balinese Family (Tiwi)
      </Typography>

      {/* List */}
      <Box
        component="ul"
        sx={{
          pl: 0,
          mt: "16px",
          mb: 0,
          listStyle: "none",
        }}
      >
        {listItems.map((item, index) => (
          <Box
            key={index}
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
            <Image
              src={item.icon}
              alt={`icon-${index}`}
              width={24}
              height={24}
            />
            {item.text}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default DiscoverCulture;
