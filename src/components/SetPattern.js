import React from "react";
import AdPatternLock from "ad-pattern-lock";
import "ad-pattern-lock/dist/main.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
import { Button, Box } from "@material-ui/core";

const SetPattern = () => {
  const [pattern, setpattern] = useState([]);
  window.pattern = [];
  const history = useHistory();
  const handleclick = (e) => {
    e.preventDefault();
    history.push("/ConfirmPattern");
  };
  console.log(pattern);
  return (
    <div className="paper">
      <h1 className="heading">Set Pattern</h1>
      <div className="pattern">
        <AdPatternLock
          backgroundColor="black"
          onCompletePattern={(pattern) => {
            setpattern(pattern);
            window.pattern = pattern;
            console.log("Set pattern is " + window.pattern);
          }}
        />
      </div>
      <Box display="flex" justifyContent="right" className="button">
        {pattern.length === 0 ? (
          <Button onClick={handleclick} variant="contained" disabled>
            Confirm Pattern
          </Button>
        ) : (
          <Button onClick={handleclick} variant="contained">
            Confirm Pattern
          </Button>
        )}
      </Box>
    </div>
  );
};
export default SetPattern;
