import React, { useState } from "react";

const PanellAdd = ({ onAdd, onHide }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(1);

  const cancelAction = (ev) => {
    onHide();
  };

  const onChangeTitle = (ev) => {
    setTitle(ev.target.value);
  };

  const onChangeImage = (ev) => {
    setImage(ev.target.value);
  };

  const onChangeRating = (ev) => {
    const rating = parseInt(ev.target.value);
    setRating(rating);
  };

  const createItem = (ev) => {
    ev.preventDefault();
    onAdd({ title, image, rating });
    cancelAction();
  };

  return (
    <div className="new-item-panel-container">
      <div className="new-item-panel">
        <form onSubmit={createItem}>
          <p>
            <label>Título del libro</label>
            <br />
            <input
              type="text"
              name="title"
              className="input"
              onChange={onChangeTitle}
            />
          </p>

          <p>
            <label>Nombre de imagen</label>
            <br />
            <input
              type="text"
              name="image"
              className="input"
              onChange={onChangeImage}
            />
          </p>

          <p>
            <label>Calificación</label>
            <br />
            <select onChange={onChangeRating}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <input
            type="submit"
            className="button btn-blue"
            value="Registrar libro"
          />
          <button className="button btn-normal" onClick={onHide}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PanellAdd;
