import React from "react";
import AdPatternLock from "ad-pattern-lock";
import "ad-pattern-lock/dist/main.css";
import Prompt from "./prompt/Prompt";
import { useState } from "react";
import "./styles.css";
import { Button, Box } from "@material-ui/core";

const ResetPattern = () => {
  const [view, setView] = useState(0);
  const [confirmpattern, setConfirmpattern] = useState([]);
  if (view === 1) {
    return <Prompt text="Set the New Pattern" link="/SetPattern" />;
  } else if (view === 2) {
    return <Prompt text="Pattern is Incorrect" link="/EnterPattern" />;
  }
  const handleconclick = (e) => {
    if (confirmpattern === window.pattern) {
      e.preventDefault();
      console.log("here");
      setView(1);
    } else {
      e.preventDefault();
      console.log("here");
      setView(2);
    }
  };
  return (
    <div className="paper">
      <h1 className="heading">Entern the Correct Pattern to Reset.</h1>
      <div className="pattern">
        <AdPatternLock
          backgroundColor="black"
          onCompletePattern={(pattern) => {
            setConfirmpattern(pattern);
            console.log("Confirm pattern is " + confirmpattern);
          }}
        />
      </div>
      <Box display="flex" justifyContent="right" className="button">
        {confirmpattern.length === 0 ? (
          <Button onClick={handleconclick} disabled variant="contained">
            Next
          </Button>
        ) : (
          <Button onClick={handleconclick} variant="contained">
            Next
          </Button>
        )}
      </Box>
    </div>
  );
};
export default ResetPattern;
