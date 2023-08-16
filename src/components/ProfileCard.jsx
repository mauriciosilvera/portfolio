'use client';

import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { BsPinMap } from 'react-icons/bs';
import Link from 'next/link';
import ListItem from './ListItem';

function ProfileCard({ data }) {
  const {
    name, job, email, phone, linkedIn, gitHub, location,
  } = data;

  return (
    <section className="w-11/12 rounded-2xl sm:w-3/5 lg:w-11/12 mt-[150px] md:mt-[240px] lg:mt-0 bg-boxes flex flex-col items-center justify-center pt-[50px] md:pt-[100px] lg:pt-[150px] relative shadow-md shadow-boxes lg:ml-3">
      <img
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] absolute top-[-150px] md:top-[-210px] lg:top-[-170px]"
        src="/profile-dark.webp"
        alt="yop"
      />

      <h1 className="text-3xl md:text-3xl font-bold py-2">{name}</h1>
      <h2 className="text-lg md:text-xl font-semibold">{job}</h2>

      <div className="flex">
        <Link href={gitHub}>
          <AiFillGithub className="text-4xl md:text-5xl m-2" />
        </Link>
        <Link href={linkedIn}>
          <AiFillLinkedin className="text-4xl md:text-5xl m-2" />
        </Link>
      </div>

      <ol className="flex flex-col mb-4">
        <ListItem field="Email:" value={email}>
          <HiOutlineMail />
        </ListItem>
        <ListItem field="Phone:" value={phone}>
          <HiOutlinePhone />
        </ListItem>
        <ListItem field="Location:" value={location}>
          <BsPinMap />
        </ListItem>
      </ol>
    </section>
  );
}

export default ProfileCard;
