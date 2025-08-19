"use client";

import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";

const NextAvailableDates = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());

  const slots = [
    "09:00 am - 12:00 pm",
    "12:00 pm - 03:00 pm",
    "03:00 pm - 06:00 pm",
    "06:00 pm - 09:00 pm",
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        {/* Title */}
        <Typography
          sx={{
            fontFamily: "'Open Sauce Sans', sans-serif",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "120%",
            color: "#384B40",
            mb: 3,
            textAlign: "left",
            paddingTop: "40px",
          }}
        >
          Next Available Dates
        </Typography>

        {/* Calendar */}
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          sx={{
            "& .MuiPickersDay-root": {
              fontFamily: "'Open Sauce Sans', sans-serif",
              fontSize: "16px",
            },
            "& .Mui-selected": {
              backgroundColor: "#407C59 !important",
              color: "#fff",
            },
            "&.MuiDateCalendar-root": {
              margin: 0,
              justifyContent: "flex-start",
            },
            "& .MuiPickersCalendarHeader-label": {
              color: "#000",
              fontWeight: 600,
              fontSize: "16px",
              fontFamily: "'Open Sauce Sans', sans-serif",
            },
            "& .MuiPickersArrowSwitcher-button": {
              color: "#000",
            },

            "& .MuiPickersYear-yearButton": {
              color: "#000",
            },
            "& .MuiPickersMonth-monthButton": {
              color: "#000",
            },
          }}
        />

        {/* Available Slots */}
        {selectedDate && (
          <Box mt={3}>
            <Typography
              sx={{
                fontFamily: "'Open Sauce Sans', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "140%",
                mb: 2,
                color: "#384B40",
                textAlign: "left",
              }}
            >
              Book slot for {selectedDate.format("MMMM D")}
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={2}>
              {slots.map((slot, i) => (
                <Button
                  key={i}
                  variant="outlined"
                  sx={{
                    width: "180px",
                    height: "39px",
                    padding: "6px 12px",
                    borderRadius: "16px",
                    borderWidth: "1px",
                    borderColor: "#000",
                    textTransform: "none",
                    fontFamily: "'Open Sauce Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "150%",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      borderColor: "#000",
                      backgroundColor: "rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  {slot}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default NextAvailableDates;
