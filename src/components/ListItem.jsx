import React from 'react';

function ListItem({ field, value, children }) {
  return (
    <li className="flex items-center py-2">
      <div className="flex h-full items-center text-2xl md:text-3xl p-2">
        {children}
      </div>
      <div className="pl-2">
        <p className="mb-0.5 md:text-xl lg:text-lg">{field}</p>
        <p className="md:text-xl lg:text-lg">{value}</p>
      </div>
    </li>
  );
}

export default ListItem;
