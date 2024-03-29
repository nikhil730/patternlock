import React from "react";
import AdPatternLock from "ad-pattern-lock";
import "ad-pattern-lock/dist/main.css";
import Prompt from "./prompt/Prompt";
import { useState } from "react";
import "./styles.css";
import { Button, Box } from "@material-ui/core";

const ConfirmPattern = () => {
  const [view, setView] = useState(0);
  const [confirmpattern, setConfirmpattern] = useState([]);
  if (view === 1) {
    return <Prompt text="Pattern successfully set" link="/EnterPattern" />;
  } else if (view === 2) {
    return <Prompt text="Pattern is Incorrect" link="/SetPattern" />;
  }
  const handleconclick = (e) => {
    if (confirmpattern === window.pattern) {
      localStorage.setItem("localpattern", confirmpattern);
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
      <h1 className="heading">Confirm Pattern</h1>
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
            Verify
          </Button>
        ) : (
          <Button onClick={handleconclick} variant="contained">
            Verify
          </Button>
        )}
      </Box>
    </div>
  );
};
export default ConfirmPattern;
