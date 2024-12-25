import React from "react";
import feed from "../assets/feed.jpg";

function ActionCall() {
  return (
    <>
      <div className="grid grid-cols-12 place-items-center bg-slate-950">
        <div className="col-span-8 col-start-3 flex flex-col items-center">
          <img
            src={feed}
            alt="A happy sun between clouds"
            className="h-48 md:h-64 lg:h-96 xl:h-[450px] w-auto rounded-lg mt-5"
          />
          <button className="mt-2 mb-2 px-4 py-2 bg-amber-400 text-slate rounded-lg">
            Create a Memory Now!
          </button>
        </div>
      </div>
    </>
  );
}

export default ActionCall;
