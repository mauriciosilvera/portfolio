"use client";

import React from "react";
import { motion } from "framer-motion";
import { technologies } from "@/constants";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-11/12 sm:w-4/5 mb-5 rounded-xl bg-boxes shadow-slate-300 dark:bg-darkBoxes flex flex-wrap items-center justify-center lg:justify-start flex-col shadow-md dark:shadow-darkBoxes order-3 lg:w-11/12 lg:mb-0"
    >
      <div className="w-10/12 lg:w-11/12">
        <h1 className="mt-7 mb-4 font-bold text-3xl lg:text-4xl">
          {technologies.title}
        </h1>
        <p className="text-md md:text-lg">{technologies.firstParagraph}</p>
        <p className="text-md md:text-lg mb-6 mt-2">
          {technologies.secondParagraph}
        </p>
      </div>
      <h3 className="mb-4 text-xl md:text-2xl font-semibold">
        {technologies.skillsTitle}
      </h3>
      <ol className="w-11/12 list-none flex flex-wrap justify-center">
        {technologies.skills.map((skill) => (
          <li
            key={skill.id}
            className="flex flex-col items-center justify-center w-1/5 lg:w-[15%] rounded-xl mb-2 mr-1 p-2 bg-icons dark:bg-darkIcons"
          >
            <skill.icon className="text-2xl md:text-3xl" />
            <p className="text-xs md:text-sm mt-2 font-medium">{skill.name}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-6 text-lg md:text-xl font-normal">
        {technologies.cvTitle}
      </h3>
      <a
        className="p-3 md:p-4 bg-buttons dark:bg-darkButtons rounded-xl my-4 font-semibold dark:hover:bg-emerald-600"
        href="/CV.pdf"
        download="CV-Mauricio-Silvera"
      >
        {technologies.downloadButton}
      </a>
    </motion.section>
  );
}

export default Home;
