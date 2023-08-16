'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerOptions } from '@/constants';

function Header() {
  const path = usePathname();

  return (
    <header className="flex w-9/12 my-5 justify-center sm:w-3/5 lg:w-4/5 xl:w-3/5 lg:min-h-[20%] lg:justify-end items-center">
      <ul className="w-11/12 p-3 md:py-5 md:w-4/5 h-full flex items-center rounded-xl justify-around dark:bg-boxes shadow-md shadow-boxes">
        {headerOptions.map((option) => (
          <li
            className={`list-none ${path === option.link ? 'bg-turquoise rounded-xl' : ''}`}
            key={option.id}
          >
            <Link className="flex flex-col items-center justify-center p-3 md:p-5 rounded-xl font-bold" href={option.link}>
              <option.icon className="text-2xl md:text-3xl mb-1" />
              <p className="">{option.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
