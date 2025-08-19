import { Box, Typography, Button, Stack } from "@mui/material";

export default function AboutHost() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "400px", md: "581px" },
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 8, md: 21 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-between" },
        gap: { xs: 4, md: 10 },
        backgroundImage: `url('/aboutTheHost.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text Section */}
      <Box sx={{ maxWidth: "600px" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#FFFFFF",
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "24px", sm: "32px", md: "36px" },
          }}
        >
          About the Host
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontWeight: 400,
            mb: 4,
            fontSize: "16px",
            lineHeight: "28px",
          }}
        >
          I have spent 6+ years discovering the real Bali—what most people never
          get to see. I created BaliwithFlow to share that magic with escapees
          who crave meaning, depth, and effortless beauty in every detail.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FFA500", color: "#FFFFFF" }}
          >
            Book Escape
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
          >
            Plan personal trip
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
