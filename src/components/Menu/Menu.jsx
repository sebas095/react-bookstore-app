import React, { useState } from "react";
import "./Menu.css";
import Search from "../Search";
import PanelAdd from "../PanellAdd";

const Menu = ({ title, onSearch, onAdd }) => {
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
          <Search onSearch={onSearch} />
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
};

export default Menu;
