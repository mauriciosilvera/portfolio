interface Props {
  label: string;
  type: string;
  name: string;
}

function Input({ label, type, name }: Props) {
  return (
    <div className="relative z-0">
      {type === "textArea" ? (
        <textarea
          required
          id={name}
          name={name}
          className="block py-2 w-full bg-transparent border-0 border-b-2 border-gray-800 dark:text-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-buttons peer dark:focus:border-darkButtons resize-none"
          placeholder=""
        />
      ) : (
        <input
          required
          type={type}
          id={name}
          name={name}
          className="block py-2 w-full bg-transparent border-0 border-b-2 border-gray-800 dark:text-gray-300 appearance-none focus:outline-none focus:ring-0 peer focus:border-buttons dark:focus:border-darkButtons"
          placeholder=""
        />
      )}

      <label
        htmlFor={name}
        className="absolute text-base text-gray-800 dark:text-gray-300 duration-300 transform -translate-y-8 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 lg:text-xl"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
