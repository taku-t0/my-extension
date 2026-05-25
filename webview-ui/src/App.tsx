import { JSX, useState } from 'react'

export default function App() {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext: boolean = currentMove % 2 === 0;
  const currentSquares: (string | null)[] = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: (string | null)[], move: number) => {
    let description: string;
    if (move === currentMove) {
      description = 'You are at move #' + move;
    } else if (move > 0) {
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

function Board({ xIsNext, squares, onPlay, historyLength }:
  {
    xIsNext: boolean,
    squares: (string | null)[],
    onPlay: (nextSquares: (string | null)[]) => void,
    historyLength: number
  }) {
  function handleClick(i: number): void {
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
  let status: string;
  let isHighlight = false;
  if (winnerLine) {
    status = "Winner: " + squares[winnerLine[0]];
    isHighlight = true;
  } else if (historyLength === 10) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      {(function () {
        const list1: JSX.Element[] = []
        for (let i = 0; i < 3; i++) {
          list1.push(<div className="board-row" key={i}>
            {(function () {
              const list2 = []
              for (let j = 0; j < 3; j++) {
                if (isHighlight && (winnerLine![0] === j + 3 * i || winnerLine![1] === j + 3 * i || winnerLine![2] === j + 3 * i)) {
                  list2.push(<Square  key={j + 3 * i} value={squares[j + 3 * i]} onSquareClick={() => handleClick(j + 3 * i)} highlight={"highlight"} />);
                } else {
                  list2.push(<Square  key={j + 3 * i} value={squares[j + 3 * i]} onSquareClick={() => handleClick(j + 3 * i)} />);
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

function Square({ value, onSquareClick, highlight }:
  {
    value: string | null;
    onSquareClick: () => void;
    highlight?: string;
  }) {
  return <button className={`square ${highlight}`} onClick={onSquareClick}>{value}</button>;
}

function calculateWinnerLine(squares: (string | null)[]): number[] | null {
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
