import React from 'react';
import { proyectos } from '@/constants';

function Projects() {
  return (
    <>
      {proyectos.map((project) => (
        <article className="flex flex-col items-center justify-center w-1/2 h-1/2 list-none">
          <p className="text-xl font-semibold">{project.name}</p>
          <img className="h-3/5 w-3/5 mt-2 rounded-xl" src="/profile-light.webp" alt={project.preview} />
        </article>
      ))}
    </>
  );
}

export default Projects;
