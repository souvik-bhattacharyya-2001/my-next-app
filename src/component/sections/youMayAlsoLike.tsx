"use client";
import {
  Box,
  Grid,
  Typography,
  Button,
  Chip,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Image from "next/image";

const cardItems = [
  {
    img: "/like1.png",
    tags: ["Canggu", "Half Day Trip", "Private"],
    title: "Surf in Canggu",
    price: "IDR 35,000,000/person",
    desc: "Wake up, grab your board and head to the beach while it's still quiet. Catch your first wave with someone who knows the surf.",
  },
  {
    img: "/like2.png",
    tags: ["Canggu", "Half Day Trip", "Private/Group"],
    title: "Balinese Healing Retreat",
    price: "IDR 60,000,000/person",
    desc: "Relax your body, mind, and heart in a healing space designed to rejuvenate you completely.",
  },
  {
    img: "/like3.png",
    tags: ["Canggu", "Full Day Trip", "Private"],
    title: "Balinese Day with a Local Family",
    price: "IDR 15,000,000/person",
    desc: "Slow down, explore rice fields, and learn traditional coconut oil making. Experience Bali with soul.",
  },
];

export default function YouMayAlsoLike() {
  const chipColors = ["#384B40", "#407C59", "#FDF3E8"];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#F0F4EF" }}>
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 14 }, backgroundColor: "transparent" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Open Sauce Sans', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "36px", md: "52px" },
            lineHeight: "120%",
            letterSpacing: 0,
            textAlign: "center",
            color: "#384B40",
            py: { xs: 4, md: 6 },
            px: 2,
            borderRadius: 2,
          }}
        >
          You may also like
        </Typography>

        {/* Cards Grid */}
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
            {cardItems.map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    width: 416,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-8px)" },
                  }}
                >
                  {/* Image */}
                  <CardMedia sx={{ height: 200, position: "relative" }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </CardMedia>

                  {/* Tags */}
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", p: 2 }}>
                    {item.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: chipColors[i % 3],
                          color:
                            chipColors[i % 3] === "#FDF3E8"
                              ? "#000000"
                              : "#ffffff",
                          fontWeight: 500,
                          fontSize: "12px",
                        }}
                      />
                    ))}
                  </Box>

                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1, px: 2, pt: 0 }}>
                    <Typography
                      sx={{
                        fontFamily: "'Open Sauce Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "24px",
                        lineHeight: "140%",
                        letterSpacing: 0,
                        color: "#000",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        wordBreak: "break-word",
                        textAlign: "left",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Open Sauce Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "22px",
                        lineHeight: "140%",
                        letterSpacing: 0,
                        color: "#407C59",
                        textAlign: "left",
                        height: 31,
                        maxWidth: 392,
                        paddingRight: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      From {item.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Open Sauce Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#555",
                        mt: 1,
                        lineHeight: 1.6,
                        textAlign: "left",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>

                  {/* Buttons */}
                  <CardActions sx={{ display: "flex", gap: 1, px: 2, pb: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#384B40",
                        color: "#fff",
                        textTransform: "none",
                        flex: 1,
                        "&:hover": { backgroundColor: "#2f3b33" },
                      }}
                    >
                      Book Escape
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#384B40",
                        borderColor: "#384B40",
                        flex: 1,
                        "&:hover": {
                          borderColor: "#2f3b33",
                          color: "#2f3b33",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
