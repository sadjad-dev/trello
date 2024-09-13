import React from "react";
import { IBoardProps } from "./type";

function Board(props: IBoardProps) {
  const { board } = props;
  return (
    <div className="w-[400px] p-4 bg-white shadow-md rounded-lg shrink-0">
      {board?.title}
    </div>
  );
}

export default Board;
