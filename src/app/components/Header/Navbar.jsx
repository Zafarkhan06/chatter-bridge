"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import chatterlogo from "../../../../public/asset/black-logo.png";
import Image from "next/image";
// const MyCustomButton = dynamic(() => import('../CustomButton/CustomButton'), {
//   ssr: false, // Disable server-side rendering for this component
// });
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname(); // Get the current path
  const [clientPathname, setClientPathname] = useState("");

  useEffect(() => {
    setClientPathname(pathname); // Set the client-side pathname
  }, [pathname]);
  // Page links
  const pages = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact us", path: "/contact" },
  ];

  // Open/close drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Drawer content
  const drawer = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        pt: 3,
        px: 3,
        backgroundColor: "#E7E5E4",
      }}
      role="presentation"
    >
      {/* Close button at top right */}
      <IconButton
        edge="end"
        onClick={toggleDrawer(false)}
        sx={{ alignSelf: "flex-end" }}
      >
        <CloseIcon sx={{color: "#192128"}} />
      </IconButton>

      {/* Pages list */}
      <List>
        {pages.map((page, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-stretch mt-3"
          >
            <Link
              onClick={toggleDrawer(false)}
              href={page.path} // Use the path from the object
              style={{
                color: clientPathname === page.path ? "#192128" : "#444c58",
              }}
              className="text-xl font-medium hover:text-[#E7E5E4]"
            >
              {page.name}
            </Link>
          </div>
        ))}
      </List>

      {/* Contact Us button at the bottom */}
      <div className="flex justify-center items-center py-2 mt-3">
      <button className="bg-[#444c58] hover:bg-[#192128] text-[#E7E5E4] py-3 rounded-lg text-xl font-semibold w-44">Contact US</button>
      </div>
    </Box>
  );

  return (
    <div className="bg-[#E7E5E4]">
      <AppBar
        position={`${isMobile ? "fixed" : "static"}`}
        sx={{ color: "#66cc8a", backgroundColor: "#E7E5E4", boxShadow: "none", py: 1 }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
           className="flex justify-between items-center"
          >
            {/* Logo on the left */}
            <div className="w-96">
              <Link href="/">
                <Image src={chatterlogo} alt="Chatter" className="w-4/6 md:w-full cursor-pointer" />
              </Link>
            </div>

            {/* Page links (for desktop only) */}
            {!isMobile && (
              <Box className="col-span-2"
                sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
              >
                <div className="flex justify-between gap-10">
                  {pages.map((page, index) => (
                    <Link
                      href={page.path} // Use the path from the object
                      key={index}
                      style={{
                        margin: "0 8px",
                        color:
                          clientPathname === page.path ? "black" : "#192128",
                          fontWeight: clientPathname === page.path ? "600" : "400",
                      }}
                      className="text-xl font-normal hover:text-black hover:font-bold"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Box>
            )}

            {/* Contact Us button (desktop only) */}
            {!isMobile && (
              <div className="flex justify-end">
              <button className="bg-[#444c58] hover:bg-[#192128] text-[#E7E5E4] py-3 rounded-lg text-xl font-semibold w-44">Contact US</button>
              </div>
            )}

            {/* Hamburger icon (mobile only) */}
            {isMobile && (
              <IconButton
                edge="end"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon sx={{fontSize: "40px", color: "#192128"}}/>
              </IconButton>
            )}
          </Toolbar>
        </Container>

        {/* Drawer for mobile view */}
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ style: { height: "35vh" } }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </div>
  );
}
