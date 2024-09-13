import React from "react";
import { boards } from "./utils";
import Board from "@/components/Organisms/Board/Board";

function Boards() {
  return (
    <div className="flex flex-nowrap gap-8 py-10 overflow-x-auto border-gray-300 h-screen px-4">
      {boards?.map((board) => {
        return <Board board={board} />;
      })}
    </div>
  );
}

export default Boards;
