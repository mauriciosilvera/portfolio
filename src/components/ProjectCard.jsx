'use client';

import React, { useState } from 'react';

function ProjectCard(props) {
  const {
    name, src, description, techIcons,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  const showOverlay = () => {
    setIsHovered(true);
  };

  const hideOverlay = () => {
    setIsHovered(false);
  };

  return (
    <article
      className="flex flex-col items-center justify-start sm:w-10/12 list-none last:mb-4 lg:last:mb-0 lg:w-1/2 lg:h-1/2"
      onMouseOver={showOverlay}
      onFocus={showOverlay}
      onMouseLeave={hideOverlay}
    >
      <p className="text-xl lg:text-2xl font-semibold mt-4">{name}</p>
      <div className="h-4/5 w-4/5 mt-3 relative">
        <img className="rounded-xl object-cover" src={src} alt={src} />
        {isHovered && (
        <div className="absolute flex flex-col items-center justify-center rounded-xl top-0 left-0 w-full h-full bg-black/70">
          <ul className="w-4/5 flex items-center justify-center gap-3">
            {techIcons.map((tech) => (
              <tech.icon className="text-6xl p-2 bg-turquoise rounded-full" />
            ))}
          </ul>
          <p className="w-4/5 text-white mt-3">{description}</p>
        </div>
        )}
      </div>

    </article>
  );
}

export default ProjectCard;
