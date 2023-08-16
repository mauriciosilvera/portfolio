'use client';

import React from 'react';
import './globals.css';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import { profileData } from '@/constants';

function RootLayout({ children }) {
  return (
    <html lang="en" className="flex justify-center dark">
      <motion.body
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-screen h-screen overflow-x-hidden flex items-center flex-col bg-violet lg:flex-row lg:justify-center xl:w-10/12"
      >
        <section className="flex flex-col items-center w-11/12 lg:w-2/5 lg:h-[85%] lg:justify-start">
          <div className="min-h-[20%] my-5 hidden lg:block" />
          <ProfileCard data={profileData} />
        </section>
        <section className="flex flex-col items-center justify-end lg:h-[85%] lg:w-3/5 xl:w-2/3 lg:mr-3 lg:items-end lg:justify-start">
          <Header />
          {children}
        </section>
      </motion.body>
    </html>
  );
}

export default RootLayout;
