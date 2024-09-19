export interface IBoard {
  id: number | string;
  title: string;
}

export interface ICard {
  id: number | string;
  title: string;
  parentBoard: number | string;
}
