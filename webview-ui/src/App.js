import { useState } from 'react'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move === currentMove){
      description = 'You are at move #' + move;
    }else if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} historyLength={history.length} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Board({ xIsNext, squares, onPlay, historyLength}) {
  function handleClick(i) {
    if (squares[i] || calculateWinnerLine(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares)
  }

  const winnerLine = calculateWinnerLine(squares);
  let status;
  let isHighlight = false;
  if (winnerLine) {
    status = "Winner: " + squares[winnerLine[0]];
    isHighlight = true;
  } else if(historyLength === 10) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      {(function () {
        const list1 = []
        for (let i = 0; i < 3; i++) {
          list1.push(<div className="board-row">
            {(function () {
              const list2 = []
              for (let j = 0; j < 3; j++) {
                if(isHighlight && ( winnerLine[0] === j + 3 * i || winnerLine[1] === j + 3 * i || winnerLine[2] === j + 3 * i)){
                  list2.push(<Square value={squares[j + 3 * i]} onSquareClick={() => handleClick(j + 3 * i)} highlight={"highlight"}/>);
                }else{
                  list2.push(<Square value={squares[j + 3 * i]} onSquareClick={() => handleClick(j + 3 * i)} />);
                }
              }
              return list2;
            }())}
          </div>);
        }
        return list1;
      }())}
    </div>
  );
}

function Square({ value, onSquareClick, highlight }) {
  return <button className={`square ${highlight}`} onClick={onSquareClick}>{value}</button>;
}

function calculateWinnerLine(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  return null;
}