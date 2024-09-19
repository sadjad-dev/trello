import React, { useState } from "react";
import { IBoardProps } from "./type";
import Button from "@/components/Atoms/Button/Button";
import Card from "@/components/Molecules/Card/Card";
import generateRandomId from "@/utils/mathUtil";
import { ICard } from "@/components/Templates/Boards/type";

function Board(props: IBoardProps) {
  const { board, deleteBoard, editBoard, cards } = props;
  const [boardCards, setBoardCards] = useState<ICard[]>(cards);

  const addBoard = () => {
    const newBoradCards: ICard[] = [
      ...boardCards,
      { id: generateRandomId(), title: "new card", parentBoard: board?.id },
    ];
    setBoardCards(newBoradCards);
  };
  return (
    <div className="w-[400px] p-4 bg-white shadow-md rounded-lg shrink-0 relative h-full flex flex-col justify-between">
      <div className="flex gap-1 w-full">
        <Button
          className="w-32 h-8 flex"
          onClick={() => deleteBoard(board?.id)}
        >
          حذف برد
        </Button>
        <Button onClick={addBoard} variant="filledBlue">
          افزودن کارت جدید
        </Button>
      </div>
      <input
        defaultValue={board?.title}
        className="border border-black px-2"
        onChange={(e) => editBoard(board?.id, e.target.value)}
      />
      <div className="flex flex-col overflow-auto h-[calc(100%-100px)]">
        {boardCards?.map((card) => {
          return <Card key={card?.id} item={card} />;
        })}
      </div>
    </div>
  );
}

export default Board;
