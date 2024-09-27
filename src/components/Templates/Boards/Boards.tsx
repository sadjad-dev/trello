"use client";

import React from "react";
import { cards } from "./utils";
import Board from "@/components/Organisms/Board/Board";
import Button from "@/components/Atoms/Button/Button";
import { IBoard } from "./type";
import debounce from "lodash/debounce";
import generateRandomId from "@/utils/mathUtil";
import { useBoardStore } from "@/store/boardStore";

function Boards() {
  const { boards, setBoards, draggedCard, setDraggedCard } = useBoardStore();

  const addBoard = () => {
    const newBorads: IBoard[] = [
      ...boards,
      { id: generateRandomId(), title: "new board" },
    ];
    setBoards(newBorads);
  };

  const deleteBoard = (id: number | string) => {
    const newBorads: IBoard[] = [...boards]?.filter((item) => item?.id !== id);
    setBoards(newBorads);
  };

  const editBoard = debounce((id: number | string, title: string) => {
    const newBorads: IBoard[] = [...boards];
    const findIndex = newBorads?.findIndex((item) => item?.id === id);

    if (findIndex !== -1) {
      newBorads[findIndex] = { ...newBorads[findIndex], title: title };
      setBoards(newBorads);
    }
  }, 500);

  return (
    <div className="relative">
      <div className="flex flex-nowrap gap-8 py-10 overflow-x-auto border-gray-300 h-screen px-4">
        {boards?.map((board) => {
          return (
            <Board
              key={board?.id}
              board={board}
              deleteBoard={deleteBoard}
              editBoard={editBoard}
            />
          );
        })}
      </div>
      <Button
        onClick={addBoard}
        variant="filledBlue"
        className="absolute top-4 right-4"
      >
        افزودن برد جدید
      </Button>
    </div>
  );
}

export default Boards;
