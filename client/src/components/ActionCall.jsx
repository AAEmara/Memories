import React from "react";
import sunshine from "../assets/sunshine.png";

function ActionCall() {
  return (
    <>
      <div className="grid grid-cols-12 place-items-center pt-20">
        <div className="col-span-8 col-start-3 flex flex-col items-center">
          <a
            href={"/create"}
            className="mt-10 mb-2 md:px-10 px-4 md:text-3xl text-2xl md:py-6 py-4 bg-transparent border-2 border-[#ffdc00] hover:bg-[#ffdc00] hover:text-gray-900 transition-all text-white rounded-lg"
          >
            Create a Memory Now!
            <span className="ps-4">
              <img src={sunshine} alt="" className="inline h-10 w-10" />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default ActionCall;
