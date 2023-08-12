'use client';

import React from 'react';
import { projects } from '@/constants';
import ProjectCard from '@/components/ProjectCard';

function Projects() {
  return (
    <section className="h-full w-3/5 rounded-xl bg-boxes flex flex-wrap items-center justify-start flex-col shadow-md shadow-boxes">
      {projects.map((project) => (
        <ProjectCard
          name={project.name}
          src={project.src}
          description={project.description}
          techIcons={project.techUsed}
        />
      ))}
    </section>
  );
}

export default Projects;
