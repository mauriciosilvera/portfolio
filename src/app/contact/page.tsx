"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Input from "@/components/Input";
import { contact } from "@/constants";

function Contact() {
  const [sended, setSended] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setSended(true);
      });
  };

  if (sended) {
    return (
      <section className="w-11/12 mb-5 py-10 rounded-xl bg-boxes shadow-slate-300 dark:bg-darkBoxes flex flex-wrap items-center justify-center flex-col shadow-md dark:shadow-darkBoxes sm:w-4/5 order-3 lg:w-11/12 lg:mb-0">
        <h1 className="text-md p-5 font-semibold text-center lg:text-2xl lg:px-10">
          {contact.sendedMessage}
        </h1>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-11/12 sm:w-4/5 mb-5 rounded-xl bg-boxes shadow-slate-300 dark:bg-darkBoxes flex flex-wrap items-center justify-center flex-col shadow-md dark:shadow-darkBoxes order-3 lg:w-11/12 lg:justify-start lg:mb-0"
    >
      <div className="w-10/12 lg:w-11/12">
        <h1 className="mt-7 mb-4 font-bold text-3xl lg:text-4xl">
          {contact.title}
        </h1>
        <p className="text-md md:text-lg mt-4 mb-16">{contact.subtitle}</p>
      </div>
      <form
        ref={form}
        className="w-10/12 flex flex-col gap-8 justify-center lg:w-3/4 xl:w-3/5"
        onSubmit={sendEmail}
      >
        <Input label={contact.nameLabel} type="text" name={contact.name} />
        <Input label={contact.emailLabel} type="email" name={contact.email} />
        <Input
          label={contact.messageLabel}
          type="textArea"
          name={contact.message}
        />
        <button
          type="submit"
          className="p-4 mb-4 bg-buttons self-center rounded-xl text-lg font-medium dark:bg-darkButtons dark:hover:bg-emerald-600"
        >
          {contact.buttonLabel}
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
