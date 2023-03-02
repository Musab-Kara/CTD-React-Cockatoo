import React, { useEffect, useRef } from "react";

function InputWithLabel({ handleTitleChange, todoTitle, children, isFocused }) {
  const inputRef = React.useRef();
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
      ></input>
      <button>Add</button>
    </>
  );
}

export default InputWithLabel;
