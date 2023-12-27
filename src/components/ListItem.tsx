import React from "react";

function ListItem({ field, value, children }) {
  return (
    <li className="flex items-center py-2">
      <div className="flex h-full items-center text-xl mr-2 p-4 bg-buttons dark:bg-darkButtons rounded-full">
        <span className="">{children}</span>
      </div>
      <div className="pl-2">
        <p className="mb-0.5 break-words md:text-xl lg:text-lg">{field}</p>
        <p className="break-words md:text-lg lg:text-base">{value}</p>
      </div>
    </li>
  );
}

export default ListItem;
