import { GoogleOAuthProvider } from '@react-oauth/google';
import { SessionProvider } from "next-auth/react"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
        <SessionProvider>
          <body>{children}</body>
        </SessionProvider>
      </GoogleOAuthProvider>
    </html>
  );
}
