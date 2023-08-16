'use client';

import React, { useState } from 'react';
import './globals.css';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import { profileData } from '@/constants';

function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark');

  return (
    <html lang="en" className="flex justify-center dark">
      <body className="w-screen h-screen overflow-x-hidden flex items-center flex-col bg-violet lg:flex-row lg:justify-center xl:w-10/12">
        <ProfileCard data={profileData} />
        <section className="flex flex-col items-center justify-end lg:h-[85%] lg:w-[60%] xl:w-2/3 lg:mr-3 lg:items-end lg:justify-start">
          <Header switchTheme={setTheme} />
          {children}
        </section>
      </body>
    </html>
  );
}

export default RootLayout;
