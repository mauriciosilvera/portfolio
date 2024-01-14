"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import ProjectCard from "@/components/ProjectCard";
import { ThemeContext } from "../theme-provider";

function Projects() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-11/12 mb-5 sm:w-4/5 rounded-xl bg-boxes shadow-slate-300 dark:bg-darkBoxes flex flex-wrap items-center justify-center flex-col shadow-md dark:shadow-darkBoxes lg:w-11/12  lg:flex-row lg:mb-0 lg:h-[60vh] lg:overflow-x-hidden lg:overflow-y-scroll"
    >
      {projects.map((project) => (
        <ProjectCard
          name={project.name}
          src={isDarkMode ? project.srcDark : project.srcLight}
          description={project.description}
          techIcons={project.techUsed}
        />
      ))}
    </motion.section>
  );
}

export default Projects;
