'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants';
import ProjectCard from '@/components/ProjectCard';

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-11/12 mb-5 sm:w-4/5 rounded-xl bg-boxes flex flex-wrap items-center justify-center flex-col shadow-md shadow-boxes lg:w-11/12  lg:flex-row lg:mb-0"
    >
      {projects.map((project) => (
        <ProjectCard
          name={project.name}
          src={project.src}
          description={project.description}
          techIcons={project.techUsed}
        />
      ))}
    </motion.section>
  );
}

export default Projects;
