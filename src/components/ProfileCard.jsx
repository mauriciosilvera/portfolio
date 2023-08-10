'use client';

import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Link from 'next/link';
import ListItem from './ListItem';

function ProfileCard({ data }) {
  const {
    name, job, email, phone, linkedIn, gitHub, buttonLabel,
  } = data;

  return (
    <section className="w-1/3 rounded-2xl bg-boxes flex flex-col items-center justify-center pt-[150px] relative">
      <img
        className="w-[300px] h-[300px] mb-4 absolute top-[-150px]"
        src="/profile-dark.webp"
        alt="yop"
      />

      <h1 className="text-xl py-3">{name}</h1>
      <h2 className="text-l font-medium">{job}</h2>

      <div className="flex">
        <Link href={gitHub}>
          <AiFillGithub className="text-5xl m-2" />
        </Link>
        <Link href={linkedIn}>
          <AiFillLinkedin className="text-5xl m-2" />
        </Link>
      </div>

      <ol className="w-4/5 flex flex-col mb-4">
        <ListItem field="Email:" value={email}>
          <HiOutlineMail />
        </ListItem>
        <ListItem field="Phone:" value={phone}>
          <HiOutlinePhone />
        </ListItem>
      </ol>

      <a
        className="p-4 bg-turquoise rounded-xl mt-4"
        href="/CV.pdf"
        download="CV-Mauricio-Silvera"
      >
        {buttonLabel}
      </a>
    </section>
  );
}

export default ProfileCard;
