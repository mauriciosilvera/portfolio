import React from 'react';

function Contact() {
  return (
    <section className="w-11/12 sm:w-4/5 mb-5 rounded-xl dark:bg-boxes flex flex-wrap items-center justify-center lg:justify-start flex-col shadow-md shadow-boxes order-3 lg:w-11/12 lg:mb-0">
      <h2 className="text-4xl font-medium">Contact Me !</h2>
      <p className="mx-2 mt-4 mb-16 text-xl">
        If you are interested in my services send me a message and I will
        contact you
      </p>
      <form
        className="flex flex-col mx-auto gap-10  justify-center"
      >
        {/* <Input label="Name" type="text" name={"name"} />
        <Input label="Email" type="email" name={"email"} />

        <Input label="Message" type="text" name={"message"} /> */}
        {/* <Input
          key="outside"
          type="email"
          label="Email"
          labelPlacement="outside"
          description="outside"
        /> */}
        <button
          type="submit"
          className="w-28 h-12 bg-indigo-400 dark:bg-emerald-500 self-center rounded-2xl text-white text-lg font-medium transition-all dark:hover:bg-emerald-600  hover:bg-indigo-500"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
