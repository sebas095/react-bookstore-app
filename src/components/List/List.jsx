import React from "react";
import "./List.css";
import Item from "../Item/Item";

const List = ({ items, onRemove, onUpdateRating }) => (
  <div className="list">
    {items.length > 0 ? (
      items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          rating={item.rating}
          onRemove={onRemove}
          onUpdateRating={onUpdateRating}
        />
      ))
    ) : (
      <div
        style={{
          margin: "100px auto 0",
          display: "inline-block",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3>No se encontraron resultados...</h3>
      </div>
    )}
  </div>
);

export default List;
