'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerOptions } from '@/constants';

function Header() {
  const path = usePathname();

  return (
    <header className="w-4/5 h-1/5 flex justify-end items-center mb-5">
      <ul className="w-2/5 h-full flex items-center rounded-xl justify-around bg-boxes">
        {headerOptions.map((option) => (
          <li
            className={`list-none ${path === option.link ? 'bg-turquoise rounded-xl' : ''}`}
            key={option.id}
          >
            <Link className="flex flex-col items-center justify-center p-5 rounded-xl font-bold" href={option.link}>
              <option.icon className="text-2xl mb-1" />
              <p>{option.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
