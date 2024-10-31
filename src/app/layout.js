import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import './globals.css';
import theme from './theme.js';
import { Container } from '@mui/material';
import Navbar from "@/app/components/Header/Navbar";
import Footer from './components/Footer/Footer';
import {Work_Sans} from 'next/font/google';

const montserrat = localFont({
  src: './fonts/PlayfairDisplay-VariableFont_wght.ttf',
  variable: '--font-geist-sans',
  weight: '100 900',
});
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });
// Import Playfair Display from Google Fonts
const Ubuntus = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'The Chatter Bridge',
  description: 'Growing your business Has never been easier',
   // Add this to preload the font
   link: [
    {
      rel: 'preload',
      href: '/fonts/PlayfairDisplay-VariableFont_wght.ttf',
      as: 'font',
      type: 'font/ttf',
      crossOrigin: 'anonymous',
    },
  ],
};

export default function RootLayout({ children }) {
  console.log("play fair",Ubuntus);
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${Ubuntus.className} antialiased`}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Navbar />
          {/* <Container maxWidth="lg" disableGutters> */}
            {children}
            <Footer />
            {/* </Container> */}
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
