import React, { useEffect, useRef } from "react";

function InputWithLabel({ handleTitleChange, todoTitle, children, isFocused }) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        name="title"
        autoFocus={isFocused}
        onChange={handleTitleChange}
      ></input>
      <button>Add</button>
    </>
  );
}

export default InputWithLabel;
