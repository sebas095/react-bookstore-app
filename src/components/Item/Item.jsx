import React from "react";
import "./Items.css";

const Item = ({ id, title, image, rating, onRemove, onUpdateRating }) => {
  const handleClick = (ev) => {
    console.log(id);
    onRemove(id);
  };

  const handleChangeRating = (ev) => {
    const rating = parseInt(ev.target.value);

    onUpdateRating({
      id,
      title,
      image,
      rating,
    });
  };

  return (
    <div className="item">
      <div className="image">
        <img src={process.env.PUBLIC_URL + "/img/" + image} width="100%" />
      </div>
      <div className="title">{title}</div>
      <div className="rating">
        <p>
          {[...Array(rating).fill(0)].map((star, index) => (
            <img
              src={process.env.PUBLIC_URL + "/img/star.png"}
              width="32"
              key={index}
            />
          ))}
        </p>
        Calificación:
        <select value={rating} onChange={handleChangeRating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="actions">
        <button onClick={handleClick}>Eliminar</button>
      </div>
    </div>
  );
};

export default Item;
