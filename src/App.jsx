import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function BoardRow({ children }) {
  return <div className="board-row">{children}</div>;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [disables, setDisable] = useState(Array(9).fill(false));

  function handleClick(i) {
    const nextSquares = [...squares];
    const remainingDisables = [...disables];
    if (xIsNext && disables[i] === false) {
      nextSquares[i] = "X";
      setXIsNext(!xIsNext);
    } else if (!xIsNext && disables[i] === false) {
      nextSquares[i] = "O";
      setXIsNext(!xIsNext);
    }

    remainingDisables[i] = true;

    // Update UI and play's turn
    setSquares(nextSquares);
    setDisable(remainingDisables);
  }
  return (
    <>
      <BoardRow>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </BoardRow>
      <BoardRow>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </BoardRow>
      <BoardRow>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </BoardRow>
    </>
  );
}
