'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <motion.article
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col items-center justify-start sm:w-10/12 list-none last:mb-4 lg:last:mb-0 lg:w-1/2 lg:h-1/2"
      onMouseOver={showOverlay}
      onFocus={showOverlay}
      onMouseLeave={hideOverlay}
    >
      <p className="text-xl lg:text-2xl font-semibold mt-4">{name}</p>
      <div className="w-10/12 mt-3 relative">
        <img className="rounded-xl object-cover mb-2" src={src} alt={src} />
        {isHovered && (
          <div className="absolute flex flex-col items-center justify-center rounded-xl top-0 left-0 w-full h-full bg-black/70">
            <ul className="w-4/5 flex items-center justify-center gap-3">
              {techIcons.map((tech) => (
                <tech.icon className="text-4xl p-1 2xl:text-6xl bg-turquoise rounded-full" />
              ))}
            </ul>
            <p className="w-10/12 text-sm xl:text-base text-white text-center mt-3">{description}</p>
          </div>
        )}
      </div>

    </motion.article>
  );
}

export default ProjectCard;
