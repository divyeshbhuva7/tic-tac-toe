import { Select, Text } from "@mantine/core";
import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";
import { useViewportSize } from "@mantine/hooks";

function App() {
  const { width, height } = useViewportSize();
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

  const [user, setUser] = useState("O");
  const [userSelection, setUserSelection] = useState("O");
  const [disableUserSelect, setDisableUserSelect] = useState(false);

  const [winner, setWinner] = useState("");

  function victory() {
    //  horizontal cases:-------------------------------
    if (
      boxVal[0].val !== "" &&
      boxVal[1].val !== "" &&
      boxVal[2].val !== "" &&
      boxVal[0].val === boxVal[1].val &&
      boxVal[1].val === boxVal[2].val &&
      boxVal[2].val === boxVal[0].val
    ) {
      setWinner(boxVal[0].val);
    }
    if (
      boxVal[3].val !== "" &&
      boxVal[4].val !== "" &&
      boxVal[5].val !== "" &&
      boxVal[3].val === boxVal[4].val &&
      boxVal[4].val === boxVal[5].val &&
      boxVal[5].val === boxVal[3].val
    ) {
      setWinner(boxVal[3].val);
    }
    if (
      boxVal[6].val !== "" &&
      boxVal[7].val !== "" &&
      boxVal[8].val !== "" &&
      boxVal[6].val === boxVal[7].val &&
      boxVal[7].val === boxVal[8].val &&
      boxVal[8].val === boxVal[6].val
    ) {
      setWinner(boxVal[6].val);
    }

    //  vertical cases:-------------------------------
    if (
      boxVal[0].val !== "" &&
      boxVal[3].val !== "" &&
      boxVal[6].val !== "" &&
      boxVal[0].val === boxVal[3].val &&
      boxVal[3].val === boxVal[6].val &&
      boxVal[6].val === boxVal[0].val
    ) {
      setWinner(boxVal[0].val);
    }
    if (
      boxVal[1].val !== "" &&
      boxVal[4].val !== "" &&
      boxVal[7].val !== "" &&
      boxVal[1].val === boxVal[4].val &&
      boxVal[4].val === boxVal[7].val &&
      boxVal[7].val === boxVal[1].val
    ) {
      setWinner(boxVal[1].val);
    }
    if (
      boxVal[2].val !== "" &&
      boxVal[5].val !== "" &&
      boxVal[8].val !== "" &&
      boxVal[2].val === boxVal[5].val &&
      boxVal[5].val === boxVal[8].val &&
      boxVal[8].val === boxVal[2].val
    ) {
      setWinner(boxVal[2].val);
    }

    //  cross cases:-------------------------------

    if (
      boxVal[0].val !== "" &&
      boxVal[4].val !== "" &&
      boxVal[8].val !== "" &&
      boxVal[0].val === boxVal[4].val &&
      boxVal[4].val === boxVal[8].val &&
      boxVal[8].val === boxVal[0].val
    ) {
      setWinner(boxVal[0].val);
    }
    if (
      boxVal[2].val !== "" &&
      boxVal[4].val !== "" &&
      boxVal[6].val !== "" &&
      boxVal[2].val === boxVal[4].val &&
      boxVal[4].val === boxVal[6].val &&
      boxVal[6].val === boxVal[2].val
    ) {
      setWinner(boxVal[2].val);
    }
  }

  const handleClick = (idx) => {
    setDisableUserSelect(true);

    if (winner === "" && boxVal[idx].val === "") {
      setBoxVal([...boxVal, (boxVal[idx].val = user)]);
    } else {
      return;
    }
    user === "O" ? setUser("X") : setUser("O");
    victory(idx);
  };

  boxVal.splice(9, boxVal.length);

  function changeUser(e) {
    setUser(e);
    setUserSelection(e);
  }

  const handleReset = () => {
    setWinner("");
    setUserSelection("O");
    setUser("O");
    setDisableUserSelect(false);

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
            label="Select starter:"
            mt="xs"
            placeholder="Select starter"
            variant="default"
            w={180}
            value={userSelection}
            data={["O", "X"]}
            onChange={(e) => changeUser(e)}
            disabled={disableUserSelect}
          />
          {/* <p className="user-description">Default Starter: O</p> */}
        </div>
      </div>

      <div className="Gamepad">
        <div className="Gamebody">
          {boxVal.map((bx, idx) => (
            <div className="boxex" onClick={() => handleClick(idx)} key={idx}>
              {boxVal[idx].val === "O" ? (
                <Text c="violet">{bx.val}</Text>
              ) : (
                <Text c="red">{bx.val}</Text>
              )}
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
