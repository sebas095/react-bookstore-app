import React, { useState, useRef } from "react";
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
  const [copyBooks, setCopyBooks] = useState(initialState);
  const inputSearch = useRef(null);

  const onSearch = (query) => {
    if (query === "") {
      setCopyBooks([...books]);
    } else {
      const temp = [...books];
      let res = temp.filter((item) =>
        item.title.toLowerCase().trim().includes(query)
      );
      setCopyBooks(res);
    }
  };

  const clearInputSearch = () => {
    if (inputSearch.current.value.trim() !== "") {
      inputSearch.current.value = "";
    }
  };

  const addItem = (item) => {
    let temp = [...books];
    const id = temp[temp.length - 1].id + 1;

    item["id"] = id;
    temp.push(item);

    setBooks(temp);
    setCopyBooks(temp);
    clearInputSearch();
  };

  const remove = (id) => {
    let temp = [...books];
    const res = temp.filter((item) => item.id !== id);

    setBooks(res);
    setCopyBooks(res);
    clearInputSearch();
  };

  const updateRating = (item) => {
    let temp = [...books];
    const index = temp.findIndex((x) => x.id === item.id);

    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    setBooks(temp);
    setCopyBooks(temp);
  };

  return (
    <div className="app">
      <Menu
        title="Book Store"
        ref={inputSearch}
        onSearch={onSearch}
        onAdd={addItem}
      />
      <List
        className="list"
        items={copyBooks}
        onRemove={remove}
        onUpdateRating={updateRating}
      />
    </div>
  );
}

export default App;
