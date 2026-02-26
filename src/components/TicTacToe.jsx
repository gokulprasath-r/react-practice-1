import { useState } from "react";

function TicTacToe() {
    const [xTurn, setXTurn] = useState(true);
    const [boardValues, setBoardValues] = useState(["", "", "", "", "", "", "", "", ""])

    const winnings = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    const handleClick = (index) => {
        if (xTurn) {
            setBoardValues((prev) =>
                prev.map((item, i) => (i === index ? "O" : item))
            );
            setXTurn(false);
        }
        else {
            setBoardValues((prev) =>
                prev.map((item, i) => (i === index ? "X" : item))
            );
            setXTurn(true);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Tic Tac Toe</h1>

                <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleClick(i)}
                            id="btn"
                            className="w-20 h-20 text-3xl font-bold border rounded-md hover:bg-gray-100"
                        >
                            {boardValues[i]}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TicTacToe;
