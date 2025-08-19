"use client";

import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const drawerWidth = 240;

export default function Header() {
  const navItems = [
    {
      name: "Home",
      route: "/",
      subitem: [],
    },
    {
      name: "Experiences",
      route: "#",
      subitem: [],
    },
    {
      name: "Guide",
      route: "/",
      subitem: [],
    },
    {
      name: "Itineraries",
      route: "/",
      subitem: [],
    },
    {
      name: "FAQ",
      route: "/",
      subitem: [],
    },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="MenuDrawerWrapper">
      <Button
        type="button"
        onClick={handleDrawerToggle}
        className="menuCloseIcon"
      >
        {/* <CloseIcon /> */}
      </Button>

      <Link href="/" className="headerLogoMobile">
        <Image src="/logo.svg" width={166} height={33} alt="Logo" />
      </Link>

      <List>
        {navItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <Link href={item?.route} className="drawerLink">
              {item.name}
            </Link>
          </ListItem>
        ))}
        <ListItem>
          <Button
            style={{
              backgroundColor: "#2c4b3f",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
              minWidth: "160px",
              marginTop: "10px",
            }}
          >
            Book a call
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar>
            <Link href="/" className="headerLogo">
              <Image src="/logo.svg" width={166} height={33} alt="Logo" />
            </Link>

            <Box
              sx={{ display: { xs: "none", md: "block" } }}
              className="navbar"
            >
              <List disablePadding>
                {navItems.map((item, index) => (
                  <ListItem disablePadding key={index}>
                    <Link href={item?.route}>{item?.name}</Link>
                  </ListItem>
                ))}
                <ListItem>
                  <Button
                    style={{
                      backgroundColor: "#2c4b3f",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "bold",
                      minWidth: "160px",
                    }}
                  >
                    Book a call
                  </Button>
                </ListItem>
              </List>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: "auto", display: { md: "none" } }}
              className="menuIconBtn"
            >
              <Image src="/burger-bar.png" width={20} height={20} alt="Logo" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
