import { create } from "zustand";
import { IBoard, ICard } from "./type";

interface IBoardStore {
  boards: IBoard[];
  setBoards: (boards: IBoard[]) => void;
  boardCards: ICard[];
  setBoardCards: (cardboardCards: ICard[]) => void;
  draggedCard: number | string | null;
  setDraggedCard: (draggedCard: number | string | null) => void;
}

const useBoardStore = create<IBoardStore>((set) => ({
  boards: [],
  setBoards: (content) => set({ boards: content }),
  boardCards: [],
  setBoardCards: (content) => set({ boardCards: content }),
  draggedCard: null,
  setDraggedCard: (content) => set({ draggedCard: content }),
}));

export default useBoardStore;
