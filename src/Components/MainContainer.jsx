import { useState } from "react";
import Box from "./Box";

function MainContainer({ HandelGetTurn, winner }) {
  let idOfBox = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [turn, setTurn] = useState("o");

  return (
    <>
      <h3>Turn : {turn}</h3>
      <div className="Main_Container">
        {idOfBox.map((el) => (
          <Box
            key={el}
            id={el}
            turn={turn}
            setTurn={setTurn}
            HandelGetTurn={HandelGetTurn}
            winner={winner}
          />
        ))}
      </div>
      <div>
        {winner != "not" && (
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Restart
          </button>
        )}
      </div>
    </>
  );
}
export default MainContainer;
