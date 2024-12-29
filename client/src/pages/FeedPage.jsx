import React from "react";
import NavBar from "../components/NavBar.jsx";
import ActionCall from "../components/ActionCall.jsx";
import MemoryCard from "../components/MemoryCard.jsx";

function FeedPage() {
  return (
    <>
      <NavBar />
      <ActionCall />
      <div className="pb-10">
        <MemoryCard />
      </div>
    </>
  );
}

export default FeedPage;
