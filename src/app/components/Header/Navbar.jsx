"use client";
import React, { useState } from 'react';
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
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
const MyCustomButton = dynamic(() => import('../CustomButton/CustomButton'), {
  ssr: false, // Disable server-side rendering for this component
});
import Link from 'next/link';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname(); // Get the current path

  // Page links
  const pages = ['Home', 'About', 'Services', 'Blog'];

  // Open/close drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Drawer content
  const drawer = (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        pt: 3,
        pr:2
      }}
      role="presentation"
    >
      {/* Close button at top right */}
      <IconButton
        edge="end"
        onClick={toggleDrawer(false)}
        sx={{ alignSelf: 'flex-end', padding: 2 }}
      >
        <CloseIcon />
      </IconButton>

      {/* Pages list */}
      <List>
        {pages.map((page, index) => (
          <ListItem button key={index} onClick={toggleDrawer(false)}>
            <ListItemText primary={page} />
          </ListItem>
        ))}
      </List>

      {/* Contact Us button at the bottom */}
      <Box sx={{ padding: 2 }}>
        <Button variant="contained" color="primary" fullWidth>
          Contact Us
        </Button>
      </Box>
    </Box>
  );

  return (

    <AppBar position={`${isMobile ? 'fixed': 'static'}`} sx={{ backgroundColor: '#172806', color: '#afe57f', height: '80px' , boxShadow: "none"}}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ justifyContent: 'space-between' ,alignContent: 'center', alignItems: 'center' , mt:1}}>
          {/* Logo on the left */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          {/* Page links (for desktop only) */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'start' }}>
              <div className='flex justify-between gap-10'>
              {pages.map((page, index) => (
                <Link cla href={`/${page.toLowerCase()}`} key={index} style={{
                  margin: '0 8px',
                  color: pathname === `/${page.toLowerCase()}` ? 'white' : '#afe57f', // Check if the current path matches
                }} className='text-xl font-semibold hover:text-white'>
                  {page}
                </Link>
              ))}
              </div>
            </Box>
          )}

          {/* Contact Us button (desktop only) */}
          {!isMobile && (
            <MyCustomButton text="Contact Us" href="/contact" />
           
          )}

          {/* Hamburger icon (mobile only) */}
          {isMobile && (
            <IconButton edge="end" onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ style: { height: '50vh' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
