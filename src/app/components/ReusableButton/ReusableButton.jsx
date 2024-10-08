import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Make sure the icon is correctly imported
import Link from 'next/link'; // If using Next.js, or you can use a regular anchor for non-Next.js projects

const ReusableButton = ({ text, href }) => {
    return (
        <Link href={href}>
            <div className="coolBeanSecond flex gap-5 items-center group">
                {text} 
                <div className='p-2 rounded-full group-hover:bg-[#172806] bg-[#E7E5E4]'>
                    <ArrowForwardIcon sx={{ fontSize: '30px' }} className='text-[#172806] group-hover:text-[#E7E5E4]' />
                </div>
            </div>
        </Link>
    );
};

export default ReusableButton;
