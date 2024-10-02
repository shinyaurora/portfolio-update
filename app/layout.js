import localFont from "next/font/local";
import "./globals.css";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import Navigator from "@/components/navigator";
import AnimateBackground from "@/components/animebg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnimateBackground />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div className="bg-center bg-auto h-screen w-full" style={{ backgroundImage: 'url(/back3.jpg)' }}>
            <div className="h-full w-full bg-black/50 ">
              {children}
              <Navigator />
            </div>
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}