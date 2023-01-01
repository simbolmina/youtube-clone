import React from "react";
import Card from "../components/Card";

function Home() {
  return (
    <div className="flex justify-between flex-wrap p-6 bg-[#181818] dark:bg-[#aaa] h-full">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Home;
