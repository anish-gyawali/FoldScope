import React from "react";

function Home() {
  return (
    <div class="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans ">
      <div class="row sm:flex">
        <div class="col sm:w-1/2">
          <div class="box border rounded flex flex-col shadow bg-white">
            <div class="box__title bg-grey-lighter px-3 py-2 border-b">
              <h3 class="text-sm text-grey-darker font-medium">
                Enter text to Count character
              </h3>
            </div>
            <textarea
              placeholder="Enter the text here...."
              class="text-grey-darkest flex-1 p-10 m-1 bg-transparent"
            ></textarea>
          </div>
          {/* table to show character count */}

          <div class="flex flex-col text-left">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Character
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total count
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="ml-4">
                              <div class="text-sm font-medium text-gray-900">
                                name of character
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            20
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
