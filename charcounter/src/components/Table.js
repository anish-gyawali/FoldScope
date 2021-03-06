import React from "react";

function Table({ id, character, total }) {
  return (
    <tr key={id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{character}</div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <span className=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {total}
        </span>
      </td>
    </tr>
  );
}

export default Table;
