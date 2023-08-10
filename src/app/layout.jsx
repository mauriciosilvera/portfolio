import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import { profileData } from '@/constants';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen max-w-screen overflow-x-hidden flex items-center justify-center flex-col bg-violet">
        <Header />
        <div className="w-4/5 h-3/5 flex justify-between">
          <ProfileCard data={profileData} />
          <section className="h-full w-3/5 rounded-xl bg-boxes flex flex-wrap items-center justify-center">
            {children}
          </section>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
