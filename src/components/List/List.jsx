import React from "react";
import "./List.css";
import Item from "../Item/Item";

const List = ({ items, onRemove, onUpdateRating }) => (
  <div className="list">
    {items.map((item) => (
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        rating={item.rating}
        onRemove={onRemove}
        onUpdateRating={onUpdateRating}
      />
    ))}
  </div>
);

export default List;
