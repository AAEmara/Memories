import React from "react";
import { useState } from "react";

const CreateMemoryForm = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };
  return (
    <>
      <div className="md:pt-24 pt-20 pb-10">
        <h1 className="text-center text-white md:text-4xl text-2xl mt-10 pb-10">
          Creating a memory
        </h1>
        <div className="space-y-6 max-w-4xl md:mx-auto rounded-lg shadow-lg p-6 mx-4 bg-gray-800">
          <form action="">
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="shadow-sm border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:shadow-sm-light bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Great Day out with Friends"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Memory Description
              </label>
              <textarea
                id="Description"
                rows="4"
                className="block p-2.5 mb-2 w-full text-sm rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:shadow-sm-light bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Describe Your Memory Here..."
              ></textarea>
            </div>
            <div>
              <div className="md:flex justify-between items-center md:space-x-4 mt-4">
                <div className="w-full">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="memory_image"
                  >
                    Upload Memory
                  </label>
                  <div>
                    <div className="relative">
                      <input
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        aria-describedby="memory_image"
                        id="memory_image"
                        type="file"
                        onChange={handleFileChange}
                      />
                      <button
                        type="button"
                        className="block w-full text-sm p-2.5 border rounded-lg focus:outline-none  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:shadow-sm-light bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={() =>
                          document.getElementById("memory_image").click()
                        }
                      >
                        Choose File
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-white md:mt-7 mt-4 md:text-left text-center">
                  <p>or</p>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="url"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    URL
                  </label>
                  <input
                    type="url"
                    id="url"
                    className="shadow-sm border text-sm rounded-lg block w-full p-2.5 dark:shadow-sm-light dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:shadow-sm-light bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Add your image URL here"
                  />
                </div>
              </div>
              {fileName && (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Selected file: {fileName}
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="focus:outline-none text-gray-900 bg-[#ffdc00] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-14 py-2.5 me-2 mb-2 mt-8 dark:focus:ring-yellow-900"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateMemoryForm;
