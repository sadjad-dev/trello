import React from "react";
import { ICardProp } from "./type";

function Card(props: ICardProp) {
  const { item, handleDragStart } = props;
  return (
    <div
      className="shadow-lg rounded-lg bg-white p-4 w-4/5 mx-auto h-24 my-2"
      draggable
      onDragStart={() => handleDragStart(item?.id)}
    >
      {item?.title}
    </div>
  );
}

export default Card;
