import React from "react";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Forgot = () => {
  const history = useHistory();
  const clicked = (e) => {
    var x = document.getElementById("myText").value;
    console.log(x);
    if (x === "4050") {
      e.preventDefault();
      history.push("./ResetPattern");
    } else {
      e.preventDefault();
      window.location.reload(false);
      history.push("./EnterPattern");
    }
  };
  return (
    <Paper className="promt-paper">
      <h1 className="text forgot">What is 40+50</h1>
      <input autoComplete="off" type="text" id="myText" className="input" />
      <button onClick={clicked}>Enter</button>
    </Paper>
  );
};
export default Forgot;
