import React from 'react';
import { technologies } from '@/constants';

function Home() {
  return (
    <>
      <div className="w-11/12">
        <h1 className="mb-3 font-bold">{technologies.title}</h1>
        <p className="mb-4">{technologies.text}</p>
        <h3 className="mb-3">Technologies I worked with </h3>
      </div>
      <ol className="w-11/12 list-none flex flex-wrap justify-center">
        {technologies.skills.map((skill) => (
          <li className="flex flex-col items-center justify-center w-[15%] rounded-xl mb-2 border mr-1 p-2">
            <img className="h-7 w-7" src={skill.icon} alt={skill.name} />
            <p className="text-sm mt-2 font-medium">{skill.name}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Home;
