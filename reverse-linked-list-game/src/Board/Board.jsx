import React, { useState } from 'react'
import './Board.css'

const Board = () => {
  const BOARD_SIZE = 10

  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0)),
  )

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="row">
          {row.map((cell, cellIdx) => (
            <div key={cellIdx} className="cell"></div>
          ))}
        </div>
      ))}

      <h1>Reverse Linked List</h1>
      <p>Snake Game</p>
    </div>
  )
}

export default Board
