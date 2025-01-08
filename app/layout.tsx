import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { Inter } from "next/font/google";
import { MyContextProvider } from "./context/MyContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "WhatBytes",
  description: "A single-page layout with Header, Sidebar, and Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/whatbytes.jpg" />
      </head>
      <body>
        <MyContextProvider>
          <Header />
          <div className="xl:grid xl:grid-cols-[15rem_auto] h-screen flex flex-col ">
            <Sidebar />
            <main>{children}</main>
          </div>
          <ToastContainer position="top-right" autoClose={5000} />
        </MyContextProvider>
      </body>
    </html>
  );
}
