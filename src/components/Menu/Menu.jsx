import React, { useState, forwardRef } from "react";
import "./Menu.css";
import Search from "../Search";
import PanelAdd from "../PanellAdd";

const Menu = forwardRef(({ title, onSearch, onAdd }, ref) => {
  const [newItemPanel, setNewItemPanel] = useState(false);

  const add = () => {
    setNewItemPanel(true);
  };

  const onCancel = () => {
    setNewItemPanel(false);
  };

  return (
    <div className="container">
      <div className="subcontainer">
        <div className="logo">{title}</div>
        <div className="search">
          <Search onSearch={onSearch} ref={ref} />
        </div>
        <div className="actions">
          <button onClick={add} className="button btn-blue">
            + Añadir nuevo libro
          </button>
        </div>
      </div>
      {newItemPanel ? <PanelAdd onHide={onCancel} onAdd={onAdd} /> : ""}
    </div>
  );
});

export default Menu;
