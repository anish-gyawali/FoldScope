import React, { useState, useMemo } from "react";
import Table from "./Table";

const removeSpace = (text) => text.replace(/\s/g, "");

function Home() {
  const [text, setText] = useState("");

  const eachCharResult = useMemo(() => {
    let result = {};
    let textWithoutSpace = removeSpace(text);
    for (let i = 0; i < textWithoutSpace.length; i++) {
      if (result[textWithoutSpace[i]]) result[textWithoutSpace[i]]++;
      else result[textWithoutSpace[i]] = 1;
    }
    return result;
  }, [text]);

  return (
    <div className="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans ">
      <div className="row sm:flex">
        <div className="col sm:w-1/2 mr-10">
          <div className="box border rounded flex flex-col shadow bg-white">
            <div className="box__title bg-grey-lighter px-3 py-2 border-b">
              <h3 className="text-sm text-grey-darker font-medium">
                Enter text to Count character
              </h3>
            </div>
            <textarea
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter the text here...."
              className="text-grey-darkest flex-1 p-10 m-1 bg-transparent"
            ></textarea>
            <p>
              Total number of character :
              <span className=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {removeSpace(text).length}
              </span>
            </p>
          </div>

          {/* table to show character count */}
          <table className="min-w-full divide-y divide-gray-200 mt-10">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Character
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total count
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.keys(eachCharResult).map((el, idx) => (
                <Table id={idx} character={el} total={eachCharResult[el]} />
              ))}
            </tbody>
          </table>
        </div>

        {/* table to show most frequent entered character */}
        <div className="col sm:w-1/2 mt-10 mb-8">
          <span className=" px-10 py-4 inline-flex text-xl leading-5 font-bold  bg-indigo-500 text-white">
            Five most frequent characters in the text.
          </span>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Character
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total Repeated
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(eachCharResult)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([idx, value], i) => (
                  <Table id={idx} total={value} character={idx} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
