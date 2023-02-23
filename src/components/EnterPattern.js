import React from "react";
import AdPatternLock from "ad-pattern-lock";
import "ad-pattern-lock/dist/main.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Prompt from "./prompt/Prompt";
import Forgot from "./prompt/Forgot";
import "./styles.css";
import { Button, Box, Select, MenuItem, InputLabel } from "@material-ui/core";

const ConfirmPattern = () => {
  const localvar = localStorage.getItem("localpattern");
  console.log("this is localvar " + localvar);
  const [count, setCount] = useState(0);
  const [view, setView] = useState(0);
  const history = useHistory();
  const [entrpattern, setEntrpattern] = useState([]);
  if (view === 1) {
    return <Prompt text="Unlocked" link="/SetPattern" />;
  } else if (view === 2) {
    return <Prompt text="Incorect" link="/SetPattern" />;
  } else if (view === 3) {
    return <Forgot />;
  }
  const forgot = () => {
    const ans = 4050;
    setView(3);
  };
  const enter = () => {
    if (localvar === entrpattern) {
      setView(1);
    } else {
      setView(2);
    }
  };
  const reset = (e) => {
    e.preventDefault();
    history.push("/ResetPattern");
    // if (entrpattern === window.pattern) {
    //   e.preventDefault();
    //   alert("Unlocked");
    //   history.push("/EnterPattern");
    // } else {
    //   if (count === 4) {
    //     setView(2);
    //   } else {
    //     setCount(count + 1);
    //     console.log(count);
    //     alert("Try Again");

    //   }
    // }
  };
  return (
    <div className="paper">
      <h1 className="heading">Enter Pattern</h1>
      <div className="pattern">
        <AdPatternLock
          backgroundColor="black"
          onCompletePattern={(pattern) => {
            setEntrpattern(pattern);
            console.log("Enter pattern is " + entrpattern);
          }}
        />
      </div>
      <Box
        display="flex"
        className="button"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        {/* <InputLabel id="label">Options</InputLabel> */}
        <div className="options">
          <label for="select">Options</label>
          <Select labelId="label" id="select" value="options">
            <MenuItem value="10">
              <Button onClick={forgot}>Forgot pattern</Button>
            </MenuItem>
            <MenuItem value="20">
              <Button onClick={reset}>Reset pattern</Button>
            </MenuItem>
          </Select>
        </div>
        {entrpattern.length === 0 ? (
          <Button
            onClick={enter}
            variant="contained"
            disabled
            // className="button"
          >
            Enter
          </Button>
        ) : (
          <Button onClick={enter} variant="contained">
            Enter
          </Button>
        )}
      </Box>
    </div>
  );
};
export default ConfirmPattern;
