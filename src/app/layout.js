import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: 'Yasir Irzooqi - Software Engineer',
  description: 'Passionate backend developer specializing in Node.js, Express.js, and MongoDB. Building scalable solutions and empowering communities through technology.',
  keywords: 'Software Engineer, Backend Developer, Node.js, Express.js, MongoDB, JavaScript, Full Stack Developer',
  author: 'Yasir Irzooqi',
  url: 'https://yasirirzooqi.me',
  image: 'https://yasirirzooqi.me/og-image.jpg',
  openGraph: {
    title: 'Yasir Irzooqi - Software Engineer',
    description: 'Passionate backend developer specializing in Node.js, Express.js, and MongoDB.',
    url: 'https://yasirirzooqi.me',
    siteName: 'Yasir Irzooqi Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
