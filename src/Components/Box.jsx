function Box({ id, turn, setTurn, HandelGetTurn, winner }) {
  const handelClick = (e) => {
    if (turn == "o") {
      e.target.innerText = "o";
      e.target.disabled = true;
      setTurn("x");
      HandelGetTurn({ x: e.target.id });
    } else {
      e.target.innerText = "x";
      e.target.disabled = true;
      HandelGetTurn({ o: e.target.id });
      setTurn("o");
    }
  };
  console.log(winner);
  return (
    <>
      <button
        className="Box_Container"
        id={id}
        onClick={handelClick}
        disabled={winner != "not" && true}
      ></button>
    </>
  );
}
export default Box;
