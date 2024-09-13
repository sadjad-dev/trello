import React from "react";
import { IBoardProps } from "./type";
import Button from "@/components/Atoms/Button/Button";

function Board(props: IBoardProps) {
  const { board, deleteBoard, editBoard } = props;
  return (
    <div className="w-[400px] p-4 bg-white shadow-md rounded-lg shrink-0 relative">
      <Button
        className="w-32 h-8 absolute top-1 right-1 flex"
        onClick={() => deleteBoard(board?.id)}
      >
        حذف برد
      </Button>
      <input
        defaultValue={board?.title}
        className="border border-black px-2"
        onChange={(e) => editBoard(board?.id, e.target.value)}
      />
    </div>
  );
}

export default Board;
