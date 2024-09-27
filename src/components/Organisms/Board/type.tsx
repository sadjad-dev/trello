import { IBoard } from "@/components/Templates/Boards/type";

export interface IBoardProps {
  board: IBoard;
  deleteBoard: (id: number | string) => void;
  editBoard: (id: number | string, title: string) => void;
}
