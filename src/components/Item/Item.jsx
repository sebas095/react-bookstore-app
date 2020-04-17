import React, { useState, useEffect } from "react";
import "./Items.css";

const Item = ({ id, title, image, rating, onRemove, onUpdateRating }) => {
  const [state, setState] = useState({
    id: null,
    title: "",
    image: "",
    rating: 1,
    stars: [],
  });

  useEffect(() => {
    setState({
      id,
      title,
      image,
      rating: parseInt(rating),
      stars: Array(parseInt(rating)).fill(1),
    });
  }, [id, title, image, rating]);

  const handleClick = (ev) => {
    console.log(id);
    onRemove(id);
  };

  const handleChangeRating = (ev) => {
    const rating = parseInt(ev.target.value);

    setState({
      ...state,
      rating,
      stars: Array(rating).fill(1),
    });

    onUpdateRating({
      id: state.id,
      title: state.title,
      image: state.image,
      rating: rating,
    });
  };

  return (
    <div className="item">
      <div className="image">
        <img
          src={process.env.PUBLIC_URL + "/img/" + state.image}
          width="100%"
        />
      </div>
      <div className="title">{state.title}</div>
      <div className="rating">
        <p>
          {state.stars.map((star, index) => (
            <img
              src={process.env.PUBLIC_URL + "/img/star.png"}
              width="32"
              key={index}
            />
          ))}
        </p>
        Calificación:
        <select value={state.rating} onChange={handleChangeRating}>
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
