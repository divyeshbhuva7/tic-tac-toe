import { Select } from "@mantine/core";
import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";
import { useViewportSize } from "@mantine/hooks";

function App() {
  const { width, height } = useViewportSize();

  const [user, setUser] = useState("O");
  const [winner, setWinner] = useState("");

  const [boxVal, setBoxVal] = useState([
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
    { val: "" },
  ]);

  function victory() {
    if (
      boxVal[0].val !== "" &&
      boxVal[1].val !== "" &&
      boxVal[2].val !== "" &&
      boxVal[0].val === boxVal[1].val &&
      boxVal[0].val === boxVal[2].val
    ) {
      setWinner(boxVal[0].val);
    }
    if (
      boxVal[3].val !== "" &&
      boxVal[4].val !== "" &&
      boxVal[5].val !== "" &&
      boxVal[3].val === boxVal[4].val &&
      boxVal[3].val === boxVal[5].val
    ) {
      setWinner(boxVal[3].val);
    }
    if (
      boxVal[6].val !== "" &&
      boxVal[7].val !== "" &&
      boxVal[8].val !== "" &&
      boxVal[6].val === boxVal[7].val &&
      boxVal[6].val === boxVal[8].val
    ) {
      setWinner(boxVal[6].val);
    }

    if (
      boxVal[0].val !== "" &&
      boxVal[3].val !== "" &&
      boxVal[6].val !== "" &&
      boxVal[0].val === boxVal[3].val &&
      boxVal[0].val === boxVal[6].val
    ) {
      setWinner(boxVal[0].val);
    }
    if (
      boxVal[1].val !== "" &&
      boxVal[4].val !== "" &&
      boxVal[7].val !== "" &&
      boxVal[1].val === boxVal[4].val &&
      boxVal[1].val === boxVal[7].val
    ) {
      setWinner(boxVal[1].val);
    }
    if (
      boxVal[2].val !== "" &&
      boxVal[5].val !== "" &&
      boxVal[8].val !== "" &&
      boxVal[2].val === boxVal[5].val &&
      boxVal[2].val === boxVal[8].val
    ) {
      setWinner(boxVal[2].val);
    }

    if (
      boxVal[0].val !== "" &&
      boxVal[1].val !== "" &&
      boxVal[8].val !== "" &&
      boxVal[0].val === boxVal[1].val &&
      boxVal[0].val === boxVal[8].val
    ) {
      setWinner(boxVal[0].val);
    }
    if (
      boxVal[2].val !== "" &&
      boxVal[4].val !== "" &&
      boxVal[6].val !== "" &&
      boxVal[2].val === boxVal[4].val &&
      boxVal[2].val === boxVal[6].val
    ) {
      setWinner(boxVal[2].val);
    }
  }

  const handleClick = (idx) => {
    if (boxVal[idx].val === "") {
      setBoxVal([...boxVal, (boxVal[idx].val = user)]);
    }
    user === "O" ? setUser("X") : setUser("O");

    victory(idx);
  };

  boxVal.splice(9, boxVal.length);

  const handleReset = () => {
    setWinner("");
    setBoxVal([
      { val: "" },
      { val: "" },
      { val: "" },
      { val: "" },
      { val: "" },
      { val: "" },
      { val: "" },
      { val: "" },
      { val: "" },
    ]);
    setUser("O");
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h2>Tic-Tac-Toe</h2>
        <div className="btn Restart-btn" onClick={handleReset}>
          <span>Restart</span>
        </div>
      </nav>

      <div className="user-selector">
        <div className="select-user">
          <Select
            placeholder="Select starter"
            variant="default"
            w={150}
            data={["O", "X"]}
            onChange={(e) => setUser(e)}
          />
          <p className="user-description">Default Starter: O</p>
        </div>
      </div>

      <div className="Gamepad">
        <div className="Gamebody">
          {boxVal.map((bx, idx) => (
            <div className="boxex" onClick={() => handleClick(idx)} key={idx}>
              {bx.val}
            </div>
          ))}
        </div>
        {winner !== "" ? (
          <p className="winner-announcement">"{winner}" wins the game...!!</p>
        ) : null}
      </div>
      {winner !== "" ? <Confetti width={width} height={height} /> : null}
    </div>
  );
}

export default App;
