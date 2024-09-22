"use client";
import React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

// Styled component for the button
const CustomButton = styled(Button)(({ theme }) => ({
  padding: '6px 10px 6px 40px',
  borderRadius: '50px', // Rounded border
  backgroundColor: "white",
  color: "red",
  textTransform: 'none', // Prevent text from being uppercased
  fontSize: '16px',
  fontWeight: 500,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: "1px solid #ff6347",
  transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  '&:hover': {
    backgroundColor: "#161a0c", // Change button color on hover
    color: "#bada55",
    border: "1px solid #ff6347",
  },
}));

// Styled component for the arrow icon with a circle
const IconCircle = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  backgroundColor: '#172806', // Circle background color
  marginLeft: '10px',
  '& svg': {
    color: '#ff6347', // Arrow color inside the circle
  },
  '&:hover': {
    backgroundColor: "#bada55", // Change button color on hover
    color: "#bada55"
  },
});

const MyCustomButton = ({ text, href }) => {
  return (
    <div className='group'>
    <Link href={href} passHref>
      <CustomButton
        component="a" // Makes the button act like a link
        className='text-[#afe57f] bg-[#172806] group-hover:text-[#bada55] hover:border hover:border-white flex items-center'
      >
        <span className='pr-5 group-hover:text-white'>{text}</span>
        <IconCircle className='transition-colors group-hover:bg-[#bada55] bg-[#afe57f] group-hover:border group-hover:border-white'>
          <ArrowForwardIcon className='text-[#172806] group-hover:text-white' />
        </IconCircle>
      </CustomButton>
    </Link>
  </div>
  );
};

export default MyCustomButton;
