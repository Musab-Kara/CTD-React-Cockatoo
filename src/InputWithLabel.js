import React, { useEffect, useRef } from "react";

function InputWithLabel({ handleTitleChange, todoTitle, children, isFocused }) {
  const inputRef = React.useRef();

  const whitebox = {
    padding: "10px 2px",
    margin: "15px",
    textAlign: "center",
    border: "2px solid purple",
    borderRadius: "14px",
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        name="title"
        ref={inputRef}
        onChange={handleTitleChange}
        style={whitebox}
      ></input>
      <button type="submit">Add</button>
    </>
  );
}

export default InputWithLabel;
