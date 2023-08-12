'use client';

import React from 'react';
import { technologies } from '@/constants';

function Home() {
  return (
    <section className="h-full w-3/5 rounded-xl bg-boxes flex flex-wrap items-center justify-start flex-col shadow-md shadow-boxes">
      <div className="w-11/12">
        <h1 className="mt-7 mb-4 font-bold text-4xl">{technologies.title}</h1>
        <p className="text-lg">{technologies.firstParagraph}</p>
        <p className="mb-6 mt-2 text-lg">{technologies.secondParagraph}</p>
      </div>
      <h3 className="mb-4 text-2xl font-semibold">{technologies.skillsTitle}</h3>
      <ol className="w-11/12 list-none flex flex-wrap justify-center">
        {technologies.skills.map((skill) => (
          <li key={skill.id} className="flex flex-col items-center justify-center w-[15%] rounded-xl mb-2 mr-1 p-2 bg-icons">
            <skill.icon className="text-3xl" />
            <p className="text-sm mt-2 font-medium">{skill.name}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-normal">{technologies.cvTitle}</h3>
      <a
        className="p-4 bg-turquoise rounded-xl mt-4 font-semibold"
        href="/CV.pdf"
        download="CV-Mauricio-Silvera"
      >
        {technologies.downloadButton}
      </a>
    </section>
  );
}

export default Home;
