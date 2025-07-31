import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function BoardRow({ children }) {
  return <div className="board-row">{children}</div>;
}

export default function Board() {
  return (
    <>
      <BoardRow>
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </BoardRow>
      <BoardRow>
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </BoardRow>
      <BoardRow>
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </BoardRow>
    </>
  );
}
