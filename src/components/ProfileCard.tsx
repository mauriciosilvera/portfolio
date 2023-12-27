"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ListItem from "./ListItem";
import { profileData } from "@/constants";
import { ThemeContext } from "@/app/theme-provider";

function ProfileCard() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-11/12 rounded-2xl sm:w-3/5 lg:w-11/12 mt-[150px] md:mt-[240px] lg:mt-0 bg-boxes shadow-slate-300 dark:bg-darkBoxes flex flex-col items-center justify-center pt-[50px] md:pt-[100px] lg:pt-[150px] relative shadow-md dark:shadow-darkBoxes lg:ml-3"
    >
      <img
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute top-[-150px] md:top-[-210px] lg:top-[-170px]"
        src={`./profile-${isDarkMode ? "dark" : "light"}.webp`}
        alt="yop"
      />

      <h1 className="text-3xl md:text-3xl font-bold py-2">
        {profileData.name}
      </h1>
      <h2 className="text-lg md:text-xl font-semibold">{profileData.job}</h2>

      <div className="flex">
        {profileData.socialNetwork.map((item) => (
          <Link key={item.id} href={item.link}>
            <item.icon className="text-4xl md:text-5xl m-2" />
          </Link>
        ))}
      </div>

      <ol className="flex flex-col mb-4">
        {profileData.aboutMe.map((row) => (
          <ListItem key={row.id} field={row.key} value={row.value}>
            <row.icon />
          </ListItem>
        ))}
      </ol>
    </motion.section>
  );
}

export default ProfileCard;
