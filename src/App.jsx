import "./App.css";
import MainContainer from "./Components/MainContainer";
import { useEffect, useRef, useState } from "react";
function App() {
  const winning = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ];
  const [xturn, setxturn] = useState([]);
  const [yturn, setyturn] = useState([]);
  const [winner, setWinner] = useState("not");
  const HandelGetTurn = (obj) => {
    typeof obj.x != "undefined"
      ? setxturn([...xturn, parseInt(obj.x)])
      : setyturn([...yturn, parseInt(obj.o)]);
  };
  useEffect(() => {
    console.log(xturn);
    for (let element of winning) {
      if (element.every((el) => xturn.includes(el))) {
        setWinner("X Win The Game");
        break;
      } else if (element.every((el) => yturn.includes(el))) {
        setWinner("O Win The Game");
        break;
      } else {
        let array = [...xturn, ...yturn];
        if (array.length == 9) {
          setWinner("Match Is Draw !");
        }
      }
    }
  }, [xturn, yturn]);

  return (
    <>
      <div className="main">
        <h1>Tic-Toi-Tic</h1>

        {winner != "not" ? <h1>{winner} </h1> : null}
        <MainContainer HandelGetTurn={HandelGetTurn} winner={winner} />
      </div>
    </>
  );
}
export default App;
