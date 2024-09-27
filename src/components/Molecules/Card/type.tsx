import { ICard } from "@/components/Templates/Boards/type";

export interface ICardProp {
  item: ICard;
  handleDragStart: (id: number | string) => void;
}
