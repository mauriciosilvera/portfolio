import React from 'react';

function Input({ label, type, name }) {
  return (
    <div className="relative z-0">
      {type === 'textArea'
        ? (
          <textarea
            required
            type={type}
            id={name}
            name={name}
            className="block py-2 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-indigo-400 peer dark:focus:border-emerald-500 resize-none"
            placeholder=""
          />
        )
        : (
          <input
            required
            type={type}
            id={name}
            name={name}
            className="block py-2 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer dark:focus:border-emerald-500"
            placeholder=""
          />
        )}

      <label
        htmlFor={name}
        className="absolute text-base text-gray-300  duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0  dark:peer-focus:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 lg:text-xl"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
