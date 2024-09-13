import { IBoard } from "@/components/Templates/Boards/type";

export interface IBoardProps {
  board: IBoard;
  deleteBoard: (id: number) => void;
  editBoard: (id: number, title: string) => void;
}
