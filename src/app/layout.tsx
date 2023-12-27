import React from "react";
import "./globals.css";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import ThemeProvider from "./theme-provider";

function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className="flex justify-center">
        <body className="w-screen h-screen text-gray-800 dark:text-gray-50 overflow-x-hidden flex items-center flex-col bg-background dark:bg-violet lg:flex-row lg:justify-center xl:w-10/12">
          <section className="flex flex-col items-center w-11/12 lg:w-2/5 lg:h-[85%] lg:justify-start">
            <div className="min-h-[20%] my-5 hidden lg:block" />
            <ProfileCard />
          </section>
          <section className="w-11/12 flex flex-col items-center justify-end lg:h-[85%] lg:w-3/5 xl:w-2/3 lg:mr-3 lg:items-end lg:justify-start">
            <Header />
            {children}
          </section>
        </body>
      </html>
    </ThemeProvider>
  );
}

export const metadata = {
  title: "Mauricio Silvera",
};

export default RootLayout;