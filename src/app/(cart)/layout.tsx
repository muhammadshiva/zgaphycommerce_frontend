import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/molecules/header/header";
import Footer from "@/components/molecules/footer/footer";
import ReduxProvider from "@/providers/redux";
import { Toaster } from "@/components/atomics/toaster";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zgaphy World",
  description: "Find Glorious Living And Loving Space",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <div>{children}</div>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
