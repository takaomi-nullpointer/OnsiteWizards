import React from "react";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">ホームページ</h1>
      <Button onClick={() => alert("クリックされた！")}>クリック</Button>
    </div>
  );
};

export default Home;
