import generateRandomId from "@/utils/mathUtil";
import { IBoard, ICard } from "./type";

export const initialBoards: IBoard[] = [
  {
    id: generateRandomId(),
    title: "board1",
  },
];

export const cards: ICard[] = [
  {
    id: generateRandomId(),
    title: "card1",
    parentBoard: initialBoards[0]?.id,
  },
  {
    id: generateRandomId(),
    title: "card2",
    parentBoard: initialBoards[0]?.id,
  },
  {
    id: generateRandomId(),
    title: "card3",
    parentBoard: initialBoards[0]?.id,
  },
  {
    id: generateRandomId(),
    title: "card4",
    parentBoard: initialBoards[0]?.id,
  },
];
