'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/Input';
import { contact } from '@/constants';

function Contact() {
  return (
    <section className="w-11/12 sm:w-4/5 mb-5 rounded-xl dark:bg-boxes flex flex-wrap items-center justify-center lg:justify-start flex-col shadow-md shadow-boxes order-3 lg:w-11/12 lg:mb-0">
      <div className="w-10/12 lg:w-11/12">
        <h1 className="mt-7 mb-4 font-bold text-3xl lg:text-4xl">
          {contact.title}
        </h1>
        <p className="mt-4 mb-16 text-xl">
          {contact.subtitle}
        </p>
      </div>
      <motion.form
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-10/12 flex flex-col gap-10 justify-center lg:w-3/4 xl:w-3/5"
      >
        <Input label={contact.name} type="text" name={contact.name} />
        <Input label={contact.email} type="email" name={contact.email} />
        <Input label={contact.message} type="textArea" name={contact.message} />

        <button
          type="submit"
          className="w-28 h-12 mb-5 dark:bg-emerald-500 self-center rounded-xl text-lg font-medium dark:hover:bg-emerald-600"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}

export default Contact;
