import React from 'react';
import Input from '@/components/Input';

function Contact() {
  return (
    <section className="w-11/12 sm:w-4/5 mb-5 rounded-xl dark:bg-boxes flex flex-wrap items-center justify-center lg:justify-start flex-col shadow-md shadow-boxes order-3 lg:w-11/12 lg:mb-0">
      <div className="w-10/12 lg:w-11/12">
        <h1 className="mt-7 mb-4 font-bold text-3xl lg:text-4xl">Contact me! ✉</h1>
        <p className="mt-4 mb-16 text-xl">
          If you are interested in my services or wanna share your favourite music album with me, send me a message! 😉
        </p>
      </div>
      <form
        className="w-10/12 flex flex-col gap-10 justify-center lg:w-3/4 xl:w-3/5"
      >
        <Input label="Name" type="text" name="name" />
        <Input label="Email" type="email" name="email" />
        <Input label="Message" type="textArea" name="message" />

        <button
          type="submit"
          className="w-28 h-12 mb-5 dark:bg-emerald-500 self-center rounded-xl text-lg font-medium dark:hover:bg-emerald-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
