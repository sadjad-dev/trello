import React from "react";
import { IBoardProps } from "./type";
import Button from "@/components/Atoms/Button/Button";
import Card from "@/components/Molecules/Card/Card";
import generateRandomId from "@/utils/mathUtil";
import { ICard } from "@/components/Templates/Boards/type";
import { useBoardStore } from "@/store/boardStore";

function Board(props: IBoardProps) {
  const { board, deleteBoard, editBoard } = props;
  const { boardCards, setBoardCards, draggedCard, setDraggedCard } =
    useBoardStore();

  const addBoard = () => {
    const newBoradCards: ICard[] = [
      ...boardCards,
      { id: generateRandomId(), title: "new card", parentBoard: board?.id },
    ];
    setBoardCards(newBoradCards);
  };

  const handleDragStart = (id: number | string) => {
    setDraggedCard(id);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();

    const newBoradCards: ICard[] = [...boardCards];
    const findIndex = newBoradCards?.findIndex(
      (item) => item?.id === draggedCard
    );

    if (findIndex !== -1) {
      newBoradCards[findIndex] = {
        ...newBoradCards[findIndex],
        parentBoard: board?.id,
      };
      setBoardCards(newBoradCards);
    }
  };

  return (
    <div
      className="w-[400px] p-4 bg-white shadow-md rounded-lg shrink-0 relative h-full flex flex-col justify-between"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
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
        {boardCards
          ?.filter((i) => i?.parentBoard === board?.id)
          ?.map((card) => {
            return (
              <Card
                key={card?.id}
                item={card}
                handleDragStart={handleDragStart}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Board;
