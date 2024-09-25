"use client";
import React, { useState, useEffect } from 'react';
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
// const MyCustomButton = dynamic(() => import('../CustomButton/CustomButton'), {
//   ssr: false, // Disable server-side rendering for this component
// });
import Link from 'next/link';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname(); // Get the current path
  const [clientPathname, setClientPathname] = useState('');

  useEffect(() => {
    setClientPathname(pathname); // Set the client-side pathname
  }, [pathname]);
  // Page links
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
  ];

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
        justifyContent: 'flex-start',
        pt: 3,
        px: 3,
        backgroundColor: '#afe57f',
      }}
      role="presentation"

    >
      {/* Close button at top right */}
      <IconButton
        edge="end"
        onClick={toggleDrawer(false)}
        sx={{ alignSelf: 'flex-end', }}
      >
        <CloseIcon />
      </IconButton>

      {/* Pages list */}
      <List>
        {pages.map((page, index) => (
          <div key={index} className='flex flex-col justify-between items-stretch mt-3'>
            <Link
              onClick={toggleDrawer(false)}
              href={page.path} // Use the path from the object
              style={{
                color: clientPathname === page.path ? 'white' : '#172806',
              }}
              className='text-xl font-semibold hover:text-white'
            >
              {page.name}
            </Link>
          </div>
        ))}
      </List>

      {/* Contact Us button at the bottom */}
      <div className='flex justify-center items-center py-2 mt-3'>
        <button className='coolBeans w-full'>
          Contact US
        </button>
      </div>
    </Box>
  );

  return (
    <div className='bg-[#172806] py-4'>
      <AppBar position={`${isMobile ? 'fixed' : 'static'}`} sx={{ color: '#afe57f', backgroundColor: "#172806", boxShadow: "none" }}>
        <Container maxWidth="xl" disableGutters>
          <Toolbar sx={{ justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', }}>
            {/* Logo on the left */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>

            {/* Page links (for desktop only) */}
            {!isMobile && (
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'start' }}>
                <div className='flex justify-between gap-10'>
                  {pages.map((page, index) => (
                    <Link
                      href={page.path} // Use the path from the object
                      key={index}
                      style={{
                        margin: '0 8px',
                        color: clientPathname === page.path ? 'white' : '#afe57f',
                      }}
                      className='text-xl font-semibold hover:text-white'
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Box>
            )}

            {/* Contact Us button (desktop only) */}
            {!isMobile && (
              <button className='coolBeans w-44'>
                Contact US
              </button>

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
          PaperProps={{ style: { height: '35vh' } }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </div>
  );
}
