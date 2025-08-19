"use client";

import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Accordion Data
const accordionData = [
  {
    title: "Where will we meet?",
    content: (
      <Box>
        {/* Map */}
        <Box sx={{ mb: 2 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31519.7034646285!2d115.2480519158707!3d-8.506955193869867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f4f2e22b6bb%3A0x3027a76e352b6a0!2sUbud%2C%20Gianyar%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1674567890123!5m2!1sen!2sid"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>

        {/* Details */}
        <Typography sx={{ mb: 1 }}>
          <strong>Pickup & Drop-off Location:</strong> Your hotel or villa
          within Ubud, Canggu, Seminyak, or Sanur areas
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Pickup Time:</strong> 7:30 AM – We’ll confirm the exact time
          based on your location
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Drop-off Time:</strong> Around 4:30 PM (depending on traffic
          and group pace)
        </Typography>
        <Typography>
          <strong>Private Transfers:</strong> Clean, air-conditioned vehicle
          with a friendly local driver
        </Typography>
      </Box>
    ),
  },
  {
    title: "Start and Ends",
    content: (
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Typography>
    ),
  },
  {
    title: "Suitability / Accessibility",
    content: (
      <Typography>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type
      </Typography>
    ),
  },
  {
    title: "Cancellation and other policies",
    content: <Typography>lorem ipsum</Typography>,
  },
  {
    title: "What to Pack?",
    content: (
      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        <li>Comfortable shoes</li>
        <li>Sun protection (hat, sunscreen, sunglasses)</li>
        <li>Light jacket in case of rain</li>
        <li>Camera for memories</li>
      </ul>
    ),
  },
];

const AdditionalAccordian = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
      {/* Header */}
      <Typography
        variant="h6"
        sx={{
          paddingTop: "40px",
          color: "#384B40",
          fontFamily: "Open Sauce Sans, sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          lineHeight: "120%",
          letterSpacing: "0%",
          mb: 3,
        }}
      >
        Additional Information
      </Typography>

      {/* Map Accordions */}
      {accordionData.map((item, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                fontFamily: "Open Sauce Sans, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "150%",
                color: "#384B40",
              }}
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              fontFamily: "Open Sauce Sans, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              color: "#000000",
            }}
          >
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AdditionalAccordian;
