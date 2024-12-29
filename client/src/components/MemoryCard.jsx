import React from "react";
import feed from "../assets/feed.jpg";
import { useState } from "react";

function MemoryCard() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function toggleDropDown() {
    setIsDropDownOpen(!isDropDownOpen);
  }
  return (
    <>
      <div className="space-y-8 mt-10 p-2 sm:p-0">
        <div className="space-y-6 max-w-5xl mx-auto border rounded-lg shadow-lg p-8 border-gray-700 dark:bg-gray-800">
          {/* Title and Date */}
          <div className="pb-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Memory Title
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                23 December 2021
              </p>
            </div>
            <div className="relative">
              <button
                id="dropdownMenuIconHorizontalButton"
                onClick={toggleDropDown}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden={true}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>

              {isDropDownOpen && (
                <div className="z-10 absolute right-0 bg-gray-700 mt-2 divide-y divide-gray-100 rounded-lg w-44">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:underline">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-red-400 hover:underline"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
              <img
                className="w-full md:w-96 rounded-lg"
                src={feed}
                alt="Memory"
              />
            </div>

            {/* Description */}
            <div className="flex-grow">
              <p className="leading-relaxed text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                cum ipsa nobis incidunt minima! Rerum vel maiores nostrum
                tempora vitae nemo facere deleniti ipsa at quisquam. Expedita
                quaerat adipisci totam ducimus beatae odit, rerum accusamus
                architecto iste odio? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Accusamus ex quasi.
              </p>
            </div>
          </div>

          {/* Share Button */}
          <div className="pt-4 justify-end flex">
            <button className="px-6 py-2 text-sm font-medium border-[#ffdc00] border rounded-lg text-white hover:bg-[#ffdc00] hover:text-gray-900 transition-all">
              Share Memory
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemoryCard;
