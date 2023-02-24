import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import "./promtstyles.css";

const Prompt = (props) => {
  const history = useHistory();
  const text = props.text;
  const link = props.link;
  const from = props.from;
  const counting = props.counting;
  console.log(link);
  const handleclick = (e) => {
    if (from === link) {
      e.preventDefault();
      window.location.reload(false);
    }
    e.preventDefault();
    history.push(link);
  };
  if (counting) {
  } else {
    return (
      <Paper className="promt-paper">
        <button onClick={handleclick} className="button">
          &#10060;
        </button>
        <h1 className="text">{text}</h1>
      </Paper>
    );
  }
};
export default Prompt;
