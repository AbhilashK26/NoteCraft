import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const temp = { title: "", text: "" };

  const [items, setitems] = useState([]);
  const [curritem, setcurritem] = useState(temp);

  function handleitem(event) {
    const { name, value } = event.target;
    setcurritem((prevvalue) => {
      if (name === "title") {
        return {
          [name]: value,
          text: prevvalue.text,
        };
      } else if (name === "content") {
        return {
          title: prevvalue.title,
          text: value,
        };
      }
    });
  }

  function handleclick(event) {
    event.preventDefault();
    setitems((prevvalue) => {
      return [...prevvalue, curritem];
    });
    setcurritem(temp);
  }

  function handledelete(id) {
    setitems((prevvalue) => {
      return prevvalue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function mapnotes(note, index) {
    const { title, text } = note;
    return (
      <Note
        key={index}
        id={index}
        title={title}
        content={text}
        onCheckedDelete={handledelete}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea
        onInputChecked={handleitem}
        onTextareaChecked={handleitem}
        onButtonChecked={handleclick}
        value1={curritem.title}
        value2={curritem.text}
      />
      {items.map(mapnotes)}
      <Footer />
    </div>
  );
}

export default App;
