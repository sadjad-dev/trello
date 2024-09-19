import React from "react";
import { ICardProp } from "./type";

function Card(props: ICardProp) {
  const { item } = props;
  return (
    <div className="shadow-lg rounded-lg bg-white p-4 w-4/5 mx-auto h-24 my-2">
      {item?.title}
    </div>
  );
}

export default Card;
