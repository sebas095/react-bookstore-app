import React, { useState } from "react";
import "./App.css";
import Menu from "../Menu/Menu";
import List from "../List/List";

const initialState = [
  {
    id: 0,
    rating: 4,
    title: "Harry Potter y el cáliz de fuego",
    image: "libro01.jpg",
  },
  {
    id: 1,
    rating: 3,
    title: "The shining",
    image: "libro02.jpg",
  },
  { id: 2, rating: 5, title: "Código Da Vinci", image: "libro03.jpg" },
  { id: 3, rating: 5, title: "El principito", image: "libro04.jpg" },
  { id: 4, rating: 5, title: "Sobrenatural", image: "libro05.jpg" },
];

function App() {
  const [books, setBooks] = useState(initialState);

  const onSearch = (query) => {
    if (query === "") {
      setBooks(initialState);
    } else {
      const temp = [...books];
      let res = temp.filter((item) => item.title.toLowerCase().includes(query));
      setBooks(res);
    }
  };

  const addItem = (item) => {
    let temp = [...books];
    const id = temp[temp.length - 1].id + 1;

    item["id"] = id;
    temp.push(item);

    setBooks(temp);
  };

  const remove = (id) => {
    let temp = [...books];
    const res = temp.filter((item) => item.id !== id);
    setBooks(res);
  };

  const updateRating = (item) => {
    let temp = [...books];
    const index = temp.findIndex((x) => x.id === item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    setBooks(temp);
  };

  return (
    <div className="app">
      <Menu title="Book Store" onSearch={onSearch} onAdd={addItem} />
      <List
        className="list"
        items={books}
        onRemove={remove}
        onUpdateRating={updateRating}
      />
    </div>
  );
}

export default App;
