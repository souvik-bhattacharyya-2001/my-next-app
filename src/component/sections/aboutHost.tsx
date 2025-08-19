import { Box, Typography, Button, Stack } from "@mui/material";

export default function AboutHost() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "581px",
        px: "64px",
        py: "169px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "80px",
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
